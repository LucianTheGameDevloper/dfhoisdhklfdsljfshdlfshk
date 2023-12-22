//init the interstitial 
window.adsLoaded = true;
window.isWatchingRV = false;
let iAd; //Inter Ads
let rAd; //RV Ads

async function initAds() {
    
    while (window.cpmstarAPI === undefined) {
        await sleep(500)
    }
    
    setCOPPAFlag(true);
    
    await initInterAds();
}

window.setCOPPAFlag = (isEnabled) => {
    window.cpmstarAPI({kind: "coppa" ,value: isEnabled});
}

async function initInterAds() {
    window.cpmstarAPI(async function (api) {
		api.game.setSubpoolID(1);
        iAd = new api.game.InterstitialView("interstitial");
        iAd.addEventListener("ad_opened", function (e) {
            iAdPause(); //Pause the game when ad is open
        });

        iAd.addEventListener("ad_closed", function (e) {
            setTimeout(function () {
                iAdUnpause(); //Unpause when ad closed.
            }, 700);
            iAd.load(); //Preload another ad.
        });

        iAd.addEventListener("load_failed", function(e) {
            //console.warn("Inter Ad failed to load:" + JSON.stringify(e));
            onAdLoadFailed()
        });

        iAd.addEventListener("loaded", function() {
            console.warn("Inter Ad loaded");
        });

        await sleep(1000);
        iAd.load();
    });

    function iAdPause() {
        unityAdStartedCallback()
    }
    function iAdUnpause() {
        unityAdFinishedCallback("true")
    }
}

window.requestNewAd = () => {
    if(iAd && !iAd.isLoaded()) {
        console.warn("No inter ad available")
    }
    if (iAd && iAd.isLoaded()) {
        iAd.show(); //Show loaded ad   
    }
    else {
        if (iAd) iAd.load(); //If no ad available, load another      
        unityAdFinishedCallback("false")
    }
}


// This function calls Unity to tell the ad started
function unityAdStartedCallback() {
    try {
        if (window.unityInstance) {
            
        }
    }
    catch (error) {
        console.log(error);
    }
}

// This function calls Unity to tell the ad finished
function unityAdFinishedCallback(state) {
    try {
        if (window.unityInstance) {
            window.unityInstance.SendMessage('PersistantObjects', 'OnWebCallback', state);
        }
    }
    catch (error) {
        console.log(error);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function onAdLoadFailed() {
    await sleep(10000);
    iAd.load();
}
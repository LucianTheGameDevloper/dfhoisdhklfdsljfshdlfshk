var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var colour="white";
		var sparkles=500;
		var x=ox=400;
		var y=oy=300;
		var swide=800;
		var shigh=600;
		var sleft=sdown=0;
		var tiny=new Array();
		var star=new Array();
		var starv=new Array();
		var starx=new Array();
		var stary=new Array();
		var tinyx=new Array();
		var tinyy=new Array();
		var tinyv=new Array();
		window.onload=function() { if (document.getElementById) {
		  var i, rats, rlef, rdow;
		  for (var i=0; i<sparkles; i++) {
		    var rats=createDiv(3, 3);
		    rats.style.visibility="hidden";
		    rats.style.zIndex="999";
		    document.body.appendChild(tiny[i]=rats);
		    starv[i]=0;
		    tinyv[i]=0;
		    var rats=createDiv(5, 5);
		    rats.style.backgroundColor="transparent";
		    rats.style.visibility="hidden";
		    rats.style.zIndex="999";
		    var rlef=createDiv(1, 5);
		    var rdow=createDiv(5, 1);
		    rats.appendChild(rlef);
		    rats.appendChild(rdow);
		    rlef.style.top="2px";
		    rlef.style.left="0px";
		    rdow.style.top="0px";
		    rdow.style.left="2px";
		    document.body.appendChild(star[i]=rats);
		  }
		  set_width();
		  sparkle();
		}}
		function sparkle() {
		  var c;
		  if (Math.abs(x-ox)>1 || Math.abs(y-oy)>1) {
		    ox=x;
		    oy=y;
		    for (c=0; c<sparkles; c++) if (!starv[c]) {
		      star[c].style.left=(starx[c]=x)+"px";
		      star[c].style.top=(stary[c]=y+1)+"px";
		      star[c].style.clip="rect(0px, 5px, 5px, 0px)";
		      star[c].childNodes[0].style.backgroundColor=star[c].childNodes[1].style.backgroundColor=(colour=="random")?newColour():colour;
		      star[c].style.visibility="visible";
		      starv[c]=50;
		      break;
		    }
		  }
		  for (c=0; c<sparkles; c++) {
		    if (starv[c]) update_star(c);
		    if (tinyv[c]) update_tiny(c);
		  }
		  setTimeout("sparkle()", 40);
		}

		function update_star(i) {
		  if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
		  if (starv[i]) {
		    stary[i]+=1+Math.random()*3;
		    starx[i]+=(i%5-2)/5;
		    if (stary[i]<shigh+sdown) {
		      star[i].style.top=stary[i]+"px";
		      star[i].style.left=starx[i]+"px";
		    }
		    else {
		      star[i].style.visibility="hidden";
		      starv[i]=0;
		      return;
		    }
		  }
		  else {
		    tinyv[i]=50;
		    tiny[i].style.top=(tinyy[i]=stary[i])+"px";
		    tiny[i].style.left=(tinyx[i]=starx[i])+"px";
		    tiny[i].style.width="2px";
		    tiny[i].style.height="2px";
		    tiny[i].style.backgroundColor=star[i].childNodes[0].style.backgroundColor;
		    star[i].style.visibility="hidden";
		    tiny[i].style.visibility="visible"
		  }
		}
		function update_tiny(i) {
		  if (--tinyv[i]==25) {
		    tiny[i].style.width="1px";
		    tiny[i].style.height="1px";
		  }
		  if (tinyv[i]) {
		    tinyy[i]+=1+Math.random()*3;
		    tinyx[i]+=(i%5-2)/5;
		    if (tinyy[i]<shigh+sdown) {
		      tiny[i].style.top=tinyy[i]+"px";
		      tiny[i].style.left=tinyx[i]+"px";
		    }
		    else {
		      tiny[i].style.visibility="hidden";
		      tinyv[i]=0;
		      return;
		    }
		  }
		  else tiny[i].style.visibility="hidden";
		}
		document.onmousemove=mouse;
		function mouse(e) {
		  if (e) {
		    y=e.pageY;
		    x=e.pageX;
		  }
		  else {
		    set_scroll();
		    y=event.y+sdown;
		    x=event.x+sleft;
		  }
		}
		window.onscroll=set_scroll;
		function set_scroll() {
		  if (typeof(self.pageYOffset)=='number') {
		    sdown=self.pageYOffset;
		    sleft=self.pageXOffset;
		  }
		  else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
		    sdown=document.body.scrollTop;
		    sleft=document.body.scrollLeft;
		  }
		  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
		    sleft=document.documentElement.scrollLeft;
		    sdown=document.documentElement.scrollTop;
		  }
		  else {
		    sdown=0;
		    sleft=0;
		  }
		}
		window.onresize=set_width;
		function set_width() {
		  var sw_min=999999;
		  var sh_min=999999;
		  if (document.documentElement && document.documentElement.clientWidth) {
		    if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
		    if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
		  }
		  if (typeof(self.innerWidth)=='number' && self.innerWidth) {
		    if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
		    if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
		  }
		  if (document.body.clientWidth) {
		    if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
		    if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
		  }
		  if (sw_min==999999 || sh_min==999999) {
		    sw_min=800;
		    sh_min=600;
		  }
		  swide=sw_min;
		  shigh=sh_min;
		}
		function createDiv(height, width) {
		  var div=document.createElement("div");
		  div.style.position="absolute";
		  div.style.height=height+"px";
		  div.style.width=width+"px";
		  div.style.overflow="hidden";
		  return (div);
		}
		function newColour() {
		  var c=new Array();
		  c[0]=255;
		  c[1]=Math.floor(Math.random()*256);
		  c[2]=Math.floor(Math.random()*(256-c[1]/2));
		  c.sort(function(){return (0.5 - Math.random());});
		  return ("rgb("+c[0]+", "+c[1]+", "+c[2]+")");
		}

}
/*
     FILE ARCHIVED ON 03:14:11 Aug 23, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:30:04 Aug 30, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 162.971
  exclusion.robots: 0.103
  exclusion.robots.policy: 0.091
  cdx.remote: 0.077
  esindex: 0.011
  LoadShardBlock: 108.235 (3)
  PetaboxLoader3.datanode: 137.252 (4)
  load_resource: 966.364
  PetaboxLoader3.resolve: 870.365
*/
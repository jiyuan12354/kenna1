(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{176:function(t,e,i){},178:function(t,e,i){"use strict";i(176)},179:function(t,e,i){"use strict";i.r(e);i(94);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],a=!0,n=!1,o=void 0;try{for(var r,s=t[Symbol.iterator]();!(a=(r=s.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){n=!0,o=t}finally{try{a||null==s.return||s.return()}finally{if(n)throw o}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}i(37);var n={name:"VueLazyYoutubeVideo",props:{url:{type:String,required:!0,validator:function(t){return 1!==t.indexOf("https://www.youtube.com/watch?")}},alt:{type:String,default:"Video alternative image"},buttonLabel:{type:String,default:"Play video"},aspectRatio:{type:String,default:"16:9",validator:function(t){return/^\d+:\d+$/.test(t)}}},data:function(){return{isVideoLoaded:!1}},computed:{id:function(){return/^https:\/\/www\.youtube\.com\/watch\?v=(.+)$/.exec(this.url)[1]},styleObj:function(){return{paddingBottom:this.getPaddingBottom()}}},methods:{generateURL:function(){return"https://www.youtube.com/embed/".concat(this.id).concat("?rel=0&showinfo=0&autoplay=1")},clickHandler:function(){this.isVideoLoaded=!0,this.$emit("videoLoaded")},getPaddingBottom:function(){var t=a(this.aspectRatio.split(":"),2),e=t[0],i=t[1];return"".concat(i/e*100,"%")}}},o=(i(178),i(0)),r=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"y-video",on:{click:t.clickHandler}},[i("div",{staticClass:"y-video__inner",style:t.styleObj},[t.isVideoLoaded?i("iframe",{staticClass:"y-video__media",attrs:{src:t.generateURL(),allowfullscreen:"",allow:"autoplay"}}):[i("picture",[i("source",{attrs:{srcset:"https://i.ytimg.com/vi_webp/"+t.id+"/maxresdefault.webp",type:"image/webp"}}),t._v(" "),i("img",{staticClass:"y-video__media",attrs:{src:"https://i.ytimg.com/vi/4JS70KB9GS0/maxresdefault.jpg",alt:t.alt}})]),t._v(" "),i("button",{staticClass:"y-video__button",attrs:{type:"button","aria-label":t.buttonLabel}},[i("svg",{attrs:{viewBox:"0 0 68 48",version:"1.1",width:"100%",height:"100%"}},[i("path",{staticClass:"y-video__button-shape",attrs:{d:"M66.5 7.7c-.8-2.9-2.5-5.4-5.4-6.2C55.8.1 34 0 34 0S12.2.1 6.9 1.6c-3 .7-4.6 3.2-5.4 6.1a89.6 89.6 0 0 0 0 32.5c.8 3 2.5 5.5 5.4 6.3C12.2 47.9 34 48 34 48s21.8-.1 27.1-1.6c3-.7 4.6-3.2 5.4-6.1C68 35 68 24 68 24s0-11-1.5-16.3z"}}),t._v(" "),i("path",{staticClass:"y-video__button-icon",attrs:{d:"M45 24L27 14v20"}})])])]],2)])}),[],!1,null,"35a3cc9e",null);e.default=r.exports}}]);
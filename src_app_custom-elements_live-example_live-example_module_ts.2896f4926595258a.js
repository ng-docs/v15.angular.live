"use strict";(self.webpackChunkangular_cn=self.webpackChunkangular_cn||[]).push([["src_app_custom-elements_live-example_live-example_module_ts"],{8517:(A,m,p)=>{p.r(m),p.d(m,{LiveExampleModule:()=>S});var l=p(4364),u=p(8485),t=p(2316);function s(n,o){const e="string"==typeof o?o:o.find(i=>n.hasOwnProperty(i.toLowerCase()));return void 0===e?void 0:n[e.toLowerCase()]}function r(n,o=!1){return void 0===n?o:"false"!==n.trim()}const x=["content"];function g(n,o){if(1&n&&(t.TgZ(0,"p"),t._uU(1," \u4f60\u8fd8\u53ef\u4ee5 "),t.TgZ(2,"a",8),t._uU(3,"\u4e0b\u8f7d\u8fd9\u4e2a\u4f8b\u5b50"),t.qZA(),t._uU(4,"\u3002 "),t.qZA()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("href",e.zip,t.LSH)}}function h(n,o){if(1&n&&(t.TgZ(0,"span"),t.TgZ(1,"div",5),t._UZ(2,"aio-embedded-stackblitz",6),t.qZA(),t.YNc(3,g,5,1,"p",7),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.s9C("title",e.title),t.xp6(1),t.Q6J("src",e.stackblitz),t.xp6(1),t.Q6J("ngIf",e.enableDownload)}}function b(n,o){if(1&n&&(t.TgZ(0,"span"),t.TgZ(1,"a",9),t._uU(2),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.s9C("title",e.title),t.Q6J("href",e.zip,t.LSH),t.xp6(1),t.Oqu(e.title)}}function E(n,o){if(1&n&&(t.TgZ(0,"span"),t._uU(1," / "),t.TgZ(2,"a",8),t._uU(3,"\u4e0b\u8f7d\u8303\u4f8b"),t.qZA(),t.qZA()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("href",e.zip,t.LSH)}}function _(n,o){if(1&n&&(t.TgZ(0,"span"),t.TgZ(1,"a",10),t._uU(2),t.qZA(),t.YNc(3,E,4,1,"span",7),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.s9C("title",e.title),t.Q6J("href",e.stackblitz,t.LSH),t.xp6(1),t.Oqu(e.title),t.xp6(1),t.Q6J("ngIf",e.enableDownload)}}const w=["*"],C=["iframe"],v=u.bL+"live-examples/",Z=u.bL+"zips/";let L=(()=>{class n{constructor(e,i){const a=function(n){const o=n instanceof t.SBq?n.nativeElement.attributes:n.attributes,e={};for(const i of o)e[i.name.toLowerCase()]=i.value;return e}(e),c=this.getExampleDir(a,i.path(!1)),f=this.getStackblitzName(a);this.mode=this.getMode(a),this.enableDownload=this.getEnableDownload(a),this.stackblitz=this.getStackblitz(c,f,"embedded"===this.mode),this.zip=this.getZip(c,f),this.title=this.getTitle(a)}ngAfterContentInit(){const e=this.content.nativeElement.textContent.trim();e&&(this.title=e)}getEnableDownload(e){return!r(s(e,"noDownload"))}getExampleDir(e,i){let a=s(e,"name");if(!a){const c=i.match(/[^/?#]+(?=\/?(?:\?|#|$))/);a=c?c[0]:"index"}return a.trim()}getMode(e){const i=r(s(e,"downloadOnly")),a=r(s(e,"embedded"));return i?"downloadOnly":a?"embedded":"default"}getStackblitz(e,i,a){return`${v}${e}/${i}stackblitz.html${a?"?ctl=1":""}`}getStackblitzName(e){const i=(s(e,"stackblitz")||"").trim();return i&&`${i}.`}getTitle(e){return(s(e,"title")||"\u73b0\u573a\u6f14\u7ec3").trim()}getZip(e,i){const a=e.split("/")[0];return`${Z}${e}/${i}${a}.zip`}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(l.Ye))},n.\u0275cmp=t.Xpm({type:n,selectors:[["live-example"]],viewQuery:function(e,i){if(1&e&&t.Gf(x,7),2&e){let a;t.iGM(a=t.CRH())&&(i.content=a.first)}},ngContentSelectors:w,decls:7,vars:3,consts:[[2,"display","none"],["content",""],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[3,"title"],[3,"src"],[4,"ngIf"],["download","","title","\u4e0b\u8f7d\u8303\u4f8b",3,"href"],["download","",3,"href","title"],["target","_blank",3,"href","title"]],template:function(e,i){1&e&&(t.F$t(),t.TgZ(0,"span",0,1),t.Hsn(2),t.qZA(),t.TgZ(3,"span",2),t.YNc(4,h,4,3,"span",3),t.YNc(5,b,3,3,"span",3),t.YNc(6,_,4,4,"span",4),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngSwitch",i.mode),t.xp6(1),t.Q6J("ngSwitchCase","embedded"),t.xp6(1),t.Q6J("ngSwitchCase","downloadOnly"))},directives:function(){return[l.RF,l.n9,l.ED,z,l.O5]},encapsulation:2}),n})(),z=(()=>{class n{ngAfterViewInit(){this.iframe&&(this.iframe.nativeElement.src=this.src)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["aio-embedded-stackblitz"]],viewQuery:function(e,i){if(1&e&&t.Gf(C,7),2&e){let a;t.iGM(a=t.CRH())&&(i.iframe=a.first)}},inputs:{src:"src"},decls:2,vars:0,consts:[["frameborder","0","width","100%","height","100%"],["iframe",""]],template:function(e,i){1&e&&t._UZ(0,"iframe",0,1)},styles:["iframe[_ngcontent-%COMP%]{min-height:400px}\n/*# sourceMappingURL=live-example.component.ts-angular-inline--1.css.map*/"]}),n})(),S=(()=>{class n{constructor(){this.customElementComponent=L}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez]]}),n})()}}]);
//# sourceMappingURL=src_app_custom-elements_live-example_live-example_module_ts.2896f4926595258a.js.map
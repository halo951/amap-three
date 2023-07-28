(function(h,r){typeof exports=="object"&&typeof module!="undefined"?r(exports,require("three"),require("three/examples/jsm/loaders/GLTFLoader.js")):typeof define=="function"&&define.amd?define(["exports","three","three/examples/jsm/loaders/GLTFLoader.js"],r):(h=typeof globalThis!="undefined"?globalThis:h||self,r(h.AMap=h.AMap||{},h.THREE,h.THREE))})(this,function(h,r,y){"use strict";class f{constructor(){this._listeners={}}on(e,t,s){this._listeners[e]?this._listeners[e].push({callback:t,isOnce:s}):this._listeners[e]=[{callback:t,isOnce:s}]}off(e,t){if(!t)throw new Error("\u53D6\u6D88\u4E8B\u4EF6\u65F6\u9700\u8981\u4F20\u5165\u539F\u56DE\u8C03\u51FD\u6570");const s=this._listeners[e];if(s&&s.length>0){for(let i=0;i<s.length;i++)if(s[i].callback===t){s.splice(i,1);break}}}emit(e,t){const s=this._listeners[e];if(s&&s.length>0)for(let i=0;i<s.length;i++){const o=s[i];o.callback.call(this,t),o.isOnce&&(s.splice(i,1),i--)}}}function b(d){d.traverse(e=>{g(e)})}function g(d){const e=s=>{s.geometry&&s.geometry.dispose(),s.material&&s.material.dispose&&s.material.dispose(),s.material.texture&&s.material.texture.dispose&&s.material.texture.dispose()},t=s=>{let i=s.children.filter(o=>o);i.forEach(o=>{o.children.length?t(o):o.isMesh&&e(o)}),i=null};t(d)}class v extends f{constructor(e,t){super(),this.frameTimer=-1,this.needsUpdate=!1,t=t||{},this.customCoords=e.customCoords,this.center=t.customCoordsCenter||e.getCenter().toArray(),this.customCoords.lngLatsToCoords([this.center]);const s={zooms:[2,20],opacity:1,alpha:!1,antialias:!1,visible:!0,zIndex:120};this.options=Object.assign({},s,t),this.map=e,this.init()}init(){const e=this.map,t=this.options,s={zooms:t.zooms,opacity:t.opacity,visible:t.visible,zIndex:t.zIndex,init:i=>{const o=e.getContainer(),a=o.offsetWidth,n=o.offsetHeight;let c;e.getView().type==="3D"?c=new r.PerspectiveCamera(60,a/n,100,1<<30):c=new r.OrthographicCamera(a/-2,a/2,n/2,n/-2,1,1e3);const l=new r.WebGLRenderer({context:i,alpha:t.alpha,antialias:t.antialias});l.setSize(a,n),l.autoClear=!1;const m=new r.Scene;this.camera=c,this.renderer=l,this.scene=m,t.onInit&&t.onInit(l,m,c),this.animate(),this.emit("complete")},render:()=>{var i,o,a;(i=this.renderer)===null||i===void 0||i.resetState(),this.customCoords.setCenter(this.center);const n=this.camera;if(e.getView().type==="3D"){const{near:c,far:l,fov:m,up:u,lookAt:p,position:C}=this.customCoords.getCameraParams();n.near=c,n.far=l,n.fov=m,n.position.set(...C),n.up.set(...u),n.lookAt(...p),n.updateProjectionMatrix()}else{const{top:c,bottom:l,left:m,right:u,position:p}=this.customCoords.getCameraParams();n.top=c,n.bottom=l,n.left=m,n.right=u,n.position.set(...p),n.updateProjectionMatrix()}this.camera=n,t.onRender?t.onRender(this.renderer,this.scene,this.camera):(o=this.renderer)===null||o===void 0||o.render(this.scene,n),(a=this.renderer)===null||a===void 0||a.resetState()}};this.layer=new AMap.GLCustomLayer(s),this.layer.setMap(e)}update(){this.needsUpdate=!0}animate(){this.needsUpdate&&(this.refreshMap(),this.needsUpdate=!1),this.frameTimer=requestAnimationFrame(()=>{this.animate()})}refreshMap(){this.map&&this.map.render()}convertLngLat(e){return this.customCoords.setCenter(this.center),this.customCoords.lngLatsToCoords([e])[0]}add(e){var t;(t=this.scene)===null||t===void 0||t.add(e),this.refreshMap()}remove(e){var t;(t=this.scene)===null||t===void 0||t.remove(e),this.refreshMap()}getScene(){return this.scene}getCamera(){return this.camera}getRender(){return this.renderer}destroy(){var e;cancelAnimationFrame(this.frameTimer),this.layer.setMap(null),this.customCoords=null,b(this.scene),this.scene=void 0,this.camera=void 0,(e=this.renderer)===null||e===void 0||e.dispose(),this.renderer=void 0,this.layer=null,this.map=null,r.Cache.clear(),this.options=null}getMap(){return this.map?this.map:null}getOpacity(){return this.layer.getOpacity()}setOpacity(e){this.layer.setOpacity(e)}getZooms(){return this.layer.getZooms()}setZooms(e){this.layer.setZooms(e)}getzIndex(){return this.layer.getzIndex()}setzIndex(e){this.layer.setzIndex(e)}show(){this.layer.show()}hide(){this.layer.hide()}}class j extends f{constructor(e,t){super(),this.linerAnimationFrame=-1,this.layer=e,t=Object.assign({},{url:"",position:[0,0],height:0,rotation:{x:0,y:0,z:0},scale:1,angle:0},t),this.init(t)}init(e){const t=new y.GLTFLoader;e.configLoader&&e.configLoader(t),t.load(e.url,s=>{const i=s.scene,o=s.animations;this.layer.add(i),this.object=i,this.animations=o,this.setScale(e.scale),this.setRotation(e.rotation),this.setAngle(e.angle),this.setPosition(e.position),this.setHeight(e.height),e.onLoaded&&e.onLoaded(i,o),this.emit("complete",{target:i,animations:o})})}setScale(e){let t;typeof e=="number"?t={x:e,y:e,z:e}:t=e,this.object.scale.set(t.x,t.y,t.z),this.refresh()}setPosition(e){const t=this.layer.convertLngLat(e);this.object.position.setX(t[0]),this.object.position.setY(t[1]),this.refresh()}setRotation(e){if(e){const t=Math.PI/180*(e.x||0),s=Math.PI/180*(e.y||0),i=Math.PI/180*(e.z||0);this.object.rotation.set(t,s,i),this.refresh()}}setAngle(e){const t=this.object.rotation.x,s=this.object.rotation.z,i=Math.PI/180*e;this.object.rotation.set(t,i,s),this.refresh()}setHeight(e){e!==void 0&&(this.object.position.setZ(e),this.refresh())}getAnimations(){return this.animations}getObject(){return this.object}refresh(){this.layer.update()}show(){this.object.visible=!0,this.refresh()}hide(){this.object.visible=!1,this.refresh()}animate(e){this.linerAnimationFrame=requestAnimationFrame(()=>{this.animate(e)}),e()}startAnimations(){if(this.animations){const e=this.animations,t=new r.AnimationMixer(this.object),s={};for(let o=0;o<e.length;o++){const a=e[o];s[a.name]=t.clipAction(a)}const i=new r.Clock;for(const o in s)s[o].play();this.animate(()=>{const o=i.getDelta();t&&t.update(o),this.refresh()})}}stopAnimations(){cancelAnimationFrame(this.linerAnimationFrame)}remove(){this.object&&this.layer.remove(this.object)}destroy(){this.stopAnimations(),this.object&&(g(this.object),this.object=null,this.layer=null)}}h.ThreeGltf=j,h.ThreeLayer=v,Object.defineProperty(h,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map
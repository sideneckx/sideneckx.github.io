import{c as jt,b as M,t as H}from"../chunks/disclose-version.IsvOYe_u.js";import{h as pe,ar as Ft,as as xt,at as Ht,aa as Vt,y as Ut,G as Kt,A as Wt,Z as q,K as A,aq as z,P as Ae,R as Te,Q as De}from"../chunks/runtime.BnIMfSuT.js";import{d as qt,s as zt,b as Gt}from"../chunks/store.D6DsPBJ2.js";import{i as Ce}from"../chunks/if.DOBjQRo4.js";import{s as Jt,a as Yt,c as Xt}from"../chunks/global_state.txmsizVe.js";import{o as Zt}from"../chunks/index-client.DMr97pG5.js";let ke=!1;function tt(){ke||(ke=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n.__on_r)==null||t.call(n)})},{capture:!0}))}function Oe(e){if(pe){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var r=e.value;Ne(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var o=e.checked;Ne(e,"checked",null),e.checked=o}}};e.__on_r=n,Ft(n),tt()}}function Ne(e,t,n,r){var o=e.__attributes??(e.__attributes={});pe&&(o[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||o[t]!==(o[t]=n)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[xt]=n),e.removeAttribute(t))}function Qt(e,t,n,r=n){e.addEventListener(t,n);const o=e.__on_r;o?e.__on_r=()=>{o(),r()}:e.__on_r=r,tt()}function Be(e,t,n=t){var r=Ht();Qt(e,"input",()=>{var o=Me(e)?Re(e.value):e.value;n(o),r&&o!==(o=t())&&(e.value=o??"")}),Vt(()=>{var o=t();if(pe&&e.defaultValue!==e.value){n(e.value);return}Me(e)&&o===Re(e.value)||e.type==="date"&&!o&&!e.value||o!==e.value&&(e.value=o??"")})}function Me(e){var t=e.type;return t==="number"||t==="range"}function Re(e){return e===""?null:+e}const en=!0,ya=Object.freeze(Object.defineProperty({__proto__:null,prerender:en},Symbol.toStringTag,{value:"Module"}));var Pe={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},tn=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const a=e[n++];t[r++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=e[n++],s=e[n++],i=e[n++],d=((o&7)<<18|(a&63)<<12|(s&63)<<6|i&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const a=e[n++],s=e[n++];t[r++]=String.fromCharCode((o&15)<<12|(a&63)<<6|s&63)}}return t.join("")},rt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const a=e[o],s=o+1<e.length,i=s?e[o+1]:0,d=o+2<e.length,u=d?e[o+2]:0,c=a>>2,y=(a&3)<<4|i>>4;let g=(i&15)<<2|u>>6,p=u&63;d||(p=64,s||(g=64)),r.push(n[c],n[y],n[g],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(nt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):tn(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const a=n[e.charAt(o++)],i=o<e.length?n[e.charAt(o)]:0;++o;const u=o<e.length?n[e.charAt(o)]:64;++o;const y=o<e.length?n[e.charAt(o)]:64;if(++o,a==null||i==null||u==null||y==null)throw new nn;const g=a<<2|i>>4;if(r.push(g),u!==64){const p=i<<4&240|u>>2;if(r.push(p),y!==64){const E=u<<6&192|y;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class nn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rn=function(e){const t=nt(e);return rt.encodeByteArray(t,!0)},ot=function(e){return rn(e).replace(/\./g,"")},on=function(e){try{return rt.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=()=>an().__FIREBASE_DEFAULTS__,cn=()=>{if(typeof process>"u"||typeof Pe>"u")return;const e=Pe.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},dn=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&on(e[1]);return t&&JSON.parse(t)},un=()=>{try{return sn()||cn()||dn()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},at=()=>{var e;return(e=un())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function st(){try{return typeof indexedDB=="object"}catch{return!1}}function it(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var a;t(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}function fn(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn="FirebaseError";class N extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=hn,Object.setPrototypeOf(this,N.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,V.prototype.create)}}class V{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},o=`${this.service}/${t}`,a=this.errors[t],s=a?pn(a,r):"Error",i=`${this.serviceName}: ${s} (${o}).`;return new N(o,i,r)}}function pn(e,t){return e.replace(gn,(n,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const gn=/\{\$([^}]+)}/g;function ie(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const a=e[o],s=t[o];if($e(a)&&$e(s)){if(!ie(a,s))return!1}else if(a!==s)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function $e(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){return e&&e._delegate?e._delegate:e}class I{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new ln;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(wn(t))try{this.getOrInitializeService({instanceIdentifier:S})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:o});r.resolve(a)}catch{}}}}clearInstance(t=S){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=S){return this.instances.has(t)}getOptions(t=S){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(a);r===i&&s.resolve(o)}return o}onInit(t,n){var r;const o=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(o,a);const s=this.instances.get(o);return s&&t(s,o),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bn(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=S){return this.component?this.component.multipleInstances?t:S:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bn(e){return e===S?void 0:e}function wn(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new mn(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var l;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(l||(l={}));const _n={debug:l.DEBUG,verbose:l.VERBOSE,info:l.INFO,warn:l.WARN,error:l.ERROR,silent:l.SILENT},vn=l.INFO,In={[l.DEBUG]:"log",[l.VERBOSE]:"log",[l.INFO]:"info",[l.WARN]:"warn",[l.ERROR]:"error"},En=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),o=In[t];if(o)console[o](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Sn{constructor(t){this.name=t,this._logLevel=vn,this._logHandler=En,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in l))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?_n[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,l.DEBUG,...t),this._logHandler(this,l.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,l.VERBOSE,...t),this._logHandler(this,l.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,l.INFO,...t),this._logHandler(this,l.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,l.WARN,...t),this._logHandler(this,l.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,l.ERROR,...t),this._logHandler(this,l.ERROR,...t)}}const An=(e,t)=>t.some(n=>e instanceof n);let Le,je;function Tn(){return Le||(Le=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dn(){return je||(je=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ct=new WeakMap,ce=new WeakMap,dt=new WeakMap,G=new WeakMap,me=new WeakMap;function Cn(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",a),e.removeEventListener("error",s)},a=()=>{n(b(e.result)),o()},s=()=>{r(e.error),o()};e.addEventListener("success",a),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&ct.set(n,e)}).catch(()=>{}),me.set(t,e),t}function kn(e){if(ce.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",s),e.removeEventListener("abort",s)},a=()=>{n(),o()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",a),e.addEventListener("error",s),e.addEventListener("abort",s)});ce.set(e,t)}let de={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ce.get(e);if(t==="objectStoreNames")return e.objectStoreNames||dt.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return b(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function On(e){de=e(de)}function Nn(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(J(this),t,...n);return dt.set(r,t.sort?t.sort():[t]),b(r)}:Dn().includes(e)?function(...t){return e.apply(J(this),t),b(ct.get(this))}:function(...t){return b(e.apply(J(this),t))}}function Bn(e){return typeof e=="function"?Nn(e):(e instanceof IDBTransaction&&kn(e),An(e,Tn())?new Proxy(e,de):e)}function b(e){if(e instanceof IDBRequest)return Cn(e);if(G.has(e))return G.get(e);const t=Bn(e);return t!==e&&(G.set(e,t),me.set(t,e)),t}const J=e=>me.get(e);function U(e,t,{blocked:n,upgrade:r,blocking:o,terminated:a}={}){const s=indexedDB.open(e,t),i=b(s);return r&&s.addEventListener("upgradeneeded",d=>{r(b(s.result),d.oldVersion,d.newVersion,b(s.transaction),d)}),n&&s.addEventListener("blocked",d=>n(d.oldVersion,d.newVersion,d)),i.then(d=>{a&&d.addEventListener("close",()=>a()),o&&d.addEventListener("versionchange",u=>o(u.oldVersion,u.newVersion,u))}).catch(()=>{}),i}function Y(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),b(n).then(()=>{})}const Mn=["get","getKey","getAll","getAllKeys","count"],Rn=["put","add","delete","clear"],X=new Map;function Fe(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(X.get(t))return X.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=Rn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Mn.includes(n)))return;const a=async function(s,...i){const d=this.transaction(s,o?"readwrite":"readonly");let u=d.store;return r&&(u=u.index(i.shift())),(await Promise.all([u[n](...i),o&&d.done]))[0]};return X.set(t,a),a}On(e=>({...e,get:(t,n,r)=>Fe(t,n)||e.get(t,n,r),has:(t,n)=>!!Fe(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($n(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $n(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ue="@firebase/app",xe="0.10.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=new Sn("@firebase/app"),Ln="@firebase/app-compat",jn="@firebase/analytics-compat",Fn="@firebase/analytics",xn="@firebase/app-check-compat",Hn="@firebase/app-check",Vn="@firebase/auth",Un="@firebase/auth-compat",Kn="@firebase/database",Wn="@firebase/data-connect",qn="@firebase/database-compat",zn="@firebase/functions",Gn="@firebase/functions-compat",Jn="@firebase/installations",Yn="@firebase/installations-compat",Xn="@firebase/messaging",Zn="@firebase/messaging-compat",Qn="@firebase/performance",er="@firebase/performance-compat",tr="@firebase/remote-config",nr="@firebase/remote-config-compat",rr="@firebase/storage",or="@firebase/storage-compat",ar="@firebase/firestore",sr="@firebase/vertexai",ir="@firebase/firestore-compat",cr="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le="[DEFAULT]",dr={[ue]:"fire-core",[Ln]:"fire-core-compat",[Fn]:"fire-analytics",[jn]:"fire-analytics-compat",[Hn]:"fire-app-check",[xn]:"fire-app-check-compat",[Vn]:"fire-auth",[Un]:"fire-auth-compat",[Kn]:"fire-rtdb",[Wn]:"fire-data-connect",[qn]:"fire-rtdb-compat",[zn]:"fire-fn",[Gn]:"fire-fn-compat",[Jn]:"fire-iid",[Yn]:"fire-iid-compat",[Xn]:"fire-fcm",[Zn]:"fire-fcm-compat",[Qn]:"fire-perf",[er]:"fire-perf-compat",[tr]:"fire-rc",[nr]:"fire-rc-compat",[rr]:"fire-gcs",[or]:"fire-gcs-compat",[ar]:"fire-fst",[ir]:"fire-fst-compat",[sr]:"fire-vertex","fire-js":"fire-js",[cr]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F=new Map,ur=new Map,fe=new Map;function He(e,t){try{e.container.addComponent(t)}catch(n){w.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function D(e){const t=e.name;if(fe.has(t))return w.debug(`There were multiple attempts to register component ${t}.`),!1;fe.set(t,e);for(const n of F.values())He(n,e);for(const n of ur.values())He(n,e);return!0}function be(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_=new V("app","Firebase",lr);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new I("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw _.create("app-deleted",{appName:this._name})}}function ut(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:le,automaticDataCollectionEnabled:!1},t),o=r.name;if(typeof o!="string"||!o)throw _.create("bad-app-name",{appName:String(o)});if(n||(n=at()),!n)throw _.create("no-options");const a=F.get(o);if(a){if(ie(n,a.options)&&ie(r,a.config))return a;throw _.create("duplicate-app",{appName:o})}const s=new yn(o);for(const d of fe.values())s.addComponent(d);const i=new fr(n,r,s);return F.set(o,i),i}function hr(e=le){const t=F.get(e);if(!t&&e===le&&at())return ut();if(!t)throw _.create("no-app",{appName:e});return t}function v(e,t,n){var r;let o=(r=dr[e])!==null&&r!==void 0?r:e;n&&(o+=`-${n}`);const a=o.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const i=[`Unable to register library "${o}" with version "${t}":`];a&&i.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&s&&i.push("and"),s&&i.push(`version name "${t}" contains illegal characters (whitespace or "/")`),w.warn(i.join(" "));return}D(new I(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="firebase-heartbeat-database",gr=1,R="firebase-heartbeat-store";let Z=null;function lt(){return Z||(Z=U(pr,gr,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(R)}catch(n){console.warn(n)}}}}).catch(e=>{throw _.create("idb-open",{originalErrorMessage:e.message})})),Z}async function mr(e){try{const n=(await lt()).transaction(R),r=await n.objectStore(R).get(ft(e));return await n.done,r}catch(t){if(t instanceof N)w.warn(t.message);else{const n=_.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});w.warn(n.message)}}}async function Ve(e,t){try{const r=(await lt()).transaction(R,"readwrite");await r.objectStore(R).put(t,ft(e)),await r.done}catch(n){if(n instanceof N)w.warn(n.message);else{const r=_.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});w.warn(r.message)}}}function ft(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=1024,wr=30*24*60*60*1e3;class yr{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vr(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Ue();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(s=>s.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=wr}),this._storage.overwrite(this._heartbeatsCache))}catch(r){w.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ue(),{heartbeatsToSend:r,unsentEntries:o}=_r(this._heartbeatsCache.heartbeats),a=ot(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return w.warn(n),""}}}function Ue(){return new Date().toISOString().substring(0,10)}function _r(e,t=br){const n=[];let r=e.slice();for(const o of e){const a=n.find(s=>s.agent===o.agent);if(a){if(a.dates.push(o.date),Ke(n)>t){a.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Ke(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class vr{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return st()?it().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mr(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ve(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ve(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Ke(e){return ot(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(e){D(new I("platform-logger",t=>new Pn(t),"PRIVATE")),D(new I("heartbeat",t=>new yr(t),"PRIVATE")),v(ue,xe,e),v(ue,xe,"esm2017"),v("fire-js","")}Ir("");var Er="firebase",Sr="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */v(Er,Sr,"app");const ht="@firebase/installations",we="0.6.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=1e4,gt=`w:${we}`,mt="FIS_v2",Ar="https://firebaseinstallations.googleapis.com/v1",Tr=60*60*1e3,Dr="installations",Cr="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},C=new V(Dr,Cr,kr);function bt(e){return e instanceof N&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt({projectId:e}){return`${Ar}/projects/${e}/installations`}function yt(e){return{token:e.token,requestStatus:2,expiresIn:Nr(e.expiresIn),creationTime:Date.now()}}async function _t(e,t){const r=(await t.json()).error;return C.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function vt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Or(e,{refreshToken:t}){const n=vt(e);return n.append("Authorization",Br(t)),n}async function It(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Nr(e){return Number(e.replace("s","000"))}function Br(e){return`${mt} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mr({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=wt(e),o=vt(e),a=t.getImmediate({optional:!0});if(a){const u=await a.getHeartbeatsHeader();u&&o.append("x-firebase-client",u)}const s={fid:n,authVersion:mt,appId:e.appId,sdkVersion:gt},i={method:"POST",headers:o,body:JSON.stringify(s)},d=await It(()=>fetch(r,i));if(d.ok){const u=await d.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:yt(u.authToken)}}else throw await _t("Create Installation",d)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=/^[cdef][\w-]{21}$/,he="";function $r(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Lr(e);return Pr.test(n)?n:he}catch{return he}}function Lr(e){return Rr(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=new Map;function At(e,t){const n=K(e);Tt(n,t),jr(n,t)}function Tt(e,t){const n=St.get(e);if(n)for(const r of n)r(t)}function jr(e,t){const n=Fr();n&&n.postMessage({key:e,fid:t}),xr()}let T=null;function Fr(){return!T&&"BroadcastChannel"in self&&(T=new BroadcastChannel("[Firebase] FID Change"),T.onmessage=e=>{Tt(e.data.key,e.data.fid)}),T}function xr(){St.size===0&&T&&(T.close(),T=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="firebase-installations-database",Vr=1,k="firebase-installations-store";let Q=null;function ye(){return Q||(Q=U(Hr,Vr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(k)}}})),Q}async function x(e,t){const n=K(e),o=(await ye()).transaction(k,"readwrite"),a=o.objectStore(k),s=await a.get(n);return await a.put(t,n),await o.done,(!s||s.fid!==t.fid)&&At(e,t.fid),t}async function Dt(e){const t=K(e),r=(await ye()).transaction(k,"readwrite");await r.objectStore(k).delete(t),await r.done}async function W(e,t){const n=K(e),o=(await ye()).transaction(k,"readwrite"),a=o.objectStore(k),s=await a.get(n),i=t(s);return i===void 0?await a.delete(n):await a.put(i,n),await o.done,i&&(!s||s.fid!==i.fid)&&At(e,i.fid),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _e(e){let t;const n=await W(e.appConfig,r=>{const o=Ur(r),a=Kr(e,o);return t=a.registrationPromise,a.installationEntry});return n.fid===he?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Ur(e){const t=e||{fid:$r(),registrationStatus:0};return Ct(t)}function Kr(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(C.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Wr(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:qr(e)}:{installationEntry:t}}async function Wr(e,t){try{const n=await Mr(e,t);return x(e.appConfig,n)}catch(n){throw bt(n)&&n.customData.serverCode===409?await Dt(e.appConfig):await x(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function qr(e){let t=await We(e.appConfig);for(;t.registrationStatus===1;)await Et(100),t=await We(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await _e(e);return r||n}return t}function We(e){return W(e,t=>{if(!t)throw C.create("installation-not-found");return Ct(t)})}function Ct(e){return zr(e)?{fid:e.fid,registrationStatus:0}:e}function zr(e){return e.registrationStatus===1&&e.registrationTime+pt<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr({appConfig:e,heartbeatServiceProvider:t},n){const r=Jr(e,n),o=Or(e,n),a=t.getImmediate({optional:!0});if(a){const u=await a.getHeartbeatsHeader();u&&o.append("x-firebase-client",u)}const s={installation:{sdkVersion:gt,appId:e.appId}},i={method:"POST",headers:o,body:JSON.stringify(s)},d=await It(()=>fetch(r,i));if(d.ok){const u=await d.json();return yt(u)}else throw await _t("Generate Auth Token",d)}function Jr(e,{fid:t}){return`${wt(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ve(e,t=!1){let n;const r=await W(e.appConfig,a=>{if(!kt(a))throw C.create("not-registered");const s=a.authToken;if(!t&&Zr(s))return a;if(s.requestStatus===1)return n=Yr(e,t),a;{if(!navigator.onLine)throw C.create("app-offline");const i=eo(a);return n=Xr(e,i),i}});return n?await n:r.authToken}async function Yr(e,t){let n=await qe(e.appConfig);for(;n.authToken.requestStatus===1;)await Et(100),n=await qe(e.appConfig);const r=n.authToken;return r.requestStatus===0?ve(e,t):r}function qe(e){return W(e,t=>{if(!kt(t))throw C.create("not-registered");const n=t.authToken;return to(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Xr(e,t){try{const n=await Gr(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await x(e.appConfig,r),n}catch(n){if(bt(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Dt(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await x(e.appConfig,r)}throw n}}function kt(e){return e!==void 0&&e.registrationStatus===2}function Zr(e){return e.requestStatus===2&&!Qr(e)}function Qr(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Tr}function eo(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function to(e){return e.requestStatus===1&&e.requestTime+pt<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(e){const t=e,{installationEntry:n,registrationPromise:r}=await _e(t);return r?r.catch(console.error):ve(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(e,t=!1){const n=e;return await oo(n),(await ve(n,t)).token}async function oo(e){const{registrationPromise:t}=await _e(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(e){if(!e||!e.options)throw ee("App Configuration");if(!e.name)throw ee("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ee(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ee(e){return C.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="installations",so="installations-internal",io=e=>{const t=e.getProvider("app").getImmediate(),n=ao(t),r=be(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},co=e=>{const t=e.getProvider("app").getImmediate(),n=be(t,Ot).getImmediate();return{getId:()=>no(n),getToken:o=>ro(n,o)}};function uo(){D(new I(Ot,io,"PUBLIC")),D(new I(so,co,"PRIVATE"))}uo();v(ht,we);v(ht,we,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo="/firebase-messaging-sw.js",fo="/firebase-cloud-messaging-push-scope",Nt="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",ho="https://fcmregistrations.googleapis.com/v1",Bt="google.c.a.c_id",po="google.c.a.c_l",go="google.c.a.ts",mo="google.c.a.e";var ze;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(ze||(ze={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var P;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(P||(P={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function bo(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),o=new Uint8Array(r.length);for(let a=0;a<r.length;++a)o[a]=r.charCodeAt(a);return o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te="fcm_token_details_db",wo=5,Ge="fcm_token_object_Store";async function yo(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(a=>a.name).includes(te))return null;let t=null;return(await U(te,wo,{upgrade:async(r,o,a,s)=>{var i;if(o<2||!r.objectStoreNames.contains(Ge))return;const d=s.objectStore(Ge),u=await d.index("fcmSenderId").get(e);if(await d.clear(),!!u){if(o===2){const c=u;if(!c.auth||!c.p256dh||!c.endpoint)return;t={token:c.fcmToken,createTime:(i=c.createTime)!==null&&i!==void 0?i:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:m(c.vapidKey)}}}else if(o===3){const c=u;t={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:m(c.auth),p256dh:m(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:m(c.vapidKey)}}}else if(o===4){const c=u;t={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:m(c.auth),p256dh:m(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:m(c.vapidKey)}}}}}})).close(),await Y(te),await Y("fcm_vapid_details_db"),await Y("undefined"),_o(t)?t:null}function _o(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo="firebase-messaging-database",Io=1,$="firebase-messaging-store";let ne=null;function Mt(){return ne||(ne=U(vo,Io,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore($)}}})),ne}async function Eo(e){const t=Rt(e),r=await(await Mt()).transaction($).objectStore($).get(t);if(r)return r;{const o=await yo(e.appConfig.senderId);if(o)return await Ie(e,o),o}}async function Ie(e,t){const n=Rt(e),o=(await Mt()).transaction($,"readwrite");return await o.objectStore($).put(t,n),await o.done,t}function Rt({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},h=new V("messaging","Messaging",So);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(e,t){const n=await Se(e),r=Pt(t),o={method:"POST",headers:n,body:JSON.stringify(r)};let a;try{a=await(await fetch(Ee(e.appConfig),o)).json()}catch(s){throw h.create("token-subscribe-failed",{errorInfo:s==null?void 0:s.toString()})}if(a.error){const s=a.error.message;throw h.create("token-subscribe-failed",{errorInfo:s})}if(!a.token)throw h.create("token-subscribe-no-token");return a.token}async function To(e,t){const n=await Se(e),r=Pt(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(r)};let a;try{a=await(await fetch(`${Ee(e.appConfig)}/${t.token}`,o)).json()}catch(s){throw h.create("token-update-failed",{errorInfo:s==null?void 0:s.toString()})}if(a.error){const s=a.error.message;throw h.create("token-update-failed",{errorInfo:s})}if(!a.token)throw h.create("token-update-no-token");return a.token}async function Do(e,t){const r={method:"DELETE",headers:await Se(e)};try{const a=await(await fetch(`${Ee(e.appConfig)}/${t}`,r)).json();if(a.error){const s=a.error.message;throw h.create("token-unsubscribe-failed",{errorInfo:s})}}catch(o){throw h.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function Ee({projectId:e}){return`${ho}/projects/${e}/registrations`}async function Se({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Pt({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const o={web:{endpoint:n,auth:t,p256dh:e}};return r!==Nt&&(o.web.applicationPubKey=r),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=7*24*60*60*1e3;async function ko(e){const t=await No(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:m(t.getKey("auth")),p256dh:m(t.getKey("p256dh"))},r=await Eo(e.firebaseDependencies);if(r){if(Bo(r.subscriptionOptions,n))return Date.now()>=r.createTime+Co?Oo(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Do(e.firebaseDependencies,r.token)}catch(o){console.warn(o)}return Je(e.firebaseDependencies,n)}else return Je(e.firebaseDependencies,n)}async function Oo(e,t){try{const n=await To(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Ie(e.firebaseDependencies,r),n}catch(n){throw n}}async function Je(e,t){const r={token:await Ao(e,t),createTime:Date.now(),subscriptionOptions:t};return await Ie(e,r),r.token}async function No(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:bo(t)})}function Bo(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,o=t.auth===e.auth,a=t.p256dh===e.p256dh;return n&&r&&o&&a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Mo(t,e),Ro(t,e),Po(t,e),t}function Mo(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const o=t.notification.image;o&&(e.notification.image=o);const a=t.notification.icon;a&&(e.notification.icon=a)}function Ro(e,t){t.data&&(e.data=t.data)}function Po(e,t){var n,r,o,a,s;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const i=(o=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&o!==void 0?o:(a=t.notification)===null||a===void 0?void 0:a.click_action;i&&(e.fcmOptions.link=i);const d=(s=t.fcmOptions)===null||s===void 0?void 0:s.analytics_label;d&&(e.fcmOptions.analyticsLabel=d)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(e){return typeof e=="object"&&!!e&&Bt in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(e){if(!e||!e.options)throw re("App Configuration Object");if(!e.name)throw re("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw re(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function re(e){return h.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=Lo(t);this.firebaseDependencies={app:t,appConfig:o,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(e){try{e.swRegistration=await navigator.serviceWorker.register(lo,{scope:fo}),e.swRegistration.update().catch(()=>{})}catch(t){throw h.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(e,t){if(!t&&!e.swRegistration&&await Fo(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw h.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ho(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Nt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $t(e,t){if(!navigator)throw h.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw h.create("permission-blocked");return await Ho(e,t==null?void 0:t.vapidKey),await xo(e,t==null?void 0:t.serviceWorkerRegistration),ko(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(e,t,n){const r=Uo(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Bt],message_name:n[po],message_time:n[go],message_device_time:Math.floor(Date.now()/1e3)})}function Uo(e){switch(e){case P.NOTIFICATION_CLICKED:return"notification_open";case P.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===P.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Ye(n)):e.onMessageHandler.next(Ye(n)));const r=n.data;$o(r)&&r[mo]==="1"&&await Vo(e,n.messageType,r)}const Xe="@firebase/messaging",Ze="0.12.13";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=e=>{const t=new jo(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Ko(t,n)),t},qo=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>$t(t,r)}};function zo(){D(new I("messaging",Wo,"PUBLIC")),D(new I("messaging-internal",qo,"PRIVATE")),v(Xe,Ze),v(Xe,Ze,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Go(){try{await it()}catch{return!1}return typeof window<"u"&&st()&&fn()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(e,t){if(!navigator)throw h.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(e=hr()){return Go().then(t=>{if(!t)throw h.create("unsupported-browser")},t=>{throw h.create("indexed-db-unsupported")}),be(ge(e),"messaging").getImmediate()}async function Xo(e,t){return e=ge(e),$t(e,t)}function Zo(e,t){return e=ge(e),Jo(e,t)}zo();const Qo={apiKey:"AIzaSyCEg8Zjd1RtY7UXNKKU6OOqrF6DCOS4Hpw",authDomain:"indi-sys.firebaseapp.com",projectId:"indi-sys",storageBucket:"indi-sys.appspot.com",messagingSenderId:"418797173759",appId:"1:418797173759:web:8981b33c9a05246bd985ca",measurementId:"G-ZCYPNLXHE8"};let oe=null,ae=null;function ea(){return oe==null&&(oe=ut(Qo)),oe}function Qe(){return ae==null&&(ae=Yo(ea())),ae}var f=[];for(var se=0;se<256;++se)f.push((se+256).toString(16).slice(1));function ta(e,t=0){return(f[e[t+0]]+f[e[t+1]]+f[e[t+2]]+f[e[t+3]]+"-"+f[e[t+4]]+f[e[t+5]]+"-"+f[e[t+6]]+f[e[t+7]]+"-"+f[e[t+8]]+f[e[t+9]]+"-"+f[e[t+10]]+f[e[t+11]]+f[e[t+12]]+f[e[t+13]]+f[e[t+14]]+f[e[t+15]]).toLowerCase()}var j,na=new Uint8Array(16);function ra(){if(!j&&(j=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!j))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return j(na)}var oa=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const et={randomUUID:oa};function aa(e,t,n){if(et.randomUUID&&!t&&!e)return et.randomUUID();e=e||{};var r=e.random||(e.rng||ra)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,ta(r)}const Lt=()=>{const e="device_id";let t=localStorage.getItem(e);return t==null&&(t=aa(),localStorage.setItem(e,t)),t};new TextEncoder;const sa=async e=>{const t=new TextEncoder().encode(e),n=await window.crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map(a=>a.toString(16).padStart(2,"0")).join("")},ia=async(e,t,n)=>{if(A(t).length==0||A(n).length==0)return;const r=await sa(A(n)),o={username:A(t),password:r};console.log(o);try{const i=(await(await fetch("https://indisys.io.vn/user/logIn",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json","Device-Encode":Lt()}})).json()).result;Jt(i)}catch(a){console.error(a)}};var ca=H('<section class="flex flex-col gap-4"><input class="rounded-lg" type="text" placeholder="username"> <input class="rounded-lg" type="password" placeholder="password"> <button class="text-purple-600 font-bold">Log in</button></section>'),da=H("<div>Hello user</div>"),ua=H('<div class="flex items-center justify-center h-lvh"><!></div>'),la=H("<div>Waiting for updating device</div>");function _a(e,t){Ut(t,!0);const n=zt(),r=()=>Gt(Yt,"$accessTokenState",n);let o=z(!1),a=z(""),s=z("");Zt(async()=>{Zo(Qe(),p=>{var L,O;const E=((L=p.notification)==null?void 0:L.title)??"No title",B=((O=p.notification)==null?void 0:O.body)??"No body";Xt.update(fa=>({title:E,body:B}))}),console.log("Weo weo");var u=null;try{await Notification.requestPermission()=="granted"&&(u=await Xo(Qe(),{vapidKey:"BJT7RHvIki_romv4w9EIcrWh5bJyDfz_pQdtqmS_yiPup8gmyvDXGAq3UpUzCL4BPKziYaCT55t3657KbNDNJ8o"}))}catch{}const c={deviceEncode:Lt(),type:3,fcmToken:u};console.log(c);const g=await(await fetch("https://indisys.io.vn/device/register",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}})).json();console.log(g),q(o,!0)});var i=jt(),d=Kt(i);Ce(d,()=>A(o),u=>{var c=ua(),y=Ae(c);Ce(y,()=>r()==null,g=>{var p=ca(),E=Ae(p);Oe(E);var B=Te(E,2);Oe(B);var L=Te(B,2);L.__click=[ia,a,s],De(p),Be(E,()=>A(a),O=>q(a,O)),Be(B,()=>A(s),O=>q(s,O)),M(g,p)},g=>{var p=da();M(g,p)}),De(c),M(u,c)},u=>{var c=la();M(u,c)}),M(e,i),Wt()}qt(["click"]);export{_a as component,ya as universal};

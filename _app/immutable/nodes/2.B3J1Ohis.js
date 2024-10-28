import{c as qt,a as R,t as U}from"../chunks/disclose-version.wNlxYs5C.js";import{h as Ie,ar as zt,as as Gt,at as Jt,aa as Yt,l as Xt,m as Zt,o as Qt,$ as Z,z as en,v as C,aq as Q,A as P,C as j,B as $}from"../chunks/runtime.X58gl5t2.js";import{d as tn,s as nn,b as Me,a as Re}from"../chunks/store.DS-GxuKD.js";import{i as ee}from"../chunks/if.BEv7ovBH.js";import{L as rn,s as on,c as te,a as an}from"../chunks/global_state.BLxDL-_M.js";import{o as sn}from"../chunks/index-client.hfy25BJs.js";let Pe=!1;function it(){Pe||(Pe=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n.__on_r)==null||t.call(n)})},{capture:!0}))}function $e(e){if(Ie){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var r=e.value;Le(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var o=e.checked;Le(e,"checked",null),e.checked=o}}};e.__on_r=n,zt(n),it()}}function Le(e,t,n,r){var o=e.__attributes??(e.__attributes={});Ie&&(o[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||o[t]!==(o[t]=n)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[Gt]=n),e.removeAttribute(t))}function cn(e,t,n,r=n){e.addEventListener(t,n);const o=e.__on_r;o?e.__on_r=()=>{o(),r()}:e.__on_r=r,it()}function xe(e,t,n=t){var r=Jt();cn(e,"input",()=>{var o=je(e)?He(e.value):e.value;n(o),r&&o!==(o=t())&&(e.value=o??"")}),Yt(()=>{var o=t();if(Ie&&e.defaultValue!==e.value){n(e.value);return}je(e)&&o===He(e.value)||e.type==="date"&&!o&&!e.value||o!==e.value&&(e.value=o??"")})}function je(e){var t=e.type;return t==="number"||t==="range"}function He(e){return e===""?null:+e}const un=!0,Ca=Object.freeze(Object.defineProperty({__proto__:null,prerender:un},Symbol.toStringTag,{value:"Module"}));var Fe={};/**
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
 */const ct=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},dn=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const a=e[n++];t[r++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=e[n++],s=e[n++],i=e[n++],u=((o&7)<<18|(a&63)<<12|(s&63)<<6|i&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const a=e[n++],s=e[n++];t[r++]=String.fromCharCode((o&15)<<12|(a&63)<<6|s&63)}}return t.join("")},ut={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const a=e[o],s=o+1<e.length,i=s?e[o+1]:0,u=o+2<e.length,d=u?e[o+2]:0,c=a>>2,p=(a&3)<<4|i>>4;let b=(i&15)<<2|d>>6,g=d&63;u||(g=64,s||(b=64)),r.push(n[c],n[p],n[b],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ct(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):dn(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const a=n[e.charAt(o++)],i=o<e.length?n[e.charAt(o)]:0;++o;const d=o<e.length?n[e.charAt(o)]:64;++o;const p=o<e.length?n[e.charAt(o)]:64;if(++o,a==null||i==null||d==null||p==null)throw new ln;const b=a<<2|i>>4;if(r.push(b),d!==64){const g=i<<4&240|d>>2;if(r.push(g),p!==64){const x=d<<6&192|p;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ln extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fn=function(e){const t=ct(e);return ut.encodeByteArray(t,!0)},dt=function(e){return fn(e).replace(/\./g,"")},hn=function(e){try{return ut.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function pn(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gn=()=>pn().__FIREBASE_DEFAULTS__,mn=()=>{if(typeof process>"u"||typeof Fe>"u")return;const e=Fe.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},bn=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&hn(e[1]);return t&&JSON.parse(t)},wn=()=>{try{return gn()||mn()||bn()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},lt=()=>{var e;return(e=wn())===null||e===void 0?void 0:e.config};/**
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
 */class yn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function ft(){try{return typeof indexedDB=="object"}catch{return!1}}function ht(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var a;t(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}function vn(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const _n="FirebaseError";class L extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=_n,Object.setPrototypeOf(this,L.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,z.prototype.create)}}class z{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},o=`${this.service}/${t}`,a=this.errors[t],s=a?In(a,r):"Error",i=`${this.serviceName}: ${s} (${o}).`;return new L(o,i,r)}}function In(e,t){return e.replace(En,(n,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const En=/\{\$([^}]+)}/g;function ge(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const a=e[o],s=t[o];if(Ve(a)&&Ve(s)){if(!ge(a,s))return!1}else if(a!==s)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function Ve(e){return e!==null&&typeof e=="object"}/**
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
 */function Ee(e){return e&&e._delegate?e._delegate:e}class T{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const D="[DEFAULT]";/**
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
 */class Sn{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new yn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(An(t))try{this.getOrInitializeService({instanceIdentifier:D})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:o});r.resolve(a)}catch{}}}}clearInstance(t=D){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=D){return this.instances.has(t)}getOptions(t=D){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(a);r===i&&s.resolve(o)}return o}onInit(t,n){var r;const o=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(o,a);const s=this.instances.get(o);return s&&t(s,o),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Tn(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=D){return this.component?this.component.multipleInstances?t:D:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tn(e){return e===D?void 0:e}function An(e){return e.instantiationMode==="EAGER"}/**
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
 */class Dn{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Sn(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var l;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(l||(l={}));const Cn={debug:l.DEBUG,verbose:l.VERBOSE,info:l.INFO,warn:l.WARN,error:l.ERROR,silent:l.SILENT},kn=l.INFO,On={[l.DEBUG]:"log",[l.VERBOSE]:"log",[l.INFO]:"info",[l.WARN]:"warn",[l.ERROR]:"error"},Nn=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),o=On[t];if(o)console[o](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Bn{constructor(t){this.name=t,this._logLevel=kn,this._logHandler=Nn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in l))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Cn[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,l.DEBUG,...t),this._logHandler(this,l.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,l.VERBOSE,...t),this._logHandler(this,l.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,l.INFO,...t),this._logHandler(this,l.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,l.WARN,...t),this._logHandler(this,l.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,l.ERROR,...t),this._logHandler(this,l.ERROR,...t)}}const Mn=(e,t)=>t.some(n=>e instanceof n);let Ue,Ke;function Rn(){return Ue||(Ue=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pn(){return Ke||(Ke=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pt=new WeakMap,me=new WeakMap,gt=new WeakMap,ne=new WeakMap,Se=new WeakMap;function $n(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",a),e.removeEventListener("error",s)},a=()=>{n(v(e.result)),o()},s=()=>{r(e.error),o()};e.addEventListener("success",a),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&pt.set(n,e)}).catch(()=>{}),Se.set(t,e),t}function Ln(e){if(me.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",s),e.removeEventListener("abort",s)},a=()=>{n(),o()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",a),e.addEventListener("error",s),e.addEventListener("abort",s)});me.set(e,t)}let be={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return me.get(e);if(t==="objectStoreNames")return e.objectStoreNames||gt.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return v(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function xn(e){be=e(be)}function jn(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(re(this),t,...n);return gt.set(r,t.sort?t.sort():[t]),v(r)}:Pn().includes(e)?function(...t){return e.apply(re(this),t),v(pt.get(this))}:function(...t){return v(e.apply(re(this),t))}}function Hn(e){return typeof e=="function"?jn(e):(e instanceof IDBTransaction&&Ln(e),Mn(e,Rn())?new Proxy(e,be):e)}function v(e){if(e instanceof IDBRequest)return $n(e);if(ne.has(e))return ne.get(e);const t=Hn(e);return t!==e&&(ne.set(e,t),Se.set(t,e)),t}const re=e=>Se.get(e);function G(e,t,{blocked:n,upgrade:r,blocking:o,terminated:a}={}){const s=indexedDB.open(e,t),i=v(s);return r&&s.addEventListener("upgradeneeded",u=>{r(v(s.result),u.oldVersion,u.newVersion,v(s.transaction),u)}),n&&s.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),i.then(u=>{a&&u.addEventListener("close",()=>a()),o&&u.addEventListener("versionchange",d=>o(d.oldVersion,d.newVersion,d))}).catch(()=>{}),i}function oe(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),v(n).then(()=>{})}const Fn=["get","getKey","getAll","getAllKeys","count"],Vn=["put","add","delete","clear"],ae=new Map;function We(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ae.get(t))return ae.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=Vn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Fn.includes(n)))return;const a=async function(s,...i){const u=this.transaction(s,o?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(i.shift())),(await Promise.all([d[n](...i),o&&u.done]))[0]};return ae.set(t,a),a}xn(e=>({...e,get:(t,n,r)=>We(t,n)||e.get(t,n,r),has:(t,n)=>!!We(t,n)||e.has(t,n)}));/**
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
 */class Un{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kn(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Kn(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const we="@firebase/app",qe="0.10.15";/**
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
 */const _=new Bn("@firebase/app"),Wn="@firebase/app-compat",qn="@firebase/analytics-compat",zn="@firebase/analytics",Gn="@firebase/app-check-compat",Jn="@firebase/app-check",Yn="@firebase/auth",Xn="@firebase/auth-compat",Zn="@firebase/database",Qn="@firebase/data-connect",er="@firebase/database-compat",tr="@firebase/functions",nr="@firebase/functions-compat",rr="@firebase/installations",or="@firebase/installations-compat",ar="@firebase/messaging",sr="@firebase/messaging-compat",ir="@firebase/performance",cr="@firebase/performance-compat",ur="@firebase/remote-config",dr="@firebase/remote-config-compat",lr="@firebase/storage",fr="@firebase/storage-compat",hr="@firebase/firestore",pr="@firebase/vertexai",gr="@firebase/firestore-compat",mr="firebase";/**
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
 */const ye="[DEFAULT]",br={[we]:"fire-core",[Wn]:"fire-core-compat",[zn]:"fire-analytics",[qn]:"fire-analytics-compat",[Jn]:"fire-app-check",[Gn]:"fire-app-check-compat",[Yn]:"fire-auth",[Xn]:"fire-auth-compat",[Zn]:"fire-rtdb",[Qn]:"fire-data-connect",[er]:"fire-rtdb-compat",[tr]:"fire-fn",[nr]:"fire-fn-compat",[rr]:"fire-iid",[or]:"fire-iid-compat",[ar]:"fire-fcm",[sr]:"fire-fcm-compat",[ir]:"fire-perf",[cr]:"fire-perf-compat",[ur]:"fire-rc",[dr]:"fire-rc-compat",[lr]:"fire-gcs",[fr]:"fire-gcs-compat",[hr]:"fire-fst",[gr]:"fire-fst-compat",[pr]:"fire-vertex","fire-js":"fire-js",[mr]:"fire-js-all"};/**
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
 */const W=new Map,wr=new Map,ve=new Map;function ze(e,t){try{e.container.addComponent(t)}catch(n){_.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function O(e){const t=e.name;if(ve.has(t))return _.debug(`There were multiple attempts to register component ${t}.`),!1;ve.set(t,e);for(const n of W.values())ze(n,e);for(const n of wr.values())ze(n,e);return!0}function Te(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const yr={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},E=new z("app","Firebase",yr);/**
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
 */class vr{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new T("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw E.create("app-deleted",{appName:this._name})}}function mt(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ye,automaticDataCollectionEnabled:!1},t),o=r.name;if(typeof o!="string"||!o)throw E.create("bad-app-name",{appName:String(o)});if(n||(n=lt()),!n)throw E.create("no-options");const a=W.get(o);if(a){if(ge(n,a.options)&&ge(r,a.config))return a;throw E.create("duplicate-app",{appName:o})}const s=new Dn(o);for(const u of ve.values())s.addComponent(u);const i=new vr(n,r,s);return W.set(o,i),i}function _r(e=ye){const t=W.get(e);if(!t&&e===ye&&lt())return mt();if(!t)throw E.create("no-app",{appName:e});return t}function S(e,t,n){var r;let o=(r=br[e])!==null&&r!==void 0?r:e;n&&(o+=`-${n}`);const a=o.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const i=[`Unable to register library "${o}" with version "${t}":`];a&&i.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&s&&i.push("and"),s&&i.push(`version name "${t}" contains illegal characters (whitespace or "/")`),_.warn(i.join(" "));return}O(new T(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const Ir="firebase-heartbeat-database",Er=1,H="firebase-heartbeat-store";let se=null;function bt(){return se||(se=G(Ir,Er,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(H)}catch(n){console.warn(n)}}}}).catch(e=>{throw E.create("idb-open",{originalErrorMessage:e.message})})),se}async function Sr(e){try{const n=(await bt()).transaction(H),r=await n.objectStore(H).get(wt(e));return await n.done,r}catch(t){if(t instanceof L)_.warn(t.message);else{const n=E.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});_.warn(n.message)}}}async function Ge(e,t){try{const r=(await bt()).transaction(H,"readwrite");await r.objectStore(H).put(t,wt(e)),await r.done}catch(n){if(n instanceof L)_.warn(n.message);else{const r=E.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_.warn(r.message)}}}function wt(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Tr=1024,Ar=30*24*60*60*1e3;class Dr{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kr(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Je();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(s=>s.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Ar}),this._storage.overwrite(this._heartbeatsCache))}catch(r){_.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Je(),{heartbeatsToSend:r,unsentEntries:o}=Cr(this._heartbeatsCache.heartbeats),a=dt(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return _.warn(n),""}}}function Je(){return new Date().toISOString().substring(0,10)}function Cr(e,t=Tr){const n=[];let r=e.slice();for(const o of e){const a=n.find(s=>s.agent===o.agent);if(a){if(a.dates.push(o.date),Ye(n)>t){a.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Ye(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kr{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ft()?ht().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Sr(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ge(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ge(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Ye(e){return dt(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Or(e){O(new T("platform-logger",t=>new Un(t),"PRIVATE")),O(new T("heartbeat",t=>new Dr(t),"PRIVATE")),S(we,qe,e),S(we,qe,"esm2017"),S("fire-js","")}Or("");var Nr="firebase",Br="11.0.1";/**
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
 */S(Nr,Br,"app");const yt="@firebase/installations",Ae="0.6.10";/**
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
 */const vt=1e4,_t=`w:${Ae}`,It="FIS_v2",Mr="https://firebaseinstallations.googleapis.com/v1",Rr=60*60*1e3,Pr="installations",$r="Installations";/**
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
 */const Lr={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},N=new z(Pr,$r,Lr);function Et(e){return e instanceof L&&e.code.includes("request-failed")}/**
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
 */function St({projectId:e}){return`${Mr}/projects/${e}/installations`}function Tt(e){return{token:e.token,requestStatus:2,expiresIn:jr(e.expiresIn),creationTime:Date.now()}}async function At(e,t){const r=(await t.json()).error;return N.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Dt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function xr(e,{refreshToken:t}){const n=Dt(e);return n.append("Authorization",Hr(t)),n}async function Ct(e){const t=await e();return t.status>=500&&t.status<600?e():t}function jr(e){return Number(e.replace("s","000"))}function Hr(e){return`${It} ${e}`}/**
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
 */async function Fr({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=St(e),o=Dt(e),a=t.getImmediate({optional:!0});if(a){const d=await a.getHeartbeatsHeader();d&&o.append("x-firebase-client",d)}const s={fid:n,authVersion:It,appId:e.appId,sdkVersion:_t},i={method:"POST",headers:o,body:JSON.stringify(s)},u=await Ct(()=>fetch(r,i));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:Tt(d.authToken)}}else throw await At("Create Installation",u)}/**
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
 */function kt(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Vr(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Ur=/^[cdef][\w-]{21}$/,_e="";function Kr(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Wr(e);return Ur.test(n)?n:_e}catch{return _e}}function Wr(e){return Vr(e).substr(0,22)}/**
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
 */function J(e){return`${e.appName}!${e.appId}`}/**
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
 */const Ot=new Map;function Nt(e,t){const n=J(e);Bt(n,t),qr(n,t)}function Bt(e,t){const n=Ot.get(e);if(n)for(const r of n)r(t)}function qr(e,t){const n=zr();n&&n.postMessage({key:e,fid:t}),Gr()}let k=null;function zr(){return!k&&"BroadcastChannel"in self&&(k=new BroadcastChannel("[Firebase] FID Change"),k.onmessage=e=>{Bt(e.data.key,e.data.fid)}),k}function Gr(){Ot.size===0&&k&&(k.close(),k=null)}/**
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
 */const Jr="firebase-installations-database",Yr=1,B="firebase-installations-store";let ie=null;function De(){return ie||(ie=G(Jr,Yr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(B)}}})),ie}async function q(e,t){const n=J(e),o=(await De()).transaction(B,"readwrite"),a=o.objectStore(B),s=await a.get(n);return await a.put(t,n),await o.done,(!s||s.fid!==t.fid)&&Nt(e,t.fid),t}async function Mt(e){const t=J(e),r=(await De()).transaction(B,"readwrite");await r.objectStore(B).delete(t),await r.done}async function Y(e,t){const n=J(e),o=(await De()).transaction(B,"readwrite"),a=o.objectStore(B),s=await a.get(n),i=t(s);return i===void 0?await a.delete(n):await a.put(i,n),await o.done,i&&(!s||s.fid!==i.fid)&&Nt(e,i.fid),i}/**
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
 */async function Ce(e){let t;const n=await Y(e.appConfig,r=>{const o=Xr(r),a=Zr(e,o);return t=a.registrationPromise,a.installationEntry});return n.fid===_e?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Xr(e){const t=e||{fid:Kr(),registrationStatus:0};return Rt(t)}function Zr(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(N.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Qr(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:eo(e)}:{installationEntry:t}}async function Qr(e,t){try{const n=await Fr(e,t);return q(e.appConfig,n)}catch(n){throw Et(n)&&n.customData.serverCode===409?await Mt(e.appConfig):await q(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function eo(e){let t=await Xe(e.appConfig);for(;t.registrationStatus===1;)await kt(100),t=await Xe(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ce(e);return r||n}return t}function Xe(e){return Y(e,t=>{if(!t)throw N.create("installation-not-found");return Rt(t)})}function Rt(e){return to(e)?{fid:e.fid,registrationStatus:0}:e}function to(e){return e.registrationStatus===1&&e.registrationTime+vt<Date.now()}/**
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
 */async function no({appConfig:e,heartbeatServiceProvider:t},n){const r=ro(e,n),o=xr(e,n),a=t.getImmediate({optional:!0});if(a){const d=await a.getHeartbeatsHeader();d&&o.append("x-firebase-client",d)}const s={installation:{sdkVersion:_t,appId:e.appId}},i={method:"POST",headers:o,body:JSON.stringify(s)},u=await Ct(()=>fetch(r,i));if(u.ok){const d=await u.json();return Tt(d)}else throw await At("Generate Auth Token",u)}function ro(e,{fid:t}){return`${St(e)}/${t}/authTokens:generate`}/**
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
 */async function ke(e,t=!1){let n;const r=await Y(e.appConfig,a=>{if(!Pt(a))throw N.create("not-registered");const s=a.authToken;if(!t&&so(s))return a;if(s.requestStatus===1)return n=oo(e,t),a;{if(!navigator.onLine)throw N.create("app-offline");const i=co(a);return n=ao(e,i),i}});return n?await n:r.authToken}async function oo(e,t){let n=await Ze(e.appConfig);for(;n.authToken.requestStatus===1;)await kt(100),n=await Ze(e.appConfig);const r=n.authToken;return r.requestStatus===0?ke(e,t):r}function Ze(e){return Y(e,t=>{if(!Pt(t))throw N.create("not-registered");const n=t.authToken;return uo(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function ao(e,t){try{const n=await no(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await q(e.appConfig,r),n}catch(n){if(Et(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Mt(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await q(e.appConfig,r)}throw n}}function Pt(e){return e!==void 0&&e.registrationStatus===2}function so(e){return e.requestStatus===2&&!io(e)}function io(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Rr}function co(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function uo(e){return e.requestStatus===1&&e.requestTime+vt<Date.now()}/**
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
 */async function lo(e){const t=e,{installationEntry:n,registrationPromise:r}=await Ce(t);return r?r.catch(console.error):ke(t).catch(console.error),n.fid}/**
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
 */async function fo(e,t=!1){const n=e;return await ho(n),(await ke(n,t)).token}async function ho(e){const{registrationPromise:t}=await Ce(e);t&&await t}/**
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
 */function po(e){if(!e||!e.options)throw ce("App Configuration");if(!e.name)throw ce("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ce(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ce(e){return N.create("missing-app-config-values",{valueName:e})}/**
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
 */const $t="installations",go="installations-internal",mo=e=>{const t=e.getProvider("app").getImmediate(),n=po(t),r=Te(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},bo=e=>{const t=e.getProvider("app").getImmediate(),n=Te(t,$t).getImmediate();return{getId:()=>lo(n),getToken:o=>fo(n,o)}};function wo(){O(new T($t,mo,"PUBLIC")),O(new T(go,bo,"PRIVATE"))}wo();S(yt,Ae);S(yt,Ae,"esm2017");/**
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
 */const yo="/firebase-messaging-sw.js",vo="/firebase-cloud-messaging-push-scope",Lt="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",_o="https://fcmregistrations.googleapis.com/v1",xt="google.c.a.c_id",Io="google.c.a.c_l",Eo="google.c.a.ts",So="google.c.a.e";var Qe;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Qe||(Qe={}));/**
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
 */var F;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(F||(F={}));/**
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
 */function y(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function To(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),o=new Uint8Array(r.length);for(let a=0;a<r.length;++a)o[a]=r.charCodeAt(a);return o}/**
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
 */const ue="fcm_token_details_db",Ao=5,et="fcm_token_object_Store";async function Do(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(a=>a.name).includes(ue))return null;let t=null;return(await G(ue,Ao,{upgrade:async(r,o,a,s)=>{var i;if(o<2||!r.objectStoreNames.contains(et))return;const u=s.objectStore(et),d=await u.index("fcmSenderId").get(e);if(await u.clear(),!!d){if(o===2){const c=d;if(!c.auth||!c.p256dh||!c.endpoint)return;t={token:c.fcmToken,createTime:(i=c.createTime)!==null&&i!==void 0?i:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:y(c.vapidKey)}}}else if(o===3){const c=d;t={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:y(c.auth),p256dh:y(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:y(c.vapidKey)}}}else if(o===4){const c=d;t={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:y(c.auth),p256dh:y(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:y(c.vapidKey)}}}}}})).close(),await oe(ue),await oe("fcm_vapid_details_db"),await oe("undefined"),Co(t)?t:null}function Co(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const ko="firebase-messaging-database",Oo=1,V="firebase-messaging-store";let de=null;function jt(){return de||(de=G(ko,Oo,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(V)}}})),de}async function No(e){const t=Ht(e),r=await(await jt()).transaction(V).objectStore(V).get(t);if(r)return r;{const o=await Do(e.appConfig.senderId);if(o)return await Oe(e,o),o}}async function Oe(e,t){const n=Ht(e),o=(await jt()).transaction(V,"readwrite");return await o.objectStore(V).put(t,n),await o.done,t}function Ht({appConfig:e}){return e.appId}/**
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
 */const Bo={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},h=new z("messaging","Messaging",Bo);/**
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
 */async function Mo(e,t){const n=await Be(e),r=Ft(t),o={method:"POST",headers:n,body:JSON.stringify(r)};let a;try{a=await(await fetch(Ne(e.appConfig),o)).json()}catch(s){throw h.create("token-subscribe-failed",{errorInfo:s==null?void 0:s.toString()})}if(a.error){const s=a.error.message;throw h.create("token-subscribe-failed",{errorInfo:s})}if(!a.token)throw h.create("token-subscribe-no-token");return a.token}async function Ro(e,t){const n=await Be(e),r=Ft(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(r)};let a;try{a=await(await fetch(`${Ne(e.appConfig)}/${t.token}`,o)).json()}catch(s){throw h.create("token-update-failed",{errorInfo:s==null?void 0:s.toString()})}if(a.error){const s=a.error.message;throw h.create("token-update-failed",{errorInfo:s})}if(!a.token)throw h.create("token-update-no-token");return a.token}async function Po(e,t){const r={method:"DELETE",headers:await Be(e)};try{const a=await(await fetch(`${Ne(e.appConfig)}/${t}`,r)).json();if(a.error){const s=a.error.message;throw h.create("token-unsubscribe-failed",{errorInfo:s})}}catch(o){throw h.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function Ne({projectId:e}){return`${_o}/projects/${e}/registrations`}async function Be({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Ft({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const o={web:{endpoint:n,auth:t,p256dh:e}};return r!==Lt&&(o.web.applicationPubKey=r),o}/**
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
 */const $o=7*24*60*60*1e3;async function Lo(e){const t=await jo(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:y(t.getKey("auth")),p256dh:y(t.getKey("p256dh"))},r=await No(e.firebaseDependencies);if(r){if(Ho(r.subscriptionOptions,n))return Date.now()>=r.createTime+$o?xo(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Po(e.firebaseDependencies,r.token)}catch(o){console.warn(o)}return tt(e.firebaseDependencies,n)}else return tt(e.firebaseDependencies,n)}async function xo(e,t){try{const n=await Ro(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Oe(e.firebaseDependencies,r),n}catch(n){throw n}}async function tt(e,t){const r={token:await Mo(e,t),createTime:Date.now(),subscriptionOptions:t};return await Oe(e,r),r.token}async function jo(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:To(t)})}function Ho(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,o=t.auth===e.auth,a=t.p256dh===e.p256dh;return n&&r&&o&&a}/**
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
 */function nt(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Fo(t,e),Vo(t,e),Uo(t,e),t}function Fo(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const o=t.notification.image;o&&(e.notification.image=o);const a=t.notification.icon;a&&(e.notification.icon=a)}function Vo(e,t){t.data&&(e.data=t.data)}function Uo(e,t){var n,r,o,a,s;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const i=(o=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&o!==void 0?o:(a=t.notification)===null||a===void 0?void 0:a.click_action;i&&(e.fcmOptions.link=i);const u=(s=t.fcmOptions)===null||s===void 0?void 0:s.analytics_label;u&&(e.fcmOptions.analyticsLabel=u)}/**
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
 */function Ko(e){return typeof e=="object"&&!!e&&xt in e}/**
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
 */function Wo(e){if(!e||!e.options)throw le("App Configuration Object");if(!e.name)throw le("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw le(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function le(e){return h.create("missing-app-config-values",{valueName:e})}/**
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
 */class qo{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=Wo(t);this.firebaseDependencies={app:t,appConfig:o,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function zo(e){try{e.swRegistration=await navigator.serviceWorker.register(yo,{scope:vo}),e.swRegistration.update().catch(()=>{})}catch(t){throw h.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
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
 */async function Go(e,t){if(!t&&!e.swRegistration&&await zo(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw h.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function Jo(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Lt)}/**
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
 */async function Vt(e,t){if(!navigator)throw h.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw h.create("permission-blocked");return await Jo(e,t==null?void 0:t.vapidKey),await Go(e,t==null?void 0:t.serviceWorkerRegistration),Lo(e)}/**
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
 */async function Yo(e,t,n){const r=Xo(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[xt],message_name:n[Io],message_time:n[Eo],message_device_time:Math.floor(Date.now()/1e3)})}function Xo(e){switch(e){case F.NOTIFICATION_CLICKED:return"notification_open";case F.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function Zo(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===F.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(nt(n)):e.onMessageHandler.next(nt(n)));const r=n.data;Ko(r)&&r[So]==="1"&&await Yo(e,n.messageType,r)}const rt="@firebase/messaging",ot="0.12.13";/**
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
 */const Qo=e=>{const t=new qo(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Zo(t,n)),t},ea=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>Vt(t,r)}};function ta(){O(new T("messaging",Qo,"PUBLIC")),O(new T("messaging-internal",ea,"PRIVATE")),S(rt,ot),S(rt,ot,"esm2017")}/**
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
 */async function na(){try{await ht()}catch{return!1}return typeof window<"u"&&ft()&&vn()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function ra(e,t){if(!navigator)throw h.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
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
 */function oa(e=_r()){return na().then(t=>{if(!t)throw h.create("unsupported-browser")},t=>{throw h.create("indexed-db-unsupported")}),Te(Ee(e),"messaging").getImmediate()}async function aa(e,t){return e=Ee(e),Vt(e,t)}function sa(e,t){return e=Ee(e),ra(e,t)}ta();const ia={apiKey:"AIzaSyCEg8Zjd1RtY7UXNKKU6OOqrF6DCOS4Hpw",authDomain:"indi-sys.firebaseapp.com",projectId:"indi-sys",storageBucket:"indi-sys.appspot.com",messagingSenderId:"418797173759",appId:"1:418797173759:web:8981b33c9a05246bd985ca",measurementId:"G-ZCYPNLXHE8"};let fe=null,he=null;function ca(){return fe==null&&(fe=mt(ia)),fe}function at(){return he==null&&(he=oa(ca())),he}function ua(e){return new Promise((t,n)=>{setTimeout(()=>t(0),e)})}var f=[];for(var pe=0;pe<256;++pe)f.push((pe+256).toString(16).slice(1));function da(e,t=0){return(f[e[t+0]]+f[e[t+1]]+f[e[t+2]]+f[e[t+3]]+"-"+f[e[t+4]]+f[e[t+5]]+"-"+f[e[t+6]]+f[e[t+7]]+"-"+f[e[t+8]]+f[e[t+9]]+"-"+f[e[t+10]]+f[e[t+11]]+f[e[t+12]]+f[e[t+13]]+f[e[t+14]]+f[e[t+15]]).toLowerCase()}var K,la=new Uint8Array(16);function fa(){if(!K&&(K=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!K))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return K(la)}var ha=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const st={randomUUID:ha};function pa(e,t,n){if(st.randomUUID&&!t&&!e)return st.randomUUID();e=e||{};var r=e.random||(e.rng||fa)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,da(r)}const Ut=()=>{const e="device_id";let t=localStorage.getItem(e);return t==null&&(t=pa(),localStorage.setItem(e,t)),t},ga=async e=>{const t=new TextEncoder().encode(e),n=await window.crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map(a=>a.toString(16).padStart(2,"0")).join("")};async function Kt(e){const t="https://indisys.io.vn",n=Ut(),r=localStorage.getItem(rn.accessToken);console.log(n);var o=new Headers({"Content-Type":"application/json","device-encode":n});const a=e.customHeader;for(var s in a){const c=a[s];s==""||c==""||o.append(s,c)}console.log(o.values()),r!=null&&o.set("Authorization",`Bearer ${r}`);var i;if(e.method=="GET"&&e.param!=null){const c=new URLSearchParams(e.param);i=new URL(e.path+`&${c.toString()}`,t)}else i=new URL(e.path,t);const u=new Request(i,{method:e.method,body:e.method=="GET"||e.param==null?null:JSON.stringify(e.param),headers:o});return(await fetch(u)).json()}const ma=async(e,t,n)=>{if(C(t).length==0||C(n).length==0)return;const r=await ga(C(n)),o={username:C(t),password:r};console.log(o);try{const s=(await Kt({path:"/user/logIn",param:o,method:"POST",customHeader:null})).result.accessToken;on(s)}catch(a){console.error(a)}};var ba=U('<div class="bg-purple-100 rounded-lg p-2 flex flex-col gap-2 min-w-80 relative"><button class="absolute right-0 top-0 w-8 h-8 text-gray-500">x</button> <div class="font-bold text-purple-700"> </div> <div> </div></div>'),wa=U('<section class="flex flex-col gap-4"><input class="rounded-lg" type="text" placeholder="username"> <input class="rounded-lg" type="password" placeholder="password"> <button class="text-purple-600 font-bold">Log in</button></section>'),ya=U("<div>Hello user</div>"),va=U('<div class="relative flex items-center justify-center h-lvh"><div class="absolute top-4 right-4"><!></div> <!></div>'),_a=U("<div>Waiting for updating device</div>");function ka(e,t){Xt(t,!0);const n=nn(),r=()=>Me(te,"$currentNotiObj",n),o=()=>Me(an,"$accessTokenState",n);let a=Q(!1),s=Q(""),i=Q("");sn(async()=>{sa(at(),g=>{var m,w;const x=((m=g.notification)==null?void 0:m.title)??"No title",A=((w=g.notification)==null?void 0:w.body)??"No body";te.update(I=>({title:x,body:A,datetime:new Date}))}),console.log("Weo weo");var c=null;try{await Notification.requestPermission()=="granted"&&(await ua(200),c=await aa(at(),{vapidKey:"BJT7RHvIki_romv4w9EIcrWh5bJyDfz_pQdtqmS_yiPup8gmyvDXGAq3UpUzCL4BPKziYaCT55t3657KbNDNJ8o"}))}catch(g){console.error(g)}const p={deviceEncode:Ut(),type:3,fcmToken:c};console.log(p);const b=await Kt({path:"/device/register",method:"POST",param:p,customHeader:null});console.log(b),Z(a,!0)});var u=qt(),d=Zt(u);ee(d,()=>C(a),c=>{var p=va(),b=P(p),g=P(b);ee(g,()=>r()!=null,A=>{var m=ba(),w=P(m);w.__click=()=>{te.set(null)};var I=j(w,2),X=P(I,!0);$(I);var M=j(I,2),Wt=P(M,!0);$(M),$(m),en(()=>{Re(X,r().title),Re(Wt,r().body)}),R(A,m)}),$(b);var x=j(b,2);ee(x,()=>o()==null,A=>{var m=wa(),w=P(m);$e(w);var I=j(w,2);$e(I);var X=j(I,2);X.__click=[ma,s,i],$(m),xe(w,()=>C(s),M=>Z(s,M)),xe(I,()=>C(i),M=>Z(i,M)),R(A,m)},A=>{var m=ya();R(A,m)}),$(p),R(c,p)},c=>{var p=_a();R(c,p)}),R(e,u),Qt()}tn(["click"]);export{ka as component,Ca as universal};

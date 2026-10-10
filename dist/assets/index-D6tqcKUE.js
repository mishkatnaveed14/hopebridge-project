(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function ST(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Gy={exports:{}},Jd={},Wy={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sc=Symbol.for("react.element"),MT=Symbol.for("react.portal"),ET=Symbol.for("react.fragment"),TT=Symbol.for("react.strict_mode"),wT=Symbol.for("react.profiler"),AT=Symbol.for("react.provider"),CT=Symbol.for("react.context"),bT=Symbol.for("react.forward_ref"),RT=Symbol.for("react.suspense"),PT=Symbol.for("react.memo"),LT=Symbol.for("react.lazy"),q_=Symbol.iterator;function NT(n){return n===null||typeof n!="object"?null:(n=q_&&n[q_]||n["@@iterator"],typeof n=="function"?n:null)}var Xy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yy=Object.assign,qy={};function Pl(n,e,t){this.props=n,this.context=e,this.refs=qy,this.updater=t||Xy}Pl.prototype.isReactComponent={};Pl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Pl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function $y(){}$y.prototype=Pl.prototype;function n0(n,e,t){this.props=n,this.context=e,this.refs=qy,this.updater=t||Xy}var i0=n0.prototype=new $y;i0.constructor=n0;Yy(i0,Pl.prototype);i0.isPureReactComponent=!0;var $_=Array.isArray,jy=Object.prototype.hasOwnProperty,r0={current:null},Ky={key:!0,ref:!0,__self:!0,__source:!0};function Zy(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jy.call(e,i)&&!Ky.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Sc,type:n,key:s,ref:o,props:r,_owner:r0.current}}function DT(n,e){return{$$typeof:Sc,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function s0(n){return typeof n=="object"&&n!==null&&n.$$typeof===Sc}function IT(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var j_=/\/+/g;function Mh(n,e){return typeof n=="object"&&n!==null&&n.key!=null?IT(""+n.key):e.toString(36)}function Uf(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Sc:case MT:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Mh(o,0):i,$_(r)?(t="",n!=null&&(t=n.replace(j_,"$&/")+"/"),Uf(r,e,t,"",function(u){return u})):r!=null&&(s0(r)&&(r=DT(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(j_,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",$_(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Mh(s,a);o+=Uf(s,e,t,l,r)}else if(l=NT(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Mh(s,a++),o+=Uf(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pc(n,e,t){if(n==null)return n;var i=[],r=0;return Uf(n,i,"","",function(s){return e.call(t,s,r++)}),i}function UT(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var fi={current:null},Of={transition:null},OT={ReactCurrentDispatcher:fi,ReactCurrentBatchConfig:Of,ReactCurrentOwner:r0};function Jy(){throw Error("act(...) is not supported in production builds of React.")}pt.Children={map:Pc,forEach:function(n,e,t){Pc(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Pc(n,function(){e++}),e},toArray:function(n){return Pc(n,function(e){return e})||[]},only:function(n){if(!s0(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};pt.Component=Pl;pt.Fragment=ET;pt.Profiler=wT;pt.PureComponent=n0;pt.StrictMode=TT;pt.Suspense=RT;pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OT;pt.act=Jy;pt.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Yy({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=r0.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)jy.call(e,l)&&!Ky.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Sc,type:n.type,key:r,ref:s,props:i,_owner:o}};pt.createContext=function(n){return n={$$typeof:CT,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:AT,_context:n},n.Consumer=n};pt.createElement=Zy;pt.createFactory=function(n){var e=Zy.bind(null,n);return e.type=n,e};pt.createRef=function(){return{current:null}};pt.forwardRef=function(n){return{$$typeof:bT,render:n}};pt.isValidElement=s0;pt.lazy=function(n){return{$$typeof:LT,_payload:{_status:-1,_result:n},_init:UT}};pt.memo=function(n,e){return{$$typeof:PT,type:n,compare:e===void 0?null:e}};pt.startTransition=function(n){var e=Of.transition;Of.transition={};try{n()}finally{Of.transition=e}};pt.unstable_act=Jy;pt.useCallback=function(n,e){return fi.current.useCallback(n,e)};pt.useContext=function(n){return fi.current.useContext(n)};pt.useDebugValue=function(){};pt.useDeferredValue=function(n){return fi.current.useDeferredValue(n)};pt.useEffect=function(n,e){return fi.current.useEffect(n,e)};pt.useId=function(){return fi.current.useId()};pt.useImperativeHandle=function(n,e,t){return fi.current.useImperativeHandle(n,e,t)};pt.useInsertionEffect=function(n,e){return fi.current.useInsertionEffect(n,e)};pt.useLayoutEffect=function(n,e){return fi.current.useLayoutEffect(n,e)};pt.useMemo=function(n,e){return fi.current.useMemo(n,e)};pt.useReducer=function(n,e,t){return fi.current.useReducer(n,e,t)};pt.useRef=function(n){return fi.current.useRef(n)};pt.useState=function(n){return fi.current.useState(n)};pt.useSyncExternalStore=function(n,e,t){return fi.current.useSyncExternalStore(n,e,t)};pt.useTransition=function(){return fi.current.useTransition()};pt.version="18.3.1";Wy.exports=pt;var li=Wy.exports;const js=ST(li);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FT=li,kT=Symbol.for("react.element"),BT=Symbol.for("react.fragment"),zT=Object.prototype.hasOwnProperty,VT=FT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,HT={key:!0,ref:!0,__self:!0,__source:!0};function Qy(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)zT.call(e,i)&&!HT.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:kT,type:n,key:s,ref:o,props:r,_owner:VT.current}}Jd.Fragment=BT;Jd.jsx=Qy;Jd.jsxs=Qy;Gy.exports=Jd;var U=Gy.exports,Xp={},eS={exports:{}},$i={},tS={exports:{}},nS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(V,z){var R=V.length;V.push(z);e:for(;0<R;){var K=R-1>>>1,pe=V[K];if(0<r(pe,z))V[K]=z,V[R]=pe,R=K;else break e}}function t(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var z=V[0],R=V.pop();if(R!==z){V[0]=R;e:for(var K=0,pe=V.length,we=pe>>>1;K<we;){var ze=2*(K+1)-1,We=V[ze],qe=ze+1,J=V[qe];if(0>r(We,R))qe<pe&&0>r(J,We)?(V[K]=J,V[qe]=R,K=qe):(V[K]=We,V[ze]=R,K=ze);else if(qe<pe&&0>r(J,R))V[K]=J,V[qe]=R,K=qe;else break e}}return z}function r(V,z){var R=V.sortIndex-z.sortIndex;return R!==0?R:V.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,h=!1,m=!1,_=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(V){for(var z=t(u);z!==null;){if(z.callback===null)i(u);else if(z.startTime<=V)i(u),z.sortIndex=z.expirationTime,e(l,z);else break;z=t(u)}}function x(V){if(_=!1,S(V),!m)if(t(l)!==null)m=!0,j(E);else{var z=t(u);z!==null&&B(x,z.startTime-V)}}function E(V,z){m=!1,_&&(_=!1,p(y),y=-1),h=!0;var R=f;try{for(S(z),d=t(l);d!==null&&(!(d.expirationTime>z)||V&&!L());){var K=d.callback;if(typeof K=="function"){d.callback=null,f=d.priorityLevel;var pe=K(d.expirationTime<=z);z=n.unstable_now(),typeof pe=="function"?d.callback=pe:d===t(l)&&i(l),S(z)}else i(l);d=t(l)}if(d!==null)var we=!0;else{var ze=t(u);ze!==null&&B(x,ze.startTime-z),we=!1}return we}finally{d=null,f=R,h=!1}}var T=!1,w=null,y=-1,A=5,b=-1;function L(){return!(n.unstable_now()-b<A)}function N(){if(w!==null){var V=n.unstable_now();b=V;var z=!0;try{z=w(!0,V)}finally{z?W():(T=!1,w=null)}}else T=!1}var W;if(typeof v=="function")W=function(){v(N)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,H=I.port2;I.port1.onmessage=N,W=function(){H.postMessage(null)}}else W=function(){g(N,0)};function j(V){w=V,T||(T=!0,W())}function B(V,z){y=g(function(){V(n.unstable_now())},z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(V){V.callback=null},n.unstable_continueExecution=function(){m||h||(m=!0,j(E))},n.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<V?Math.floor(1e3/V):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(V){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var R=f;f=z;try{return V()}finally{f=R}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(V,z){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var R=f;f=V;try{return z()}finally{f=R}},n.unstable_scheduleCallback=function(V,z,R){var K=n.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?K+R:K):R=K,V){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=R+pe,V={id:c++,callback:z,priorityLevel:V,startTime:R,expirationTime:pe,sortIndex:-1},R>K?(V.sortIndex=R,e(u,V),t(l)===null&&V===t(u)&&(_?(p(y),y=-1):_=!0,B(x,R-K))):(V.sortIndex=pe,e(l,V),m||h||(m=!0,j(E))),V},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(V){var z=f;return function(){var R=f;f=z;try{return V.apply(this,arguments)}finally{f=R}}}})(nS);tS.exports=nS;var GT=tS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WT=li,Xi=GT;function ge(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var iS=new Set,zu={};function oa(n,e){pl(n,e),pl(n+"Capture",e)}function pl(n,e){for(zu[n]=e,n=0;n<e.length;n++)iS.add(e[n])}var vs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yp=Object.prototype.hasOwnProperty,XT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,K_={},Z_={};function YT(n){return Yp.call(Z_,n)?!0:Yp.call(K_,n)?!1:XT.test(n)?Z_[n]=!0:(K_[n]=!0,!1)}function qT(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function $T(n,e,t,i){if(e===null||typeof e>"u"||qT(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function di(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var In={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){In[n]=new di(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];In[e]=new di(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){In[n]=new di(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){In[n]=new di(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){In[n]=new di(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){In[n]=new di(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){In[n]=new di(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){In[n]=new di(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){In[n]=new di(n,5,!1,n.toLowerCase(),null,!1,!1)});var o0=/[\-:]([a-z])/g;function a0(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(o0,a0);In[e]=new di(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(o0,a0);In[e]=new di(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(o0,a0);In[e]=new di(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){In[n]=new di(n,1,!1,n.toLowerCase(),null,!1,!1)});In.xlinkHref=new di("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){In[n]=new di(n,1,!1,n.toLowerCase(),null,!0,!0)});function l0(n,e,t,i){var r=In.hasOwnProperty(e)?In[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($T(e,t,r,i)&&(t=null),i||r===null?YT(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ws=WT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Lc=Symbol.for("react.element"),Ua=Symbol.for("react.portal"),Oa=Symbol.for("react.fragment"),u0=Symbol.for("react.strict_mode"),qp=Symbol.for("react.profiler"),rS=Symbol.for("react.provider"),sS=Symbol.for("react.context"),c0=Symbol.for("react.forward_ref"),$p=Symbol.for("react.suspense"),jp=Symbol.for("react.suspense_list"),f0=Symbol.for("react.memo"),Os=Symbol.for("react.lazy"),oS=Symbol.for("react.offscreen"),J_=Symbol.iterator;function Ol(n){return n===null||typeof n!="object"?null:(n=J_&&n[J_]||n["@@iterator"],typeof n=="function"?n:null)}var jt=Object.assign,Eh;function nu(n){if(Eh===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Eh=e&&e[1]||""}return`
`+Eh+n}var Th=!1;function wh(n,e){if(!n||Th)return"";Th=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Th=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?nu(n):""}function jT(n){switch(n.tag){case 5:return nu(n.type);case 16:return nu("Lazy");case 13:return nu("Suspense");case 19:return nu("SuspenseList");case 0:case 2:case 15:return n=wh(n.type,!1),n;case 11:return n=wh(n.type.render,!1),n;case 1:return n=wh(n.type,!0),n;default:return""}}function Kp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Oa:return"Fragment";case Ua:return"Portal";case qp:return"Profiler";case u0:return"StrictMode";case $p:return"Suspense";case jp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case sS:return(n.displayName||"Context")+".Consumer";case rS:return(n._context.displayName||"Context")+".Provider";case c0:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case f0:return e=n.displayName||null,e!==null?e:Kp(n.type)||"Memo";case Os:e=n._payload,n=n._init;try{return Kp(n(e))}catch{}}return null}function KT(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kp(e);case 8:return e===u0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ao(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function aS(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ZT(n){var e=aS(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Nc(n){n._valueTracker||(n._valueTracker=ZT(n))}function lS(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=aS(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function ld(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Zp(n,e){var t=e.checked;return jt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Q_(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=ao(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function uS(n,e){e=e.checked,e!=null&&l0(n,"checked",e,!1)}function Jp(n,e){uS(n,e);var t=ao(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Qp(n,e.type,t):e.hasOwnProperty("defaultValue")&&Qp(n,e.type,ao(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function ev(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Qp(n,e,t){(e!=="number"||ld(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var iu=Array.isArray;function Qa(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+ao(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function em(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ge(91));return jt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function tv(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ge(92));if(iu(t)){if(1<t.length)throw Error(ge(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:ao(t)}}function cS(n,e){var t=ao(e.value),i=ao(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function nv(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function fS(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tm(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?fS(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Dc,dS=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Dc=Dc||document.createElement("div"),Dc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Dc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Vu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var gu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},JT=["Webkit","ms","Moz","O"];Object.keys(gu).forEach(function(n){JT.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),gu[e]=gu[n]})});function hS(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||gu.hasOwnProperty(n)&&gu[n]?(""+e).trim():e+"px"}function pS(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=hS(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var QT=jt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nm(n,e){if(e){if(QT[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ge(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ge(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ge(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ge(62))}}function im(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rm=null;function d0(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var sm=null,el=null,tl=null;function iv(n){if(n=Tc(n)){if(typeof sm!="function")throw Error(ge(280));var e=n.stateNode;e&&(e=ih(e),sm(n.stateNode,n.type,e))}}function mS(n){el?tl?tl.push(n):tl=[n]:el=n}function gS(){if(el){var n=el,e=tl;if(tl=el=null,iv(n),e)for(n=0;n<e.length;n++)iv(e[n])}}function _S(n,e){return n(e)}function vS(){}var Ah=!1;function xS(n,e,t){if(Ah)return n(e,t);Ah=!0;try{return _S(n,e,t)}finally{Ah=!1,(el!==null||tl!==null)&&(vS(),gS())}}function Hu(n,e){var t=n.stateNode;if(t===null)return null;var i=ih(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ge(231,e,typeof t));return t}var om=!1;if(vs)try{var Fl={};Object.defineProperty(Fl,"passive",{get:function(){om=!0}}),window.addEventListener("test",Fl,Fl),window.removeEventListener("test",Fl,Fl)}catch{om=!1}function ew(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var _u=!1,ud=null,cd=!1,am=null,tw={onError:function(n){_u=!0,ud=n}};function nw(n,e,t,i,r,s,o,a,l){_u=!1,ud=null,ew.apply(tw,arguments)}function iw(n,e,t,i,r,s,o,a,l){if(nw.apply(this,arguments),_u){if(_u){var u=ud;_u=!1,ud=null}else throw Error(ge(198));cd||(cd=!0,am=u)}}function aa(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function yS(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function rv(n){if(aa(n)!==n)throw Error(ge(188))}function rw(n){var e=n.alternate;if(!e){if(e=aa(n),e===null)throw Error(ge(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return rv(r),n;if(s===i)return rv(r),e;s=s.sibling}throw Error(ge(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ge(189))}}if(t.alternate!==i)throw Error(ge(190))}if(t.tag!==3)throw Error(ge(188));return t.stateNode.current===t?n:e}function SS(n){return n=rw(n),n!==null?MS(n):null}function MS(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=MS(n);if(e!==null)return e;n=n.sibling}return null}var ES=Xi.unstable_scheduleCallback,sv=Xi.unstable_cancelCallback,sw=Xi.unstable_shouldYield,ow=Xi.unstable_requestPaint,nn=Xi.unstable_now,aw=Xi.unstable_getCurrentPriorityLevel,h0=Xi.unstable_ImmediatePriority,TS=Xi.unstable_UserBlockingPriority,fd=Xi.unstable_NormalPriority,lw=Xi.unstable_LowPriority,wS=Xi.unstable_IdlePriority,Qd=null,Hr=null;function uw(n){if(Hr&&typeof Hr.onCommitFiberRoot=="function")try{Hr.onCommitFiberRoot(Qd,n,void 0,(n.current.flags&128)===128)}catch{}}var Er=Math.clz32?Math.clz32:dw,cw=Math.log,fw=Math.LN2;function dw(n){return n>>>=0,n===0?32:31-(cw(n)/fw|0)|0}var Ic=64,Uc=4194304;function ru(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function dd(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=ru(a):(s&=o,s!==0&&(i=ru(s)))}else o=t&~r,o!==0?i=ru(o):s!==0&&(i=ru(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Er(e),r=1<<t,i|=n[t],e&=~r;return i}function hw(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pw(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Er(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=hw(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function lm(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function AS(){var n=Ic;return Ic<<=1,!(Ic&4194240)&&(Ic=64),n}function Ch(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Mc(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Er(e),n[e]=t}function mw(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Er(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function p0(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Er(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var wt=0;function CS(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var bS,m0,RS,PS,LS,um=!1,Oc=[],Ks=null,Zs=null,Js=null,Gu=new Map,Wu=new Map,Bs=[],gw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ov(n,e){switch(n){case"focusin":case"focusout":Ks=null;break;case"dragenter":case"dragleave":Zs=null;break;case"mouseover":case"mouseout":Js=null;break;case"pointerover":case"pointerout":Gu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wu.delete(e.pointerId)}}function kl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Tc(e),e!==null&&m0(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function _w(n,e,t,i,r){switch(e){case"focusin":return Ks=kl(Ks,n,e,t,i,r),!0;case"dragenter":return Zs=kl(Zs,n,e,t,i,r),!0;case"mouseover":return Js=kl(Js,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Gu.set(s,kl(Gu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Wu.set(s,kl(Wu.get(s)||null,n,e,t,i,r)),!0}return!1}function NS(n){var e=No(n.target);if(e!==null){var t=aa(e);if(t!==null){if(e=t.tag,e===13){if(e=yS(t),e!==null){n.blockedOn=e,LS(n.priority,function(){RS(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ff(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=cm(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);rm=i,t.target.dispatchEvent(i),rm=null}else return e=Tc(t),e!==null&&m0(e),n.blockedOn=t,!1;e.shift()}return!0}function av(n,e,t){Ff(n)&&t.delete(e)}function vw(){um=!1,Ks!==null&&Ff(Ks)&&(Ks=null),Zs!==null&&Ff(Zs)&&(Zs=null),Js!==null&&Ff(Js)&&(Js=null),Gu.forEach(av),Wu.forEach(av)}function Bl(n,e){n.blockedOn===e&&(n.blockedOn=null,um||(um=!0,Xi.unstable_scheduleCallback(Xi.unstable_NormalPriority,vw)))}function Xu(n){function e(r){return Bl(r,n)}if(0<Oc.length){Bl(Oc[0],n);for(var t=1;t<Oc.length;t++){var i=Oc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ks!==null&&Bl(Ks,n),Zs!==null&&Bl(Zs,n),Js!==null&&Bl(Js,n),Gu.forEach(e),Wu.forEach(e),t=0;t<Bs.length;t++)i=Bs[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Bs.length&&(t=Bs[0],t.blockedOn===null);)NS(t),t.blockedOn===null&&Bs.shift()}var nl=ws.ReactCurrentBatchConfig,hd=!0;function xw(n,e,t,i){var r=wt,s=nl.transition;nl.transition=null;try{wt=1,g0(n,e,t,i)}finally{wt=r,nl.transition=s}}function yw(n,e,t,i){var r=wt,s=nl.transition;nl.transition=null;try{wt=4,g0(n,e,t,i)}finally{wt=r,nl.transition=s}}function g0(n,e,t,i){if(hd){var r=cm(n,e,t,i);if(r===null)Fh(n,e,i,pd,t),ov(n,i);else if(_w(r,n,e,t,i))i.stopPropagation();else if(ov(n,i),e&4&&-1<gw.indexOf(n)){for(;r!==null;){var s=Tc(r);if(s!==null&&bS(s),s=cm(n,e,t,i),s===null&&Fh(n,e,i,pd,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Fh(n,e,i,null,t)}}var pd=null;function cm(n,e,t,i){if(pd=null,n=d0(i),n=No(n),n!==null)if(e=aa(n),e===null)n=null;else if(t=e.tag,t===13){if(n=yS(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return pd=n,null}function DS(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(aw()){case h0:return 1;case TS:return 4;case fd:case lw:return 16;case wS:return 536870912;default:return 16}default:return 16}}var Hs=null,_0=null,kf=null;function IS(){if(kf)return kf;var n,e=_0,t=e.length,i,r="value"in Hs?Hs.value:Hs.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return kf=r.slice(n,1<i?1-i:void 0)}function Bf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Fc(){return!0}function lv(){return!1}function ji(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fc:lv,this.isPropagationStopped=lv,this}return jt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Fc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Fc)},persist:function(){},isPersistent:Fc}),e}var Ll={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},v0=ji(Ll),Ec=jt({},Ll,{view:0,detail:0}),Sw=ji(Ec),bh,Rh,zl,eh=jt({},Ec,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:x0,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==zl&&(zl&&n.type==="mousemove"?(bh=n.screenX-zl.screenX,Rh=n.screenY-zl.screenY):Rh=bh=0,zl=n),bh)},movementY:function(n){return"movementY"in n?n.movementY:Rh}}),uv=ji(eh),Mw=jt({},eh,{dataTransfer:0}),Ew=ji(Mw),Tw=jt({},Ec,{relatedTarget:0}),Ph=ji(Tw),ww=jt({},Ll,{animationName:0,elapsedTime:0,pseudoElement:0}),Aw=ji(ww),Cw=jt({},Ll,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),bw=ji(Cw),Rw=jt({},Ll,{data:0}),cv=ji(Rw),Pw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dw(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Nw[n])?!!e[n]:!1}function x0(){return Dw}var Iw=jt({},Ec,{key:function(n){if(n.key){var e=Pw[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Bf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Lw[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:x0,charCode:function(n){return n.type==="keypress"?Bf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Bf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Uw=ji(Iw),Ow=jt({},eh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fv=ji(Ow),Fw=jt({},Ec,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:x0}),kw=ji(Fw),Bw=jt({},Ll,{propertyName:0,elapsedTime:0,pseudoElement:0}),zw=ji(Bw),Vw=jt({},eh,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Hw=ji(Vw),Gw=[9,13,27,32],y0=vs&&"CompositionEvent"in window,vu=null;vs&&"documentMode"in document&&(vu=document.documentMode);var Ww=vs&&"TextEvent"in window&&!vu,US=vs&&(!y0||vu&&8<vu&&11>=vu),dv=" ",hv=!1;function OS(n,e){switch(n){case"keyup":return Gw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function FS(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Fa=!1;function Xw(n,e){switch(n){case"compositionend":return FS(e);case"keypress":return e.which!==32?null:(hv=!0,dv);case"textInput":return n=e.data,n===dv&&hv?null:n;default:return null}}function Yw(n,e){if(Fa)return n==="compositionend"||!y0&&OS(n,e)?(n=IS(),kf=_0=Hs=null,Fa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return US&&e.locale!=="ko"?null:e.data;default:return null}}var qw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pv(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!qw[n.type]:e==="textarea"}function kS(n,e,t,i){mS(i),e=md(e,"onChange"),0<e.length&&(t=new v0("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var xu=null,Yu=null;function $w(n){jS(n,0)}function th(n){var e=za(n);if(lS(e))return n}function jw(n,e){if(n==="change")return e}var BS=!1;if(vs){var Lh;if(vs){var Nh="oninput"in document;if(!Nh){var mv=document.createElement("div");mv.setAttribute("oninput","return;"),Nh=typeof mv.oninput=="function"}Lh=Nh}else Lh=!1;BS=Lh&&(!document.documentMode||9<document.documentMode)}function gv(){xu&&(xu.detachEvent("onpropertychange",zS),Yu=xu=null)}function zS(n){if(n.propertyName==="value"&&th(Yu)){var e=[];kS(e,Yu,n,d0(n)),xS($w,e)}}function Kw(n,e,t){n==="focusin"?(gv(),xu=e,Yu=t,xu.attachEvent("onpropertychange",zS)):n==="focusout"&&gv()}function Zw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return th(Yu)}function Jw(n,e){if(n==="click")return th(e)}function Qw(n,e){if(n==="input"||n==="change")return th(e)}function e2(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Ar=typeof Object.is=="function"?Object.is:e2;function qu(n,e){if(Ar(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Yp.call(e,r)||!Ar(n[r],e[r]))return!1}return!0}function _v(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function vv(n,e){var t=_v(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=_v(t)}}function VS(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?VS(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function HS(){for(var n=window,e=ld();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=ld(n.document)}return e}function S0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function t2(n){var e=HS(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&VS(t.ownerDocument.documentElement,t)){if(i!==null&&S0(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=vv(t,s);var o=vv(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var n2=vs&&"documentMode"in document&&11>=document.documentMode,ka=null,fm=null,yu=null,dm=!1;function xv(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;dm||ka==null||ka!==ld(i)||(i=ka,"selectionStart"in i&&S0(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),yu&&qu(yu,i)||(yu=i,i=md(fm,"onSelect"),0<i.length&&(e=new v0("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ka)))}function kc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ba={animationend:kc("Animation","AnimationEnd"),animationiteration:kc("Animation","AnimationIteration"),animationstart:kc("Animation","AnimationStart"),transitionend:kc("Transition","TransitionEnd")},Dh={},GS={};vs&&(GS=document.createElement("div").style,"AnimationEvent"in window||(delete Ba.animationend.animation,delete Ba.animationiteration.animation,delete Ba.animationstart.animation),"TransitionEvent"in window||delete Ba.transitionend.transition);function nh(n){if(Dh[n])return Dh[n];if(!Ba[n])return n;var e=Ba[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in GS)return Dh[n]=e[t];return n}var WS=nh("animationend"),XS=nh("animationiteration"),YS=nh("animationstart"),qS=nh("transitionend"),$S=new Map,yv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mo(n,e){$S.set(n,e),oa(e,[n])}for(var Ih=0;Ih<yv.length;Ih++){var Uh=yv[Ih],i2=Uh.toLowerCase(),r2=Uh[0].toUpperCase()+Uh.slice(1);mo(i2,"on"+r2)}mo(WS,"onAnimationEnd");mo(XS,"onAnimationIteration");mo(YS,"onAnimationStart");mo("dblclick","onDoubleClick");mo("focusin","onFocus");mo("focusout","onBlur");mo(qS,"onTransitionEnd");pl("onMouseEnter",["mouseout","mouseover"]);pl("onMouseLeave",["mouseout","mouseover"]);pl("onPointerEnter",["pointerout","pointerover"]);pl("onPointerLeave",["pointerout","pointerover"]);oa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));oa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));oa("onBeforeInput",["compositionend","keypress","textInput","paste"]);oa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));oa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));oa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var su="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s2=new Set("cancel close invalid load scroll toggle".split(" ").concat(su));function Sv(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,iw(i,e,void 0,n),n.currentTarget=null}function jS(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Sv(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Sv(r,a,u),s=l}}}if(cd)throw n=am,cd=!1,am=null,n}function Ft(n,e){var t=e[_m];t===void 0&&(t=e[_m]=new Set);var i=n+"__bubble";t.has(i)||(KS(e,n,2,!1),t.add(i))}function Oh(n,e,t){var i=0;e&&(i|=4),KS(t,n,i,e)}var Bc="_reactListening"+Math.random().toString(36).slice(2);function $u(n){if(!n[Bc]){n[Bc]=!0,iS.forEach(function(t){t!=="selectionchange"&&(s2.has(t)||Oh(t,!1,n),Oh(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Bc]||(e[Bc]=!0,Oh("selectionchange",!1,e))}}function KS(n,e,t,i){switch(DS(e)){case 1:var r=xw;break;case 4:r=yw;break;default:r=g0}t=r.bind(null,e,t,n),r=void 0,!om||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Fh(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=No(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}xS(function(){var u=s,c=d0(t),d=[];e:{var f=$S.get(n);if(f!==void 0){var h=v0,m=n;switch(n){case"keypress":if(Bf(t)===0)break e;case"keydown":case"keyup":h=Uw;break;case"focusin":m="focus",h=Ph;break;case"focusout":m="blur",h=Ph;break;case"beforeblur":case"afterblur":h=Ph;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=uv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Ew;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=kw;break;case WS:case XS:case YS:h=Aw;break;case qS:h=zw;break;case"scroll":h=Sw;break;case"wheel":h=Hw;break;case"copy":case"cut":case"paste":h=bw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=fv}var _=(e&4)!==0,g=!_&&n==="scroll",p=_?f!==null?f+"Capture":null:f;_=[];for(var v=u,S;v!==null;){S=v;var x=S.stateNode;if(S.tag===5&&x!==null&&(S=x,p!==null&&(x=Hu(v,p),x!=null&&_.push(ju(v,x,S)))),g)break;v=v.return}0<_.length&&(f=new h(f,m,null,t,c),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",h=n==="mouseout"||n==="pointerout",f&&t!==rm&&(m=t.relatedTarget||t.fromElement)&&(No(m)||m[xs]))break e;if((h||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,h?(m=t.relatedTarget||t.toElement,h=u,m=m?No(m):null,m!==null&&(g=aa(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(_=uv,x="onMouseLeave",p="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=fv,x="onPointerLeave",p="onPointerEnter",v="pointer"),g=h==null?f:za(h),S=m==null?f:za(m),f=new _(x,v+"leave",h,t,c),f.target=g,f.relatedTarget=S,x=null,No(c)===u&&(_=new _(p,v+"enter",m,t,c),_.target=S,_.relatedTarget=g,x=_),g=x,h&&m)t:{for(_=h,p=m,v=0,S=_;S;S=pa(S))v++;for(S=0,x=p;x;x=pa(x))S++;for(;0<v-S;)_=pa(_),v--;for(;0<S-v;)p=pa(p),S--;for(;v--;){if(_===p||p!==null&&_===p.alternate)break t;_=pa(_),p=pa(p)}_=null}else _=null;h!==null&&Mv(d,f,h,_,!1),m!==null&&g!==null&&Mv(d,g,m,_,!0)}}e:{if(f=u?za(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var E=jw;else if(pv(f))if(BS)E=Qw;else{E=Zw;var T=Kw}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=Jw);if(E&&(E=E(n,u))){kS(d,E,t,c);break e}T&&T(n,f,u),n==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Qp(f,"number",f.value)}switch(T=u?za(u):window,n){case"focusin":(pv(T)||T.contentEditable==="true")&&(ka=T,fm=u,yu=null);break;case"focusout":yu=fm=ka=null;break;case"mousedown":dm=!0;break;case"contextmenu":case"mouseup":case"dragend":dm=!1,xv(d,t,c);break;case"selectionchange":if(n2)break;case"keydown":case"keyup":xv(d,t,c)}var w;if(y0)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Fa?OS(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(US&&t.locale!=="ko"&&(Fa||y!=="onCompositionStart"?y==="onCompositionEnd"&&Fa&&(w=IS()):(Hs=c,_0="value"in Hs?Hs.value:Hs.textContent,Fa=!0)),T=md(u,y),0<T.length&&(y=new cv(y,n,null,t,c),d.push({event:y,listeners:T}),w?y.data=w:(w=FS(t),w!==null&&(y.data=w)))),(w=Ww?Xw(n,t):Yw(n,t))&&(u=md(u,"onBeforeInput"),0<u.length&&(c=new cv("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=w))}jS(d,e)})}function ju(n,e,t){return{instance:n,listener:e,currentTarget:t}}function md(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Hu(n,t),s!=null&&i.unshift(ju(n,s,r)),s=Hu(n,e),s!=null&&i.push(ju(n,s,r))),n=n.return}return i}function pa(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Mv(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Hu(t,s),l!=null&&o.unshift(ju(t,l,a))):r||(l=Hu(t,s),l!=null&&o.push(ju(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var o2=/\r\n?/g,a2=/\u0000|\uFFFD/g;function Ev(n){return(typeof n=="string"?n:""+n).replace(o2,`
`).replace(a2,"")}function zc(n,e,t){if(e=Ev(e),Ev(n)!==e&&t)throw Error(ge(425))}function gd(){}var hm=null,pm=null;function mm(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gm=typeof setTimeout=="function"?setTimeout:void 0,l2=typeof clearTimeout=="function"?clearTimeout:void 0,Tv=typeof Promise=="function"?Promise:void 0,u2=typeof queueMicrotask=="function"?queueMicrotask:typeof Tv<"u"?function(n){return Tv.resolve(null).then(n).catch(c2)}:gm;function c2(n){setTimeout(function(){throw n})}function kh(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Xu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Xu(e)}function Qs(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function wv(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Nl=Math.random().toString(36).slice(2),Or="__reactFiber$"+Nl,Ku="__reactProps$"+Nl,xs="__reactContainer$"+Nl,_m="__reactEvents$"+Nl,f2="__reactListeners$"+Nl,d2="__reactHandles$"+Nl;function No(n){var e=n[Or];if(e)return e;for(var t=n.parentNode;t;){if(e=t[xs]||t[Or]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=wv(n);n!==null;){if(t=n[Or])return t;n=wv(n)}return e}n=t,t=n.parentNode}return null}function Tc(n){return n=n[Or]||n[xs],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function za(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ge(33))}function ih(n){return n[Ku]||null}var vm=[],Va=-1;function go(n){return{current:n}}function kt(n){0>Va||(n.current=vm[Va],vm[Va]=null,Va--)}function Dt(n,e){Va++,vm[Va]=n.current,n.current=e}var lo={},jn=go(lo),xi=go(!1),$o=lo;function ml(n,e){var t=n.type.contextTypes;if(!t)return lo;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function yi(n){return n=n.childContextTypes,n!=null}function _d(){kt(xi),kt(jn)}function Av(n,e,t){if(jn.current!==lo)throw Error(ge(168));Dt(jn,e),Dt(xi,t)}function ZS(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ge(108,KT(n)||"Unknown",r));return jt({},t,i)}function vd(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||lo,$o=jn.current,Dt(jn,n),Dt(xi,xi.current),!0}function Cv(n,e,t){var i=n.stateNode;if(!i)throw Error(ge(169));t?(n=ZS(n,e,$o),i.__reactInternalMemoizedMergedChildContext=n,kt(xi),kt(jn),Dt(jn,n)):kt(xi),Dt(xi,t)}var rs=null,rh=!1,Bh=!1;function JS(n){rs===null?rs=[n]:rs.push(n)}function h2(n){rh=!0,JS(n)}function _o(){if(!Bh&&rs!==null){Bh=!0;var n=0,e=wt;try{var t=rs;for(wt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}rs=null,rh=!1}catch(r){throw rs!==null&&(rs=rs.slice(n+1)),ES(h0,_o),r}finally{wt=e,Bh=!1}}return null}var Ha=[],Ga=0,xd=null,yd=0,er=[],tr=0,jo=null,us=1,cs="";function Co(n,e){Ha[Ga++]=yd,Ha[Ga++]=xd,xd=n,yd=e}function QS(n,e,t){er[tr++]=us,er[tr++]=cs,er[tr++]=jo,jo=n;var i=us;n=cs;var r=32-Er(i)-1;i&=~(1<<r),t+=1;var s=32-Er(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,us=1<<32-Er(e)+r|t<<r|i,cs=s+n}else us=1<<s|t<<r|i,cs=n}function M0(n){n.return!==null&&(Co(n,1),QS(n,1,0))}function E0(n){for(;n===xd;)xd=Ha[--Ga],Ha[Ga]=null,yd=Ha[--Ga],Ha[Ga]=null;for(;n===jo;)jo=er[--tr],er[tr]=null,cs=er[--tr],er[tr]=null,us=er[--tr],er[tr]=null}var Gi=null,zi=null,Bt=!1,yr=null;function e1(n,e){var t=rr(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function bv(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Gi=n,zi=Qs(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Gi=n,zi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=jo!==null?{id:us,overflow:cs}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=rr(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Gi=n,zi=null,!0):!1;default:return!1}}function xm(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ym(n){if(Bt){var e=zi;if(e){var t=e;if(!bv(n,e)){if(xm(n))throw Error(ge(418));e=Qs(t.nextSibling);var i=Gi;e&&bv(n,e)?e1(i,t):(n.flags=n.flags&-4097|2,Bt=!1,Gi=n)}}else{if(xm(n))throw Error(ge(418));n.flags=n.flags&-4097|2,Bt=!1,Gi=n}}}function Rv(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Gi=n}function Vc(n){if(n!==Gi)return!1;if(!Bt)return Rv(n),Bt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!mm(n.type,n.memoizedProps)),e&&(e=zi)){if(xm(n))throw t1(),Error(ge(418));for(;e;)e1(n,e),e=Qs(e.nextSibling)}if(Rv(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ge(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){zi=Qs(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}zi=null}}else zi=Gi?Qs(n.stateNode.nextSibling):null;return!0}function t1(){for(var n=zi;n;)n=Qs(n.nextSibling)}function gl(){zi=Gi=null,Bt=!1}function T0(n){yr===null?yr=[n]:yr.push(n)}var p2=ws.ReactCurrentBatchConfig;function Vl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ge(309));var i=t.stateNode}if(!i)throw Error(ge(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ge(284));if(!t._owner)throw Error(ge(290,n))}return n}function Hc(n,e){throw n=Object.prototype.toString.call(e),Error(ge(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Pv(n){var e=n._init;return e(n._payload)}function n1(n){function e(p,v){if(n){var S=p.deletions;S===null?(p.deletions=[v],p.flags|=16):S.push(v)}}function t(p,v){if(!n)return null;for(;v!==null;)e(p,v),v=v.sibling;return null}function i(p,v){for(p=new Map;v!==null;)v.key!==null?p.set(v.key,v):p.set(v.index,v),v=v.sibling;return p}function r(p,v){return p=io(p,v),p.index=0,p.sibling=null,p}function s(p,v,S){return p.index=S,n?(S=p.alternate,S!==null?(S=S.index,S<v?(p.flags|=2,v):S):(p.flags|=2,v)):(p.flags|=1048576,v)}function o(p){return n&&p.alternate===null&&(p.flags|=2),p}function a(p,v,S,x){return v===null||v.tag!==6?(v=Yh(S,p.mode,x),v.return=p,v):(v=r(v,S),v.return=p,v)}function l(p,v,S,x){var E=S.type;return E===Oa?c(p,v,S.props.children,x,S.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Os&&Pv(E)===v.type)?(x=r(v,S.props),x.ref=Vl(p,v,S),x.return=p,x):(x=Yf(S.type,S.key,S.props,null,p.mode,x),x.ref=Vl(p,v,S),x.return=p,x)}function u(p,v,S,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=qh(S,p.mode,x),v.return=p,v):(v=r(v,S.children||[]),v.return=p,v)}function c(p,v,S,x,E){return v===null||v.tag!==7?(v=zo(S,p.mode,x,E),v.return=p,v):(v=r(v,S),v.return=p,v)}function d(p,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Yh(""+v,p.mode,S),v.return=p,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Lc:return S=Yf(v.type,v.key,v.props,null,p.mode,S),S.ref=Vl(p,null,v),S.return=p,S;case Ua:return v=qh(v,p.mode,S),v.return=p,v;case Os:var x=v._init;return d(p,x(v._payload),S)}if(iu(v)||Ol(v))return v=zo(v,p.mode,S,null),v.return=p,v;Hc(p,v)}return null}function f(p,v,S,x){var E=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return E!==null?null:a(p,v,""+S,x);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Lc:return S.key===E?l(p,v,S,x):null;case Ua:return S.key===E?u(p,v,S,x):null;case Os:return E=S._init,f(p,v,E(S._payload),x)}if(iu(S)||Ol(S))return E!==null?null:c(p,v,S,x,null);Hc(p,S)}return null}function h(p,v,S,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(S)||null,a(v,p,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Lc:return p=p.get(x.key===null?S:x.key)||null,l(v,p,x,E);case Ua:return p=p.get(x.key===null?S:x.key)||null,u(v,p,x,E);case Os:var T=x._init;return h(p,v,S,T(x._payload),E)}if(iu(x)||Ol(x))return p=p.get(S)||null,c(v,p,x,E,null);Hc(v,x)}return null}function m(p,v,S,x){for(var E=null,T=null,w=v,y=v=0,A=null;w!==null&&y<S.length;y++){w.index>y?(A=w,w=null):A=w.sibling;var b=f(p,w,S[y],x);if(b===null){w===null&&(w=A);break}n&&w&&b.alternate===null&&e(p,w),v=s(b,v,y),T===null?E=b:T.sibling=b,T=b,w=A}if(y===S.length)return t(p,w),Bt&&Co(p,y),E;if(w===null){for(;y<S.length;y++)w=d(p,S[y],x),w!==null&&(v=s(w,v,y),T===null?E=w:T.sibling=w,T=w);return Bt&&Co(p,y),E}for(w=i(p,w);y<S.length;y++)A=h(w,p,y,S[y],x),A!==null&&(n&&A.alternate!==null&&w.delete(A.key===null?y:A.key),v=s(A,v,y),T===null?E=A:T.sibling=A,T=A);return n&&w.forEach(function(L){return e(p,L)}),Bt&&Co(p,y),E}function _(p,v,S,x){var E=Ol(S);if(typeof E!="function")throw Error(ge(150));if(S=E.call(S),S==null)throw Error(ge(151));for(var T=E=null,w=v,y=v=0,A=null,b=S.next();w!==null&&!b.done;y++,b=S.next()){w.index>y?(A=w,w=null):A=w.sibling;var L=f(p,w,b.value,x);if(L===null){w===null&&(w=A);break}n&&w&&L.alternate===null&&e(p,w),v=s(L,v,y),T===null?E=L:T.sibling=L,T=L,w=A}if(b.done)return t(p,w),Bt&&Co(p,y),E;if(w===null){for(;!b.done;y++,b=S.next())b=d(p,b.value,x),b!==null&&(v=s(b,v,y),T===null?E=b:T.sibling=b,T=b);return Bt&&Co(p,y),E}for(w=i(p,w);!b.done;y++,b=S.next())b=h(w,p,y,b.value,x),b!==null&&(n&&b.alternate!==null&&w.delete(b.key===null?y:b.key),v=s(b,v,y),T===null?E=b:T.sibling=b,T=b);return n&&w.forEach(function(N){return e(p,N)}),Bt&&Co(p,y),E}function g(p,v,S,x){if(typeof S=="object"&&S!==null&&S.type===Oa&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Lc:e:{for(var E=S.key,T=v;T!==null;){if(T.key===E){if(E=S.type,E===Oa){if(T.tag===7){t(p,T.sibling),v=r(T,S.props.children),v.return=p,p=v;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Os&&Pv(E)===T.type){t(p,T.sibling),v=r(T,S.props),v.ref=Vl(p,T,S),v.return=p,p=v;break e}t(p,T);break}else e(p,T);T=T.sibling}S.type===Oa?(v=zo(S.props.children,p.mode,x,S.key),v.return=p,p=v):(x=Yf(S.type,S.key,S.props,null,p.mode,x),x.ref=Vl(p,v,S),x.return=p,p=x)}return o(p);case Ua:e:{for(T=S.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){t(p,v.sibling),v=r(v,S.children||[]),v.return=p,p=v;break e}else{t(p,v);break}else e(p,v);v=v.sibling}v=qh(S,p.mode,x),v.return=p,p=v}return o(p);case Os:return T=S._init,g(p,v,T(S._payload),x)}if(iu(S))return m(p,v,S,x);if(Ol(S))return _(p,v,S,x);Hc(p,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(t(p,v.sibling),v=r(v,S),v.return=p,p=v):(t(p,v),v=Yh(S,p.mode,x),v.return=p,p=v),o(p)):t(p,v)}return g}var _l=n1(!0),i1=n1(!1),Sd=go(null),Md=null,Wa=null,w0=null;function A0(){w0=Wa=Md=null}function C0(n){var e=Sd.current;kt(Sd),n._currentValue=e}function Sm(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function il(n,e){Md=n,w0=Wa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(vi=!0),n.firstContext=null)}function ur(n){var e=n._currentValue;if(w0!==n)if(n={context:n,memoizedValue:e,next:null},Wa===null){if(Md===null)throw Error(ge(308));Wa=n,Md.dependencies={lanes:0,firstContext:n}}else Wa=Wa.next=n;return e}var Do=null;function b0(n){Do===null?Do=[n]:Do.push(n)}function r1(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,b0(e)):(t.next=r.next,r.next=t),e.interleaved=t,ys(n,i)}function ys(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Fs=!1;function R0(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function s1(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function hs(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function eo(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,yt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ys(n,t)}return r=i.interleaved,r===null?(e.next=e,b0(i)):(e.next=r.next,r.next=e),i.interleaved=e,ys(n,t)}function zf(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,p0(n,t)}}function Lv(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Ed(n,e,t,i){var r=n.updateQueue;Fs=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,h=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=n,_=a;switch(f=e,h=t,_.tag){case 1:if(m=_.payload,typeof m=="function"){d=m.call(h,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=_.payload,f=typeof m=="function"?m.call(h,d,f):m,f==null)break e;d=jt({},d,f);break e;case 2:Fs=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=h,l=d):c=c.next=h,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Zo|=o,n.lanes=o,n.memoizedState=d}}function Nv(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ge(191,r));r.call(i)}}}var wc={},Gr=go(wc),Zu=go(wc),Ju=go(wc);function Io(n){if(n===wc)throw Error(ge(174));return n}function P0(n,e){switch(Dt(Ju,e),Dt(Zu,n),Dt(Gr,wc),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:tm(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=tm(e,n)}kt(Gr),Dt(Gr,e)}function vl(){kt(Gr),kt(Zu),kt(Ju)}function o1(n){Io(Ju.current);var e=Io(Gr.current),t=tm(e,n.type);e!==t&&(Dt(Zu,n),Dt(Gr,t))}function L0(n){Zu.current===n&&(kt(Gr),kt(Zu))}var Ht=go(0);function Td(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zh=[];function N0(){for(var n=0;n<zh.length;n++)zh[n]._workInProgressVersionPrimary=null;zh.length=0}var Vf=ws.ReactCurrentDispatcher,Vh=ws.ReactCurrentBatchConfig,Ko=0,qt=null,pn=null,Tn=null,wd=!1,Su=!1,Qu=0,m2=0;function kn(){throw Error(ge(321))}function D0(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Ar(n[t],e[t]))return!1;return!0}function I0(n,e,t,i,r,s){if(Ko=s,qt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vf.current=n===null||n.memoizedState===null?x2:y2,n=t(i,r),Su){s=0;do{if(Su=!1,Qu=0,25<=s)throw Error(ge(301));s+=1,Tn=pn=null,e.updateQueue=null,Vf.current=S2,n=t(i,r)}while(Su)}if(Vf.current=Ad,e=pn!==null&&pn.next!==null,Ko=0,Tn=pn=qt=null,wd=!1,e)throw Error(ge(300));return n}function U0(){var n=Qu!==0;return Qu=0,n}function Nr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?qt.memoizedState=Tn=n:Tn=Tn.next=n,Tn}function cr(){if(pn===null){var n=qt.alternate;n=n!==null?n.memoizedState:null}else n=pn.next;var e=Tn===null?qt.memoizedState:Tn.next;if(e!==null)Tn=e,pn=n;else{if(n===null)throw Error(ge(310));pn=n,n={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},Tn===null?qt.memoizedState=Tn=n:Tn=Tn.next=n}return Tn}function ec(n,e){return typeof e=="function"?e(n):e}function Hh(n){var e=cr(),t=e.queue;if(t===null)throw Error(ge(311));t.lastRenderedReducer=n;var i=pn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ko&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,qt.lanes|=c,Zo|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Ar(i,e.memoizedState)||(vi=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,qt.lanes|=s,Zo|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Gh(n){var e=cr(),t=e.queue;if(t===null)throw Error(ge(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Ar(s,e.memoizedState)||(vi=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function a1(){}function l1(n,e){var t=qt,i=cr(),r=e(),s=!Ar(i.memoizedState,r);if(s&&(i.memoizedState=r,vi=!0),i=i.queue,O0(f1.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Tn!==null&&Tn.memoizedState.tag&1){if(t.flags|=2048,tc(9,c1.bind(null,t,i,r,e),void 0,null),wn===null)throw Error(ge(349));Ko&30||u1(t,e,r)}return r}function u1(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=qt.updateQueue,e===null?(e={lastEffect:null,stores:null},qt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function c1(n,e,t,i){e.value=t,e.getSnapshot=i,d1(e)&&h1(n)}function f1(n,e,t){return t(function(){d1(e)&&h1(n)})}function d1(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Ar(n,t)}catch{return!0}}function h1(n){var e=ys(n,1);e!==null&&Tr(e,n,1,-1)}function Dv(n){var e=Nr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ec,lastRenderedState:n},e.queue=n,n=n.dispatch=v2.bind(null,qt,n),[e.memoizedState,n]}function tc(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=qt.updateQueue,e===null?(e={lastEffect:null,stores:null},qt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function p1(){return cr().memoizedState}function Hf(n,e,t,i){var r=Nr();qt.flags|=n,r.memoizedState=tc(1|e,t,void 0,i===void 0?null:i)}function sh(n,e,t,i){var r=cr();i=i===void 0?null:i;var s=void 0;if(pn!==null){var o=pn.memoizedState;if(s=o.destroy,i!==null&&D0(i,o.deps)){r.memoizedState=tc(e,t,s,i);return}}qt.flags|=n,r.memoizedState=tc(1|e,t,s,i)}function Iv(n,e){return Hf(8390656,8,n,e)}function O0(n,e){return sh(2048,8,n,e)}function m1(n,e){return sh(4,2,n,e)}function g1(n,e){return sh(4,4,n,e)}function _1(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function v1(n,e,t){return t=t!=null?t.concat([n]):null,sh(4,4,_1.bind(null,e,n),t)}function F0(){}function x1(n,e){var t=cr();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&D0(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function y1(n,e){var t=cr();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&D0(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function S1(n,e,t){return Ko&21?(Ar(t,e)||(t=AS(),qt.lanes|=t,Zo|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,vi=!0),n.memoizedState=t)}function g2(n,e){var t=wt;wt=t!==0&&4>t?t:4,n(!0);var i=Vh.transition;Vh.transition={};try{n(!1),e()}finally{wt=t,Vh.transition=i}}function M1(){return cr().memoizedState}function _2(n,e,t){var i=no(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},E1(n))T1(e,t);else if(t=r1(n,e,t,i),t!==null){var r=ui();Tr(t,n,i,r),w1(t,e,i)}}function v2(n,e,t){var i=no(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(E1(n))T1(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Ar(a,o)){var l=e.interleaved;l===null?(r.next=r,b0(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=r1(n,e,r,i),t!==null&&(r=ui(),Tr(t,n,i,r),w1(t,e,i))}}function E1(n){var e=n.alternate;return n===qt||e!==null&&e===qt}function T1(n,e){Su=wd=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function w1(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,p0(n,t)}}var Ad={readContext:ur,useCallback:kn,useContext:kn,useEffect:kn,useImperativeHandle:kn,useInsertionEffect:kn,useLayoutEffect:kn,useMemo:kn,useReducer:kn,useRef:kn,useState:kn,useDebugValue:kn,useDeferredValue:kn,useTransition:kn,useMutableSource:kn,useSyncExternalStore:kn,useId:kn,unstable_isNewReconciler:!1},x2={readContext:ur,useCallback:function(n,e){return Nr().memoizedState=[n,e===void 0?null:e],n},useContext:ur,useEffect:Iv,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Hf(4194308,4,_1.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Hf(4194308,4,n,e)},useInsertionEffect:function(n,e){return Hf(4,2,n,e)},useMemo:function(n,e){var t=Nr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Nr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=_2.bind(null,qt,n),[i.memoizedState,n]},useRef:function(n){var e=Nr();return n={current:n},e.memoizedState=n},useState:Dv,useDebugValue:F0,useDeferredValue:function(n){return Nr().memoizedState=n},useTransition:function(){var n=Dv(!1),e=n[0];return n=g2.bind(null,n[1]),Nr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=qt,r=Nr();if(Bt){if(t===void 0)throw Error(ge(407));t=t()}else{if(t=e(),wn===null)throw Error(ge(349));Ko&30||u1(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Iv(f1.bind(null,i,s,n),[n]),i.flags|=2048,tc(9,c1.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Nr(),e=wn.identifierPrefix;if(Bt){var t=cs,i=us;t=(i&~(1<<32-Er(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Qu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=m2++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},y2={readContext:ur,useCallback:x1,useContext:ur,useEffect:O0,useImperativeHandle:v1,useInsertionEffect:m1,useLayoutEffect:g1,useMemo:y1,useReducer:Hh,useRef:p1,useState:function(){return Hh(ec)},useDebugValue:F0,useDeferredValue:function(n){var e=cr();return S1(e,pn.memoizedState,n)},useTransition:function(){var n=Hh(ec)[0],e=cr().memoizedState;return[n,e]},useMutableSource:a1,useSyncExternalStore:l1,useId:M1,unstable_isNewReconciler:!1},S2={readContext:ur,useCallback:x1,useContext:ur,useEffect:O0,useImperativeHandle:v1,useInsertionEffect:m1,useLayoutEffect:g1,useMemo:y1,useReducer:Gh,useRef:p1,useState:function(){return Gh(ec)},useDebugValue:F0,useDeferredValue:function(n){var e=cr();return pn===null?e.memoizedState=n:S1(e,pn.memoizedState,n)},useTransition:function(){var n=Gh(ec)[0],e=cr().memoizedState;return[n,e]},useMutableSource:a1,useSyncExternalStore:l1,useId:M1,unstable_isNewReconciler:!1};function vr(n,e){if(n&&n.defaultProps){e=jt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Mm(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:jt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var oh={isMounted:function(n){return(n=n._reactInternals)?aa(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=ui(),r=no(n),s=hs(i,r);s.payload=e,t!=null&&(s.callback=t),e=eo(n,s,r),e!==null&&(Tr(e,n,r,i),zf(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=ui(),r=no(n),s=hs(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=eo(n,s,r),e!==null&&(Tr(e,n,r,i),zf(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=ui(),i=no(n),r=hs(t,i);r.tag=2,e!=null&&(r.callback=e),e=eo(n,r,i),e!==null&&(Tr(e,n,i,t),zf(e,n,i))}};function Uv(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!qu(t,i)||!qu(r,s):!0}function A1(n,e,t){var i=!1,r=lo,s=e.contextType;return typeof s=="object"&&s!==null?s=ur(s):(r=yi(e)?$o:jn.current,i=e.contextTypes,s=(i=i!=null)?ml(n,r):lo),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=oh,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Ov(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&oh.enqueueReplaceState(e,e.state,null)}function Em(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},R0(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ur(s):(s=yi(e)?$o:jn.current,r.context=ml(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mm(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&oh.enqueueReplaceState(r,r.state,null),Ed(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function xl(n,e){try{var t="",i=e;do t+=jT(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Wh(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Tm(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var M2=typeof WeakMap=="function"?WeakMap:Map;function C1(n,e,t){t=hs(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){bd||(bd=!0,Im=i),Tm(n,e)},t}function b1(n,e,t){t=hs(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Tm(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Tm(n,e),typeof i!="function"&&(to===null?to=new Set([this]):to.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Fv(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new M2;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=O2.bind(null,n,e,t),e.then(n,n))}function kv(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Bv(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=hs(-1,1),e.tag=2,eo(t,e,1))),t.lanes|=1),n)}var E2=ws.ReactCurrentOwner,vi=!1;function ri(n,e,t,i){e.child=n===null?i1(e,null,t,i):_l(e,n.child,t,i)}function zv(n,e,t,i,r){t=t.render;var s=e.ref;return il(e,r),i=I0(n,e,t,i,s,r),t=U0(),n!==null&&!vi?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ss(n,e,r)):(Bt&&t&&M0(e),e.flags|=1,ri(n,e,i,r),e.child)}function Vv(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!X0(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,R1(n,e,s,i,r)):(n=Yf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:qu,t(o,i)&&n.ref===e.ref)return Ss(n,e,r)}return e.flags|=1,n=io(s,i),n.ref=e.ref,n.return=e,e.child=n}function R1(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(qu(s,i)&&n.ref===e.ref)if(vi=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(vi=!0);else return e.lanes=n.lanes,Ss(n,e,r)}return wm(n,e,t,i,r)}function P1(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(Ya,Li),Li|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Dt(Ya,Li),Li|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Dt(Ya,Li),Li|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Dt(Ya,Li),Li|=i;return ri(n,e,r,t),e.child}function L1(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function wm(n,e,t,i,r){var s=yi(t)?$o:jn.current;return s=ml(e,s),il(e,r),t=I0(n,e,t,i,s,r),i=U0(),n!==null&&!vi?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ss(n,e,r)):(Bt&&i&&M0(e),e.flags|=1,ri(n,e,t,r),e.child)}function Hv(n,e,t,i,r){if(yi(t)){var s=!0;vd(e)}else s=!1;if(il(e,r),e.stateNode===null)Gf(n,e),A1(e,t,i),Em(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=ur(u):(u=yi(t)?$o:jn.current,u=ml(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Ov(e,o,i,u),Fs=!1;var f=e.memoizedState;o.state=f,Ed(e,i,o,r),l=e.memoizedState,a!==i||f!==l||xi.current||Fs?(typeof c=="function"&&(Mm(e,t,c,i),l=e.memoizedState),(a=Fs||Uv(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,s1(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:vr(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=ur(l):(l=yi(t)?$o:jn.current,l=ml(e,l));var h=t.getDerivedStateFromProps;(c=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Ov(e,o,i,l),Fs=!1,f=e.memoizedState,o.state=f,Ed(e,i,o,r);var m=e.memoizedState;a!==d||f!==m||xi.current||Fs?(typeof h=="function"&&(Mm(e,t,h,i),m=e.memoizedState),(u=Fs||Uv(e,t,u,i,f,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Am(n,e,t,i,s,r)}function Am(n,e,t,i,r,s){L1(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Cv(e,t,!1),Ss(n,e,s);i=e.stateNode,E2.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=_l(e,n.child,null,s),e.child=_l(e,null,a,s)):ri(n,e,a,s),e.memoizedState=i.state,r&&Cv(e,t,!0),e.child}function N1(n){var e=n.stateNode;e.pendingContext?Av(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Av(n,e.context,!1),P0(n,e.containerInfo)}function Gv(n,e,t,i,r){return gl(),T0(r),e.flags|=256,ri(n,e,t,i),e.child}var Cm={dehydrated:null,treeContext:null,retryLane:0};function bm(n){return{baseLanes:n,cachePool:null,transitions:null}}function D1(n,e,t){var i=e.pendingProps,r=Ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Dt(Ht,r&1),n===null)return ym(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=uh(o,i,0,null),n=zo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=bm(t),e.memoizedState=Cm,n):k0(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return T2(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=io(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=io(a,s):(s=zo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?bm(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Cm,i}return s=n.child,n=s.sibling,i=io(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function k0(n,e){return e=uh({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Gc(n,e,t,i){return i!==null&&T0(i),_l(e,n.child,null,t),n=k0(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function T2(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Wh(Error(ge(422))),Gc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=uh({mode:"visible",children:i.children},r,0,null),s=zo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&_l(e,n.child,null,o),e.child.memoizedState=bm(o),e.memoizedState=Cm,s);if(!(e.mode&1))return Gc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ge(419)),i=Wh(s,i,void 0),Gc(n,e,o,i)}if(a=(o&n.childLanes)!==0,vi||a){if(i=wn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ys(n,r),Tr(i,n,r,-1))}return W0(),i=Wh(Error(ge(421))),Gc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=F2.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,zi=Qs(r.nextSibling),Gi=e,Bt=!0,yr=null,n!==null&&(er[tr++]=us,er[tr++]=cs,er[tr++]=jo,us=n.id,cs=n.overflow,jo=e),e=k0(e,i.children),e.flags|=4096,e)}function Wv(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Sm(n.return,e,t)}function Xh(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function I1(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ri(n,e,i.children,t),i=Ht.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Wv(n,t,e);else if(n.tag===19)Wv(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Dt(Ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Td(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Xh(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Td(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Xh(e,!0,t,null,s);break;case"together":Xh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Gf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ss(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Zo|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ge(153));if(e.child!==null){for(n=e.child,t=io(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=io(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function w2(n,e,t){switch(e.tag){case 3:N1(e),gl();break;case 5:o1(e);break;case 1:yi(e.type)&&vd(e);break;case 4:P0(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Dt(Sd,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Dt(Ht,Ht.current&1),e.flags|=128,null):t&e.child.childLanes?D1(n,e,t):(Dt(Ht,Ht.current&1),n=Ss(n,e,t),n!==null?n.sibling:null);Dt(Ht,Ht.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return I1(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Dt(Ht,Ht.current),i)break;return null;case 22:case 23:return e.lanes=0,P1(n,e,t)}return Ss(n,e,t)}var U1,Rm,O1,F1;U1=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Rm=function(){};O1=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Io(Gr.current);var s=null;switch(t){case"input":r=Zp(n,r),i=Zp(n,i),s=[];break;case"select":r=jt({},r,{value:void 0}),i=jt({},i,{value:void 0}),s=[];break;case"textarea":r=em(n,r),i=em(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=gd)}nm(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ft("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};F1=function(n,e,t,i){t!==i&&(e.flags|=4)};function Hl(n,e){if(!Bt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Bn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function A2(n,e,t){var i=e.pendingProps;switch(E0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bn(e),null;case 1:return yi(e.type)&&_d(),Bn(e),null;case 3:return i=e.stateNode,vl(),kt(xi),kt(jn),N0(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Vc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yr!==null&&(Fm(yr),yr=null))),Rm(n,e),Bn(e),null;case 5:L0(e);var r=Io(Ju.current);if(t=e.type,n!==null&&e.stateNode!=null)O1(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ge(166));return Bn(e),null}if(n=Io(Gr.current),Vc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Or]=e,i[Ku]=s,n=(e.mode&1)!==0,t){case"dialog":Ft("cancel",i),Ft("close",i);break;case"iframe":case"object":case"embed":Ft("load",i);break;case"video":case"audio":for(r=0;r<su.length;r++)Ft(su[r],i);break;case"source":Ft("error",i);break;case"img":case"image":case"link":Ft("error",i),Ft("load",i);break;case"details":Ft("toggle",i);break;case"input":Q_(i,s),Ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ft("invalid",i);break;case"textarea":tv(i,s),Ft("invalid",i)}nm(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&zc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&zc(i.textContent,a,n),r=["children",""+a]):zu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ft("scroll",i)}switch(t){case"input":Nc(i),ev(i,s,!0);break;case"textarea":Nc(i),nv(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=gd)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fS(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Or]=e,n[Ku]=i,U1(n,e,!1,!1),e.stateNode=n;e:{switch(o=im(t,i),t){case"dialog":Ft("cancel",n),Ft("close",n),r=i;break;case"iframe":case"object":case"embed":Ft("load",n),r=i;break;case"video":case"audio":for(r=0;r<su.length;r++)Ft(su[r],n);r=i;break;case"source":Ft("error",n),r=i;break;case"img":case"image":case"link":Ft("error",n),Ft("load",n),r=i;break;case"details":Ft("toggle",n),r=i;break;case"input":Q_(n,i),r=Zp(n,i),Ft("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=jt({},i,{value:void 0}),Ft("invalid",n);break;case"textarea":tv(n,i),r=em(n,i),Ft("invalid",n);break;default:r=i}nm(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?pS(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&dS(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Vu(n,l):typeof l=="number"&&Vu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ft("scroll",n):l!=null&&l0(n,s,l,o))}switch(t){case"input":Nc(n),ev(n,i,!1);break;case"textarea":Nc(n),nv(n);break;case"option":i.value!=null&&n.setAttribute("value",""+ao(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Qa(n,!!i.multiple,s,!1):i.defaultValue!=null&&Qa(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=gd)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bn(e),null;case 6:if(n&&e.stateNode!=null)F1(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ge(166));if(t=Io(Ju.current),Io(Gr.current),Vc(e)){if(i=e.stateNode,t=e.memoizedProps,i[Or]=e,(s=i.nodeValue!==t)&&(n=Gi,n!==null))switch(n.tag){case 3:zc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&zc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Or]=e,e.stateNode=i}return Bn(e),null;case 13:if(kt(Ht),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Bt&&zi!==null&&e.mode&1&&!(e.flags&128))t1(),gl(),e.flags|=98560,s=!1;else if(s=Vc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ge(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ge(317));s[Or]=e}else gl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bn(e),s=!1}else yr!==null&&(Fm(yr),yr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Ht.current&1?gn===0&&(gn=3):W0())),e.updateQueue!==null&&(e.flags|=4),Bn(e),null);case 4:return vl(),Rm(n,e),n===null&&$u(e.stateNode.containerInfo),Bn(e),null;case 10:return C0(e.type._context),Bn(e),null;case 17:return yi(e.type)&&_d(),Bn(e),null;case 19:if(kt(Ht),s=e.memoizedState,s===null)return Bn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Hl(s,!1);else{if(gn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Td(n),o!==null){for(e.flags|=128,Hl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Dt(Ht,Ht.current&1|2),e.child}n=n.sibling}s.tail!==null&&nn()>yl&&(e.flags|=128,i=!0,Hl(s,!1),e.lanes=4194304)}else{if(!i)if(n=Td(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Hl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Bt)return Bn(e),null}else 2*nn()-s.renderingStartTime>yl&&t!==1073741824&&(e.flags|=128,i=!0,Hl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=nn(),e.sibling=null,t=Ht.current,Dt(Ht,i?t&1|2:t&1),e):(Bn(e),null);case 22:case 23:return G0(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Li&1073741824&&(Bn(e),e.subtreeFlags&6&&(e.flags|=8192)):Bn(e),null;case 24:return null;case 25:return null}throw Error(ge(156,e.tag))}function C2(n,e){switch(E0(e),e.tag){case 1:return yi(e.type)&&_d(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return vl(),kt(xi),kt(jn),N0(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return L0(e),null;case 13:if(kt(Ht),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ge(340));gl()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return kt(Ht),null;case 4:return vl(),null;case 10:return C0(e.type._context),null;case 22:case 23:return G0(),null;case 24:return null;default:return null}}var Wc=!1,Wn=!1,b2=typeof WeakSet=="function"?WeakSet:Set,De=null;function Xa(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Zt(n,e,i)}else t.current=null}function Pm(n,e,t){try{t()}catch(i){Zt(n,e,i)}}var Xv=!1;function R2(n,e){if(hm=hd,n=HS(),S0(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var h;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(pm={focusedElem:n,selectionRange:t},hd=!1,De=e;De!==null;)if(e=De,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,De=n;else for(;De!==null;){e=De;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var _=m.memoizedProps,g=m.memoizedState,p=e.stateNode,v=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:vr(e.type,_),g);p.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ge(163))}}catch(x){Zt(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,De=n;break}De=e.return}return m=Xv,Xv=!1,m}function Mu(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Pm(e,t,s)}r=r.next}while(r!==i)}}function ah(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Lm(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function k1(n){var e=n.alternate;e!==null&&(n.alternate=null,k1(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Or],delete e[Ku],delete e[_m],delete e[f2],delete e[d2])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function B1(n){return n.tag===5||n.tag===3||n.tag===4}function Yv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||B1(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Nm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=gd));else if(i!==4&&(n=n.child,n!==null))for(Nm(n,e,t),n=n.sibling;n!==null;)Nm(n,e,t),n=n.sibling}function Dm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Dm(n,e,t),n=n.sibling;n!==null;)Dm(n,e,t),n=n.sibling}var Cn=null,xr=!1;function Rs(n,e,t){for(t=t.child;t!==null;)z1(n,e,t),t=t.sibling}function z1(n,e,t){if(Hr&&typeof Hr.onCommitFiberUnmount=="function")try{Hr.onCommitFiberUnmount(Qd,t)}catch{}switch(t.tag){case 5:Wn||Xa(t,e);case 6:var i=Cn,r=xr;Cn=null,Rs(n,e,t),Cn=i,xr=r,Cn!==null&&(xr?(n=Cn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Cn.removeChild(t.stateNode));break;case 18:Cn!==null&&(xr?(n=Cn,t=t.stateNode,n.nodeType===8?kh(n.parentNode,t):n.nodeType===1&&kh(n,t),Xu(n)):kh(Cn,t.stateNode));break;case 4:i=Cn,r=xr,Cn=t.stateNode.containerInfo,xr=!0,Rs(n,e,t),Cn=i,xr=r;break;case 0:case 11:case 14:case 15:if(!Wn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Pm(t,e,o),r=r.next}while(r!==i)}Rs(n,e,t);break;case 1:if(!Wn&&(Xa(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Zt(t,e,a)}Rs(n,e,t);break;case 21:Rs(n,e,t);break;case 22:t.mode&1?(Wn=(i=Wn)||t.memoizedState!==null,Rs(n,e,t),Wn=i):Rs(n,e,t);break;default:Rs(n,e,t)}}function qv(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new b2),e.forEach(function(i){var r=k2.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function dr(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Cn=a.stateNode,xr=!1;break e;case 3:Cn=a.stateNode.containerInfo,xr=!0;break e;case 4:Cn=a.stateNode.containerInfo,xr=!0;break e}a=a.return}if(Cn===null)throw Error(ge(160));z1(s,o,r),Cn=null,xr=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Zt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)V1(e,n),e=e.sibling}function V1(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(dr(e,n),Rr(n),i&4){try{Mu(3,n,n.return),ah(3,n)}catch(_){Zt(n,n.return,_)}try{Mu(5,n,n.return)}catch(_){Zt(n,n.return,_)}}break;case 1:dr(e,n),Rr(n),i&512&&t!==null&&Xa(t,t.return);break;case 5:if(dr(e,n),Rr(n),i&512&&t!==null&&Xa(t,t.return),n.flags&32){var r=n.stateNode;try{Vu(r,"")}catch(_){Zt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&uS(r,s),im(a,o);var u=im(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?pS(r,d):c==="dangerouslySetInnerHTML"?dS(r,d):c==="children"?Vu(r,d):l0(r,c,d,u)}switch(a){case"input":Jp(r,s);break;case"textarea":cS(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Qa(r,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?Qa(r,!!s.multiple,s.defaultValue,!0):Qa(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ku]=s}catch(_){Zt(n,n.return,_)}}break;case 6:if(dr(e,n),Rr(n),i&4){if(n.stateNode===null)throw Error(ge(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Zt(n,n.return,_)}}break;case 3:if(dr(e,n),Rr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Xu(e.containerInfo)}catch(_){Zt(n,n.return,_)}break;case 4:dr(e,n),Rr(n);break;case 13:dr(e,n),Rr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(V0=nn())),i&4&&qv(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Wn=(u=Wn)||c,dr(e,n),Wn=u):dr(e,n),Rr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(De=n,c=n.child;c!==null;){for(d=De=c;De!==null;){switch(f=De,h=f.child,f.tag){case 0:case 11:case 14:case 15:Mu(4,f,f.return);break;case 1:Xa(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(_){Zt(i,t,_)}}break;case 5:Xa(f,f.return);break;case 22:if(f.memoizedState!==null){jv(d);continue}}h!==null?(h.return=f,De=h):jv(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=hS("display",o))}catch(_){Zt(n,n.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Zt(n,n.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:dr(e,n),Rr(n),i&4&&qv(n);break;case 21:break;default:dr(e,n),Rr(n)}}function Rr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(B1(t)){var i=t;break e}t=t.return}throw Error(ge(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Vu(r,""),i.flags&=-33);var s=Yv(n);Dm(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Yv(n);Nm(n,a,o);break;default:throw Error(ge(161))}}catch(l){Zt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function P2(n,e,t){De=n,H1(n)}function H1(n,e,t){for(var i=(n.mode&1)!==0;De!==null;){var r=De,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Wc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Wn;a=Wc;var u=Wn;if(Wc=o,(Wn=l)&&!u)for(De=r;De!==null;)o=De,l=o.child,o.tag===22&&o.memoizedState!==null?Kv(r):l!==null?(l.return=o,De=l):Kv(r);for(;s!==null;)De=s,H1(s),s=s.sibling;De=r,Wc=a,Wn=u}$v(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,De=s):$v(n)}}function $v(n){for(;De!==null;){var e=De;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wn||ah(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:vr(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Nv(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Nv(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Xu(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ge(163))}Wn||e.flags&512&&Lm(e)}catch(f){Zt(e,e.return,f)}}if(e===n){De=null;break}if(t=e.sibling,t!==null){t.return=e.return,De=t;break}De=e.return}}function jv(n){for(;De!==null;){var e=De;if(e===n){De=null;break}var t=e.sibling;if(t!==null){t.return=e.return,De=t;break}De=e.return}}function Kv(n){for(;De!==null;){var e=De;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{ah(4,e)}catch(l){Zt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Zt(e,r,l)}}var s=e.return;try{Lm(e)}catch(l){Zt(e,s,l)}break;case 5:var o=e.return;try{Lm(e)}catch(l){Zt(e,o,l)}}}catch(l){Zt(e,e.return,l)}if(e===n){De=null;break}var a=e.sibling;if(a!==null){a.return=e.return,De=a;break}De=e.return}}var L2=Math.ceil,Cd=ws.ReactCurrentDispatcher,B0=ws.ReactCurrentOwner,ar=ws.ReactCurrentBatchConfig,yt=0,wn=null,fn=null,Pn=0,Li=0,Ya=go(0),gn=0,nc=null,Zo=0,lh=0,z0=0,Eu=null,mi=null,V0=0,yl=1/0,ns=null,bd=!1,Im=null,to=null,Xc=!1,Gs=null,Rd=0,Tu=0,Um=null,Wf=-1,Xf=0;function ui(){return yt&6?nn():Wf!==-1?Wf:Wf=nn()}function no(n){return n.mode&1?yt&2&&Pn!==0?Pn&-Pn:p2.transition!==null?(Xf===0&&(Xf=AS()),Xf):(n=wt,n!==0||(n=window.event,n=n===void 0?16:DS(n.type)),n):1}function Tr(n,e,t,i){if(50<Tu)throw Tu=0,Um=null,Error(ge(185));Mc(n,t,i),(!(yt&2)||n!==wn)&&(n===wn&&(!(yt&2)&&(lh|=t),gn===4&&zs(n,Pn)),Si(n,i),t===1&&yt===0&&!(e.mode&1)&&(yl=nn()+500,rh&&_o()))}function Si(n,e){var t=n.callbackNode;pw(n,e);var i=dd(n,n===wn?Pn:0);if(i===0)t!==null&&sv(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&sv(t),e===1)n.tag===0?h2(Zv.bind(null,n)):JS(Zv.bind(null,n)),u2(function(){!(yt&6)&&_o()}),t=null;else{switch(CS(i)){case 1:t=h0;break;case 4:t=TS;break;case 16:t=fd;break;case 536870912:t=wS;break;default:t=fd}t=K1(t,G1.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function G1(n,e){if(Wf=-1,Xf=0,yt&6)throw Error(ge(327));var t=n.callbackNode;if(rl()&&n.callbackNode!==t)return null;var i=dd(n,n===wn?Pn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Pd(n,i);else{e=i;var r=yt;yt|=2;var s=X1();(wn!==n||Pn!==e)&&(ns=null,yl=nn()+500,Bo(n,e));do try{I2();break}catch(a){W1(n,a)}while(!0);A0(),Cd.current=s,yt=r,fn!==null?e=0:(wn=null,Pn=0,e=gn)}if(e!==0){if(e===2&&(r=lm(n),r!==0&&(i=r,e=Om(n,r))),e===1)throw t=nc,Bo(n,0),zs(n,i),Si(n,nn()),t;if(e===6)zs(n,i);else{if(r=n.current.alternate,!(i&30)&&!N2(r)&&(e=Pd(n,i),e===2&&(s=lm(n),s!==0&&(i=s,e=Om(n,s))),e===1))throw t=nc,Bo(n,0),zs(n,i),Si(n,nn()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ge(345));case 2:bo(n,mi,ns);break;case 3:if(zs(n,i),(i&130023424)===i&&(e=V0+500-nn(),10<e)){if(dd(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){ui(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=gm(bo.bind(null,n,mi,ns),e);break}bo(n,mi,ns);break;case 4:if(zs(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Er(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=nn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*L2(i/1960))-i,10<i){n.timeoutHandle=gm(bo.bind(null,n,mi,ns),i);break}bo(n,mi,ns);break;case 5:bo(n,mi,ns);break;default:throw Error(ge(329))}}}return Si(n,nn()),n.callbackNode===t?G1.bind(null,n):null}function Om(n,e){var t=Eu;return n.current.memoizedState.isDehydrated&&(Bo(n,e).flags|=256),n=Pd(n,e),n!==2&&(e=mi,mi=t,e!==null&&Fm(e)),n}function Fm(n){mi===null?mi=n:mi.push.apply(mi,n)}function N2(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Ar(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zs(n,e){for(e&=~z0,e&=~lh,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Er(e),i=1<<t;n[t]=-1,e&=~i}}function Zv(n){if(yt&6)throw Error(ge(327));rl();var e=dd(n,0);if(!(e&1))return Si(n,nn()),null;var t=Pd(n,e);if(n.tag!==0&&t===2){var i=lm(n);i!==0&&(e=i,t=Om(n,i))}if(t===1)throw t=nc,Bo(n,0),zs(n,e),Si(n,nn()),t;if(t===6)throw Error(ge(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,bo(n,mi,ns),Si(n,nn()),null}function H0(n,e){var t=yt;yt|=1;try{return n(e)}finally{yt=t,yt===0&&(yl=nn()+500,rh&&_o())}}function Jo(n){Gs!==null&&Gs.tag===0&&!(yt&6)&&rl();var e=yt;yt|=1;var t=ar.transition,i=wt;try{if(ar.transition=null,wt=1,n)return n()}finally{wt=i,ar.transition=t,yt=e,!(yt&6)&&_o()}}function G0(){Li=Ya.current,kt(Ya)}function Bo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,l2(t)),fn!==null)for(t=fn.return;t!==null;){var i=t;switch(E0(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&_d();break;case 3:vl(),kt(xi),kt(jn),N0();break;case 5:L0(i);break;case 4:vl();break;case 13:kt(Ht);break;case 19:kt(Ht);break;case 10:C0(i.type._context);break;case 22:case 23:G0()}t=t.return}if(wn=n,fn=n=io(n.current,null),Pn=Li=e,gn=0,nc=null,z0=lh=Zo=0,mi=Eu=null,Do!==null){for(e=0;e<Do.length;e++)if(t=Do[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Do=null}return n}function W1(n,e){do{var t=fn;try{if(A0(),Vf.current=Ad,wd){for(var i=qt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}wd=!1}if(Ko=0,Tn=pn=qt=null,Su=!1,Qu=0,B0.current=null,t===null||t.return===null){gn=1,nc=e,fn=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Pn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=kv(o);if(h!==null){h.flags&=-257,Bv(h,o,a,s,e),h.mode&1&&Fv(s,u,e),e=h,l=u;var m=e.updateQueue;if(m===null){var _=new Set;_.add(l),e.updateQueue=_}else m.add(l);break e}else{if(!(e&1)){Fv(s,u,e),W0();break e}l=Error(ge(426))}}else if(Bt&&a.mode&1){var g=kv(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Bv(g,o,a,s,e),T0(xl(l,a));break e}}s=l=xl(l,a),gn!==4&&(gn=2),Eu===null?Eu=[s]:Eu.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=C1(s,l,e);Lv(s,p);break e;case 1:a=l;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(to===null||!to.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=b1(s,a,e);Lv(s,x);break e}}s=s.return}while(s!==null)}q1(t)}catch(E){e=E,fn===t&&t!==null&&(fn=t=t.return);continue}break}while(!0)}function X1(){var n=Cd.current;return Cd.current=Ad,n===null?Ad:n}function W0(){(gn===0||gn===3||gn===2)&&(gn=4),wn===null||!(Zo&268435455)&&!(lh&268435455)||zs(wn,Pn)}function Pd(n,e){var t=yt;yt|=2;var i=X1();(wn!==n||Pn!==e)&&(ns=null,Bo(n,e));do try{D2();break}catch(r){W1(n,r)}while(!0);if(A0(),yt=t,Cd.current=i,fn!==null)throw Error(ge(261));return wn=null,Pn=0,gn}function D2(){for(;fn!==null;)Y1(fn)}function I2(){for(;fn!==null&&!sw();)Y1(fn)}function Y1(n){var e=j1(n.alternate,n,Li);n.memoizedProps=n.pendingProps,e===null?q1(n):fn=e,B0.current=null}function q1(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=C2(t,e),t!==null){t.flags&=32767,fn=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gn=6,fn=null;return}}else if(t=A2(t,e,Li),t!==null){fn=t;return}if(e=e.sibling,e!==null){fn=e;return}fn=e=n}while(e!==null);gn===0&&(gn=5)}function bo(n,e,t){var i=wt,r=ar.transition;try{ar.transition=null,wt=1,U2(n,e,t,i)}finally{ar.transition=r,wt=i}return null}function U2(n,e,t,i){do rl();while(Gs!==null);if(yt&6)throw Error(ge(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ge(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(mw(n,s),n===wn&&(fn=wn=null,Pn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Xc||(Xc=!0,K1(fd,function(){return rl(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=ar.transition,ar.transition=null;var o=wt;wt=1;var a=yt;yt|=4,B0.current=null,R2(n,t),V1(t,n),t2(pm),hd=!!hm,pm=hm=null,n.current=t,P2(t),ow(),yt=a,wt=o,ar.transition=s}else n.current=t;if(Xc&&(Xc=!1,Gs=n,Rd=r),s=n.pendingLanes,s===0&&(to=null),uw(t.stateNode),Si(n,nn()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(bd)throw bd=!1,n=Im,Im=null,n;return Rd&1&&n.tag!==0&&rl(),s=n.pendingLanes,s&1?n===Um?Tu++:(Tu=0,Um=n):Tu=0,_o(),null}function rl(){if(Gs!==null){var n=CS(Rd),e=ar.transition,t=wt;try{if(ar.transition=null,wt=16>n?16:n,Gs===null)var i=!1;else{if(n=Gs,Gs=null,Rd=0,yt&6)throw Error(ge(331));var r=yt;for(yt|=4,De=n.current;De!==null;){var s=De,o=s.child;if(De.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(De=u;De!==null;){var c=De;switch(c.tag){case 0:case 11:case 15:Mu(8,c,s)}var d=c.child;if(d!==null)d.return=c,De=d;else for(;De!==null;){c=De;var f=c.sibling,h=c.return;if(k1(c),c===u){De=null;break}if(f!==null){f.return=h,De=f;break}De=h}}}var m=s.alternate;if(m!==null){var _=m.child;if(_!==null){m.child=null;do{var g=_.sibling;_.sibling=null,_=g}while(_!==null)}}De=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,De=o;else e:for(;De!==null;){if(s=De,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Mu(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,De=p;break e}De=s.return}}var v=n.current;for(De=v;De!==null;){o=De;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,De=S;else e:for(o=v;De!==null;){if(a=De,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ah(9,a)}}catch(E){Zt(a,a.return,E)}if(a===o){De=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,De=x;break e}De=a.return}}if(yt=r,_o(),Hr&&typeof Hr.onPostCommitFiberRoot=="function")try{Hr.onPostCommitFiberRoot(Qd,n)}catch{}i=!0}return i}finally{wt=t,ar.transition=e}}return!1}function Jv(n,e,t){e=xl(t,e),e=C1(n,e,1),n=eo(n,e,1),e=ui(),n!==null&&(Mc(n,1,e),Si(n,e))}function Zt(n,e,t){if(n.tag===3)Jv(n,n,t);else for(;e!==null;){if(e.tag===3){Jv(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(to===null||!to.has(i))){n=xl(t,n),n=b1(e,n,1),e=eo(e,n,1),n=ui(),e!==null&&(Mc(e,1,n),Si(e,n));break}}e=e.return}}function O2(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=ui(),n.pingedLanes|=n.suspendedLanes&t,wn===n&&(Pn&t)===t&&(gn===4||gn===3&&(Pn&130023424)===Pn&&500>nn()-V0?Bo(n,0):z0|=t),Si(n,e)}function $1(n,e){e===0&&(n.mode&1?(e=Uc,Uc<<=1,!(Uc&130023424)&&(Uc=4194304)):e=1);var t=ui();n=ys(n,e),n!==null&&(Mc(n,e,t),Si(n,t))}function F2(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),$1(n,t)}function k2(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ge(314))}i!==null&&i.delete(e),$1(n,t)}var j1;j1=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||xi.current)vi=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return vi=!1,w2(n,e,t);vi=!!(n.flags&131072)}else vi=!1,Bt&&e.flags&1048576&&QS(e,yd,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Gf(n,e),n=e.pendingProps;var r=ml(e,jn.current);il(e,t),r=I0(null,e,i,n,r,t);var s=U0();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yi(i)?(s=!0,vd(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,R0(e),r.updater=oh,e.stateNode=r,r._reactInternals=e,Em(e,i,n,t),e=Am(null,e,i,!0,s,t)):(e.tag=0,Bt&&s&&M0(e),ri(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Gf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=z2(i),n=vr(i,n),r){case 0:e=wm(null,e,i,n,t);break e;case 1:e=Hv(null,e,i,n,t);break e;case 11:e=zv(null,e,i,n,t);break e;case 14:e=Vv(null,e,i,vr(i.type,n),t);break e}throw Error(ge(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vr(i,r),wm(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vr(i,r),Hv(n,e,i,r,t);case 3:e:{if(N1(e),n===null)throw Error(ge(387));i=e.pendingProps,s=e.memoizedState,r=s.element,s1(n,e),Ed(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=xl(Error(ge(423)),e),e=Gv(n,e,i,t,r);break e}else if(i!==r){r=xl(Error(ge(424)),e),e=Gv(n,e,i,t,r);break e}else for(zi=Qs(e.stateNode.containerInfo.firstChild),Gi=e,Bt=!0,yr=null,t=i1(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(gl(),i===r){e=Ss(n,e,t);break e}ri(n,e,i,t)}e=e.child}return e;case 5:return o1(e),n===null&&ym(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,mm(i,r)?o=null:s!==null&&mm(i,s)&&(e.flags|=32),L1(n,e),ri(n,e,o,t),e.child;case 6:return n===null&&ym(e),null;case 13:return D1(n,e,t);case 4:return P0(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=_l(e,null,i,t):ri(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vr(i,r),zv(n,e,i,r,t);case 7:return ri(n,e,e.pendingProps,t),e.child;case 8:return ri(n,e,e.pendingProps.children,t),e.child;case 12:return ri(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Dt(Sd,i._currentValue),i._currentValue=o,s!==null)if(Ar(s.value,o)){if(s.children===r.children&&!xi.current){e=Ss(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=hs(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Sm(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ge(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Sm(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ri(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,il(e,t),r=ur(r),i=i(r),e.flags|=1,ri(n,e,i,t),e.child;case 14:return i=e.type,r=vr(i,e.pendingProps),r=vr(i.type,r),Vv(n,e,i,r,t);case 15:return R1(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vr(i,r),Gf(n,e),e.tag=1,yi(i)?(n=!0,vd(e)):n=!1,il(e,t),A1(e,i,r),Em(e,i,r,t),Am(null,e,i,!0,n,t);case 19:return I1(n,e,t);case 22:return P1(n,e,t)}throw Error(ge(156,e.tag))};function K1(n,e){return ES(n,e)}function B2(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rr(n,e,t,i){return new B2(n,e,t,i)}function X0(n){return n=n.prototype,!(!n||!n.isReactComponent)}function z2(n){if(typeof n=="function")return X0(n)?1:0;if(n!=null){if(n=n.$$typeof,n===c0)return 11;if(n===f0)return 14}return 2}function io(n,e){var t=n.alternate;return t===null?(t=rr(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Yf(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")X0(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Oa:return zo(t.children,r,s,e);case u0:o=8,r|=8;break;case qp:return n=rr(12,t,e,r|2),n.elementType=qp,n.lanes=s,n;case $p:return n=rr(13,t,e,r),n.elementType=$p,n.lanes=s,n;case jp:return n=rr(19,t,e,r),n.elementType=jp,n.lanes=s,n;case oS:return uh(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case rS:o=10;break e;case sS:o=9;break e;case c0:o=11;break e;case f0:o=14;break e;case Os:o=16,i=null;break e}throw Error(ge(130,n==null?n:typeof n,""))}return e=rr(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function zo(n,e,t,i){return n=rr(7,n,i,e),n.lanes=t,n}function uh(n,e,t,i){return n=rr(22,n,i,e),n.elementType=oS,n.lanes=t,n.stateNode={isHidden:!1},n}function Yh(n,e,t){return n=rr(6,n,null,e),n.lanes=t,n}function qh(n,e,t){return e=rr(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function V2(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ch(0),this.expirationTimes=Ch(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ch(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Y0(n,e,t,i,r,s,o,a,l){return n=new V2(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=rr(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},R0(s),n}function H2(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ua,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Z1(n){if(!n)return lo;n=n._reactInternals;e:{if(aa(n)!==n||n.tag!==1)throw Error(ge(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yi(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ge(171))}if(n.tag===1){var t=n.type;if(yi(t))return ZS(n,t,e)}return e}function J1(n,e,t,i,r,s,o,a,l){return n=Y0(t,i,!0,n,r,s,o,a,l),n.context=Z1(null),t=n.current,i=ui(),r=no(t),s=hs(i,r),s.callback=e??null,eo(t,s,r),n.current.lanes=r,Mc(n,r,i),Si(n,i),n}function ch(n,e,t,i){var r=e.current,s=ui(),o=no(r);return t=Z1(t),e.context===null?e.context=t:e.pendingContext=t,e=hs(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=eo(r,e,o),n!==null&&(Tr(n,r,o,s),zf(n,r,o)),o}function Ld(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Qv(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function q0(n,e){Qv(n,e),(n=n.alternate)&&Qv(n,e)}function G2(){return null}var Q1=typeof reportError=="function"?reportError:function(n){console.error(n)};function $0(n){this._internalRoot=n}fh.prototype.render=$0.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ge(409));ch(n,e,null,null)};fh.prototype.unmount=$0.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Jo(function(){ch(null,n,null,null)}),e[xs]=null}};function fh(n){this._internalRoot=n}fh.prototype.unstable_scheduleHydration=function(n){if(n){var e=PS();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Bs.length&&e!==0&&e<Bs[t].priority;t++);Bs.splice(t,0,n),t===0&&NS(n)}};function j0(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function dh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ex(){}function W2(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ld(o);s.call(u)}}var o=J1(e,i,n,0,null,!1,!1,"",ex);return n._reactRootContainer=o,n[xs]=o.current,$u(n.nodeType===8?n.parentNode:n),Jo(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Ld(l);a.call(u)}}var l=Y0(n,0,!1,null,null,!1,!1,"",ex);return n._reactRootContainer=l,n[xs]=l.current,$u(n.nodeType===8?n.parentNode:n),Jo(function(){ch(e,l,t,i)}),l}function hh(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ld(o);a.call(l)}}ch(e,o,n,r)}else o=W2(t,e,n,r,i);return Ld(o)}bS=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ru(e.pendingLanes);t!==0&&(p0(e,t|1),Si(e,nn()),!(yt&6)&&(yl=nn()+500,_o()))}break;case 13:Jo(function(){var i=ys(n,1);if(i!==null){var r=ui();Tr(i,n,1,r)}}),q0(n,1)}};m0=function(n){if(n.tag===13){var e=ys(n,134217728);if(e!==null){var t=ui();Tr(e,n,134217728,t)}q0(n,134217728)}};RS=function(n){if(n.tag===13){var e=no(n),t=ys(n,e);if(t!==null){var i=ui();Tr(t,n,e,i)}q0(n,e)}};PS=function(){return wt};LS=function(n,e){var t=wt;try{return wt=n,e()}finally{wt=t}};sm=function(n,e,t){switch(e){case"input":if(Jp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=ih(i);if(!r)throw Error(ge(90));lS(i),Jp(i,r)}}}break;case"textarea":cS(n,t);break;case"select":e=t.value,e!=null&&Qa(n,!!t.multiple,e,!1)}};_S=H0;vS=Jo;var X2={usingClientEntryPoint:!1,Events:[Tc,za,ih,mS,gS,H0]},Gl={findFiberByHostInstance:No,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Y2={bundleType:Gl.bundleType,version:Gl.version,rendererPackageName:Gl.rendererPackageName,rendererConfig:Gl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ws.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=SS(n),n===null?null:n.stateNode},findFiberByHostInstance:Gl.findFiberByHostInstance||G2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yc.isDisabled&&Yc.supportsFiber)try{Qd=Yc.inject(Y2),Hr=Yc}catch{}}$i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X2;$i.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!j0(e))throw Error(ge(200));return H2(n,e,null,t)};$i.createRoot=function(n,e){if(!j0(n))throw Error(ge(299));var t=!1,i="",r=Q1;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Y0(n,1,!1,null,null,t,!1,i,r),n[xs]=e.current,$u(n.nodeType===8?n.parentNode:n),new $0(e)};$i.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ge(188)):(n=Object.keys(n).join(","),Error(ge(268,n)));return n=SS(e),n=n===null?null:n.stateNode,n};$i.flushSync=function(n){return Jo(n)};$i.hydrate=function(n,e,t){if(!dh(e))throw Error(ge(200));return hh(null,n,e,!0,t)};$i.hydrateRoot=function(n,e,t){if(!j0(n))throw Error(ge(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Q1;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=J1(e,null,n,1,t??null,r,!1,s,o),n[xs]=e.current,$u(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new fh(e)};$i.render=function(n,e,t){if(!dh(e))throw Error(ge(200));return hh(null,n,e,!1,t)};$i.unmountComponentAtNode=function(n){if(!dh(n))throw Error(ge(40));return n._reactRootContainer?(Jo(function(){hh(null,null,n,!1,function(){n._reactRootContainer=null,n[xs]=null})}),!0):!1};$i.unstable_batchedUpdates=H0;$i.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!dh(t))throw Error(ge(200));if(n==null||n._reactInternals===void 0)throw Error(ge(38));return hh(n,e,t,!1,i)};$i.version="18.3.1-next-f1338f8080-20240426";function eM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eM)}catch(n){console.error(n)}}eM(),eS.exports=$i;var q2=eS.exports,tx=q2;Xp.createRoot=tx.createRoot,Xp.hydrateRoot=tx.hydrateRoot;var tM={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},nx=js.createContext&&js.createContext(tM),$2=["attr","size","title"];function j2(n,e){if(n==null)return{};var t,i,r=K2(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(i=0;i<s.length;i++)t=s[i],e.indexOf(t)===-1&&{}.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function K2(n,e){if(n==null)return{};var t={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e.indexOf(i)!==-1)continue;t[i]=n[i]}return t}function Nd(){return Nd=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Nd.apply(null,arguments)}function ix(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Dd(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ix(Object(t),!0).forEach(function(i){Z2(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ix(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Z2(n,e,t){return(e=J2(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function J2(n){var e=Q2(n,"string");return typeof e=="symbol"?e:e+""}function Q2(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function nM(n){return n&&n.map((e,t)=>js.createElement(e.tag,Dd({key:t},e.attr),nM(e.child)))}function Un(n){return e=>js.createElement(eA,Nd({attr:Dd({},n.attr)},e),nM(n.child))}function eA(n){var e=t=>{var i=n.attr,r=n.size,s=n.title,o=j2(n,$2),a=r||t.size||"1em",l;return t.className&&(l=t.className),n.className&&(l=(l?l+" ":"")+n.className),js.createElement("svg",Nd({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,o,{className:l,style:Dd(Dd({color:n.color||t.color},t.style),n.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&js.createElement("title",null,s),n.children)};return nx!==void 0?js.createElement(nx.Consumer,null,t=>e(t)):e(tM)}function tA(n){return Un({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(n)}function nA(n){return Un({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(n)}function iA(n){return Un({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(n)}function rA(n){return Un({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(n)}function sA(n){return Un({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(n)}function oA(n){return Un({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(n)}function aA(n){return Un({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"},child:[]}]})(n)}function iM(n){return Un({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(n)}function K0(n){return Un({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(n)}function km(n){return Un({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(n)}function lA(n){return Un({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M275.3 250.5c7 7.4 18.4 7.4 25.5 0l108.9-114.2c31.6-33.2 29.8-88.2-5.6-118.8-30.8-26.7-76.7-21.9-104.9 7.7L288 36.9l-11.1-11.6C248.7-4.4 202.8-9.2 172 17.5c-35.3 30.6-37.2 85.6-5.6 118.8l108.9 114.2zm290 77.6c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6 3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z"},child:[]}]})(n)}function uA(n){return Un({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(n)}function cA(n){return Un({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(n)}function fA(n){return Un({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(n)}function dA(n){return Un({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(n)}function rM(n){return Un({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(n)}function hA(n){return Un({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(n)}const sM={logoText:"HopeBridge"},os={phone:"+1 (555) 012-3456",phoneHref:"tel:+15550123456",email:"hello@hopebridge.org",address:"1489 Langley Ave, Grand Forks, ND"},oM=[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Causes",href:"#causes"},{label:"Volunteers",href:"#volunteers"},{label:"Events",href:"#events"},{label:"Blog",href:"#blog"}],xo={subtitle:"Donate with love, save a child's life.",title:"Together, We Make Hope Possible.",text:"Every gift, big or small, helps us bring food, education and care to families who need it most.",primaryButton:{label:"All Campaigns",href:"#causes"},image:"/assets/hero-child.jpg",imageAlt:"A smiling child held by a HopeBridge volunteer"},hr={kicker:"- About Us -",title:"We can help make a family smile.",text:"For over a decade, HopeBridge Foundation has stood beside communities in crisis — delivering meals, building classrooms and funding medical care where it matters most.",dateLabel:"Founded",dateValue:"10.09.2012",locationLabel:"Location",locationValue:"1489 Langley Ave, Grand Forks, ND",button:{label:"Donate Now",href:"#donate"},image:"/assets/about-family.jpg",imageAlt:"Volunteers sharing food with a local family"},qc={kicker:"- Make a Donation -",title:"Our Recent Causes",items:[{image:"/assets/cause-food.jpg",alt:"Children receiving baskets of fresh food",category:"Food",title:"Donate for healthy food",raised:4e3,goal:1e4,text:"Help us stock community kitchens with fresh, nutritious meals every week."},{image:"/assets/cause-education.jpg",alt:"Schoolchildren raising hands in a classroom",category:"Education",title:"Education for poor children",raised:8e3,goal:1e4,text:"Books, uniforms and school fees for children who dream of learning."},{image:"/assets/cause-water.jpg",alt:"Children drinking clean water at a village pump",category:"Water",title:"Clean water for every village",raised:6500,goal:1e4,text:"Drilling wells and installing pumps so no child walks miles for water."},{image:"/assets/cause-health.jpg",alt:"A nurse checking a toddler at a free medical camp",category:"Health",title:"Free medical camps",raised:5200,goal:1e4,text:"Mobile clinics bringing checkups and medicine to remote families."}],buttonLabel:"Donate Now"},Wl={kicker:"- Our Volunteers -",title:"Meet the expert team of volunteers.",button:{label:"Discover More",href:"#volunteers"},members:[{image:"/assets/volunteer-1.jpg",name:"Norbert Farias",role:"Charity Volunteer"},{image:"/assets/volunteer-2.jpg",name:"Michelle Woods",role:"Charity Volunteer"},{image:"/assets/volunteer-3.jpg",name:"Diane Fritz",role:"Charity Volunteer"}]},$c={kicker:"- Make a Donation -",title:"Join upcoming events",buttonLabel:"Book Ticket",items:[{image:"/assets/event-1.jpg",alt:"Outdoor charity fundraising fair",organizer:"HopeBridge Team",title:"Community fundraiser for healthy food for children.",time:"9:00 am",location:"Grand Forks"},{image:"/assets/event-2.jpg",alt:"Charity gala dinner with volunteers serving food",organizer:"HopeBridge Team",title:"Charity gala dinner for clean water projects.",time:"6:30 pm",location:"New York"},{image:"/assets/blog-1.jpg",alt:"A volunteer reading to children",organizer:"HopeBridge Team",title:"Story-time drive to support child education.",time:"10:00 am",location:"Chicago"}]},pA=[{value:12,suffix:"M",prefix:"$",label:"Total Raised"},{value:4800,suffix:"",prefix:"",label:"Total Donors"},{value:320,suffix:"+",prefix:"",label:"Total Causes"},{value:950,suffix:"+",prefix:"",label:"Total Volunteers"}],Xl={kicker:"- Happy Volunteers -",title:"Our Happy Volunteers",items:[{image:"/assets/volunteer-3.jpg",quote:"Joining HopeBridge changed my life. Seeing a family smile because of something we built together is a feeling I can't describe.",name:"Edwards",role:"Lead Volunteer"},{image:"/assets/volunteer-1.jpg",quote:"Every weekend I spend at the community kitchen reminds me why giving matters. The team is family now.",name:"Ramisna Asbare",role:"Lead Volunteer"},{image:"/assets/volunteer-2.jpg",quote:"From fundraising fairs to classroom builds, every event is organized with so much heart. I'm proud to be part of it.",name:"Fitzgerald",role:"Lead Volunteer"}]},jc={kicker:"- Latest News -",title:"Latest news and articles from our blog.",buttonLabel:"Read More",posts:[{image:"/assets/blog-1.jpg",alt:"A volunteer reading a story to children",date:"06 - August - 2026",title:"Giving to the poor is a great satisfaction of heart.",text:"Our story-time drives have now reached 40 libraries, bringing books and smiles to hundreds of children."},{image:"/assets/blog-2.jpg",alt:"Volunteers planting trees together",date:"08 - August - 2026",title:"Support our charity's mission for a brighter future.",text:"This season our volunteers planted 2,000 trees and launched three new community gardens."}]},$h={title:"Ready to change a life today?",text:"Your donation — of any size — goes directly to the families who need it most.",button:{label:"Donate Now"}},Kc={about:"HopeBridge Foundation is a nonprofit bringing food, education, clean water and healthcare to communities in need.",quickLinks:oM,socials:[{label:"Facebook",href:"https://facebook.com",icon:"facebook"},{label:"Twitter",href:"https://twitter.com",icon:"twitter"},{label:"Instagram",href:"https://instagram.com",icon:"instagram"},{label:"LinkedIn",href:"https://linkedin.com",icon:"linkedin"}],copyright:"HopeBridge Foundation. All rights reserved."};function mA(){const[n,e]=li.useState(!1),[t,i]=li.useState(!1);li.useEffect(()=>{const s=()=>i(window.scrollY>40);return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]),li.useEffect(()=>{if(!n)return;const s=o=>{o.key==="Escape"&&e(!1)};return document.body.style.overflow="hidden",window.addEventListener("keydown",s),()=>{document.body.style.overflow="",window.removeEventListener("keydown",s)}},[n]);const r=()=>e(!1);return U.jsx("header",{className:`site-header ${t?"is-scrolled":""}`,children:U.jsxs("div",{className:"container header-inner",children:[U.jsx("button",{className:`menu-backdrop ${n?"is-visible":""}`,"aria-label":"Close navigation menu",tabIndex:n?0:-1,onClick:r}),U.jsxs("a",{href:"#home",className:"logo",onClick:r,children:[U.jsx("span",{className:"logo-icon","aria-hidden":"true",children:U.jsx(lA,{})}),U.jsxs("span",{className:"logo-wordmark",children:[sM.logoText,U.jsx("small",{children:"COMMUNITY FOUNDATION"})]})]}),U.jsxs("nav",{className:`main-nav ${n?"is-open":""}`,"aria-label":"Main navigation",children:[U.jsx("ul",{children:oM.map(s=>U.jsx("li",{children:U.jsx("a",{href:s.href,onClick:r,children:s.label})},s.href))}),U.jsx("a",{className:"btn btn-primary nav-donate",href:"#donate",onClick:r,children:"Donate Now"})]}),U.jsxs("div",{className:"header-right",children:[U.jsxs("a",{className:"header-phone",href:os.phoneHref,children:[U.jsx(iM,{"aria-hidden":"true"}),U.jsxs("span",{children:["Help Line: ",os.phone]})]}),U.jsx("button",{className:"menu-toggle","aria-label":n?"Close menu":"Open menu","aria-expanded":n,onClick:()=>e(s=>!s),children:n?U.jsx(oA,{}):U.jsx(hA,{})})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Z0="186",gA=0,rx=1,_A=2,qf=1,vA=2,ou=3,Qo=0,Mi=1,as=2,ps=0,wu=1,sx=2,ox=3,ax=4,xA=5,Na=100,yA=101,SA=102,MA=103,EA=104,TA=200,wA=201,AA=202,CA=203,aM=204,lM=205,bA=206,RA=207,PA=208,LA=209,NA=210,DA=211,IA=212,UA=213,OA=214,Bm=0,zm=1,Vm=2,ic=3,Hm=4,Gm=5,Wm=6,Xm=7,uM=0,FA=1,kA=2,Wr=0,cM=1,fM=2,dM=3,hM=4,pM=5,mM=6,gM=7,_M=300,ea=301,Sl=302,jh=303,Kh=304,ph=306,Ym=1e3,fs=1001,qm=1002,bn=1003,BA=1004,Zc=1005,qn=1006,Zh=1007,Uo=1008,Fi=1009,vM=1010,xM=1011,rc=1012,J0=1013,Yr=1014,kr=1015,qr=1016,Q0=1017,e_=1018,sc=1020,yM=35902,SM=35899,MM=1021,EM=1022,Mr=1023,Ms=1026,Oo=1027,TM=1028,t_=1029,ta=1030,n_=1031,i_=1033,$f=33776,jf=33777,Kf=33778,Zf=33779,$m=35840,jm=35841,Km=35842,Zm=35843,Jm=36196,Qm=37492,eg=37496,tg=37488,ng=37489,Id=37490,ig=37491,rg=37808,sg=37809,og=37810,ag=37811,lg=37812,ug=37813,cg=37814,fg=37815,dg=37816,hg=37817,pg=37818,mg=37819,gg=37820,_g=37821,vg=36492,xg=36494,yg=36495,Sg=36283,Mg=36284,Ud=36285,Eg=36286,zA=3200,Tg=0,VA=1,Vs="",Di="srgb",Od="srgb-linear",Fd="linear",Tt="srgb",Jh=7680,HA=519,GA=512,WA=513,XA=514,r_=515,YA=516,qA=517,s_=518,$A=519,jA=35044,lx="300 es",Br=2e3,oc=2001;function KA(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function kd(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ZA(){const n=kd("canvas");return n.style.display="block",n}const ux={};function cx(...n){const e="THREE."+n.shift();console.log(e,...n)}function wM(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function et(...n){n=wM(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function xt(...n){n=wM(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function sl(...n){const e=n.join(" ");e in ux||(ux[e]=!0,et(...n))}function JA(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const QA={[Bm]:zm,[Vm]:Wm,[Hm]:Xm,[ic]:Gm,[zm]:Bm,[Wm]:Vm,[Xm]:Hm,[Gm]:ic};class la{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qh=Math.PI/180,wg=180/Math.PI;function Dl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zn[n&255]+zn[n>>8&255]+zn[n>>16&255]+zn[n>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[t&63|128]+zn[t>>8&255]+"-"+zn[t>>16&255]+zn[t>>24&255]+zn[i&255]+zn[i>>8&255]+zn[i>>16&255]+zn[i>>24&255]).toLowerCase()}function ct(n,e,t){return Math.max(e,Math.min(t,n))}function eC(n,e){return(n%e+e)%e}function ep(n,e,t){return(1-t)*n+t*e}function Yl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function hi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const V_=class V_{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};V_.prototype.isVector2=!0;let Ce=V_;class Il{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],m=s[o+2],_=s[o+3];if(d!==_||l!==f||u!==h||c!==m){let g=l*f+u*h+c*m+d*_;g<0&&(f=-f,h=-h,m=-m,_=-_,g=-g);let p=1-a;if(g<.9995){const v=Math.acos(g),S=Math.sin(v);p=Math.sin(p*v)/S,a=Math.sin(a*v)/S,l=l*p+f*a,u=u*p+h*a,c=c*p+m*a,d=d*p+_*a}else{l=l*p+f*a,u=u*p+h*a,c=c*p+m*a,d=d*p+_*a;const v=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=v,u*=v,c*=v,d*=v}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],h=s[o+2],m=s[o+3];return e[t]=a*m+c*d+l*h-u*f,e[t+1]=l*m+c*f+u*d-a*h,e[t+2]=u*m+c*h+a*f-l*d,e[t+3]=c*m-a*d-l*f-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),h=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*h*m,this._y=u*h*d-f*c*m,this._z=u*c*m+f*h*d,this._w=u*c*d-f*h*m;break;case"YXZ":this._x=f*c*d+u*h*m,this._y=u*h*d-f*c*m,this._z=u*c*m-f*h*d,this._w=u*c*d+f*h*m;break;case"ZXY":this._x=f*c*d-u*h*m,this._y=u*h*d+f*c*m,this._z=u*c*m+f*h*d,this._w=u*c*d-f*h*m;break;case"ZYX":this._x=f*c*d-u*h*m,this._y=u*h*d+f*c*m,this._z=u*c*m-f*h*d,this._w=u*c*d+f*h*m;break;case"YZX":this._x=f*c*d+u*h*m,this._y=u*h*d+f*c*m,this._z=u*c*m-f*h*d,this._w=u*c*d-f*h*m;break;case"XZY":this._x=f*c*d-u*h*m,this._y=u*h*d-f*c*m,this._z=u*c*m+f*h*d,this._w=u*c*d+f*h*m;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(c-l)*h,this._y=(s-u)*h,this._z=(o-r)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(c-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+u)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(s-u)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+c)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const u=Math.acos(a),c=Math.sin(u);l=Math.sin(l*u)/c,t=Math.sin(t*u)/c,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const H_=class H_{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tp.copy(this).projectOnVector(e),this.sub(tp)}reflect(e){return this.sub(tp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};H_.prototype.isVector3=!0;let X=H_;const tp=new X,fx=new Il,G_=class G_{constructor(e,t,i,r,s,o,a,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],h=i[5],m=i[8],_=r[0],g=r[3],p=r[6],v=r[1],S=r[4],x=r[7],E=r[2],T=r[5],w=r[8];return s[0]=o*_+a*v+l*E,s[3]=o*g+a*S+l*T,s[6]=o*p+a*x+l*w,s[1]=u*_+c*v+d*E,s[4]=u*g+c*S+d*T,s[7]=u*p+c*x+d*w,s[2]=f*_+h*v+m*E,s[5]=f*g+h*S+m*T,s[8]=f*p+h*x+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,h=u*s-o*l,m=t*d+i*f+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=d*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=h*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return sl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(np.makeScale(e,t)),this}rotate(e){return sl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(np.makeRotation(-e)),this}translate(e,t){return sl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(np.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};G_.prototype.isMatrix3=!0;let nt=G_;const np=new nt,dx=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hx=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tC(){const n={enabled:!0,workingColorSpace:Od,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Tt&&(r.r=ms(r.r),r.g=ms(r.g),r.b=ms(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Tt&&(r.r=ol(r.r),r.g=ol(r.g),r.b=ol(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Vs?Fd:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return sl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return sl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Od]:{primaries:e,whitePoint:i,transfer:Fd,toXYZ:dx,fromXYZ:hx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Di},outputColorSpaceConfig:{drawingBufferColorSpace:Di}},[Di]:{primaries:e,whitePoint:i,transfer:Tt,toXYZ:dx,fromXYZ:hx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Di}}}),n}const gt=tC();function ms(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ol(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ma;class nC{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ma===void 0&&(ma=kd("canvas")),ma.width=e.width,ma.height=e.height;const r=ma.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ma}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=kd("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ms(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ms(t[i]/255)*255):t[i]=ms(t[i]);return{data:t,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iC=0;class o_{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:iC++}),this.uuid=Dl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ip(r[o].image)):s.push(ip(r[o]))}else s=ip(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ip(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}let rC=0;const rp=new X;class ci extends la{constructor(e=ci.DEFAULT_IMAGE,t=ci.DEFAULT_MAPPING,i=fs,r=fs,s=qn,o=Uo,a=Mr,l=Fi,u=ci.DEFAULT_ANISOTROPY,c=Vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rC++}),this.uuid=Dl(),this.name="",this.source=new o_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rp).x}get height(){return this.source.getSize(rp).y}get depth(){return this.source.getSize(rp).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){et(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_M)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ym:e.x=e.x-Math.floor(e.x);break;case fs:e.x=e.x<0?0:1;break;case qm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ym:e.y=e.y-Math.floor(e.y);break;case fs:e.y=e.y<0?0:1;break;case qm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ci.DEFAULT_IMAGE=null;ci.DEFAULT_MAPPING=_M;ci.DEFAULT_ANISOTROPY=1;const W_=class W_{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],h=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(u+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(u+1)/2,x=(h+1)/2,E=(p+1)/2,T=(c+f)/4,w=(d+_)/4,y=(m+g)/4;return S>x&&S>E?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=T/i,s=w/i):x>E?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=T/r,s=y/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=w/s,r=y/s),this.set(i,r,s,t),this}let v=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-_)/v,this.z=(f-c)/v,this.w=Math.acos((u+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};W_.prototype.isVector4=!0;let Wt=W_;class sC extends la{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new ci(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new o_(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends sC{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class AM extends ci{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oC extends ci{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Zd=class Zd{constructor(e,t,i,r,s,o,a,l,u,c,d,f,h,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,f,h,m,_,g)}set(e,t,i,r,s,o,a,l,u,c,d,f,h,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=d,p[14]=f,p[3]=h,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zd().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/ga.setFromMatrixColumn(e,0).length(),s=1/ga.setFromMatrixColumn(e,1).length(),o=1/ga.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,h=o*d,m=a*c,_=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=h+m*u,t[5]=f-_*u,t[9]=-a*l,t[2]=_-f*u,t[6]=m+h*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,h=l*d,m=u*c,_=u*d;t[0]=f+_*a,t[4]=m*a-h,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=h*a-m,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,h=l*d,m=u*c,_=u*d;t[0]=f-_*a,t[4]=-o*d,t[8]=m+h*a,t[1]=h+m*a,t[5]=o*c,t[9]=_-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,h=o*d,m=a*c,_=a*d;t[0]=l*c,t[4]=m*u-h,t[8]=f*u+_,t[1]=l*d,t[5]=_*u+f,t[9]=h*u-m,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*u,m=a*l,_=a*u;t[0]=l*c,t[4]=_-f*d,t[8]=m*d+h,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=h*d+m,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,h=o*u,m=a*l,_=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+_,t[5]=o*c,t[9]=h*d-m,t[2]=m*d-h,t[6]=a*c,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aC,e,lC)}lookAt(e,t,i){const r=this.elements;return bi.subVectors(e,t),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),Ps.crossVectors(i,bi),Ps.lengthSq()===0&&(Math.abs(i.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),Ps.crossVectors(i,bi)),Ps.normalize(),Jc.crossVectors(bi,Ps),r[0]=Ps.x,r[4]=Jc.x,r[8]=bi.x,r[1]=Ps.y,r[5]=Jc.y,r[9]=bi.y,r[2]=Ps.z,r[6]=Jc.z,r[10]=bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],h=i[13],m=i[2],_=i[6],g=i[10],p=i[14],v=i[3],S=i[7],x=i[11],E=i[15],T=r[0],w=r[4],y=r[8],A=r[12],b=r[1],L=r[5],N=r[9],W=r[13],I=r[2],H=r[6],j=r[10],B=r[14],V=r[3],z=r[7],R=r[11],K=r[15];return s[0]=o*T+a*b+l*I+u*V,s[4]=o*w+a*L+l*H+u*z,s[8]=o*y+a*N+l*j+u*R,s[12]=o*A+a*W+l*B+u*K,s[1]=c*T+d*b+f*I+h*V,s[5]=c*w+d*L+f*H+h*z,s[9]=c*y+d*N+f*j+h*R,s[13]=c*A+d*W+f*B+h*K,s[2]=m*T+_*b+g*I+p*V,s[6]=m*w+_*L+g*H+p*z,s[10]=m*y+_*N+g*j+p*R,s[14]=m*A+_*W+g*B+p*K,s[3]=v*T+S*b+x*I+E*V,s[7]=v*w+S*L+x*H+E*z,s[11]=v*y+S*N+x*j+E*R,s[15]=v*A+S*W+x*B+E*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],h=e[14],m=e[3],_=e[7],g=e[11],p=e[15],v=l*h-u*f,S=a*h-u*d,x=a*f-l*d,E=o*h-u*c,T=o*f-l*c,w=o*d-a*c;return t*(_*v-g*S+p*x)-i*(m*v-g*E+p*T)+r*(m*S-_*E+p*w)-s*(m*x-_*T+g*w)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],u=e[6],c=e[10];return t*(o*c-a*u)-i*(s*c-a*l)+r*(s*u-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],h=e[11],m=e[12],_=e[13],g=e[14],p=e[15],v=t*a-i*o,S=t*l-r*o,x=t*u-s*o,E=i*l-r*a,T=i*u-s*a,w=r*u-s*l,y=c*_-d*m,A=c*g-f*m,b=c*p-h*m,L=d*g-f*_,N=d*p-h*_,W=f*p-h*g,I=v*W-S*N+x*L+E*b-T*A+w*y;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/I;return e[0]=(a*W-l*N+u*L)*H,e[1]=(r*N-i*W-s*L)*H,e[2]=(_*w-g*T+p*E)*H,e[3]=(f*T-d*w-h*E)*H,e[4]=(l*b-o*W-u*A)*H,e[5]=(t*W-r*b+s*A)*H,e[6]=(g*x-m*w-p*S)*H,e[7]=(c*w-f*x+h*S)*H,e[8]=(o*N-a*b+u*y)*H,e[9]=(i*b-t*N-s*y)*H,e[10]=(m*T-_*x+p*v)*H,e[11]=(d*x-c*T-h*v)*H,e[12]=(a*A-o*L-l*y)*H,e[13]=(t*L-i*A+r*y)*H,e[14]=(_*S-m*E-g*v)*H,e[15]=(c*E-d*S+f*v)*H,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,h=s*c,m=s*d,_=o*c,g=o*d,p=a*d,v=l*u,S=l*c,x=l*d,E=i.x,T=i.y,w=i.z;return r[0]=(1-(_+p))*E,r[1]=(h+x)*E,r[2]=(m-S)*E,r[3]=0,r[4]=(h-x)*T,r[5]=(1-(f+p))*T,r[6]=(g+v)*T,r[7]=0,r[8]=(m+S)*w,r[9]=(g-v)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=ga.set(r[0],r[1],r[2]).length();const a=ga.set(r[4],r[5],r[6]).length(),l=ga.set(r[8],r[9],r[10]).length();s<0&&(o=-o),pr.copy(this);const u=1/o,c=1/a,d=1/l;return pr.elements[0]*=u,pr.elements[1]*=u,pr.elements[2]*=u,pr.elements[4]*=c,pr.elements[5]*=c,pr.elements[6]*=c,pr.elements[8]*=d,pr.elements[9]*=d,pr.elements[10]*=d,t.setFromRotationMatrix(pr),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=Br,l=!1){const u=this.elements,c=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,_;if(l)m=s/(o-s),_=o*s/(o-s);else if(a===Br)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===oc)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Br,l=!1){const u=this.elements,c=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r);let m,_;if(l)m=1/(o-s),_=o/(o-s);else if(a===Br)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===oc)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=m,u[14]=_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Zd.prototype.isMatrix4=!0;let $t=Zd;const ga=new X,pr=new $t,aC=new X(0,0,0),lC=new X(1,1,1),Ps=new X,Jc=new X,bi=new X,px=new $t,mx=new Il;class uo{constructor(e=0,t=0,i=0,r=uo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,h),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return px.makeRotationFromQuaternion(e),this.setFromRotationMatrix(px,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mx.setFromEuler(this),this.setFromQuaternion(mx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}uo.DEFAULT_ORDER="XYZ";class CM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uC=0;const gx=new X,_a=new Il,Zr=new $t,Qc=new X,ql=new X,cC=new X,fC=new Il,_x=new X(1,0,0),vx=new X(0,1,0),xx=new X(0,0,1),yx={type:"added"},dC={type:"removed"},va={type:"childadded",child:null},sp={type:"childremoved",child:null};class Ln extends la{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uC++}),this.uuid=Dl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new X,t=new uo,i=new Il,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $t},normalMatrix:{value:new nt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new CM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _a.setFromAxisAngle(e,t),this.quaternion.multiply(_a),this}rotateOnWorldAxis(e,t){return _a.setFromAxisAngle(e,t),this.quaternion.premultiply(_a),this}rotateX(e){return this.rotateOnAxis(_x,e)}rotateY(e){return this.rotateOnAxis(vx,e)}rotateZ(e){return this.rotateOnAxis(xx,e)}translateOnAxis(e,t){return gx.copy(e).applyQuaternion(this.quaternion),this.position.add(gx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_x,e)}translateY(e){return this.translateOnAxis(vx,e)}translateZ(e){return this.translateOnAxis(xx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qc.copy(e):Qc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ql.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zr.lookAt(ql,Qc,this.up):Zr.lookAt(Qc,ql,this.up),this.quaternion.setFromRotationMatrix(Zr),r&&(Zr.extractRotation(r.matrixWorld),_a.setFromRotationMatrix(Zr),this.quaternion.premultiply(_a.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(xt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yx),va.child=e,this.dispatchEvent(va),va.child=null):xt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dC),sp.child=e,this.dispatchEvent(sp),sp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yx),va.child=e,this.dispatchEvent(va),va.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ql,e,cC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ql,fC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ln.DEFAULT_UP=new X(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qa extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hC={type:"move"};class op{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),p=this._getHandJoint(u,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),h=.02,m=.005;u.inputState.pinching&&f>h+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=h-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new qa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const bM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ls={h:0,s:0,l:0},ef={h:0,s:0,l:0};function ap(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class dt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=gt.workingColorSpace){if(e=eC(e,1),t=ct(t,0,1),i=ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ap(o,s,e+1/3),this.g=ap(o,s,e),this.b=ap(o,s,e-1/3)}return gt.colorSpaceToWorking(this,r),this}setStyle(e,t=Di){function i(s){s!==void 0&&parseFloat(s)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:et("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Di){const i=bM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}copyLinearToSRGB(e){return this.r=ol(e.r),this.g=ol(e.g),this.b=ol(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Di){return gt.workingToColorSpace(Vn.copy(this),e),Math.round(ct(Vn.r*255,0,255))*65536+Math.round(ct(Vn.g*255,0,255))*256+Math.round(ct(Vn.b*255,0,255))}getHexString(e=Di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(Vn.copy(this),t);const i=Vn.r,r=Vn.g,s=Vn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(Vn.copy(this),t),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=Di){gt.workingToColorSpace(Vn.copy(this),e);const t=Vn.r,i=Vn.g,r=Vn.b;return e!==Di?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ls),this.setHSL(Ls.h+e,Ls.s+t,Ls.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ls),e.getHSL(ef);const i=ep(Ls.h,ef.h,t),r=ep(Ls.s,ef.s,t),s=ep(Ls.l,ef.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new dt;dt.NAMES=bM;class pC extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new uo,this.environmentIntensity=1,this.environmentRotation=new uo,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const mr=new X,Jr=new X,lp=new X,Qr=new X,xa=new X,ya=new X,Sx=new X,up=new X,cp=new X,fp=new X,dp=new Wt,hp=new Wt,pp=new Wt;class Sr{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),mr.subVectors(e,t),r.cross(mr);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){mr.subVectors(r,t),Jr.subVectors(i,t),lp.subVectors(e,t);const o=mr.dot(mr),a=mr.dot(Jr),l=mr.dot(lp),u=Jr.dot(Jr),c=Jr.dot(lp),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(u*l-a*c)*f,m=(o*c-a*l)*f;return s.set(1-h-m,m,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Qr)===null?!1:Qr.x>=0&&Qr.y>=0&&Qr.x+Qr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Qr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qr.x),l.addScaledVector(o,Qr.y),l.addScaledVector(a,Qr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return dp.setScalar(0),hp.setScalar(0),pp.setScalar(0),dp.fromBufferAttribute(e,t),hp.fromBufferAttribute(e,i),pp.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(dp,s.x),o.addScaledVector(hp,s.y),o.addScaledVector(pp,s.z),o}static isFrontFacing(e,t,i,r){return mr.subVectors(i,t),Jr.subVectors(e,t),mr.cross(Jr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mr.subVectors(this.c,this.b),Jr.subVectors(this.a,this.b),mr.cross(Jr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Sr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Sr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;xa.subVectors(r,i),ya.subVectors(s,i),up.subVectors(e,i);const l=xa.dot(up),u=ya.dot(up);if(l<=0&&u<=0)return t.copy(i);cp.subVectors(e,r);const c=xa.dot(cp),d=ya.dot(cp);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(xa,o);fp.subVectors(e,s);const h=xa.dot(fp),m=ya.dot(fp);if(m>=0&&h<=m)return t.copy(s);const _=h*u-l*m;if(_<=0&&u>=0&&m<=0)return a=u/(u-m),t.copy(i).addScaledVector(ya,a);const g=c*m-h*d;if(g<=0&&d-c>=0&&h-m>=0)return Sx.subVectors(s,r),a=(d-c)/(d-c+(h-m)),t.copy(r).addScaledVector(Sx,a);const p=1/(g+_+f);return o=_*p,a=f*p,t.copy(i).addScaledVector(xa,o).addScaledVector(ya,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ac{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gr):gr.fromBufferAttribute(s,o),gr.applyMatrix4(e.matrixWorld),this.expandByPoint(gr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tf.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),tf.copy(i.boundingBox)),tf.applyMatrix4(e.matrixWorld),this.union(tf)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gr),gr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($l),nf.subVectors(this.max,$l),Sa.subVectors(e.a,$l),Ma.subVectors(e.b,$l),Ea.subVectors(e.c,$l),Ns.subVectors(Ma,Sa),Ds.subVectors(Ea,Ma),yo.subVectors(Sa,Ea);let t=[0,-Ns.z,Ns.y,0,-Ds.z,Ds.y,0,-yo.z,yo.y,Ns.z,0,-Ns.x,Ds.z,0,-Ds.x,yo.z,0,-yo.x,-Ns.y,Ns.x,0,-Ds.y,Ds.x,0,-yo.y,yo.x,0];return!mp(t,Sa,Ma,Ea,nf)||(t=[1,0,0,0,1,0,0,0,1],!mp(t,Sa,Ma,Ea,nf))?!1:(rf.crossVectors(Ns,Ds),t=[rf.x,rf.y,rf.z],mp(t,Sa,Ma,Ea,nf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(es),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const es=[new X,new X,new X,new X,new X,new X,new X,new X],gr=new X,tf=new Ac,Sa=new X,Ma=new X,Ea=new X,Ns=new X,Ds=new X,yo=new X,$l=new X,nf=new X,rf=new X,So=new X;function mp(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){So.fromArray(n,s);const a=r.x*Math.abs(So.x)+r.y*Math.abs(So.y)+r.z*Math.abs(So.z),l=e.dot(So),u=t.dot(So),c=i.dot(So);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const ln=new X,sf=new Ce;let mC=0;class gs extends la{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mC++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=jA,this.updateRanges=[],this.gpuType=kr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)sf.fromBufferAttribute(this,t),sf.applyMatrix3(e),this.setXY(t,sf.x,sf.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Yl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=hi(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yl(t,this.array)),t}setX(e,t){return this.normalized&&(t=hi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yl(t,this.array)),t}setY(e,t){return this.normalized&&(t=hi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yl(t,this.array)),t}setW(e,t){return this.normalized&&(t=hi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=hi(t,this.array),i=hi(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=hi(t,this.array),i=hi(i,this.array),r=hi(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=hi(t,this.array),i=hi(i,this.array),r=hi(r,this.array),s=hi(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class RM extends gs{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class PM extends gs{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Nn extends gs{constructor(e,t,i){super(new Float32Array(e),t,i)}}const gC=new Ac,jl=new X,gp=new X;class a_{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):gC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jl.subVectors(e,this.center);const t=jl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(jl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jl.copy(e.center).add(gp)),this.expandByPoint(jl.copy(e.center).sub(gp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let _C=0;const Ji=new $t,_p=new Ln,Ta=new X,Ri=new Ac,Kl=new Ac,Sn=new X;class fr extends la{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_C++}),this.uuid=Dl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(KA(e)?PM:RM)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new nt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ji.makeRotationFromQuaternion(e),this.applyMatrix4(Ji),this}rotateX(e){return Ji.makeRotationX(e),this.applyMatrix4(Ji),this}rotateY(e){return Ji.makeRotationY(e),this.applyMatrix4(Ji),this}rotateZ(e){return Ji.makeRotationZ(e),this.applyMatrix4(Ji),this}translate(e,t,i){return Ji.makeTranslation(e,t,i),this.applyMatrix4(Ji),this}scale(e,t,i){return Ji.makeScale(e,t,i),this.applyMatrix4(Ji),this}lookAt(e){return _p.lookAt(e),_p.updateMatrix(),this.applyMatrix4(_p.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ta).negate(),this.translate(Ta.x,Ta.y,Ta.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Nn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ac);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ri.setFromBufferAttribute(s),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,Ri.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,Ri.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(Ri.min),this.boundingBox.expandByPoint(Ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new a_);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Ri.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Kl.setFromBufferAttribute(a),this.morphTargetsRelative?(Sn.addVectors(Ri.min,Kl.min),Ri.expandByPoint(Sn),Sn.addVectors(Ri.max,Kl.max),Ri.expandByPoint(Sn)):(Ri.expandByPoint(Kl.min),Ri.expandByPoint(Kl.max))}Ri.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Sn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Sn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Sn.fromBufferAttribute(a,u),l&&(Ta.fromBufferAttribute(e,u),Sn.add(Ta)),r=Math.max(r,i.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new gs(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new X,l[y]=new X;const u=new X,c=new X,d=new X,f=new Ce,h=new Ce,m=new Ce,_=new X,g=new X;function p(y,A,b){u.fromBufferAttribute(i,y),c.fromBufferAttribute(i,A),d.fromBufferAttribute(i,b),f.fromBufferAttribute(s,y),h.fromBufferAttribute(s,A),m.fromBufferAttribute(s,b),c.sub(u),d.sub(u),h.sub(f),m.sub(f);const L=1/(h.x*m.y-m.x*h.y);isFinite(L)&&(_.copy(c).multiplyScalar(m.y).addScaledVector(d,-h.y).multiplyScalar(L),g.copy(d).multiplyScalar(h.x).addScaledVector(c,-m.x).multiplyScalar(L),a[y].add(_),a[A].add(_),a[b].add(_),l[y].add(g),l[A].add(g),l[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let y=0,A=v.length;y<A;++y){const b=v[y],L=b.start,N=b.count;for(let W=L,I=L+N;W<I;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const S=new X,x=new X,E=new X,T=new X;function w(y){E.fromBufferAttribute(r,y),T.copy(E);const A=a[y];S.copy(A),S.sub(E.multiplyScalar(E.dot(A))).normalize(),x.crossVectors(T,A);const L=x.dot(l[y])<0?-1:1;o.setXYZW(y,S.x,S.y,S.z,L)}for(let y=0,A=v.length;y<A;++y){const b=v[y],L=b.start,N=b.count;for(let W=L,I=L+N;W<I;W+=3)w(e.getX(W+0)),w(e.getX(W+1)),w(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new gs(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,u=new X,c=new X,d=new X;if(e)for(let f=0,h=e.count;f<h;f+=3){const m=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let h=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*c;for(let p=0;p<c;p++)f[m++]=u[h++]}return new gs(f,c,d)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const h=u[d];c.push(h.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,h=d.length;f<h;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vp=new X,vC=new X,xC=new nt;class ks{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=vp.subVectors(i,t).cross(vC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(vp),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||xC.getNormalMatrix(e),r=this.coplanarPoint(vp).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let yC=0;class Cc extends la{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yC++}),this.uuid=Dl(),this.name="",this.type="Material",this.blending=wu,this.side=Qo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=aM,this.blendDst=lM,this.blendEquation=Na,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=ic,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=HA,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jh,this.stencilZFail=Jh,this.stencilZPass=Jh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new dt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ks().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ce().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ts=new X,xp=new X,of=new X,af=new X;class SC{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ts)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ts.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ts.copy(this.origin).addScaledVector(this.direction,t),ts.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){xp.copy(e).add(t).multiplyScalar(.5),of.copy(t).sub(e).normalize(),af.copy(this.origin).sub(xp);const s=e.distanceTo(t)*.5,o=-this.direction.dot(of),a=af.dot(this.direction),l=-af.dot(of),u=af.lengthSq(),c=Math.abs(1-o*o);let d,f,h,m;if(c>0)if(d=o*l-a,f=o*a-l,m=s*c,d>=0)if(f>=-m)if(f<=m){const _=1/c;d*=_,f*=_,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+u;else f<=-m?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+u):f<=m?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(xp).addScaledVector(of,f),h}intersectSphere(e,t){if(e.radius<0)return null;ts.subVectors(e.center,this.origin);const i=ts.dot(this.direction),r=ts.dot(ts)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ts)!==null}intersectTriangle(e,t,i,r,s){const o=this.origin,a=this.direction,l=a.x,u=a.y,c=a.z,d=e.x-o.x,f=e.y-o.y,h=e.z-o.z,m=t.x-o.x,_=t.y-o.y,g=t.z-o.z,p=i.x-o.x,v=i.y-o.y,S=i.z-o.z,x=Math.abs(l),E=Math.abs(u),T=Math.abs(c);let w,y,A,b,L,N,W,I,H,j,B,V;if(x>=E&&x>=T?(A=l,N=d,H=m,V=p,l>=0?(w=u,y=c,b=f,L=h,W=_,I=g,j=v,B=S):(w=c,y=u,b=h,L=f,W=g,I=_,j=S,B=v)):E>=T?(A=u,N=f,H=_,V=v,u>=0?(w=c,y=l,b=h,L=d,W=g,I=m,j=S,B=p):(w=l,y=c,b=d,L=h,W=m,I=g,j=p,B=S)):(A=c,N=h,H=g,V=S,c>=0?(w=l,y=u,b=d,L=f,W=m,I=_,j=p,B=v):(w=u,y=l,b=f,L=d,W=_,I=m,j=v,B=p)),A===0)return null;const z=w/A,R=y/A,K=1/A,pe=b-z*N,we=L-R*N,ze=W-z*H,We=I-R*H,qe=j-z*V,J=B-R*V,ne=qe*We-J*ze,_e=pe*J-we*qe,$e=ze*we-We*pe;if(r){if(ne<0||_e<0||$e<0)return null}else if((ne<0||_e<0||$e<0)&&(ne>0||_e>0||$e>0))return null;const ye=ne+_e+$e;if(ye===0)return null;const Ue=K*(ne*N+_e*H+$e*V);return(ye>0?Ue<0:Ue>0)?null:this.at(Ue/ye,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class LM extends Cc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new uo,this.combine=uM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mx=new $t,Mo=new SC,lf=new a_,Ex=new X,uf=new X,cf=new X,ff=new X,yp=new X,df=new X,Tx=new X,hf=new X;class gi extends Ln{constructor(e=new fr,t=new LM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){df.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(yp.fromBufferAttribute(d,e),o?df.addScaledVector(yp,c):df.addScaledVector(yp.sub(t),c))}t.add(df)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lf.copy(i.boundingSphere),lf.applyMatrix4(s),Mo.copy(e.ray).recast(e.near),!(lf.containsPoint(Mo.origin)===!1&&(Mo.intersectSphere(lf,Ex)===null||Mo.origin.distanceToSquared(Ex)>(e.far-e.near)**2))&&(Mx.copy(s).invert(),Mo.copy(e.ray).applyMatrix4(Mx),!(i.boundingBox!==null&&Mo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Mo)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],v=Math.max(g.start,h.start),S=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let x=v,E=S;x<E;x+=3){const T=a.getX(x),w=a.getX(x+1),y=a.getX(x+2);r=pf(this,p,e,i,u,c,d,T,w,y),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let g=m,p=_;g<p;g+=3){const v=a.getX(g),S=a.getX(g+1),x=a.getX(g+2);r=pf(this,o,e,i,u,c,d,v,S,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],v=Math.max(g.start,h.start),S=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let x=v,E=S;x<E;x+=3){const T=x,w=x+1,y=x+2;r=pf(this,p,e,i,u,c,d,T,w,y),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let g=m,p=_;g<p;g+=3){const v=g,S=g+1,x=g+2;r=pf(this,o,e,i,u,c,d,v,S,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function MC(n,e,t,i,r,s,o,a){let l;if(e.side===Mi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Qo,a),l===null)return null;hf.copy(a),hf.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(hf);return u<t.near||u>t.far?null:{distance:u,point:hf.clone(),object:n}}function pf(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,uf),n.getVertexPosition(l,cf),n.getVertexPosition(u,ff);const c=MC(n,e,t,i,uf,cf,ff,Tx);if(c){const d=new X;Sr.getBarycoord(Tx,uf,cf,ff,d),r&&(c.uv=Sr.getInterpolatedAttribute(r,a,l,u,d,new Ce)),s&&(c.uv1=Sr.getInterpolatedAttribute(s,a,l,u,d,new Ce)),o&&(c.normal=Sr.getInterpolatedAttribute(o,a,l,u,d,new X),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new X,materialIndex:0};Sr.getNormal(uf,cf,ff,f.normal),c.face=f,c.barycoord=d}return c}class EC extends ci{constructor(e=null,t=1,i=1,r,s,o,a,l,u=bn,c=bn,d,f){super(null,o,a,l,u,c,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eo=new a_,TC=new Ce(.5,.5),mf=new X;class l_{constructor(e=new ks,t=new ks,i=new ks,r=new ks,s=new ks,o=new ks){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Br,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],c=s[4],d=s[5],f=s[6],h=s[7],m=s[8],_=s[9],g=s[10],p=s[11],v=s[12],S=s[13],x=s[14],E=s[15];if(r[0].setComponents(u-o,h-c,p-m,E-v).normalize(),r[1].setComponents(u+o,h+c,p+m,E+v).normalize(),r[2].setComponents(u+a,h+d,p+_,E+S).normalize(),r[3].setComponents(u-a,h-d,p-_,E-S).normalize(),i)r[4].setComponents(l,f,g,x).normalize(),r[5].setComponents(u-l,h-f,p-g,E-x).normalize();else if(r[4].setComponents(u-l,h-f,p-g,E-x).normalize(),t===Br)r[5].setComponents(u+l,h+f,p+g,E+x).normalize();else if(t===oc)r[5].setComponents(l,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Eo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Eo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Eo)}intersectsSprite(e){Eo.center.set(0,0,0);const t=TC.distanceTo(e.center);return Eo.radius=.7071067811865476+t,Eo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Eo)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(mf.x=r.normal.x>0?e.max.x:e.min.x,mf.y=r.normal.y>0?e.max.y:e.min.y,mf.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mf)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class NM extends ci{constructor(e=[],t=ea,i,r,s,o,a,l,u,c){super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ac extends ci{constructor(e,t,i=Yr,r,s,o,a=bn,l=bn,u,c=Ms,d=1){if(c!==Ms&&c!==Oo)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new o_(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class wC extends ac{constructor(e,t=Yr,i=ea,r,s,o=bn,a=bn,l,u=Ms){const c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,t,i,r,s,o,a,l,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class DM extends ci{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class bc extends fr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,h=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Nn(u,3)),this.setAttribute("normal",new Nn(c,3)),this.setAttribute("uv",new Nn(d,2));function m(_,g,p,v,S,x,E,T,w,y,A){const b=x/w,L=E/y,N=x/2,W=E/2,I=T/2,H=w+1,j=y+1;let B=0,V=0;const z=new X;for(let R=0;R<j;R++){const K=R*L-W;for(let pe=0;pe<H;pe++){const we=pe*b-N;z[_]=we*v,z[g]=K*S,z[p]=I,u.push(z.x,z.y,z.z),z[_]=0,z[g]=0,z[p]=T>0?1:-1,c.push(z.x,z.y,z.z),d.push(pe/w),d.push(1-R/y),B+=1}}for(let R=0;R<y;R++)for(let K=0;K<w;K++){const pe=f+K+H*R,we=f+K+H*(R+1),ze=f+(K+1)+H*(R+1),We=f+(K+1)+H*R;l.push(pe,we,We),l.push(we,ze,We),V+=6}a.addGroup(h,V,A),h+=V,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Kr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){et("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],f=i[r+1]-c,h=(o-c)/f;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Ce:new X);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new X,r=[],s=[],o=[],a=new X,l=new $t;for(let h=0;h<=e;h++){const m=h/e;r[h]=this.getTangentAt(m,new X)}s[0]=new X,o[0]=new X;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),d<=u&&(u=d,i.set(0,1,0)),f<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(ct(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,m))}o[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(ct(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],h*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class u_ extends Kr{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ce){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,h=u-this.aY;l=f*c-h*d+this.aX,u=f*d+h*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class AC extends u_{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function c_(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,d){let f=(o-s)/u-(a-s)/(u+c)+(a-o)/c,h=(a-o)/c-(l-o)/(c+d)+(l-a)/d;f*=c,h*=c,r(o,a,f,h)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const wx=new X,Ax=new X,Sp=new c_,Mp=new c_,Ep=new c_;class CC extends Kr{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new X){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(Ax.subVectors(r[0],r[1]).add(r[0]),u=Ax);const d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(wx.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=wx),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let m=Math.pow(u.distanceToSquared(d),h),_=Math.pow(d.distanceToSquared(f),h),g=Math.pow(f.distanceToSquared(c),h);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Sp.initNonuniformCatmullRom(u.x,d.x,f.x,c.x,m,_,g),Mp.initNonuniformCatmullRom(u.y,d.y,f.y,c.y,m,_,g),Ep.initNonuniformCatmullRom(u.z,d.z,f.z,c.z,m,_,g)}else this.curveType==="catmullrom"&&(Sp.initCatmullRom(u.x,d.x,f.x,c.x,this.tension),Mp.initCatmullRom(u.y,d.y,f.y,c.y,this.tension),Ep.initCatmullRom(u.z,d.z,f.z,c.z,this.tension));return i.set(Sp.calc(l),Mp.calc(l),Ep.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new X().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Cx(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function bC(n,e){const t=1-n;return t*t*e}function RC(n,e){return 2*(1-n)*n*e}function PC(n,e){return n*n*e}function Au(n,e,t,i){return bC(n,e)+RC(n,t)+PC(n,i)}function LC(n,e){const t=1-n;return t*t*t*e}function NC(n,e){const t=1-n;return 3*t*t*n*e}function DC(n,e){return 3*(1-n)*n*n*e}function IC(n,e){return n*n*n*e}function Cu(n,e,t,i,r){return LC(n,e)+NC(n,t)+DC(n,i)+IC(n,r)}class IM extends Kr{constructor(e=new Ce,t=new Ce,i=new Ce,r=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ce){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Cu(e,r.x,s.x,o.x,a.x),Cu(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class UC extends Kr{constructor(e=new X,t=new X,i=new X,r=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new X){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Cu(e,r.x,s.x,o.x,a.x),Cu(e,r.y,s.y,o.y,a.y),Cu(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class UM extends Kr{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class OC extends Kr{constructor(e=new X,t=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new X){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class OM extends Kr{constructor(e=new Ce,t=new Ce,i=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ce){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Au(e,r.x,s.x,o.x),Au(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class FC extends Kr{constructor(e=new X,t=new X,i=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new X){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Au(e,r.x,s.x,o.x),Au(e,r.y,s.y,o.y),Au(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class FM extends Kr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(Cx(a,l.x,u.x,c.x,d.x),Cx(a,l.y,u.y,c.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Ce().fromArray(r))}return this}}var Ag=Object.freeze({__proto__:null,ArcCurve:AC,CatmullRomCurve3:CC,CubicBezierCurve:IM,CubicBezierCurve3:UC,EllipseCurve:u_,LineCurve:UM,LineCurve3:OC,QuadraticBezierCurve:OM,QuadraticBezierCurve3:FC,SplineCurve:FM});class kC extends Kr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ag[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Ag[r.type]().fromJSON(r))}return this}}class bx extends kC{constructor(e){super(),this.type="Path",this.currentPoint=new Ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new UM(this.currentPoint.clone(),new Ce(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new OM(this.currentPoint.clone(),new Ce(e,t),new Ce(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new IM(this.currentPoint.clone(),new Ce(e,t),new Ce(i,r),new Ce(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new FM(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,t+c,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const u=new u_(e,t,i,r,s,o,a,l);if(this.curves.length>0){const d=u.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class kM extends bx{constructor(e){super(e),this.uuid=Dl(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new bx().fromJSON(r))}return this}}function BC(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=BM(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u;if(i&&(s=WC(n,e,s,t)),n.length>80*t){a=n[0],l=n[1];let c=a,d=l;for(let f=t;f<r;f+=t){const h=n[f],m=n[f+1];h<a&&(a=h),m<l&&(l=m),h>c&&(c=h),m>d&&(d=m)}u=Math.max(c-a,d-l),u=u!==0?32767/u:0}return lc(s,o,t,a,l,u,0),o}function BM(n,e,t,i,r){let s;if(r===tb(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=Rx(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=Rx(o/i|0,n[o],n[o+1],s);return s&&Ml(s,s.next)&&(cc(s),s=s.next),s}function na(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ml(t,t.next)||Xt(t.prev,t,t.next)===0)){if(cc(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function lc(n,e,t,i,r,s,o){if(!n)return;!o&&s&&jC(n,i,r,s);let a=n;for(;n.prev!==n.next;){const l=n.prev,u=n.next;if(s?VC(n,i,r,s):zC(n)){e.push(l.i,n.i,u.i),cc(n),n=u.next,a=u.next;continue}if(n=u,n===a){o?o===1?(n=HC(na(n),e),lc(n,e,t,i,r,s,2)):o===2&&GC(n,e,t,i,r,s):lc(na(n),e,t,i,r,s,1);break}}}function zC(n){const e=n.prev,t=n,i=n.next;if(Xt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,u=i.y,c=Math.min(r,s,o),d=Math.min(a,l,u),f=Math.max(r,s,o),h=Math.max(a,l,u);let m=i.next;for(;m!==e;){if(m.x>=c&&m.x<=f&&m.y>=d&&m.y<=h&&au(r,a,s,l,o,u,m.x,m.y)&&Xt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function VC(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Xt(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,d=s.y,f=o.y,h=Math.min(a,l,u),m=Math.min(c,d,f),_=Math.max(a,l,u),g=Math.max(c,d,f),p=Cg(h,m,e,t,i),v=Cg(_,g,e,t,i);let S=n.prevZ,x=n.nextZ;for(;S&&S.z>=p&&x&&x.z<=v;){if(S.x>=h&&S.x<=_&&S.y>=m&&S.y<=g&&S!==r&&S!==o&&au(a,c,l,d,u,f,S.x,S.y)&&Xt(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=h&&x.x<=_&&x.y>=m&&x.y<=g&&x!==r&&x!==o&&au(a,c,l,d,u,f,x.x,x.y)&&Xt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=p;){if(S.x>=h&&S.x<=_&&S.y>=m&&S.y<=g&&S!==r&&S!==o&&au(a,c,l,d,u,f,S.x,S.y)&&Xt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=v;){if(x.x>=h&&x.x<=_&&x.y>=m&&x.y<=g&&x!==r&&x!==o&&au(a,c,l,d,u,f,x.x,x.y)&&Xt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function HC(n,e){let t=n;do{const i=t.prev,r=t.next.next;!Ml(i,r)&&VM(i,t,t.next,r)&&uc(i,r)&&uc(r,i)&&(e.push(i.i,t.i,r.i),cc(t),cc(t.next),t=n=r),t=t.next}while(t!==n);return na(t)}function GC(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&JC(o,a)){let l=HM(o,a);o=na(o,o.next),l=na(l,l.next),lc(o,e,t,i,r,s,0),lc(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function WC(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,u=BM(n,a,l,i,!1);u===u.next&&(u.steiner=!0),r.push(ZC(u))}r.sort(XC);for(let s=0;s<r.length;s++)t=YC(r[s],t);return t}function XC(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function YC(n,e){const t=qC(n,e);if(!t)return e;const i=HM(t,n);return na(i,i.next),na(t,t.next)}function qC(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(Ml(n,t))return t;do{if(Ml(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s&&(s=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,u=o.y;let c=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&zM(r<u?i:s,r,l,u,r<u?s:i,r,t.x,t.y)){const d=Math.abs(r-t.y)/(i-t.x);uc(t,n)&&(d<c||d===c&&(t.x>o.x||t.x===o.x&&$C(o,t)))&&(o=t,c=d)}t=t.next}while(t!==a);return o}function $C(n,e){return Xt(n.prev,n,e.prev)<0&&Xt(e.next,n,n.next)<0}function jC(n,e,t,i){let r=n;do r.z===0&&(r.z=Cg(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,KC(r)}function KC(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let u=0;u<t&&(a++,o=o.nextZ,!!o);u++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function Cg(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function ZC(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function zM(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function au(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&zM(n,e,t,i,r,s,o,a)}function JC(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!QC(n,e)&&(uc(n,e)&&uc(e,n)&&eb(n,e)&&(Xt(n.prev,n,e.prev)||Xt(n,e.prev,e))||Ml(n,e)&&Xt(n.prev,n,n.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ml(n,e){return n.x===e.x&&n.y===e.y}function VM(n,e,t,i){const r=_f(Xt(n,e,t)),s=_f(Xt(n,e,i)),o=_f(Xt(t,i,n)),a=_f(Xt(t,i,e));return!!(r!==s&&o!==a||r===0&&gf(n,t,e)||s===0&&gf(n,i,e)||o===0&&gf(t,n,i)||a===0&&gf(t,e,i))}function gf(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function _f(n){return n>0?1:n<0?-1:0}function QC(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&VM(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function uc(n,e){return Xt(n.prev,n,n.next)<0?Xt(n,e,n.next)>=0&&Xt(n,n.prev,e)>=0:Xt(n,e,n.prev)<0||Xt(n,n.next,e)<0}function eb(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function HM(n,e){const t=bg(n.i,n.x,n.y),i=bg(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Rx(n,e,t,i){const r=bg(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function cc(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function bg(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function tb(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class nb{static triangulate(e,t,i=2){return BC(e,t,i)}}class $a{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return $a.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Px(e),Lx(i,e);let o=e.length;t.forEach(Px);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Lx(i,t[l]);const a=nb.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Px(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Lx(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class f_ extends fr{constructor(e=new kM([new Ce(.5,.5),new Ce(-.5,.5),new Ce(-.5,-.5),new Ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];o(u)}this.setAttribute("position",new Nn(r,3)),this.setAttribute("uv",new Nn(s,2)),this.computeVertexNormals();function o(a){const l=[],u=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:h-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:ib;let S,x=!1,E,T,w,y;if(p){S=p.getSpacedPoints(c),x=!0,f=!1;const ee=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(c,ee),T=new X,w=new X,y=new X}f||(g=0,h=0,m=0,_=0);const A=a.extractPoints(u);let b=A.shape;const L=A.holes;if(!$a.isClockWise(b)){b=b.reverse();for(let ee=0,se=L.length;ee<se;ee++){const le=L[ee];$a.isClockWise(le)&&(L[ee]=le.reverse())}}function W(ee){const le=10000000000000001e-36;let D=ee[0];for(let he=1;he<=ee.length;he++){const Ge=he%ee.length,ke=ee[Ge],Pe=ke.x-D.x,Je=ke.y-D.y,O=Pe*Pe+Je*Je,ot=Math.max(Math.abs(ke.x),Math.abs(ke.y),Math.abs(D.x),Math.abs(D.y)),Ke=le*ot*ot;if(O<=Ke){ee.splice(Ge,1),he--;continue}D=ke}}W(b),L.forEach(W);const I=L.length,H=b;for(let ee=0;ee<I;ee++){const se=L[ee];b=b.concat(se)}function j(ee,se,le){return se||xt("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(se,le)}const B=b.length;function V(ee,se,le){let D,he,Ge;const ke=ee.x-se.x,Pe=ee.y-se.y,Je=le.x-ee.x,O=le.y-ee.y,ot=ke*ke+Pe*Pe,Ke=ke*O-Pe*Je;if(Math.abs(Ke)>Number.EPSILON){const P=Math.sqrt(ot),M=Math.sqrt(Je*Je+O*O),G=se.x-Pe/P,Y=se.y+ke/P,Q=le.x-O/M,me=le.y+Je/M,ce=((Q-G)*O-(me-Y)*Je)/(ke*O-Pe*Je);D=G+ke*ce-ee.x,he=Y+Pe*ce-ee.y;const te=D*D+he*he;if(te<=2)return new Ce(D,he);Ge=Math.sqrt(te/2)}else{let P=!1;ke>Number.EPSILON?Je>Number.EPSILON&&(P=!0):ke<-Number.EPSILON?Je<-Number.EPSILON&&(P=!0):Math.sign(Pe)===Math.sign(O)&&(P=!0),P?(D=-Pe,he=ke,Ge=Math.sqrt(ot)):(D=ke,he=Pe,Ge=Math.sqrt(ot/2))}return new Ce(D/Ge,he/Ge)}const z=[];for(let ee=0,se=H.length,le=se-1,D=ee+1;ee<se;ee++,le++,D++)le===se&&(le=0),D===se&&(D=0),z[ee]=V(H[ee],H[le],H[D]);const R=[];let K,pe=z.concat();for(let ee=0,se=I;ee<se;ee++){const le=L[ee];K=[];for(let D=0,he=le.length,Ge=he-1,ke=D+1;D<he;D++,Ge++,ke++)Ge===he&&(Ge=0),ke===he&&(ke=0),K[D]=V(le[D],le[Ge],le[ke]);R.push(K),pe=pe.concat(K)}let we;if(g===0)we=$a.triangulateShape(H,L);else{const ee=[],se=[];for(let le=0;le<g;le++){const D=le/g,he=h*Math.cos(D*Math.PI/2),Ge=m*Math.sin(D*Math.PI/2)+_;for(let ke=0,Pe=H.length;ke<Pe;ke++){const Je=j(H[ke],z[ke],Ge);_e(Je.x,Je.y,-he),D===0&&ee.push(Je)}for(let ke=0,Pe=I;ke<Pe;ke++){const Je=L[ke];K=R[ke];const O=[];for(let ot=0,Ke=Je.length;ot<Ke;ot++){const P=j(Je[ot],K[ot],Ge);_e(P.x,P.y,-he),D===0&&O.push(P)}D===0&&se.push(O)}}we=$a.triangulateShape(ee,se)}const ze=we.length,We=m+_;for(let ee=0;ee<B;ee++){const se=f?j(b[ee],pe[ee],We):b[ee];x?(w.copy(E.normals[0]).multiplyScalar(se.x),T.copy(E.binormals[0]).multiplyScalar(se.y),y.copy(S[0]).add(w).add(T),_e(y.x,y.y,y.z)):_e(se.x,se.y,0)}for(let ee=1;ee<=c;ee++)for(let se=0;se<B;se++){const le=f?j(b[se],pe[se],We):b[se];x?(w.copy(E.normals[ee]).multiplyScalar(le.x),T.copy(E.binormals[ee]).multiplyScalar(le.y),y.copy(S[ee]).add(w).add(T),_e(y.x,y.y,y.z)):_e(le.x,le.y,d/c*ee)}for(let ee=g-1;ee>=0;ee--){const se=ee/g,le=h*Math.cos(se*Math.PI/2),D=m*Math.sin(se*Math.PI/2)+_;for(let he=0,Ge=H.length;he<Ge;he++){const ke=j(H[he],z[he],D);_e(ke.x,ke.y,d+le)}for(let he=0,Ge=L.length;he<Ge;he++){const ke=L[he];K=R[he];for(let Pe=0,Je=ke.length;Pe<Je;Pe++){const O=j(ke[Pe],K[Pe],D);x?_e(O.x,O.y+S[c-1].y,S[c-1].x+le):_e(O.x,O.y,d+le)}}}qe(),J();function qe(){const ee=r.length/3;if(f){let se=0,le=B*se;for(let D=0;D<ze;D++){const he=we[D];$e(he[2]+le,he[1]+le,he[0]+le)}se=c+g*2,le=B*se;for(let D=0;D<ze;D++){const he=we[D];$e(he[0]+le,he[1]+le,he[2]+le)}}else{for(let se=0;se<ze;se++){const le=we[se];$e(le[2],le[1],le[0])}for(let se=0;se<ze;se++){const le=we[se];$e(le[0]+B*c,le[1]+B*c,le[2]+B*c)}}i.addGroup(ee,r.length/3-ee,0)}function J(){const ee=r.length/3;let se=0;ne(H,se),se+=H.length;for(let le=0,D=L.length;le<D;le++){const he=L[le];ne(he,se),se+=he.length}i.addGroup(ee,r.length/3-ee,1)}function ne(ee,se){let le=ee.length;for(;--le>=0;){const D=le;let he=le-1;he<0&&(he=ee.length-1);for(let Ge=0,ke=c+g*2;Ge<ke;Ge++){const Pe=B*Ge,Je=B*(Ge+1),O=se+D+Pe,ot=se+he+Pe,Ke=se+he+Je,P=se+D+Je;ye(O,ot,Ke,P)}}}function _e(ee,se,le){l.push(ee),l.push(se),l.push(le)}function $e(ee,se,le){Ue(ee),Ue(se),Ue(le);const D=r.length/3,he=v.generateTopUV(i,r,D-3,D-2,D-1);Fe(he[0]),Fe(he[1]),Fe(he[2])}function ye(ee,se,le,D){Ue(ee),Ue(se),Ue(D),Ue(se),Ue(le),Ue(D);const he=r.length/3,Ge=v.generateSideWallUV(i,r,he-6,he-3,he-2,he-1);Fe(Ge[0]),Fe(Ge[1]),Fe(Ge[3]),Fe(Ge[1]),Fe(Ge[2]),Fe(Ge[3])}function Ue(ee){r.push(l[ee*3+0]),r.push(l[ee*3+1]),r.push(l[ee*3+2])}function Fe(ee){s.push(ee.x),s.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return rb(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ag[r.type]().fromJSON(r)),new f_(i,e.options)}}const ib={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],u=e[r*3],c=e[r*3+1];return[new Ce(s,o),new Ce(a,l),new Ce(u,c)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],u=e[i*3],c=e[i*3+1],d=e[i*3+2],f=e[r*3],h=e[r*3+1],m=e[r*3+2],_=e[s*3],g=e[s*3+1],p=e[s*3+2];return Math.abs(a-c)<Math.abs(o-u)?[new Ce(o,1-l),new Ce(u,1-d),new Ce(f,1-m),new Ce(_,1-p)]:[new Ce(a,1-l),new Ce(c,1-d),new Ce(h,1-m),new Ce(g,1-p)]}};function rb(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class mh extends fr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,h=[],m=[],_=[],g=[];for(let p=0;p<c;p++){const v=p*f-o;for(let S=0;S<u;S++){const x=S*d-s;m.push(x,-v,0),_.push(0,0,1),g.push(S/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const S=v+u*p,x=v+u*(p+1),E=v+1+u*(p+1),T=v+1+u*p;h.push(S,x,T),h.push(x,E,T)}this.setIndex(h),this.setAttribute("position",new Nn(m,3)),this.setAttribute("normal",new Nn(_,3)),this.setAttribute("uv",new Nn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mh(e.width,e.height,e.widthSegments,e.heightSegments)}}class d_ extends fr{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new X,f=new X,h=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){const v=[],S=p/i,x=o+S*a,E=e*Math.cos(x),T=Math.sqrt(e*e-E*E);let w=0;p===0&&o===0?w=.5/t:p===i&&l===Math.PI&&(w=-.5/t);for(let y=0;y<=t;y++){const A=y/t,b=r+A*s;d.x=-T*Math.cos(b),d.y=E,d.z=T*Math.sin(b),m.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),g.push(A+w,1-S),v.push(u++)}c.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){const S=c[p][v+1],x=c[p][v],E=c[p+1][v],T=c[p+1][v+1];(p!==0||o>0)&&h.push(S,x,T),(p!==i-1||l<Math.PI)&&h.push(x,E,T)}this.setIndex(h),this.setAttribute("position",new Nn(m,3)),this.setAttribute("normal",new Nn(_,3)),this.setAttribute("uv",new Nn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new d_(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bd extends fr{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),r=Math.floor(r);const l=[],u=[],c=[],d=[],f=new X,h=new X,m=new X;for(let _=0;_<=i;_++){const g=o+_/i*a;for(let p=0;p<=r;p++){const v=p/r*s;h.x=(e+t*Math.cos(g))*Math.cos(v),h.y=(e+t*Math.cos(g))*Math.sin(v),h.z=t*Math.sin(g),u.push(h.x,h.y,h.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),m.subVectors(h,f).normalize(),c.push(m.x,m.y,m.z),d.push(p/r),d.push(_/i)}}for(let _=1;_<=i;_++)for(let g=1;g<=r;g++){const p=(r+1)*_+g-1,v=(r+1)*(_-1)+g-1,S=(r+1)*(_-1)+g,x=(r+1)*_+g;l.push(p,v,x),l.push(v,S,x)}this.setIndex(l),this.setAttribute("position",new Nn(u,3)),this.setAttribute("normal",new Nn(c,3)),this.setAttribute("uv",new Nn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function El(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Nx(r))r.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Nx(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function ti(n){const e={};for(let t=0;t<n.length;t++){const i=El(n[t]);for(const r in i)e[r]=i[r]}return e}function Nx(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function sb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function GM(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const ob={clone:El,merge:ti};var ab=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $r extends Cc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ab,this.fragmentShader=lb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=El(e.uniforms),this.uniformsGroups=sb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new dt().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ce().fromArray(r.value);break;case"v3":this.uniforms[i].value=new X().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Wt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new nt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new $t().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ub extends $r{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Rg extends Cc{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tg,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new uo,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cb extends Rg{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class fb extends Cc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class db extends Cc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class h_ extends Ln{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class hb extends h_{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Tp=new $t,Dx=new X,Ix=new X;class WM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=Fi,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new l_,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Dx.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dx),Ix.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ix),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Tp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Tp,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===oc||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+u,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+u,0,0,.5,.5,0,0,0,1),t.multiply(Tp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vf=new X,xf=new Il,Pr=new X;class XM extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Br,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vf,xf,Pr),Pr.x===1&&Pr.y===1&&Pr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vf,xf,Pr.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(vf,xf,Pr),Pr.x===1&&Pr.y===1&&Pr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vf,xf,Pr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Is=new X,Ux=new Ce,Ox=new Ce;class Ui extends XM{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wg*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wg*2*Math.atan(Math.tan(Qh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Is.x,Is.y).multiplyScalar(-e/Is.z),Is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Is.x,Is.y).multiplyScalar(-e/Is.z)}getViewSize(e,t){return this.getViewBounds(e,Ux,Ox),t.subVectors(Ox,Ux)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class pb extends WM{constructor(){super(new Ui(90,1,.5,500)),this.isPointLightShadow=!0}}class mb extends h_{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new pb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class p_ extends XM{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class gb extends WM{constructor(){super(new p_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _b extends h_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new gb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const wa=-90,Aa=1;class vb extends Ln{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ui(wa,Aa,e,t);r.layers=this.layers,this.add(r);const s=new Ui(wa,Aa,e,t);s.layers=this.layers,this.add(s);const o=new Ui(wa,Aa,e,t);o.layers=this.layers,this.add(o);const a=new Ui(wa,Aa,e,t);a.layers=this.layers,this.add(a);const l=new Ui(wa,Aa,e,t);l.layers=this.layers,this.add(l);const u=new Ui(wa,Aa,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Br)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===oc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(d,f,h),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class xb extends Ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const X_=class X_{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};X_.prototype.isMatrix2=!0;let Fx=X_;function kx(n,e,t,i){const r=yb(i);switch(t){case MM:return n*e;case TM:return n*e/r.components*r.byteLength;case t_:return n*e/r.components*r.byteLength;case ta:return n*e*2/r.components*r.byteLength;case n_:return n*e*2/r.components*r.byteLength;case EM:return n*e*3/r.components*r.byteLength;case Mr:return n*e*4/r.components*r.byteLength;case i_:return n*e*4/r.components*r.byteLength;case $f:case jf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Kf:case Zf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jm:case Zm:return Math.max(n,16)*Math.max(e,8)/4;case $m:case Km:return Math.max(n,8)*Math.max(e,8)/2;case Jm:case Qm:case tg:case ng:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case eg:case Id:case ig:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rg:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sg:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case og:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ag:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case lg:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ug:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case cg:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case fg:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case dg:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case hg:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case pg:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case mg:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case gg:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case _g:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case vg:case xg:case yg:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Sg:case Mg:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ud:case Eg:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yb(n){switch(n){case Fi:case vM:return{byteLength:1,components:1};case rc:case xM:case qr:return{byteLength:2,components:1};case Q0:case e_:return{byteLength:2,components:4};case Yr:case J0:case kr:return{byteLength:4,components:1};case yM:case SM:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Z0}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Z0);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function YM(){let n=null,e=!1,t=null,i=null;function r(s,o){i=n.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Sb(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,d=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),a.onUploadCallback();let h;if(u instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=n.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=n.SHORT;else if(u instanceof Uint32Array)h=n.UNSIGNED_INT;else if(u instanceof Int32Array)h=n.INT;else if(u instanceof Int8Array)h=n.BYTE;else if(u instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l.updateRanges;if(n.bindBuffer(u,a),d.length===0)n.bufferSubData(u,0,c);else{d.sort((h,m)=>h.start-m.start);let f=0;for(let h=1;h<d.length;h++){const m=d[f],_=d[h];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,m=d.length;h<m;h++){const _=d[h];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var Mb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ab=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Lb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Db=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ib=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ub=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ob=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Xb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,$b=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,tR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,pR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,mR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_R=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yR=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,SR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,MR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ER=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TR=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,wR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,NR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,BR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,VR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,XR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,YR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$R=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,JR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,s3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,o3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,a3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,l3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,c3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,d3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,g3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,v3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,S3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const M3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,R3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,P3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,L3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,N3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,F3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,V3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,G3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,W3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,q3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Z3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:Mb,alphahash_pars_fragment:Eb,alphamap_fragment:Tb,alphamap_pars_fragment:wb,alphatest_fragment:Ab,alphatest_pars_fragment:Cb,aomap_fragment:bb,aomap_pars_fragment:Rb,batching_pars_vertex:Pb,batching_vertex:Lb,begin_vertex:Nb,beginnormal_vertex:Db,bsdfs:Ib,iridescence_fragment:Ub,bumpmap_pars_fragment:Ob,clipping_planes_fragment:Fb,clipping_planes_pars_fragment:kb,clipping_planes_pars_vertex:Bb,clipping_planes_vertex:zb,color_fragment:Vb,color_pars_fragment:Hb,color_pars_vertex:Gb,color_vertex:Wb,common:Xb,cube_uv_reflection_fragment:Yb,defaultnormal_vertex:qb,displacementmap_pars_vertex:$b,displacementmap_vertex:jb,emissivemap_fragment:Kb,emissivemap_pars_fragment:Zb,colorspace_fragment:Jb,colorspace_pars_fragment:Qb,envmap_fragment:eR,envmap_common_pars_fragment:tR,envmap_pars_fragment:nR,envmap_pars_vertex:iR,envmap_physical_pars_fragment:pR,envmap_vertex:rR,fog_vertex:sR,fog_pars_vertex:oR,fog_fragment:aR,fog_pars_fragment:lR,gradientmap_pars_fragment:uR,lightmap_pars_fragment:cR,lights_lambert_fragment:fR,lights_lambert_pars_fragment:dR,lights_pars_begin:hR,lights_toon_fragment:mR,lights_toon_pars_fragment:gR,lights_phong_fragment:_R,lights_phong_pars_fragment:vR,lights_physical_fragment:xR,lights_physical_pars_fragment:yR,lights_fragment_begin:SR,lights_fragment_maps:MR,lights_fragment_end:ER,lightprobes_pars_fragment:TR,logdepthbuf_fragment:wR,logdepthbuf_pars_fragment:AR,logdepthbuf_pars_vertex:CR,logdepthbuf_vertex:bR,map_fragment:RR,map_pars_fragment:PR,map_particle_fragment:LR,map_particle_pars_fragment:NR,metalnessmap_fragment:DR,metalnessmap_pars_fragment:IR,morphinstance_vertex:UR,morphcolor_vertex:OR,morphnormal_vertex:FR,morphtarget_pars_vertex:kR,morphtarget_vertex:BR,normal_fragment_begin:zR,normal_fragment_maps:VR,normal_pars_fragment:HR,normal_pars_vertex:GR,normal_vertex:WR,normalmap_pars_fragment:XR,clearcoat_normal_fragment_begin:YR,clearcoat_normal_fragment_maps:qR,clearcoat_pars_fragment:$R,iridescence_pars_fragment:jR,opaque_fragment:KR,packing:ZR,premultiplied_alpha_fragment:JR,project_vertex:QR,dithering_fragment:e3,dithering_pars_fragment:t3,roughnessmap_fragment:n3,roughnessmap_pars_fragment:i3,shadowmap_pars_fragment:r3,shadowmap_pars_vertex:s3,shadowmap_vertex:o3,shadowmask_pars_fragment:a3,skinbase_vertex:l3,skinning_pars_vertex:u3,skinning_vertex:c3,skinnormal_vertex:f3,specularmap_fragment:d3,specularmap_pars_fragment:h3,tonemapping_fragment:p3,tonemapping_pars_fragment:m3,transmission_fragment:g3,transmission_pars_fragment:_3,uv_pars_fragment:v3,uv_pars_vertex:x3,uv_vertex:y3,worldpos_vertex:S3,background_vert:M3,background_frag:E3,backgroundCube_vert:T3,backgroundCube_frag:w3,cube_vert:A3,cube_frag:C3,depth_vert:b3,depth_frag:R3,distance_vert:P3,distance_frag:L3,equirect_vert:N3,equirect_frag:D3,linedashed_vert:I3,linedashed_frag:U3,meshbasic_vert:O3,meshbasic_frag:F3,meshlambert_vert:k3,meshlambert_frag:B3,meshmatcap_vert:z3,meshmatcap_frag:V3,meshnormal_vert:H3,meshnormal_frag:G3,meshphong_vert:W3,meshphong_frag:X3,meshphysical_vert:Y3,meshphysical_frag:q3,meshtoon_vert:$3,meshtoon_frag:j3,points_vert:K3,points_frag:Z3,shadow_vert:J3,shadow_frag:Q3,sprite_vert:eP,sprite_frag:tP},be={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Ur={basic:{uniforms:ti([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:ti([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new dt(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:ti([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:ti([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:ti([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new dt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:ti([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:ti([be.points,be.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:ti([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:ti([be.common,be.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:ti([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:ti([be.sprite,be.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:ti([be.common,be.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:ti([be.lights,be.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Ur.physical={uniforms:ti([Ur.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const yf={r:0,b:0,g:0},nP=new $t,qM=new nt;qM.set(-1,0,0,0,1,0,0,0,1);function iP(n,e,t,i,r,s){const o=new dt(0);let a=r===!0?0:1,l,u,c=null,d=0,f=null;function h(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const x=v.backgroundBlurriness>0;S=e.get(S,x)}return S}function m(v){let S=!1;const x=h(v);x===null?g(o,a):x&&x.isColor&&(g(x,1),S=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,S){const x=h(S);x&&(x.isCubeTexture||x.mapping===ph)?(u===void 0&&(u=new gi(new bc(1,1,1),new $r({name:"BackgroundCubeMaterial",uniforms:El(Ur.backgroundCube.uniforms),vertexShader:Ur.backgroundCube.vertexShader,fragmentShader:Ur.backgroundCube.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nP.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(qM),u.material.toneMapped=gt.getTransfer(x.colorSpace)!==Tt,(c!==x||d!==x.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,c=x,d=x.version,f=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new gi(new mh(2,2),new $r({name:"BackgroundMaterial",uniforms:El(Ur.background.uniforms),vertexShader:Ur.background.vertexShader,fragmentShader:Ur.background.fragmentShader,side:Qo,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=gt.getTransfer(x.colorSpace)!==Tt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(c!==x||d!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,c=x,d=x.version,f=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,S){v.getRGB(yf,GM(n)),t.buffers.color.setClear(yf.r,yf.g,yf.b,S,s)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,S=1){o.set(v),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:m,addToRenderList:_,dispose:p}}function rP(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(L,N,W,I,H){let j=!1;const B=d(L,I,W,N);s!==B&&(s=B,u(s.object)),j=h(L,I,W,H),j&&m(L,I,W,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(L,N,W,I),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function u(L){return n.bindVertexArray(L)}function c(L){return n.deleteVertexArray(L)}function d(L,N,W,I){const H=I.wireframe===!0;let j=i[N.id];j===void 0&&(j={},i[N.id]=j);const B=L.isInstancedMesh===!0?L.id:0;let V=j[B];V===void 0&&(V={},j[B]=V);let z=V[W.id];z===void 0&&(z={},V[W.id]=z);let R=z[H];return R===void 0&&(R=f(l()),z[H]=R),R}function f(L){const N=[],W=[],I=[];for(let H=0;H<t;H++)N[H]=0,W[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:I,object:L,attributes:{},index:null}}function h(L,N,W,I){const H=s.attributes,j=N.attributes;let B=0;const V=W.getAttributes();for(const z in V)if(V[z].location>=0){const K=H[z];let pe=j[z];if(pe===void 0&&(z==="instanceMatrix"&&L.instanceMatrix&&(pe=L.instanceMatrix),z==="instanceColor"&&L.instanceColor&&(pe=L.instanceColor)),K===void 0||K.attribute!==pe||pe&&K.data!==pe.data)return!0;B++}return s.attributesNum!==B||s.index!==I}function m(L,N,W,I){const H={},j=N.attributes;let B=0;const V=W.getAttributes();for(const z in V)if(V[z].location>=0){let K=j[z];K===void 0&&(z==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),z==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const pe={};pe.attribute=K,K&&K.data&&(pe.data=K.data),H[z]=pe,B++}s.attributes=H,s.attributesNum=B,s.index=I}function _(){const L=s.newAttributes;for(let N=0,W=L.length;N<W;N++)L[N]=0}function g(L){p(L,0)}function p(L,N){const W=s.newAttributes,I=s.enabledAttributes,H=s.attributeDivisors;W[L]=1,I[L]===0&&(n.enableVertexAttribArray(L),I[L]=1),H[L]!==N&&(n.vertexAttribDivisor(L,N),H[L]=N)}function v(){const L=s.newAttributes,N=s.enabledAttributes;for(let W=0,I=N.length;W<I;W++)N[W]!==L[W]&&(n.disableVertexAttribArray(W),N[W]=0)}function S(L,N,W,I,H,j,B){B===!0?n.vertexAttribIPointer(L,N,W,H,j):n.vertexAttribPointer(L,N,W,I,H,j)}function x(L,N,W,I){_();const H=I.attributes,j=W.getAttributes(),B=N.defaultAttributeValues;for(const V in j){const z=j[V];if(z.location>=0){let R=H[V];if(R===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(R=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(R=L.instanceColor)),R!==void 0){const K=R.normalized,pe=R.itemSize,we=e.get(R);if(we===void 0)continue;const ze=we.buffer,We=we.type,qe=we.bytesPerElement,J=We===n.INT||We===n.UNSIGNED_INT||R.gpuType===J0;if(R.isInterleavedBufferAttribute){const ne=R.data,_e=ne.stride,$e=R.offset;if(ne.isInstancedInterleavedBuffer){for(let ye=0;ye<z.locationSize;ye++)p(z.location+ye,ne.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ye=0;ye<z.locationSize;ye++)g(z.location+ye);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let ye=0;ye<z.locationSize;ye++)S(z.location+ye,pe/z.locationSize,We,K,_e*qe,($e+pe/z.locationSize*ye)*qe,J)}else{if(R.isInstancedBufferAttribute){for(let ne=0;ne<z.locationSize;ne++)p(z.location+ne,R.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let ne=0;ne<z.locationSize;ne++)g(z.location+ne);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let ne=0;ne<z.locationSize;ne++)S(z.location+ne,pe/z.locationSize,We,K,pe*qe,pe/z.locationSize*ne*qe,J)}}else if(B!==void 0){const K=B[V];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(z.location,K);break;case 3:n.vertexAttrib3fv(z.location,K);break;case 4:n.vertexAttrib4fv(z.location,K);break;default:n.vertexAttrib1fv(z.location,K)}}}}v()}function E(){A();for(const L in i){const N=i[L];for(const W in N){const I=N[W];for(const H in I){const j=I[H];for(const B in j)c(j[B].object),delete j[B];delete I[H]}}delete i[L]}}function T(L){if(i[L.id]===void 0)return;const N=i[L.id];for(const W in N){const I=N[W];for(const H in I){const j=I[H];for(const B in j)c(j[B].object),delete j[B];delete I[H]}}delete i[L.id]}function w(L){for(const N in i){const W=i[N];for(const I in W){const H=W[I];if(H[L.id]===void 0)continue;const j=H[L.id];for(const B in j)c(j[B].object),delete j[B];delete H[L.id]}}}function y(L){for(const N in i){const W=i[N],I=L.isInstancedMesh===!0?L.id:0,H=W[I];if(H!==void 0){for(const j in H){const B=H[j];for(const V in B)c(B[V].object),delete B[V];delete H[j]}delete W[I],Object.keys(W).length===0&&delete i[N]}}}function A(){b(),o=!0,s!==r&&(s=r,u(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function sP(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,c){c!==0&&(n.drawArraysInstanced(i,l,u,c),t.update(u,i,c))}function a(l,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,c);let f=0;for(let h=0;h<c;h++)f+=u[h];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function oP(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Mr&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const y=w===qr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Fi&&w!==kr&&!y&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(et("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:x,maxSamples:E,samples:T}}function aP(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ks,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,h){const m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!r||m===null||m.length===0||s&&!g)s?c(null):u();else{const v=s?0:i,S=v*4;let x=p.clippingState||null;l.value=x,x=c(m,f,S,h);for(let E=0;E!==S;++E)x[E]=t[E];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,h,m){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=h+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,x=h;S!==_;++S,x+=4)o.copy(d[S]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}const ja=4,lP=6,uP=20,cP=256,Zl=new p_,Bx=new dt;let wp=null,Ap=0,Cp=0,bp=!1;const fP=new X,To=new X;class zx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=fP}=s;wp=this._renderer.getRenderTarget(),Ap=this._renderer.getActiveCubeFace(),Cp=this._renderer.getActiveMipmapLevel(),bp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wp,Ap,Cp),this._renderer.xr.enabled=bp,e.scissorTest=!1,Ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ea||e.mapping===Sl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wp=this._renderer.getRenderTarget(),Ap=this._renderer.getActiveCubeFace(),Cp=this._renderer.getActiveMipmapLevel(),bp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:qr,format:Mr,colorSpace:Od,depthBuffer:!1},r=Vx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vx(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=dP(s)),this._blurMaterial=pP(s,e,t),this._ggxMaterial=hP(s,e,t)}return r}_compileMaterial(e){const t=new gi(new fr,e);this._renderer.compile(t,Zl)}_sceneToCubeUV(e,t,i,r,s){const l=new Ui(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Bx),d.toneMapping=Wr,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gi(new bc,new LM({name:"PMREM.Background",side:Mi,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let p=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,p=!0):(g.color.copy(Bx),p=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(l.up.set(0,u[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[S],s.y,s.z)):x===1?(l.up.set(0,0,u[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[S],s.z)):(l.up.set(0,u[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[S]));const E=this._cubeSize;Ca(r,x*E,S>2?E:0,E,E),d.setRenderTarget(r),p&&d.render(_,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ea||e.mapping===Sl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hx());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ca(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Zl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,u=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),d=Math.sqrt(u*u-c*c),f=u*1.25,h=d*f,{_lodMax:m}=this,_=this._sizeLods[i],g=3*_*(i>m-ja?i-m+ja:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=m-t,Ca(s,g,p,3*_,2*_),r.setRenderTarget(s),r.render(a,Zl),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Ca(e,g,p,3*_,2*_),r.setRenderTarget(e),r.render(a,Zl)}_blur(e,t,i,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,o),this._blurPass(s,e,i,i,o)}_blurPass(e,t,i,r,s){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;const u=a.uniforms;u.envMap.value=e.texture,u.sigma.value=s,u.mipInt.value=this._lodMax-i;const c=this._sizeLods[r],d=3*c*(r>this._lodMax-ja?r-this._lodMax+ja:0),f=4*(this._cubeSize-c);Ca(t,d,f,3*c,2*c),o.setRenderTarget(t),o.render(l,Zl)}}function dP(n){const e=[],t=[];let i=n;const r=n-ja+1+lP;for(let s=0;s<r;s++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),l=-a,u=1+a,c=[l,l,u,l,u,u,l,l,u,u,l,u],d=6,f=6,h=3,m=new Float32Array(h*f*d),_=new Float32Array(h*f*d);for(let p=0;p<d;p++){const v=p%3*2/3-1,S=p>2?0:-1,x=[v,S,0,v+2/3,S,0,v+2/3,S+1,0,v,S,0,v+2/3,S+1,0,v,S+1,0];m.set(x,h*f*p);for(let E=0;E<f;E++){const T=c[E*2]*2-1,w=c[E*2+1]*2-1;p===0?To.set(1,w,T):p===1?To.set(-T,1,-w):p===2?To.set(-T,w,1):p===3?To.set(-1,w,-T):p===4?To.set(-T,-1,w):To.set(T,w,-1),To.toArray(_,(p*f+E)*h)}}const g=new fr;g.setAttribute("position",new gs(m,h)),g.setAttribute("outputDirection",new gs(_,h)),t.push(new gi(g,null)),i>ja&&i--}return{lodMeshes:t,sizeLods:e}}function Vx(n,e,t){const i=new wr(n,e,t);return i.texture.mapping=ph,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ca(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function hP(n,e,t){return new $r({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cP,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function pP(n,e,t){return new $r({name:"SphericalGaussianBlur",defines:{SAMPLES:uP,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function Hx(){return new $r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function Gx(){return new $r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function gh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class $M extends wr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new NM(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new bc(5,5,5),s=new $r({name:"CubemapFromEquirect",uniforms:El(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mi,blending:ps});s.uniforms.tEquirect.value=t;const o=new gi(r,s),a=t.minFilter;return t.minFilter===Uo&&(t.minFilter=qn),new vb(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function mP(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?o(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===jh||h===Kh)if(e.has(f)){const m=e.get(f).texture;return a(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const _=new $M(m.height);return _.fromEquirectangularTexture(n,f),e.set(f,_),f.addEventListener("dispose",u),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const h=f.mapping,m=h===jh||h===Kh,_=h===ea||h===Sl;if(m||_){let g=t.get(f);const p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new zx(n)),g=m?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const v=f.image;return m&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new zx(n)),g=m?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",c),g.texture):null}}}return f}function a(f,h){return h===jh?f.mapping=ea:h===Kh&&(f.mapping=Sl),f}function l(f){let h=0;const m=6;for(let _=0;_<m;_++)f[_]!==void 0&&h++;return h===m}function u(f){const h=f.target;h.removeEventListener("dispose",u);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(f){const h=f.target;h.removeEventListener("dispose",c);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function gP(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&sl("WebGLRenderer: "+i+" extension not supported."),r}}}function _P(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function u(d){const f=[],h=d.index,m=d.attributes.position;let _=0;if(m===void 0)return;if(h!==null){const v=h.array;_=h.version;for(let S=0,x=v.length;S<x;S+=3){const E=v[S+0],T=v[S+1],w=v[S+2];f.push(E,T,T,w,w,E)}}else{const v=m.array;_=m.version;for(let S=0,x=v.length/3-1;S<x;S+=3){const E=S+0,T=S+1,w=S+2;f.push(E,T,T,w,w,E)}}const g=new(m.count>=65535?PM:RM)(f,1);g.version=_;const p=s.get(d);p&&e.remove(p),s.set(d,g)}function c(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function vP(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*o),t.update(f,i,1)}function u(d,f,h){h!==0&&(n.drawElementsInstanced(i,f,s,d*o,h),t.update(f,i,h))}function c(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,h);let _=0;for(let g=0;g<h;g++)_+=f[g];t.update(_,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c}function xP(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:xt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function yP(n,e,t){const i=new WeakMap,r=new Wt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let b=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var h=b;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let E=a.attributes.position.count*x,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*T*4*d),y=new AM(w,E,T,d);y.type=kr,y.needsUpdate=!0;const A=x*4;for(let L=0;L<d;L++){const N=p[L],W=v[L],I=S[L],H=E*T*4*L;for(let j=0;j<N.count;j++){const B=j*A;m===!0&&(r.fromBufferAttribute(N,j),w[H+B+0]=r.x,w[H+B+1]=r.y,w[H+B+2]=r.z,w[H+B+3]=0),_===!0&&(r.fromBufferAttribute(W,j),w[H+B+4]=r.x,w[H+B+5]=r.y,w[H+B+6]=r.z,w[H+B+7]=0),g===!0&&(r.fromBufferAttribute(I,j),w[H+B+8]=r.x,w[H+B+9]=r.y,w[H+B+10]=r.z,w[H+B+11]=I.itemSize===4?r.w:1)}}f={count:d,texture:y,size:new Ce(E,T)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<u.length;g++)m+=u[g];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function SP(n,e,t,i,r){let s=new WeakMap;function o(u){const c=r.render.frame,d=u.geometry,f=e.get(u,d);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==c&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const h=u.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function a(){s=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:a}}const MP={[cM]:"LINEAR_TONE_MAPPING",[fM]:"REINHARD_TONE_MAPPING",[dM]:"CINEON_TONE_MAPPING",[hM]:"ACES_FILMIC_TONE_MAPPING",[mM]:"AGX_TONE_MAPPING",[gM]:"NEUTRAL_TONE_MAPPING",[pM]:"CUSTOM_TONE_MAPPING"};function EP(n,e,t,i,r,s){const o=new wr(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const u=new fr;u.setAttribute("position",new Nn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Nn([0,2,0,0,2,0],2));const c=new ub({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new gi(u,c),f=new p_(-1,1,1,-1,0,1);let h=null,m=null,_=!1,g,p=null,v=[],S=!1;this.setSize=function(x,E){o.setSize(x,E),a!==null&&a.setSize(x,E),l!==null&&l.setSize(x,E);for(let T=0;T<v.length;T++){const w=v[T];w.setSize&&w.setSize(x,E)}},this.setEffects=function(x){v=x,S=v.length>0&&v[0].isRenderPass===!0;const E=o.width,T=o.height;v.length>0&&a===null&&(a=new wr(E,T,{type:qr,depthBuffer:!1,stencilBuffer:!1}),l=new wr(E,T,{type:qr,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<v.length;w++){const y=v[w];y.setSize&&y.setSize(E,T)}},this.begin=function(x,E){if(_||x.toneMapping===Wr&&v.length===0)return!1;if(p=E,E!==null){const T=E.width,w=E.height;(o.width!==T||o.height!==w)&&this.setSize(T,w)}return S===!1&&x.setRenderTarget(o),g=x.toneMapping,x.toneMapping=Wr,!0},this.hasRenderPass=function(){return S},this.end=function(x,E){x.toneMapping=g,_=!0;let T=o,w=a;for(let y=0;y<v.length;y++){const A=v[y];A.enabled!==!1&&(A.render(x,w,T,E),A.needsSwap!==!1&&(T=w,w=w===a?l:a))}if(h!==x.outputColorSpace||m!==x.toneMapping){h=x.outputColorSpace,m=x.toneMapping,c.defines={},gt.getTransfer(h)===Tt&&(c.defines.SRGB_TRANSFER="");const y=MP[m];y&&(c.defines[y]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,x.setRenderTarget(p),x.render(d,f),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),c.dispose()}}const jM=new ci,Pg=new ac(1,1),KM=new AM,ZM=new oC,JM=new NM,Wx=[],Xx=[],Yx=new Float32Array(16),qx=new Float32Array(9),$x=new Float32Array(4);function Ul(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Wx[r];if(s===void 0&&(s=new Float32Array(r),Wx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function _n(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _h(n,e){let t=Xx[e];t===void 0&&(t=new Int32Array(e),Xx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function TP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function wP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2fv(this.addr,e),vn(t,e)}}function AP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;n.uniform3fv(this.addr,e),vn(t,e)}}function CP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4fv(this.addr,e),vn(t,e)}}function bP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,i))return;$x.set(i),n.uniformMatrix2fv(this.addr,!1,$x),vn(t,i)}}function RP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,i))return;qx.set(i),n.uniformMatrix3fv(this.addr,!1,qx),vn(t,i)}}function PP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,i))return;Yx.set(i),n.uniformMatrix4fv(this.addr,!1,Yx),vn(t,i)}}function LP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function NP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2iv(this.addr,e),vn(t,e)}}function DP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;n.uniform3iv(this.addr,e),vn(t,e)}}function IP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4iv(this.addr,e),vn(t,e)}}function UP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function OP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2uiv(this.addr,e),vn(t,e)}}function FP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;n.uniform3uiv(this.addr,e),vn(t,e)}}function kP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4uiv(this.addr,e),vn(t,e)}}function BP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Pg.compareFunction=t.isReversedDepthBuffer()?s_:r_,s=Pg):s=jM,t.setTexture2D(e||s,r)}function zP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ZM,r)}function VP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||JM,r)}function HP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||KM,r)}function GP(n){switch(n){case 5126:return TP;case 35664:return wP;case 35665:return AP;case 35666:return CP;case 35674:return bP;case 35675:return RP;case 35676:return PP;case 5124:case 35670:return LP;case 35667:case 35671:return NP;case 35668:case 35672:return DP;case 35669:case 35673:return IP;case 5125:return UP;case 36294:return OP;case 36295:return FP;case 36296:return kP;case 35678:case 36198:case 36298:case 36306:case 35682:return BP;case 35679:case 36299:case 36307:return zP;case 35680:case 36300:case 36308:case 36293:return VP;case 36289:case 36303:case 36311:case 36292:return HP}}function WP(n,e){n.uniform1fv(this.addr,e)}function XP(n,e){const t=Ul(e,this.size,2);n.uniform2fv(this.addr,t)}function YP(n,e){const t=Ul(e,this.size,3);n.uniform3fv(this.addr,t)}function qP(n,e){const t=Ul(e,this.size,4);n.uniform4fv(this.addr,t)}function $P(n,e){const t=Ul(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function jP(n,e){const t=Ul(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function KP(n,e){const t=Ul(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ZP(n,e){n.uniform1iv(this.addr,e)}function JP(n,e){n.uniform2iv(this.addr,e)}function QP(n,e){n.uniform3iv(this.addr,e)}function eL(n,e){n.uniform4iv(this.addr,e)}function tL(n,e){n.uniform1uiv(this.addr,e)}function nL(n,e){n.uniform2uiv(this.addr,e)}function iL(n,e){n.uniform3uiv(this.addr,e)}function rL(n,e){n.uniform4uiv(this.addr,e)}function sL(n,e,t){const i=this.cache,r=e.length,s=_h(t,r);_n(i,s)||(n.uniform1iv(this.addr,s),vn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Pg:o=jM;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function oL(n,e,t){const i=this.cache,r=e.length,s=_h(t,r);_n(i,s)||(n.uniform1iv(this.addr,s),vn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ZM,s[o])}function aL(n,e,t){const i=this.cache,r=e.length,s=_h(t,r);_n(i,s)||(n.uniform1iv(this.addr,s),vn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||JM,s[o])}function lL(n,e,t){const i=this.cache,r=e.length,s=_h(t,r);_n(i,s)||(n.uniform1iv(this.addr,s),vn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||KM,s[o])}function uL(n){switch(n){case 5126:return WP;case 35664:return XP;case 35665:return YP;case 35666:return qP;case 35674:return $P;case 35675:return jP;case 35676:return KP;case 5124:case 35670:return ZP;case 35667:case 35671:return JP;case 35668:case 35672:return QP;case 35669:case 35673:return eL;case 5125:return tL;case 36294:return nL;case 36295:return iL;case 36296:return rL;case 35678:case 36198:case 36298:case 36306:case 35682:return sL;case 35679:case 36299:case 36307:return oL;case 35680:case 36300:case 36308:case 36293:return aL;case 36289:case 36303:case 36311:case 36292:return lL}}class cL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=GP(t.type)}}class fL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uL(t.type)}}class dL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Rp=/(\w+)(\])?(\[|\.)?/g;function jx(n,e){n.seq.push(e),n.map[e.id]=e}function hL(n,e,t){const i=n.name,r=i.length;for(Rp.lastIndex=0;;){const s=Rp.exec(i),o=Rp.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){jx(t,u===void 0?new cL(a,n,e):new fL(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new dL(a),jx(t,d)),t=d}}}class Jf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);hL(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Kx(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const pL=37297;let mL=0;function gL(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Zx=new nt;function _L(n){gt._getMatrix(Zx,gt.workingColorSpace,n);const e=`mat3( ${Zx.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(n)){case Fd:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Jx(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+gL(n.getShaderSource(e),a)}else return s}function vL(n,e){const t=_L(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const xL={[cM]:"Linear",[fM]:"Reinhard",[dM]:"Cineon",[hM]:"ACESFilmic",[mM]:"AgX",[gM]:"Neutral",[pM]:"Custom"};function yL(n,e){const t=xL[e];return t===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sf=new X;function SL(){gt.getLuminanceCoefficients(Sf);const n=Sf.x.toFixed(4),e=Sf.y.toFixed(4),t=Sf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ML(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lu).join(`
`)}function EL(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function TL(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function lu(n){return n!==""}function Qx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ey(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lg(n){return n.replace(wL,CL)}const AL=new Map;function CL(n,e){let t=rt[e];if(t===void 0){const i=AL.get(e);if(i!==void 0)t=rt[i],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Lg(t)}const bL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ty(n){return n.replace(bL,RL)}function RL(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ny(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const PL={[qf]:"SHADOWMAP_TYPE_PCF",[ou]:"SHADOWMAP_TYPE_VSM"};function LL(n){return PL[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const NL={[ea]:"ENVMAP_TYPE_CUBE",[Sl]:"ENVMAP_TYPE_CUBE",[ph]:"ENVMAP_TYPE_CUBE_UV"};function DL(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":NL[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const IL={[Sl]:"ENVMAP_MODE_REFRACTION"};function UL(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":IL[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const OL={[uM]:"ENVMAP_BLENDING_MULTIPLY",[FA]:"ENVMAP_BLENDING_MIX",[kA]:"ENVMAP_BLENDING_ADD"};function FL(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":OL[n.combine]||"ENVMAP_BLENDING_NONE"}function kL(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function BL(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=LL(t),u=DL(t),c=UL(t),d=FL(t),f=kL(t),h=ML(t),m=EL(s),_=r.createProgram();let g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(lu).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(lu).join(`
`),p.length>0&&(p+=`
`)):(g=[ny(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lu).join(`
`),p=[ny(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wr?"#define TONE_MAPPING":"",t.toneMapping!==Wr?rt.tonemapping_pars_fragment:"",t.toneMapping!==Wr?yL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,vL("linearToOutputTexel",t.outputColorSpace),SL(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lu).join(`
`)),o=Lg(o),o=Qx(o,t),o=ey(o,t),a=Lg(a),a=Qx(a,t),a=ey(a,t),o=ty(o),a=ty(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===lx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=v+g+o,x=v+p+a,E=Kx(r,r.VERTEX_SHADER,S),T=Kx(r,r.FRAGMENT_SHADER,x);r.attachShader(_,E),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(L){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(_)||"",W=r.getShaderInfoLog(E)||"",I=r.getShaderInfoLog(T)||"",H=N.trim(),j=W.trim(),B=I.trim();let V=!0,z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,E,T);else{const R=Jx(r,E,"vertex"),K=Jx(r,T,"fragment");xt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+R+`
`+K)}else H!==""?et("WebGLProgram: Program Info Log:",H):(j===""||B==="")&&(z=!1);z&&(L.diagnostics={runnable:V,programLog:H,vertexShader:{log:j,prefix:g},fragmentShader:{log:B,prefix:p}})}r.deleteShader(E),r.deleteShader(T),y=new Jf(r,_),A=TL(r,_)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,pL)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mL++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=T,this}let zL=0;class VL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new HL(e),t.set(e,i)),i}}class HL{constructor(e){this.id=zL++,this.code=e,this.usedTimes=0}}function GL(n){return n===ta||n===Id||n===Ud}function WL(n,e,t,i,r,s){const o=new CM,a=new VL,l=new Set,u=[],c=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,A,b,L,N,W){const I=L.fog,H=N.geometry,j=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,V=e.get(y.envMap||j,B),z=V&&V.mapping===ph?V.image.height:null,R=h[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&et("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const K=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,pe=K!==void 0?K.length:0;let we=0;H.morphAttributes.position!==void 0&&(we=1),H.morphAttributes.normal!==void 0&&(we=2),H.morphAttributes.color!==void 0&&(we=3);let ze,We,qe,J;if(R){const je=Ur[R];ze=je.vertexShader,We=je.fragmentShader}else{ze=y.vertexShader,We=y.fragmentShader;const je=a.getVertexShaderStage(y),ue=a.getFragmentShaderStage(y);a.update(y,je,ue),qe=je.id,J=ue.id}const ne=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),$e=N.isInstancedMesh===!0,ye=N.isBatchedMesh===!0,Ue=!!y.map,Fe=!!y.matcap,ee=!!V,se=!!y.aoMap,le=!!y.lightMap,D=!!y.bumpMap&&y.wireframe===!1,he=!!y.normalMap,Ge=!!y.displacementMap,ke=!!y.emissiveMap,Pe=!!y.metalnessMap,Je=!!y.roughnessMap,O=y.anisotropy>0,ot=y.clearcoat>0,Ke=y.dispersion>0,P=y.retroreflectivity>0,M=y.iridescence>0,G=y.sheen>0,Y=y.transmission>0,Q=O&&!!y.anisotropyMap,me=ot&&!!y.clearcoatMap,ce=ot&&!!y.clearcoatNormalMap,te=ot&&!!y.clearcoatRoughnessMap,re=M&&!!y.iridescenceMap,Se=M&&!!y.iridescenceThicknessMap,Oe=G&&!!y.sheenColorMap,Me=G&&!!y.sheenRoughnessMap,xe=!!y.specularMap,de=!!y.specularColorMap,Xe=!!y.specularIntensityMap,Qe=Y&&!!y.transmissionMap,F=Y&&!!y.thicknessMap,ve=!!y.gradientMap,ie=!!y.alphaMap,Ee=y.alphaTest>0,Ae=!!y.alphaHash,oe=!!y.extensions;let fe=Wr;y.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(fe=n.toneMapping);const ae={shaderID:R,shaderType:y.type,shaderName:y.name,vertexShader:ze,fragmentShader:We,defines:y.defines,customVertexShaderID:qe,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:ye,batchingColor:ye&&N._colorsTexture!==null,instancing:$e,instancingColor:$e&&N.instanceColor!==null,instancingMorph:$e&&N.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ue,matcap:Fe,envMap:ee,envMapMode:ee&&V.mapping,envMapCubeUVHeight:z,aoMap:se,lightMap:le,bumpMap:D,normalMap:he,displacementMap:Ge,emissiveMap:ke,normalMapObjectSpace:he&&y.normalMapType===VA,normalMapTangentSpace:he&&y.normalMapType===Tg,packedNormalMap:he&&y.normalMapType===Tg&&GL(y.normalMap.format),metalnessMap:Pe,roughnessMap:Je,anisotropy:O,anisotropyMap:Q,clearcoat:ot,clearcoatMap:me,clearcoatNormalMap:ce,clearcoatRoughnessMap:te,dispersion:Ke,retroreflection:P,iridescence:M,iridescenceMap:re,iridescenceThicknessMap:Se,sheen:G,sheenColorMap:Oe,sheenRoughnessMap:Me,specularMap:xe,specularColorMap:de,specularIntensityMap:Xe,transmission:Y,transmissionMap:Qe,thicknessMap:F,gradientMap:ve,opaque:y.transparent===!1&&y.blending===wu&&y.alphaToCoverage===!1,alphaMap:ie,alphaTest:Ee,alphaHash:Ae,combine:y.combine,mapUv:Ue&&m(y.map.channel),aoMapUv:se&&m(y.aoMap.channel),lightMapUv:le&&m(y.lightMap.channel),bumpMapUv:D&&m(y.bumpMap.channel),normalMapUv:he&&m(y.normalMap.channel),displacementMapUv:Ge&&m(y.displacementMap.channel),emissiveMapUv:ke&&m(y.emissiveMap.channel),metalnessMapUv:Pe&&m(y.metalnessMap.channel),roughnessMapUv:Je&&m(y.roughnessMap.channel),anisotropyMapUv:Q&&m(y.anisotropyMap.channel),clearcoatMapUv:me&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ce&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Me&&m(y.sheenRoughnessMap.channel),specularMapUv:xe&&m(y.specularMap.channel),specularColorMapUv:de&&m(y.specularColorMap.channel),specularIntensityMapUv:Xe&&m(y.specularIntensityMap.channel),transmissionMapUv:Qe&&m(y.transmissionMap.channel),thicknessMapUv:F&&m(y.thicknessMap.channel),alphaMapUv:ie&&m(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(he||O),vertexNormals:!!H.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(Ue||ie),fog:!!I,useFog:y.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||H.attributes.normal===void 0&&he===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:we,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:fe,decodeVideoTexture:Ue&&y.map.isVideoTexture===!0&&gt.getTransfer(y.map.colorSpace)===Tt,decodeVideoTextureEmissive:ke&&y.emissiveMap.isVideoTexture===!0&&gt.getTransfer(y.emissiveMap.colorSpace)===Tt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===as,flipSided:y.side===Mi,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:oe&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&y.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function g(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const b in y.defines)A.push(b),A.push(y.defines[b]);return y.isRawShaderMaterial===!1&&(p(A,y),v(A,y),A.push(n.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function p(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function v(y,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function S(y){const A=h[y.type];let b;if(A){const L=Ur[A];b=ob.clone(L.uniforms)}else b=y.uniforms;return b}function x(y,A){let b=c.get(A);return b!==void 0?++b.usedTimes:(b=new BL(n,A,y,r),u.push(b),c.set(A,b)),b}function E(y){if(--y.usedTimes===0){const A=u.indexOf(y);u[A]=u[u.length-1],u.pop(),c.delete(y.cacheKey),y.destroy()}}function T(y){a.remove(y)}function w(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:S,acquireProgram:x,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:w}}function XL(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function YL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function iy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ry(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,m,_,g,p){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:h,material:m,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},n[e]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=m,v.materialVariant=o(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=g,v.group=p),e++,v}function l(f,h,m,_,g,p,v){v.reversedDepth===!0&&(g=-g);const S=a(f,h,m,_,g,p);m.transmission>0?i.push(S):m.transparent===!0?r.push(S):t.push(S)}function u(f,h,m,_,g,p){const v=a(f,h,m,_,g,p);m.transmission>0?i.unshift(v):m.transparent===!0?r.unshift(v):t.unshift(v)}function c(f,h){t.length>1&&t.sort(f||YL),i.length>1&&i.sort(h||iy),r.length>1&&r.sort(h||iy)}function d(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:d,sort:c}}function qL(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new ry,n.set(i,[o])):r>=s.length?(o=new ry,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function $L(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new X,color:new dt};break;case"SpotLight":t={position:new X,direction:new X,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function jL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let KL=0;function ZL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function JL(n){const e=new $L,t=jL(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new X);const r=new X,s=new $t,o=new $t;function a(u){let c=0,d=0,f=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let h=0,m=0,_=0,g=0,p=0,v=0,S=0,x=0,E=0,T=0,w=0,y=0,A=0,b=0;u.sort(ZL);for(let N=0,W=u.length;N<W;N++){const I=u[N],H=I.color,j=I.intensity,B=I.distance;let V=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ta?V=I.shadow.map.texture:V=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)c+=H.r*j,d+=H.g*j,f+=H.b*j;else if(I.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(I.sh.coefficients[z],j);b++}else if(I.isSunLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const R=I.shadow,K=t.get(I);K.shadowIntensity=R.intensity,K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),i.sunShadow[m]=K,i.sunShadowMap[m]=V;const pe=R.getViewportCount();for(let we=0;we<pe;we++)i.sunShadowMatrix[_+we]=R.getMatrix(we),i.sunShadowCascade[_+we]=R._cascadeData[we];_+=pe,m++}i.sun[h]=z,h++}else if(I.isDirectionalLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const R=I.shadow,K=t.get(I);K.shadowIntensity=R.intensity,K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,i.directionalShadow[g]=K,i.directionalShadowMap[g]=V,i.directionalShadowMatrix[g]=I.shadow.matrix,E++}i.directional[g]=z,g++}else if(I.isSpotLight){const z=e.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(H).multiplyScalar(j),z.distance=B,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,i.spot[v]=z;const R=I.shadow;if(I.map&&(i.spotLightMap[y]=I.map,y++,R.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[v]=R.matrix,I.castShadow){const K=t.get(I);K.shadowIntensity=R.intensity,K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,i.spotShadow[v]=K,i.spotShadowMap[v]=V,w++}v++}else if(I.isRectAreaLight){const z=e.get(I);z.color.copy(H).multiplyScalar(j),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),i.rectArea[S]=z,S++}else if(I.isPointLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){const R=I.shadow,K=t.get(I);K.shadowIntensity=R.intensity,K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,K.shadowCameraNear=R.camera.near,K.shadowCameraFar=R.camera.far,i.pointShadow[p]=K,i.pointShadowMap[p]=V,i.pointShadowMatrix[p]=I.shadow.matrix,T++}i.point[p]=z,p++}else if(I.isHemisphereLight){const z=e.get(I);z.skyColor.copy(I.color).multiplyScalar(j),z.groundColor.copy(I.groundColor).multiplyScalar(j),i.hemi[x]=z,x++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const L=i.hash;(L.sunLength!==h||L.directionalLength!==g||L.pointLength!==p||L.spotLength!==v||L.rectAreaLength!==S||L.hemiLength!==x||L.numSunShadows!==m||L.numDirectionalShadows!==E||L.numPointShadows!==T||L.numSpotShadows!==w||L.numSpotMaps!==y||L.numLightProbes!==b)&&(i.sun.length=h,i.directional.length=g,i.spot.length=v,i.rectArea.length=S,i.point.length=p,i.hemi.length=x,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+y-A,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=b,L.sunLength=h,L.directionalLength=g,L.pointLength=p,L.spotLength=v,L.rectAreaLength=S,L.hemiLength=x,L.numSunShadows=m,L.numDirectionalShadows=E,L.numPointShadows=T,L.numSpotShadows=w,L.numSpotMaps=y,L.numLightProbes=b,i.version=KL++)}function l(u,c){let d=0,f=0,h=0,m=0,_=0,g=0;const p=c.matrixWorldInverse;for(let v=0,S=u.length;v<S;v++){const x=u[v];if(x.isSunLight){const E=i.sun[d];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(p),d++}else if(x.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(x.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(x.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),h++}else if(x.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:i}}function sy(n){const e=new JL(n),t=[],i=[],r=[];function s(f){d.camera=f,t.length=0,i.length=0,r.length=0}function o(f){t.push(f)}function a(f){i.push(f)}function l(f){r.push(f)}function u(){e.setup(t)}function c(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:u,setupLightsView:c,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function QL(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new sy(n),e.set(r,[a])):s>=o.length?(a=new sy(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const eN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,nN=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],iN=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],oy=new $t,Jl=new X,Pp=new X;function rN(n,e,t){let i=new l_;const r=new Ce,s=new Ce,o=new Wt,a=new fb,l=new db,u={},c=t.maxTextureSize,d={[Qo]:Mi,[Mi]:Qo,[as]:as},f=new $r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:eN,fragmentShader:tN}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const m=new fr;m.setAttribute("position",new gs(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new gi(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qf;let p=this.type;this.render=function(T,w,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===vA&&(et("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qf);const A=n.getRenderTarget(),b=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),N=n.state;N.setBlending(ps),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const W=p!==this.type;W&&w.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(H=>H.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,H=T.length;I<H;I++){const j=T[I],B=j.shadow;if(B===void 0){et("WebGLShadowMap:",j,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const V=B.getFrameExtents();r.multiply(V),s.copy(B.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/V.x),r.x=s.x*V.x,B.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/V.y),r.y=s.y*V.y,B.mapSize.y=s.y));const z=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=z,B.map===null||W===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===ou){if(j.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new wr(r.x,r.y,{format:ta,type:qr,minFilter:qn,magFilter:qn,generateMipmaps:!1}),B.map.texture.name=j.name+".shadowMap",B.map.depthTexture=new ac(r.x,r.y,kr),B.map.depthTexture.name=j.name+".shadowMapDepth",B.map.depthTexture.format=Ms,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=bn,B.map.depthTexture.magFilter=bn}else j.isPointLight?(B.map=new $M(r.x),B.map.depthTexture=new wC(r.x,Yr)):(B.map=new wr(r.x,r.y),B.map.depthTexture=new ac(r.x,r.y,Yr)),B.map.depthTexture.name=j.name+".shadowMap",B.map.depthTexture.format=Ms,this.type===qf?(B.map.depthTexture.compareFunction=z?s_:r_,B.map.depthTexture.minFilter=qn,B.map.depthTexture.magFilter=qn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=bn,B.map.depthTexture.magFilter=bn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==r.x||B.map.height!==r.y)&&B.map.setSize(r.x,r.y);const R=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();j.isPointLight!==!0&&B.updateMatrices(j,y);for(let K=0;K<R;K++){const pe=B.getCamera(K);if(j.isPointLight){const we=B.camera,ze=B.matrix,We=j.distance||we.far;We!==we.far&&(we.far=We,we.updateProjectionMatrix()),Jl.setFromMatrixPosition(j.matrixWorld),we.position.copy(Jl),Pp.copy(we.position),Pp.add(nN[K]),we.up.copy(iN[K]),we.lookAt(Pp),we.updateMatrixWorld(),ze.makeTranslation(-Jl.x,-Jl.y,-Jl.z),oy.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),B._frustum.setFromProjectionMatrix(oy,we.coordinateSystem,we.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,K),n.clear();else{K===0&&(n.setRenderTarget(B.map),n.clear());const we=B.getViewport(K);o.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),N.viewport(o)}i=B.getFrustum(K),x(w,y,pe,j,this.type)}B.isPointLightShadow!==!0&&this.type===ou&&v(B,y),B.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(A,b,L)};function v(T,w){const y=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null?T.mapPass=new wr(r.x,r.y,{format:ta,type:qr}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(w,null,y,f,_,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(w,null,y,h,_,null)}function S(T,w,y,A){let b=null;const L=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)b=L;else if(b=y.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const N=b.uuid,W=w.uuid;let I=u[N];I===void 0&&(I={},u[N]=I);let H=I[W];H===void 0&&(H=b.clone(),I[W]=H,w.addEventListener("dispose",E)),b=H}if(b.visible=w.visible,b.wireframe=w.wireframe,A===ou?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:d[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,y.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=n.properties.get(b);N.light=y}return b}function x(T,w,y,A,b){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===ou)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const W=e.update(T),I=T.material;if(Array.isArray(I)){const H=W.groups;for(let j=0,B=H.length;j<B;j++){const V=H[j],z=I[V.materialIndex];if(z&&z.visible){const R=S(T,z,A,b);T.onBeforeShadow(n,T,w,y,W,R,V),n.renderBufferDirect(y,null,W,R,T,V),T.onAfterShadow(n,T,w,y,W,R,V)}}}else if(I.visible){const H=S(T,I,A,b);T.onBeforeShadow(n,T,w,y,W,H,null),n.renderBufferDirect(y,null,W,H,T,null),T.onAfterShadow(n,T,w,y,W,H,null)}}const N=T.children;for(let W=0,I=N.length;W<I;W++)x(N[W],w,y,A,b)}function E(T){T.target.removeEventListener("dispose",E);for(const y in u){const A=u[y],b=T.target.uuid;b in A&&(A[b].dispose(),delete A[b])}}}function sN(n,e){function t(){let F=!1;const ve=new Wt;let ie=null;const Ee=new Wt(0,0,0,0);return{setMask:function(Ae){ie!==Ae&&!F&&(n.colorMask(Ae,Ae,Ae,Ae),ie=Ae)},setLocked:function(Ae){F=Ae},setClear:function(Ae,oe,fe,ae,je){je===!0&&(Ae*=ae,oe*=ae,fe*=ae),ve.set(Ae,oe,fe,ae),Ee.equals(ve)===!1&&(n.clearColor(Ae,oe,fe,ae),Ee.copy(ve))},reset:function(){F=!1,ie=null,Ee.set(-1,0,0,0)}}}function i(){let F=!1,ve=!1,ie=null,Ee=null,Ae=null;return{setReversed:function(oe){if(ve!==oe){const fe=e.get("EXT_clip_control");oe?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT),ve=oe;const ae=Ae;Ae=null,this.setClear(ae)}},getReversed:function(){return ve},setTest:function(oe){oe?ne(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(oe){ie!==oe&&!F&&(n.depthMask(oe),ie=oe)},setFunc:function(oe){if(ve&&(oe=QA[oe]),Ee!==oe){switch(oe){case Bm:n.depthFunc(n.NEVER);break;case zm:n.depthFunc(n.ALWAYS);break;case Vm:n.depthFunc(n.LESS);break;case ic:n.depthFunc(n.LEQUAL);break;case Hm:n.depthFunc(n.EQUAL);break;case Gm:n.depthFunc(n.GEQUAL);break;case Wm:n.depthFunc(n.GREATER);break;case Xm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ee=oe}},setLocked:function(oe){F=oe},setClear:function(oe){Ae!==oe&&(Ae=oe,ve&&(oe=1-oe),n.clearDepth(oe))},reset:function(){F=!1,ie=null,Ee=null,Ae=null,ve=!1}}}function r(){let F=!1,ve=null,ie=null,Ee=null,Ae=null,oe=null,fe=null,ae=null,je=null;return{setTest:function(ue){F||(ue?ne(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(ue){ve!==ue&&!F&&(n.stencilMask(ue),ve=ue)},setFunc:function(ue,Ze,Be){(ie!==ue||Ee!==Ze||Ae!==Be)&&(n.stencilFunc(ue,Ze,Be),ie=ue,Ee=Ze,Ae=Be)},setOp:function(ue,Ze,Be){(oe!==ue||fe!==Ze||ae!==Be)&&(n.stencilOp(ue,Ze,Be),oe=ue,fe=Ze,ae=Be)},setLocked:function(ue){F=ue},setClear:function(ue){je!==ue&&(n.clearStencil(ue),je=ue)},reset:function(){F=!1,ve=null,ie=null,Ee=null,Ae=null,oe=null,fe=null,ae=null,je=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},d={},f={},h=new WeakMap,m=[],_=null,g=!1,p=null,v=null,S=null,x=null,E=null,T=null,w=null,y=new dt(0,0,0),A=0,b=!1,L=null,N=null,W=null,I=null,H=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,V=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),B=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),B=V>=2);let R=null,K={};const pe=n.getParameter(n.SCISSOR_BOX),we=n.getParameter(n.VIEWPORT),ze=new Wt().fromArray(pe),We=new Wt().fromArray(we);function qe(F,ve,ie,Ee){const Ae=new Uint8Array(4),oe=n.createTexture();n.bindTexture(F,oe),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let fe=0;fe<ie;fe++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ve,0,n.RGBA,1,1,Ee,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(ve+fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return oe}const J={};J[n.TEXTURE_2D]=qe(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=qe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=qe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=qe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(n.DEPTH_TEST),o.setFunc(ic),D(!1),he(rx),ne(n.CULL_FACE),se(ps);function ne(F){c[F]!==!0&&(n.enable(F),c[F]=!0)}function _e(F){c[F]!==!1&&(n.disable(F),c[F]=!1)}function $e(F,ve){return f[F]!==ve?(n.bindFramebuffer(F,ve),f[F]=ve,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ve),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ve),!0):!1}function ye(F,ve){let ie=m,Ee=!1;if(F){ie=h.get(ve),ie===void 0&&(ie=[],h.set(ve,ie));const Ae=F.textures;if(ie.length!==Ae.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,fe=Ae.length;oe<fe;oe++)ie[oe]=n.COLOR_ATTACHMENT0+oe;ie.length=Ae.length,Ee=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,Ee=!0);Ee&&n.drawBuffers(ie)}function Ue(F){return _!==F?(n.useProgram(F),_=F,!0):!1}const Fe={[Na]:n.FUNC_ADD,[yA]:n.FUNC_SUBTRACT,[SA]:n.FUNC_REVERSE_SUBTRACT};Fe[MA]=n.MIN,Fe[EA]=n.MAX;const ee={[TA]:n.ZERO,[wA]:n.ONE,[AA]:n.SRC_COLOR,[aM]:n.SRC_ALPHA,[NA]:n.SRC_ALPHA_SATURATE,[PA]:n.DST_COLOR,[bA]:n.DST_ALPHA,[CA]:n.ONE_MINUS_SRC_COLOR,[lM]:n.ONE_MINUS_SRC_ALPHA,[LA]:n.ONE_MINUS_DST_COLOR,[RA]:n.ONE_MINUS_DST_ALPHA,[DA]:n.CONSTANT_COLOR,[IA]:n.ONE_MINUS_CONSTANT_COLOR,[UA]:n.CONSTANT_ALPHA,[OA]:n.ONE_MINUS_CONSTANT_ALPHA};function se(F,ve,ie,Ee,Ae,oe,fe,ae,je,ue){if(F===ps){g===!0&&(_e(n.BLEND),g=!1);return}if(g===!1&&(ne(n.BLEND),g=!0),F!==xA){if(F!==p||ue!==b){if((v!==Na||E!==Na)&&(n.blendEquation(n.FUNC_ADD),v=Na,E=Na),ue)switch(F){case wu:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sx:n.blendFunc(n.ONE,n.ONE);break;case ox:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ax:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:xt("WebGLState: Invalid blending: ",F);break}else switch(F){case wu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sx:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ox:xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ax:xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:xt("WebGLState: Invalid blending: ",F);break}S=null,x=null,T=null,w=null,y.set(0,0,0),A=0,p=F,b=ue}return}Ae=Ae||ve,oe=oe||ie,fe=fe||Ee,(ve!==v||Ae!==E)&&(n.blendEquationSeparate(Fe[ve],Fe[Ae]),v=ve,E=Ae),(ie!==S||Ee!==x||oe!==T||fe!==w)&&(n.blendFuncSeparate(ee[ie],ee[Ee],ee[oe],ee[fe]),S=ie,x=Ee,T=oe,w=fe),(ae.equals(y)===!1||je!==A)&&(n.blendColor(ae.r,ae.g,ae.b,je),y.copy(ae),A=je),p=F,b=!1}function le(F,ve){F.side===as?_e(n.CULL_FACE):ne(n.CULL_FACE);let ie=F.side===Mi;ve&&(ie=!ie),D(ie),F.blending===wu&&F.transparent===!1?se(ps):se(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const Ee=F.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ke(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function D(F){L!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),L=F)}function he(F){F!==gA?(ne(n.CULL_FACE),F!==N&&(F===rx?n.cullFace(n.BACK):F===_A?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),N=F}function Ge(F){F!==W&&(B&&n.lineWidth(F),W=F)}function ke(F,ve,ie){F?(ne(n.POLYGON_OFFSET_FILL),(I!==ve||H!==ie)&&(I=ve,H=ie,o.getReversed()&&(ve=-ve),n.polygonOffset(ve,ie))):_e(n.POLYGON_OFFSET_FILL)}function Pe(F){F?ne(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function Je(F){F===void 0&&(F=n.TEXTURE0+j-1),R!==F&&(n.activeTexture(F),R=F)}function O(F,ve,ie){ie===void 0&&(R===null?ie=n.TEXTURE0+j-1:ie=R);let Ee=K[ie];Ee===void 0&&(Ee={type:void 0,texture:void 0},K[ie]=Ee),(Ee.type!==F||Ee.texture!==ve)&&(R!==ie&&(n.activeTexture(ie),R=ie),n.bindTexture(F,ve||J[F]),Ee.type=F,Ee.texture=ve)}function ot(){const F=K[R];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Ke(){try{n.compressedTexImage2D(...arguments)}catch(F){xt("WebGLState:",F)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(F){xt("WebGLState:",F)}}function M(){try{n.texSubImage2D(...arguments)}catch(F){xt("WebGLState:",F)}}function G(){try{n.texSubImage3D(...arguments)}catch(F){xt("WebGLState:",F)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(F){xt("WebGLState:",F)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(F){xt("WebGLState:",F)}}function me(){try{n.texStorage2D(...arguments)}catch(F){xt("WebGLState:",F)}}function ce(){try{n.texStorage3D(...arguments)}catch(F){xt("WebGLState:",F)}}function te(){try{n.texImage2D(...arguments)}catch(F){xt("WebGLState:",F)}}function re(){try{n.texImage3D(...arguments)}catch(F){xt("WebGLState:",F)}}function Se(F){return d[F]!==void 0?d[F]:n.getParameter(F)}function Oe(F,ve){d[F]!==ve&&(n.pixelStorei(F,ve),d[F]=ve)}function Me(F){ze.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),ze.copy(F))}function xe(F){We.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),We.copy(F))}function de(F,ve){let ie=u.get(ve);ie===void 0&&(ie=new WeakMap,u.set(ve,ie));let Ee=ie.get(F);Ee===void 0&&(Ee=n.getUniformBlockIndex(ve,F.name),ie.set(F,Ee))}function Xe(F,ve){const Ee=u.get(ve).get(F);l.get(ve)!==Ee&&(n.uniformBlockBinding(ve,Ee,F.__bindingPointIndex),l.set(ve,Ee))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),c={},d={},R=null,K={},f={},h=new WeakMap,m=[],_=null,g=!1,p=null,v=null,S=null,x=null,E=null,T=null,w=null,y=new dt(0,0,0),A=0,b=!1,L=null,N=null,W=null,I=null,H=null,ze.set(0,0,n.canvas.width,n.canvas.height),We.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:_e,bindFramebuffer:$e,drawBuffers:ye,useProgram:Ue,setBlending:se,setMaterial:le,setFlipSided:D,setCullFace:he,setLineWidth:Ge,setPolygonOffset:ke,setScissorTest:Pe,activeTexture:Je,bindTexture:O,unbindTexture:ot,compressedTexImage2D:Ke,compressedTexImage3D:P,texImage2D:te,texImage3D:re,pixelStorei:Oe,getParameter:Se,updateUBOMapping:de,uniformBlockBinding:Xe,texStorage2D:me,texStorage3D:ce,texSubImage2D:M,texSubImage3D:G,compressedTexSubImage2D:Y,compressedTexSubImage3D:Q,scissor:Me,viewport:xe,reset:Qe}}function oN(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ce,c=new WeakMap,d=new Set;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,M){return m?new OffscreenCanvas(P,M):kd("canvas")}function g(P,M,G){let Y=1;const Q=Ke(P);if((Q.width>G||Q.height>G)&&(Y=G/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const me=Math.floor(Y*Q.width),ce=Math.floor(Y*Q.height);f===void 0&&(f=_(me,ce));const te=M?_(me,ce):f;return te.width=me,te.height=ce,te.getContext("2d").drawImage(P,0,0,me,ce),et("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+me+"x"+ce+")."),te}else return"data"in P&&et("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function p(P){return P.generateMipmaps}function v(P){n.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(P,M,G,Y,Q,me=!1){if(P!==null){if(n[P]!==void 0)return n[P];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ce;Y&&(ce=e.get("EXT_texture_norm16"),ce||et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=M;if(M===n.RED&&(G===n.FLOAT&&(te=n.R32F),G===n.HALF_FLOAT&&(te=n.R16F),G===n.UNSIGNED_BYTE&&(te=n.R8),G===n.UNSIGNED_SHORT&&ce&&(te=ce.R16_EXT),G===n.SHORT&&ce&&(te=ce.R16_SNORM_EXT)),M===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(te=n.R8UI),G===n.UNSIGNED_SHORT&&(te=n.R16UI),G===n.UNSIGNED_INT&&(te=n.R32UI),G===n.BYTE&&(te=n.R8I),G===n.SHORT&&(te=n.R16I),G===n.INT&&(te=n.R32I)),M===n.RG&&(G===n.FLOAT&&(te=n.RG32F),G===n.HALF_FLOAT&&(te=n.RG16F),G===n.UNSIGNED_BYTE&&(te=n.RG8),G===n.UNSIGNED_SHORT&&ce&&(te=ce.RG16_EXT),G===n.SHORT&&ce&&(te=ce.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(te=n.RG8UI),G===n.UNSIGNED_SHORT&&(te=n.RG16UI),G===n.UNSIGNED_INT&&(te=n.RG32UI),G===n.BYTE&&(te=n.RG8I),G===n.SHORT&&(te=n.RG16I),G===n.INT&&(te=n.RG32I)),M===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(te=n.RGB8UI),G===n.UNSIGNED_SHORT&&(te=n.RGB16UI),G===n.UNSIGNED_INT&&(te=n.RGB32UI),G===n.BYTE&&(te=n.RGB8I),G===n.SHORT&&(te=n.RGB16I),G===n.INT&&(te=n.RGB32I)),M===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(te=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(te=n.RGBA16UI),G===n.UNSIGNED_INT&&(te=n.RGBA32UI),G===n.BYTE&&(te=n.RGBA8I),G===n.SHORT&&(te=n.RGBA16I),G===n.INT&&(te=n.RGBA32I)),M===n.RGB&&(G===n.UNSIGNED_SHORT&&ce&&(te=ce.RGB16_EXT),G===n.SHORT&&ce&&(te=ce.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(te=n.R11F_G11F_B10F)),M===n.RGBA){const re=me?Fd:gt.getTransfer(Q);G===n.FLOAT&&(te=n.RGBA32F),G===n.HALF_FLOAT&&(te=n.RGBA16F),G===n.UNSIGNED_BYTE&&(te=re===Tt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&ce&&(te=ce.RGBA16_EXT),G===n.SHORT&&ce&&(te=ce.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function E(P,M){let G;return P?M===null||M===Yr||M===sc?G=n.DEPTH24_STENCIL8:M===kr?G=n.DEPTH32F_STENCIL8:M===rc&&(G=n.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Yr||M===sc?G=n.DEPTH_COMPONENT24:M===kr?G=n.DEPTH_COMPONENT32F:M===rc&&(G=n.DEPTH_COMPONENT16),G}function T(P,M){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==bn&&P.minFilter!==qn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function w(P){const M=P.target;M.removeEventListener("dispose",w),A(M),M.isVideoTexture&&c.delete(M),M.isHTMLTexture&&d.delete(M)}function y(P){const M=P.target;M.removeEventListener("dispose",y),L(M)}function A(P){const M=i.get(P);if(M.__webglInit===void 0)return;const G=P.source,Y=h.get(G);if(Y){const Q=Y[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(P),Object.keys(Y).length===0&&h.delete(G)}i.remove(P)}function b(P){const M=i.get(P);n.deleteTexture(M.__webglTexture);const G=P.source,Y=h.get(G);delete Y[M.__cacheKey],o.memory.textures--}function L(P){const M=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let Q=0;Q<M.__webglFramebuffer[Y].length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[Y][Q]);else n.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)n.deleteFramebuffer(M.__webglFramebuffer[Y]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=P.textures;for(let Y=0,Q=G.length;Y<Q;Y++){const me=i.get(G[Y]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),o.memory.textures--),i.remove(G[Y])}i.remove(P)}let N=0;function W(){N=0}function I(){return N}function H(P){N=P}function j(){const P=N;return P>=r.maxTextures&&et("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),N+=1,P}function B(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function V(P,M){const G=i.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){const Y=P.image;if(Y===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(G,P,M);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+M)}function z(P,M){const G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){_e(G,P,M);return}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+M)}function R(P,M){const G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){_e(G,P,M);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+M)}function K(P,M){const G=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&G.__version!==P.version){$e(G,P,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+M)}const pe={[Ym]:n.REPEAT,[fs]:n.CLAMP_TO_EDGE,[qm]:n.MIRRORED_REPEAT},we={[bn]:n.NEAREST,[BA]:n.NEAREST_MIPMAP_NEAREST,[Zc]:n.NEAREST_MIPMAP_LINEAR,[qn]:n.LINEAR,[Zh]:n.LINEAR_MIPMAP_NEAREST,[Uo]:n.LINEAR_MIPMAP_LINEAR},ze={[GA]:n.NEVER,[$A]:n.ALWAYS,[WA]:n.LESS,[r_]:n.LEQUAL,[XA]:n.EQUAL,[s_]:n.GEQUAL,[YA]:n.GREATER,[qA]:n.NOTEQUAL};function We(P,M){if(M.type===kr&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===qn||M.magFilter===Zh||M.magFilter===Zc||M.magFilter===Uo||M.minFilter===qn||M.minFilter===Zh||M.minFilter===Zc||M.minFilter===Uo)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,pe[M.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,pe[M.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,pe[M.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,we[M.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,we[M.minFilter]),M.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ze[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===bn||M.minFilter!==Zc&&M.minFilter!==Uo||M.type===kr&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function qe(P,M){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",w));const Y=M.source;let Q=h.get(Y);Q===void 0&&(Q={},h.set(Y,Q));const me=B(M);if(me!==P.__cacheKey){Q[me]===void 0&&(Q[me]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[me].usedTimes++;const ce=Q[P.__cacheKey];ce!==void 0&&(Q[P.__cacheKey].usedTimes--,ce.usedTimes===0&&b(M)),P.__cacheKey=me,P.__webglTexture=Q[me].texture}return G}function J(P,M,G){return Math.floor(Math.floor(P/G)/M)}function ne(P,M,G,Y){const me=P.updateRanges;if(me.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,G,Y,M.data);else{me.sort((Oe,Me)=>Oe.start-Me.start);let ce=0;for(let Oe=1;Oe<me.length;Oe++){const Me=me[ce],xe=me[Oe],de=Me.start+Me.count,Xe=J(xe.start,M.width,4),Qe=J(Me.start,M.width,4);xe.start<=de+1&&Xe===Qe&&J(xe.start+xe.count-1,M.width,4)===Xe?Me.count=Math.max(Me.count,xe.start+xe.count-Me.start):(++ce,me[ce]=xe)}me.length=ce+1;const te=t.getParameter(n.UNPACK_ROW_LENGTH),re=t.getParameter(n.UNPACK_SKIP_PIXELS),Se=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let Oe=0,Me=me.length;Oe<Me;Oe++){const xe=me[Oe],de=Math.floor(xe.start/4),Xe=Math.ceil(xe.count/4),Qe=de%M.width,F=Math.floor(de/M.width),ve=Xe,ie=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Qe,F,ve,ie,G,Y,M.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,te),t.pixelStorei(n.UNPACK_SKIP_PIXELS,re),t.pixelStorei(n.UNPACK_SKIP_ROWS,Se)}}function _e(P,M,G){let Y=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=n.TEXTURE_3D);const Q=qe(P,M),me=M.source;t.bindTexture(Y,P.__webglTexture,n.TEXTURE0+G);const ce=i.get(me);if(me.version!==ce.__version||Q===!0){if(t.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ie=gt.getPrimaries(gt.workingColorSpace),Ee=M.colorSpace===Vs?null:gt.getPrimaries(M.colorSpace),Ae=M.colorSpace===Vs||ie===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let re=g(M.image,!1,r.maxTextureSize);re=ot(M,re);const Se=s.convert(M.format,M.colorSpace),Oe=s.convert(M.type);let Me=x(M.internalFormat,Se,Oe,M.normalized,M.colorSpace,M.isVideoTexture);We(Y,M);let xe;const de=M.mipmaps,Xe=M.isVideoTexture!==!0,Qe=ce.__version===void 0||Q===!0,F=me.dataReady,ve=T(M,re);if(M.isDepthTexture)Me=E(M.format===Oo,M.type),Qe&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,Me,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Me,re.width,re.height,0,Se,Oe,null));else if(M.isDataTexture)if(de.length>0){Xe&&Qe&&t.texStorage2D(n.TEXTURE_2D,ve,Me,de[0].width,de[0].height);for(let ie=0,Ee=de.length;ie<Ee;ie++)xe=de[ie],Xe?F&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,xe.width,xe.height,Se,Oe,xe.data):t.texImage2D(n.TEXTURE_2D,ie,Me,xe.width,xe.height,0,Se,Oe,xe.data);M.generateMipmaps=!1}else Xe?(Qe&&t.texStorage2D(n.TEXTURE_2D,ve,Me,re.width,re.height),F&&ne(M,re,Se,Oe)):t.texImage2D(n.TEXTURE_2D,0,Me,re.width,re.height,0,Se,Oe,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Xe&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Me,de[0].width,de[0].height,re.depth);for(let ie=0,Ee=de.length;ie<Ee;ie++)if(xe=de[ie],M.format!==Mr)if(Se!==null)if(Xe){if(F)if(M.layerUpdates.size>0){const Ae=kx(xe.width,xe.height,M.format,M.type);for(const oe of M.layerUpdates){const fe=xe.data.subarray(oe*Ae/xe.data.BYTES_PER_ELEMENT,(oe+1)*Ae/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,oe,xe.width,xe.height,1,Se,fe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,xe.width,xe.height,re.depth,Se,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Me,xe.width,xe.height,re.depth,0,xe.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,xe.width,xe.height,re.depth,Se,Oe,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Me,xe.width,xe.height,re.depth,0,Se,Oe,xe.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Xe&&Qe&&t.texStorage2D(n.TEXTURE_2D,ve,Me,de[0].width,de[0].height);for(let ie=0,Ee=de.length;ie<Ee;ie++)xe=de[ie],M.format!==Mr?Se!==null?Xe?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,xe.width,xe.height,Se,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Me,xe.width,xe.height,0,xe.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?F&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,xe.width,xe.height,Se,Oe,xe.data):t.texImage2D(n.TEXTURE_2D,ie,Me,xe.width,xe.height,0,Se,Oe,xe.data)}else if(M.isDataArrayTexture)if(Xe){if(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Me,re.width,re.height,re.depth),F)if(M.layerUpdates.size>0){const ie=kx(re.width,re.height,M.format,M.type);for(const Ee of M.layerUpdates){const Ae=re.data.subarray(Ee*ie/re.data.BYTES_PER_ELEMENT,(Ee+1)*ie/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ee,re.width,re.height,1,Se,Oe,Ae)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Se,Oe,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,re.width,re.height,re.depth,0,Se,Oe,re.data);else if(M.isData3DTexture)Xe?(Qe&&t.texStorage3D(n.TEXTURE_3D,ve,Me,re.width,re.height,re.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Se,Oe,re.data)):t.texImage3D(n.TEXTURE_3D,0,Me,re.width,re.height,re.depth,0,Se,Oe,re.data);else if(M.isFramebufferTexture){if(Qe)if(Xe)t.texStorage2D(n.TEXTURE_2D,ve,Me,re.width,re.height);else{let ie=re.width,Ee=re.height;for(let Ae=0;Ae<ve;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Me,ie,Ee,0,Se,Oe,null),ie>>=1,Ee>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){const ie=n.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),re.parentNode!==ie){ie.appendChild(re),d.add(M),ie.onpaint=Ee=>{const Ae=Ee.changedElements;for(const oe of d)Ae.includes(oe.image)&&(oe.needsUpdate=!0)},ie.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,re);else{const Ae=n.RGBA,oe=n.RGBA,fe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ae,oe,fe,re)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(de.length>0){if(Xe&&Qe){const ie=Ke(de[0]);t.texStorage2D(n.TEXTURE_2D,ve,Me,ie.width,ie.height)}for(let ie=0,Ee=de.length;ie<Ee;ie++)xe=de[ie],Xe?F&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Se,Oe,xe):t.texImage2D(n.TEXTURE_2D,ie,Me,Se,Oe,xe);M.generateMipmaps=!1}else if(Xe){if(Qe){const ie=Ke(re);t.texStorage2D(n.TEXTURE_2D,ve,Me,ie.width,ie.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Oe,re)}else t.texImage2D(n.TEXTURE_2D,0,Me,Se,Oe,re);p(M)&&v(Y),ce.__version=me.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function $e(P,M,G){if(M.image.length!==6)return;const Y=qe(P,M),Q=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+G);const me=i.get(Q);if(Q.version!==me.__version||Y===!0){t.activeTexture(n.TEXTURE0+G);const ce=gt.getPrimaries(gt.workingColorSpace),te=M.colorSpace===Vs?null:gt.getPrimaries(M.colorSpace),re=M.colorSpace===Vs||ce===te?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const Se=M.isCompressedTexture||M.image[0].isCompressedTexture,Oe=M.image[0]&&M.image[0].isDataTexture,Me=[];for(let oe=0;oe<6;oe++)!Se&&!Oe?Me[oe]=g(M.image[oe],!0,r.maxCubemapSize):Me[oe]=Oe?M.image[oe].image:M.image[oe],Me[oe]=ot(M,Me[oe]);const xe=Me[0],de=s.convert(M.format,M.colorSpace),Xe=s.convert(M.type),Qe=x(M.internalFormat,de,Xe,M.normalized,M.colorSpace),F=M.isVideoTexture!==!0,ve=me.__version===void 0||Y===!0,ie=Q.dataReady;let Ee=T(M,xe);We(n.TEXTURE_CUBE_MAP,M);let Ae;if(Se){F&&ve&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Qe,xe.width,xe.height);for(let oe=0;oe<6;oe++){Ae=Me[oe].mipmaps;for(let fe=0;fe<Ae.length;fe++){const ae=Ae[fe];M.format!==Mr?de!==null?F?ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe,0,0,ae.width,ae.height,de,ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe,Qe,ae.width,ae.height,0,ae.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe,0,0,ae.width,ae.height,de,Xe,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe,Qe,ae.width,ae.height,0,de,Xe,ae.data)}}}else{if(Ae=M.mipmaps,F&&ve){Ae.length>0&&Ee++;const oe=Ke(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Qe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Oe){F?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Me[oe].width,Me[oe].height,de,Xe,Me[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Qe,Me[oe].width,Me[oe].height,0,de,Xe,Me[oe].data);for(let fe=0;fe<Ae.length;fe++){const je=Ae[fe].image[oe].image;F?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe+1,0,0,je.width,je.height,de,Xe,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe+1,Qe,je.width,je.height,0,de,Xe,je.data)}}else{F?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,de,Xe,Me[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Qe,de,Xe,Me[oe]);for(let fe=0;fe<Ae.length;fe++){const ae=Ae[fe];F?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe+1,0,0,de,Xe,ae.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe+1,Qe,de,Xe,ae.image[oe])}}}p(M)&&v(n.TEXTURE_CUBE_MAP),me.__version=Q.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ye(P,M,G,Y,Q,me){const ce=s.convert(G.format,G.colorSpace),te=s.convert(G.type),re=x(G.internalFormat,ce,te,G.normalized,G.colorSpace),Se=i.get(M),Oe=i.get(G);if(Oe.__renderTarget=M,!Se.__hasExternalTextures){const Me=Math.max(1,M.width>>me),xe=Math.max(1,M.height>>me);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,me,re,Me,xe,M.depth,0,ce,te,null):t.texImage2D(Q,me,re,Me,xe,0,ce,te,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Je(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,Q,Oe.__webglTexture,0,Pe(M)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,Q,Oe.__webglTexture,me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(P,M,G){if(n.bindRenderbuffer(n.RENDERBUFFER,P),M.depthBuffer){const Y=M.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,me=E(M.stencilBuffer,Q),ce=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Je(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe(M),me,M.width,M.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe(M),me,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,me,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,P)}else{const Y=M.textures;for(let Q=0;Q<Y.length;Q++){const me=Y[Q],ce=s.convert(me.format,me.colorSpace),te=s.convert(me.type),re=x(me.internalFormat,ce,te,me.normalized,me.colorSpace);Je(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe(M),re,M.width,M.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe(M),re,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,re,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(P,M,G){const Y=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(M.depthTexture);if(Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,M.depthTexture.addEventListener("dispose",w)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),We(n.TEXTURE_CUBE_MAP,M.depthTexture);const Se=s.convert(M.depthTexture.format),Oe=s.convert(M.depthTexture.type);let Me;M.depthTexture.format===Ms?Me=n.DEPTH_COMPONENT24:M.depthTexture.format===Oo&&(Me=n.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Me,M.width,M.height,0,Se,Oe,null)}}else V(M.depthTexture,0);const me=Q.__webglTexture,ce=Pe(M),te=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,re=M.depthTexture.format===Oo?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ms)Je(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,te,me,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,re,te,me,0);else if(M.depthTexture.format===Oo)Je(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,te,me,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,re,te,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(P){const M=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const Y=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=Y}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let Y=0;Y<6;Y++)Fe(M.__webglFramebuffer[Y],P,Y);else{const Y=P.texture.mipmaps;Y&&Y.length>0?Fe(M.__webglFramebuffer[0],P,0):Fe(M.__webglFramebuffer,P,0)}else if(G){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=n.createRenderbuffer(),Ue(M.__webglDepthbuffer[Y],P,!1);else{const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=M.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,me)}}else{const Y=P.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Ue(M.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,me)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(P,M,G){const Y=i.get(P);M!==void 0&&ye(Y.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&ee(P)}function le(P){const M=P.texture,G=i.get(P),Y=i.get(M);P.addEventListener("dispose",y);const Q=P.textures,me=P.isWebGLCubeRenderTarget===!0,ce=Q.length>1;if(ce||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=M.version,o.memory.textures++),me){G.__webglFramebuffer=[];for(let te=0;te<6;te++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[te]=[];for(let re=0;re<M.mipmaps.length;re++)G.__webglFramebuffer[te][re]=n.createFramebuffer()}else G.__webglFramebuffer[te]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let te=0;te<M.mipmaps.length;te++)G.__webglFramebuffer[te]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(ce)for(let te=0,re=Q.length;te<re;te++){const Se=i.get(Q[te]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Je(P)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let te=0;te<Q.length;te++){const re=Q[te];G.__webglColorRenderbuffer[te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[te]);const Se=s.convert(re.format,re.colorSpace),Oe=s.convert(re.type),Me=x(re.internalFormat,Se,Oe,re.normalized,re.colorSpace,P.isXRRenderTarget===!0),xe=Pe(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,Me,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,G.__webglColorRenderbuffer[te])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(me){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),We(n.TEXTURE_CUBE_MAP,M);for(let te=0;te<6;te++)if(M.mipmaps&&M.mipmaps.length>0)for(let re=0;re<M.mipmaps.length;re++)ye(G.__webglFramebuffer[te][re],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,re);else ye(G.__webglFramebuffer[te],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);p(M)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let te=0,re=Q.length;te<re;te++){const Se=Q[te],Oe=i.get(Se);let Me=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Me=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,Oe.__webglTexture),We(Me,Se),ye(G.__webglFramebuffer,P,Se,n.COLOR_ATTACHMENT0+te,Me,0),p(Se)&&v(Me)}t.unbindTexture()}else{let te=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(te=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,Y.__webglTexture),We(te,M),M.mipmaps&&M.mipmaps.length>0)for(let re=0;re<M.mipmaps.length;re++)ye(G.__webglFramebuffer[re],P,M,n.COLOR_ATTACHMENT0,te,re);else ye(G.__webglFramebuffer,P,M,n.COLOR_ATTACHMENT0,te,0);p(M)&&v(te),t.unbindTexture()}P.depthBuffer&&ee(P)}function D(P){const M=P.textures;for(let G=0,Y=M.length;G<Y;G++){const Q=M[G];if(p(Q)){const me=S(P),ce=i.get(Q).__webglTexture;t.bindTexture(me,ce),v(me),t.unbindTexture()}}}const he=[],Ge=[];function ke(P){if(P.samples>0){if(Je(P)===!1){const M=P.textures,G=P.width,Y=P.height;let Q=n.COLOR_BUFFER_BIT;const me=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(P),te=M.length>1;if(te)for(let Se=0;Se<M.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const re=P.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Se=0;Se<M.length;Se++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),te){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[Se]);const Oe=i.get(M[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Oe,0)}n.blitFramebuffer(0,0,G,Y,0,0,G,Y,Q,n.NEAREST),l===!0&&(he.length=0,Ge.length=0,he.push(n.COLOR_ATTACHMENT0+Se),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(he.push(me),Ge.push(me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ge)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),te)for(let Se=0;Se<M.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,ce.__webglColorRenderbuffer[Se]);const Oe=i.get(M[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,Oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){const M=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Pe(P){return Math.min(r.maxSamples,P.samples)}function Je(P){const M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function O(P){const M=o.render.frame;c.get(P)!==M&&(c.set(P,M),P.update())}function ot(P,M){const G=P.colorSpace,Y=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Od&&G!==Vs&&(gt.getTransfer(G)===Tt?(Y!==Mr||Q!==Fi)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):xt("WebGLTextures: Unsupported texture color space:",G)),M}function Ke(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=j,this.resetTextureUnits=W,this.getTextureUnits=I,this.setTextureUnits=H,this.setTexture2D=V,this.setTexture2DArray=z,this.setTexture3D=R,this.setTextureCube=K,this.rebindTextures=se,this.setupRenderTarget=le,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function aN(n,e){function t(i,r=Vs){let s;const o=gt.getTransfer(r);if(i===Fi)return n.UNSIGNED_BYTE;if(i===Q0)return n.UNSIGNED_SHORT_4_4_4_4;if(i===e_)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yM)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===SM)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===vM)return n.BYTE;if(i===xM)return n.SHORT;if(i===rc)return n.UNSIGNED_SHORT;if(i===J0)return n.INT;if(i===Yr)return n.UNSIGNED_INT;if(i===kr)return n.FLOAT;if(i===qr)return n.HALF_FLOAT;if(i===MM)return n.ALPHA;if(i===EM)return n.RGB;if(i===Mr)return n.RGBA;if(i===Ms)return n.DEPTH_COMPONENT;if(i===Oo)return n.DEPTH_STENCIL;if(i===TM)return n.RED;if(i===t_)return n.RED_INTEGER;if(i===ta)return n.RG;if(i===n_)return n.RG_INTEGER;if(i===i_)return n.RGBA_INTEGER;if(i===$f||i===jf||i===Kf||i===Zf)if(o===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===$f)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Kf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===$f)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Kf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$m||i===jm||i===Km||i===Zm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===$m)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Km)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jm||i===Qm||i===eg||i===tg||i===ng||i===Id||i===ig)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Jm||i===Qm)return o===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===eg)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===tg)return s.COMPRESSED_R11_EAC;if(i===ng)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Id)return s.COMPRESSED_RG11_EAC;if(i===ig)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===rg||i===sg||i===og||i===ag||i===lg||i===ug||i===cg||i===fg||i===dg||i===hg||i===pg||i===mg||i===gg||i===_g)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===rg)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sg)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===og)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ag)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lg)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ug)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cg)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fg)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dg)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hg)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pg)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mg)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gg)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_g)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vg||i===xg||i===yg)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===vg)return o===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xg)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yg)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sg||i===Mg||i===Ud||i===Eg)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Sg)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Mg)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ud)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Eg)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sc?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const lN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new DM(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new $r({vertexShader:lN,fragmentShader:uN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gi(new mh(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fN extends la{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,h=null,m=null;const _=typeof XRWebGLBinding<"u",g=new cN,p={},v=t.getContextAttributes();let S=null,x=null;const E=[],T=[],w=new Ce;let y=null,A=null;const b=new Ui;b.viewport=new Wt;const L=new Ui;L.viewport=new Wt;const N=[b,L],W=new xb;let I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ne=E[J];return ne===void 0&&(ne=new op,E[J]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(J){let ne=E[J];return ne===void 0&&(ne=new op,E[J]=ne),ne.getGripSpace()},this.getHand=function(J){let ne=E[J];return ne===void 0&&(ne=new op,E[J]=ne),ne.getHandSpace()};function j(J){const ne=T.indexOf(J.inputSource);if(ne===-1)return;const _e=E[ne];_e!==void 0&&(_e.update(J.inputSource,J.frame,u||o),_e.dispatchEvent({type:J.type,data:J.inputSource}))}function B(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",V);for(let J=0;J<E.length;J++){const ne=T[J];ne!==null&&(T[J]=null,E[J].disconnect(ne))}I=null,H=null,g.reset();for(const J in p)delete p[J];if(e.setRenderTarget(S),h=null,f=null,d=null,r=null,x=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(w.width,w.height,!1),A!==null){const J=A.camera;J.fov=A.fov,J.zoom=A.zoom,J.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(J){u=J},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",B),r.addEventListener("inputsourceschange",V),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,$e=null,ye=null;v.depth&&(ye=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=v.stencil?Oo:Ms,$e=v.stencil?sc:Yr);const Ue={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ue),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new wr(f.textureWidth,f.textureHeight,{format:Mr,type:Fi,depthTexture:new ac(f.textureWidth,f.textureHeight,$e,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const _e={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new wr(h.framebufferWidth,h.framebufferHeight,{format:Mr,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),qe.setContext(r),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(J){for(let ne=0;ne<J.removed.length;ne++){const _e=J.removed[ne],$e=T.indexOf(_e);$e>=0&&(T[$e]=null,E[$e].disconnect(_e))}for(let ne=0;ne<J.added.length;ne++){const _e=J.added[ne];let $e=T.indexOf(_e);if($e===-1){for(let Ue=0;Ue<E.length;Ue++)if(Ue>=T.length){T.push(_e),$e=Ue;break}else if(T[Ue]===null){T[Ue]=_e,$e=Ue;break}if($e===-1)break}const ye=E[$e];ye&&ye.connect(_e)}}const z=new X,R=new X;function K(J,ne,_e){z.setFromMatrixPosition(ne.matrixWorld),R.setFromMatrixPosition(_e.matrixWorld);const $e=z.distanceTo(R),ye=ne.projectionMatrix.elements,Ue=_e.projectionMatrix.elements,Fe=ye[14]/(ye[10]-1),ee=ye[14]/(ye[10]+1),se=(ye[9]+1)/ye[5],le=(ye[9]-1)/ye[5],D=(ye[8]-1)/ye[0],he=(Ue[8]+1)/Ue[0],Ge=Fe*D,ke=Fe*he,Pe=$e/(-D+he),Je=Pe*-D;if(ne.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Je),J.translateZ(Pe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ye[10]===-1)J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const O=Fe+Pe,ot=ee+Pe,Ke=Ge-Je,P=ke+($e-Je),M=se*ee/ot*O,G=le*ee/ot*O;J.projectionMatrix.makePerspective(Ke,P,M,G,O,ot),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function pe(J,ne){ne===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ne.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ne=J.near,_e=J.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),W.near=L.near=b.near=ne,W.far=L.far=b.far=_e,(I!==W.near||H!==W.far)&&(r.updateRenderState({depthNear:W.near,depthFar:W.far}),I=W.near,H=W.far),W.layers.mask=J.layers.mask|6,b.layers.mask=W.layers.mask&-5,L.layers.mask=W.layers.mask&-3;const $e=J.parent,ye=W.cameras;pe(W,$e);for(let Ue=0;Ue<ye.length;Ue++)pe(ye[Ue],$e);ye.length===2?K(W,b,L):W.projectionMatrix.copy(b.projectionMatrix),A===null&&J.isPerspectiveCamera&&(A={camera:J,fov:J.fov,zoom:J.zoom}),we(J,W,$e)};function we(J,ne,_e){_e===null?J.matrix.copy(ne.matrixWorld):(J.matrix.copy(_e.matrixWorld),J.matrix.invert(),J.matrix.multiply(ne.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=wg*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(W)},this.getCameraTexture=function(J){return p[J]};let ze=null;function We(J,ne){if(c=ne.getViewerPose(u||o),m=ne,c!==null){const _e=c.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let $e=!1;_e.length!==W.cameras.length&&(W.cameras.length=0,$e=!0);for(let ee=0;ee<_e.length;ee++){const se=_e[ee];let le=null;if(h!==null)le=h.getViewport(se);else{const he=d.getViewSubImage(f,se);le=he.viewport,ee===0&&(e.setRenderTargetTextures(x,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(x))}let D=N[ee];D===void 0&&(D=new Ui,D.layers.enable(ee),D.viewport=new Wt,N[ee]=D),D.matrix.fromArray(se.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(se.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(le.x,le.y,le.width,le.height),ee===0&&(W.matrix.copy(D.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),$e===!0&&W.cameras.push(D)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const ee=d.getDepthInformation(_e[0]);ee&&ee.isValid&&ee.texture&&g.init(ee,r.renderState)}if(ye&&ye.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let ee=0;ee<_e.length;ee++){const se=_e[ee].camera;if(se){let le=p[se];le||(le=new DM,p[se]=le);const D=d.getCameraImage(se);le.sourceTexture=D}}}}for(let _e=0;_e<E.length;_e++){const $e=T[_e],ye=E[_e];$e!==null&&ye!==void 0&&ye.update($e,ne,u||o)}ze&&ze(J,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),m=null}const qe=new YM;qe.setAnimationLoop(We),this.setAnimationLoop=function(J){ze=J},this.dispose=function(){}}}const dN=new $t,QM=new nt;QM.set(-1,0,0,0,1,0,0,0,1);function hN(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,GM(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,v,S,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),c(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&h(g,p,x)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,S):p.isSpriteMaterial?u(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Mi&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Mi&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=e.get(p),S=v.envMap,x=v.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(dN.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(QM),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=S*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mi&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function pN(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){const T=E.program;i.uniformBlockBinding(x,T)}function u(x,E){let T=r[x.id];T===void 0&&(g(x),T=c(x),r[x.id]=T,x.addEventListener("dispose",v));const w=E.program;i.updateUBOMapping(x,w);const y=e.render.frame;s[x.id]!==y&&(f(x),s[x.id]=y)}function c(x){const E=d();x.__bindingPointIndex=E;const T=n.createBuffer(),w=x.__size,y=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,w,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,T),T}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const E=r[x.id],T=x.uniforms,w=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let y=0,A=T.length;y<A;y++){const b=T[y];if(Array.isArray(b))for(let L=0,N=b.length;L<N;L++)h(b[L],y,L,w);else h(b,y,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(x,E,T,w){if(_(x,E,T,w)===!0){const y=x.__offset,A=x.value;if(Array.isArray(A)){let b=0;for(let L=0;L<A.length;L++){const N=A[L],W=p(N);m(N,x.__data,b),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(b+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,x.__data)}}function m(x,E,T){typeof x=="number"||typeof x=="boolean"?E[0]=x:x.isMatrix3?(E[0]=x.elements[0],E[1]=x.elements[1],E[2]=x.elements[2],E[3]=0,E[4]=x.elements[3],E[5]=x.elements[4],E[6]=x.elements[5],E[7]=0,E[8]=x.elements[6],E[9]=x.elements[7],E[10]=x.elements[8],E[11]=0):ArrayBuffer.isView(x)?E.set(new x.constructor(x.buffer,x.byteOffset,E.length)):x.toArray(E,T)}function _(x,E,T,w){const y=x.value,A=E+"_"+T;if(w[A]===void 0)return typeof y=="number"||typeof y=="boolean"?w[A]=y:ArrayBuffer.isView(y)?w[A]=y.slice():w[A]=y.clone(),!0;{const b=w[A];if(typeof y=="number"||typeof y=="boolean"){if(b!==y)return w[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(b.equals(y)===!1)return b.copy(y),!0}}return!1}function g(x){const E=x.uniforms;let T=0;const w=16;for(let A=0,b=E.length;A<b;A++){const L=Array.isArray(E[A])?E[A]:[E[A]];for(let N=0,W=L.length;N<W;N++){const I=L[N],H=Array.isArray(I.value)?I.value:[I.value];for(let j=0,B=H.length;j<B;j++){const V=H[j],z=p(V),R=T%w,K=R%z.boundary,pe=R+K;T+=K,pe!==0&&w-pe<z.storage&&(T+=w-pe),I.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=T,T+=z.storage}}}const y=T%w;return y>0&&(T+=w-y),x.__size=T,x.__cache={},this}function p(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(E.boundary=16,E.storage=x.byteLength):et("WebGLRenderer: Unsupported uniform value type.",x),E}function v(x){const E=x.target;E.removeEventListener("dispose",v);const T=o.indexOf(E.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function S(){for(const x in r)n.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:u,dispose:S}}const mN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Lr=null;function gN(){return Lr===null&&(Lr=new EC(mN,16,16,ta,qr),Lr.name="DFG_LUT",Lr.minFilter=qn,Lr.magFilter=qn,Lr.wrapS=fs,Lr.wrapT=fs,Lr.generateMipmaps=!1,Lr.needsUpdate=!0),Lr}class _N{constructor(e={}){const{canvas:t=ZA(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Fi}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const _=h,g=new Set([i_,n_,t_]),p=new Set([Fi,Yr,rc,sc,Q0,e_]),v=new Uint32Array(4),S=new Int32Array(4),x=new X;let E=null,T=null;const w=[],y=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let L=!1,N=null,W=null,I=null,H=null;this._outputColorSpace=Di;let j=0,B=0,V=null,z=-1,R=null;const K=new Wt,pe=new Wt;let we=null;const ze=new dt(0);let We=0,qe=t.width,J=t.height,ne=1,_e=null,$e=null;const ye=new Wt(0,0,qe,J),Ue=new Wt(0,0,qe,J);let Fe=!1;const ee=new l_;let se=!1,le=!1;const D=new $t,he=new X,Ge=new Wt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function Je(){return V===null?ne:1}let O=i;function ot(C,k){return t.getContext(C,k)}let Ke,P,M,G,Y,Q,me,ce,te,re,Se,Oe,Me,xe,de,Xe,Qe,F,ve,ie,Ee,Ae,oe;try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Z0}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",Ze,!1),O===null){const k="webgl2";if(O=ot(k,C),O===null)throw ot(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}fe()}catch(C){throw t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",Ze,!1),xt("WebGLRenderer: "+C.message),C}function fe(){Ke=new gP(O),Ke.init(),Ee=new aN(O,Ke),P=new oP(O,Ke,e,Ee),M=new sN(O,Ke),P.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),W=O.createFramebuffer(),I=O.createFramebuffer(),H=O.createFramebuffer(),G=new xP(O),Y=new XL,Q=new oN(O,Ke,M,Y,P,Ee,G),me=new mP(b),ce=new Sb(O),Ae=new rP(O,ce),te=new _P(O,ce,G,Ae),re=new SP(O,te,ce,Ae,G),F=new yP(O,P,Q),de=new aP(Y),Se=new WL(b,me,Ke,P,Ae,de),Oe=new hN(b,Y),Me=new qL,xe=new QL(Ke),Qe=new iP(b,me,M,re,m,l),Xe=new rN(b,re,P),oe=new pN(O,G,P,M),ve=new sP(O,Ke,G),ie=new vP(O,Ke,G),G.programs=Se.programs,b.capabilities=P,b.extensions=Ke,b.properties=Y,b.renderLists=Me,b.shadowMap=Xe,b.state=M,b.info=G}_!==Fi&&(A=new EP(_,t.width,t.height,a,r,s));const ae=new fN(b,O);this.xr=ae,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=Ke.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ke.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(C){C!==void 0&&(ne=C,this.setSize(qe,J,!1))},this.getSize=function(C){return C.set(qe,J)},this.setSize=function(C,k,Z=!0){if(ae.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}qe=C,J=k,t.width=Math.floor(C*ne),t.height=Math.floor(k*ne),Z===!0&&(t.style.width=C+"px",t.style.height=k+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(qe*ne,J*ne).floor()},this.setDrawingBufferSize=function(C,k,Z){qe=C,J=k,ne=Z,t.width=Math.floor(C*Z),t.height=Math.floor(k*Z),this.setViewport(0,0,C,k)},this.setEffects=function(C){if(_===Fi){xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let k=0;k<C.length;k++)if(C[k].isOutputPass===!0){et("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(K)},this.getViewport=function(C){return C.copy(ye)},this.setViewport=function(C,k,Z,q){C.isVector4?ye.set(C.x,C.y,C.z,C.w):ye.set(C,k,Z,q),M.viewport(K.copy(ye).multiplyScalar(ne).round())},this.getScissor=function(C){return C.copy(Ue)},this.setScissor=function(C,k,Z,q){C.isVector4?Ue.set(C.x,C.y,C.z,C.w):Ue.set(C,k,Z,q),M.scissor(pe.copy(Ue).multiplyScalar(ne).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(C){M.setScissorTest(Fe=C)},this.setOpaqueSort=function(C){_e=C},this.setTransparentSort=function(C){$e=C},this.getClearColor=function(C){return C.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(C=!0,k=!0,Z=!0){let q=0;if(C){let $=!1;if(V!==null){const Te=V.texture.format;$=g.has(Te)}if($){const Te=V.texture.type,Ne=p.has(Te),Re=Qe.getClearColor(),Ve=Qe.getClearAlpha(),Ye=Re.r,it=Re.g,ft=Re.b;Ne?(v[0]=Ye,v[1]=it,v[2]=ft,v[3]=Ve,O.clearBufferuiv(O.COLOR,0,v)):(S[0]=Ye,S[1]=it,S[2]=ft,S[3]=Ve,O.clearBufferiv(O.COLOR,0,S))}else q|=O.COLOR_BUFFER_BIT}k&&(q|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),N=C},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",Ze,!1),Qe.dispose(),Me.dispose(),xe.dispose(),Y.dispose(),me.dispose(),re.dispose(),Ae.dispose(),oe.dispose(),Se.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Ut),ae.removeEventListener("sessionend",Ct),mt.stop()};function je(C){C.preventDefault(),cx("WebGLRenderer: Context Lost."),L=!0}function ue(){cx("WebGLRenderer: Context Restored."),L=!1;const C=G.autoReset,k=Xe.enabled,Z=Xe.autoUpdate,q=Xe.needsUpdate,$=Xe.type;fe(),G.autoReset=C,Xe.enabled=k,Xe.autoUpdate=Z,Xe.needsUpdate=q,Xe.type=$}function Ze(C){xt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Be(C){const k=C.target;k.removeEventListener("dispose",Be),tt(k)}function tt(C){sn(C),Y.remove(C)}function sn(C){const k=Y.get(C).programs;k!==void 0&&(k.forEach(function(Z){Se.releaseProgram(Z)}),C.isShaderMaterial&&Se.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,Z,q,$,Te){k===null&&(k=ke);const Ne=$.isMesh&&$.matrixWorld.determinantAffine()<0,Re=yn(C,k,Z,q,$);M.setMaterial(q,Ne);let Ve=Z.index,Ye=1;if(q.wireframe===!0){if(Ve=te.getWireframeAttribute(Z),Ve===void 0)return;Ye=2}const it=Z.drawRange,ft=Z.attributes.position;let He=it.start*Ye,St=(it.start+it.count)*Ye;Te!==null&&(He=Math.max(He,Te.start*Ye),St=Math.min(St,(Te.start+Te.count)*Ye)),Ve!==null?(He=Math.max(He,0),St=Math.min(St,Ve.count)):ft!=null&&(He=Math.max(He,0),St=Math.min(St,ft.count));const an=St-He;if(an<0||an===1/0)return;Ae.setup($,q,Re,Z,Ve);let Ot,bt=ve;if(Ve!==null&&(Ot=ce.get(Ve),bt=ie,bt.setIndex(Ot)),$.isMesh)q.wireframe===!0?(M.setLineWidth(q.wireframeLinewidth*Je()),bt.setMode(O.LINES)):bt.setMode(O.TRIANGLES);else if($.isLine){let Fn=q.linewidth;Fn===void 0&&(Fn=1),M.setLineWidth(Fn*Je()),$.isLineSegments?bt.setMode(O.LINES):$.isLineLoop?bt.setMode(O.LINE_LOOP):bt.setMode(O.LINE_STRIP)}else $.isPoints?bt.setMode(O.POINTS):$.isSprite&&bt.setMode(O.TRIANGLES);if($.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))bt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Fn=$._multiDrawStarts,Le=$._multiDrawCounts,Jn=$._multiDrawCount,vt=Ve?ce.get(Ve).bytesPerElement:1,Zi=Y.get(q).currentProgram.getUniforms();for(let br=0;br<Jn;br++)Zi.setValue(O,"_gl_DrawID",br),bt.render(Fn[br]/vt,Le[br])}else if($.isInstancedMesh)bt.renderInstances(He,an,$.count);else if(Z.isInstancedBufferGeometry){const Fn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Le=Math.min(Z.instanceCount,Fn);bt.renderInstances(He,an,Le)}else bt.render(He,an)};function at(C,k,Z,q){N!==null&&C.isNodeMaterial&&N.setObject(q,C),se===!0&&de.setState(C,Z,!1),C.transparent===!0&&C.side===as&&C.forceSinglePass===!1?(C.side=Mi,C.needsUpdate=!0,Kt(C,k,q),C.side=Qo,C.needsUpdate=!0,Kt(C,k,q),C.side=as):Kt(C,k,q)}this.compile=function(C,k,Z=null){Z===null&&(Z=C),N!==null&&N.renderStart(C,k,Z),T=xe.get(Z),T.init(k),y.push(T),Z.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(T.pushLight($),$.castShadow&&T.pushShadow($))}),C!==Z&&C.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(T.pushLight($),$.castShadow&&T.pushShadow($))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),le=this.localClippingEnabled,se=de.init(this.clippingPlanes,le),se===!0&&de.setGlobalState(this.clippingPlanes,k),N!==null&&Xe.render(T.state.shadowsArray,Z,k);const q=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Te=$.material;if(Te)if(Array.isArray(Te))for(let Ne=0;Ne<Te.length;Ne++){const Re=Te[Ne];at(Re,Z,k,$),q.add(Re)}else at(Te,Z,k,$),q.add(Te)}),T=y.pop(),N!==null&&N.renderEnd(),q},this.compileAsync=function(C,k,Z=null){const q=this.compile(C,k,Z);return new Promise($=>{function Te(){if(q.forEach(function(Ne){const Ve=Y.get(Ne).currentProgram;(Ve===void 0||Ve.isReady())&&q.delete(Ne)}),q.size===0){$(C);return}setTimeout(Te,10)}Ke.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let It=null;function xn(C){It&&It(C)}function Ut(){mt.stop()}function Ct(){mt.start()}const mt=new YM;mt.setAnimationLoop(xn),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(C){It=C,ae.setAnimationLoop(C),C===null?mt.stop():mt.start()},ae.addEventListener("sessionstart",Ut),ae.addEventListener("sessionend",Ct),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(C,k);const Z=ae.enabled===!0&&ae.isPresenting===!0,q=A!==null&&(V===null||Z)&&A.begin(b,V);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(k),k=ae.getCamera()),C.isScene===!0&&C.onBeforeRender(b,C,k,V),T=xe.get(C,y.length),T.init(k),T.state.textureUnits=Q.getTextureUnits(),y.push(T),D.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ee.setFromProjectionMatrix(D,Br,k.reversedDepth),le=this.localClippingEnabled,se=de.init(this.clippingPlanes,le),E=Me.get(C,w.length),E.init(),w.push(E),ae.enabled===!0&&ae.isPresenting===!0){const Ne=b.xr.getDepthSensingMesh();Ne!==null&&Kn(Ne,k,-1/0,b.sortObjects)}Kn(C,k,0,b.sortObjects),E.finish(),N!==null&&N.updateLights(T.state.lightsArray),b.sortObjects===!0&&E.sort(_e,$e),Pe=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Pe&&Qe.addToRenderList(E,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&de.beginShadows();const $=T.state.shadowsArray;if(Xe.render($,C,k),se===!0&&de.endShadows(),(q&&A.hasRenderPass())===!1){const Ne=E.opaque,Re=E.transmissive;if(T.setupLights(),k.isArrayCamera){const Ve=k.cameras;if(Re.length>0)for(let Ye=0,it=Ve.length;Ye<it;Ye++){const ft=Ve[Ye];On(Ne,Re,C,ft)}Pe&&Qe.render(C);for(let Ye=0,it=Ve.length;Ye<it;Ye++){const ft=Ve[Ye];Lt(E,C,ft,ft.viewport)}}else Re.length>0&&On(Ne,Re,C,k),Pe&&Qe.render(C),Lt(E,C,k)}V!==null&&B===0&&(Q.updateMultisampleRenderTarget(V),Q.updateRenderTargetMipmap(V)),q&&A.end(b),C.isScene===!0&&C.onAfterRender(b,C,k),Ae.resetDefaultState(),z=-1,R=null,y.pop(),y.length>0?(T=y[y.length-1],Q.setTextureUnits(T.state.textureUnits),se===!0&&de.setGlobalState(b.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?E=w[w.length-1]:E=null,N!==null&&N.renderEnd()};function Kn(C,k,Z,q){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLightProbeGrid)T.pushLightProbeGrid(C);else if(C.isLight)T.pushLight(C),C.castShadow&&T.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(ee)){q&&Ge.setFromMatrixPosition(C.matrixWorld).applyMatrix4(D);const Ne=re.update(C),Re=C.material;Re.visible&&E.push(C,Ne,Re,Z,Ge.z,null,k)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(ee))){const Ne=re.update(C),Re=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ge.copy(C.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Ge.copy(Ne.boundingSphere.center)),Ge.applyMatrix4(C.matrixWorld).applyMatrix4(D)),Array.isArray(Re)){const Ve=Ne.groups;for(let Ye=0,it=Ve.length;Ye<it;Ye++){const ft=Ve[Ye],He=Re[ft.materialIndex];He&&He.visible&&E.push(C,Ne,He,Z,Ge.z,ft,k)}}else Re.visible&&E.push(C,Ne,Re,Z,Ge.z,null,k)}}const Te=C.children;for(let Ne=0,Re=Te.length;Ne<Re;Ne++)Kn(Te[Ne],k,Z,q)}function Lt(C,k,Z,q){const{opaque:$,transmissive:Te,transparent:Ne}=C;T.setupLightsView(Z),se===!0&&de.setGlobalState(b.clippingPlanes,Z),q&&M.viewport(K.copy(q)),$.length>0&&Zn($,k,Z),Te.length>0&&Zn(Te,k,Z),Ne.length>0&&Zn(Ne,k,Z),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function On(C,k,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[q.id]===void 0){const He=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[q.id]=new wr(1,1,{generateMipmaps:!0,type:He?qr:Fi,minFilter:Uo,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}const Te=T.state.transmissionRenderTarget[q.id],Ne=q.viewport||K;Te.setSize(Ne.z*b.transmissionResolutionScale,Ne.w*b.transmissionResolutionScale);const Re=b.getRenderTarget(),Ve=b.getActiveCubeFace(),Ye=b.getActiveMipmapLevel();b.setRenderTarget(Te),b.getClearColor(ze),We=b.getClearAlpha(),We<1&&b.setClearColor(16777215,.5),b.clear(),Pe&&Qe.render(Z);const it=b.toneMapping;b.toneMapping=Wr;const ft=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),T.setupLightsView(q),se===!0&&de.setGlobalState(b.clippingPlanes,q),Zn(C,Z,q),Q.updateMultisampleRenderTarget(Te),Q.updateRenderTargetMipmap(Te),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let St=0,an=k.length;St<an;St++){const Ot=k[St],{object:bt,geometry:Fn,material:Le,group:Jn}=Ot;if(Le.side===as&&bt.layers.test(q.layers)){const vt=Le.side;Le.side=Mi,Le.needsUpdate=!0,on(bt,Z,q,Fn,Le,Jn),Le.side=vt,Le.needsUpdate=!0,He=!0}}He===!0&&(Q.updateMultisampleRenderTarget(Te),Q.updateRenderTargetMipmap(Te))}b.setRenderTarget(Re,Ve,Ye),b.setClearColor(ze,We),ft!==void 0&&(q.viewport=ft),b.toneMapping=it}function Zn(C,k,Z){const q=k.isScene===!0?k.overrideMaterial:null;for(let $=0,Te=C.length;$<Te;$++){const Ne=C[$],{object:Re,geometry:Ve,group:Ye}=Ne;let it=Ne.material;it.allowOverride===!0&&q!==null&&(it=q),Re.layers.test(Z.layers)&&on(Re,k,Z,Ve,it,Ye)}}function on(C,k,Z,q,$,Te){N!==null&&$.isNodeMaterial&&N.setObject(C,$),C.onBeforeRender(b,k,Z,q,$,Te),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(b,k,Z,q,C,Te),$.transparent===!0&&$.side===as&&$.forceSinglePass===!1?($.side=Mi,$.needsUpdate=!0,b.renderBufferDirect(Z,k,q,$,C,Te),$.side=Qo,$.needsUpdate=!0,b.renderBufferDirect(Z,k,q,$,C,Te),$.side=as):b.renderBufferDirect(Z,k,q,$,C,Te),C.onAfterRender(b,k,Z,q,$,Te)}function Kt(C,k,Z){k.isScene!==!0&&(k=ke);const q=Y.get(C),$=T.state.lights,Te=T.state.shadowsArray,Ne=$.state.version,Re=Se.getParameters(C,$.state,Te,k,Z,T.state.lightProbeGridArray),Ve=Se.getProgramCacheKey(Re);let Ye=q.programs;q.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?k.environment:null,q.fog=k.fog;const it=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;q.envMap=me.get(C.envMap||q.environment,it),q.envMapRotation=q.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,Ye===void 0&&(C.addEventListener("dispose",Be),Ye=new Map,q.programs=Ye);let ft=Ye.get(Ve);if(ft!==void 0){if(q.currentProgram===ft&&q.lightsStateVersion===Ne)return Cr(C,Re),ft}else Re.uniforms=Se.getUniforms(C),N!==null&&C.isNodeMaterial&&N.build(C,Z,Re),C.onBeforeCompile(Re,b),ft=Se.acquireProgram(Re,Ve),Ye.set(Ve,ft),q.uniforms=Re.uniforms;const He=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(He.clippingPlanes=de.uniform),Cr(C,Re),q.needsLights=Ki(C),q.lightsStateVersion=Ne,q.needsLights&&(He.ambientLightColor.value=$.state.ambient,He.lightProbe.value=$.state.probe,He.sunLights.value=$.state.sun,He.sunLightShadows.value=$.state.sunShadow,He.directionalLights.value=$.state.directional,He.directionalLightShadows.value=$.state.directionalShadow,He.spotLights.value=$.state.spot,He.spotLightShadows.value=$.state.spotShadow,He.rectAreaLights.value=$.state.rectArea,He.ltc_1.value=$.state.rectAreaLTC1,He.ltc_2.value=$.state.rectAreaLTC2,He.pointLights.value=$.state.point,He.pointLightShadows.value=$.state.pointShadow,He.hemisphereLights.value=$.state.hemi,He.sunShadowMatrix.value=$.state.sunShadowMatrix,He.sunShadowCascade.value=$.state.sunShadowCascade,He.directionalShadowMatrix.value=$.state.directionalShadowMatrix,He.spotLightMatrix.value=$.state.spotLightMatrix,He.spotLightMap.value=$.state.spotLightMap,He.pointShadowMatrix.value=$.state.pointShadowMatrix),q.lightProbeGrid=T.state.lightProbeGridArray.length>0,q.currentProgram=ft,q.uniformsList=null,ft}function dn(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=Jf.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function Cr(C,k){const Z=Y.get(C);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.batchingColor=k.batchingColor,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function ca(C,k){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;x.setFromMatrixPosition(k.matrixWorld);for(let Z=0,q=C.length;Z<q;Z++){const $=C[Z];if($.texture!==null&&$.boundingBox.containsPoint(x))return $}return null}function yn(C,k,Z,q,$){k.isScene!==!0&&(k=ke),Q.resetTextureUnits();const Te=k.fog,Ne=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?k.environment:null,Re=V===null?b.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:gt.workingColorSpace,Ve=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ye=me.get(q.envMap||Ne,Ve),it=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ft=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),He=!!Z.morphAttributes.position,St=!!Z.morphAttributes.normal,an=!!Z.morphAttributes.color;let Ot=Wr;q.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Ot=b.toneMapping);const bt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Fn=bt!==void 0?bt.length:0,Le=Y.get(q),Jn=T.state.lights;if(se===!0&&(le===!0||C!==R)){const Nt=C===R&&q.id===z;de.setState(q,C,Nt)}let vt=!1;q.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Jn.state.version||Le.outputColorSpace!==Re||$.isBatchedMesh&&Le.batching===!1||!$.isBatchedMesh&&Le.batching===!0||$.isBatchedMesh&&Le.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Le.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Le.instancing===!1||!$.isInstancedMesh&&Le.instancing===!0||$.isSkinnedMesh&&Le.skinning===!1||!$.isSkinnedMesh&&Le.skinning===!0||$.isInstancedMesh&&Le.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Le.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Le.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Le.instancingMorph===!1&&$.morphTexture!==null||Le.envMap!==Ye||q.fog===!0&&Le.fog!==Te||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==de.numPlanes||Le.numIntersection!==de.numIntersection)||Le.vertexAlphas!==it||Le.vertexTangents!==ft||Le.morphTargets!==He||Le.morphNormals!==St||Le.morphColors!==an||Le.toneMapping!==Ot||Le.morphTargetsCount!==Fn||!!Le.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Le.__version=q.version);let Zi=Le.currentProgram;vt===!0&&(Zi=Kt(q,k,$),N&&q.isNodeMaterial&&N.onUpdateProgram(q,Zi,Le));let br=!1,As=!1,da=!1;const At=Zi.getUniforms(),en=Le.uniforms;if(M.useProgram(Zi.program)&&(br=!0,As=!0,da=!0),q.id!==z&&(z=q.id,As=!0),Le.needsLights){const Nt=ca(T.state.lightProbeGridArray,$);Le.lightProbeGrid!==Nt&&(Le.lightProbeGrid=Nt,As=!0)}if(br||R!==C){M.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),At.setValue(O,"projectionMatrix",C.projectionMatrix),At.setValue(O,"viewMatrix",C.matrixWorldInverse);const bs=At.map.cameraPosition;bs!==void 0&&bs.setValue(O,he.setFromMatrixPosition(C.matrixWorld)),P.logarithmicDepthBuffer&&At.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&At.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,As=!0,da=!0)}if(Le.needsLights&&(Jn.state.sunShadowMap.length>0&&At.setValue(O,"sunShadowMap",Jn.state.sunShadowMap,Q),Jn.state.directionalShadowMap.length>0&&At.setValue(O,"directionalShadowMap",Jn.state.directionalShadowMap,Q),Jn.state.spotShadowMap.length>0&&At.setValue(O,"spotShadowMap",Jn.state.spotShadowMap,Q),Jn.state.pointShadowMap.length>0&&At.setValue(O,"pointShadowMap",Jn.state.pointShadowMap,Q)),$.isSkinnedMesh){At.setOptional(O,$,"bindMatrix"),At.setOptional(O,$,"bindMatrixInverse");const Nt=$.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),At.setValue(O,"boneTexture",Nt.boneTexture,Q))}$.isBatchedMesh&&(At.setOptional(O,$,"batchingTexture"),At.setValue(O,"batchingTexture",$._matricesTexture,Q),At.setOptional(O,$,"batchingIdTexture"),At.setValue(O,"batchingIdTexture",$._indirectTexture,Q),At.setOptional(O,$,"batchingColorTexture"),$._colorsTexture!==null&&At.setValue(O,"batchingColorTexture",$._colorsTexture,Q));const Cs=Z.morphAttributes;if((Cs.position!==void 0||Cs.normal!==void 0||Cs.color!==void 0)&&F.update($,Z,Zi),(As||Le.receiveShadow!==$.receiveShadow)&&(Le.receiveShadow=$.receiveShadow,At.setValue(O,"receiveShadow",$.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&k.environment!==null&&(en.envMapIntensity.value=k.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=gN()),As){if(At.setValue(O,"toneMappingExposure",b.toneMappingExposure),Le.needsLights&&Qt(en,da),Te&&q.fog===!0&&Oe.refreshFogUniforms(en,Te),Oe.refreshMaterialUniforms(en,q,ne,J,T.state.transmissionRenderTarget[C.id]),Le.needsLights&&Le.lightProbeGrid){const Nt=Le.lightProbeGrid;en.probesSH.value=Nt.texture,en.probesMin.value.copy(Nt.boundingBox.min),en.probesMax.value.copy(Nt.boundingBox.max),en.probesResolution.value.copy(Nt.resolution)}Jf.upload(O,dn(Le),en,Q)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Jf.upload(O,dn(Le),en,Q),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&At.setValue(O,"center",$.center),At.setValue(O,"modelViewMatrix",$.modelViewMatrix),At.setValue(O,"normalMatrix",$.normalMatrix),At.setValue(O,"modelMatrix",$.matrixWorld),q.uniformsGroups!==void 0){const Nt=q.uniformsGroups;for(let bs=0,ha=Nt.length;bs<ha;bs++){const Y_=Nt[bs];oe.update(Y_,Zi),oe.bind(Y_,Zi)}}return Zi}function Qt(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.sunLights.needsUpdate=k,C.sunLightShadows.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function Ki(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(C,k,Z){const q=Y.get(C);q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Y.get(C.texture).__webglTexture=k,Y.get(C.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,k){const Z=Y.get(C);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,Z=0){V=C,j=k,B=Z;let q=null,$=!1,Te=!1;if(C){const Re=Y.get(C);if(Re.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(O.FRAMEBUFFER,Re.__webglFramebuffer),K.copy(C.viewport),pe.copy(C.scissor),we=C.scissorTest,M.viewport(K),M.scissor(pe),M.setScissorTest(we),z=-1;return}else if(Re.__webglFramebuffer===void 0)Q.setupRenderTarget(C);else if(Re.__hasExternalTextures)Q.rebindTextures(C,Y.get(C.texture).__webglTexture,Y.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const it=C.depthTexture;if(Re.__boundDepthTexture!==it){if(it!==null&&Y.has(it)&&(C.width!==it.image.width||C.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(C)}}const Ve=C.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Te=!0);const Ye=Y.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ye[k])?q=Ye[k][Z]:q=Ye[k],$=!0):C.samples>0&&Q.useMultisampledRTT(C)===!1?q=Y.get(C).__webglMultisampledFramebuffer:Array.isArray(Ye)?q=Ye[Z]:q=Ye,K.copy(C.viewport),pe.copy(C.scissor),we=C.scissorTest}else K.copy(ye).multiplyScalar(ne).floor(),pe.copy(Ue).multiplyScalar(ne).floor(),we=Fe;if(Z!==0&&(q=W),M.bindFramebuffer(O.FRAMEBUFFER,q)&&M.drawBuffers(C,q),M.viewport(K),M.scissor(pe),M.setScissorTest(we),$){const Re=Y.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,Re.__webglTexture,Z)}else if(Te){const Re=k;for(let Ve=0;Ve<C.textures.length;Ve++){const Ye=Y.get(C.textures[Ve]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ve,Ye.__webglTexture,Z,Re)}}else if(C!==null&&Z!==0){const Re=Y.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Re.__webglTexture,Z)}z=-1};function fa(C){const k=Y.get(C);return(k.__readFormat!==C.format||k.__readType!==C.type)&&(k.__readFormat=C.format,k.__readType=C.type,k.__formatReadable=P.textureFormatReadable(C.format),k.__typeReadable=P.textureTypeReadable(C.type)),k}this.readRenderTargetPixels=function(C,k,Z,q,$,Te,Ne,Re=0){if(!(C&&C.isWebGLRenderTarget)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ve=Ve[Ne]),Ve){M.bindFramebuffer(O.FRAMEBUFFER,Ve);try{const Ye=C.textures[Re],it=Ye.format,ft=Ye.type;C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Re);const He=fa(Ye);if(He.__formatReadable===!1){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-q&&Z>=0&&Z<=C.height-$&&O.readPixels(k,Z,q,$,Ee.convert(it),Ee.convert(ft),Te)}finally{const Ye=V!==null?Y.get(V).__webglFramebuffer:null;M.bindFramebuffer(O.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(C,k,Z,q,$,Te,Ne,Re=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ve=Ve[Ne]),Ve)if(k>=0&&k<=C.width-q&&Z>=0&&Z<=C.height-$){M.bindFramebuffer(O.FRAMEBUFFER,Ve);const Ye=C.textures[Re],it=Ye.format,ft=Ye.type;C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Re);const He=fa(Ye);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const St=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,St),O.bufferData(O.PIXEL_PACK_BUFFER,Te.byteLength,O.STREAM_READ),O.readPixels(k,Z,q,$,Ee.convert(it),Ee.convert(ft),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const an=V!==null?Y.get(V).__webglFramebuffer:null;M.bindFramebuffer(O.FRAMEBUFFER,an);const Ot=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await JA(O,Ot,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,St),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Te),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(St),O.deleteSync(Ot),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,k=null,Z=0){const q=Math.pow(2,-Z),$=Math.floor(C.image.width*q),Te=Math.floor(C.image.height*q),Ne=k!==null?k.x:0,Re=k!==null?k.y:0;Q.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,Ne,Re,$,Te),M.unbindTexture()},this.copyTextureToTexture=function(C,k,Z=null,q=null,$=0,Te=0){let Ne,Re,Ve,Ye,it,ft,He,St,an;const Ot=C.isCompressedTexture?C.mipmaps[Te]:C.image;if(Z!==null)Ne=Z.max.x-Z.min.x,Re=Z.max.y-Z.min.y,Ve=Z.isBox3?Z.max.z-Z.min.z:1,Ye=Z.min.x,it=Z.min.y,ft=Z.isBox3?Z.min.z:0;else{const en=Math.pow(2,-$);Ne=Math.floor(Ot.width*en),Re=Math.floor(Ot.height*en),C.isDataArrayTexture?Ve=Ot.depth:C.isData3DTexture?Ve=Math.floor(Ot.depth*en):Ve=1,Ye=0,it=0,ft=0}q!==null?(He=q.x,St=q.y,an=q.z):(He=0,St=0,an=0);const bt=Ee.convert(k.format),Fn=Ee.convert(k.type);let Le;k.isData3DTexture?(Q.setTexture3D(k,0),Le=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Q.setTexture2DArray(k,0),Le=O.TEXTURE_2D_ARRAY):(Q.setTexture2D(k,0),Le=O.TEXTURE_2D),M.activeTexture(O.TEXTURE0),M.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),M.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),M.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);const Jn=M.getParameter(O.UNPACK_ROW_LENGTH),vt=M.getParameter(O.UNPACK_IMAGE_HEIGHT),Zi=M.getParameter(O.UNPACK_SKIP_PIXELS),br=M.getParameter(O.UNPACK_SKIP_ROWS),As=M.getParameter(O.UNPACK_SKIP_IMAGES);M.pixelStorei(O.UNPACK_ROW_LENGTH,Ot.width),M.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ot.height),M.pixelStorei(O.UNPACK_SKIP_PIXELS,Ye),M.pixelStorei(O.UNPACK_SKIP_ROWS,it),M.pixelStorei(O.UNPACK_SKIP_IMAGES,ft);const da=C.isDataArrayTexture||C.isData3DTexture,At=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){const en=Y.get(C),Cs=Y.get(k),Nt=Y.get(en.__renderTarget),bs=Y.get(Cs.__renderTarget);M.bindFramebuffer(O.READ_FRAMEBUFFER,Nt.__webglFramebuffer),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,bs.__webglFramebuffer);for(let ha=0;ha<Ve;ha++)da&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Y.get(C).__webglTexture,$,ft+ha),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Y.get(k).__webglTexture,Te,an+ha)),O.blitFramebuffer(Ye,it,Ne,Re,He,St,Ne,Re,O.DEPTH_BUFFER_BIT,O.NEAREST);M.bindFramebuffer(O.READ_FRAMEBUFFER,null),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||Y.has(C)){const en=Y.get(C),Cs=Y.get(k);M.bindFramebuffer(O.READ_FRAMEBUFFER,I),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,H);for(let Nt=0;Nt<Ve;Nt++)da?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,en.__webglTexture,$,ft+Nt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,en.__webglTexture,$),At?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Cs.__webglTexture,Te,an+Nt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Cs.__webglTexture,Te),$!==0?O.blitFramebuffer(Ye,it,Ne,Re,He,St,Ne,Re,O.COLOR_BUFFER_BIT,O.NEAREST):At?O.copyTexSubImage3D(Le,Te,He,St,an+Nt,Ye,it,Ne,Re):O.copyTexSubImage2D(Le,Te,He,St,Ye,it,Ne,Re);M.bindFramebuffer(O.READ_FRAMEBUFFER,null),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else At?C.isDataTexture||C.isData3DTexture?O.texSubImage3D(Le,Te,He,St,an,Ne,Re,Ve,bt,Fn,Ot.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(Le,Te,He,St,an,Ne,Re,Ve,bt,Ot.data):O.texSubImage3D(Le,Te,He,St,an,Ne,Re,Ve,bt,Fn,Ot):C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Te,He,St,Ne,Re,bt,Fn,Ot.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Te,He,St,Ot.width,Ot.height,bt,Ot.data):O.texSubImage2D(O.TEXTURE_2D,Te,He,St,Ne,Re,bt,Fn,Ot);M.pixelStorei(O.UNPACK_ROW_LENGTH,Jn),M.pixelStorei(O.UNPACK_IMAGE_HEIGHT,vt),M.pixelStorei(O.UNPACK_SKIP_PIXELS,Zi),M.pixelStorei(O.UNPACK_SKIP_ROWS,br),M.pixelStorei(O.UNPACK_SKIP_IMAGES,As),Te===0&&k.generateMipmaps&&O.generateMipmap(Le),M.unbindTexture()},this.initRenderTarget=function(C){Y.get(C).__webglFramebuffer===void 0&&Q.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Q.setTextureCube(C,0):C.isData3DTexture?Q.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Q.setTexture2DArray(C,0):Q.setTexture2D(C,0),M.unbindTexture()},this.resetState=function(){j=0,B=0,V=null,M.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Br}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}function vN(){const n=li.useRef(null);return li.useEffect(()=>{const e=n.current;if(!e)return;let t;try{t=new _N({canvas:e,alpha:!0,antialias:!0,powerPreference:"low-power"})}catch{return}t.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),t.setClearColor(0,0),t.outputColorSpace=Di;const i=new pC,r=new Ui(34,1,.1,20);r.position.z=5;const s=new qa;i.add(s);const o=new kM;o.moveTo(0,-.38),o.bezierCurveTo(-.16,-.2,-.68,.16,-.58,.52),o.bezierCurveTo(-.47,.9,-.06,.86,0,.5),o.bezierCurveTo(.06,.86,.47,.9,.58,.52),o.bezierCurveTo(.68,.16,.16,-.2,0,-.38);const a=new f_(o,{depth:.2,bevelEnabled:!0,bevelSegments:4,steps:1,bevelSize:.06,bevelThickness:.06});a.center();const l=new cb({color:15685433,roughness:.24,metalness:.12,clearcoat:.85}),u=new gi(a,l);s.add(u);const c=new Rg({color:15909198,metalness:.45,roughness:.3}),d=new Rg({color:16777215,metalness:.15,roughness:.28,transparent:!0,opacity:.9}),f=new gi(new Bd(1.05,.018,10,96),c);f.rotation.set(1.05,.28,-.22),s.add(f);const h=new gi(new Bd(1.2,.012,8,96),d);h.rotation.set(.38,1.05,.52),s.add(h);const m=new d_(.055,16,16),_=new qa,g=new gi(m,c);g.position.set(1.05,0,0);const p=new gi(m,d);p.position.set(-1.05,0,0),_.add(g,p),_.rotation.set(1.05,.28,-.22),s.add(_),i.add(new hb(16777215,10176556,2.1));const v=new _b(16777215,2.4);v.position.set(2.5,3,4),i.add(v);const S=new mb(16757103,1.6,8);S.position.set(-2,-1.5,2.5),i.add(S);const x=new ResizeObserver(()=>{const{width:L,height:N}=e.getBoundingClientRect();!L||!N||(t.setSize(L,N,!1),r.aspect=L/N,r.updateProjectionMatrix(),t.render(i,r))});x.observe(e);const E=window.matchMedia("(prefers-reduced-motion: reduce)").matches,T={x:0,y:0},w=L=>{if(E)return;const N=e.getBoundingClientRect();T.x=((L.clientX-N.left)/N.width-.5)*2,T.y=((L.clientY-N.top)/N.height-.5)*2},y=()=>{T.x=0,T.y=0};e.addEventListener("pointermove",w),e.addEventListener("pointerleave",y);let A=0;const b=L=>{s.rotation.y+=((E?0:L*18e-5+T.x*.22)-s.rotation.y)*.035,s.rotation.x+=((E?0:T.y*.16)-s.rotation.x)*.035,u.rotation.z=E?0:Math.sin(L*.001)*.035,f.rotation.z+=E?0:.0015,h.rotation.x+=E?0:.001,u.position.y=E?0:Math.sin(L*.0012)*.045,t.render(i,r),E||(A=window.requestAnimationFrame(b))};return b(0),()=>{window.cancelAnimationFrame(A),x.disconnect(),e.removeEventListener("pointermove",w),e.removeEventListener("pointerleave",y),a.dispose(),f.geometry.dispose(),h.geometry.dispose(),m.dispose(),l.dispose(),c.dispose(),d.dispose(),t.dispose()}},[]),U.jsx("div",{className:"hero-3d-orbit","aria-hidden":"true",children:U.jsx("canvas",{ref:n})})}function xN(){return U.jsx("section",{className:"hero",id:"home",children:U.jsxs("div",{className:"container hero-inner",children:[U.jsxs("div",{className:"hero-content",children:[U.jsxs("p",{className:"hero-subtitle hero-animate",children:[U.jsx(km,{"aria-hidden":"true"})," ",xo.subtitle]}),U.jsx("h1",{className:"hero-title hero-animate",children:xo.title}),U.jsx("p",{className:"hero-text hero-animate",children:xo.text}),U.jsxs("div",{className:"hero-actions hero-animate",children:[U.jsx("a",{className:"btn btn-primary",href:xo.primaryButton.href,children:xo.primaryButton.label}),U.jsxs("a",{className:"btn btn-outline",href:os.phoneHref,children:["Help Line: ",os.phone]})]})]}),U.jsxs("div",{className:"hero-image-wrap",children:[U.jsx(vN,{}),U.jsx("div",{className:"hero-image-frame",children:U.jsx("img",{src:xo.image,alt:xo.imageAlt,width:"1024",height:"1280"})}),U.jsxs("div",{className:"hero-impact-note",children:[U.jsx("span",{className:"hero-impact-icon","aria-hidden":"true",children:U.jsx(km,{})}),U.jsxs("span",{children:[U.jsx("strong",{children:"Hope in action"}),U.jsx("small",{children:"Community-led. Life-changing."})]})]})]})]})})}function yN(){return U.jsx("section",{className:"section about",id:"about",children:U.jsxs("div",{className:"container about-inner",children:[U.jsx("div",{className:"about-image",children:U.jsx("img",{src:hr.image,alt:hr.imageAlt,width:"1024",height:"768",loading:"lazy"})}),U.jsxs("div",{className:"about-content",children:[U.jsxs("div",{className:"section-head",children:[U.jsx("p",{className:"kicker",children:hr.kicker}),U.jsx("h2",{children:hr.title})]}),U.jsx("p",{className:"section-text",children:hr.text}),U.jsxs("ul",{className:"about-facts",children:[U.jsxs("li",{children:[U.jsx(rM,{"aria-hidden":"true"}),U.jsxs("div",{children:[U.jsxs("h3",{children:[hr.dateLabel,":"]}),U.jsx("p",{children:hr.dateValue})]})]}),U.jsxs("li",{children:[U.jsx(K0,{"aria-hidden":"true"}),U.jsxs("div",{children:[U.jsxs("h3",{children:[hr.locationLabel,":"]}),U.jsx("p",{children:hr.locationValue})]})]})]}),U.jsx("a",{className:"btn btn-primary",href:hr.button.href,children:hr.button.label})]})]})})}function SN({raised:n,goal:e}){const t=Math.min(100,Math.round(n/e*100));return U.jsx("div",{className:"cause-progress",role:"progressbar","aria-valuenow":t,"aria-valuemin":"0","aria-valuemax":"100",children:U.jsx("div",{className:"cause-progress-bar",style:{width:`${t}%`}})})}function MN(){return U.jsx("section",{className:"section causes",id:"causes",children:U.jsxs("div",{className:"container",children:[U.jsxs("div",{className:"section-head center",children:[U.jsx("p",{className:"kicker",children:qc.kicker}),U.jsx("h2",{children:qc.title})]}),U.jsx("div",{className:"card-grid stagger-grid",children:qc.items.map(n=>U.jsxs("article",{className:"cause-card",children:[U.jsxs("div",{className:"cause-image",children:[U.jsx("img",{src:n.image,alt:n.alt,width:"1024",height:"768",loading:"lazy"}),U.jsxs("span",{className:"cause-tag",children:["- ",n.category," -"]})]}),U.jsxs("div",{className:"cause-body",children:[U.jsx("h3",{children:n.title}),U.jsxs("div",{className:"cause-amounts",children:[U.jsxs("span",{children:["Raised: ",U.jsxs("strong",{children:["$",n.raised.toLocaleString()]})]}),U.jsxs("span",{children:["Goal: ",U.jsxs("strong",{children:["$",n.goal.toLocaleString()]})]})]}),U.jsx(SN,{raised:n.raised,goal:n.goal}),U.jsx("p",{children:n.text}),U.jsx("a",{className:"btn btn-primary btn-sm",href:"#donate",children:qc.buttonLabel})]})]},n.title))})]})})}function EN(){return U.jsx("section",{className:"section volunteers",id:"volunteers",children:U.jsxs("div",{className:"container",children:[U.jsxs("div",{className:"section-head split",children:[U.jsxs("div",{children:[U.jsx("p",{className:"kicker",children:Wl.kicker}),U.jsx("h2",{children:Wl.title})]}),U.jsx("a",{className:"btn btn-outline",href:Wl.button.href,children:Wl.button.label})]}),U.jsx("div",{className:"card-grid three stagger-grid",children:Wl.members.map((n,e)=>U.jsxs("article",{className:"volunteer-card",children:[U.jsxs("div",{className:"volunteer-photo",children:[U.jsx("img",{src:n.image,alt:`Portrait of ${n.name}`,width:"768",height:"768",loading:"lazy"}),U.jsx("span",{className:"volunteer-number",children:String(e+1).padStart(2,"0")})]}),U.jsxs("div",{className:"volunteer-info",children:[U.jsx("h3",{children:n.name}),U.jsx("p",{children:n.role})]})]},n.name))})]})})}function TN(){return U.jsx("section",{className:"section events",id:"events",children:U.jsxs("div",{className:"container",children:[U.jsxs("div",{className:"section-head center",children:[U.jsx("p",{className:"kicker",children:$c.kicker}),U.jsx("h2",{children:$c.title})]}),U.jsx("div",{className:"card-grid three stagger-grid",children:$c.items.map(n=>U.jsxs("article",{className:"event-card",children:[U.jsx("div",{className:"event-image",children:U.jsx("img",{src:n.image,alt:n.alt,width:"1024",height:"768",loading:"lazy"})}),U.jsxs("div",{className:"event-body",children:[U.jsxs("p",{className:"event-organizer",children:[U.jsx(sA,{"aria-hidden":"true"})," ",n.organizer]}),U.jsx("h3",{children:n.title}),U.jsxs("ul",{className:"event-meta",children:[U.jsxs("li",{children:[U.jsx(cA,{"aria-hidden":"true"})," Time: ",n.time]}),U.jsxs("li",{children:[U.jsx(K0,{"aria-hidden":"true"})," Location: ",n.location]})]}),U.jsx("a",{className:"btn btn-primary btn-sm",href:"#donate",children:$c.buttonLabel})]})]},n.title))})]})})}function wN(){return U.jsx("section",{className:"stats","aria-label":"Impact statistics",children:U.jsx("div",{className:"container stats-grid",children:pA.map(n=>U.jsxs("div",{className:"stat",children:[U.jsxs("h3",{className:"stat-number","data-value":n.value,"data-prefix":n.prefix,"data-suffix":n.suffix,children:[n.prefix,"0",n.suffix]}),U.jsxs("p",{children:["- ",n.label," -"]})]},n.label))})})}function AN(){const[n,e]=li.useState(0),[t,i]=li.useState(!1),r=Xl.items.length,s=()=>e(l=>(l-1+r)%r),o=()=>e(l=>(l+1)%r),a=Xl.items[n];return li.useEffect(()=>{const l=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(t||l||r<2)return;const u=window.setInterval(()=>{e(c=>(c+1)%r)},5200);return()=>window.clearInterval(u)},[t,r]),U.jsx("section",{className:"section testimonials",id:"testimonials","aria-label":"Volunteer testimonials",children:U.jsxs("div",{className:"container",children:[U.jsxs("div",{className:"section-head center",children:[U.jsx("p",{className:"kicker",children:Xl.kicker}),U.jsx("h2",{children:Xl.title})]}),U.jsxs("div",{className:"testimonial-card",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onFocusCapture:()=>i(!0),onBlurCapture:l=>{l.currentTarget.contains(l.relatedTarget)||i(!1)},children:[U.jsxs("div",{className:"testimonial-copy","aria-live":"polite","aria-atomic":"true",children:[U.jsx(aA,{className:"testimonial-quote-icon","aria-hidden":"true"}),U.jsx("p",{className:"testimonial-text",children:a.quote}),U.jsxs("div",{className:"testimonial-person",children:[U.jsx("img",{src:a.image,alt:`Portrait of ${a.name}`,width:"768",height:"768",loading:"lazy"}),U.jsxs("div",{children:[U.jsx("h3",{children:a.name}),U.jsx("p",{children:a.role})]})]})]},n),U.jsxs("div",{className:"testimonial-controls",children:[U.jsxs("div",{className:"testimonial-nav",children:[U.jsx("button",{type:"button",onClick:s,"aria-label":"Previous testimonial",children:U.jsx(dA,{})}),U.jsx("button",{type:"button",onClick:o,"aria-label":"Next testimonial",children:U.jsx(fA,{})})]}),U.jsx("div",{className:"testimonial-pagination","aria-label":"Choose a testimonial",children:Xl.items.map((l,u)=>U.jsx("button",{type:"button",className:u===n?"is-active":"","aria-label":`Show testimonial ${u+1}`,"aria-pressed":u===n,onClick:()=>e(u)},l.name))})]})]})]})})}function CN(){return U.jsx("section",{className:"section blog",id:"blog",children:U.jsxs("div",{className:"container",children:[U.jsxs("div",{className:"section-head center",children:[U.jsx("p",{className:"kicker",children:jc.kicker}),U.jsx("h2",{children:jc.title})]}),U.jsx("div",{className:"card-grid two stagger-grid",children:jc.posts.map(n=>U.jsxs("article",{className:"blog-card",children:[U.jsx("div",{className:"blog-image",children:U.jsx("img",{src:n.image,alt:n.alt,width:"1024",height:"768",loading:"lazy"})}),U.jsxs("div",{className:"blog-body",children:[U.jsxs("p",{className:"blog-date",children:[U.jsx(rM,{"aria-hidden":"true"})," ",n.date]}),U.jsx("h3",{children:n.title}),U.jsx("p",{children:n.text}),U.jsxs("a",{className:"text-link",href:"#blog",children:[jc.buttonLabel," →"]})]})]},n.title))})]})})}function bN(){const[n,e]=li.useState(""),[t,i]=li.useState(""),r=s=>{s.preventDefault();const o=Number(n);if(!o||o<=0){i("Please enter a valid donation amount.");return}i(`Thank you for your $${o} pledge! This is a demo — no payment was processed.`),e("")};return U.jsx("section",{className:"cta",id:"donate",children:U.jsxs("div",{className:"container cta-inner",children:[U.jsxs("div",{className:"cta-text",children:[U.jsx("h2",{children:$h.title}),U.jsx("p",{children:$h.text})]}),U.jsxs("form",{className:"cta-form",onSubmit:r,noValidate:!0,children:[U.jsx("label",{htmlFor:"donation-amount",className:"sr-only",children:"Donation amount in dollars"}),U.jsx("input",{id:"donation-amount",type:"number",min:"1",placeholder:"Enter amount ($)",value:n,onChange:s=>e(s.target.value)}),U.jsx("button",{type:"submit",className:"btn btn-light",children:$h.button.label}),t&&U.jsx("p",{className:"cta-message",role:"status",children:t})]})]})})}const RN={facebook:U.jsx(rA,{}),twitter:U.jsx(tA,{}),instagram:U.jsx(iA,{}),linkedin:U.jsx(nA,{})};function PN(){return U.jsxs("footer",{className:"site-footer",children:[U.jsxs("div",{className:"container footer-grid",children:[U.jsxs("div",{className:"footer-col",children:[U.jsxs("a",{href:"#home",className:"logo footer-logo",children:[U.jsx("span",{className:"logo-icon","aria-hidden":"true",children:U.jsx(km,{})}),sM.logoText]}),U.jsx("p",{children:Kc.about}),U.jsx("div",{className:"footer-socials",children:Kc.socials.map(n=>U.jsx("a",{href:n.href,target:"_blank",rel:"noreferrer","aria-label":n.label,children:RN[n.icon]},n.label))})]}),U.jsxs("div",{className:"footer-col",children:[U.jsx("h3",{children:"Quick Links"}),U.jsx("ul",{children:Kc.quickLinks.map(n=>U.jsx("li",{children:U.jsx("a",{href:n.href,children:n.label})},n.href))})]}),U.jsxs("div",{className:"footer-col",children:[U.jsx("h3",{children:"Contact"}),U.jsxs("ul",{className:"footer-contact",children:[U.jsxs("li",{children:[U.jsx(iM,{"aria-hidden":"true"}),U.jsx("a",{href:os.phoneHref,children:os.phone})]}),U.jsxs("li",{children:[U.jsx(uA,{"aria-hidden":"true"}),U.jsx("a",{href:`mailto:${os.email}`,children:os.email})]}),U.jsxs("li",{children:[U.jsx(K0,{"aria-hidden":"true"}),U.jsx("span",{children:os.address})]})]})]})]}),U.jsx("div",{className:"footer-bottom",children:U.jsx("div",{className:"container",children:U.jsxs("p",{children:["© ",new Date().getFullYear()," ",Kc.copyright]})})})]})}function is(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function eE(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Wi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},fc={duration:.5,overwrite:!1,delay:0},m_,Dn,zt,sr=1e8,Pt=1/sr,Ng=Math.PI*2,LN=Ng/4,NN=0,tE=Math.sqrt,DN=Math.cos,IN=Math.sin,An=function(e){return typeof e=="string"},Jt=function(e){return typeof e=="function"},Es=function(e){return typeof e=="number"},g_=function(e){return typeof e>"u"},jr=function(e){return typeof e=="object"},Ei=function(e){return e!==!1},__=function(){return typeof window<"u"},Mf=function(e){return Jt(e)||An(e)},nE=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},$n=Array.isArray,UN=/random\([^)]+\)/g,ON=/,\s*/g,ay=/(?:-?\.?\d|\.)+/gi,iE=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ka=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Lp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,rE=/[+-]=-?[.\d]+/,FN=/[^,'"\[\]\s]+/gi,kN=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Gt,Dr,Dg,v_,Yi={},zd={},sE,oE=function(e){return(zd=Tl(e,Yi))&&Ci},x_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},dc=function(e,t){return!t&&console.warn(e)},aE=function(e,t){return e&&(Yi[e]=t)&&zd&&(zd[e]=t)||Yi},hc=function(){return 0},BN={suppressEvents:!0,isStart:!0,kill:!1},Qf={suppressEvents:!0,kill:!1},zN={suppressEvents:!0},y_={},ro=[],Ig={},lE,Ii={},Np={},ly=30,ed=[],S_="",M_=function(e){var t=e[0],i,r;if(jr(t)||Jt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=ed.length;r--&&!ed[r].targetTest(t););i=ed[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new PE(e[r],i)))||e.splice(r,1);return e},Vo=function(e){return e._gsap||M_(or(e))[0]._gsap},uE=function(e,t,i){return(i=e[t])&&Jt(i)?e[t]():g_(i)&&e.getAttribute&&e.getAttribute(t)||i},Ti=function(e,t){return(e=e.split(",")).forEach(t)||e},tn=function(e){return Math.round(e*1e5)/1e5||0},Vt=function(e){return Math.round(e*1e7)/1e7||0},al=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},VN=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Vd=function(){var e=ro.length,t=ro.slice(0),i,r;for(Ig={},ro.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},E_=function(e){return!!(e._initted||e._startAt||e.add)},cE=function(e,t,i,r){ro.length&&!Dn&&Vd(),e.render(t,i,!!(Dn&&t<0&&E_(e))),ro.length&&!Dn&&Vd()},fE=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(FN).length<2?t:An(e)?e.trim():e},dE=function(e){return e},qi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},HN=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Tl=function(e,t){for(var i in t)e[i]=t[i];return e},uy=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=jr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Hd=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},bu=function(e){var t=e.parent||Gt,i=e.keyframes?HN($n(e.keyframes)):qi;if(Ei(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},GN=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},hE=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},vh=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},co=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ho=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},WN=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ug=function(e,t,i,r){return e._startAt&&(Dn?e._startAt.revert(Qf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},XN=function n(e){return!e||e._ts&&n(e.parent)},cy=function(e){return e._repeat?wl(e._tTime,e=e.duration()+e._rDelay)*e:0},wl=function(e,t){var i=Math.floor(e=Vt(e/t));return e&&i===e?i-1:i},Gd=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},xh=function(e){return e._end=Vt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Pt)||0))},yh=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Vt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),xh(e),i._dirty||Ho(i,e)),e},pE=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Gd(e.rawTime(),t),(!t._dur||Rc(0,t.totalDuration(),i)-t._tTime>Pt)&&t.render(i,!0)),Ho(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Pt}},Fr=function(e,t,i,r){return t.parent&&co(t),t._start=Vt((Es(i)?i:i||e!==Gt?Qi(e,i,t):e._time)+t._delay),t._end=Vt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),hE(e,t,"_first","_last",e._sort?"_start":0),Og(t)||(e._recent=t),r||pE(e,t),e._ts<0&&yh(e,e._tTime),e},mE=function(e,t){return(Yi.ScrollTrigger||x_("scrollTrigger",t))&&Yi.ScrollTrigger.create(t,e)},gE=function(e,t,i,r,s){if(w_(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Dn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&lE!==ki.frame)return ro.push(e),e._lazy=[s,r],1},YN=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Og=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},qN=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&YN(e)&&!(!e._initted&&Og(e))||(e._ts<0||e._dp._ts<0)&&!Og(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=Rc(0,e._tDur,t),c=wl(l,a),e._yoyo&&c&1&&(o=1-o),c!==wl(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Dn||r||e._zTime===Pt||!t&&e._zTime){if(!e._initted&&gE(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Pt:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Ug(e,t,i,!0),e._onUpdate&&!i&&Vi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Vi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&co(e,1),!i&&!Dn&&(Vi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},$N=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Al=function(e,t,i,r){var s=e._repeat,o=Vt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Vt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&yh(e,e._tTime=e._tDur*a),e.parent&&xh(e),i||Ho(e.parent,e),e},fy=function(e){return e instanceof _i?Ho(e):Al(e,e._dur)},jN={_start:0,endTime:hc,totalDuration:hc},Qi=function n(e,t,i){var r=e.labels,s=e._recent||jN,o=e.duration()>=sr?s.endTime(!1):e._dur,a,l,u;return An(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*($n(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Ru=function(e,t,i){var r=Es(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ei(l.vars.inherit)&&l.parent;o.immediateRender=Ei(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new cn(t[0],o,t[s+1])},vo=function(e,t){return e||e===0?t(e):t},Rc=function(e,t,i){return i<e?e:i>t?t:i},Xn=function(e,t){return!An(e)||!(t=kN.exec(e))?"":t[1]},KN=function(e,t,i){return vo(i,function(r){return Rc(e,t,r)})},Fg=[].slice,_E=function(e,t){return e&&jr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&jr(e[0]))&&!e.nodeType&&e!==Dr},ZN=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return An(r)&&!t||_E(r,1)?(s=i).push.apply(s,or(r)):i.push(r)})||i},or=function(e,t,i){return zt&&!t&&zt.selector?zt.selector(e):An(e)&&!i&&(Dg||!Cl())?Fg.call((t||v_).querySelectorAll(e),0):$n(e)?ZN(e,i):_E(e)?Fg.call(e,0):e?[e]:[]},kg=function(e){return e=or(e)[0]||dc("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return or(t,i.querySelectorAll?i:i===e?dc("Invalid scope")||v_.createElement("div"):e)}},vE=function(e){return e.sort(function(){return .5-Math.random()})},xE=function(e){if(Jt(e))return e;var t=jr(e)?e:{each:e},i=Go(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return An(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(f,h,m){var _=(m||t).length,g=o[_],p,v,S,x,E,T,w,y,A;if(!g){if(A=t.grid==="auto"?0:(t.grid||[1,sr])[1],!A){for(w=-sr;w<(w=m[A++].getBoundingClientRect().left)&&A<_;);A<_&&A--}for(g=o[_]=[],p=l?Math.min(A,_)*c-.5:r%A,v=A===sr?0:l?_*d/A-.5:r/A|0,w=0,y=sr,T=0;T<_;T++)S=T%A-p,x=v-(T/A|0),g[T]=E=u?Math.abs(u==="y"?x:S):tE(S*S+x*x),E>w&&(w=E),E<y&&(y=E);r==="random"&&vE(g),g.max=w-y,g.min=y,g.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(A>_?_-1:u?u==="y"?_/A:A:Math.max(A,_/A))||0)*(r==="edges"?-1:1),g.b=_<0?s-_:s,g.u=Xn(t.amount||t.each)||0,i=i&&_<0?cD(i):i}return _=(g[f]-g.min)/g.max||0,Vt(g.b+(i?i(_):_)*g.v)+g.u}},Bg=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Vt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Es(i)?0:Xn(i))}},yE=function(e,t){var i=$n(e),r,s;return!i&&jr(e)&&(r=i=e.radius||sr,e.values?(e=or(e.values),(s=!Es(e[0]))&&(r*=r)):e=Bg(e.increment)),vo(t,i?Jt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=sr,c=0,d=e.length,f,h;d--;)s?(f=e[d].x-a,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-a),f<u&&(u=f,c=d);return c=!r||u<=r?e[c]:o,s||c===o||Es(o)?c:c+Xn(o)}:Bg(e))},SE=function(e,t,i,r){return vo($n(e)?!t:i===!0?!!(i=0):!r,function(){return $n(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},JN=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},QN=function(e,t){return function(i){return e(parseFloat(i))+(t||Xn(i))}},eD=function(e,t,i){return EE(e,t,0,1,i)},ME=function(e,t,i){return vo(i,function(r){return e[~~t(r)]})},tD=function n(e,t,i){var r=t-e;return $n(e)?ME(e,n(0,e.length),t):vo(i,function(s){return(r+(s-e)%r)%r+e})},nD=function n(e,t,i){var r=t-e,s=r*2;return $n(e)?ME(e,n(0,e.length-1),t):vo(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},pc=function(e){return e.replace(UN,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(ON);return SE(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},EE=function(e,t,i,r,s){var o=t-e,a=r-i;return vo(s,function(l){return i+((l-e)/o*a||0)})},iD=function n(e,t,i,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=An(e),a={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if($n(e)&&!$n(t)){for(c=[],d=e.length,f=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(m){m*=d;var _=Math.min(f,~~m);return c[_](m-_)},i=t}else r||(e=Tl($n(e)?[]:{},e));if(!c){for(l in t)T_.call(a,e,l,"get",t[l]);s=function(m){return b_(m,a)||(o?e.p:e)}}}return vo(i,s)},dy=function(e,t,i){var r=e.labels,s=sr,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Vi=function(e,t,i){var r=e.vars,s=r[t],o=zt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&ro.length&&Vd(),a&&(zt=a),c=l?s.apply(u,l):s.call(u),zt=o,c},uu=function(e){return co(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Dn),e.progress()<1&&Vi(e,"onInterrupt"),e},Za,TE=[],wE=function(e){if(e)if(e=!e.name&&e.default||e,__()||e.headless){var t=e.name,i=Jt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:hc,render:b_,add:T_,kill:yD,modifier:xD,rawVars:0},o={targetTest:0,get:0,getSetter:C_,aliases:{},register:0};if(Cl(),e!==r){if(Ii[t])return;qi(r,qi(Hd(e,s),o)),Tl(r.prototype,Tl(s,Hd(e,o))),Ii[r.prop=t]=r,e.targetTest&&(ed.push(r),y_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}aE(t,r),e.register&&e.register(Ci,r,wi)}else TE.push(e)},Rt=255,cu={aqua:[0,Rt,Rt],lime:[0,Rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Rt],navy:[0,0,128],white:[Rt,Rt,Rt],olive:[128,128,0],yellow:[Rt,Rt,0],orange:[Rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Rt,0,0],pink:[Rt,192,203],cyan:[0,Rt,Rt],transparent:[Rt,Rt,Rt,0]},Dp=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Rt+.5|0},AE=function(e,t,i){var r=e?Es(e)?[e>>16,e>>8&Rt,e&Rt]:0:cu.black,s,o,a,l,u,c,d,f,h,m;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),cu[e])r=cu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Rt,r&Rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Rt,e&Rt]}else if(e.substr(0,3)==="hsl"){if(r=m=e.match(ay),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Dp(l+1/3,s,o),r[1]=Dp(l,s,o),r[2]=Dp(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(iE),i&&r.length<4&&(r[3]=1),r}else r=e.match(ay)||cu.transparent;r=r.map(Number)}return t&&!m&&(s=r[0]/Rt,o=r[1]/Rt,a=r[2]/Rt,d=Math.max(s,o,a),f=Math.min(s,o,a),c=(d+f)/2,d===f?l=u=0:(h=d-f,u=c>.5?h/(2-d-f):h/(d+f),l=d===s?(o-a)/h+(o<a?6:0):d===o?(a-s)/h+2:(s-o)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},CE=function(e){var t=[],i=[],r=-1;return e.split(so).forEach(function(s){var o=s.match(Ka)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},hy=function(e,t,i){var r="",s=(e+r).match(so),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(f){return(f=AE(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=CE(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(so,"1").split(Ka),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(so),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},so=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in cu)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),rD=/hsl[a]?\(/,bE=function(e){var t=e.join(" "),i;if(so.lastIndex=0,so.test(t))return i=rD.test(t),e[1]=hy(e[1],i),e[0]=hy(e[0],i,CE(e[1])),!0},mc,ki=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,f,h,m=function _(g){var p=n()-r,v=g===!0,S,x,E,T;if((p>e||p<0)&&(i+=p-t),r+=p,E=r-i,S=E-o,(S>0||v)&&(T=++d.frame,f=E-d.time*1e3,d.time=E=E/1e3,o+=S+(S>=s?4:s-S),x=1),v||(l=u(_)),x)for(h=0;h<a.length;h++)a[h](E,f,T,g)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){sE&&(!Dg&&__()&&(Dr=Dg=window,v_=Dr.document||{},Yi.gsap=Ci,(Dr.gsapVersions||(Dr.gsapVersions=[])).push(Ci.version),oE(zd||Dr.GreenSockGlobals||!Dr.gsap&&Dr||{}),TE.forEach(wE)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(g){return setTimeout(g,o-d.time*1e3+1|0)},mc=1,m(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),mc=0,u=hc},lagSmoothing:function(g,p){e=g||1/0,t=Math.min(p||33,e)},fps:function(g){s=1e3/(g||240),o=d.time*1e3+s},add:function(g,p,v){var S=p?function(x,E,T,w){g(x,E,T,w),d.remove(S)}:g;return d.remove(g),a[v?"unshift":"push"](S),Cl(),S},remove:function(g,p){~(p=a.indexOf(g))&&a.splice(p,1)&&h>=p&&h--},_listeners:a},d}(),Cl=function(){return!mc&&ki.wake()},_t={},sD=/^[\d.\-M][\d.\-,\s]/,oD=/["']/g,aD=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(oD,"").trim():+u,r=l.substr(a+1).trim();return t},lD=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},uD=function(e){var t=(e+"").split("("),i=_t[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[aD(t[1])]:lD(e).split(",").map(fE)):_t._CE&&sD.test(e)?_t._CE("",e):i},cD=function(e){return function(t){return 1-e(1-t)}},Go=function(e,t){return e&&(Jt(e)?e:_t[e]||uD(e))||t},ua=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return Ti(e,function(a){_t[a]=Yi[a]=s,_t[o=a.toLowerCase()]=i;for(var l in s)_t[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_t[a+"."+l]=s[l]}),s},RE=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ip=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Ng*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*IN((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:RE(a);return s=Ng/s,l.config=function(u,c){return n(e,u,c)},l},Up=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:RE(i);return r.config=function(s){return n(e,s)},r};Ti("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;ua(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});_t.Linear.easeNone=_t.none=_t.Linear.easeIn;ua("Elastic",Ip("in"),Ip("out"),Ip());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};ua("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ua("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});ua("Circ",function(n){return-(tE(1-n*n)-1)});ua("Sine",function(n){return n===1?1:-DN(n*LN)+1});ua("Back",Up("in"),Up("out"),Up());_t.SteppedEase=_t.steps=Yi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Pt;return function(a){return((r*Rc(0,o,a)|0)+s)*i}}};fc.ease=_t["quad.out"];Ti("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return S_+=n+","+n+"Params,"});var PE=function(e,t){this.id=NN++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:uE,this.set=t?t.getSetter:C_},gc=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Al(this,+t.duration,1,1),this.data=t.data,zt&&(this._ctx=zt,zt.data.push(this)),mc||ki.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Al(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Cl(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(yh(this,i),!s._dp||s.parent||pE(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Fr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Pt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),cE(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+cy(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+cy(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?wl(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Pt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Gd(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Pt?0:this._rts,this.totalTime(Rc(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),xh(this),WN(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Cl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pt&&(this._tTime-=Pt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Vt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Fr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Ei(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Gd(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=zN);var r=Dn;return Dn=i,E_(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Dn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,fy(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,fy(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Qi(this,i),Ei(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Ei(r)),this._dur||(this._zTime=-Pt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Pt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Jt(i)?i:dE,l=function(){var c=r.then;r.then=null,s&&s(),Jt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){uu(this)},n}();qi(gc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pt,_prom:0,_ps:!1,_rts:1});var _i=function(n){eE(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Ei(i.sortChildren),Gt&&Fr(i.parent||Gt,is(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&mE(is(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Ru(0,arguments,this),this},t.from=function(r,s,o){return Ru(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Ru(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,bu(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new cn(r,s,Qi(this,o),1),this},t.call=function(r,s,o){return Fr(this,cn.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new cn(r,o,Qi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,bu(o).immediateRender=Ei(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,bu(a).immediateRender=Ei(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Vt(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,h,m,_,g,p,v,S,x,E,T,w;if(this!==Gt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,x=this._start,S=this._ts,p=!S,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,g=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,o);if(f=Vt(c%g),c===l?(_=this._repeat,f=u):(E=Vt(c/g),_=~~E,_&&_===E&&(f=u,_--),f>u&&(f=u)),E=wl(this._tTime,g),!a&&this._tTime&&E!==_&&this._tTime-E*g-this._dur<=0&&(E=_),T&&_&1&&(f=u-f,w=1),_!==E&&!this._lock){var y=T&&E&1,A=y===(T&&_&1);if(_<E&&(y=!y),a=y?0:c%u?u:c,this._lock=1,this.render(a||(w?0:Vt(_*g)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Vi(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,E=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,A&&(this._lock=2,a=y?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=$N(this,Vt(a),Vt(f)),v&&(c-=f-(f=v._start))),this._tTime=c,this._time=f,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!E&&(Vi(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(h=this._first;h;){if(m=h._next,(h._act||f>=h._start)&&h._ts&&v!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,o),f!==this._time||!this._ts&&!p){v=0,m&&(c+=this._zTime=-Pt);break}}h=m}else{h=this._last;for(var b=r<0?r:f;h;){if(m=h._prev,(h._act||b<=h._end)&&h._ts&&v!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(b-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(b-h._start)*h._ts,s,o||Dn&&E_(h)),f!==this._time||!this._ts&&!p){v=0,m&&(c+=this._zTime=b?-Pt:Pt);break}}h=m}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-Pt)._zTime=f>=a?1:-1,this._ts))return this._start=x,xh(this),this.render(r,s,o);this._onUpdate&&!s&&Vi(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&co(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Vi(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Es(s)||(s=Qi(this,s,r)),!(r instanceof gc)){if($n(r))return r.forEach(function(a){return o.add(a,s)}),this;if(An(r))return this.addLabel(r,s);if(Jt(r))r=cn.delayedCall(0,r);else return this}return this!==r?Fr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-sr);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof cn?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return An(r)?this.removeLabel(r):Jt(r)?this.killTweensOf(r):(r.parent===this&&vh(this,r),r===this._recent&&(this._recent=this._last),Ho(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Vt(ki.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Qi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=cn.delayedCall(0,s||hc,o);return a.data="isPause",this._hasPause=1,Fr(this,a,Qi(this,r))},t.removePause=function(r){var s=this._first;for(r=Qi(this,r);s;)s._start===r&&s.data==="isPause"&&co(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Ws!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=or(r),l=this._first,u=Es(s),c;l;)l instanceof cn?VN(l._targets,a)&&(u?(!Ws||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Qi(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,h,m=cn.to(o,qi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Pt,onStart:function(){if(o.pause(),!h){var g=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());m._dur!==g&&Al(m,g,0,1).render(m._time,!0,!0),h=1}c&&c.apply(m,d||[])}},s));return f?m.render(0):m},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,qi({startAt:{time:Qi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),dy(this,Qi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),dy(this,Qi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Pt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Vt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Ho(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ho(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=sr,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Fr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Vt(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Al(o,o===Gt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Gt._ts&&(cE(Gt,Gd(r,Gt)),lE=ki.frame),ki.frame>=ly){ly+=Wi.autoSleep||120;var s=Gt._first;if((!s||!s._ts)&&Wi.autoSleep&&ki._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ki.sleep()}}},e}(gc);qi(_i.prototype,{_lock:0,_hasPause:0,_forcing:0});var fD=function(e,t,i,r,s,o,a){var l=new wi(this._pt,e,t,0,1,OE,null,s),u=0,c=0,d,f,h,m,_,g,p,v;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=pc(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),f=i.match(Lp)||[];d=Lp.exec(r);)m=d[0],_=r.substring(u,d.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),m!==f[c++]&&(g=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:g,c:m.charAt(1)==="="?al(g,m)-g:parseFloat(m)-g,m:h&&h<4?Math.round:0},u=Lp.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(rE.test(r)||p)&&(l.e=0),this._pt=l,l},T_=function(e,t,i,r,s,o,a,l,u,c){Jt(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:Jt(d)?u?e[t.indexOf("set")||!Jt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,h=Jt(d)?u?gD:IE:A_,m;if(An(r)&&(~r.indexOf("random(")&&(r=pc(r)),r.charAt(1)==="="&&(m=al(f,r)+(Xn(f)||0),(m||m===0)&&(r=m))),!c||f!==r||zg)return!isNaN(f*r)&&r!==""?(m=new wi(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?vD:UE,0,h),u&&(m.fp=u),a&&m.modifier(a,this,e),this._pt=m):(!d&&!(t in e)&&x_(t,r),fD.call(this,e,t,f,r,h,l||Wi.stringFilter,u))},dD=function(e,t,i,r,s){if(Jt(e)&&(e=Pu(e,s,t,i,r)),!jr(e)||e.style&&e.nodeType||$n(e)||nE(e))return An(e)?Pu(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Pu(e[a],s,t,i,r);return o},LE=function(e,t,i,r,s,o){var a,l,u,c;if(Ii[e]&&(a=new Ii[e]).init(s,a.rawVars?t[e]:dD(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new wi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Za))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Ws,zg,w_=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,f=r.keyframes,h=r.autoRevert,m=e._dur,_=e._startAt,g=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:g,S=e._overwrite==="auto"&&!m_,x=e.timeline,E=r.easeReverse||d,T,w,y,A,b,L,N,W,I,H,j,B,V;if(x&&(!f||!s)&&(s="none"),e._ease=Go(s,fc.ease),e._rEase=E&&(Go(E)||e._ease),e._from=!x&&!!r.runBackwards,e._from&&(e.ratio=1),!x||f&&!r.stagger){if(W=g[0]?Vo(g[0]).harness:0,B=W&&r[W.prop],T=Hd(r,y_),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!h?_.render(-1,!0):_.revert(c&&m?Qf:BN),_._lazy=0),o){if(co(e._startAt=cn.set(g,qi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Ei(l),startAt:null,delay:0,onUpdate:u&&function(){return Vi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Dn||!a&&!h)&&e._startAt.revert(Qf),a&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&m&&!_){if(t&&(a=!1),y=qi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Ei(l),immediateRender:a,stagger:0,parent:p},T),B&&(y[W.prop]=B),co(e._startAt=cn.set(g,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Dn?e._startAt.revert(Qf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Pt,Pt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Ei(l)||l&&!m,w=0;w<g.length;w++){if(b=g[w],N=b._gsap||M_(g)[w]._gsap,e._ptLookup[w]=H={},Ig[N.id]&&ro.length&&Vd(),j=v===g?w:v.indexOf(b),W&&(I=new W).init(b,B||T,e,j,v)!==!1&&(e._pt=A=new wi(e._pt,b,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(z){H[z]=A}),I.priority&&(L=1)),!W||B)for(y in T)Ii[y]&&(I=LE(y,T,e,j,b,v))?I.priority&&(L=1):H[y]=A=T_.call(e,b,y,"get",T[y],j,v,0,r.stringFilter);e._op&&e._op[w]&&e.kill(b,e._op[w]),S&&e._pt&&(Ws=e,Gt.killTweensOf(b,H,e.globalTime(t)),V=!e.parent,Ws=0),e._pt&&l&&(Ig[N.id]=1)}L&&FE(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!V,f&&t<=0&&x.render(sr,!0,!0)},hD=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,f,h;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return zg=1,e.vars[t]="+=0",w_(e,a),zg=0,l?dc(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(h=u.length;h--;)d=u[h],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=tn(i)+Xn(d.e)),d.b&&(d.b=c.s+Xn(d.b))},pD=function(e,t){var i=e[0]?Vo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Tl({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},mD=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if($n(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Pu=function(e,t,i,r,s){return Jt(e)?e.call(t,i,r,s):An(e)&&~e.indexOf("random(")?pc(e):e},NE=S_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",DE={};Ti(NE+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return DE[n]=1});var cn=function(n){eE(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:bu(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,m=l.keyframes,_=l.defaults,g=l.scrollTrigger,p=r.parent||Gt,v=($n(i)||nE(i)?Es(i[0]):"length"in r)?[i]:or(i),S,x,E,T,w,y,A,b;if(a._targets=v.length?M_(v):dc("GSAP target "+i+" not found. https://gsap.com",!Wi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,m||f||Mf(u)||Mf(c)){r=a.vars;var L=r.easeReverse||r.yoyoEase;if(S=a.timeline=new _i({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:v}),S.kill(),S.parent=S._dp=is(a),S._start=0,f||Mf(u)||Mf(c)){if(T=v.length,A=f&&xE(f),jr(f))for(w in f)~NE.indexOf(w)&&(b||(b={}),b[w]=f[w]);for(x=0;x<T;x++)E=Hd(r,DE),E.stagger=0,L&&(E.easeReverse=L),b&&Tl(E,b),y=v[x],E.duration=+Pu(u,is(a),x,y,v),E.delay=(+Pu(c,is(a),x,y,v)||0)-a._delay,!f&&T===1&&E.delay&&(a._delay=c=E.delay,a._start+=c,E.delay=0),S.to(y,E,A?A(x,y,v):0),S._ease=_t.none;S.duration()?u=c=0:a.timeline=0}else if(m){bu(qi(S.vars.defaults,{ease:"none"})),S._ease=Go(m.ease||r.ease||"none");var N=0,W,I,H;if($n(m))m.forEach(function(j){return S.to(v,j,">")}),S.duration();else{E={};for(w in m)w==="ease"||w==="easeEach"||mD(w,m[w],E,m.easeEach);for(w in E)for(W=E[w].sort(function(j,B){return j.t-B.t}),N=0,x=0;x<W.length;x++)I=W[x],H={ease:I.e,duration:(I.t-(x?W[x-1].t:0))/100*u},H[w]=I.v,S.to(v,H,N),N+=H.duration;S.duration()<u&&S.to({},{duration:u-S.duration()})}}u||a.duration(u=S.duration())}else a.timeline=0;return h===!0&&!m_&&(Ws=is(a),Gt.killTweensOf(v),Ws=0),Fr(p,is(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!m&&a._start===Vt(p._time)&&Ei(d)&&XN(is(a))&&p.data!=="nested")&&(a._tTime=-Pt,a.render(Math.max(0,-c)||0)),g&&mE(is(a),g),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-Pt&&!c?l:r<Pt?0:r,f,h,m,_,g,p,v,S;if(!u)qN(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=d,S=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(f=Vt(d%_),d===l?(m=this._repeat,f=u):(g=Vt(d/_),m=~~g,m&&m===g?(f=u,m--):f>u&&(f=u)),p=this._yoyo&&m&1,p&&(f=u-f),g=wl(this._tTime,_),f===a&&!o&&this._initted&&m===g)return this._tTime=d,this;m!==g&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Vt(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(gE(this,c?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==g))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var x=f<a;if(x!==this._inv){var E=x?a:u-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=E?(x?-1:1)/E:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/u);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!g&&(Vi(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(v,h.d),h=h._next;S&&S.render(r<0?r:S._dur*S._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Ug(this,r,s,o),Vi(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!s&&this.parent&&Vi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Ug(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&co(this,1),!s&&!(c&&!a)&&(d||a||p)&&(Vi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){mc||ki.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||w_(this,u),c=this._ease(u/this._dur),hD(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(yh(this,0),this.parent||hE(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?uu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Dn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ws&&Ws.vars.overwrite!==!0)._first||uu(this),this.parent&&o!==this.timeline.totalDuration()&&Al(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?or(r):a,u=this._ptLookup,c=this._pt,d,f,h,m,_,g,p;if((!s||s==="all")&&GN(a,l))return s==="all"&&(this._pt=0),uu(this);for(d=this._op=this._op||[],s!=="all"&&(An(s)&&(_={},Ti(s,function(v){return _[v]=1}),s=_),s=pD(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=u[p],s==="all"?(d[p]=s,m=f,h={}):(h=d[p]=d[p]||{},m=s);for(_ in m)g=f&&f[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&vh(this,g,"_pt"),delete f[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&c&&uu(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ru(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Ru(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Gt.killTweensOf(r,s,o)},e}(gc);qi(cn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ti("staggerTo,staggerFrom,staggerFromTo",function(n){cn[n]=function(){var e=new _i,t=Fg.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var A_=function(e,t,i){return e[t]=i},IE=function(e,t,i){return e[t](i)},gD=function(e,t,i,r){return e[t](r.fp,i)},_D=function(e,t,i){return e.setAttribute(t,i)},C_=function(e,t){return Jt(e[t])?IE:g_(e[t])&&e.setAttribute?_D:A_},UE=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},vD=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},OE=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},b_=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},xD=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},yD=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?vh(this,t,"_pt"):t.dep||(i=1),t=r;return!i},SD=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},FE=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},wi=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||UE,this.d=l||this,this.set=u||A_,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=SD,this.m=i,this.mt=s,this.tween=r},n}();Ti(S_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return y_[n]=1});Yi.TweenMax=Yi.TweenLite=cn;Yi.TimelineLite=Yi.TimelineMax=_i;Gt=new _i({sortChildren:!1,defaults:fc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Wi.stringFilter=bE;var Wo=[],td={},MD=[],py=0,ED=0,Op=function(e){return(td[e]||MD).map(function(t){return t()})},Vg=function(){var e=Date.now(),t=[];e-py>2&&(Op("matchMediaInit"),Wo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=Dr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Op("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),py=e,Op("matchMedia"))},kE=function(){function n(t,i){this.selector=i&&kg(i),this.data=[],this._r=[],this.isReverted=!1,this.id=ED++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Jt(i)&&(s=r,r=i,i=Jt);var o=this,a=function(){var u=zt,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=kg(s)),zt=o,d=r.apply(o,arguments),Jt(d)&&o._r.push(d),zt=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===Jt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=zt;zt=null,i(this),zt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof cn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof _i?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof cn)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Wo.length;o--;)Wo[o].id===this.id&&Wo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),TD=function(){function n(t){this.contexts=[],this.scope=t,zt&&zt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){jr(i)||(i={matches:i});var o=new kE(0,s||this.scope),a=o.conditions={},l,u,c;zt&&!o.selector&&(o.selector=zt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=Dr.matchMedia(i[u]),l&&(Wo.indexOf(o)<0&&Wo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Vg):l.addEventListener("change",Vg)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Wd={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return wE(r)})},timeline:function(e){return new _i(e)},getTweensOf:function(e,t){return Gt.getTweensOf(e,t)},getProperty:function(e,t,i,r){An(e)&&(e=or(e)[0]);var s=Vo(e||{}).get,o=i?dE:fE;return i==="native"&&(i=""),e&&(t?o((Ii[t]&&Ii[t].get||s)(e,t,i,r)):function(a,l,u){return o((Ii[a]&&Ii[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=or(e),e.length>1){var r=e.map(function(c){return Ci.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=Ii[t],a=Vo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;Za._pt=0,d.init(e,i?c+i:c,Za,0,[e]),d.render(1,d),Za._pt&&b_(1,Za)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=Ci.to(e,qi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Go(e.ease,fc.ease)),uy(fc,e||{})},config:function(e){return uy(Wi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Ii[a]&&!Yi[a]&&dc(t+" effect requires "+a+" plugin.")}),Np[t]=function(a,l,u){return i(or(a),qi(l||{},s),u)},o&&(_i.prototype[t]=function(a,l,u){return this.add(Np[t](a,jr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){_t[e]=Go(t)},parseEase:function(e,t){return arguments.length?Go(e,t):_t},getById:function(e){return Gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new _i(e),r,s;for(i.smoothChildTiming=Ei(e.smoothChildTiming),Gt.remove(i),i._dp=0,i._time=i._tTime=Gt._time,r=Gt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof cn&&r.vars.onComplete===r._targets[0]))&&Fr(i,r,r._start-r._delay),r=s;return Fr(Gt,i,0),i},context:function(e,t){return e?new kE(e,t):zt},matchMedia:function(e){return new TD(e)},matchMediaRefresh:function(){return Wo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Vg()},addEventListener:function(e,t){var i=td[e]||(td[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=td[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:tD,wrapYoyo:nD,distribute:xE,random:SE,snap:yE,normalize:eD,getUnit:Xn,clamp:KN,splitColor:AE,toArray:or,selector:kg,mapRange:EE,pipe:JN,unitize:QN,interpolate:iD,shuffle:vE},install:oE,effects:Np,ticker:ki,updateRoot:_i.updateRoot,plugins:Ii,globalTimeline:Gt,core:{PropTween:wi,globals:aE,Tween:cn,Timeline:_i,Animation:gc,getCache:Vo,_removeLinkedListItem:vh,reverting:function(){return Dn},context:function(e){return e&&zt&&(zt.data.push(e),e._ctx=zt),zt},suppressOverwrites:function(e){return m_=e}}};Ti("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Wd[n]=cn[n]});ki.add(_i.updateRoot);Za=Wd.to({},{duration:0});var wD=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},AD=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=wD(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Fp=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(An(s)&&(l={},Ti(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}AD(a,s)}}}},Ci=Wd.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Dn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Fp("roundProps",Bg),Fp("modifiers"),Fp("snap",yE))||Wd;cn.version=_i.version=Ci.version="3.15.0";sE=1;__()&&Cl();_t.Power0;_t.Power1;_t.Power2;_t.Power3;_t.Power4;_t.Linear;_t.Quad;_t.Cubic;_t.Quart;_t.Quint;_t.Strong;_t.Elastic;_t.Back;_t.SteppedEase;_t.Bounce;_t.Sine;_t.Expo;_t.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var my,Xs,ll,R_,Fo,gy,P_,CD=function(){return typeof window<"u"},Ts={},Ro=180/Math.PI,ul=Math.PI/180,ba=Math.atan2,_y=1e8,L_=/([A-Z])/g,bD=/(left|right|width|margin|padding|x)/i,RD=/[\s,\(]\S/,zr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Hg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},PD=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},LD=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ND=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},DD=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},BE=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},zE=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ID=function(e,t,i){return e.style[t]=i},UD=function(e,t,i){return e.style.setProperty(t,i)},OD=function(e,t,i){return e._gsap[t]=i},FD=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},kD=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},BD=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Yt="transform",Ai=Yt+"Origin",zD=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Ts&&s){if(this.tfm=this.tfm||{},e!=="transform")e=zr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=ss(r,a)}):this.tfm[e]=o.x?o[e]:ss(r,e),e===Ai&&(this.tfm.zOrigin=o.zOrigin);else return zr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Yt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Ai,t,"")),e=Yt}(s||t)&&this.props.push(e,t,s[e])},VE=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},VD=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(L_,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=P_(),(!s||!s.isStart)&&!i[Yt]&&(VE(i),r.zOrigin&&i[Ai]&&(i[Ai]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},HE=function(e,t){var i={target:e,props:[],revert:VD,save:zD};return e._gsap||Ci.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},GE,Gg=function(e,t){var i=Xs.createElementNS?Xs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Xs.createElement(e);return i&&i.style?i:Xs.createElement(e)},Hi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(L_,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,bl(t)||t,1)||""},vy="O,Moz,ms,Ms,Webkit".split(","),bl=function(e,t,i){var r=t||Fo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(vy[o]+e in s););return o<0?null:(o===3?"ms":o>=0?vy[o]:"")+e},Wg=function(){CD()&&window.document&&(my=window,Xs=my.document,ll=Xs.documentElement,Fo=Gg("div")||{style:{}},Gg("div"),Yt=bl(Yt),Ai=Yt+"Origin",Fo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",GE=!!bl("perspective"),P_=Ci.core.reverting,R_=1)},xy=function(e){var t=e.ownerSVGElement,i=Gg("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),ll.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),ll.removeChild(i),s},yy=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},WE=function(e){var t,i;try{t=e.getBBox()}catch{t=xy(e),i=1}return t&&(t.width||t.height)||i||(t=xy(e)),t&&!t.width&&!t.x&&!t.y?{x:+yy(e,["x","cx","x1"])||0,y:+yy(e,["y","cy","y1"])||0,width:0,height:0}:t},XE=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&WE(e))},fo=function(e,t){if(t){var i=e.style,r;t in Ts&&t!==Ai&&(t=Yt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(L_,"-$1").toLowerCase())):i.removeAttribute(t)}},Ys=function(e,t,i,r,s,o){var a=new wi(e._pt,t,i,0,1,o?zE:BE);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Sy={deg:1,rad:1,turn:1},HD={grid:1,flex:1},ho=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Fo.style,l=bD.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",h=r==="%",m,_,g,p;if(r===o||!s||Sy[r]||Sy[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),p=e.getCTM&&XE(e),(h||o==="%")&&(Ts[t]||~t.indexOf("adius")))return m=p?e.getBBox()[l?"width":"height"]:e[c],tn(h?s/m*d:s/100*m);if(a[l?"width":"height"]=d+(f?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Xs||!_.appendChild)&&(_=Xs.body),g=_._gsap,g&&h&&g.width&&l&&g.time===ki.time&&!g.uncache)return tn(s/g.width*d);if(h&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+r,m=e[c],v?e.style[t]=v:fo(e,t)}else(h||o==="%")&&!HD[Hi(_,"display")]&&(a.position=Hi(e,"position")),_===e&&(a.position="static"),_.appendChild(Fo),m=Fo[c],_.removeChild(Fo),a.position="absolute";return l&&h&&(g=Vo(_),g.time=ki.time,g.width=_[c]),tn(f?m*s/d:m&&s?d/m*s:0)},ss=function(e,t,i,r){var s;return R_||Wg(),t in zr&&t!=="transform"&&(t=zr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ts[t]&&t!=="transform"?(s=vc(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Yd(Hi(e,Ai))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Xd[t]&&Xd[t](e,t,i)||Hi(e,t)||uE(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?ho(e,t,s,i)+i:s},GD=function(e,t,i,r){if(!i||i==="none"){var s=bl(t,e,1),o=s&&Hi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Hi(e,"borderTopColor"))}var a=new wi(this._pt,e.style,t,0,1,OE),l=0,u=0,c,d,f,h,m,_,g,p,v,S,x,E;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Hi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Hi(e,t)||r,_?e.style[t]=_:fo(e,t)),c=[i,r],bE(c),i=c[0],r=c[1],f=i.match(Ka)||[],E=r.match(Ka)||[],E.length){for(;d=Ka.exec(r);)g=d[0],v=r.substring(l,d.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),g!==(_=f[u++]||"")&&(h=parseFloat(_)||0,x=_.substr((h+"").length),g.charAt(1)==="="&&(g=al(h,g)+x),p=parseFloat(g),S=g.substr((p+"").length),l=Ka.lastIndex-S.length,S||(S=S||Wi.units[t]||x,l===r.length&&(r+=S,a.e+=S)),x!==S&&(h=ho(e,t,_,S)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:h,c:p-h,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?zE:BE;return rE.test(r)&&(a.e=0),this._pt=a,a},My={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},WD=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=My[i]||i,t[1]=My[r]||r,t.join(" ")},XD=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Ts[a]&&(l=1,a=a==="transformOrigin"?Ai:Yt),fo(i,a);l&&(fo(i,Yt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",vc(i,1),o.uncache=1,VE(r)))}},Xd={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new wi(e._pt,t,i,0,0,XD);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},_c=[1,0,0,1,0,0],YE={},qE=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ey=function(e){var t=Hi(e,Yt);return qE(t)?_c:t.substr(7).match(iE).map(tn)},N_=function(e,t){var i=e._gsap||Vo(e),r=e.style,s=Ey(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?_c:s):(s===_c&&!e.offsetParent&&e!==ll&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,ll.appendChild(e)),s=Ey(e),l?r.display=l:fo(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):ll.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Xg=function(e,t,i,r,s,o){var a=e._gsap,l=s||N_(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,h=l[0],m=l[1],_=l[2],g=l[3],p=l[4],v=l[5],S=t.split(" "),x=parseFloat(S[0])||0,E=parseFloat(S[1])||0,T,w,y,A;i?l!==_c&&(w=h*g-m*_)&&(y=x*(g/w)+E*(-_/w)+(_*v-g*p)/w,A=x*(-m/w)+E*(h/w)-(h*v-m*p)/w,x=y,E=A):(T=WE(e),x=T.x+(~S[0].indexOf("%")?x/100*T.width:x),E=T.y+(~(S[1]||S[0]).indexOf("%")?E/100*T.height:E)),r||r!==!1&&a.smooth?(p=x-u,v=E-c,a.xOffset=d+(p*h+v*_)-p,a.yOffset=f+(p*m+v*g)-v):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=E,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[Ai]="0px 0px",o&&(Ys(o,a,"xOrigin",u,x),Ys(o,a,"yOrigin",c,E),Ys(o,a,"xOffset",d,a.xOffset),Ys(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+E)},vc=function(e,t){var i=e._gsap||new PE(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Hi(e,Ai)||"0",c,d,f,h,m,_,g,p,v,S,x,E,T,w,y,A,b,L,N,W,I,H,j,B,V,z,R,K,pe,we,ze,We;return c=d=f=_=g=p=v=S=x=0,h=m=1,i.svg=!!(e.getCTM&&XE(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Yt]!=="none"?l[Yt]:"")),r.scale=r.rotate=r.translate="none"),w=N_(e,i.svg),i.svg&&(i.uncache?(V=e.getBBox(),u=i.xOrigin-V.x+"px "+(i.yOrigin-V.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),Xg(e,B||u,!!B||i.originIsAbsolute,i.smooth!==!1,w)),E=i.xOrigin||0,T=i.yOrigin||0,w!==_c&&(L=w[0],N=w[1],W=w[2],I=w[3],c=H=w[4],d=j=w[5],w.length===6?(h=Math.sqrt(L*L+N*N),m=Math.sqrt(I*I+W*W),_=L||N?ba(N,L)*Ro:0,v=W||I?ba(W,I)*Ro+_:0,v&&(m*=Math.abs(Math.cos(v*ul))),i.svg&&(c-=E-(E*L+T*W),d-=T-(E*N+T*I))):(We=w[6],we=w[7],R=w[8],K=w[9],pe=w[10],ze=w[11],c=w[12],d=w[13],f=w[14],y=ba(We,pe),g=y*Ro,y&&(A=Math.cos(-y),b=Math.sin(-y),B=H*A+R*b,V=j*A+K*b,z=We*A+pe*b,R=H*-b+R*A,K=j*-b+K*A,pe=We*-b+pe*A,ze=we*-b+ze*A,H=B,j=V,We=z),y=ba(-W,pe),p=y*Ro,y&&(A=Math.cos(-y),b=Math.sin(-y),B=L*A-R*b,V=N*A-K*b,z=W*A-pe*b,ze=I*b+ze*A,L=B,N=V,W=z),y=ba(N,L),_=y*Ro,y&&(A=Math.cos(y),b=Math.sin(y),B=L*A+N*b,V=H*A+j*b,N=N*A-L*b,j=j*A-H*b,L=B,H=V),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,p=180-p),h=tn(Math.sqrt(L*L+N*N+W*W)),m=tn(Math.sqrt(j*j+We*We)),y=ba(H,j),v=Math.abs(y)>2e-4?y*Ro:0,x=ze?1/(ze<0?-ze:ze):0),i.svg&&(B=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!qE(Hi(e,Yt)),B&&e.setAttribute("transform",B))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(h*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=tn(h),i.scaleY=tn(m),i.rotation=tn(_)+a,i.rotationX=tn(g)+a,i.rotationY=tn(p)+a,i.skewX=v+a,i.skewY=S+a,i.transformPerspective=x+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Ai]=Yd(u)),i.xOffset=i.yOffset=0,i.force3D=Wi.force3D,i.renderTransform=i.svg?qD:GE?$E:YD,i.uncache=0,i},Yd=function(e){return(e=e.split(" "))[0]+" "+e[1]},kp=function(e,t,i){var r=Xn(t);return tn(parseFloat(t)+parseFloat(ho(e,"x",i+"px",r)))+r},YD=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,$E(e,t)},wo="0deg",Ql="0px",Ao=") ",$E=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,h=i.skewY,m=i.scaleX,_=i.scaleY,g=i.transformPerspective,p=i.force3D,v=i.target,S=i.zOrigin,x="",E=p==="auto"&&e&&e!==1||p===!0;if(S&&(d!==wo||c!==wo)){var T=parseFloat(c)*ul,w=Math.sin(T),y=Math.cos(T),A;T=parseFloat(d)*ul,A=Math.cos(T),o=kp(v,o,w*A*-S),a=kp(v,a,-Math.sin(T)*-S),l=kp(v,l,y*A*-S+S)}g!==Ql&&(x+="perspective("+g+Ao),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(E||o!==Ql||a!==Ql||l!==Ql)&&(x+=l!==Ql||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ao),u!==wo&&(x+="rotate("+u+Ao),c!==wo&&(x+="rotateY("+c+Ao),d!==wo&&(x+="rotateX("+d+Ao),(f!==wo||h!==wo)&&(x+="skew("+f+", "+h+Ao),(m!==1||_!==1)&&(x+="scale("+m+", "+_+Ao),v.style[Yt]=x||"translate(0, 0)"},qD=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,h=i.target,m=i.xOrigin,_=i.yOrigin,g=i.xOffset,p=i.yOffset,v=i.forceCSS,S=parseFloat(o),x=parseFloat(a),E,T,w,y,A;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=ul,u*=ul,E=Math.cos(l)*d,T=Math.sin(l)*d,w=Math.sin(l-u)*-f,y=Math.cos(l-u)*f,u&&(c*=ul,A=Math.tan(u-c),A=Math.sqrt(1+A*A),w*=A,y*=A,c&&(A=Math.tan(c),A=Math.sqrt(1+A*A),E*=A,T*=A)),E=tn(E),T=tn(T),w=tn(w),y=tn(y)):(E=d,y=f,T=w=0),(S&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(S=ho(h,"x",o,"px"),x=ho(h,"y",a,"px")),(m||_||g||p)&&(S=tn(S+m-(m*E+_*w)+g),x=tn(x+_-(m*T+_*y)+p)),(r||s)&&(A=h.getBBox(),S=tn(S+r/100*A.width),x=tn(x+s/100*A.height)),A="matrix("+E+","+T+","+w+","+y+","+S+","+x+")",h.setAttribute("transform",A),v&&(h.style[Yt]=A)},$D=function(e,t,i,r,s){var o=360,a=An(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ro:1),u=l-r,c=r+u+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*_y)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*_y)%o-~~(u/o)*o)),e._pt=f=new wi(e._pt,t,i,r,u,PD),f.e=c,f.u="deg",e._props.push(i),f},Ty=function(e,t){for(var i in t)e[i]=t[i];return e},jD=function(e,t,i){var r=Ty({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,f,h,m;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Yt]=t,a=vc(i,1),fo(i,Yt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Yt],o[Yt]=t,a=vc(i,1),o[Yt]=u);for(l in Ts)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(h=Xn(u),m=Xn(c),d=h!==m?ho(i,l,u,m):parseFloat(u),f=parseFloat(c),e._pt=new wi(e._pt,a,l,d,f-d,Hg),e._pt.u=m||0,e._props.push(l));Ty(a,r)};Ti("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Xd[e>1?"border"+n:n]=function(a,l,u,c,d){var f,h;if(arguments.length<4)return f=o.map(function(m){return ss(a,m,u)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(c+"").split(" "),h={},o.forEach(function(m,_){return h[m]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,h,d)}});var jE={name:"css",register:Wg,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,f,h,m,_,g,p,v,S,x,E,T,w,y,A;R_||Wg(),this.styles=this.styles||HE(e),y=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(Ii[_]&&LE(_,t,i,r,e,s)))){if(h=typeof c,m=Xd[_],h==="function"&&(c=c.call(i,r,e,s),h=typeof c),h==="string"&&~c.indexOf("random(")&&(c=pc(c)),m)m(this,e,_,c,i)&&(w=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",so.lastIndex=0,so.test(u)||(g=Xn(u),p=Xn(c),p?g!==p&&(u=ho(e,_,u,p)+p):g&&(c+=g)),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),y.push(_,0,a[_]);else if(h!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],An(u)&&~u.indexOf("random(")&&(u=pc(u)),Xn(u+"")||u==="auto"||(u+=Wi.units[_]||Xn(ss(e,_))||""),(u+"").charAt(1)==="="&&(u=ss(e,_))):u=ss(e,_),f=parseFloat(u),v=h==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),d=parseFloat(c),_ in zr&&(_==="autoAlpha"&&(f===1&&ss(e,"visibility")==="hidden"&&d&&(f=0),y.push("visibility",0,a.visibility),Ys(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=zr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in Ts,S){if(this.styles.save(_),A=c,h==="string"&&c.substring(0,6)==="var(--"){if(c=Hi(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var b=e.style.perspective;e.style.perspective=c,c=Hi(e,"perspective"),b?e.style.perspective=b:fo(e,"perspective")}d=parseFloat(c)}if(x||(E=e._gsap,E.renderTransform&&!t.parseTransform||vc(e,t.parseTransform),T=t.smoothOrigin!==!1&&E.smooth,x=this._pt=new wi(this._pt,a,Yt,0,1,E.renderTransform,E,0,-1),x.dep=1),_==="scale")this._pt=new wi(this._pt,E,"scaleY",E.scaleY,(v?al(E.scaleY,v+d):d)-E.scaleY||0,Hg),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){y.push(Ai,0,a[Ai]),c=WD(c),E.svg?Xg(e,c,0,T,0,this):(p=parseFloat(c.split(" ")[2])||0,p!==E.zOrigin&&Ys(this,E,"zOrigin",E.zOrigin,p),Ys(this,a,_,Yd(u),Yd(c)));continue}else if(_==="svgOrigin"){Xg(e,c,1,T,0,this);continue}else if(_ in YE){$D(this,E,_,f,v?al(f,v+c):c);continue}else if(_==="smoothOrigin"){Ys(this,E,"smooth",E.smooth,c);continue}else if(_==="force3D"){E[_]=c;continue}else if(_==="transform"){jD(this,c,e);continue}}else _ in a||(_=bl(_)||_);if(S||(d||d===0)&&(f||f===0)&&!RD.test(c)&&_ in a)g=(u+"").substr((f+"").length),d||(d=0),p=Xn(c)||(_ in Wi.units?Wi.units[_]:g),g!==p&&(f=ho(e,_,u,p)),this._pt=new wi(this._pt,S?E:a,_,f,(v?al(f,v+d):d)-f,!S&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?DD:Hg),this._pt.u=p||0,S&&A!==c?(this._pt.b=u,this._pt.e=A,this._pt.r=ND):g!==p&&p!=="%"&&(this._pt.b=u,this._pt.r=LD);else if(_ in a)GD.call(this,e,_,u,v?v+c:c);else if(_ in e)this.add(e,_,u||e[_],v?v+c:c,r,s);else if(_!=="parseTransform"){x_(_,c);continue}S||(_ in a?y.push(_,0,a[_]):typeof e[_]=="function"?y.push(_,2,e[_]()):y.push(_,1,u||e[_])),o.push(_)}}w&&FE(this)},render:function(e,t){if(t.tween._time||!P_())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:ss,aliases:zr,getSetter:function(e,t,i){var r=zr[t];return r&&r.indexOf(",")<0&&(t=r),t in Ts&&t!==Ai&&(e._gsap.x||ss(e,"x"))?i&&gy===i?t==="scale"?FD:OD:(gy=i||{})&&(t==="scale"?kD:BD):e.style&&!g_(e.style[t])?ID:~t.indexOf("-")?UD:C_(e,t)},core:{_removeProperty:fo,_getMatrix:N_}};Ci.utils.checkPrefix=bl;Ci.core.getStyleSaver=HE;(function(n,e,t,i){var r=Ti(n+","+e+","+t,function(s){Ts[s]=1});Ti(e,function(s){Wi.units[s]="deg",YE[s]=1}),zr[r[13]]=n+","+e,Ti(i,function(s){var o=s.split(":");zr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ti("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Wi.units[n]="px"});Ci.registerPlugin(jE);var ni=Ci.registerPlugin(jE)||Ci;ni.core.Tween;function KD(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function ZD(n,e,t){return e&&KD(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Rn,nd,Bi,qs,$s,cl,KE,Po,fl,ZE,ds,_r,JE,QE=function(){return Rn||typeof window<"u"&&(Rn=window.gsap)&&Rn.registerPlugin&&Rn},eT=1,Ja=[],ut=[],Xr=[],Lu=Date.now,Yg=function(e,t){return t},JD=function(){var e=fl.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,ut),r.push.apply(r,Xr),ut=i,Xr=r,Yg=function(o,a){return t[o](a)}},oo=function(e,t){return~Xr.indexOf(e)&&Xr[Xr.indexOf(e)+1][t]},Nu=function(e){return!!~ZE.indexOf(e)},ei=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Qn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Ef="scrollLeft",Tf="scrollTop",qg=function(){return ds&&ds.isPressed||ut.cache++},qd=function(e,t){var i=function r(s){if(s||s===0){eT&&(Bi.history.scrollRestoration="manual");var o=ds&&ds.isPressed;s=r.v=Math.round(s)||(ds&&ds.iOS?1:0),e(s),r.cacheID=ut.cache,o&&Yg("ss",s)}else(t||ut.cache!==r.cacheID||Yg("ref"))&&(r.cacheID=ut.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},ai={s:Ef,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:qd(function(n){return arguments.length?Bi.scrollTo(n,mn.sc()):Bi.pageXOffset||qs[Ef]||$s[Ef]||cl[Ef]||0})},mn={s:Tf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ai,sc:qd(function(n){return arguments.length?Bi.scrollTo(ai.sc(),n):Bi.pageYOffset||qs[Tf]||$s[Tf]||cl[Tf]||0})},pi=function(e,t){return(t&&t._ctx&&t._ctx.selector||Rn.utils.toArray)(e)[0]||(typeof e=="string"&&Rn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},QD=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},po=function(e,t){var i=t.s,r=t.sc;Nu(e)&&(e=qs.scrollingElement||$s);var s=ut.indexOf(e),o=r===mn.sc?1:2;!~s&&(s=ut.push(e)-1),ut[s+o]||ei(e,"scroll",qg);var a=ut[s+o],l=a||(ut[s+o]=qd(oo(e,i),!0)||(Nu(e)?r:qd(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=Rn.getProperty(e,"scrollBehavior")==="smooth"),l},$g=function(e,t,i){var r=e,s=e,o=Lu(),a=o,l=t||50,u=Math.max(500,l*3),c=function(m,_){var g=Lu();_||g-o>l?(s=r,r=m,a=o,o=g):i?r+=m:r=s+(m-s)/(g-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(m){var _=a,g=s,p=Lu();return(m||m===0)&&m!==r&&c(m),o===a||p-a>u?0:(r+(i?g:-g))/((i?p:o)-_)*1e3};return{update:c,reset:d,getVelocity:f}},eu=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},wy=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},tT=function(){fl=Rn.core.globals().ScrollTrigger,fl&&fl.core&&JD()},nT=function(e){return Rn=e||QE(),!nd&&Rn&&typeof document<"u"&&document.body&&(Bi=window,qs=document,$s=qs.documentElement,cl=qs.body,ZE=[Bi,qs,$s,cl],Rn.utils.clamp,JE=Rn.core.context||function(){},Po="onpointerenter"in cl?"pointer":"mouse",KE=rn.isTouch=Bi.matchMedia&&Bi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Bi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,_r=rn.eventTypes=("ontouchstart"in $s?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in $s?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return eT=0},500),nd=1),fl||tT(),nd};ai.op=mn;ut.cache=0;var rn=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){nd||nT(Rn)||console.warn("Please gsap.registerPlugin(Observer)"),fl||tT();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,f=i.onStopDelay,h=i.ignore,m=i.wheelSpeed,_=i.event,g=i.onDragStart,p=i.onDragEnd,v=i.onDrag,S=i.onPress,x=i.onRelease,E=i.onRight,T=i.onLeft,w=i.onUp,y=i.onDown,A=i.onChangeX,b=i.onChangeY,L=i.onChange,N=i.onToggleX,W=i.onToggleY,I=i.onHover,H=i.onHoverEnd,j=i.onMove,B=i.ignoreCheck,V=i.isNormalizer,z=i.onGestureStart,R=i.onGestureEnd,K=i.onWheel,pe=i.onEnable,we=i.onDisable,ze=i.onClick,We=i.scrollSpeed,qe=i.capture,J=i.allowClicks,ne=i.lockAxis,_e=i.onLockAxis;this.target=a=pi(a)||$s,this.vars=i,h&&(h=Rn.utils.toArray(h)),r=r||1e-9,s=s||0,m=m||1,We=We||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(Bi.getComputedStyle(cl).lineHeight)||22);var $e,ye,Ue,Fe,ee,se,le,D=this,he=0,Ge=0,ke=i.passive||!c&&i.passive!==!1,Pe=po(a,ai),Je=po(a,mn),O=Pe(),ot=Je(),Ke=~o.indexOf("touch")&&!~o.indexOf("pointer")&&_r[0]==="pointerdown",P=Nu(a),M=a.ownerDocument||qs,G=[0,0,0],Y=[0,0,0],Q=0,me=function(){return Q=Lu()},ce=function(ae,je){return(D.event=ae)&&h&&QD(ae.target,h)||je&&Ke&&ae.pointerType!=="touch"||B&&B(ae,je)},te=function(){D._vx.reset(),D._vy.reset(),ye.pause(),d&&d(D)},re=function(){var ae=D.deltaX=wy(G),je=D.deltaY=wy(Y),ue=Math.abs(ae)>=r,Ze=Math.abs(je)>=r;L&&(ue||Ze)&&L(D,ae,je,G,Y),ue&&(E&&D.deltaX>0&&E(D),T&&D.deltaX<0&&T(D),A&&A(D),N&&D.deltaX<0!=he<0&&N(D),he=D.deltaX,G[0]=G[1]=G[2]=0),Ze&&(y&&D.deltaY>0&&y(D),w&&D.deltaY<0&&w(D),b&&b(D),W&&D.deltaY<0!=Ge<0&&W(D),Ge=D.deltaY,Y[0]=Y[1]=Y[2]=0),(Fe||Ue)&&(j&&j(D),Ue&&(g&&Ue===1&&g(D),v&&v(D),Ue=0),Fe=!1),se&&!(se=!1)&&_e&&_e(D),ee&&(K(D),ee=!1),$e=0},Se=function(ae,je,ue){G[ue]+=ae,Y[ue]+=je,D._vx.update(ae),D._vy.update(je),u?$e||($e=requestAnimationFrame(re)):re()},Oe=function(ae,je){ne&&!le&&(D.axis=le=Math.abs(ae)>Math.abs(je)?"x":"y",se=!0),le!=="y"&&(G[2]+=ae,D._vx.update(ae,!0)),le!=="x"&&(Y[2]+=je,D._vy.update(je,!0)),u?$e||($e=requestAnimationFrame(re)):re()},Me=function(ae){if(!ce(ae,1)){ae=eu(ae,c);var je=ae.clientX,ue=ae.clientY,Ze=je-D.x,Be=ue-D.y,tt=D.isDragging;D.x=je,D.y=ue,(tt||(Ze||Be)&&(Math.abs(D.startX-je)>=s||Math.abs(D.startY-ue)>=s))&&(Ue||(Ue=tt?2:1),tt||(D.isDragging=!0),Oe(Ze,Be))}},xe=D.onPress=function(fe){ce(fe,1)||fe&&fe.button||(D.axis=le=null,ye.pause(),D.isPressed=!0,fe=eu(fe),he=Ge=0,D.startX=D.x=fe.clientX,D.startY=D.y=fe.clientY,D._vx.reset(),D._vy.reset(),ei(V?a:M,_r[1],Me,ke,!0),D.deltaX=D.deltaY=0,S&&S(D))},de=D.onRelease=function(fe){if(!ce(fe,1)){Qn(V?a:M,_r[1],Me,!0);var ae=!isNaN(D.y-D.startY),je=D.isDragging,ue=je&&(Math.abs(D.x-D.startX)>3||Math.abs(D.y-D.startY)>3),Ze=eu(fe);!ue&&ae&&(D._vx.reset(),D._vy.reset(),c&&J&&Rn.delayedCall(.08,function(){if(Lu()-Q>300&&!fe.defaultPrevented){if(fe.target.click)fe.target.click();else if(M.createEvent){var Be=M.createEvent("MouseEvents");Be.initMouseEvent("click",!0,!0,Bi,1,Ze.screenX,Ze.screenY,Ze.clientX,Ze.clientY,!1,!1,!1,!1,0,null),fe.target.dispatchEvent(Be)}}})),D.isDragging=D.isGesturing=D.isPressed=!1,d&&je&&!V&&ye.restart(!0),Ue&&re(),p&&je&&p(D),x&&x(D,ue)}},Xe=function(ae){return ae.touches&&ae.touches.length>1&&(D.isGesturing=!0)&&z(ae,D.isDragging)},Qe=function(){return(D.isGesturing=!1)||R(D)},F=function(ae){if(!ce(ae)){var je=Pe(),ue=Je();Se((je-O)*We,(ue-ot)*We,1),O=je,ot=ue,d&&ye.restart(!0)}},ve=function(ae){if(!ce(ae)){ae=eu(ae,c),K&&(ee=!0);var je=(ae.deltaMode===1?l:ae.deltaMode===2?Bi.innerHeight:1)*m;Se(ae.deltaX*je,ae.deltaY*je,0),d&&!V&&ye.restart(!0)}},ie=function(ae){if(!ce(ae)){var je=ae.clientX,ue=ae.clientY,Ze=je-D.x,Be=ue-D.y;D.x=je,D.y=ue,Fe=!0,d&&ye.restart(!0),(Ze||Be)&&Oe(Ze,Be)}},Ee=function(ae){D.event=ae,I(D)},Ae=function(ae){D.event=ae,H(D)},oe=function(ae){return ce(ae)||eu(ae,c)&&ze(D)};ye=D._dc=Rn.delayedCall(f||.25,te).pause(),D.deltaX=D.deltaY=0,D._vx=$g(0,50,!0),D._vy=$g(0,50,!0),D.scrollX=Pe,D.scrollY=Je,D.isDragging=D.isGesturing=D.isPressed=!1,JE(this),D.enable=function(fe){return D.isEnabled||(ei(P?M:a,"scroll",qg),o.indexOf("scroll")>=0&&ei(P?M:a,"scroll",F,ke,qe),o.indexOf("wheel")>=0&&ei(a,"wheel",ve,ke,qe),(o.indexOf("touch")>=0&&KE||o.indexOf("pointer")>=0)&&(ei(a,_r[0],xe,ke,qe),ei(M,_r[2],de),ei(M,_r[3],de),J&&ei(a,"click",me,!0,!0),ze&&ei(a,"click",oe),z&&ei(M,"gesturestart",Xe),R&&ei(M,"gestureend",Qe),I&&ei(a,Po+"enter",Ee),H&&ei(a,Po+"leave",Ae),j&&ei(a,Po+"move",ie)),D.isEnabled=!0,D.isDragging=D.isGesturing=D.isPressed=Fe=Ue=!1,D._vx.reset(),D._vy.reset(),O=Pe(),ot=Je(),fe&&fe.type&&xe(fe),pe&&pe(D)),D},D.disable=function(){D.isEnabled&&(Ja.filter(function(fe){return fe!==D&&Nu(fe.target)}).length||Qn(P?M:a,"scroll",qg),D.isPressed&&(D._vx.reset(),D._vy.reset(),Qn(V?a:M,_r[1],Me,!0)),Qn(P?M:a,"scroll",F,qe),Qn(a,"wheel",ve,qe),Qn(a,_r[0],xe,qe),Qn(M,_r[2],de),Qn(M,_r[3],de),Qn(a,"click",me,!0),Qn(a,"click",oe),Qn(M,"gesturestart",Xe),Qn(M,"gestureend",Qe),Qn(a,Po+"enter",Ee),Qn(a,Po+"leave",Ae),Qn(a,Po+"move",ie),D.isEnabled=D.isPressed=D.isDragging=!1,we&&we(D))},D.kill=D.revert=function(){D.disable();var fe=Ja.indexOf(D);fe>=0&&Ja.splice(fe,1),ds===D&&(ds=0)},Ja.push(D),V&&Nu(a)&&(ds=D),D.enable(_)},ZD(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();rn.version="3.15.0";rn.create=function(n){return new rn(n)};rn.register=nT;rn.getAll=function(){return Ja.slice()};rn.getById=function(n){return Ja.filter(function(e){return e.vars.id===n})[0]};QE()&&Rn.registerPlugin(rn);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ie,Da,lt,Et,Oi,Mt,D_,$d,xc,Du,fu,wf,Hn,Sh,jg,si,Ay,Cy,Ia,iT,Bp,rT,ii,Kg,sT,oT,Us,Zg,I_,dl,U_,Iu,Jg,zp,Af=1,Gn=Date.now,Vp=Gn(),lr=0,du=0,by=function(e,t,i){var r=Ni(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Ry=function(e,t){return t&&(!Ni(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},eI=function n(){return du&&requestAnimationFrame(n)},Py=function(){return Sh=1},Ly=function(){return Sh=0},Ir=function(e){return e},hu=function(e){return Math.round(e*1e5)/1e5||0},aT=function(){return typeof window<"u"},lT=function(){return Ie||aT()&&(Ie=window.gsap)&&Ie.registerPlugin&&Ie},ia=function(e){return!!~D_.indexOf(e)},uT=function(e){return(e==="Height"?U_:lt["inner"+e])||Oi["client"+e]||Mt["client"+e]},cT=function(e){return oo(e,"getBoundingClientRect")||(ia(e)?function(){return ad.width=lt.innerWidth,ad.height=U_,ad}:function(){return ls(e)})},tI=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=oo(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?uT(s):e["client"+s])||0}},nI=function(e,t){return!t||~Xr.indexOf(e)?cT(e):function(){return ad}},Vr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=oo(e,i))?o()-cT(e)()[s]:ia(e)?(Oi[i]||Mt[i])-uT(r):e[i]-e["offset"+r])},Cf=function(e,t){for(var i=0;i<Ia.length;i+=3)(!t||~t.indexOf(Ia[i+1]))&&e(Ia[i],Ia[i+1],Ia[i+2])},Ni=function(e){return typeof e=="string"},Yn=function(e){return typeof e=="function"},pu=function(e){return typeof e=="number"},Lo=function(e){return typeof e=="object"},tu=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Ra=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},Pa=Math.abs,fT="left",dT="top",O_="right",F_="bottom",Xo="width",Yo="height",Uu="Right",Ou="Left",Fu="Top",ku="Bottom",un="padding",nr="margin",Rl="Width",k_="Height",hn="px",ir=function(e){return lt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},iI=function(e){var t=ir(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Ny=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},ls=function(e,t){var i=t&&ir(e)[jg]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ie.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},jd=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},hT=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},rI=function(e){return function(t){return Ie.utils.snap(hT(e),t)}},B_=function(e){var t=Ie.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},sI=function(e){return function(t,i){return B_(hT(e))(t,i.direction)}},bf=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},En=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},Mn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Rf=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Dy={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Pf={toggleActions:"play",anticipatePin:0},Kd={top:0,left:0,center:.5,bottom:1,right:1},id=function(e,t){if(Ni(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Kd?Kd[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Lf=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,m=Et.createElement("div"),_=ia(i)||oo(i,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,p=_?Mt:i.tagName==="IFRAME"?i.contentDocument.body:i,v=e.indexOf("start")!==-1,S=v?u:c,x="border-color:"+S+";font-size:"+d+";color:"+S+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((g||l)&&_?"fixed;":"absolute;"),(g||l||!_)&&(x+=(r===mn?O_:F_)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=v,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=x,m.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(m,p.children[0]):p.appendChild(m),m._offset=m["offset"+r.op.d2],rd(m,0,r,v),m},rd=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+Rl]=1,s["border"+a+Rl]=0,s[i.p]=t+"px",Ie.set(e,s)},st=[],Qg={},yc,Iy=function(){return Gn()-lr>34&&(yc||(yc=requestAnimationFrame(_s)))},La=function(){(!ii||!ii.isPressed||ii.startX>Mt.clientWidth)&&(ut.cache++,ii?yc||(yc=requestAnimationFrame(_s)):_s(),lr||sa("scrollStart"),lr=Gn())},Hp=function(){oT=lt.innerWidth,sT=lt.innerHeight},mu=function(e){ut.cache++,(e===!0||!Hn&&!rT&&!Et.fullscreenElement&&!Et.webkitFullscreenElement&&(!Kg||oT!==lt.innerWidth||Math.abs(lt.innerHeight-sT)>lt.innerHeight*.25))&&$d.restart(!0)},ra={},oI=[],pT=function n(){return Mn(ht,"scrollEnd",n)||ko(!0)},sa=function(e){return ra[e]&&ra[e].map(function(t){return t()})||oI},Pi=[],mT=function(e){for(var t=0;t<Pi.length;t+=5)(!e||Pi[t+4]&&Pi[t+4].query===e)&&(Pi[t].style.cssText=Pi[t+1],Pi[t].getBBox&&Pi[t].setAttribute("transform",Pi[t+2]||""),Pi[t+3].uncache=1)},gT=function(){return ut.forEach(function(e){return Yn(e)&&++e.cacheID&&(e.rec=e())})},z_=function(e,t){var i;for(si=0;si<st.length;si++)i=st[si],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Iu=!0,t&&mT(t),t||sa("revert")},_T=function(e,t){ut.cache++,(t||!oi)&&ut.forEach(function(i){return Yn(i)&&i.cacheID++&&(i.rec=0)}),Ni(e)&&(lt.history.scrollRestoration=I_=e)},oi,qo=0,Uy,aI=function(){if(Uy!==qo){var e=Uy=qo;requestAnimationFrame(function(){return e===qo&&ko(!0)})}},vT=function(){Mt.appendChild(dl),U_=!ii&&dl.offsetHeight||lt.innerHeight,Mt.removeChild(dl)},Oy=function(e){return xc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ko=function(e,t){if(Oi=Et.documentElement,Mt=Et.body,D_=[lt,Et,Oi,Mt],lr&&!e&&!Iu){En(ht,"scrollEnd",pT);return}vT(),oi=ht.isRefreshing=!0,Iu||gT();var i=sa("refreshInit");iT&&ht.sort(),t||z_(),ut.forEach(function(r){Yn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),st.slice(0).forEach(function(r){return r.refresh()}),Iu=!1,st.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Jg=1,Oy(!0),st.forEach(function(r){var s=Vr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),Oy(!1),Jg=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),ut.forEach(function(r){Yn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),_T(I_,1),$d.pause(),qo++,oi=2,_s(2),st.forEach(function(r){return Yn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),oi=ht.isRefreshing=!1,sa("refresh")},e0=0,sd=1,Bu,_s=function(e){if(e===2||!oi&&!Iu){ht.isUpdating=!0,Bu&&Bu.update(0);var t=st.length,i=Gn(),r=i-Vp>=50,s=t&&st[0].scroll();if(sd=e0>s?-1:1,oi||(e0=s),r&&(lr&&!Sh&&i-lr>200&&(lr=0,sa("scrollEnd")),fu=Vp,Vp=i),sd<0){for(si=t;si-- >0;)st[si]&&st[si].update(0,r);sd=1}else for(si=0;si<t;si++)st[si]&&st[si].update(0,r);ht.isUpdating=!1}yc=0},t0=[fT,dT,F_,O_,nr+ku,nr+Uu,nr+Fu,nr+Ou,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],od=t0.concat([Xo,Yo,"boxSizing","max"+Rl,"max"+k_,"position",nr,un,un+Fu,un+Uu,un+ku,un+Ou]),lI=function(e,t,i){hl(i);var r=e._gsap;if(r.spacerIsNative)hl(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Gp=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=t0.length,o=t.style,a=e.style,l;s--;)l=t0[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[F_]=a[O_]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Xo]=jd(e,ai)+hn,o[Yo]=jd(e,mn)+hn,o[un]=a[nr]=a[dT]=a[fT]="0",hl(r),a[Xo]=a["max"+Rl]=i[Xo],a[Yo]=a["max"+k_]=i[Yo],a[un]=i[un],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},uI=/([A-Z])/g,hl=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Ie.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(uI,"-$1").toLowerCase())}},Nf=function(e){for(var t=od.length,i=e.style,r=[],s=0;s<t;s++)r.push(od[s],i[od[s]]);return r.t=e,r},cI=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},ad={left:0,top:0},Fy=function(e,t,i,r,s,o,a,l,u,c,d,f,h,m){Yn(e)&&(e=e(l)),Ni(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?id("0"+e.substr(3),i):0));var _=h?h.time():0,g,p,v;if(h&&h.seek(0),isNaN(e)||(e=+e),pu(e))h&&(e=Ie.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),a&&rd(a,i,r,!0);else{Yn(t)&&(t=t(l));var S=(e||"0").split(" "),x,E,T,w;v=pi(t,l)||Mt,x=ls(v)||{},(!x||!x.left&&!x.top)&&ir(v).display==="none"&&(w=v.style.display,v.style.display="block",x=ls(v),w?v.style.display=w:v.style.removeProperty("display")),E=id(S[0],x[r.d]),T=id(S[1]||"0",i),e=x[r.p]-u[r.p]-c+E+s-T,a&&rd(a,T,r,i-T<20||a._isStart&&T>20),i-=i-T}if(m&&(l[m]=e||-.001,e<0&&(e=0)),o){var y=e+i,A=o._isStart;g="scroll"+r.d2,rd(o,y,r,A&&y>20||!A&&(d?Math.max(Mt[g],Oi[g]):o.parentNode[g])<=y+1),d&&(u=ls(a),d&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+hn))}return h&&v&&(g=ls(v),h.seek(f),p=ls(v),h._caScrollDist=g[r.p]-p[r.p],e=e/h._caScrollDist*f),h&&h.seek(_),h?e:Math.round(e)},fI=/(webkit|moz|length|cssText|inset)/i,ky=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===Mt){e._stOrig=s.cssText,a=ir(e);for(o in a)!+o&&!fI.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Ie.core.getCache(e).uncache=1,t.appendChild(e)}},xT=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Df=function(e,t,i){var r={};r[t.p]="+="+i,Ie.set(e,r)},By=function(e,t){var i=po(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,d){var f=o.tween,h=l.onComplete,m={};u=u||i();var _=xT(i,u,function(){f.kill(),o.tween=0});return d=c&&d||0,c=c||a-u,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=m,m[r]=function(){return _(u+c*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){ut.cache++,o.tween&&_s()},l.onComplete=function(){o.tween=0,h&&h.call(f)},f=o.tween=Ie.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},En(e,"wheel",i.wheelHandler),ht.isTouch&&En(e,"touchmove",i.wheelHandler),s},ht=function(){function n(t,i){Da||n.register(Ie)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Zg(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!du){this.update=this.refresh=this.kill=Ir;return}i=Ny(Ni(i)||pu(i)||i.nodeType?{trigger:i}:i,Pf);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,g=s.anticipatePin,p=s.onScrubComplete,v=s.onSnapComplete,S=s.once,x=s.snap,E=s.pinReparent,T=s.pinSpacer,w=s.containerAnimation,y=s.fastScrollEnd,A=s.preventOverlaps,b=i.horizontal||i.containerAnimation&&i.horizontal!==!1?ai:mn,L=!d&&d!==0,N=pi(i.scroller||lt),W=Ie.core.getCache(N),I=ia(N),H=("pinType"in i?i.pinType:oo(N,"pinType")||I&&"fixed")==="fixed",j=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],B=L&&i.toggleActions.split(" "),V="markers"in i?i.markers:Pf.markers,z=I?0:parseFloat(ir(N)["border"+b.p2+Rl])||0,R=this,K=i.onRefreshInit&&function(){return i.onRefreshInit(R)},pe=tI(N,I,b),we=nI(N,I),ze=0,We=0,qe=0,J=po(N,b),ne,_e,$e,ye,Ue,Fe,ee,se,le,D,he,Ge,ke,Pe,Je,O,ot,Ke,P,M,G,Y,Q,me,ce,te,re,Se,Oe,Me,xe,de,Xe,Qe,F,ve,ie,Ee,Ae;if(R._startClamp=R._endClamp=!1,R._dir=b,g*=45,R.scroller=N,R.scroll=w?w.time.bind(w):J,ye=J(),R.vars=i,r=r||i.animation,"refreshPriority"in i&&(iT=1,i.refreshPriority===-9999&&(Bu=R)),W.tweenScroll=W.tweenScroll||{top:By(N,mn),left:By(N,ai)},R.tweenTo=ne=W.tweenScroll[b.p],R.scrubDuration=function(ue){Xe=pu(ue)&&ue,Xe?de?de.duration(ue):de=Ie.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Xe,paused:!0,onComplete:function(){return p&&p(R)}}):(de&&de.progress(1).kill(),de=0)},r&&(r.vars.lazy=!1,r._initted&&!R.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),R.animation=r.pause(),r.scrollTrigger=R,R.scrubDuration(d),Me=0,l||(l=r.vars.id)),x&&((!Lo(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Mt.style&&Ie.set(I?[Mt,Oi]:N,{scrollBehavior:"auto"}),ut.forEach(function(ue){return Yn(ue)&&ue.target===(I?Et.scrollingElement||Oi:N)&&(ue.smooth=!1)}),$e=Yn(x.snapTo)?x.snapTo:x.snapTo==="labels"?rI(r):x.snapTo==="labelsDirectional"?sI(r):x.directional!==!1?function(ue,Ze){return B_(x.snapTo)(ue,Gn()-We<500?0:Ze.direction)}:Ie.utils.snap(x.snapTo),Qe=x.duration||{min:.1,max:2},Qe=Lo(Qe)?Du(Qe.min,Qe.max):Du(Qe,Qe),F=Ie.delayedCall(x.delay||Xe/2||.1,function(){var ue=J(),Ze=Gn()-We<500,Be=ne.tween;if((Ze||Math.abs(R.getVelocity())<10)&&!Be&&!Sh&&ze!==ue){var tt=(ue-Fe)/Pe,sn=r&&!L?r.totalProgress():tt,at=Ze?0:(sn-xe)/(Gn()-fu)*1e3||0,It=Ie.utils.clamp(-tt,1-tt,Pa(at/2)*at/.185),xn=tt+(x.inertia===!1?0:It),Ut,Ct,mt=x,Kn=mt.onStart,Lt=mt.onInterrupt,On=mt.onComplete;if(Ut=$e(xn,R),pu(Ut)||(Ut=xn),Ct=Math.max(0,Math.round(Fe+Ut*Pe)),ue<=ee&&ue>=Fe&&Ct!==ue){if(Be&&!Be._initted&&Be.data<=Pa(Ct-ue))return;x.inertia===!1&&(It=Ut-tt),ne(Ct,{duration:Qe(Pa(Math.max(Pa(xn-sn),Pa(Ut-sn))*.185/at/.05||0)),ease:x.ease||"power3",data:Pa(Ct-ue),onInterrupt:function(){return F.restart(!0)&&Lt&&Ra(R,Lt)},onComplete:function(){R.update(),ze=J(),r&&!L&&(de?de.resetTo("totalProgress",Ut,r._tTime/r._tDur):r.progress(Ut)),Me=xe=r&&!L?r.totalProgress():R.progress,v&&v(R),On&&Ra(R,On)}},ue,It*Pe,Ct-ue-It*Pe),Kn&&Ra(R,Kn,ne.tween)}}else R.isActive&&ze!==ue&&F.restart(!0)}).pause()),l&&(Qg[l]=R),f=R.trigger=pi(f||h!==!0&&h),Ae=f&&f._gsap&&f._gsap.stRevert,Ae&&(Ae=Ae(R)),h=h===!0?f:pi(h),Ni(a)&&(a={targets:f,className:a}),h&&(m===!1||m===nr||(m=!m&&h.parentNode&&h.parentNode.style&&ir(h.parentNode).display==="flex"?!1:un),R.pin=h,_e=Ie.core.getCache(h),_e.spacer?Je=_e.pinState:(T&&(T=pi(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),_e.spacerIsNative=!!T,T&&(_e.spacerState=Nf(T))),_e.spacer=Ke=T||Et.createElement("div"),Ke.classList.add("pin-spacer"),l&&Ke.classList.add("pin-spacer-"+l),_e.pinState=Je=Nf(h)),i.force3D!==!1&&Ie.set(h,{force3D:!0}),R.spacer=Ke=_e.spacer,Oe=ir(h),me=Oe[m+b.os2],M=Ie.getProperty(h),G=Ie.quickSetter(h,b.a,hn),Gp(h,Ke,Oe),ot=Nf(h)),V){Ge=Lo(V)?Ny(V,Dy):Dy,D=Lf("scroller-start",l,N,b,Ge,0),he=Lf("scroller-end",l,N,b,Ge,0,D),P=D["offset"+b.op.d2];var oe=pi(oo(N,"content")||N);se=this.markerStart=Lf("start",l,oe,b,Ge,P,0,w),le=this.markerEnd=Lf("end",l,oe,b,Ge,P,0,w),w&&(Ee=Ie.quickSetter([se,le],b.a,hn)),!H&&!(Xr.length&&oo(N,"fixedMarkers")===!0)&&(iI(I?Mt:N),Ie.set([D,he],{force3D:!0}),te=Ie.quickSetter(D,b.a,hn),Se=Ie.quickSetter(he,b.a,hn))}if(w){var fe=w.vars.onUpdate,ae=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){R.update(0,0,1),fe&&fe.apply(w,ae||[])})}if(R.previous=function(){return st[st.indexOf(R)-1]},R.next=function(){return st[st.indexOf(R)+1]},R.revert=function(ue,Ze){if(!Ze)return R.kill(!0);var Be=ue!==!1||!R.enabled,tt=Hn;Be!==R.isReverted&&(Be&&(ve=Math.max(J(),R.scroll.rec||0),qe=R.progress,ie=r&&r.progress()),se&&[se,le,D,he].forEach(function(sn){return sn.style.display=Be?"none":"block"}),Be&&(Hn=R,R.update(Be)),h&&(!E||!R.isActive)&&(Be?lI(h,Ke,Je):Gp(h,Ke,ir(h),ce)),Be||R.update(Be),Hn=tt,R.isReverted=Be)},R.refresh=function(ue,Ze,Be,tt){if(!((Hn||!R.enabled)&&!Ze)){if(h&&ue&&lr){En(n,"scrollEnd",pT);return}!oi&&K&&K(R),Hn=R,ne.tween&&!Be&&(ne.tween.kill(),ne.tween=0),de&&de.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Te){return Te.vars.immediateRender&&Te.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var sn=pe(),at=we(),It=w?w.duration():Vr(N,b),xn=Pe<=.01||!Pe,Ut=0,Ct=tt||0,mt=Lo(Be)?Be.end:i.end,Kn=i.endTrigger||f,Lt=Lo(Be)?Be.start:i.start||(i.start===0||!f?0:h?"0 0":"0 100%"),On=R.pinnedContainer=i.pinnedContainer&&pi(i.pinnedContainer,R),Zn=f&&Math.max(0,st.indexOf(R))||0,on=Zn,Kt,dn,Cr,ca,yn,Qt,Ki,fa,C,k,Z,q,$;for(V&&Lo(Be)&&(q=Ie.getProperty(D,b.p),$=Ie.getProperty(he,b.p));on-- >0;)Qt=st[on],Qt.end||Qt.refresh(0,1)||(Hn=R),Ki=Qt.pin,Ki&&(Ki===f||Ki===h||Ki===On)&&!Qt.isReverted&&(k||(k=[]),k.unshift(Qt),Qt.revert(!0,!0)),Qt!==st[on]&&(Zn--,on--);for(Yn(Lt)&&(Lt=Lt(R)),Lt=by(Lt,"start",R),Fe=Fy(Lt,f,sn,b,J(),se,D,R,at,z,H,It,w,R._startClamp&&"_startClamp")||(h?-.001:0),Yn(mt)&&(mt=mt(R)),Ni(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(Ni(Lt)?Lt.split(" ")[0]:"")+mt:(Ut=id(mt.substr(2),sn),mt=Ni(Lt)?Lt:(w?Ie.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,Fe):Fe)+Ut,Kn=f)),mt=by(mt,"end",R),ee=Math.max(Fe,Fy(mt||(Kn?"100% 0":It),Kn,sn,b,J()+Ut,le,he,R,at,z,H,It,w,R._endClamp&&"_endClamp"))||-.001,Ut=0,on=Zn;on--;)Qt=st[on]||{},Ki=Qt.pin,Ki&&Qt.start-Qt._pinPush<=Fe&&!w&&Qt.end>0&&(Kt=Qt.end-(R._startClamp?Math.max(0,Qt.start):Qt.start),(Ki===f&&Qt.start-Qt._pinPush<Fe||Ki===On)&&isNaN(Lt)&&(Ut+=Kt*(1-Qt.progress)),Ki===h&&(Ct+=Kt));if(Fe+=Ut,ee+=Ut,R._startClamp&&(R._startClamp+=Ut),R._endClamp&&!oi&&(R._endClamp=ee||-.001,ee=Math.min(ee,Vr(N,b))),Pe=ee-Fe||(Fe-=.01)&&.001,xn&&(qe=Ie.utils.clamp(0,1,Ie.utils.normalize(Fe,ee,ve))),R._pinPush=Ct,se&&Ut&&(Kt={},Kt[b.a]="+="+Ut,On&&(Kt[b.p]="-="+J()),Ie.set([se,le],Kt)),h&&!(Jg&&R.end>=Vr(N,b)))Kt=ir(h),ca=b===mn,Cr=J(),Y=parseFloat(M(b.a))+Ct,!It&&ee>1&&(Z=(I?Et.scrollingElement||Oi:N).style,Z={style:Z,value:Z["overflow"+b.a.toUpperCase()]},I&&ir(Mt)["overflow"+b.a.toUpperCase()]!=="scroll"&&(Z.style["overflow"+b.a.toUpperCase()]="scroll")),Gp(h,Ke,Kt),ot=Nf(h),dn=ls(h,!0),fa=H&&po(N,ca?ai:mn)(),m?(ce=[m+b.os2,Pe+Ct+hn],ce.t=Ke,on=m===un?jd(h,b)+Pe+Ct:0,on&&(ce.push(b.d,on+hn),Ke.style.flexBasis!=="auto"&&(Ke.style.flexBasis=on+hn)),hl(ce),On&&st.forEach(function(Te){Te.pin===On&&Te.vars.pinSpacing!==!1&&(Te._subPinOffset=!0)}),H&&J(ve)):(on=jd(h,b),on&&Ke.style.flexBasis!=="auto"&&(Ke.style.flexBasis=on+hn)),H&&(yn={top:dn.top+(ca?Cr-Fe:fa)+hn,left:dn.left+(ca?fa:Cr-Fe)+hn,boxSizing:"border-box",position:"fixed"},yn[Xo]=yn["max"+Rl]=Math.ceil(dn.width)+hn,yn[Yo]=yn["max"+k_]=Math.ceil(dn.height)+hn,yn[nr]=yn[nr+Fu]=yn[nr+Uu]=yn[nr+ku]=yn[nr+Ou]="0",yn[un]=Kt[un],yn[un+Fu]=Kt[un+Fu],yn[un+Uu]=Kt[un+Uu],yn[un+ku]=Kt[un+ku],yn[un+Ou]=Kt[un+Ou],O=cI(Je,yn,E),oi&&J(0)),r?(C=r._initted,Bp(1),r.render(r.duration(),!0,!0),Q=M(b.a)-Y+Pe+Ct,re=Math.abs(Pe-Q)>1,H&&re&&O.splice(O.length-2,2),r.render(0,!0,!0),C||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Bp(0)):Q=Pe,Z&&(Z.value?Z.style["overflow"+b.a.toUpperCase()]=Z.value:Z.style.removeProperty("overflow-"+b.a));else if(f&&J()&&!w)for(dn=f.parentNode;dn&&dn!==Mt;)dn._pinOffset&&(Fe-=dn._pinOffset,ee-=dn._pinOffset),dn=dn.parentNode;k&&k.forEach(function(Te){return Te.revert(!1,!0)}),R.start=Fe,R.end=ee,ye=Ue=oi?ve:J(),!w&&!oi&&(ye<ve&&J(ve),R.scroll.rec=0),R.revert(!1,!0),We=Gn(),F&&(ze=-1,F.restart(!0)),Hn=0,r&&L&&(r._initted||ie)&&r.progress()!==ie&&r.progress(ie||0,!0).render(r.time(),!0,!0),(xn||qe!==R.progress||w||_||r&&!r._initted)&&(r&&!L&&(r._initted||qe||r.vars.immediateRender!==!1)&&r.totalProgress(w&&Fe<-.001&&!qe?Ie.utils.normalize(Fe,ee,0):qe,!0),R.progress=xn||(ye-Fe)/Pe===qe?0:qe),h&&m&&(Ke._pinOffset=Math.round(R.progress*Q)),de&&de.invalidate(),isNaN(q)||(q-=Ie.getProperty(D,b.p),$-=Ie.getProperty(he,b.p),Df(D,b,q),Df(se,b,q-(tt||0)),Df(he,b,$),Df(le,b,$-(tt||0))),xn&&!oi&&R.update(),c&&!oi&&!ke&&(ke=!0,c(R),ke=!1)}},R.getVelocity=function(){return(J()-Ue)/(Gn()-fu)*1e3||0},R.endAnimation=function(){tu(R.callbackAnimation),r&&(de?de.progress(1):r.paused()?L||tu(r,R.direction<0,1):tu(r,r.reversed()))},R.labelToScroll=function(ue){return r&&r.labels&&(Fe||R.refresh()||Fe)+r.labels[ue]/r.duration()*Pe||0},R.getTrailing=function(ue){var Ze=st.indexOf(R),Be=R.direction>0?st.slice(0,Ze).reverse():st.slice(Ze+1);return(Ni(ue)?Be.filter(function(tt){return tt.vars.preventOverlaps===ue}):Be).filter(function(tt){return R.direction>0?tt.end<=Fe:tt.start>=ee})},R.update=function(ue,Ze,Be){if(!(w&&!Be&&!ue)){var tt=oi===!0?ve:R.scroll(),sn=ue?0:(tt-Fe)/Pe,at=sn<0?0:sn>1?1:sn||0,It=R.progress,xn,Ut,Ct,mt,Kn,Lt,On,Zn;if(Ze&&(Ue=ye,ye=w?J():tt,x&&(xe=Me,Me=r&&!L?r.totalProgress():at)),g&&h&&!Hn&&!Af&&lr&&(!at&&Fe<tt+(tt-Ue)/(Gn()-fu)*g?at=1e-4:at===1&&ee>tt+(tt-Ue)/(Gn()-fu)*g&&(at=.9999)),at!==It&&R.enabled){if(xn=R.isActive=!!at&&at<1,Ut=!!It&&It<1,Lt=xn!==Ut,Kn=Lt||!!at!=!!It,R.direction=at>It?1:-1,R.progress=at,Kn&&!Hn&&(Ct=at&&!It?0:at===1?1:It===1?2:3,L&&(mt=!Lt&&B[Ct+1]!=="none"&&B[Ct+1]||B[Ct],Zn=r&&(mt==="complete"||mt==="reset"||mt in r))),A&&(Lt||Zn)&&(Zn||d||!r)&&(Yn(A)?A(R):R.getTrailing(A).forEach(function(Cr){return Cr.endAnimation()})),L||(de&&!Hn&&!Af?(de._dp._time-de._start!==de._time&&de.render(de._dp._time-de._start),de.resetTo?de.resetTo("totalProgress",at,r._tTime/r._tDur):(de.vars.totalProgress=at,de.invalidate().restart())):r&&r.totalProgress(at,!!(Hn&&(We||ue)))),h){if(ue&&m&&(Ke.style[m+b.os2]=me),!H)G(hu(Y+Q*at));else if(Kn){if(On=!ue&&at>It&&ee+1>tt&&tt+1>=Vr(N,b),E)if(!ue&&(xn||On)){var on=ls(h,!0),Kt=tt-Fe;ky(h,Mt,on.top+(b===mn?Kt:0)+hn,on.left+(b===mn?0:Kt)+hn)}else ky(h,Ke);hl(xn||On?O:ot),re&&at<1&&xn||G(Y+(at===1&&!On?Q:0))}}x&&!ne.tween&&!Hn&&!Af&&F.restart(!0),a&&(Lt||S&&at&&(at<1||!zp))&&xc(a.targets).forEach(function(Cr){return Cr.classList[xn||S?"add":"remove"](a.className)}),o&&!L&&!ue&&o(R),Kn&&!Hn?(L&&(Zn&&(mt==="complete"?r.pause().totalProgress(1):mt==="reset"?r.restart(!0).pause():mt==="restart"?r.restart(!0):r[mt]()),o&&o(R)),(Lt||!zp)&&(u&&Lt&&Ra(R,u),j[Ct]&&Ra(R,j[Ct]),S&&(at===1?R.kill(!1,1):j[Ct]=0),Lt||(Ct=at===1?1:3,j[Ct]&&Ra(R,j[Ct]))),y&&!xn&&Math.abs(R.getVelocity())>(pu(y)?y:2500)&&(tu(R.callbackAnimation),de?de.progress(1):tu(r,mt==="reverse"?1:!at,1))):L&&o&&!Hn&&o(R)}if(Se){var dn=w?tt/w.duration()*(w._caScrollDist||0):tt;te(dn+(D._isFlipped?1:0)),Se(dn)}Ee&&Ee(-tt/w.duration()*(w._caScrollDist||0))}},R.enable=function(ue,Ze){R.enabled||(R.enabled=!0,En(N,"resize",mu),I||En(N,"scroll",La),K&&En(n,"refreshInit",K),ue!==!1&&(R.progress=qe=0,ye=Ue=ze=J()),Ze!==!1&&R.refresh())},R.getTween=function(ue){return ue&&ne?ne.tween:de},R.setPositions=function(ue,Ze,Be,tt){if(w){var sn=w.scrollTrigger,at=w.duration(),It=sn.end-sn.start;ue=sn.start+It*ue/at,Ze=sn.start+It*Ze/at}R.refresh(!1,!1,{start:Ry(ue,Be&&!!R._startClamp),end:Ry(Ze,Be&&!!R._endClamp)},tt),R.update()},R.adjustPinSpacing=function(ue){if(ce&&ue){var Ze=ce.indexOf(b.d)+1;ce[Ze]=parseFloat(ce[Ze])+ue+hn,ce[1]=parseFloat(ce[1])+ue+hn,hl(ce)}},R.disable=function(ue,Ze){if(ue!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,Ze||de&&de.pause(),ve=0,_e&&(_e.uncache=1),K&&Mn(n,"refreshInit",K),F&&(F.pause(),ne.tween&&ne.tween.kill()&&(ne.tween=0)),!I)){for(var Be=st.length;Be--;)if(st[Be].scroller===N&&st[Be]!==R)return;Mn(N,"resize",mu),I||Mn(N,"scroll",La)}},R.kill=function(ue,Ze){R.disable(ue,Ze),de&&!Ze&&de.kill(),l&&delete Qg[l];var Be=st.indexOf(R);Be>=0&&st.splice(Be,1),Be===si&&sd>0&&si--,Be=0,st.forEach(function(tt){return tt.scroller===R.scroller&&(Be=1)}),Be||oi||(R.scroll.rec=0),r&&(r.scrollTrigger=null,ue&&r.revert({kill:!1}),Ze||r.kill()),se&&[se,le,D,he].forEach(function(tt){return tt.parentNode&&tt.parentNode.removeChild(tt)}),Bu===R&&(Bu=0),h&&(_e&&(_e.uncache=1),Be=0,st.forEach(function(tt){return tt.pin===h&&Be++}),Be||(_e.spacer=0)),i.onKill&&i.onKill(R)},st.push(R),R.enable(!1,!1),Ae&&Ae(R),r&&r.add&&!Pe){var je=R.update;R.update=function(){R.update=je,ut.cache++,Fe||ee||R.refresh()},Ie.delayedCall(.01,R.update),Pe=.01,Fe=ee=0}else R.refresh();h&&aI()},n.register=function(i){return Da||(Ie=i||lT(),aT()&&window.document&&n.enable(),Da=du),Da},n.defaults=function(i){if(i)for(var r in i)Pf[r]=i[r];return Pf},n.disable=function(i,r){du=0,st.forEach(function(o){return o[r?"kill":"disable"](i)}),Mn(lt,"wheel",La),Mn(Et,"scroll",La),clearInterval(wf),Mn(Et,"touchcancel",Ir),Mn(Mt,"touchstart",Ir),bf(Mn,Et,"pointerdown,touchstart,mousedown",Py),bf(Mn,Et,"pointerup,touchend,mouseup",Ly),$d.kill(),Cf(Mn);for(var s=0;s<ut.length;s+=3)Rf(Mn,ut[s],ut[s+1]),Rf(Mn,ut[s],ut[s+2])},n.enable=function(){if(lt=window,Et=document,Oi=Et.documentElement,Mt=Et.body,Ie){if(xc=Ie.utils.toArray,Du=Ie.utils.clamp,Zg=Ie.core.context||Ir,Bp=Ie.core.suppressOverwrites||Ir,I_=lt.history.scrollRestoration||"auto",e0=lt.pageYOffset||0,Ie.core.globals("ScrollTrigger",n),Mt){du=1,dl=document.createElement("div"),dl.style.height="100vh",dl.style.position="absolute",vT(),eI(),rn.register(Ie),n.isTouch=rn.isTouch,Us=rn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Kg=rn.isTouch===1,En(lt,"wheel",La),D_=[lt,Et,Oi,Mt],Ie.matchMedia?(n.matchMedia=function(c){var d=Ie.matchMedia(),f;for(f in c)d.add(f,c[f]);return d},Ie.addEventListener("matchMediaInit",function(){gT(),z_()}),Ie.addEventListener("matchMediaRevert",function(){return mT()}),Ie.addEventListener("matchMedia",function(){ko(0,1),sa("matchMedia")}),Ie.matchMedia().add("(orientation: portrait)",function(){return Hp(),Hp})):console.warn("Requires GSAP 3.11.0 or later"),Hp(),En(Et,"scroll",La);var i=Mt.hasAttribute("style"),r=Mt.style,s=r.borderTopStyle,o=Ie.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=ls(Mt),mn.m=Math.round(a.top+mn.sc())||0,ai.m=Math.round(a.left+ai.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(Mt.setAttribute("style",""),Mt.removeAttribute("style")),wf=setInterval(Iy,250),Ie.delayedCall(.5,function(){return Af=0}),En(Et,"touchcancel",Ir),En(Mt,"touchstart",Ir),bf(En,Et,"pointerdown,touchstart,mousedown",Py),bf(En,Et,"pointerup,touchend,mouseup",Ly),jg=Ie.utils.checkPrefix("transform"),od.push(jg),Da=Gn(),$d=Ie.delayedCall(.2,ko).pause(),Ia=[Et,"visibilitychange",function(){var c=lt.innerWidth,d=lt.innerHeight;Et.hidden?(Ay=c,Cy=d):(Ay!==c||Cy!==d)&&mu()},Et,"DOMContentLoaded",ko,lt,"load",ko,lt,"resize",mu],Cf(En),st.forEach(function(c){return c.enable(0,1)}),l=0;l<ut.length;l+=3)Rf(Mn,ut[l],ut[l+1]),Rf(Mn,ut[l],ut[l+2])}else if(Et){var u=function c(){n.enable(),Et.removeEventListener("DOMContentLoaded",c)};Et.addEventListener("DOMContentLoaded",u)}}},n.config=function(i){"limitCallbacks"in i&&(zp=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(wf)||(wf=r)&&setInterval(Iy,r),"ignoreMobileResize"in i&&(Kg=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Cf(Mn)||Cf(En,i.autoRefreshEvents||"none"),rT=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=pi(i),o=ut.indexOf(s),a=ia(s);~o&&ut.splice(o,a?6:2),r&&(a?Xr.unshift(lt,r,Mt,r,Oi,r):Xr.unshift(s,r))},n.clearMatchMedia=function(i){st.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(Ni(i)?pi(i):i).getBoundingClientRect(),a=o[s?Xo:Yo]*r||0;return s?o.right-a>0&&o.left+a<lt.innerWidth:o.bottom-a>0&&o.top+a<lt.innerHeight},n.positionInViewport=function(i,r,s){Ni(i)&&(i=pi(i));var o=i.getBoundingClientRect(),a=o[s?Xo:Yo],l=r==null?a/2:r in Kd?Kd[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/lt.innerWidth:(o.top+l)/lt.innerHeight},n.killAll=function(i){if(st.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=ra.killAll||[];ra={},r.forEach(function(s){return s()})}},n}();ht.version="3.15.0";ht.saveStyles=function(n){return n?xc(n).forEach(function(e){if(e&&e.style){var t=Pi.indexOf(e);t>=0&&Pi.splice(t,5),Pi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ie.core.getCache(e),Zg())}}):Pi};ht.revert=function(n,e){return z_(!n,e)};ht.create=function(n,e){return new ht(n,e)};ht.refresh=function(n){return n?mu(!0):(Da||ht.register())&&ko(!0)};ht.update=function(n){return++ut.cache&&_s(n===!0?2:0)};ht.clearScrollMemory=_T;ht.maxScroll=function(n,e){return Vr(n,e?ai:mn)};ht.getScrollFunc=function(n,e){return po(pi(n),e?ai:mn)};ht.getById=function(n){return Qg[n]};ht.getAll=function(){return st.filter(function(n){return n.vars.id!=="ScrollSmoother"})};ht.isScrolling=function(){return!!lr};ht.snapDirectional=B_;ht.addEventListener=function(n,e){var t=ra[n]||(ra[n]=[]);~t.indexOf(e)||t.push(e)};ht.removeEventListener=function(n,e){var t=ra[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};ht.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var d=[],f=[],h=Ie.delayedCall(r,function(){c(d,f),d=[],f=[]}).pause();return function(m){d.length||h.restart(!0),d.push(m.trigger),f.push(m),s<=d.length&&h.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Yn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Yn(s)&&(s=s(),En(ht,"refresh",function(){return s=e.batchMax()})),xc(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(ht.create(u))}),t};var zy=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Wp=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(rn.isTouch?" pinch-zoom":""):"none",e===Oi&&n(Mt,t)},If={auto:1,scroll:1},dI=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ie.core.getCache(s),a=Gn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Mt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(If[(l=ir(s)).overflowY]||If[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!ia(s)&&(If[(l=ir(s)).overflowY]||If[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},yT=function(e,t,i,r){return rn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&dI,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&En(Et,rn.eventTypes[0],Hy,!1,!0)},onDisable:function(){return Mn(Et,rn.eventTypes[0],Hy,!0)}})},hI=/(input|label|select|textarea)/i,Vy,Hy=function(e){var t=hI.test(e.target.tagName);(t||Vy)&&(e._gsapAllow=!0,Vy=t)},pI=function(e){Lo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=pi(e.target)||Oi,c=Ie.core.globals().ScrollSmoother,d=c&&c.get(),f=Us&&(e.content&&pi(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=po(u,mn),m=po(u,ai),_=1,g=(rn.isTouch&&lt.visualViewport?lt.visualViewport.scale*lt.visualViewport.width:lt.outerWidth)/lt.innerWidth,p=0,v=Yn(r)?function(){return r(a)}:function(){return r||2.8},S,x,E=yT(u,e.type,!0,s),T=function(){return x=!1},w=Ir,y=Ir,A=function(){l=Vr(u,mn),y=Du(Us?1:0,l),i&&(w=Du(0,Vr(u,ai))),S=qo},b=function(){f._gsap.y=hu(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},L=function(){if(x){requestAnimationFrame(T);var V=hu(a.deltaY/2),z=y(h.v-V);if(f&&z!==h.v+h.offset){h.offset=z-h.v;var R=hu((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",f._gsap.y=R+"px",h.cacheID=ut.cache,_s()}return!0}h.offset&&b(),x=!0},N,W,I,H,j=function(){A(),N.isActive()&&N.vars.scrollY>l&&(h()>l?N.progress(1)&&h(l):N.resetTo("scrollY",l))};return f&&Ie.set(f,{y:"+=0"}),e.ignoreCheck=function(B){return Us&&B.type==="touchmove"&&L()||_>1.05&&B.type!=="touchstart"||a.isGesturing||B.touches&&B.touches.length>1},e.onPress=function(){x=!1;var B=_;_=hu((lt.visualViewport&&lt.visualViewport.scale||1)/g),N.pause(),B!==_&&Wp(u,_>1.01?!0:i?!1:"x"),W=m(),I=h(),A(),S=qo},e.onRelease=e.onGestureStart=function(B,V){if(h.offset&&b(),!V)H.restart(!0);else{ut.cache++;var z=v(),R,K;i&&(R=m(),K=R+z*.05*-B.velocityX/.227,z*=zy(m,R,K,Vr(u,ai)),N.vars.scrollX=w(K)),R=h(),K=R+z*.05*-B.velocityY/.227,z*=zy(h,R,K,Vr(u,mn)),N.vars.scrollY=y(K),N.invalidate().duration(z).play(.01),(Us&&N.vars.scrollY>=l||R>=l-1)&&Ie.to({},{onUpdate:j,duration:z})}o&&o(B)},e.onWheel=function(){N._ts&&N.pause(),Gn()-p>1e3&&(S=0,p=Gn())},e.onChange=function(B,V,z,R,K){if(qo!==S&&A(),V&&i&&m(w(R[2]===V?W+(B.startX-B.x):m()+V-R[1])),z){h.offset&&b();var pe=K[2]===z,we=pe?I+B.startY-B.y:h()+z-K[1],ze=y(we);pe&&we!==ze&&(I+=ze-we),h(ze)}(z||V)&&_s()},e.onEnable=function(){Wp(u,i?!1:"x"),ht.addEventListener("refresh",j),En(lt,"resize",j),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=m.smooth=!1),E.enable()},e.onDisable=function(){Wp(u,!0),Mn(lt,"resize",j),ht.removeEventListener("refresh",j),E.kill()},e.lockAxis=e.lockAxis!==!1,a=new rn(e),a.iOS=Us,Us&&!h()&&h(1),Us&&Ie.ticker.add(Ir),H=a._dc,N=Ie.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:xT(h,h(),function(){return N.pause()})},onUpdate:_s,onComplete:H.vars.onComplete}),a};ht.sort=function(n){if(Yn(n))return st.sort(n);var e=lt.pageYOffset||0;return ht.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+lt.innerHeight}),st.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};ht.observe=function(n){return new rn(n)};ht.normalizeScroll=function(n){if(typeof n>"u")return ii;if(n===!0&&ii)return ii.enable();if(n===!1){ii&&ii.kill(),ii=n;return}var e=n instanceof rn?n:pI(n);return ii&&ii.target===e.target&&ii.kill(),ia(e.target)&&(ii=e),e};ht.core={_getVelocityProp:$g,_inputObserver:yT,_scrollers:ut,_proxies:Xr,bridge:{ss:function(){lr||sa("scrollStart"),lr=Gn()},ref:function(){return Hn}}};lT()&&Ie.registerPlugin(ht);ni.registerPlugin(ht);function mI(){li.useEffect(()=>{const n=window.matchMedia("(prefers-reduced-motion: reduce)").matches,e=ni.context(()=>{n||(ni.from(".hero-animate",{opacity:0,y:40,duration:.9,stagger:.15,ease:"power3.out"}),ni.from(".hero-image-wrap",{y:36,scale:.96,duration:1.25,ease:"power3.out",delay:.2}),ni.from(".hero-impact-note",{opacity:0,x:-24,duration:.7,delay:.8,ease:"power2.out"}),ni.to(".hero-image-frame img",{yPercent:7,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}}),ni.utils.toArray(".section-head").forEach(t=>{ni.from(t,{opacity:0,y:30,duration:.8,ease:"power3.out",scrollTrigger:{trigger:t,start:"top 85%"}})}),ni.utils.toArray(".stagger-grid").forEach(t=>{ni.from(t.children,{opacity:0,y:40,duration:.7,stagger:.12,ease:"power3.out",scrollTrigger:{trigger:t,start:"top 85%"}})}),ni.utils.toArray(".volunteer-photo").forEach(t=>{ni.from(t,{clipPath:"inset(0 0 100% 0)",duration:1,ease:"power3.out",scrollTrigger:{trigger:t,start:"top 88%"}})}),ni.utils.toArray(".stat-number").forEach(t=>{const i=Number(t.dataset.value||0),r={val:0};ni.to(r,{val:i,duration:2,ease:"power2.out",scrollTrigger:{trigger:t,start:"top 90%"},onUpdate:()=>{t.textContent=(t.dataset.prefix||"")+Math.round(r.val).toLocaleString()+(t.dataset.suffix||"")}})}))});return()=>e.revert()},[])}function gI(){return mI(),U.jsxs(U.Fragment,{children:[U.jsx(mA,{}),U.jsxs("main",{children:[U.jsx(xN,{}),U.jsx(yN,{}),U.jsx(MN,{}),U.jsx(EN,{}),U.jsx(TN,{}),U.jsx(wN,{}),U.jsx(AN,{}),U.jsx(CN,{}),U.jsx(bN,{})]}),U.jsx(PN,{})]})}Xp.createRoot(document.getElementById("root")).render(U.jsx(js.StrictMode,{children:U.jsx(gI,{})}));

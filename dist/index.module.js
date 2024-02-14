import{useState as e}from"react";var t={TableDiv:"_YJIVn",columnTitle:"_TRuBc",TableSerch:"_UNG9D",paginateBlock:"_-bopI",paginate:"_nWgVU",TableContener:"_rBob8",TableThead:"_IgXGw",TableTheadTitle:"_6PncS",svg:"_SRHmq",sizeSelect:"_b6Srm","block-right":"_ymujw"};function n(e){var t={exports:{}};return e(t,t.exports),t.exports}var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,y=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,v=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,S=r?Symbol.for("react.fundamental"):60117,w=r?Symbol.for("react.responder"):60118,O=r?Symbol.for("react.scope"):60119;function T(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case p:case c:case s:case i:case d:return e;default:switch(e=e&&e.$$typeof){case u:case y:case b:case v:case l:return e;default:return t}}case a:return t}}}function N(e){return T(e)===p}var x={AsyncMode:f,ConcurrentMode:p,ContextConsumer:u,ContextProvider:l,Element:o,ForwardRef:y,Fragment:c,Lazy:b,Memo:v,Portal:a,Profiler:s,StrictMode:i,Suspense:d,isAsyncMode:function(e){return N(e)||T(e)===f},isConcurrentMode:N,isContextConsumer:function(e){return T(e)===u},isContextProvider:function(e){return T(e)===l},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},isForwardRef:function(e){return T(e)===y},isFragment:function(e){return T(e)===c},isLazy:function(e){return T(e)===b},isMemo:function(e){return T(e)===v},isPortal:function(e){return T(e)===a},isProfiler:function(e){return T(e)===s},isStrictMode:function(e){return T(e)===i},isSuspense:function(e){return T(e)===d},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===c||e===p||e===s||e===i||e===d||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===v||e.$$typeof===l||e.$$typeof===u||e.$$typeof===y||e.$$typeof===S||e.$$typeof===w||e.$$typeof===O||e.$$typeof===g)},typeOf:T},C=n(function(e,t){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,c=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var y=e.type;switch(y){case l:case u:case o:case c:case a:case p:return y;default:var h=y&&y.$$typeof;switch(h){case s:case f:case m:case d:case i:return h;default:return t}}case r:return t}}}var w=u,O=s,T=i,N=n,x=f,C=o,E=m,$=d,k=r,j=c,_=a,P=p,I=!1;function R(e){return S(e)===u}t.AsyncMode=l,t.ConcurrentMode=w,t.ContextConsumer=O,t.ContextProvider=T,t.Element=N,t.ForwardRef=x,t.Fragment=C,t.Lazy=E,t.Memo=$,t.Portal=k,t.Profiler=j,t.StrictMode=_,t.Suspense=P,t.isAsyncMode=function(e){return I||(I=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),R(e)||S(e)===l},t.isConcurrentMode=R,t.isContextConsumer=function(e){return S(e)===s},t.isContextProvider=function(e){return S(e)===i},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return S(e)===f},t.isFragment=function(e){return S(e)===o},t.isLazy=function(e){return S(e)===m},t.isMemo=function(e){return S(e)===d},t.isPortal=function(e){return S(e)===r},t.isProfiler=function(e){return S(e)===c},t.isStrictMode=function(e){return S(e)===a},t.isSuspense=function(e){return S(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===c||e===a||e===p||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===d||e.$$typeof===i||e.$$typeof===s||e.$$typeof===f||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g||e.$$typeof===h)},t.typeOf=S}()}),E=n(function(e){e.exports="production"===process.env.NODE_ENV?x:C}),$=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,_=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,r,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var c in n=Object(arguments[a]))k.call(n,c)&&(o[c]=n[c]);if($){r=$(n);for(var i=0;i<r.length;i++)j.call(n,r[i])&&(o[r[i]]=n[r[i]])}}return o},P=Function.call.bind(Object.prototype.hasOwnProperty),I="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",R=P,M=function(){};if("production"!==process.env.NODE_ENV){var A=I,D={},V=R;M=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function z(e,t,n,r,o){if("production"!==process.env.NODE_ENV)for(var a in e)if(V(e,a)){var c;try{if("function"!=typeof e[a]){var i=Error((r||"React class")+": "+n+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[a]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw i.name="Invariant Violation",i}c=e[a](t,a,r,n,null,A)}catch(e){c=e}if(!c||c instanceof Error||M((r||"React class")+": type specification of "+n+" `"+a+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in D)){D[c.message]=!0;var s=o?o():"";M("Failed "+n+" type: "+c.message+(null!=s?s:""))}}}z.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(D={})};var F=z,L=function(){};function B(){return null}function W(){}function q(){}"production"!==process.env.NODE_ENV&&(L=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),q.resetWarningCache=W;var U=n(function(e){e.exports="production"!==process.env.NODE_ENV?function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,r="<<anonymous>>",o={array:s("array"),bigint:s("bigint"),bool:s("boolean"),func:s("function"),number:s("number"),object:s("object"),string:s("string"),symbol:s("symbol"),any:i(B),arrayOf:function(e){return i(function(t,n,r,o,a){if("function"!=typeof e)return new c("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var i=t[n];if(!Array.isArray(i))return new c("Invalid "+o+" `"+a+"` of type `"+f(i)+"` supplied to `"+r+"`, expected an array.");for(var s=0;s<i.length;s++){var l=e(i,s,r,o,a+"["+s+"]",I);if(l instanceof Error)return l}return null})},element:i(function(t,n,r,o,a){var i=t[n];return e(i)?null:new c("Invalid "+o+" `"+a+"` of type `"+f(i)+"` supplied to `"+r+"`, expected a single ReactElement.")}),elementType:i(function(e,t,n,r,o){var a=e[t];return E.isValidElementType(a)?null:new c("Invalid "+r+" `"+o+"` of type `"+f(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")}),instanceOf:function(e){return i(function(t,n,o,a,i){return t[n]instanceof e?null:new c("Invalid "+a+" `"+i+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:r)+"` supplied to `"+o+"`, expected instance of `"+(e.name||r)+"`.");var s})},node:i(function(e,t,n,r,o){return u(e[t])?null:new c("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}),objectOf:function(e){return i(function(t,n,r,o,a){if("function"!=typeof e)return new c("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var i=t[n],s=f(i);if("object"!==s)return new c("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var l in i)if(R(i,l)){var u=e(i,l,r,o,a+"."+l,I);if(u instanceof Error)return u}return null})},oneOf:function(e){return Array.isArray(e)?i(function(t,n,r,o,i){for(var s=t[n],l=0;l<e.length;l++)if(a(s,e[l]))return null;var u=JSON.stringify(e,function(e,t){return"symbol"===p(t)?String(t):t});return new c("Invalid "+o+" `"+i+"` of value `"+String(s)+"` supplied to `"+r+"`, expected one of "+u+".")}):("production"!==process.env.NODE_ENV&&L(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),B)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&L("Invalid argument supplied to oneOfType, expected an instance of array."),B;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return L("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+y(n)+" at index "+t+"."),B}return i(function(t,n,r,o,a){for(var i=[],s=0;s<e.length;s++){var l=(0,e[s])(t,n,r,o,a,I);if(null==l)return null;l.data&&R(l.data,"expectedType")&&i.push(l.data.expectedType)}return new c("Invalid "+o+" `"+a+"` supplied to `"+r+"`"+(i.length>0?", expected one of type ["+i.join(", ")+"]":"")+".")})},shape:function(e){return i(function(t,n,r,o,a){var i=t[n],s=f(i);if("object"!==s)return new c("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var u in e){var y=e[u];if("function"!=typeof y)return l(r,o,a,u,p(y));var d=y(i,u,r,o,a+"."+u,I);if(d)return d}return null})},exact:function(e){return i(function(t,n,r,o,a){var i=t[n],s=f(i);if("object"!==s)return new c("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");var u=_({},t[n],e);for(var y in u){var d=e[y];if(R(e,y)&&"function"!=typeof d)return l(r,o,a,y,p(d));if(!d)return new c("Invalid "+o+" `"+a+"` key `"+y+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=d(i,y,r,o,a+"."+y,I);if(m)return m}return null})}};function a(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function c(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function i(e){if("production"!==process.env.NODE_ENV)var n={},o=0;function a(a,i,s,l,u,f,p){if(l=l||r,f=f||s,p!==I){if(t){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var d=l+":"+s;!n[d]&&o<3&&(L("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+l+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[d]=!0,o++)}}return null==i[s]?a?new c(null===i[s]?"The "+u+" `"+f+"` is marked as required in `"+l+"`, but its value is `null`.":"The "+u+" `"+f+"` is marked as required in `"+l+"`, but its value is `undefined`."):null:e(i,s,l,u,f)}var i=a.bind(null,!1);return i.isRequired=a.bind(null,!0),i}function s(e){return i(function(t,n,r,o,a,i){var s=t[n];return f(s)!==e?new c("Invalid "+o+" `"+a+"` of type `"+p(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null})}function l(e,t,n,r,o){return new c((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function u(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(u);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,a=r.call(t);if(r!==t.entries){for(;!(o=a.next()).done;)if(!u(o.value))return!1}else for(;!(o=a.next()).done;){var c=o.value;if(c&&!u(c[1]))return!1}return!0;default:return!1}}function f(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function p(e){if(null==e)return""+e;var t=f(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function y(e){var t=p(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return c.prototype=Error.prototype,o.checkPropTypes=F,o.resetWarningCache=F.resetWarningCache,o.PropTypes=o,o}(E.isElement,!0):function(){function e(e,t,n,r,o,a){if(a!==I){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:q,resetWarningCache:W};return n.PropTypes=n,n}()});const Y=e=>h("tbody",null,e.data.map((t,n)=>h("tr",{className:"_xQ00D",key:n},e.columns.map((e,n)=>h("td",{key:n},t[e.dataField])))));Y.propTypes={data:U.array,columns:U.array};const J=n=>{const r=[...n.rows],[o,a]=e(n.columns),[c,i]=e(10),[s,l]=e(""),[u,f]=e(1),[p,y]=e("ASC"),[d,m]=e(null),[v,b]=e("String"),g=r.filter(e=>Object.keys(e).some(t=>e[t].toLowerCase().includes(s))).sort((e,t)=>{if(null!==d)return"Date"===v?new Date(e[d])-new Date(t[d]):"Number"===v?e[d]-t[d]:e[d].toLowerCase().localeCompare(t[d].toLowerCase())});"DSC"===p&&g.reverse();const S=u*c,w=g.slice(S-c,S),O=Math.ceil(g.length/c),T=(e,t,n=1)=>{let r=e;const o=[];for(;r<=t;)o.push(r),r+=n;return o},N=e=>{f(e)},x=()=>{f(1)},C=()=>{f(O)},E=()=>{f(u-1)},$=()=>{f(u+1)};return h("div",{className:t.TableDiv},h("div",{className:t.paginateBlock},h("input",{type:"text",className:t.TableSerch,placeholder:"Research",onChange:e=>{const t=e.target.value.toLowerCase();l(t)}}),h("div",{className:t["block-right"]},h("div",{className:t.sizeButton},h("select",{className:t.sizeSelect,onChange:e=>{i(+e.target.value)}},h("option",{value:10},"10"),h("option",{value:25},"25"),h("option",{value:50},"50"),h("option",{value:100},"100"))),h("div",{className:t.paginate},h("button",{onClick:()=>x(),className:1===u?"active":null},"1"),1===u?null:h("button",{onClick:()=>E()},h("svg",{className:t.svg,height:"1em",viewBox:"0 0 512 512"},h("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"}))),T(2,O-1).map(e=>{if(e===u-2||e===u-1||e===u||e===u+1||e===u+2)return h("button",{key:e,onClick:()=>N(e),className:u===e?"active":null}," ",e)}),u===O?null:h("button",{onClick:()=>$()},h("svg",{className:t.svg,height:"16",viewBox:"0 0 512 512"},h("path",{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"}))),1===O?null:h("button",{onClick:()=>C(),className:u===O?"active":null},O)))),h("div",{className:t.TableContener},h("table",{className:t.Table},h("thead",{className:t.TableThead},h("tr",null,o.map(e=>h("th",{className:t.columnTitle,key:e.dataField,onClick:()=>(e=>{m(e.dataField),b(e.type),y("ASC"===p?"DSC":"ASC");const t=[...o],n=t.findIndex(t=>t.dataField===e.dataField);t[n].sortOrder="ASC"===p?"DSC":"ASC",a(t)})(e)},h("div",{className:t.TableTheadTitle},h("span",null,e.text),"ASC"===e.sortOrder?h("svg",{className:t.svg,height:"1em",viewBox:"0 0 512 512"},h("path",{d:"M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"})):h("svg",{className:t.svg,height:"1em",viewBox:"0 0 512 512"},h("path",{d:"M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"}))))))),h(Y,{columns:o,data:w}))),h("div",{className:t.paginate},h("button",{onClick:()=>x(),className:1===u?"active":null},"1"),1===u?null:h("button",{onClick:()=>E()},h("svg",{className:t.svg,height:"1em",viewBox:"0 0 512 512"},h("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"}))),T(2,O-1).map(e=>{if(e===u-2||e===u-1||e===u||e===u+1||e===u+2)return h("button",{key:e,onClick:()=>N(e),className:u===e?"active":null}," ",e)}),u===O?null:h("button",{onClick:()=>$()},h("svg",{className:t.svg,height:"16",viewBox:"0 0 512 512"},h("path",{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"}))),1===O?null:h("button",{onClick:()=>C(),className:u===O?"active":null},O)))};J.propTypes={rows:U.array,columns:U.array};const G=()=>h(J,null);export{G as Tablemaker};
//# sourceMappingURL=index.module.js.map

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e||self).axelgalliandTableMaker={},e.react)}(this,function(e,t){var n={TableDiv:"_YJIVn",columnTitle:"_TRuBc",TableSerch:"_UNG9D",paginateBlock:"_-bopI",paginate:"_nWgVU",TableContener:"_rBob8",TableThead:"_IgXGw",TableTheadTitle:"_6PncS",svg:"_SRHmq",sizeSelect:"_b6Srm","block-right":"_ymujw"};function r(e){var t={exports:{}};return e(t,t.exports),t.exports}var o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,s=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.async_mode"):60111,y=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,m=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.suspense_list"):60120,v=o?Symbol.for("react.memo"):60115,g=o?Symbol.for("react.lazy"):60116,S=o?Symbol.for("react.block"):60121,w=o?Symbol.for("react.fundamental"):60117,O=o?Symbol.for("react.responder"):60118,T=o?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case p:case y:case c:case u:case s:case m:return e;default:switch(e=e&&e.$$typeof){case f:case d:case g:case v:case l:return e;default:return t}}case i:return t}}}function N(e){return x(e)===y}var C={AsyncMode:p,ConcurrentMode:y,ContextConsumer:f,ContextProvider:l,Element:a,ForwardRef:d,Fragment:c,Lazy:g,Memo:v,Portal:i,Profiler:u,StrictMode:s,Suspense:m,isAsyncMode:function(e){return N(e)||x(e)===p},isConcurrentMode:N,isContextConsumer:function(e){return x(e)===f},isContextProvider:function(e){return x(e)===l},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},isForwardRef:function(e){return x(e)===d},isFragment:function(e){return x(e)===c},isLazy:function(e){return x(e)===g},isMemo:function(e){return x(e)===v},isPortal:function(e){return x(e)===i},isProfiler:function(e){return x(e)===u},isStrictMode:function(e){return x(e)===s},isSuspense:function(e){return x(e)===m},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===c||e===y||e===u||e===s||e===m||e===b||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===v||e.$$typeof===l||e.$$typeof===f||e.$$typeof===d||e.$$typeof===w||e.$$typeof===O||e.$$typeof===T||e.$$typeof===S)},typeOf:x},E=r(function(e,t){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var y=e.type;switch(y){case u:case l:case o:case i:case a:case p:return y;default:var h=y&&y.$$typeof;switch(h){case s:case f:case m:case d:case c:return h;default:return t}}case r:return t}}}var w=l,O=s,T=c,x=n,N=f,C=o,E=m,k=d,$=r,j=i,_=a,P=p,I=!1;function M(e){return S(e)===l}t.AsyncMode=u,t.ConcurrentMode=w,t.ContextConsumer=O,t.ContextProvider=T,t.Element=x,t.ForwardRef=N,t.Fragment=C,t.Lazy=E,t.Memo=k,t.Portal=$,t.Profiler=j,t.StrictMode=_,t.Suspense=P,t.isAsyncMode=function(e){return I||(I=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),M(e)||S(e)===u},t.isConcurrentMode=M,t.isContextConsumer=function(e){return S(e)===s},t.isContextProvider=function(e){return S(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return S(e)===f},t.isFragment=function(e){return S(e)===o},t.isLazy=function(e){return S(e)===m},t.isMemo=function(e){return S(e)===d},t.isPortal=function(e){return S(e)===r},t.isProfiler=function(e){return S(e)===i},t.isStrictMode=function(e){return S(e)===a},t.isSuspense=function(e){return S(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===l||e===i||e===a||e===p||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===d||e.$$typeof===c||e.$$typeof===s||e.$$typeof===f||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g||e.$$typeof===h)},t.typeOf=S}()}),k=r(function(e){e.exports="production"===process.env.NODE_ENV?C:E}),$=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,P=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,r,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var i in n=Object(arguments[a]))j.call(n,i)&&(o[i]=n[i]);if($){r=$(n);for(var c=0;c<r.length;c++)_.call(n,r[c])&&(o[r[c]]=n[r[c]])}}return o},I=Function.call.bind(Object.prototype.hasOwnProperty),M="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",R=I,A=function(){};if("production"!==process.env.NODE_ENV){var D=M,V={},z=R;A=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function F(e,t,n,r,o){if("production"!==process.env.NODE_ENV)for(var a in e)if(z(e,a)){var i;try{if("function"!=typeof e[a]){var c=Error((r||"React class")+": "+n+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[a]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}i=e[a](t,a,r,n,null,D)}catch(e){i=e}if(!i||i instanceof Error||A((r||"React class")+": type specification of "+n+" `"+a+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof i+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),i instanceof Error&&!(i.message in V)){V[i.message]=!0;var s=o?o():"";A("Failed "+n+" type: "+i.message+(null!=s?s:""))}}}F.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(V={})};var L=F,B=function(){};function q(){return null}function W(){}function U(){}"production"!==process.env.NODE_ENV&&(B=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),U.resetWarningCache=W;var Y=r(function(e){e.exports="production"!==process.env.NODE_ENV?function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,r="<<anonymous>>",o={array:s("array"),bigint:s("bigint"),bool:s("boolean"),func:s("function"),number:s("number"),object:s("object"),string:s("string"),symbol:s("symbol"),any:c(q),arrayOf:function(e){return c(function(t,n,r,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var c=t[n];if(!Array.isArray(c))return new i("Invalid "+o+" `"+a+"` of type `"+f(c)+"` supplied to `"+r+"`, expected an array.");for(var s=0;s<c.length;s++){var u=e(c,s,r,o,a+"["+s+"]",M);if(u instanceof Error)return u}return null})},element:c(function(t,n,r,o,a){var c=t[n];return e(c)?null:new i("Invalid "+o+" `"+a+"` of type `"+f(c)+"` supplied to `"+r+"`, expected a single ReactElement.")}),elementType:c(function(e,t,n,r,o){var a=e[t];return k.isValidElementType(a)?null:new i("Invalid "+r+" `"+o+"` of type `"+f(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")}),instanceOf:function(e){return c(function(t,n,o,a,c){return t[n]instanceof e?null:new i("Invalid "+a+" `"+c+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:r)+"` supplied to `"+o+"`, expected instance of `"+(e.name||r)+"`.");var s})},node:c(function(e,t,n,r,o){return l(e[t])?null:new i("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}),objectOf:function(e){return c(function(t,n,r,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var c=t[n],s=f(c);if("object"!==s)return new i("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var u in c)if(R(c,u)){var l=e(c,u,r,o,a+"."+u,M);if(l instanceof Error)return l}return null})},oneOf:function(e){return Array.isArray(e)?c(function(t,n,r,o,c){for(var s=t[n],u=0;u<e.length;u++)if(a(s,e[u]))return null;var l=JSON.stringify(e,function(e,t){return"symbol"===p(t)?String(t):t});return new i("Invalid "+o+" `"+c+"` of value `"+String(s)+"` supplied to `"+r+"`, expected one of "+l+".")}):("production"!==process.env.NODE_ENV&&B(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),q)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&B("Invalid argument supplied to oneOfType, expected an instance of array."),q;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return B("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+y(n)+" at index "+t+"."),q}return c(function(t,n,r,o,a){for(var c=[],s=0;s<e.length;s++){var u=(0,e[s])(t,n,r,o,a,M);if(null==u)return null;u.data&&R(u.data,"expectedType")&&c.push(u.data.expectedType)}return new i("Invalid "+o+" `"+a+"` supplied to `"+r+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")})},shape:function(e){return c(function(t,n,r,o,a){var c=t[n],s=f(c);if("object"!==s)return new i("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var y=e[l];if("function"!=typeof y)return u(r,o,a,l,p(y));var d=y(c,l,r,o,a+"."+l,M);if(d)return d}return null})},exact:function(e){return c(function(t,n,r,o,a){var c=t[n],s=f(c);if("object"!==s)return new i("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");var l=P({},t[n],e);for(var y in l){var d=e[y];if(R(e,y)&&"function"!=typeof d)return u(r,o,a,y,p(d));if(!d)return new i("Invalid "+o+" `"+a+"` key `"+y+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=d(c,y,r,o,a+"."+y,M);if(m)return m}return null})}};function a(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function i(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function c(e){if("production"!==process.env.NODE_ENV)var n={},o=0;function a(a,c,s,u,l,f,p){if(u=u||r,f=f||s,p!==M){if(t){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var d=u+":"+s;!n[d]&&o<3&&(B("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[d]=!0,o++)}}return null==c[s]?a?new i(null===c[s]?"The "+l+" `"+f+"` is marked as required in `"+u+"`, but its value is `null`.":"The "+l+" `"+f+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(c,s,u,l,f)}var c=a.bind(null,!1);return c.isRequired=a.bind(null,!0),c}function s(e){return c(function(t,n,r,o,a,c){var s=t[n];return f(s)!==e?new i("Invalid "+o+" `"+a+"` of type `"+p(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null})}function u(e,t,n,r,o){return new i((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function l(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(l);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,a=r.call(t);if(r!==t.entries){for(;!(o=a.next()).done;)if(!l(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!l(i[1]))return!1}return!0;default:return!1}}function f(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function p(e){if(null==e)return""+e;var t=f(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function y(e){var t=p(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return i.prototype=Error.prototype,o.checkPropTypes=L,o.resetWarningCache=L.resetWarningCache,o.PropTypes=o,o}(k.isElement,!0):function(){function e(e,t,n,r,o,a){if(a!==M){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:U,resetWarningCache:W};return n.PropTypes=n,n}()});const J=e=>h("tbody",null,e.data.map((t,n)=>h("tr",{className:"_xQ00D",key:n},e.columns.map((e,n)=>h("td",{key:n},t[e.dataField])))));J.propTypes={data:Y.array,columns:Y.array};const G=e=>{const r=[...e.rows],[o,a]=t.useState(e.columns),[i,c]=t.useState(10),[s,u]=t.useState(""),[l,f]=t.useState(1),[p,y]=t.useState("ASC"),[d,m]=t.useState(null),[b,v]=t.useState("String"),g=r.filter(e=>Object.keys(e).some(t=>e[t].toLowerCase().includes(s))).sort((e,t)=>{if(null!==d)return"Date"===b?new Date(e[d])-new Date(t[d]):"Number"===b?e[d]-t[d]:e[d].toLowerCase().localeCompare(t[d].toLowerCase())});"DSC"===p&&g.reverse();const S=l*i,w=g.slice(S-i,S),O=Math.ceil(g.length/i),T=(e,t,n=1)=>{let r=e;const o=[];for(;r<=t;)o.push(r),r+=n;return o},x=e=>{f(e)},N=()=>{f(1)},C=()=>{f(O)},E=()=>{f(l-1)},k=()=>{f(l+1)};return h("div",{className:n.TableDiv},h("div",{className:n.paginateBlock},h("input",{type:"text",className:n.TableSerch,placeholder:"Research",onChange:e=>{const t=e.target.value.toLowerCase();u(t)}}),h("div",{className:n["block-right"]},h("div",{className:n.sizeButton},h("select",{className:n.sizeSelect,onChange:e=>{c(+e.target.value)}},h("option",{value:10},"10"),h("option",{value:25},"25"),h("option",{value:50},"50"),h("option",{value:100},"100"))),h("div",{className:n.paginate},h("button",{onClick:()=>N(),className:1===l?"active":null},"1"),1===l?null:h("button",{onClick:()=>E()},h("svg",{className:n.svg,height:"1em",viewBox:"0 0 512 512"},h("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"}))),T(2,O-1).map(e=>{if(e===l-2||e===l-1||e===l||e===l+1||e===l+2)return h("button",{key:e,onClick:()=>x(e),className:l===e?"active":null}," ",e)}),l===O?null:h("button",{onClick:()=>k()},h("svg",{className:n.svg,height:"16",viewBox:"0 0 512 512"},h("path",{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"}))),1===O?null:h("button",{onClick:()=>C(),className:l===O?"active":null},O)))),h("div",{className:n.TableContener},h("table",{className:n.Table},h("thead",{className:n.TableThead},h("tr",null,o.map(e=>h("th",{className:n.columnTitle,key:e.dataField,onClick:()=>(e=>{m(e.dataField),v(e.type),y("ASC"===p?"DSC":"ASC");const t=[...o],n=t.findIndex(t=>t.dataField===e.dataField);t[n].sortOrder="ASC"===p?"DSC":"ASC",a(t)})(e)},h("div",{className:n.TableTheadTitle},h("span",null,e.text),"ASC"===e.sortOrder?h("svg",{className:n.svg,height:"1em",viewBox:"0 0 512 512"},h("path",{d:"M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"})):h("svg",{className:n.svg,height:"1em",viewBox:"0 0 512 512"},h("path",{d:"M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"}))))))),h(J,{columns:o,data:w}))),h("div",{className:n.paginate},h("button",{onClick:()=>N(),className:1===l?"active":null},"1"),1===l?null:h("button",{onClick:()=>E()},h("svg",{className:n.svg,height:"1em",viewBox:"0 0 512 512"},h("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"}))),T(2,O-1).map(e=>{if(e===l-2||e===l-1||e===l||e===l+1||e===l+2)return h("button",{key:e,onClick:()=>x(e),className:l===e?"active":null}," ",e)}),l===O?null:h("button",{onClick:()=>k()},h("svg",{className:n.svg,height:"16",viewBox:"0 0 512 512"},h("path",{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"}))),1===O?null:h("button",{onClick:()=>C(),className:l===O?"active":null},O)))};G.propTypes={rows:Y.array,columns:Y.array},e.Tablemaker=()=>h(G,null)});
//# sourceMappingURL=index.umd.js.map

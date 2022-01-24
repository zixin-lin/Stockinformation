(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3525:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.withPageAuthRequired=t.useUser=t.UserContext=t.UserProvider=t.useConfig=t.ConfigProvider=void 0;var o=r(1865);Object.defineProperty(t,"ConfigProvider",{enumerable:!0,get:function(){return n(o).default}}),Object.defineProperty(t,"useConfig",{enumerable:!0,get:function(){return o.useConfig}});var i=r(638);Object.defineProperty(t,"UserProvider",{enumerable:!0,get:function(){return n(i).default}}),Object.defineProperty(t,"UserContext",{enumerable:!0,get:function(){return i.UserContext}}),Object.defineProperty(t,"useUser",{enumerable:!0,get:function(){return i.useUser}});var a=r(8896);Object.defineProperty(t,"withPageAuthRequired",{enumerable:!0,get:function(){return n(a).default}})},1865:function(e,t,r){"use strict";var n=r(4155);Object.defineProperty(t,"__esModule",{value:!0}),t.useConfig=void 0;var o=r(8428).__importStar(r(7294)),i=o.createContext({});t.useConfig=function(){return o.useContext(i)},t.default=function(e){var t=e.children,r=e.loginUrl,a=void 0===r?n.env.NEXT_PUBLIC_AUTH0_LOGIN||"/api/auth/login":r;return o.default.createElement(i.Provider,{value:{loginUrl:a}},t)}},638:function(e,t,r){"use strict";var n=r(4155);Object.defineProperty(t,"__esModule",{value:!0}),t.useUser=t.UserContext=void 0;var o=r(8428),i=o.__importStar(r(7294)),a=o.__importDefault(r(1865)),u="You forgot to wrap your app in <UserProvider>";t.UserContext=i.createContext({get user(){throw new Error(u)},get error(){throw new Error(u)},get isLoading(){throw new Error(u)},checkSession:function(){throw new Error(u)}});t.useUser=function(){return i.useContext(t.UserContext)};var c=function(e){return o.__awaiter(void 0,void 0,void 0,(function(){var t;return o.__generator(this,(function(r){switch(r.label){case 0:return[4,fetch(e)];case 1:return[2,(t=r.sent()).ok?t.json():void 0]}}))}))};t.default=function(e){var r=e.children,u=e.user,l=e.profileUrl,f=void 0===l?n.env.NEXT_PUBLIC_AUTH0_PROFILE||"/api/auth/me":l,s=e.loginUrl,d=e.fetcher,h=void 0===d?c:d,p=o.__read(i.useState({user:u,isLoading:!u}),2),v=p[0],y=p[1],_=i.useCallback((function(){return o.__awaiter(void 0,void 0,void 0,(function(){var e,t;return o.__generator(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,h(f)];case 1:return e=r.sent(),y((function(t){return o.__assign(o.__assign({},t),{user:e,error:void 0})})),[3,3];case 2:return r.sent(),t=new Error("The request to "+f+" failed"),y((function(e){return o.__assign(o.__assign({},e),{user:void 0,error:t})})),[3,3];case 3:return[2]}}))}))}),[f]);i.useEffect((function(){v.user||o.__awaiter(void 0,void 0,void 0,(function(){return o.__generator(this,(function(e){switch(e.label){case 0:return[4,_()];case 1:return e.sent(),y((function(e){return o.__assign(o.__assign({},e),{isLoading:!1})})),[2]}}))}))}),[v.user]);var g=v.user,w=v.error,m=v.isLoading;return i.default.createElement(a.default,{loginUrl:s},i.default.createElement(t.UserContext.Provider,{value:{user:g,error:w,isLoading:m,checkSession:_}},r))}},8896:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(8428),o=n.__importStar(r(7294)),i=r(1865),a=r(638),u=function(){return o.default.createElement(o.default.Fragment,null)},c=function(){return o.default.createElement(o.default.Fragment,null)};t.default=function(e,t){return void 0===t&&(t={}),function(r){var l=t.returnTo,f=t.onRedirecting,s=void 0===f?u:f,d=t.onError,h=void 0===d?c:d,p=i.useConfig().loginUrl,v=a.useUser(),y=v.user,_=v.error,g=v.isLoading;return o.useEffect((function(){if(!(y&&!_||g)){var e;if(l)e=l;else{var t=window.location.toString();e=t.replace(new URL(t).origin,"")||"/"}window.location.assign(p+"?returnTo="+encodeURIComponent(e))}}),[y,_,g]),_?h(_):y?o.default.createElement(e,n.__assign({user:y},r)):s()}}},4713:function(e,t,r){"use strict";t.aF=t.dr=void 0;var n=r(8428),o=r(3525);Object.defineProperty(t,"dr",{enumerable:!0,get:function(){return o.UserProvider}}),Object.defineProperty(t,"aF",{enumerable:!0,get:function(){return o.useUser}});var i=function(e){return"The "+e+" method can only be used from the server side"},a={getSession:function(){throw new Error(i("getSession"))},getAccessToken:function(){throw new Error(i("getAccessToken"))},withApiAuthRequired:function(){throw new Error(i("withApiAuthRequired"))},handleLogin:function(){throw new Error(i("handleLogin"))},handleLogout:function(){throw new Error(i("handleLogout"))},handleCallback:function(){throw new Error(i("handleCallback"))},handleProfile:function(){throw new Error(i("handleProfile"))},handleAuth:function(){throw new Error(i("handleAuth"))},withPageAuthRequired:function(){throw new Error(i("withPageAuthRequired"))}}},8428:function(e,t,r){"use strict";r.r(t),r.d(t,{__extends:function(){return o},__assign:function(){return i},__rest:function(){return a},__decorate:function(){return u},__param:function(){return c},__metadata:function(){return l},__awaiter:function(){return f},__generator:function(){return s},__createBinding:function(){return d},__exportStar:function(){return h},__values:function(){return p},__read:function(){return v},__spread:function(){return y},__spreadArrays:function(){return _},__spreadArray:function(){return g},__await:function(){return w},__asyncGenerator:function(){return m},__asyncDelegator:function(){return b},__asyncValues:function(){return j},__makeTemplateObject:function(){return P},__importStar:function(){return x},__importDefault:function(){return E},__classPrivateFieldGet:function(){return A},__classPrivateFieldSet:function(){return S}});var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function u(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}function c(e,t){return function(r,n){t(r,n,e)}}function l(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(t){i(t)}}function u(e){try{c(n.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,u)}c((n=n.apply(e,t||[])).next())}))}function s(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(u){i=[6,u],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}var d=Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function h(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||d(t,e,r)}function p(e){var t="function"===typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(u){o={error:u}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function y(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(v(arguments[t]));return e}function _(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)n[o]=i[a];return n}function g(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function w(e){return this instanceof w?(this.v=e,this):new w(e)}function m(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||u(e,t)}))})}function u(e,t){try{(r=o[e](t)).value instanceof w?Promise.resolve(r.value.v).then(c,l):f(i[0][2],r)}catch(n){f(i[0][3],n)}var r}function c(e){u("next",e)}function l(e){u("throw",e)}function f(e,t){e(t),i.shift(),i.length&&u(i[0][0],i[0][1])}}function b(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:w(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function j(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=p(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function P(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var O=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&d(t,e,r);return O(t,e),t}function E(e){return e&&e.__esModule?e:{default:e}}function A(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"===typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function S(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"===typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}},1780:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(776)}])},8045:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a=d(r(7294)),u=d(r(5443)),c=r(6978),l=r(5809),f=r(7190);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){return e&&e.__esModule?e:{default:e}}function h(e){for(var t=arguments,r=function(r){var n=null!=t[r]?t[r]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){s(e,t,n[t])}))},n=1;n<arguments.length;n++)r(n);return e}var p=new Set,v=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var y=new Map([["default",function(e){var t=e.root,r=e.src,n=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(e){var t=e.root,r=e.src,n=e.width,o=e.quality,i=new URL("".concat(t).concat(S(r))),a=i.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),o&&a.set("q",o.toString());return i.href}],["cloudinary",function(e){var t=e.root,r=e.src,n=e.width,o=e.quality,i=["f_auto","c_limit","w_"+n,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(i).concat(S(r))}],["akamai",function(e){var t=e.root,r=e.src,n=e.width;return"".concat(t).concat(S(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function _(e){return void 0!==e.default}var g,w={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai"}||l.imageConfigDefault,m=w.deviceSizes,b=w.imageSizes,j=w.loader,P=w.path,O=(w.domains,i(m).concat(i(b)));function x(e){var t=e.src,r=e.unoptimized,n=e.layout,o=e.width,a=e.quality,u=e.sizes,c=e.loader;if(r)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,r){if(r&&("fill"===t||"responsive"===t)){for(var n,o=/(^|\s)(1?\d?\d)vw/g,a=[];n=o.exec(r);n)a.push(parseInt(n[2]));if(a.length){var u,c=.01*(u=Math).min.apply(u,i(a));return{widths:O.filter((function(e){return e>=m[0]*c})),kind:"w"}}return{widths:O,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:m,kind:"w"}:{widths:i(new Set([e,2*e].map((function(e){return O.find((function(t){return t>=e}))||O[O.length-1]})))),kind:"x"}}(o,n,u),f=l.widths,s=l.kind,d=f.length-1;return{sizes:u||"w"!==s?u:"100vw",srcSet:f.map((function(e,r){return"".concat(c({src:t,quality:a,width:e})," ").concat("w"===s?e:r+1).concat(s)})).join(", "),src:c({src:t,quality:a,width:f[d]})}}function E(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var t=y.get(j);if(t)return t(h({root:P},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(j))}function S(e){return"/"===e[0]?e.slice(1):e}m.sort((function(e,t){return e-t})),O.sort((function(e,t){return e-t}))},8418:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var o,i=(o=r(7294))&&o.__esModule?o:{default:o},a=r(6273),u=r(387),c=r(7190);var l={};function f(e,t,r,n){if(e&&a.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(o?"%"+o:"")]=!0}}var s=function(e){var t,r=!1!==e.prefetch,o=u.useRouter(),s=i.default.useMemo((function(){var t=n(a.resolveHref(o,e.href,!0),2),r=t[0],i=t[1];return{href:r,as:e.as?a.resolveHref(o,e.as):i||r}}),[o,e.href,e.as]),d=s.href,h=s.as,p=e.children,v=e.replace,y=e.shallow,_=e.scroll,g=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var w=(t=i.default.Children.only(p))&&"object"===typeof t&&t.ref,m=n(c.useIntersection({rootMargin:"200px"}),2),b=m[0],j=m[1],P=i.default.useCallback((function(e){b(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,b]);i.default.useEffect((function(){var e=j&&r&&a.isLocalURL(d),t="undefined"!==typeof g?g:o&&o.locale,n=l[d+"%"+h+(t?"%"+t:"")];e&&!n&&f(o,d,h,{locale:t})}),[h,d,j,g,r,o]);var O={ref:P,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,u,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(r))&&(e.preventDefault(),null==u&&n.indexOf("#")>=0&&(u=!1),t[o?"replace":"push"](r,n,{shallow:i,locale:c,scroll:u}))}(e,o,d,h,v,y,_,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),a.isLocalURL(d)&&f(o,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var x="undefined"!==typeof g?g:o&&o.locale,E=o&&o.isLocaleDomain&&a.getDomainLocale(h,x,o&&o.locales,o&&o.domainLocales);O.href=E||a.addBasePath(a.addLocale(h,x,o&&o.defaultLocale))}return i.default.cloneElement(t,O)};t.default=s},7190:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!a,c=o.useRef(),l=n(o.useState(!1),2),f=l[0],s=l[1],d=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||f||e&&e.tagName&&(c.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=u.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return u.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,i=n.observer,a=n.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),u.delete(o))}}(e,(function(e){return e&&s(e)}),{rootMargin:t}))}),[r,t,f]);return o.useEffect((function(){if(!a&&!f){var e=i.requestIdleCallback((function(){return s(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),[d,f]};var o=r(7294),i=r(9311),a="undefined"!==typeof IntersectionObserver;var u=new Map},6978:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},776:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(5893),o=(r(906),r(1664)),i=(r(5675),r(214)),a=r.n(i),u=r(4713);function c(e){var t=e.children,r=(0,u.aF)(),i=r.user;r.error,r.isLoading;return(0,n.jsxs)("div",{children:[(0,n.jsxs)("ul",{className:a().daohang,children:[(0,n.jsx)("li",{className:a().logo,children:(0,n.jsx)("img",{src:"/logo.jpg",alt:"Picture of the author",height:150,width:30})}),(0,n.jsx)("li",{className:a().line,children:(0,n.jsx)(o.default,{href:"/",children:(0,n.jsx)("a",{children:"Home page"})})}),(0,n.jsx)("li",{className:a().line,children:(0,n.jsx)(o.default,{href:"/Performance",children:(0,n.jsx)("a",{children:"Market Performance"})})}),(0,n.jsx)("li",{className:a().line,children:(0,n.jsx)(o.default,{href:"/Prediction",children:(0,n.jsx)("a",{children:"Market Prediction"})})}),(0,n.jsxs)("li",{className:a().Contact,children:[(0,n.jsx)("span",{children:"Contact us"}),(0,n.jsx)("span",{className:"desc",children:"Email:12345678901@126.com.cn"}),(0,n.jsx)("span",{className:"desc",children:"Phone:12345678901"})]})]}),(0,n.jsxs)("ul",{className:a().header1,children:[(0,n.jsx)("li",{className:a().title,children:"Neural Matrix  "}),(0,n.jsxs)("li",{className:a().login,children:[" ",!i&&(0,n.jsx)(o.default,{href:"/api/auth/login",children:(0,n.jsx)("a",{children:"Login/Sign UP"})}),i&&(0,n.jsx)(o.default,{href:"/api/auth/logout",children:(0,n.jsxs)("a",{children:[i.name,"  Logout"]})})]})]}),(0,n.jsx)("div",{className:"page-content",children:t})]})}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}var s=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsx)(u.dr,{children:(0,n.jsx)(c,{children:(0,n.jsx)(t,f({},r))})})}},214:function(e){e.exports={daohang:"Home_daohang__tZn_U",logo:"Home_logo__27_tb",line:"Home_line___MWv3",Contact:"Home_Contact__n1e_K",desc:"Home_desc__u4NEU",header1:"Home_header1__H4WNi",title:"Home_title__T09hD",login:"Home_login___4DHh",content:"Home_content__Zy02X"}},906:function(){},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},5675:function(e,t,r){r(8045)},1664:function(e,t,r){e.exports=r(8418)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(387)}));var r=e.O();_N_E=r}]);
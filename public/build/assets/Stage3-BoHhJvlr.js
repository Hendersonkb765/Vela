import{r as Y,b as H,g as K,j as m,Y as Q}from"./app-CtPP1DNG.js";import{I as B}from"./InputError-BVD2qw8f.js";import{P as $}from"./ProfileUploadInput-LWgYRigi.js";import{T}from"./TextInput-BO1oMSBD.js";import"./SecondaryButton-CJd_1Wwq.js";import"./index-Dh2FwS8Q.js";import"./iconBase-qlBafJIs.js";import"./PrimaryIconButton-E5beE6gg.js";var X={exports:{}};function ee(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var V=ee(Y),te=H;function ne(t,a){for(var o=Object.getOwnPropertyNames(a),n=0;n<o.length;n++){var e=o[n],s=Object.getOwnPropertyDescriptor(a,e);s&&s.configurable&&t[e]===void 0&&Object.defineProperty(t,e,s)}return t}function R(){return(R=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function ae(t,a){t.prototype=Object.create(a.prototype),ne(t.prototype.constructor=t,a)}function oe(t,a){if(t==null)return{};var o,n,e={},s=Object.keys(t);for(n=0;n<s.length;n++)o=s[n],0<=a.indexOf(o)||(e[o]=t[o]);return e}function b(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var re=function(t,a,o,n,e,s,c,g){if(!t){var i;if(a===void 0)i=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[o,n,e,s,c,g],p=0;(i=new Error(a.replace(/%s/g,function(){return l[p++]}))).name="Invariant Violation"}throw i.framesToPop=1,i}},q=re;function U(t,a,o){if("selectionStart"in t&&"selectionEnd"in t)t.selectionStart=a,t.selectionEnd=o;else{var n=t.createTextRange();n.collapse(!0),n.moveStart("character",a),n.moveEnd("character",o-a),n.select()}}function se(t){var a=0,o=0;if("selectionStart"in t&&"selectionEnd"in t)a=t.selectionStart,o=t.selectionEnd;else{var n=document.selection.createRange();n.parentElement()===t&&(a=-n.moveStart("character",-t.value.length),o=-n.moveEnd("character",-t.value.length))}return{start:a,end:o,length:o-a}}var ie={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},le="_";function _(t,a,o){var n="",e="",s=null,c=[];if(a===void 0&&(a=le),o==null&&(o=ie),!t||typeof t!="string")return{maskChar:a,formatChars:o,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var g=!1;return t.split("").forEach(function(i){g=!g&&i==="\\"||(g||!o[i]?(c.push(n.length),n.length===c.length-1&&(e+=i)):s=n.length+1,n+=i,!1)}),{maskChar:a,formatChars:o,prefix:e,mask:n,lastEditablePosition:s,permanents:c}}function O(t,a){return t.permanents.indexOf(a)!==-1}function z(t,a,o){var n=t.mask,e=t.formatChars;if(!o)return!1;if(O(t,a))return n[a]===o;var s=e[n[a]];return new RegExp(s).test(o)}function J(t,a){return a.split("").every(function(o,n){return O(t,n)||!z(t,n,o)})}function j(t,a){var o=t.maskChar,n=t.prefix;if(!o){for(;a.length>n.length&&O(t,a.length-1);)a=a.slice(0,a.length-1);return a.length}for(var e=n.length,s=a.length;s>=n.length;s--){var c=a[s];if(!O(t,s)&&z(t,s,c)){e=s+1;break}}return e}function Z(t,a){return j(t,a)===t.mask.length}function N(t,a){var o=t.maskChar,n=t.mask,e=t.prefix;if(!o){for((a=A(t,"",a,0)).length<e.length&&(a=e);a.length<n.length&&O(t,a.length);)a+=n[a.length];return a}if(a)return A(t,N(t,""),a,0);for(var s=0;s<n.length;s++)O(t,s)?a+=n[s]:a+=o;return a}function ue(t,a,o,n){var e=o+n,s=t.maskChar,c=t.mask,g=t.prefix,i=a.split("");if(s)return i.map(function(p,k){return k<o||e<=k?p:O(t,k)?c[k]:s}).join("");for(var l=e;l<i.length;l++)O(t,l)&&(i[l]="");return o=Math.max(g.length,o),i.splice(o,e-o),a=i.join(""),N(t,a)}function A(t,a,o,n){var e=t.mask,s=t.maskChar,c=t.prefix,g=o.split(""),i=Z(t,a);return!s&&n>a.length&&(a+=e.slice(a.length,n)),g.every(function(l){for(;x=l,O(t,h=n)&&x!==e[h];){if(n>=a.length&&(a+=e[n]),p=l,k=n,s&&O(t,k)&&p===s)return!0;if(++n>=e.length)return!1}var p,k,h,x;return!z(t,n,l)&&l!==s||(n<a.length?a=s||i||n<c.length?a.slice(0,n)+l+a.slice(n+1):(a=a.slice(0,n)+l+a.slice(n),N(t,a)):s||(a+=l),++n<e.length)}),a}function ce(t,a,o,n){var e=t.mask,s=t.maskChar,c=o.split(""),g=n;return c.every(function(i){for(;p=i,O(t,l=n)&&p!==e[l];)if(++n>=e.length)return!1;var l,p;return(z(t,n,i)||i===s)&&n++,n<e.length}),n-g}function pe(t,a){for(var o=a;0<=o;--o)if(!O(t,o))return o;return null}function D(t,a){for(var o=t.mask,n=a;n<o.length;++n)if(!O(t,n))return n;return null}function F(t){return t||t===0?t+"":""}function fe(t,a,o,n,e){var s=t.mask,c=t.prefix,g=t.lastEditablePosition,i=a,l="",p=0,k=0,h=Math.min(e.start,o.start);return o.end>e.start?k=(p=ce(t,n,l=i.slice(e.start,o.end),h))?e.length:0:i.length<n.length&&(k=n.length-i.length),i=n,k&&(k===1&&!e.length&&(h=e.start===o.start?D(t,o.start):pe(t,o.start)),i=ue(t,i,h,k)),i=A(t,i,l,h),(h+=p)>=s.length?h=s.length:h<c.length&&!p?h=c.length:h>=c.length&&h<g&&p&&(h=D(t,h)),l||(l=null),{value:i=N(t,i),enteredString:l,selection:{start:h,end:h}}}function me(){var t=new RegExp("windows","i"),a=new RegExp("phone","i"),o=navigator.userAgent;return t.test(o)&&a.test(o)}function S(t){return typeof t=="function"}function he(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function G(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function W(t){return(G()?he():function(){return setTimeout(t,1e3/60)})(t)}function L(t){(G()||clearTimeout)(t)}var de=function(t){function a(n){var e=t.call(this,n)||this;e.focused=!1,e.mounted=!1,e.previousSelection=null,e.selectionDeferId=null,e.saveSelectionLoopDeferId=null,e.saveSelectionLoop=function(){e.previousSelection=e.getSelection(),e.saveSelectionLoopDeferId=W(e.saveSelectionLoop)},e.runSaveSelectionLoop=function(){e.saveSelectionLoopDeferId===null&&e.saveSelectionLoop()},e.stopSaveSelectionLoop=function(){e.saveSelectionLoopDeferId!==null&&(L(e.saveSelectionLoopDeferId),e.saveSelectionLoopDeferId=null,e.previousSelection=null)},e.getInputDOMNode=function(){if(!e.mounted)return null;var r=te.findDOMNode(b(b(e))),u=typeof window<"u"&&r instanceof window.Element;if(r&&!u)return null;if(r.nodeName!=="INPUT"&&(r=r.querySelector("input")),!r)throw new Error("react-input-mask: inputComponent doesn't contain input node");return r},e.getInputValue=function(){var r=e.getInputDOMNode();return r?r.value:null},e.setInputValue=function(r){var u=e.getInputDOMNode();u&&(e.value=r,u.value=r)},e.setCursorToEnd=function(){var r=j(e.maskOptions,e.value),u=D(e.maskOptions,r);u!==null&&e.setCursorPosition(u)},e.setSelection=function(r,u,d){d===void 0&&(d={});var f=e.getInputDOMNode(),v=e.isFocused();f&&v&&(d.deferred||U(f,r,u),e.selectionDeferId!==null&&L(e.selectionDeferId),e.selectionDeferId=W(function(){e.selectionDeferId=null,U(f,r,u)}),e.previousSelection={start:r,end:u,length:Math.abs(u-r)})},e.getSelection=function(){return se(e.getInputDOMNode())},e.getCursorPosition=function(){return e.getSelection().start},e.setCursorPosition=function(r){e.setSelection(r,r)},e.isFocused=function(){return e.focused},e.getBeforeMaskedValueChangeConfig=function(){var r=e.maskOptions,u=r.mask,d=r.maskChar,f=r.permanents,v=r.formatChars;return{mask:u,maskChar:d,permanents:f,alwaysShowMask:!!e.props.alwaysShowMask,formatChars:v}},e.isInputAutofilled=function(r,u,d,f){var v=e.getInputDOMNode();try{if(v.matches(":-webkit-autofill"))return!0}catch{}return!e.focused||f.end<d.length&&u.end===r.length},e.onChange=function(r){var u=b(b(e)).beforePasteState,d=b(b(e)).previousSelection,f=e.props.beforeMaskedValueChange,v=e.getInputValue(),C=e.value,w=e.getSelection();e.isInputAutofilled(v,w,C,d)&&(C=N(e.maskOptions,""),d={start:0,end:0,length:0}),u&&(d=u.selection,C=u.value,w={start:d.start+v.length,end:d.start+v.length,length:0},v=C.slice(0,d.start)+v+C.slice(d.end),e.beforePasteState=null);var M=fe(e.maskOptions,v,w,C,d),E=M.enteredString,I=M.selection,y=M.value;if(S(f)){var P=f({value:y,selection:I},{value:C,selection:d},E,e.getBeforeMaskedValueChangeConfig());y=P.value,I=P.selection}e.setInputValue(y),S(e.props.onChange)&&e.props.onChange(r),e.isWindowsPhoneBrowser?e.setSelection(I.start,I.end,{deferred:!0}):e.setSelection(I.start,I.end)},e.onFocus=function(r){var u=e.props.beforeMaskedValueChange,d=e.maskOptions,f=d.mask,v=d.prefix;if(e.focused=!0,e.mounted=!0,f){if(e.value)j(e.maskOptions,e.value)<e.maskOptions.mask.length&&e.setCursorToEnd();else{var C=N(e.maskOptions,v),w=N(e.maskOptions,C),M=j(e.maskOptions,w),E=D(e.maskOptions,M),I={start:E,end:E};if(S(u)){var y=u({value:w,selection:I},{value:e.value,selection:null},null,e.getBeforeMaskedValueChangeConfig());w=y.value,I=y.selection}var P=w!==e.getInputValue();P&&e.setInputValue(w),P&&S(e.props.onChange)&&e.props.onChange(r),e.setSelection(I.start,I.end)}e.runSaveSelectionLoop()}S(e.props.onFocus)&&e.props.onFocus(r)},e.onBlur=function(r){var u=e.props.beforeMaskedValueChange,d=e.maskOptions.mask;if(e.stopSaveSelectionLoop(),e.focused=!1,d&&!e.props.alwaysShowMask&&J(e.maskOptions,e.value)){var f="";S(u)&&(f=u({value:f,selection:null},{value:e.value,selection:e.previousSelection},null,e.getBeforeMaskedValueChangeConfig()).value);var v=f!==e.getInputValue();v&&e.setInputValue(f),v&&S(e.props.onChange)&&e.props.onChange(r)}S(e.props.onBlur)&&e.props.onBlur(r)},e.onMouseDown=function(r){if(!e.focused&&document.addEventListener){e.mouseDownX=r.clientX,e.mouseDownY=r.clientY,e.mouseDownTime=new Date().getTime();var u=function d(f){if(document.removeEventListener("mouseup",d),e.focused){var v=Math.abs(f.clientX-e.mouseDownX),C=Math.abs(f.clientY-e.mouseDownY),w=Math.max(v,C),M=new Date().getTime()-e.mouseDownTime;(w<=10&&M<=200||w<=5&&M<=300)&&e.setCursorToEnd()}};document.addEventListener("mouseup",u)}S(e.props.onMouseDown)&&e.props.onMouseDown(r)},e.onPaste=function(r){S(e.props.onPaste)&&e.props.onPaste(r),r.defaultPrevented||(e.beforePasteState={value:e.getInputValue(),selection:e.getSelection()},e.setInputValue(""))},e.handleRef=function(r){e.props.children==null&&S(e.props.inputRef)&&e.props.inputRef(r)};var s=n.mask,c=n.maskChar,g=n.formatChars,i=n.alwaysShowMask,l=n.beforeMaskedValueChange,p=n.defaultValue,k=n.value;e.maskOptions=_(s,c,g),p==null&&(p=""),k==null&&(k=p);var h=F(k);if(e.maskOptions.mask&&(i||h)&&(h=N(e.maskOptions,h),S(l))){var x=n.value;n.value==null&&(x=p),h=l({value:h,selection:null},{value:x=F(x),selection:null},null,e.getBeforeMaskedValueChangeConfig()).value}return e.value=h,e}ae(a,t);var o=a.prototype;return o.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=me(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},o.componentDidUpdate=function(){var n=this.previousSelection,e=this.props,s=e.beforeMaskedValueChange,c=e.alwaysShowMask,g=e.mask,i=e.maskChar,l=e.formatChars,p=this.maskOptions,k=c||this.isFocused(),h=this.props.value!=null,x=h?F(this.props.value):this.value,r=n?n.start:null;if(this.maskOptions=_(g,i,l),this.maskOptions.mask){!p.mask&&this.isFocused()&&this.runSaveSelectionLoop();var u=this.maskOptions.mask&&this.maskOptions.mask!==p.mask;if(p.mask||h||(x=this.getInputValue()),(u||this.maskOptions.mask&&(x||k))&&(x=N(this.maskOptions,x)),u){var d=j(this.maskOptions,x);(r===null||d<r)&&(r=Z(this.maskOptions,x)?d:D(this.maskOptions,d))}!this.maskOptions.mask||!J(this.maskOptions,x)||k||h&&this.props.value||(x="");var f={start:r,end:r};if(S(s)){var v=s({value:x,selection:f},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());x=v.value,f=v.selection}this.value=x;var C=this.getInputValue()!==this.value;C?(this.setInputValue(this.value),this.forceUpdate()):u&&this.forceUpdate();var w=!1;f.start!=null&&f.end!=null&&(w=!n||n.start!==f.start||n.end!==f.end),(w||C)&&this.setSelection(f.start,f.end)}else p.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},o.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&L(this.selectionDeferId),this.stopSaveSelectionLoop()},o.render=function(){var n,e=this.props,s=(e.mask,e.alwaysShowMask,e.maskChar,e.formatChars,e.inputRef,e.beforeMaskedValueChange,e.children),c=oe(e,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(s){S(s)||q(!1);var g=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],i=R({},c);g.forEach(function(p){return delete i[p]}),n=s(i),g.filter(function(p){return n.props[p]!=null&&n.props[p]!==c[p]}).length&&q(!1)}else n=V.createElement("input",R({ref:this.handleRef},c));var l={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(c.disabled||c.readOnly||(l.onChange=this.onChange,l.onPaste=this.onPaste,l.onMouseDown=this.onMouseDown),c.value!=null&&(l.value=this.value)),n=V.cloneElement(n,l)},a}(V.Component),ge=de;X.exports=ge;var ve=X.exports;const ke=K(ve),ye=({baseInfo:t,maxStep:a,data:o,setData:n,errors:e})=>{var i;const[s,c]=Y.useState(o.organizationProfilePicture||null),g=l=>{c(l),n("organization",{...o.organization,organizationProfilePicture:l})};return m.jsxs("div",{className:"flex flex-col space-y-8",children:[m.jsx(Q,{title:"Fale sobre sua organização"}),m.jsxs("div",{className:"flex flex-col",children:[m.jsxs("span",{className:"font-headers font-normal text-primary text-sm",children:["Etapa ",t.stage," de ",a]}),m.jsx("h1",{className:"font-headers font-semibold text-4xl text-neutralcolors-700 dark:text-white",children:t.title}),m.jsx("p",{className:"font-body font-normal text-base text-neutralcolors-700 dark:text-gray-300",children:t.description})]}),m.jsxs("div",{className:"flex items-center space-x-12",children:[m.jsxs("div",{className:"flex flex-col space-y-2",children:[m.jsxs("div",{children:[m.jsx("h3",{className:"font-headers font-medium text-large text-neutralcolors-700 dark:text-gray-200",children:"Nome da sua Organização*"}),m.jsx("p",{className:"font-body font-normal text-sm text-neutralcolors-700  dark:text-gray-400",children:"Esse nome vai ser aquele apresentado para outros usuários que querem encontrar sua organização"})]}),m.jsxs("div",{children:[m.jsx(T,{id:"organizationName",name:"organizationName",value:o.organization.organizationName,className:"mt-1 block w-96 min-w-fit",autoComplete:"organizationName",isFocused:!0,onChange:l=>n("organization",{...o.organization,organizationName:l.target.value}),placeholder:"Nome da Sua Organização",required:!0}),m.jsx(B,{message:e.organizationName,className:"mt-2"})]})]}),m.jsxs("div",{className:"flex flex-col space-y-2",children:[m.jsxs("div",{children:[m.jsxs("h3",{className:"font-headers font-medium text-large text-neutralcolors-700 dark:text-gray-200",children:["CNPJ da sua Organização ",m.jsx("span",{className:"text-neutralcolors-300 font-normal dark:text-gray-500",children:"(opcional)"})]}),m.jsx("p",{className:"font-body font-normal text-sm text-neutralcolors-700  dark:text-gray-400 ",children:"Se sua organização ainda não tem um CNPJ, nós iremos te ajudar a consegui-lo."})]}),m.jsxs("div",{children:[m.jsx(ke,{maskChar:"",mask:"99.999.999/9999-99",value:o.organization.CNPJ,onChange:l=>n("organization",{...o.organization,CNPJ:l.target.value}),children:()=>m.jsx(T,{id:"CNPJ",name:"CNPJ",className:"mt-1 block w-96 min-w-fit",autoComplete:"CNPJ",isFocused:!0,placeholder:"99.999.999/9999-99"})}),m.jsx(B,{message:e.CNPJ,className:"mt-2"})]})]})]}),m.jsxs("div",{className:"flex flex-col space-y-2",children:[m.jsxs("div",{className:"mb-2",children:[m.jsx("h3",{className:"font-headers font-medium text-large text-neutralcolors-700 dark:text-gray-200",children:"Escolha uma foto para o perfil da organização"}),m.jsx("p",{className:"font-body font-normal text-sm text-neutralcolors-700 dark:text-gray-400",children:"Coloque uma foto que represente sua organização. Faça essa escolha com carinho, mas não se preocupe, você poderá mudar depois."})]}),m.jsx($,{firstletter:(i=o.organization.organizationName)==null?void 0:i.charAt(0).toUpperCase(),updateAvatarUrl:g,savedAvatar:o.organization.organizationProfilePicture})]}),m.jsx("div",{})]})};export{ye as default};
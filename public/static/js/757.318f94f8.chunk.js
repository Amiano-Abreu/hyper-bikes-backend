"use strict";(self.webpackChunkhyper_bikes=self.webpackChunkhyper_bikes||[]).push([[757],{5986:function(t,e,i){var r=i(1413),n=i(4565),o=i(1872),a=i(184);e.Z=function(t){var e=t.text,i=t.cart,l=void 0!==i&&i;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Z,{variant:"h4",sx:(0,r.Z)((0,r.Z)((0,r.Z)({textAlign:"center",fontWeight:"600",pt:1.5},l&&{width:"100%"}),!l&&{width:"90%"}),{},{textTransform:"uppercase",fontSize:{mobile:"0.85rem",tablet:"1rem",laptop:"1.5rem"}}),children:e}),(0,a.jsx)(o.Z,{variant:"middle",sx:(0,r.Z)((0,r.Z)((0,r.Z)({pt:2.5},l&&{width:"100%",mx:0,px:16}),!l&&{width:"90%"}),{},{height:"1px",borderColor:"customRed.main"})})]})}},9757:function(t,e,i){i.r(e);var r=i(1413),n=i(6650),o=i(6015),a=i(4565),l=i(2797),c=i(5986),d=i(2791),s=i(6871),h=i(2246),m=i(3284),p=i(184);e.default=function(){var t,e=(0,l.Z)("(max-width:990px)"),i=(0,s.TH)().state;null!==i&&void 0!==i&&i.newsID&&(t="".concat("api","/news/").concat(null===i||void 0===i?void 0:i.newsID));var v=(0,h.Z)(t),g=v.isLoading,f=v.apiData,x=v.serverError;return(0,d.useEffect)((function(){window.scrollTo(0,0)}),[]),(0,p.jsxs)(n.Z,{elevation:6,sx:(0,r.Z)((0,r.Z)({display:"flex",justifyContent:"center",width:{mobile:"90%",tablet:"620px",laptop:"1000px"},mx:"auto",alignItems:"center",p:5,mt:30},e&&{mt:25}),{},{mb:10,bgcolor:"customWhite.main",flexDirection:"column"}),children:[g?g&&(0,p.jsx)(m.Z,{}):(0,p.jsx)(p.Fragment,{}),x||t?(0,p.jsx)(p.Fragment,{}):(0,p.jsx)("p",{style:{textTransform:"uppercase",width:"100%",textAlign:"center",fontWeight:"700"},children:"Error occurred"}),x?(0,p.jsxs)("p",{style:{textTransform:"uppercase",width:"100%",textAlign:"center",fontWeight:"700"},children:[null===x||void 0===x?void 0:x.message," adf"]}):f&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c.Z,{text:null===i||void 0===i?void 0:i.title}),(0,p.jsx)(a.Z,{sx:{textAlign:"left",color:"customBlack.main",fontWeight:600,mt:2.5,width:"90%",fontSize:{mobile:"0.7rem",tablet:".8rem",laptop:".8rem"}},children:"Admin"}),(0,p.jsx)(a.Z,{sx:{textAlign:"left",color:"customBlack.main",width:"90%",fontSize:{mobile:"0.6rem",tablet:".7rem",laptop:".7rem"}},children:"".concat(null===i||void 0===i?void 0:i.createdAt)}),(0,p.jsx)(o.Z,{sx:{width:"90%",height:{mobile:"",tablet:"",laptop:"550px"},mt:5,"& img":{width:"100%",height:"100%"}},children:(0,p.jsx)("img",{src:null===i||void 0===i?void 0:i.src,alt:null===i||void 0===i?void 0:i.alt})}),(0,p.jsx)(a.Z,{sx:{textAlign:"left",fontWeight:"600",mt:5,color:"customBlack.light",width:"90%",fontSize:{mobile:"0.7rem",tablet:".8rem",laptop:".9rem"}},children:null===i||void 0===i?void 0:i.body}),null===f||void 0===f?void 0:f.data.body.map((function(t,e){return(0,p.jsxs)("div",{children:[(0,p.jsx)(o.Z,{sx:{width:"90%",height:{mobile:"",tablet:"",laptop:"550px"},mt:5,mx:"auto","& img":{width:"100%",height:"100%"}},children:(0,p.jsx)("img",{src:t.src,alt:t.alt})}),t.desc.map((function(t,e){return(0,p.jsx)(a.Z,{sx:(0,r.Z)((0,r.Z)({textAlign:"left",fontWeight:"400",mt:2.5,color:"customBlack.main",width:"90%",mx:"auto"},0===e&&{mt:5}),{},{fontSize:{mobile:"0.65rem",tablet:".75rem",laptop:".8rem"}}),children:t},t.slice(0,20)+e)}))]},t.alt+e)}))]})]})}},1872:function(t,e,i){var r=i(3366),n=i(7462),o=i(2791),a=i(8182),l=i(4419),c=i(2065),d=i(6863),s=i(7254),h=i(7164),m=i(184),p=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],v=(0,d.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(t,e){var i=t.ownerState;return[e.root,i.absolute&&e.absolute,e[i.variant],i.light&&e.light,"vertical"===i.orientation&&e.vertical,i.flexItem&&e.flexItem,i.children&&e.withChildren,i.children&&"vertical"===i.orientation&&e.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&e.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&e.textAlignLeft]}})((function(t){var e=t.theme,i=t.ownerState;return(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},i.light&&{borderColor:e.vars?"rgba(".concat(e.vars.palette.dividerChannel," / 0.08)"):(0,c.Fq)(e.palette.divider,.08)},"inset"===i.variant&&{marginLeft:72},"middle"===i.variant&&"horizontal"===i.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===i.variant&&"vertical"===i.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===i.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},i.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(t){var e=t.theme,i=t.ownerState;return(0,n.Z)({},i.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:"thin solid ".concat((e.vars||e).palette.divider),top:"50%",content:'""',transform:"translateY(50%)"}})}),(function(t){var e=t.theme,i=t.ownerState;return(0,n.Z)({},i.children&&"vertical"===i.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:"thin solid ".concat((e.vars||e).palette.divider),transform:"translateX(0%)"}})}),(function(t){var e=t.ownerState;return(0,n.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),g=(0,d.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(t,e){var i=t.ownerState;return[e.wrapper,"vertical"===i.orientation&&e.wrapperVertical]}})((function(t){var e=t.theme,i=t.ownerState;return(0,n.Z)({display:"inline-block",paddingLeft:"calc(".concat(e.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(e.spacing(1)," * 1.2)")},"vertical"===i.orientation&&{paddingTop:"calc(".concat(e.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(e.spacing(1)," * 1.2)")})})),f=o.forwardRef((function(t,e){var i=(0,s.Z)({props:t,name:"MuiDivider"}),o=i.absolute,c=void 0!==o&&o,d=i.children,f=i.className,x=i.component,u=void 0===x?d?"div":"hr":x,b=i.flexItem,w=void 0!==b&&b,Z=i.light,j=void 0!==Z&&Z,A=i.orientation,S=void 0===A?"horizontal":A,W=i.role,k=void 0===W?"hr"!==u?"separator":void 0:W,y=i.textAlign,C=void 0===y?"center":y,I=i.variant,R=void 0===I?"fullWidth":I,T=(0,r.Z)(i,p),B=(0,n.Z)({},i,{absolute:c,component:u,flexItem:w,light:j,orientation:S,role:k,textAlign:C,variant:R}),D=function(t){var e=t.absolute,i=t.children,r=t.classes,n=t.flexItem,o=t.light,a=t.orientation,c=t.textAlign,d={root:["root",e&&"absolute",t.variant,o&&"light","vertical"===a&&"vertical",n&&"flexItem",i&&"withChildren",i&&"vertical"===a&&"withChildrenVertical","right"===c&&"vertical"!==a&&"textAlignRight","left"===c&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,l.Z)(d,h.V,r)}(B);return(0,m.jsx)(v,(0,n.Z)({as:u,className:(0,a.Z)(D.root,f),role:k,ref:e,ownerState:B},T,{children:d?(0,m.jsx)(g,{className:D.wrapper,ownerState:B,children:d}):null}))}));e.Z=f}}]);
//# sourceMappingURL=757.318f94f8.chunk.js.map
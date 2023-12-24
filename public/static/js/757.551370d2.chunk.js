"use strict";(self.webpackChunkhyper_bikes=self.webpackChunkhyper_bikes||[]).push([[757],{5986:function(t,e,i){var r=i(1413),n=i(4565),o=i(1872),a=i(184);e.Z=function(t){var e=t.text,i=t.cart,l=void 0!==i&&i;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Z,{variant:"h4",sx:(0,r.Z)((0,r.Z)((0,r.Z)({textAlign:"center",fontWeight:"600",pt:1.5},l&&{width:"100%"}),!l&&{width:"90%"}),{},{textTransform:"uppercase",fontSize:{mobile:"0.85rem",tablet:"1rem",laptop:"1.5rem"}}),children:e}),(0,a.jsx)(o.Z,{variant:"middle",sx:(0,r.Z)((0,r.Z)((0,r.Z)({pt:2.5},l&&{width:"100%",mx:0,px:16}),!l&&{width:"90%"}),{},{height:"1px",borderColor:"customRed.main"})})]})}},9757:function(t,e,i){i.r(e);var r=i(1413),n=i(6650),o=i(6015),a=i(4565),l=i(2797),d=i(5986),c=i(2791),s=i(6871),h=i(2246),m=i(3284),v=i(184);e.default=function(){var t,e,i,p=(0,l.Z)("(max-width:990px)"),g=(0,s.TH)().state;null!==g&&void 0!==g&&g.newsID&&(i="api/news/".concat(null===g||void 0===g?void 0:g.newsID));var u=new URL(i,"https://www.hyper-bikes.onrender.com#     PRODUCTION API URL"),x=(0,h.Z)(u.toString()),f=x.isLoading,w=x.apiData,b=x.serverError;return(0,c.useEffect)((function(){window.scrollTo(0,0)}),[]),(0,v.jsxs)(n.Z,{elevation:6,sx:(0,r.Z)((0,r.Z)({display:"flex",justifyContent:"center",width:{mobile:"90%",tablet:"620px",laptop:"1000px"},mx:"auto",alignItems:"center",p:5,mt:30},p&&{mt:25}),{},{mb:10,bgcolor:"customWhite.main",flexDirection:"column"}),children:[f?f&&(0,v.jsx)(m.Z,{}):(0,v.jsx)(v.Fragment,{}),b||i?(0,v.jsx)(v.Fragment,{}):(0,v.jsx)("p",{style:{textTransform:"uppercase",width:"100%",textAlign:"center",fontWeight:"700"},children:"Error occurred"}),b?(0,v.jsx)("p",{style:{textTransform:"uppercase",width:"100%",textAlign:"center",fontWeight:"700"},children:null===b||void 0===b?void 0:b.message}):w&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d.Z,{text:null===g||void 0===g?void 0:g.title}),(0,v.jsx)(a.Z,{sx:{textAlign:"left",color:"customBlack.main",fontWeight:600,mt:2.5,width:"90%",fontSize:{mobile:"0.7rem",tablet:".8rem",laptop:".8rem"}},children:"Admin"}),(0,v.jsx)(a.Z,{sx:{textAlign:"left",color:"customBlack.main",width:"90%",fontSize:{mobile:"0.6rem",tablet:".7rem",laptop:".7rem"}},children:"".concat(null===g||void 0===g?void 0:g.createdAt)}),(0,v.jsx)(o.Z,{sx:{width:"90%",height:{mobile:"",tablet:"",laptop:"550px"},mt:5,"& img":{width:"100%",height:"100%"}},children:(0,v.jsx)("img",{src:null===g||void 0===g?void 0:g.src,alt:null===g||void 0===g?void 0:g.alt})}),(0,v.jsx)(a.Z,{sx:{textAlign:"left",fontWeight:"600",mt:5,color:"customBlack.light",width:"90%",fontSize:{mobile:"0.7rem",tablet:".8rem",laptop:".9rem"}},children:null===g||void 0===g?void 0:g.body}),null===w||void 0===w||null===(t=w.data)||void 0===t||null===(e=t.body)||void 0===e?void 0:e.map((function(t,e){var i;return(0,v.jsxs)("div",{children:[(0,v.jsx)(o.Z,{sx:{width:"90%",height:{mobile:"",tablet:"",laptop:"550px"},mt:5,mx:"auto","& img":{width:"100%",height:"100%"}},children:(0,v.jsx)("img",{src:null===t||void 0===t?void 0:t.src,alt:null===t||void 0===t?void 0:t.alt})}),null===t||void 0===t||null===(i=t.desc)||void 0===i?void 0:i.map((function(t,e){return(0,v.jsx)(a.Z,{sx:(0,r.Z)((0,r.Z)({textAlign:"left",fontWeight:"400",mt:2.5,color:"customBlack.main",width:"90%",mx:"auto"},0===e&&{mt:5}),{},{fontSize:{mobile:"0.65rem",tablet:".75rem",laptop:".8rem"}}),children:t},t.slice(0,20)+e)}))]},(null===t||void 0===t?void 0:t.alt)+e)}))]})]})}},1872:function(t,e,i){var r=i(3366),n=i(7462),o=i(2791),a=i(8182),l=i(4419),d=i(2065),c=i(6863),s=i(7254),h=i(7164),m=i(184),v=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],p=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(t,e){var i=t.ownerState;return[e.root,i.absolute&&e.absolute,e[i.variant],i.light&&e.light,"vertical"===i.orientation&&e.vertical,i.flexItem&&e.flexItem,i.children&&e.withChildren,i.children&&"vertical"===i.orientation&&e.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&e.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&e.textAlignLeft]}})((function(t){var e=t.theme,i=t.ownerState;return(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},i.light&&{borderColor:e.vars?"rgba(".concat(e.vars.palette.dividerChannel," / 0.08)"):(0,d.Fq)(e.palette.divider,.08)},"inset"===i.variant&&{marginLeft:72},"middle"===i.variant&&"horizontal"===i.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===i.variant&&"vertical"===i.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===i.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},i.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(t){var e=t.theme,i=t.ownerState;return(0,n.Z)({},i.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:"thin solid ".concat((e.vars||e).palette.divider),top:"50%",content:'""',transform:"translateY(50%)"}})}),(function(t){var e=t.theme,i=t.ownerState;return(0,n.Z)({},i.children&&"vertical"===i.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:"thin solid ".concat((e.vars||e).palette.divider),transform:"translateX(0%)"}})}),(function(t){var e=t.ownerState;return(0,n.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),g=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(t,e){var i=t.ownerState;return[e.wrapper,"vertical"===i.orientation&&e.wrapperVertical]}})((function(t){var e=t.theme,i=t.ownerState;return(0,n.Z)({display:"inline-block",paddingLeft:"calc(".concat(e.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(e.spacing(1)," * 1.2)")},"vertical"===i.orientation&&{paddingTop:"calc(".concat(e.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(e.spacing(1)," * 1.2)")})})),u=o.forwardRef((function(t,e){var i=(0,s.Z)({props:t,name:"MuiDivider"}),o=i.absolute,d=void 0!==o&&o,c=i.children,u=i.className,x=i.component,f=void 0===x?c?"div":"hr":x,w=i.flexItem,b=void 0!==w&&w,Z=i.light,j=void 0!==Z&&Z,A=i.orientation,S=void 0===A?"horizontal":A,k=i.role,I=void 0===k?"hr"!==f?"separator":void 0:k,R=i.textAlign,W=void 0===R?"center":R,y=i.variant,C=void 0===y?"fullWidth":y,T=(0,r.Z)(i,v),D=(0,n.Z)({},i,{absolute:d,component:f,flexItem:b,light:j,orientation:S,role:I,textAlign:W,variant:C}),L=function(t){var e=t.absolute,i=t.children,r=t.classes,n=t.flexItem,o=t.light,a=t.orientation,d=t.textAlign,c={root:["root",e&&"absolute",t.variant,o&&"light","vertical"===a&&"vertical",n&&"flexItem",i&&"withChildren",i&&"vertical"===a&&"withChildrenVertical","right"===d&&"vertical"!==a&&"textAlignRight","left"===d&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,l.Z)(c,h.V,r)}(D);return(0,m.jsx)(p,(0,n.Z)({as:f,className:(0,a.Z)(L.root,u),role:I,ref:e,ownerState:D},T,{children:c?(0,m.jsx)(g,{className:L.wrapper,ownerState:D,children:c}):null}))}));e.Z=u}}]);
//# sourceMappingURL=757.551370d2.chunk.js.map
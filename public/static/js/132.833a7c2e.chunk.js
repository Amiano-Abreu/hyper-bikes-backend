"use strict";(self.webpackChunkhyper_bikes=self.webpackChunkhyper_bikes||[]).push([[132],{5986:function(t,e,i){var r=i(1413),n=i(4565),o=i(1872),a=i(184);e.Z=function(t){var e=t.text,i=t.cart,l=void 0!==i&&i;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Z,{variant:"h4",sx:(0,r.Z)((0,r.Z)((0,r.Z)({textAlign:"center",fontWeight:"600",pt:1.5},l&&{width:"100%"}),!l&&{width:"90%"}),{},{textTransform:"uppercase",fontSize:{mobile:"0.85rem",tablet:"1rem",laptop:"1.5rem"}}),children:e}),(0,a.jsx)(o.Z,{variant:"middle",sx:(0,r.Z)((0,r.Z)((0,r.Z)({pt:2.5},l&&{width:"100%",mx:0,px:16}),!l&&{width:"90%"}),{},{height:"1px",borderColor:"customRed.main"})})]})}},132:function(t,e,i){i.r(e);var r=i(1413),n=i(885),o=i(2797),a=i(6650),l=i(4565),c=i(6015),s=i(7205),d=i(9786),m=i(7247),h=i(5986),p=i(3504),x=i(2791),g=i(5790),f=i(9434),u=i(3284),b=i(8815),v=i(184);e.default=function(){var t=(0,f.v9)((function(t){return t.cart})),e=t.loading,i=t.error,Z=t.success,w=t.cart,j=t.atc,y=function(t){var e=0;return t.forEach((function(t){var i=Number(t.quantity)*Number(t.price);e+=i})),e}(w),S=(0,f.I0)(),W=(0,o.Z)("(max-width:990px)"),C=(0,o.Z)("(max-width:639px)"),I=(0,x.useState)(!1),k=(0,n.Z)(I,2),A=k[0],T=k[1];return(0,x.useEffect)((function(){window.scrollTo(0,0),S((0,b.s0)())}),[S]),(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(a.Z,{elevation:6,sx:(0,r.Z)((0,r.Z)({display:"flex",justifyContent:"center",width:{mobile:"90%",tablet:"550px",laptop:"1000px"},mx:"auto",alignItems:"center",p:5,mt:30},W&&{mt:25}),{},{mb:10,bgcolor:"customWhite.main",flexDirection:"column",backgroundColor:"customBlack.light"}),children:[e?(0,v.jsx)(u.Z,{}):(0,v.jsx)(v.Fragment,{}),!e&&!i&&j&&Z?(0,v.jsx)(g.Z,{timer:1500,message:"Successful"}):(0,v.jsx)(v.Fragment,{}),!e&&i&&j&&Z?(0,v.jsx)(g.Z,{timer:1500,type:"error",message:"Error: ".concat(i)}):(0,v.jsx)(v.Fragment,{}),(0,v.jsx)(l.Z,{variant:"h6",sx:{textAlign:"center",fontWeight:"600",textTransform:"uppercase",color:"customWhite.main",fontSize:{mobile:"1rem",tablet:"1.5rem",laptop:"2.125rem"}},children:"Cart"}),(0,v.jsxs)(c.Z,{sx:(0,r.Z)((0,r.Z)((0,r.Z)({},w.length>0&&{width:"100%"}),0===w.length&&{display:"flex",flexDirection:"column",alignItems:"center"}),{},{mt:"1rem"}),children:[(0,v.jsxs)(l.Z,{variant:"body1",sx:(0,r.Z)((0,r.Z)({},w.length>0&&{textAlign:"left",fontWeight:"600",display:"flex",justifyContent:"space-between",alignItems:"center"}),{},{mb:".5rem",color:"customWhite.main",fontSize:{mobile:"0.65rem",tablet:".75rem",laptop:".8rem"}}),children:[0===w.length?"Start adding bikes to your cart !":"You have ".concat(w.length," cart item").concat(w.length>1?"s":"","."),w.length>0&&(0,v.jsx)(s.Z,{variant:"contained",color:"customWhite",sx:(0,r.Z)({color:"customRed.main",width:"170px",px:4,fontWeight:"600",py:1,display:"flex",justifyContent:"space-around",alignItems:"center",textTransform:"uppercase"},C&&{fontSize:"0.75rem"}),startIcon:(0,v.jsx)(m.Z,{}),onClick:function(){S((0,b.vE)())},children:"delete all"})]}),w.length>0?w.map((function(t,e){return(0,v.jsxs)(a.Z,{elevation:1,sx:(0,r.Z)({height:"300px",px:"1rem",pt:".5rem",pb:"1rem"},w.length>1&&e!==w.length-1&&{mb:5}),children:[(0,v.jsx)(h.Z,{text:"".concat(t.brand," : ").concat(t.model),cart:!0}),(0,v.jsxs)(c.Z,{sx:{height:"250px",width:"100%",display:"flex",flexDirection:{mobile:"column",laptop:"row"},alignItems:"center",justifyContent:"space-around","& img":{height:{mobile:"65%",tablet:"100%"},width:{mobile:"100%",tablet:"400px"},objectFit:{mobile:"contain"}}},children:[(0,v.jsx)("img",{src:t.src,alt:t.alt}),(0,v.jsxs)(c.Z,{sx:{width:{mobile:"90%",tablet:"400px"},display:"flex",flexDirection:{mobile:"column",tablet:"row"},alignItem:"center",justifyContent:"space-between",pb:{mobile:5,laptop:"none"}},children:[(0,v.jsxs)(l.Z,{sx:{fontWeight:"700",fontSize:{mobile:"0.85rem",tablet:"1rem"}},children:["QUANTITY:",(0,v.jsx)("span",{style:{cursor:"pointer",marginRight:"5px",padding:"5px",paddingTop:"2.5px",paddingBottom:"2.5px",marginLeft:"5px",borderWidth:"2px",borderStyle:"solid",borderColor:"#2a2727c4"},onClick:function(){S((0,b.wn)(t))},children:"+"}),t.quantity,(0,v.jsx)("span",{style:{cursor:"pointer",marginRight:"5px",padding:"5px",paddingTop:"2.5px",paddingBottom:"2.5px",marginLeft:"5px",borderWidth:"2px",borderStyle:"solid",borderColor:"#2a2727c4"},onClick:function(){S((0,b.bJ)({bikeID:t.bikeID}))},children:"-"})]}),(0,v.jsxs)(l.Z,{sx:{fontWeight:"700",fontSize:{mobile:"0.85rem",tablet:"1rem"}},children:["PRICE: \u20b9",t.price]}),(0,v.jsx)(m.Z,{sx:{fontSize:{mobile:"1.25rem",tablet:"1.5rem"},color:"customRed.main",cursor:"pointer"},onClick:function(){S((0,b.bJ)({bikeID:t.bikeID,removeItem:"true"}))}})]})]})]},t.brand+e)})):(0,v.jsxs)(c.Z,{sx:{display:"flex",flexDirection:{mobile:"column",tablet:"row"}},children:[(0,v.jsx)(s.Z,{variant:"contained",color:"customRed",size:C?"small":"medium",endIcon:C?(0,v.jsx)(v.Fragment,{}):(0,v.jsx)(d.Z,{}),sx:{color:"customWhite.main",fontWeight:"600",px:5,textTransform:"uppercase",fontSize:{mobile:"0.5rem",tablet:"0.65rem",laptop:"0.75rem"}},component:p.rU,to:"/bikes",children:"Buy Now"}),(0,v.jsx)(s.Z,{variant:"contained",color:"customWhite",size:C?"small":"medium",endIcon:C?(0,v.jsx)(v.Fragment,{}):(0,v.jsx)(d.Z,{}),sx:(0,r.Z)((0,r.Z)((0,r.Z)({},C&&{mt:2.5}),!C&&{ml:5}),{},{color:"customRed.main",fontWeight:"600",px:5,textTransform:"uppercase",fontSize:{mobile:"0.5rem",tablet:"0.65rem",laptop:"0.75rem"}}),component:p.rU,to:"/orders",children:"go to orders"})]}),w.length>0?(0,v.jsxs)("div",{style:{width:"100%"},children:[(0,v.jsxs)(l.Z,{sx:{color:"customWhite.main",width:"280px",textTransform:"uppercase",fontWeight:"700",fontSize:{mobile:"0.85rem",tablet:"1rem"},textAlign:"center",mt:5,mx:"auto"},children:["Total: \u20b9",y]}),(0,v.jsx)(s.Z,{variant:"contained",color:"customRed",disabled:A,sx:(0,r.Z)({color:"customWhite.main",display:"block",width:"280px",px:4,fontWeight:"600",py:1,mx:"auto",textTransform:"uppercase",mt:5},C&&{fontSize:"0.75rem"}),onClick:function(){T(!0),S((0,b.VE)({products:w,total:y}))},children:"buy now"})]}):(0,v.jsx)(v.Fragment,{}),0===w.length&&!e&&Z&&i?(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("p",{style:{textTransform:"uppercase",width:"100%",textAlign:"center",fontWeight:"700",marginTop:"5rem"},children:i})}):(0,v.jsx)(v.Fragment,{})]})]})})}},7247:function(t,e,i){var r=i(4836);e.Z=void 0;var n=r(i(5649)),o=i(184),a=(0,n.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=a},1872:function(t,e,i){var r=i(3366),n=i(7462),o=i(2791),a=i(8182),l=i(4419),c=i(2065),s=i(6863),d=i(7254),m=i(7164),h=i(184),p=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],x=(0,s.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(t,e){var i=t.ownerState;return[e.root,i.absolute&&e.absolute,e[i.variant],i.light&&e.light,"vertical"===i.orientation&&e.vertical,i.flexItem&&e.flexItem,i.children&&e.withChildren,i.children&&"vertical"===i.orientation&&e.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&e.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&e.textAlignLeft]}})((function(t){var e=t.theme,i=t.ownerState;return(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},i.light&&{borderColor:e.vars?"rgba(".concat(e.vars.palette.dividerChannel," / 0.08)"):(0,c.Fq)(e.palette.divider,.08)},"inset"===i.variant&&{marginLeft:72},"middle"===i.variant&&"horizontal"===i.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===i.variant&&"vertical"===i.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===i.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},i.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(t){var e=t.theme,i=t.ownerState;return(0,n.Z)({},i.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:"thin solid ".concat((e.vars||e).palette.divider),top:"50%",content:'""',transform:"translateY(50%)"}})}),(function(t){var e=t.theme,i=t.ownerState;return(0,n.Z)({},i.children&&"vertical"===i.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:"thin solid ".concat((e.vars||e).palette.divider),transform:"translateX(0%)"}})}),(function(t){var e=t.ownerState;return(0,n.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),g=(0,s.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(t,e){var i=t.ownerState;return[e.wrapper,"vertical"===i.orientation&&e.wrapperVertical]}})((function(t){var e=t.theme,i=t.ownerState;return(0,n.Z)({display:"inline-block",paddingLeft:"calc(".concat(e.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(e.spacing(1)," * 1.2)")},"vertical"===i.orientation&&{paddingTop:"calc(".concat(e.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(e.spacing(1)," * 1.2)")})})),f=o.forwardRef((function(t,e){var i=(0,d.Z)({props:t,name:"MuiDivider"}),o=i.absolute,c=void 0!==o&&o,s=i.children,f=i.className,u=i.component,b=void 0===u?s?"div":"hr":u,v=i.flexItem,Z=void 0!==v&&v,w=i.light,j=void 0!==w&&w,y=i.orientation,S=void 0===y?"horizontal":y,W=i.role,C=void 0===W?"hr"!==b?"separator":void 0:W,I=i.textAlign,k=void 0===I?"center":I,A=i.variant,T=void 0===A?"fullWidth":A,R=(0,r.Z)(i,p),z=(0,n.Z)({},i,{absolute:c,component:b,flexItem:Z,light:j,orientation:S,role:C,textAlign:k,variant:T}),D=function(t){var e=t.absolute,i=t.children,r=t.classes,n=t.flexItem,o=t.light,a=t.orientation,c=t.textAlign,s={root:["root",e&&"absolute",t.variant,o&&"light","vertical"===a&&"vertical",n&&"flexItem",i&&"withChildren",i&&"vertical"===a&&"withChildrenVertical","right"===c&&"vertical"!==a&&"textAlignRight","left"===c&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,l.Z)(s,m.V,r)}(z);return(0,h.jsx)(x,(0,n.Z)({as:b,className:(0,a.Z)(D.root,f),role:C,ref:e,ownerState:z},R,{children:s?(0,h.jsx)(g,{className:D.wrapper,ownerState:z,children:s}):null}))}));e.Z=f}}]);
//# sourceMappingURL=132.833a7c2e.chunk.js.map
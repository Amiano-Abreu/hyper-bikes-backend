"use strict";(self.webpackChunkhyper_bikes=self.webpackChunkhyper_bikes||[]).push([[682],{3682:function(e,t,i){i.r(t);var r=i(1413),o=i(4565),n=i(6015),a=i(1872),l=i(6970),s=i(2797),c=i(184),d=["Used","Owned","Ridden","Milleage"];t.default=function(){var e=(0,s.Z)("(max-width:640px)");return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(n.Z,{sx:{height:"auto",p:15,bgcolor:"customWhite.main",display:"flex",flexDirection:"column"},children:[(0,c.jsxs)(o.Z,{variant:"h4",component:"h2",sx:{textAlign:"center",color:"customBlack.main",textTransform:"uppercase",fontSize:{mobile:"1.5rem",laptop:"2.125rem"},"& span":{borderBottom:"2px solid #bc1024",pb:.5}},children:["your ",(0,c.jsx)("span",{children:"orders"})]}),(0,c.jsxs)(o.Z,{variant:"h4",component:"h2",sx:{textAlign:"center",color:"customBlack.main",textTransform:"uppercase",fontSize:{mobile:"1.5rem",laptop:"2.125rem"},"& span":{borderBottom:"2px solid #bc1024",pb:.5}},children:["your ",(0,c.jsx)("span",{children:"reviews"})]}),[{reviewId:"1",userId:"user1",userName:"user name",reviewData:{usedFor:"Tour",ownedFor:"Never owned",riddenFor:"200km",gotMileageOf:"10"},rating:5,reviewTitle:"review Title",reviewBody:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum v lorem ipsum v vlorem ipsum lorem ipsum",lastUpdate:"2 mins ago",edited:!1}].map((function(t,i){return(0,c.jsxs)("div",{children:[(0,c.jsx)(o.Z,{sx:{textAlign:"left",width:"100%",fontWeight:"600",mt:7.5,color:"customBlack.main",textTransform:"uppercase",fontSize:{mobile:"0.7rem",tablet:".8rem",laptop:"1.25rem"}},children:t.reviewTitle}),(0,c.jsxs)(n.Z,{sx:{display:"flex",justifyContent:"flex-start",alignItems:"center",height:"20px",width:"100%"},children:[(0,c.jsx)(o.Z,{sx:{textAlign:"inherit",color:"customBlack.light",fontWeight:"600",mr:2.5,fontSize:{mobile:"0.7rem",tablet:".8rem",laptop:"1rem"}},children:3}),(0,c.jsx)(l.Z,{name:"read-only",value:3,precision:.5,size:"small",readOnly:!0})]}),(0,c.jsx)(n.Z,{sx:{width:"100%",height:{mobile:"15px",laptop:"20px"},display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:d.map((function(i,a){var l=Object.keys(t.reviewData);return(0,c.jsxs)(n.Z,{sx:(0,r.Z)({display:"flex"},e&&{alignItems:"flex-start"}),children:[(0,c.jsx)(o.Z,{sx:{textAlign:"left",fontWeight:"400",color:"customBlack.light",mr:1,fontSize:{mobile:"0.5rem",tablet:".75rem",laptop:".8rem"},"& + span":{fontWeight:"600",color:"customBlack.main",fontSize:{mobile:"0.5rem",tablet:".75rem",laptop:".8rem"}}},children:"".concat(i,":")}),(0,c.jsx)("span",{children:t.reviewData[l[a]]})]},i)}))}),(0,c.jsx)(o.Z,{sx:{textAlign:"left",fontWeight:"400",color:"customBlack.light",width:"100%",my:2.5,fontSize:{mobile:"0.65rem",tablet:".75rem",laptop:".8rem"}},children:t.reviewBody}),(0,c.jsx)(o.Z,{sx:{textAlign:"left",color:"customBlack.main",fontWeight:600,width:"100%",fontSize:{mobile:"0.7rem",tablet:".8rem",laptop:".8rem"}},children:"By "+t.userName}),(0,c.jsx)(o.Z,{sx:{textAlign:"left",color:"customBlack.light",width:"100%",fontSize:{mobile:"0.7rem",tablet:".8rem",laptop:".7rem"}},children:"".concat(t.lastUpdate," ").concat(t.edited?"edited":"")}),(0,c.jsx)(a.Z,{variant:"middle",sx:{pt:2.5,width:"auto",height:"1px",borderColor:"customBlack.main"}})]},t.userId)}))]})})}},1872:function(e,t,i){var r=i(3366),o=i(7462),n=i(2791),a=i(8182),l=i(4419),s=i(2065),c=i(6863),d=i(7254),m=i(7164),h=i(184),p=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],f=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(e,t){var i=e.ownerState;return[t.root,i.absolute&&t.absolute,t[i.variant],i.light&&t.light,"vertical"===i.orientation&&t.vertical,i.flexItem&&t.flexItem,i.children&&t.withChildren,i.children&&"vertical"===i.orientation&&t.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignLeft]}})((function(e){var t=e.theme,i=e.ownerState;return(0,o.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},i.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,s.Fq)(t.palette.divider,.08)},"inset"===i.variant&&{marginLeft:72},"middle"===i.variant&&"horizontal"===i.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===i.variant&&"vertical"===i.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===i.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},i.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(e){var t=e.theme,i=e.ownerState;return(0,o.Z)({},i.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider),top:"50%",content:'""',transform:"translateY(50%)"}})}),(function(e){var t=e.theme,i=e.ownerState;return(0,o.Z)({},i.children&&"vertical"===i.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:"thin solid ".concat((t.vars||t).palette.divider),transform:"translateX(0%)"}})}),(function(e){var t=e.ownerState;return(0,o.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),v=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(e,t){var i=e.ownerState;return[t.wrapper,"vertical"===i.orientation&&t.wrapperVertical]}})((function(e){var t=e.theme,i=e.ownerState;return(0,o.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===i.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),u=n.forwardRef((function(e,t){var i=(0,d.Z)({props:e,name:"MuiDivider"}),n=i.absolute,s=void 0!==n&&n,c=i.children,u=i.className,x=i.component,g=void 0===x?c?"div":"hr":x,b=i.flexItem,w=void 0!==b&&b,Z=i.light,j=void 0!==Z&&Z,S=i.orientation,A=void 0===S?"horizontal":S,k=i.role,y=void 0===k?"hr"!==g?"separator":void 0:k,B=i.textAlign,I=void 0===B?"center":B,W=i.variant,z=void 0===W?"fullWidth":W,C=(0,r.Z)(i,p),T=(0,o.Z)({},i,{absolute:s,component:g,flexItem:w,light:j,orientation:A,role:y,textAlign:I,variant:z}),R=function(e){var t=e.absolute,i=e.children,r=e.classes,o=e.flexItem,n=e.light,a=e.orientation,s=e.textAlign,c={root:["root",t&&"absolute",e.variant,n&&"light","vertical"===a&&"vertical",o&&"flexItem",i&&"withChildren",i&&"vertical"===a&&"withChildrenVertical","right"===s&&"vertical"!==a&&"textAlignRight","left"===s&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,l.Z)(c,m.V,r)}(T);return(0,h.jsx)(f,(0,o.Z)({as:g,className:(0,a.Z)(R.root,u),role:y,ref:t,ownerState:T},C,{children:c?(0,h.jsx)(v,{className:R.wrapper,ownerState:T,children:c}):null}))}));t.Z=u}}]);
//# sourceMappingURL=682.a3fe4d4b.chunk.js.map
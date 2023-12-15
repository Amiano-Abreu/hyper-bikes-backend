"use strict";(self.webpackChunkhyper_bikes=self.webpackChunkhyper_bikes||[]).push([[681],{681:function(e,t,n){n.r(t),n.d(t,{default:function(){return ce}});var r=n(1413),a=n(885),o=n(4565),i=n(6650),s=n(6015),l=n(5953),c=n(3284),d=n(5790),u=n(2797),p=n(2791),h=n(4165),m=n(5861),v=n(2388),x="https://localhost:5000/api",f=function(){var e=(0,m.Z)((0,h.Z)().mark((function e(){var t,n,r,a,o;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.Z.get("".concat(x,"/csrf"),{withCredentials:!0});case 3:return t=e.sent,n=t.data.csrfToken,e.next=7,v.Z.post("".concat(x,"/orders"),{_csrf:n},{headers:{Accept:"application/json","Content-Type":"application/json"},withCredentials:!0,mode:"cors"});case 7:return r=e.sent,a=r.data,e.abrupt("return",a);case 12:if(e.prev=12,e.t0=e.catch(0),!e.t0.hasOwnProperty("response")){e.next=18;break}if(!e.t0.response.hasOwnProperty("data")){e.next=18;break}return o=e.t0.response.data,e.abrupt("return",o);case 18:return e.abrupt("return",{status:"Error",message:e.t0.message});case 19:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=(0,m.Z)((0,h.Z)().mark((function e(t){var n,r,a,o,i;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.Z.get("".concat(x,"/csrf"),{withCredentials:!0});case 3:return n=e.sent,r=n.data.csrfToken,e.next=7,v.Z.post("".concat(x,"/cancelorder"),{_csrf:r,orderID:t},{headers:{Accept:"application/json","Content-Type":"application/json"},withCredentials:!0,mode:"cors"});case 7:return a=e.sent,o=a.data,e.abrupt("return",o);case 12:if(e.prev=12,e.t0=e.catch(0),!e.t0.hasOwnProperty("response")){e.next=18;break}if(!e.t0.response.hasOwnProperty("data")){e.next=18;break}return i=e.t0.response.data,e.abrupt("return",i);case 18:return e.abrupt("return",{status:"Error",message:e.t0.message});case 19:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),Z=n(3366);var y=n(6863),b=n(8928),w=n(4942),j=n(7462),S=n(8182),C=n(4419),E=n(7254),R=n(1217),T=n(5878);function P(e){return(0,R.Z)("MuiCardHeader",e)}var k=(0,T.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),D=n(184),I=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],M=(0,y.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var n;return(0,j.Z)((n={},(0,w.Z)(n,"& .".concat(k.title),t.title),(0,w.Z)(n,"& .".concat(k.subheader),t.subheader),n),t.root)}})({display:"flex",alignItems:"center",padding:16}),z=(0,y.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),O=(0,y.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),A=(0,y.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),L=p.forwardRef((function(e,t){var n=(0,E.Z)({props:e,name:"MuiCardHeader"}),r=n.action,a=n.avatar,i=n.className,s=n.component,l=void 0===s?"div":s,c=n.disableTypography,d=void 0!==c&&c,u=n.subheader,p=n.subheaderTypographyProps,h=n.title,m=n.titleTypographyProps,v=(0,Z.Z)(n,I),x=(0,j.Z)({},n,{component:l,disableTypography:d}),f=function(e){var t=e.classes;return(0,C.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},P,t)}(x),g=h;null==g||g.type===o.Z||d||(g=(0,D.jsx)(o.Z,(0,j.Z)({variant:a?"body2":"h5",className:f.title,component:"span",display:"block"},m,{children:g})));var y=u;return null==y||y.type===o.Z||d||(y=(0,D.jsx)(o.Z,(0,j.Z)({variant:a?"body2":"body1",className:f.subheader,color:"text.secondary",component:"span",display:"block"},p,{children:y}))),(0,D.jsxs)(M,(0,j.Z)({className:(0,S.Z)(f.root,i),as:l,ref:t,ownerState:x},v,{children:[a&&(0,D.jsx)(z,{className:f.avatar,ownerState:x,children:a}),(0,D.jsxs)(A,{className:f.content,ownerState:x,children:[g,y]}),r&&(0,D.jsx)(O,{className:f.action,ownerState:x,children:r})]}))})),N=n(199),F=n(5194);function W(e){return(0,R.Z)("MuiCardActions",e)}(0,T.Z)("MuiCardActions",["root","spacing"]);var H=["disableSpacing","className"],B=(0,y.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return(0,j.Z)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),U=p.forwardRef((function(e,t){var n=(0,E.Z)({props:e,name:"MuiCardActions"}),r=n.disableSpacing,a=void 0!==r&&r,o=n.className,i=(0,Z.Z)(n,H),s=(0,j.Z)({},n,{disableSpacing:a}),l=function(e){var t=e.classes,n={root:["root",!e.disableSpacing&&"spacing"]};return(0,C.Z)(n,W,t)}(s);return(0,D.jsx)(B,(0,j.Z)({className:(0,S.Z)(l.root,o),ownerState:s,ref:t},i))})),_=n(6752),Y=n(5354),V=n(6780),q=n(4142),K=n(7933);function Q(e){return(0,R.Z)("MuiCollapse",e)}(0,T.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var G=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],J=(0,y.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.orientation],"entered"===n.state&&t.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&t.hidden]}})((function(e){var t=e.theme,n=e.ownerState;return(0,j.Z)({height:0,overflow:"hidden",transition:t.transitions.create("height")},"horizontal"===n.orientation&&{height:"auto",width:0,transition:t.transitions.create("width")},"entered"===n.state&&(0,j.Z)({height:"auto",overflow:"visible"},"horizontal"===n.orientation&&{width:"auto"}),"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&{visibility:"hidden"})})),X=(0,y.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:function(e,t){return t.wrapper}})((function(e){var t=e.ownerState;return(0,j.Z)({display:"flex",width:"100%"},"horizontal"===t.orientation&&{width:"auto",height:"100%"})})),$=(0,y.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:function(e,t){return t.wrapperInner}})((function(e){var t=e.ownerState;return(0,j.Z)({width:"100%"},"horizontal"===t.orientation&&{width:"auto",height:"100%"})})),ee=p.forwardRef((function(e,t){var n=(0,E.Z)({props:e,name:"MuiCollapse"}),r=n.addEndListener,a=n.children,o=n.className,i=n.collapsedSize,s=void 0===i?"0px":i,l=n.component,c=n.easing,d=n.in,u=n.onEnter,h=n.onEntered,m=n.onEntering,v=n.onExit,x=n.onExited,f=n.onExiting,g=n.orientation,y=void 0===g?"vertical":g,b=n.style,R=n.timeout,T=void 0===R?Y.x9.standard:R,P=n.TransitionComponent,k=void 0===P?_.ZP:P,I=(0,Z.Z)(n,G),M=(0,j.Z)({},n,{orientation:y,collapsedSize:s}),z=function(e){var t=e.orientation,n=e.classes,r={root:["root","".concat(t)],entered:["entered"],hidden:["hidden"],wrapper:["wrapper","".concat(t)],wrapperInner:["wrapperInner","".concat(t)]};return(0,C.Z)(r,Q,n)}(M),O=(0,q.Z)(),A=p.useRef(),L=p.useRef(null),N=p.useRef(),F="number"===typeof s?"".concat(s,"px"):s,W="horizontal"===y,H=W?"width":"height";p.useEffect((function(){return function(){clearTimeout(A.current)}}),[]);var B=p.useRef(null),U=(0,K.Z)(t,B),ee=function(e){return function(t){if(e){var n=B.current;void 0===t?e(n):e(n,t)}}},te=function(){return L.current?L.current[W?"clientWidth":"clientHeight"]:0},ne=ee((function(e,t){L.current&&W&&(L.current.style.position="absolute"),e.style[H]=F,u&&u(e,t)})),re=ee((function(e,t){var n=te();L.current&&W&&(L.current.style.position="");var r=(0,V.C)({style:b,timeout:T,easing:c},{mode:"enter"}),a=r.duration,o=r.easing;if("auto"===T){var i=O.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(i,"ms"),N.current=i}else e.style.transitionDuration="string"===typeof a?a:"".concat(a,"ms");e.style[H]="".concat(n,"px"),e.style.transitionTimingFunction=o,m&&m(e,t)})),ae=ee((function(e,t){e.style[H]="auto",h&&h(e,t)})),oe=ee((function(e){e.style[H]="".concat(te(),"px"),v&&v(e)})),ie=ee(x),se=ee((function(e){var t=te(),n=(0,V.C)({style:b,timeout:T,easing:c},{mode:"exit"}),r=n.duration,a=n.easing;if("auto"===T){var o=O.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(o,"ms"),N.current=o}else e.style.transitionDuration="string"===typeof r?r:"".concat(r,"ms");e.style[H]=F,e.style.transitionTimingFunction=a,f&&f(e)}));return(0,D.jsx)(k,(0,j.Z)({in:d,onEnter:ne,onEntered:ae,onEntering:re,onExit:oe,onExited:ie,onExiting:se,addEndListener:function(e){"auto"===T&&(A.current=setTimeout(e,N.current||0)),r&&r(B.current,e)},nodeRef:B,timeout:"auto"===T?null:T},I,{children:function(e,t){return(0,D.jsx)(J,(0,j.Z)({as:l,className:(0,S.Z)(z.root,o,{entered:z.entered,exited:!d&&"0px"===F&&z.hidden}[e]),style:(0,j.Z)((0,w.Z)({},W?"minWidth":"minHeight",F),b),ownerState:(0,j.Z)({},M,{state:e}),ref:U},t,{children:(0,D.jsx)(X,{ownerState:(0,j.Z)({},M,{state:e}),className:z.wrapper,ref:L,children:(0,D.jsx)($,{ownerState:(0,j.Z)({},M,{state:e}),className:z.wrapperInner,children:a})})}))}}))}));ee.muiSupportAuto=!0;var te=ee,ne=n(7205),re=n(3811),ae=n(1131),oe=n(2941),ie=["expand"],se=(0,y.ZP)((function(e){e.expand;var t=function(e,t){if(null==e)return{};var n,r,a=(0,Z.Z)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,ie);return(0,D.jsx)(re.Z,(0,r.Z)({},t))}))((function(e){var t=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",color:t.palette.customBlack.main,transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}}));function le(e){var t=e.order,n=(0,p.useState)(!1),i=(0,a.Z)(n,2),l=i[0],u=i[1],h=(0,p.useState)(!1),m=(0,a.Z)(h,2),v=m[0],x=m[1],f=(0,p.useState)(null),Z=(0,a.Z)(f,2),y=Z[0],w=Z[1];return(0,D.jsxs)(D.Fragment,{children:[v?(0,D.jsx)(c.Z,{}):(0,D.jsx)(D.Fragment,{}),v||"ERROR"!==(null===y||void 0===y?void 0:y.status)?(0,D.jsx)(D.Fragment,{}):(0,D.jsx)(d.Z,{timer:1500,type:"error",message:null===y||void 0===y?void 0:y.message}),v||"SUCCESS"!==(null===y||void 0===y?void 0:y.status)?(0,D.jsx)(D.Fragment,{}):(0,D.jsx)(d.Z,{timer:1500,message:null===y||void 0===y?void 0:y.message}),(0,D.jsxs)(b.Z,{sx:{width:"100%",backgroundColor:"customWhite.main"},children:[(0,D.jsx)(L,{title:"ORDER ID : ".concat(null===t||void 0===t?void 0:t.orderID),subheader:"ORDER DATE : ".concat(null===t||void 0===t?void 0:t.orderDate),sx:{"& div span.MuiTypography-h5":{fontSize:{mobile:"1rem",tablet:"1.5rem"}},"& div span.MuiTypography-body1":{fontSize:{mobile:".8rem",tablet:"1rem"}}}}),(0,D.jsxs)(F.Z,{sx:(0,r.Z)((0,r.Z)({},"ordered"!==(null===t||void 0===t?void 0:t.deliveryStatus.toLowerCase())&&{pb:0}),{},{"& p.MuiTypography-body2":{fontSize:{mobile:".8rem",tablet:"0.875rem"}}}),children:[(0,D.jsxs)(o.Z,{variant:"body2",color:"text.secondary",children:["DELIVERY BY : ",null===t||void 0===t?void 0:t.deliveryDate]}),(0,D.jsxs)(o.Z,{variant:"body2",color:"text.secondary",sx:{"& span":(0,r.Z)((0,r.Z)((0,r.Z)({fontWeight:"600"},"ordered"===(null===t||void 0===t?void 0:t.deliveryStatus.toLowerCase())&&{color:"green"}),"delivered"===(null===t||void 0===t?void 0:t.deliveryStatus.toLowerCase())&&{color:"blue"}),"cancelled"===(null===t||void 0===t?void 0:t.deliveryStatus.toLowerCase())&&{color:"red"})},children:["ORDER STATUS : ",(0,D.jsx)("span",{children:null===t||void 0===t?void 0:t.deliveryStatus.toUpperCase()})]}),(0,D.jsxs)(o.Z,{variant:"body2",color:"text.secondary",children:["TOTAL : \u20b9",null===t||void 0===t?void 0:t.total]})]}),(0,D.jsxs)(U,{disableSpacing:!0,sx:(0,r.Z)({padding:"16px"},"ordered"!==(null===t||void 0===t?void 0:t.deliveryStatus.toLowerCase())&&{pt:0}),children:["ordered"===(null===t||void 0===t?void 0:t.deliveryStatus.toLowerCase())?(0,D.jsx)(ne.Z,{"aria-label":"cancel order",size:"small",color:"customRed",variant:"contained",endIcon:(0,D.jsx)(oe.Z,{}),sx:{fontWeight:"bold",color:"customWhite.main"},onClick:function(){var e;e=t.orderID,x(!0),g(e).then((function(e){return w(e)})).finally((function(){t.deliveryStatus="cancelled",x(!1)}))},children:"cancel order"}):(0,D.jsx)(D.Fragment,{}),(0,D.jsx)(se,{expand:l,onClick:function(){u(!l)},"aria-expanded":l,"aria-label":"show more",children:(0,D.jsx)(ae.Z,{})})]}),(0,D.jsxs)(te,{in:l,timeout:"auto",unmountOnExit:!0,children:[(0,D.jsx)(o.Z,{variant:"subtitle1",sx:{fontSize:"1rem",lineHeight:"1.5",letterSpacing:"0.00938em",textTransform:"uppercase",pl:"16px",fontWeight:"600"},children:"Products"}),null===t||void 0===t?void 0:t.products.map((function(e){return(0,D.jsxs)(s.Z,{sx:{display:"flex",flexDirection:{mobile:"column",tablet:"row"},alignItems:{mobile:"center",tablet:"flex-start"}},children:[(0,D.jsx)(s.Z,{sx:{p:"16px",height:{mobile:"150px",tablet:"150px",laptop:"200px"},width:{mobile:"250px",tablet:"250px",laptop:"400px"}},children:(0,D.jsx)(N.Z,{component:"img",image:e.src,alt:e.alt,sx:{height:"100%",width:"100%",objectFit:"contain"}})}),(0,D.jsxs)(F.Z,{sx:{height:{mobile:"150px",tablet:"150px",laptop:"200px"},display:"flex",flexDirection:"column",justifyContent:"space-evenly","& p":{fontSize:{mobile:"12px",laptop:"1rem"}}},children:[(0,D.jsxs)(o.Z,{paragraph:!0,sx:{mb:0},children:["BIKE: ",e.brand," ",e.model]}),(0,D.jsxs)(o.Z,{paragraph:!0,sx:{mb:0},children:["PRICE: \u20b9",e.price]}),(0,D.jsxs)(o.Z,{paragraph:!0,sx:{mb:0},children:["QUANTITY: ",e.quantity]})]})]},e.bikeID)}))]})]})]})}var ce=function(){var e,t=(0,u.Z)("(max-width:990px)"),n=(0,p.useState)(null),h=(0,a.Z)(n,2),m=h[0],v=h[1],x=(0,p.useState)(!1),g=(0,a.Z)(x,2),Z=g[0],y=g[1];return(0,p.useEffect)((function(){y(!0),f().then((function(e){v(e)})).finally((function(){y(!1)}))}),[]),(0,D.jsx)(D.Fragment,{children:(0,D.jsxs)(i.Z,{elevation:6,sx:(0,r.Z)((0,r.Z)({display:"flex",justifyContent:"center",width:{mobile:"95%",tablet:"550px",laptop:"1000px"},mx:"auto",alignItems:"center",p:5,mt:30},t&&{mt:25}),{},{mb:10,bgcolor:"customWhite.main",flexDirection:"column",backgroundColor:"customBlack.light",overflow:"auto"}),children:[Z?(0,D.jsx)(c.Z,{}):(0,D.jsx)(D.Fragment,{}),(0,D.jsx)(o.Z,{variant:"h6",sx:{textAlign:"center",fontWeight:"600",textTransform:"uppercase",color:"customWhite.main",mb:5,fontSize:{mobile:"1rem",tablet:"1.5rem",laptop:"2.125rem"}},children:"orders"}),Z||"SUCCESS"!==(null===m||void 0===m?void 0:m.status)?(0,D.jsx)(D.Fragment,{}):(0,D.jsx)(s.Z,{sx:{width:"100%",height:"100%"},children:(0,D.jsx)(l.ZP,{container:!0,direction:"column",justifyContent:"space-between",alignItems:"stretch",sx:{width:"100%",height:"100%"},children:null===m||void 0===m||null===(e=m.data)||void 0===e?void 0:e.map((function(e,t){return(0,D.jsx)(l.ZP,{sx:(0,r.Z)({},t!==m.data.length-1&&{mb:5}),children:(0,D.jsx)(le,{order:e})},e.orderID)}))})}),"ERROR"===(null===m||void 0===m?void 0:m.status)?m.hasOwnProperty("data")?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("p",{style:{textTransform:"uppercase",width:"100%",textAlign:"center",fontWeight:"700"},children:"Error On Selected Filter. Please select another filter !"}),m.data.map((function(e){var t=e[Object.keys(e)[0]];return(0,D.jsx)(d.Z,{type:"error",message:t})}))]}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)("p",{style:{textTransform:"uppercase",width:"100%",textAlign:"center",fontWeight:"700"},children:["ERROR ",m.message]}),(0,D.jsx)(d.Z,{type:"error",message:m.message})]}):(0,D.jsx)(D.Fragment,{})]})})}},2941:function(e,t,n){var r=n(4836);t.Z=void 0;var a=r(n(5649)),o=n(184),i=(0,a.default)((0,o.jsx)("path",{d:"M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm13.3 11.29c-.39.39-1.02.39-1.41 0L12 13.41 9.11 16.3c-.39.39-1.02.39-1.41 0a.9959.9959 0 0 1 0-1.41L10.59 12 7.7 9.11a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L12 10.59l2.89-2.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l2.89 2.88c.38.39.38 1.03 0 1.41z"}),"DisabledByDefaultRounded");t.Z=i},1131:function(e,t,n){var r=n(4836);t.Z=void 0;var a=r(n(5649)),o=n(184),i=(0,a.default)((0,o.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=i}}]);
//# sourceMappingURL=681.ddf86aeb.chunk.js.map
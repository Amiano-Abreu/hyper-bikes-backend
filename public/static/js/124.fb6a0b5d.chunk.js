"use strict";(self.webpackChunkhyper_bikes=self.webpackChunkhyper_bikes||[]).push([[124],{2415:function(e,t,r){r.r(t),r.d(t,{default:function(){return ee}});var i,a,n,c,l=r(4942),o=r(1413),s=r(885),d=r(6015),p=r(5953),m=r(7205),x=r(5399),u=r(2087),g=r(5629),f=r(2892),h=r(4666),b=r(3811),j=r(4565),A=r(9823),y=r(7856),Z=r(3492),w=r(2900),v=r(1898),B=r(120),k=r(7057),C=r.p+"static/media/Ktm.7ca30b04c51c73c322ff.webp",U=r.p+"static/media/bmw.075c5377ad945eb9570f.webp",W=r.p+"static/media/harleyDavidson.cdf3dac598c756c891f1.webp",L=r.p+"static/media/honda.accc804fa0686cc300f6.png",Q=r.p+"static/media/kawasaki.3bd1089cf2b2ff9c42e1.webp",D=r.p+"static/media/adventure.34fb3cc99caaab95e28c.webp",F=r.p+"static/media/bobber.9d24879e3030b9141af5.webp",E=r.p+"static/media/cafeRacer.8f1e596e11927df368bd.webp",V=r.p+"static/media/dirt.e568da066dfd103a346c.webp",P=r.p+"static/media/naked.d0e2487078d9e4a31f2b.webp",R=r.p+"static/media/superbike.e3b47deeebb6247c9f61.webp",S=r(2797),T=r(6650),q=r(9786),Y=r(184),G=function(e){var t=e.grid,r=e.onFilterChange,i=e.onSave,a=e.onViewAll,n=(0,S.Z)("(max-width:1024px)");return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(j.Z,{variant:"h4",component:"h2",sx:{textAlign:"center",color:"customBlack.main",textTransform:"uppercase",fontSize:{mobile:"1.5rem",laptop:"2.125rem"},"& span":{borderBottom:"2px solid #bc1024",pb:.5}},children:["select by ",(0,Y.jsx)("span",{children:t.title})]}),(0,Y.jsx)(p.ZP,{container:!0,spacing:0,sx:(0,o.Z)({width:{mobile:"330px",tablet:"500px",laptop:"950px"},mt:5,mx:"auto",height:{mobile:"600px",laptop:"205.594px"}},!n&&{height:"205.594px"}),children:t.gridArr.map((function(e,a){return(0,Y.jsx)(p.ZP,{item:!0,mobile:6,laptop:2,sx:(0,o.Z)({pt:5,pr:5,height:"auto"},!n&&{height:"100%"}),children:(0,Y.jsx)(T.Z,{sx:(0,o.Z)({height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center","&:hover":{cursor:"pointer"}},!e.property&&{justifyContent:"space-evenly"}),elevation:6,onClick:function(){var a={target:{name:"selectedFilter",value:""}},n={target:{name:"",value:""}};"brand"===t.title?(n.target.name="selectedBrand",n.target.value=e.name,a.target.value=t.title,r(a),r(n)):"cubic capacity (cc)"===t.title?(n.target.name="selectedDisplacement",n.target.value=e.filter,a.target.value="displacement",r(a),r(n)):"category"===t.title?(n.target.name="selectedCategory",n.target.value=e.name,a.target.value=t.title,r(a),r(n)):"price"===t.title&&(n.target.name="selectedPrice",n.target.value=e.filter,a.target.value=t.title,r(a),r(n)),i()},children:e.property?(0,Y.jsx)(j.Z,{sx:(0,o.Z)({fontWeight:"600",fontSize:"1rem",color:"customBlack.light",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},n&&{fontWeight:"800",fontSize:".75rem"}),children:e.property.split(" ").map((function(e,t){return(0,Y.jsx)("span",{children:e},e+t)}))}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(d.Z,{sx:{height:"40%",width:{mobile:"100%",tablet:"70%",laptop:"100%"},px:"10px","& img":{height:"100%",width:"100%",objectFit:"contain"}},children:(0,Y.jsx)("img",{src:e.imgLogo,alt:e.imgAlt})}),(0,Y.jsx)(j.Z,{variant:"h6",component:"p",sx:(0,o.Z)({textTransform:"uppercase",color:"customBlack.light",fontWeight:{mobile:"800",laptop:"600"},fontSize:{mobile:".7rem",laptop:"1rem"},height:"40px"},!e.name.trim().includes(" ")&&{display:"flex",alignItems:"center",justifyContent:"center"}),children:e.name.trim().includes(" ")?(0,Y.jsx)(Y.Fragment,{children:e.name.trim().split(" ").map((function(e,t){return(0,Y.jsx)("span",{style:{display:"block",textAlign:"center"},children:e},e+t)}))}):e.name})]})})},e.property?e.property+a:e.imgAlt+a)}))}),(0,Y.jsx)(m.Z,{variant:"contained",color:"customRed",size:n?"small":"medium",endIcon:(0,Y.jsx)(q.Z,{}),sx:(0,o.Z)({color:"customWhite.main",width:"50%",px:4,fontWeight:"600",py:1,mx:"25%",textTransform:"uppercase",my:10},n&&{fontSize:"0.75rem"}),onClick:function(){a()},children:"view all"})]})},J=r(2193),O=r(2246),X=r(3284),K="".concat("api","/bikes?limit=true"),I=function(e){var t=e.onViewAll,r=(0,S.Z)("(max-width:1024px)"),i=(0,O.Z)(K),a=i.isLoading,n=i.apiData,c=i.serverError;return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(j.Z,{variant:"h2",sx:{color:"customBlack.light",p:2.5,textAlign:"center",mb:5,fontSize:{mobile:".75rem",laptop:"1.125rem"}},children:"1 - 3 of over 15,000 results for bikes"}),a?(0,Y.jsx)(X.Z,{}):c?(0,Y.jsxs)("p",{style:{textTransform:"uppercase",width:"100%",textAlign:"center",fontWeight:"700",marginBottom:"5rem"},children:["api Error",c.hasOwnProperty("data")?c.data.map((function(e){var t=Object.keys(e)[0];return" | ".concat(e[t])})):" ".concat((null===c||void 0===c?void 0:c.message)||"Occurred !")]}):(null===n||void 0===n?void 0:n.data.length)>0?(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(p.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{maxWidth:"974px",width:"80vw",mx:"auto"},children:[n.data.map((function(e,t){return(0,Y.jsx)(p.ZP,{item:!0,laptop:4,mobile:12,sx:(0,o.Z)((0,o.Z)({pr:5},2===t&&{pr:0}),r&&{display:"flex",justifyContent:"center",pb:5,pr:0}),children:(0,Y.jsx)(J.Z,{path:"bike/".concat(e.bikeID),bike:e})},e.bikeID)})),(0,Y.jsx)(m.Z,{variant:"contained",color:"customRed",size:r?"small":"medium",endIcon:(0,Y.jsx)(q.Z,{}),sx:(0,o.Z)({color:"customWhite.main",width:"70%",px:4,fontWeight:"600",py:1,mx:"auto",textTransform:"uppercase",my:10},r&&{fontSize:"0.75rem"}),onClick:function(){t()},children:"view all"})]})}):(0,Y.jsx)("p",{style:{textTransform:"uppercase",width:"100%",textAlign:"center",fontWeight:"700",marginBottom:"25px"},children:"No bikes available or your network may be slow."})]})},M=r(2791),N=r(5790),z="".concat("api","/bikes"),H=[{title:"brand",gridArr:[{name:"Ducati",imgLogo:"data:image/png;base64,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",imgAlt:"ducati-logo"},{name:"BMW",imgLogo:U,imgAlt:"bmw-logo"},{name:"Kawasaki",imgLogo:Q,imgAlt:"Kawasaki-logo"},{name:"KTM",imgLogo:C,imgAlt:"KTM-logo"},{name:"Honda",imgLogo:L,imgAlt:"Honda-logo"},{name:"Harley Davidson",imgLogo:W,imgAlt:"Harley-Davidson-logo"}]},{title:"displacement",gridArr:[{property:"100cc - 150cc",filter:"100-150"},{property:"150cc - 300cc",filter:"150-300"},{property:"300cc - 500cc",filter:"300-500"},{property:"500cc - 650cc",filter:"500-650"},{property:"650cc - 1000cc",filter:"650-1000"},{property:"1000cc+",filter:"1000"}]},{title:"category",gridArr:[{name:"dirt",imgLogo:V,imgAlt:"dirt-bike"},{name:"bobber",imgLogo:F,imgAlt:"bobber-bike"},{name:"naked",imgLogo:P,imgAlt:"naked-bike"},{name:"superbike",imgLogo:R,imgAlt:"superbike-bike"},{name:"adventure",imgLogo:D,imgAlt:"adventure-bike"},{name:"cafe racer",imgLogo:E,imgAlt:"cafe-racer-bike"}]},{title:"price",gridArr:[{property:"Under \u20b93lakh",filter:"U300000"},{property:"Under \u20b94lakh",filter:"U400000"},{property:"Under \u20b97lakh",filter:"U700000"},{property:"Under \u20b915lakh",filter:"U1500000"},{property:"Under \u20b920lakh",filter:"U2000000"},{property:"Above \u20b920lakh",filter:"A2000000"}]}],_=H.map((function(e){var t=e.title,r=e.gridArr;if("brand"===t||"category"===t){var l=r.map((function(e){return e.name}));"brand"===t?i=l:a=l}else{var o=r.map((function(e){return e.filter}));"price"===t?n=o:c=o}return"cubic capacity (cc)"===t?"Displacement":t.charAt(0).toUpperCase()+t.slice(1)})),$=["selectedFilter","selectedBrand","selectedPrice","selectedDisplacement","selectedCategory"],ee=function(){var e,t,r=(0,S.Z)("(max-width:1024px)"),C=(0,M.useState)(!1),U=(0,s.Z)(C,2),W=U[0],L=U[1],Q=(0,M.useState)(!1),D=(0,s.Z)(Q,2),F=D[0],E=D[1],V=(0,M.useState)(!1),P=(0,s.Z)(V,2),R=P[0],T=P[1],q=function(){E(!1),T(!0)},K=function(){L(!1)},ee=(0,M.useState)({selectedFilter:"",selectedBrand:"",selectedPrice:"",selectedDisplacement:"",selectedCategory:""}),te=(0,s.Z)(ee,2),re=te[0],ie=te[1],ae=re.selectedFilter,ne=re.selectedBrand,ce=re.selectedPrice,le=re.selectedDisplacement,oe=re.selectedCategory,se=function(e){var t,r=e.target,i=r.name,a=r.value;t="selectedFilter"===i?$.filter((function(e){return e!==i})):$.filter((function(e){return e!==i})).filter((function(e){return"selectedFilter"!==e})),ie((function(e){var r=(0,o.Z)((0,o.Z)({},e),{},(0,l.Z)({},i,a));return t.forEach((function(e){r[e]=""})),(0,o.Z)({},r)}))};(0,M.useEffect)((function(){window.scrollTo(0,0)}),[]);var de=(0,M.useMemo)((function(){if(F&&(ne||ce||le||oe)){if(ne)return"".concat(z,"/brand/").concat(ne);var e;if(ce)return e="U"===ce[0]?"under=".concat(ce.slice(1)):"above=".concat(ce.slice(1)),"".concat(z,"/price?").concat(e);if(le){var t,r;if(le.includes("-")){var i=le.split("-");t=i[0],r=i[1]}else t=le;return"".concat(z,"/displacement?start=").concat(t).concat(r?"&end=".concat(r):"")}if(oe)return"".concat(z,"/category/").concat(oe)}else if(!F&&R)return"".concat(z)}),[F,ne,ce,le,oe,R]),pe=(0,O.Z)("".concat(de)),me=pe.isLoading,xe=pe.apiData,ue=pe.serverError;return(0,Y.jsxs)(d.Z,{sx:{height:"auto",pt:10,bgcolor:"customWhite.main"},children:[(F&&(ne||oe||ce||le)||!F&&R)&&!me?(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(p.ZP,{container:!0,justifyContent:"flexStart",alignItems:"center",sx:(0,o.Z)({maxWidth:"974px",width:"80vw",mx:"auto"},0===(null===xe||void 0===xe||null===(e=xe.data)||void 0===e?void 0:e.length)&&!ue&&{flexDirection:"column"}),children:[(0,Y.jsx)(m.Z,{variant:"contained",color:"customRed",size:r?"small":"medium",endIcon:(0,Y.jsx)(k.Z,{}),sx:(0,o.Z)({color:"customWhite.main",width:"70%",px:4,fontWeight:"600",py:1,mx:"auto",textTransform:"uppercase",mb:10},r&&{fontSize:"0.75rem"}),onClick:function(){L(!0)},children:"filter"}),0!==(null===xe||void 0===xe||null===(t=xe.data)||void 0===t?void 0:t.length)||ue||me?ue?ue.hasOwnProperty("data")?(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)("p",{style:{textTransform:"uppercase",width:"100%",textAlign:"center",fontWeight:"700"},children:"Error On Selected Filter. Please select another filter !"}),ue.data.map((function(e){var t=e[Object.keys(e)[0]];return(0,Y.jsx)(N.Z,{type:"error",message:t})}))]}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)("p",{style:{textTransform:"uppercase",width:"100%",textAlign:"center",fontWeight:"700"},children:"Error On Selected Filter. Please select another filter !"}),(0,Y.jsx)(N.Z,{type:"error",message:ue.message})]}):null===xe||void 0===xe?void 0:xe.data.map((function(e,t){return(0,Y.jsx)(p.ZP,{item:!0,laptop:4,mobile:12,sx:(0,o.Z)((0,o.Z)({pr:5,mb:5},2===t&&{pr:0}),r&&{display:"flex",justifyContent:"center",pb:5,pr:0}),children:(0,Y.jsx)(J.Z,{path:"bike/".concat(e.bikeID),bike:e})},e.bikeID)})):(0,Y.jsx)("p",{style:{textTransform:"uppercase",fontWeight:"700"},children:"No Bikes Of Selected Filter Available Yet or your network may be slow"})]})}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(I,{onViewAll:q}),H.map((function(e,t){return(0,Y.jsx)(G,{grid:e,onFilterChange:se,onSave:function(){E(!0)},onViewAll:q},e.title+t)}))]}),(0,Y.jsxs)(x.Z,{fullScreen:!0,open:W,onClose:K,children:[(0,Y.jsx)(f.Z,{sx:{position:"relative",bgcolor:"customBlack.main"},children:(0,Y.jsxs)(h.Z,{children:[(0,Y.jsx)(b.Z,{edge:"start",color:"inherit",onClick:K,"aria-label":"close",children:(0,Y.jsx)(A.Z,{})}),(0,Y.jsx)(j.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:"Filter"}),(0,Y.jsx)(j.Z,{variant:"h6",component:m.Z,autoFocus:!0,color:"inherit",onClick:function(){T(!1),E(!0),K()},children:"save"})]})}),(0,Y.jsx)(g.Z,{children:(0,Y.jsxs)(u.ZP,{sx:{px:10,py:5,display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[(0,Y.jsxs)(v.Z,{sx:{mb:5},children:[(0,Y.jsx)(B.Z,{id:"filter-radio-buttons-group",sx:{fontWeight:"700",color:"customBlack.main",textTransform:"uppercase"},children:"filter"}),(0,Y.jsx)(Z.Z,{row:!0,"aria-labelledby":"filter-type",name:"selectedFilter",value:re.selectedFilter,onChange:se,children:_.map((function(e){return(0,Y.jsx)(w.Z,{value:e.toLowerCase(),control:(0,Y.jsx)(y.Z,{}),label:e})}))})]}),"brand"===ae&&(0,Y.jsxs)(v.Z,{children:[(0,Y.jsx)(B.Z,{id:"filter-radio-buttons-group",sx:{fontWeight:"700",color:"customBlack.main",textTransform:"uppercase"},children:"select brand"}),(0,Y.jsx)(Z.Z,{row:!0,"aria-label":"brand-filter",name:"selectedBrand",value:re.selectedBrand,onChange:se,children:i.map((function(e){return(0,Y.jsx)(w.Z,{value:e,control:(0,Y.jsx)(y.Z,{}),label:e})}))})]}),"price"===ae&&(0,Y.jsxs)(v.Z,{children:[(0,Y.jsx)(B.Z,{id:"filter-radio-buttons-group",sx:{fontWeight:"700",color:"customBlack.main",textTransform:"uppercase"},children:"select price"}),(0,Y.jsx)(Z.Z,{row:!0,"aria-label":"price-filter",name:"selectedPrice",value:re.selectedPrice,onChange:se,children:n.map((function(e){return(0,Y.jsx)(w.Z,{value:e,control:(0,Y.jsx)(y.Z,{}),label:"".concat("U"===e.charAt(0)?"Under":"Above"," ").concat(e.slice(1))})}))})]}),"category"===ae&&(0,Y.jsxs)(v.Z,{children:[(0,Y.jsx)(B.Z,{id:"filter-radio-buttons-group",sx:{fontWeight:"700",color:"customBlack.main",textTransform:"uppercase"},children:"select category"}),(0,Y.jsx)(Z.Z,{row:!0,"aria-label":"category-filter",name:"selectedCategory",value:re.selectedCategory,onChange:se,children:a.map((function(e){return(0,Y.jsx)(w.Z,{value:e,control:(0,Y.jsx)(y.Z,{}),label:e.charAt(0).toUpperCase()+e.slice(1)})}))})]}),"displacement"===ae&&(0,Y.jsxs)(v.Z,{children:[(0,Y.jsx)(B.Z,{id:"filter-radio-buttons-group",sx:{fontWeight:"700",color:"customBlack.main",textTransform:"uppercase"},children:"select displacement"}),(0,Y.jsx)(Z.Z,{row:!0,"aria-label":"displacement-filter",name:"selectedDisplacement",value:re.selectedDisplacement,onChange:se,children:c.map((function(e){return(0,Y.jsx)(w.Z,{value:e,control:(0,Y.jsx)(y.Z,{}),label:e.includes("-")?e:"".concat(e,"+")})}))})]})]})})]}),me?(0,Y.jsx)(X.Z,{}):(0,Y.jsx)(Y.Fragment,{})]})}}}]);
//# sourceMappingURL=124.fb6a0b5d.chunk.js.map
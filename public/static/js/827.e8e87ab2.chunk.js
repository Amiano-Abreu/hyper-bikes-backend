"use strict";(self.webpackChunkhyper_bikes=self.webpackChunkhyper_bikes||[]).push([[827],{2827:function(e,t,r){r.r(t),r.d(t,{default:function(){return O}});var n=r(1413),a=r(885),i=r(2791),o=r(6871),s=r(6015),l=r(6650),u=r(7205),c=r(7887),d=r(4565),m=r(6970),h=r(7856),p=r(3492),b=r(2900),g=r(1898),f=r(120),v=r(7924),x=r(2797),y=r(5705),w=r(4929),Z="Review_error__76Zue",k="Review_form__JtYE-",R=r(4615),j=r(3284),E=r(5790),T=r(184),S=[{value:"> 1 yr",label:"> 1 yr"},{value:"6 - 12 months",label:"6 - 12 months"},{value:"3 - 6 months",label:"3 - 6 months"},{value:"< 3 months",label:"< 3 months"},{value:"never owned",label:"never owned"}],C=[{value:"daily commute",label:"Daily commute"},{value:"occasional commute",label:"Occasional commute"},{value:"leisure rides",label:"Leisure rides"},{value:"tours",label:"Tours"},{value:"everything",label:"Everything"}],L=[{value:"< 5000 Km",label:"< 5000 Km"},{value:"5000-10000 Km",label:"5000-10000 Km"},{value:"10000-15000 Km",label:"10000-15000 Km"},{value:"> 15000 Km",label:"> 15000 Km"}],B=function(e){var t=e.formik,r=e.is700,n=e.controlLabel,a=e.name,i=e.options;return(0,T.jsxs)(g.Z,{error:!(!t.touched[a]||!t.errors[a]),sx:{mb:r?"20px":"25px"},children:[(0,T.jsx)(f.Z,{id:a,sx:{fontWeight:"600",color:"customBlack.main",fontSize:r?".9rem":"1rem"},children:n}),(0,T.jsx)(p.Z,{row:!0,"aria-labelledby":a,name:a,value:t.values[a],onChange:function(e){t.setFieldValue(a,e.target.value).then((function(){return t.handleBlur(e)}))},sx:{"& .MuiTypography-root":{fontSize:r?".9rem":"1rem"}},children:i.map((function(e,t){return(0,T.jsx)(b.Z,{value:e.value,control:(0,T.jsx)(h.Z,{sx:{"& .MuiSvgIcon-root":{fontSize:r||r?"1rem":"1.25rem"}}}),label:e.label},e.value+t)}))}),(0,T.jsx)(v.Z,{sx:{color:"customRed.main"},children:t.touched[a]&&t.errors[a]})]})},O=function(){var e,t,r,h,p,b=(0,o.TH)(),g=b.pathname.split("/")[2],f=null===(e=b.state)||void 0===e?void 0:e.review,v=(0,i.useRef)(),O=(0,i.useRef)(),P=(0,i.useRef)(),_=(0,x.Z)("(max-width:700px)"),q=(0,i.useState)(null),M=(0,a.Z)(q,2),U=M[0],V=M[1],I=(0,i.useState)(!1),W=(0,a.Z)(I,2),A=W[0],z=W[1],D=(0,o.s0)(),F=(0,y.TA)({initialValues:{rating:null!==f&&void 0!==f&&f.rating?f.rating:0,title:null!==f&&void 0!==f&&f.title?f.title:"",body:null!==f&&void 0!==f&&f.body?f.body:"",owned:null!==f&&void 0!==f&&null!==(t=f.data)&&void 0!==t&&t.owned?f.data.owned:"",used:null!==f&&void 0!==f&&null!==(r=f.data)&&void 0!==r&&r.used?f.data.used:"",ridden:null!==f&&void 0!==f&&null!==(h=f.data)&&void 0!==h&&h.ridden?f.data.ridden:"",mileage:null!==f&&void 0!==f&&null!==(p=f.data)&&void 0!==p&&p.mileage?f.data.mileage:""},validateOnChange:!1,validationSchema:w.Ry().shape({rating:w.Rx().typeError("Rating must be a number").positive("Rating must be a positive number").moreThan(0,"Rating must be a value equal to or more than 1").lessThan(6,"Rating must be a value equal to or less than 5").required("Rating is required"),title:w.Z_("Title must be a string").required("Title is required"),body:w.Z_("Body must be a string").required("Body is required").max(255,"Body must be at most 255 characters"),owned:w.Z_("Owned must be a string").required("Owned is required"),used:w.Z_("Must be a string").required("Must be required"),ridden:w.Z_("Ridden must be a string").required("Ridden is required"),mileage:w.Rx().typeError("Mileage must be a number").positive("Mileage must be a positive number").required("Mileage is required")}),onSubmit:function(e,t){var r=t.setSubmitting;V(null),z(!0),f?(0,R.d_)((0,n.Z)((0,n.Z)({},e),{},{bikeID:g})).then((function(e){V(e)})).finally((function(){z(!1),r(!1),setTimeout((function(){D(-1)}),1500)})):(0,R.Yk)((0,n.Z)((0,n.Z)({},e),{},{bikeID:g})).then((function(e){V(e)})).finally((function(){z(!1),r(!1),setTimeout((function(){D(-1)}),1500)}))}});return(0,i.useEffect)((function(){window.scrollTo(0,0),f&&(v.current.lastChild.firstChild.value=f.title,O.current.lastChild.firstChild.value=f.body,P.current.lastChild.firstChild.value=f.data.mileage)}),[f]),console.count(),(0,T.jsxs)(T.Fragment,{children:[A?(0,T.jsx)(j.Z,{}):(0,T.jsx)(T.Fragment,{}),!A&&U&&"ERROR"===(null===U||void 0===U?void 0:U.status)?(0,T.jsx)(E.Z,{timer:1500,type:"error",message:null===U||void 0===U?void 0:U.message}):(0,T.jsx)(T.Fragment,{}),!A&&U&&"SUCCESS"===(null===U||void 0===U?void 0:U.status)?(0,T.jsx)(E.Z,{timer:1500,message:null===U||void 0===U?void 0:U.message}):(0,T.jsx)(T.Fragment,{}),(0,T.jsx)(s.Z,{sx:{height:"auto",width:"auto",py:10,bgcolor:"customBlack.light"},children:(0,T.jsxs)(l.Z,{elevation:6,sx:{bgcolor:"customWhite.main",height:"auto",width:{mobile:"90%",tablet:"400px",laptop:"600px"},mx:"auto",py:10},children:[(0,T.jsxs)(d.Z,{variant:"h4",component:"p",textAlign:"center",sx:(0,n.Z)((0,n.Z)({fontWeight:"400",color:"customBlack.main",fontSize:"1.8rem"},_&&{fontSize:"1.5rem"}),{},{"& span":{borderBottom:"2px solid #bc1024"}}),children:["WRITE YOUR ",(0,T.jsx)("span",{children:"REVIEW"})]}),(0,T.jsx)(d.Z,{variant:"subtitle2",textAlign:"center",sx:{color:"customBlack.main",pt:5,width:{mobile:"200px",tablet:"300px"},mx:"auto",fontSize:".75rem"},children:"Consider looks & styling, performance, servicing experience, mileage etc. before you rate."}),(0,T.jsxs)("form",{onSubmit:F.handleSubmit,noValidate:!0,className:k,children:[F.touched.rating&&F.errors.rating?(0,T.jsx)("p",{className:Z,style:{fontWeight:"700"},children:F.errors.rating}):null,(0,T.jsx)(m.Z,{name:"rating",id:"rating",value:Number(F.values.rating),onChange:function(e){F.setFieldValue("rating",e.target.value).then((function(){return F.handleBlur(e)}))},size:_?"medium":"large",sx:{mb:2}}),(0,T.jsx)(B,{formik:F,is700:_,controlLabel:"How long have you owned this bike for ?",name:"owned",options:S}),(0,T.jsx)(B,{formik:F,is700:_,controlLabel:"What do you use this bike for?",name:"used",options:C}),(0,T.jsx)(B,{formik:F,is700:_,controlLabel:"How much have you ridden this bike ?",name:"ridden",options:L}),(0,T.jsx)(c.Z,{label:"Title",type:"text",sx:{marginBottom:"".concat(_?"20px":"25px")},id:"title",size:_?"small":"medium",ref:v,fullWidth:!0,onBlur:function(e){F.setFieldValue("title",e.target.value).then((function(){return F.handleBlur(e)}))},error:!(!F.touched.title||!F.errors.title),helperText:F.touched.title&&F.errors.title}),(0,T.jsx)(c.Z,{ref:O,id:"body",label:"Body",placeholder:"Less than 255 chars",type:"text",size:_?"small":"medium",multiline:!0,maxRows:4,fullWidth:!0,onBlur:function(e){F.setFieldValue("body",e.target.value).then((function(){return F.handleBlur(e)}))},error:!(!F.touched.body||!F.errors.body),helperText:F.touched.body&&F.errors.body,sx:{marginBottom:"".concat(_?"20px":"25px")}}),(0,T.jsx)(c.Z,{ref:P,id:"mileage",label:"Mileage",placeholder:"Got mileage in Km",type:"number",size:_?"small":"medium",fullWidth:!0,onChange:function(e){F.setFieldValue("mileage",e.target.value)},onBlur:F.handleBlur,error:!(!F.touched.mileage||!F.errors.mileage),helperText:F.touched.mileage&&F.errors.mileage,sx:{marginBottom:"".concat(_?"20px":"25px")}}),(0,T.jsx)(u.Z,{onClick:function(){F.validateForm().then((function(){return F.submitForm()}))},disabled:!!F.isSubmitting,sx:(0,n.Z)((0,n.Z)({height:"40px",paddingX:5,py:2,width:"auto",bgcolor:"customBlack.main",color:"customWhite.main",fontWeight:"600"},_&&{fontSize:"0.75rem",height:"30px"}),{},{"&:hover":{bgcolor:"customRed.main"}}),children:"SUBMIT"})]})]})})]})}},4615:function(e,t,r){r.d(t,{DW:function(){return c},Yk:function(){return l},d_:function(){return u}});var n=r(4165),a=r(1413),i=r(5861),o=r(2388),s="api",l=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r,i,l,u,c,d,m;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new URL("".concat(s,"/csrf"),"http://localhost:5000#    DEVELOPMENT API URL"),i=new URL("".concat(s,"/review"),"http://localhost:5000#    DEVELOPMENT API URL"),e.next=5,o.Z.get(r.toString(),{withCredentials:!0});case 5:return l=e.sent,u=l.data.csrfToken,e.next=9,o.Z.post(i.toString(),(0,a.Z)({_csrf:u},t),{headers:{Accept:"application/json","Content-Type":"application/json"},withCredentials:!0,mode:"cors"});case 9:return c=e.sent,d=c.data,e.abrupt("return",d);case 14:if(e.prev=14,e.t0=e.catch(0),!e.t0.hasOwnProperty("response")){e.next=20;break}if(!e.t0.response.hasOwnProperty("data")){e.next=20;break}return m=e.t0.response.data,e.abrupt("return",m);case 20:return e.abrupt("return",{status:"Error",message:e.t0.message});case 21:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r,i,l,u,c,d,m;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new URL("".concat(s,"/csrf"),"http://localhost:5000#    DEVELOPMENT API URL"),i=new URL("".concat(s,"/editreview"),"http://localhost:5000#    DEVELOPMENT API URL"),e.next=5,o.Z.get(r.toString(),{withCredentials:!0});case 5:return l=e.sent,u=l.data.csrfToken,e.next=9,o.Z.post(i.toString(),(0,a.Z)({_csrf:u},t),{headers:{Accept:"application/json","Content-Type":"application/json"},withCredentials:!0,mode:"cors"});case 9:return c=e.sent,d=c.data,e.abrupt("return",d);case 14:if(e.prev=14,e.t0=e.catch(0),!e.t0.hasOwnProperty("response")){e.next=20;break}if(!e.t0.response.hasOwnProperty("data")){e.next=20;break}return m=e.t0.response.data,e.abrupt("return",m);case 20:return e.abrupt("return",{status:"Error",message:e.t0.message});case 21:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r,a,i,l,u,c,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new URL("".concat(s,"/csrf"),"http://localhost:5000#    DEVELOPMENT API URL"),a=new URL("".concat(s,"/deletereview"),"http://localhost:5000#    DEVELOPMENT API URL"),e.next=5,o.Z.get(r.toString(),{withCredentials:!0});case 5:return i=e.sent,l=i.data.csrfToken,e.next=9,o.Z.post(a.toString(),{_csrf:l,bikeID:t},{headers:{Accept:"application/json","Content-Type":"application/json"},withCredentials:!0,mode:"cors"});case 9:return u=e.sent,c=u.data,e.abrupt("return",c);case 14:if(e.prev=14,e.t0=e.catch(0),!e.t0.hasOwnProperty("response")){e.next=20;break}if(!e.t0.response.hasOwnProperty("data")){e.next=20;break}return d=e.t0.response.data,e.abrupt("return",d);case 20:return e.abrupt("return",{status:"Error",message:e.t0.message});case 21:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=827.e8e87ab2.chunk.js.map
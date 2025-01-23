"use strict";(self.webpackChunkhyper_bikes=self.webpackChunkhyper_bikes||[]).push([[915],{915:function(e,t,i){i.r(t);var a=i(1413),n=i(2791),r=i(9434),o=i(1007),s=i(6015),l=i(6650),u=i(7205),c=i(7887),m=i(4565),d=i(2797),h=i(3504),p=i(5705),g=i(4929),x=i(3284),f=i(5790),b=i(6772),Z=i(3626),j=i(184);t.default=function(){var e=(0,r.I0)(),t=(0,r.v9)((function(e){return e.user})),i=t.error,v=t.loading,w=t.success,y=(0,d.Z)("(max-width:990px)"),S=(0,d.Z)("(max-width:700px)"),k=g.Ry().shape({email:g.Z_("Email must be a string").email("Please provide a valid email").required("Email is required").trim(),password:g.Z_("Password must be a string").required("Password is required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Must Contain 8 Characters with [a-z,A-Z,0-9,!@#$%...]")}),C=(0,p.TA)({initialValues:{email:"",password:""},validationSchema:k,onSubmit:function(t,i){var a=i.setSubmitting;e((0,o.HN)(t)).finally((function(){return a(!1)}))}}),z=C.submitCount,_=C.isValid,B=C.setErrors;return(0,n.useEffect)((function(){e((0,o.q$)()),window.scrollTo(0,0)}),[e]),(0,n.useEffect)((function(){!v&&w&&i&&"string"!==typeof i&&B(i)}),[B,v,i,w]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(s.Z,{sx:{backgroundImage:"url(".concat(b," )"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:{mobile:"bottom",tablet:"right center"},height:"calc(100vh - ".concat(y?"70px":"80px",")"),width:"auto",paddingTop:"75px"},children:(0,j.jsxs)(l.Z,{elevation:12,sx:{marginX:"auto",marginTop:"0px",height:"auto",width:{mobile:"90%",tablet:"600px"},backgroundColor:"customWhite.main",opacity:".8",display:"flex",flexDirection:"column",justifyContent:"space-around",paddingBottom:7.5,px:10},children:[(0,j.jsx)(m.Z,{variant:"h4",component:"p",textAlign:"center",sx:(0,a.Z)({fontWeight:"600",color:"black",my:5},S&&{fontSize:"1.5rem"}),children:"LOGIN"}),(0,j.jsxs)("form",{className:Z.Z.formClass,onSubmit:C.handleSubmit,noValidate:!0,children:[Object.keys(C.values).map((function(e){return(0,j.jsx)(c.Z,{id:e,label:String(e).toLowerCase(),type:e,fullWidth:!0,size:"small",value:C.values[e],onChange:C.handleChange,onBlur:C.handleBlur,error:!(!C.touched[e]||!C.errors[e]),helperText:C.touched[e]&&C.errors[e],sx:{marginBottom:"".concat(S?"10px":"20px")}},e)})),(0,j.jsx)(u.Z,{type:"submit",disabled:!!C.isSubmitting,sx:(0,a.Z)((0,a.Z)({height:"40px",paddingX:5,py:2,width:"auto",bgcolor:"customBlack.main",color:"customWhite.main",fontWeight:"600"},S&&{fontSize:"0.75rem",height:"30px"}),{},{"&:hover":{bgcolor:"customRed.main"}}),children:"SUBMIT"})]}),(0,j.jsxs)(m.Z,{variant:"subtitle2",sx:(0,a.Z)({marginX:"auto",width:"auto"},S&&{fontSize:"0.75rem"}),children:["Don't have an account ? ",(0,j.jsx)(m.Z,{variant:"subtitle2",component:h.rU,to:"/signup",sx:(0,a.Z)({},S&&{fontSize:"0.75rem"}),children:"Sign up"})]})]})}),!v&&i?(0,j.jsx)(f.Z,{timer:2e3,type:"error",message:"string"===typeof i?i:Object.values(i).join("\n")}):(0,j.jsx)(j.Fragment,{}),!v&&w&&!i&&z>0&&_?(0,j.jsx)(f.Z,{timer:1500,message:"Login successfull !"}):(0,j.jsx)(j.Fragment,{}),v?(0,j.jsx)(x.Z,{}):(0,j.jsx)(j.Fragment,{})]})}},3626:function(e,t){t.Z={formClass:"loginStyles_formClass__xbSJW"}},6772:function(e,t,i){e.exports=i.p+"static/media/auth.4be7ffe08540e8d07fd4.webp"}}]);
//# sourceMappingURL=915.dd94a856.chunk.js.map
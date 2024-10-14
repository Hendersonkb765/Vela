import{j as e,W as f,Y as h,a as o}from"./app-CtPP1DNG.js";import{I as i}from"./InputError-BVD2qw8f.js";import{I as n}from"./InputLabel-DpcK_Rcy.js";import{P as g}from"./PrimaryButton-CgHh9L6v.js";import{T as c}from"./TextInput-BO1oMSBD.js";import{A as j}from"./ApplicationLogo-jiC664LK.js";import{D as b}from"./DarkModeToggleIcon-Dcrx1BIv.js";import"./index-DZYEFDQs.js";import"./iconBase-qlBafJIs.js";function w({className:r="",...a}){return e.jsx("input",{...a,type:"checkbox",className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  "+r})}function L({status:r,canResetPassword:a}){const{data:t,setData:l,post:d,processing:u,errors:m,reset:x}=f({email:"",password:"",remember:!1}),p=s=>{s.preventDefault(),d(route("logar"),{onFinish:()=>x("password")})};return e.jsxs("section",{className:"bg-primary dark:bg-primary-300 h-screen overflow-hidden  flex flex-col items-center justify-center",children:[e.jsx(h,{title:"Entrar"}),e.jsxs("div",{className:"w-screen sm:min-w-fit sm:w-2/5 md:w-3/5 h-full sm:h-auto flex flex-col  items-center px-4 py-8 sm:rounded-xl bg-white dark:bg-gray-900 dark:text-neutralcolors-200 relative ",children:[e.jsx(j,{className:"w-48 h-48"}),e.jsx("div",{className:"absolute right-5 scale-125",children:e.jsx(b,{})}),e.jsx("h2",{className:"font-headers font-bold text-3xl mb-12 -mt-12 text-neutralcolors-600 dark:text-neutralcolors-200 text-center",children:"Bem vindo de volta!"}),r&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:r}),e.jsxs("form",{onSubmit:p,className:"flex flex-col space-y-4 sm:p-8 w-11/12 md:w-auto",children:[e.jsxs("div",{className:"",children:[e.jsx(n,{htmlFor:"email",value:"Email"}),e.jsx(c,{id:"email",type:"email",name:"email",value:t.email,className:"mt-1 block  w-full",autoComplete:"username",placeholder:"Digite seu email",onChange:s=>l("email",s.target.value),required:!0}),e.jsx(i,{message:m.email,className:"mt-2"})]}),e.jsxs("div",{className:"",children:[e.jsx(n,{htmlFor:"password",value:"Senha"}),e.jsx(c,{id:"password",type:"password",name:"password",value:t.password,className:"mt-1 block  w-full",autoComplete:"new-password",placeholder:"Digite sua senha",onChange:s=>l("password",s.target.value),required:!0}),e.jsx(i,{message:m.password,className:"mt-2"})]}),e.jsxs("div",{className:"flex justify-between mt-4 px-4 sm:px-0",children:[e.jsxs("label",{className:"flex items-center",children:[e.jsx(w,{name:"remember",checked:t.remember,onChange:s=>l("remember",s.target.checked)}),e.jsx("span",{className:"ms-2 text-sm text-gray-600 dark:text-gray-400",children:"Lembre-me"})]}),a&&e.jsx(o,{href:route("password.request"),className:"underline text-sm text-gray-600  dark:text-gray-400 hover:text-gray-900 dark:hover:text-primary rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Esqueceu sua senha?"})]}),e.jsx("div",{className:"flex flex-col justify-start sm:justify-center space-y-4 pt-3 mb-4",children:e.jsxs("div",{className:"flex flex-col space-y-4 justify-center items-center",children:[e.jsx(g,{className:"h-12 w-full ",disabled:u,center:!0,type:"submit",children:"Entrar"}),e.jsxs("p",{className:"w-full text-sm text-neutralcolors-400 dark:text-neutralcolors-200",children:["Ainda não tem uma conta? ",e.jsx(o,{href:route("register"),className:"underline  text-primary",children:"Cadastre-se"})]})]})})]})]})]})}export{L as default};

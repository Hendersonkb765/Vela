import{W as o,j as e,Y as n}from"./app-CtPP1DNG.js";import{P as c}from"./PrimaryButton-CgHh9L6v.js";import"./Dropdown-B8gpms0Z.js";import{S as m}from"./SecondaryButton-CJd_1Wwq.js";import"./transition-CzWNMDPU.js";function p({status:r}){const{post:t,processing:i}=o({}),s=a=>{a.preventDefault(),t(route("verification.send"))};return e.jsxs("section",{className:"bg-primary dark:bg-primary-300 h-screen flex flex-col items-start sm:items-center justify-center sm:py-8  ",children:[e.jsx(n,{title:"Email Verification"}),e.jsxs("div",{className:" sm:w-2/5 w-11/12 sm:h-auto flex flex-col items-start justify-center bg-white px-4 py-8 rounded-xl dark:bg-gray-900 ",children:[e.jsxs("div",{className:"text-neutralcolors-700 dark:text-neutralcolors-200 font-body",children:[e.jsx("div",{className:"mb-4 text-sm ",children:"Obrigado por se inscrever! Antes de começar, poderia verificar seu endereço de e-mail clicando no link que acabamos de enviar para você? Se você não recebeu o e-mail, ficaremos felizes em enviar outro."}),r==="verification-link-sent"&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600 dark:text-green-400",children:"Um novo link de verificação foi enviado para o endereço de e-mail que você forneceu durante o cadastro."})]}),e.jsx("form",{onSubmit:s,children:e.jsxs("div",{className:"mt-4 flex items-center justify-start space-x-4",children:[e.jsx(c,{disabled:i,type:"submit",className:"h-12",children:"Reenviar E-mail de Verificação"}),e.jsx(m,{href:route("logout"),method:"POST",as:"button",className:"h-12  !text-danger !border-danger hover:!bg-danger hover:!text-white transition-colors",children:"Sair"})]})})]})]})}export{p as default};

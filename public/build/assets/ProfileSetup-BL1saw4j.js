import{r as l,W as v,j as e}from"./app-CtPP1DNG.js";import{P as m}from"./PrimaryButton-CgHh9L6v.js";import{P as y}from"./ProfileSetupLayout-BR4811Nf.js";import{F as P}from"./index-BZqMysfF.js";import f from"./Stage1-Bo_h2JUg.js";import I from"./Stage2-Dzi90Ajv.js";import z from"./Stage3-BoHhJvlr.js";import C from"./Stage4-Ckxm0jzE.js";import"./NavBar-BRnHUvCp.js";import"./ApplicationLogo-jiC664LK.js";import"./Dropdown-B8gpms0Z.js";import"./transition-CzWNMDPU.js";import"./DarkModeToggleIcon-Dcrx1BIv.js";import"./index-DZYEFDQs.js";import"./iconBase-qlBafJIs.js";import"./SideMenu-D3_MuqCz.js";import"./DateInput-CaQdbuvS.js";import"./InputError-BVD2qw8f.js";import"./ProfileUploadInput-LWgYRigi.js";import"./SecondaryButton-CJd_1Wwq.js";import"./index-Dh2FwS8Q.js";import"./PrimaryIconButton-E5beE6gg.js";import"./TextInput-BO1oMSBD.js";function $(){const[a,u]=l.useState(()=>{const r=localStorage.getItem("currentStep");return r?JSON.parse(r):1}),[d,h]=l.useState(!1),{data:t,setData:s,post:O,patch:x,processing:D,errors:n,reset:g}=v({user:{name:"",profilePicture:"",birthday:"",roleInOrganization:null},hasOrganization:!1,organization:{organizationName:"",organizationProfilePicture:"",CNPJ:"",doesNotHaveCNPJ:!1,CPF:"",focusAreas:[]}}),S=t.user.name.split(" ").length>1;l.useEffect(()=>{const r=localStorage.getItem("formData");r&&s(JSON.parse(r))},[]),l.useEffect(()=>{localStorage.setItem("currentStep",JSON.stringify(a)),localStorage.setItem("formData",JSON.stringify(t))},[a,t]);const i=[{stage:1,title:"Vamos Começar Incrementando Seu Perfil",description:"Adicione a sua foto de perfil e nos fale um pouco sobre você para que possamos conhecê-lo melhor e personalizar sua experiência na nossa plataforma."},{stage:2,title:"Quem é você no terceiro setor?",description:""},{stage:3,title:"Fale mais sobre sua organização",description:"Nos fale um pouco sobre sua organização para que possamos conhecê-la melhor"},{stage:4,title:"Quais são seus eixos de atuação?",description:""}],o=i.length,j=r=>{switch(r){case 1:return e.jsx(f,{baseInfo:i[0],maxStep:o,data:t,setData:s,errors:n});case 2:return e.jsx(I,{baseInfo:i[1],maxStep:o,data:t,setData:s,errors:n});case 3:return e.jsx(z,{baseInfo:i[2],maxStep:o,data:t,setData:s,errors:n});case 4:return e.jsx(C,{baseInfo:i[3],maxStep:o,data:t,setData:s,errors:n});default:return e.jsx(f,{baseInfo:i[0],maxStep:o,data:t,setData:s,errors:n})}},N=r=>{r.preventDefault(),u(c=>Math.max(c-1,1))},b=r=>{if(r.preventDefault(),a===1&&!S)return alert("Por favor, insira um nome válido.");if(a===o&&p(),a===2&&!t.user.roleInOrganization)return alert("Selecione uma das opções");a===2&&!t.hasOrganization?p():u(c=>Math.min(c+1,o))},p=()=>{x(route("completeRegistration.store"),{data:t,onFinish:()=>{g(),h(!0),localStorage.removeItem("formData"),localStorage.removeItem("currentStep")}})};return e.jsx(y,{hideProfile:!0,imgUrl:t.profilePicture,userName:t.name,children:d?e.jsxs("div",{className:"h-full flex flex-col items-center justify-center space-y-8",children:[e.jsx("div",{className:"rounded-full w-40 h-40 bg-neutralcolors-100/50 dark:bg-slate-900 flex justify-center items-center p-8 ",children:e.jsx(P,{className:"w-32 h-32 text-green-400"})}),e.jsxs("div",{className:"flex flex-col text-center space-y-4",children:[e.jsxs("h1",{className:"text-4xl font-bold font-headers capitalize dark:text-white",children:["Registro concluído com ",e.jsx("span",{className:"text-green-400 uppercase",children:"SUCESSO"})," 🎉"]}),e.jsx("p",{className:"font-body text-base dark:text-gray-300",children:"Agora é só dar uma olhadinha no seu e-mail para continuar. 😊"})]}),e.jsx(m,{href:route("dashboard"),center:!0,children:"OK"})]}):e.jsxs("form",{onSubmit:b,className:"h-full m-4 mb-10 flex flex-col ",encType:"multipart/form-data",children:[j(a),e.jsxs("div",{className:"flex justify-end mt-auto space-x-4",children:[e.jsx(m,{gray:!0,center:!0,disabled:a===1,className:"h-12",onClick:N,type:"button",children:"Voltar"}),e.jsx(m,{center:!0,className:"h-12",type:"submit",children:a===o?"Finalizar":"Continuar"})]})]})})}export{$ as default};
import{W as o,j as e}from"./app-CtPP1DNG.js";import{D as i}from"./DateInput-CaQdbuvS.js";import{S as n}from"./SearchInput-D5yJ8gM0.js";function f(){const t="1900-01-01",s=new Date(new Date().getFullYear(),11,31).toISOString().split("T")[0],{data:a,setData:l,post:c,patch:d,processing:u,errors:m,reset:p}=o({user:{name:"",profilePicture:"",birthday:"",roleInOrganization:null},task:{uploadDate:""}});return e.jsx("form",{action:"",className:"w-full px-8 -translate-y-5 ",children:e.jsxs("div",{className:"bg-white h-20 rounded-lg dark:bg-slate-800 flex items-center p-4 space-x-4 fullhd:h-28",children:[e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("label",{className:"text-sm dark:text-gray-300",children:"Data de Envio"}),e.jsx(i,{id:"uploadDate",name:"uploadDate",value:a.task.uploadDate,className:"mt-1 block !min-w-48 ",autoComplete:"uploadDate",isFocused:!0,onChange:r=>l("task",{...a.task,uploadDate:r.target.value}),minDate:t,maxDate:s})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("label",{className:"text-sm dark:text-gray-300",children:"Pesquise por Nome"}),e.jsx(n,{searchRoute:"",placeholder:"Digite sua busca..."})]})]})})}export{f as default};

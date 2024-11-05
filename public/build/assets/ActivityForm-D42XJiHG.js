import{W as p,j as e}from"./app-CtPP1DNG.js";import{P as v}from"./PrimaryButton-CgHh9L6v.js";import{D as h}from"./DateInput-CaQdbuvS.js";import{I as a}from"./InputLabel-DpcK_Rcy.js";import{T as x}from"./TextInput-BO1oMSBD.js";function w({onSubmit:y}){const n="1900-01-01",c=new Date(new Date().getFullYear(),11,31).toISOString().split("T")[0],{data:t,setData:s,post:l,patch:b,processing:u,errors:g,reset:j}=p({activityTitle:"",activityDescription:"",activityDate:"",activityStatus:"",activityHourStart:"",activityHourEnd:"",activityThumbnail:""}),i=r=>{const{name:o,value:m}=r.target;s({...t,[o]:m})},d=r=>{r.preventDefault(),l(route("activity.store"),{onError:o=>{alert("Ocorreu um erro no registro. Verifique os dados e tente novamente!")}})};return e.jsx("form",{onSubmit:d,children:u?e.jsx("h1",{children:"batata"}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-4",children:[e.jsx(a,{children:"Título"}),e.jsx(x,{name:"activityTitle",value:t.activityTitle,onChange:i,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(a,{children:"Descrição"}),e.jsx("textarea",{name:"activityDescription",value:t.activityDescription,onChange:i,className:"mt-1 block w-full border-2 rounded-md border-neutralcolors text-neutralcolors-600  dark:border-slate-500 dark:bg-gray-900 dark:text-neutral-400 focus:ring-primary-500 focus:border-primary-500",required:!0})]}),e.jsxs("div",{className:"mb-4 flex space-x-2",children:[e.jsxs("div",{children:[e.jsx(a,{children:"Data"}),e.jsx(h,{id:"activityDate",name:"activityDate",value:t.activityDate,className:"mt-1 h- block !min-w-48 h-12",autoComplete:"activityDate",isFocused:!0,onChange:r=>s({...t,activityDate:r.target.value}),minDate:n,maxDate:c})]}),e.jsxs("div",{children:[e.jsx(a,{children:"Status"}),e.jsxs("select",{name:"activityStatus",value:t.activityStatus,onChange:i,className:"h-12 mt-1 block w-full border-2 rounded-md border-neutralcolors text-neutralcolors-600  dark:border-slate-500 dark:bg-gray-900 dark:text-neutral-400 focus:ring-primary-500 focus:border-primary-500 cursor-pointer ",required:!0,children:[e.jsx("option",{value:"",disabled:!0,className:"cursor-pointer",children:"Selecione o status"}),e.jsx("option",{value:"pending",className:"cursor-pointer",children:"Pendente"}),e.jsx("option",{value:"in-progress className='cursor-pointer'",children:"Em Progresso"}),e.jsx("option",{value:"completed",className:"cursor-pointer",children:"Concluído"})]})]})]}),e.jsx(v,{type:"submit",className:"h-12 w-full",center:!0,children:"Registrar Atividade"})]})})}export{w as default};
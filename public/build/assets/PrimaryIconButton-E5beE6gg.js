import{j as i}from"./app-CtPP1DNG.js";function d({className:u="",href:t,disabled:e=!1,gray:p=!1,blocked:c=!1,children:n="texto",rounded:m=!1,icon:s,onClick:r,type:f="button"}){const a=o=>{if(r&&r(o),e){o.preventDefault();return}t&&!o.defaultPrevented&&(o.preventDefault(),window.location.href=t)},l=`
        flex px-4 py-4 gap-2 items-center  min-h-10 rounded-md bg-primary text-sm text-white font-body hover:bg-primary-200 transition-colors duration-300 ease-out 
        ${e?"pointer-events-none !text-neutralcolors-200 opacity-40 cursor-not-allowed":""}
        ${m?"!rounded-full":""}
        ${c?"!bg-primary-900":""}
        ${u}
    `;return t&&!e?i.jsxs("a",{href:t,onClick:a,className:l,role:"button",children:[s,n]}):i.jsxs("button",{className:l,disabled:e,onClick:a,type:f,children:[s,n]})}export{d as P};

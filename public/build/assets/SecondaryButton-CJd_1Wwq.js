import{j as i}from"./app-CtPP1DNG.js";function y({className:u="",href:r,disabled:t=!1,blocked:c=!1,children:o="texto",rounded:p=!1,gray:m=!1,center:f=!0,icon:n,onClick:a,type:x="button"}){const s=e=>{if(a&&a(e),t){e.preventDefault();return}r&&!e.defaultPrevented&&(e.preventDefault(),window.location.href=r)},l=`flex px-4 py-2 gap-2 items-center min-w-32 min-h-8 rounded-md bg-transparent border-primary text-primary border-2 font-body hover:bg-primary hover:text-white transition-colors duration-300 ease-out
        ${p?"!rounded-full":""}
        ${f?"justify-center":""}
        ${m?"!border-neutralcolors-100 !text-neutralcolors-300 hover:!bg-transparent hover:text-neutralcolors-200":""}
        ${c?"!border-primary-900 text-primary-900 hover:!bg-primary-900":""}
        ${t?"cursor-not-allowed !text-neutralcolors-200 opacity-40":""}
        ${u}`;return r&&!t?i.jsxs("a",{href:r,onClick:s,className:l,role:"button",children:[n,o]}):i.jsxs("button",{className:l,disabled:t,onClick:s,type:x,children:[n,o]})}export{y as S};

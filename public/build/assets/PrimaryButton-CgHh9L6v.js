import{j as l}from"./app-CtPP1DNG.js";function d({className:u="",href:t,disabled:e=!1,gray:m=!1,blocked:c=!1,children:o="texto",rounded:f=!1,center:p=!1,icon:n,onClick:s,type:x="button"}){const a=r=>{if(s&&s(r),e){r.preventDefault();return}t&&!r.defaultPrevented&&(r.preventDefault(),window.location.href=t)},i=`flex px-2 py-2 sm:px-4 sm:py-2 gap-2 items-center min-w-fit sm:min-w-32 sm:min-h-8 rounded-md bg-primary text-sm text-white font-body hover:bg-primary-200 transition-colors duration-300 ease-out
        ${m?"!bg-neutralcolors-100 !text-neutralcolors-400 dark:!bg-gray-900 dark:!text-white":""}
        ${f?"!rounded-full":""}
        ${p?"justify-center":""}
        ${c?"!bg-primary-900":""}
        ${e?"cursor-not-allowed  !text-neutralcolors-200 opacity-40":""}
        ${u}`;return t&&!e?l.jsxs("a",{href:t,onClick:a,className:i,role:"button",children:[n,o]}):l.jsxs("button",{className:i,disabled:e,onClick:a,type:x,children:[n,o]})}export{d as P};

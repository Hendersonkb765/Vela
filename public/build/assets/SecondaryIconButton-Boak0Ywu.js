import{j as i}from"./app-CtPP1DNG.js";function b({className:u="",href:r,disabled:e=!1,gray:c=!1,blocked:m=!1,children:o,rounded:p=!1,icon:n,onClick:a,type:f="button"}){const s=t=>{if(a&&a(t),e){t.preventDefault();return}r&&!t.defaultPrevented&&(t.preventDefault(),window.location.href=r)},l=`
        flex px-4 py-4 gap-2 items-center w-fit min-h-10 min-w-10 rounded-md border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 ease-out cursor-pointer
        ${c?"!border-neutralcolors-100 !text-neutralcolors-200 hover:!bg-transparent hover:text-neutralcolors-200":""}
        ${p?"!rounded-full":""}
        ${m?"!border-primary-900 text-primary-900 hover:!bg-primary-900":""}
        ${e?"pointer-events-none !text-neutralcolors-200 opacity-40 cursor-not-allowed":""}
        ${u}
    `;return r&&!e?i.jsxs("a",{href:r,onClick:s,className:l,role:"button",children:[n,o]}):i.jsxs("button",{className:l,disabled:e,onClick:s,type:f,children:[n,o]})}export{b as S};

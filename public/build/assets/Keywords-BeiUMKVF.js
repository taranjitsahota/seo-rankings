import{j as s,S as l}from"./app-pM1GIizI.js";import{A as t}from"./AuthenticatedLayout-DhOoM7pW.js";import"./ApplicationLogo-BtZLCrT9.js";import"./transition--ojk00m8.js";function x({auth:r,projects:i}){return s.jsxs(t,{user:r.user,header:s.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Keywords"}),children:[s.jsx(l,{title:"Keywords"}),s.jsxs("div",{className:"p-6 bg-white rounded shadow",children:[s.jsx("h2",{className:"text-xl font-bold mb-4",children:"All Keywords"}),i.map(e=>s.jsxs("div",{className:"border p-4 mb-4 rounded",children:[s.jsx("h3",{className:"font-semibold",children:e.name}),s.jsx("ul",{className:"list-disc pl-6",children:e.keywords.map(d=>s.jsx("li",{children:d.keyword},d.id))})]},e.id))]})]})}export{x as default};

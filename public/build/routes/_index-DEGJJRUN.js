import{f as y,h as C}from"/build/_shared/chunk-GMR6CM35.js";import{c as n,d as v,e as l}from"/build/_shared/chunk-DWFMXSZ6.js";var p=n(v(),1);var F=y`
  query GetAllCountries {
    countries {
      code
      name
      emoji
    }
  }
`,E=e=>y`
    query {
        countries(filter: { name: { regex: "^${e}" } }) {
        code
        name
        currency
        capital
        states {
          name
        }
        subdivisions {
          name
        }
        languages {
          code
          name
        }
      }
    }
`,V=y`
  query {
    countries(filter: { name: { regex: "^Argentina" } }) {
      code
      name
      currency
    }
  }
`;var k=n(v(),1),t=n(l(),1);function b(e){let[r,m]=(0,k.useState)(!1);return(0,t.jsxs)("div",{className:"w-1/5 h-full rounded-md border-white border-2 bg-white p-4 m-4 shadow-lg shadow-cyan-500/50 min-w-64",children:[(0,t.jsxs)("h1",{className:"text-center capitalize hover:uppercase text-cyan-500 text-xl pb-2",children:[e.country.name," ",e.country.emoji]}),(0,t.jsxs)("p",{className:"break-words",children:[(0,t.jsx)("span",{className:"font-bold",children:"Currency:"})," ",e.country.currency]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{className:"font-bold",children:"Country code:"})," ",e.country.code]}),(0,t.jsxs)("p",{className:"break-words",children:[(0,t.jsx)("span",{className:"font-bold",children:"Capital:"})," ",e.country.capital]}),(0,t.jsxs)("p",{className:"break-words",children:[(0,t.jsx)("span",{className:"font-bold",children:"Languages:"})," ",e.country.languages.map(i=>i.name).join(", ")]}),(0,t.jsx)("p",{className:"text-right text-sky-700 underline cursor-pointer italic",onClick:()=>m(!r),children:r?"Hide":"Show more"}),r&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{className:"font-bold",children:"States:"}),(0,t.jsx)("ul",{className:"text-xs text-right",children:e.country.states.map((i,c)=>(0,t.jsx)("li",{children:i.name},`state-${c}`))}),(0,t.jsxs)("p",{className:"text-left tracking-widest font-extrabold",children:["Total states: ",e.country.states?.length]}),(0,t.jsx)("hr",{}),(0,t.jsx)("p",{className:"font-bold",children:"Subdivisions:"}),(0,t.jsx)("ul",{className:"text-xs text-right",children:e.country.subdivisions.map((i,c)=>(0,t.jsx)("li",{children:i.name},`subd-${c}`))}),(0,t.jsxs)("p",{className:"text-left tracking-widest font-extrabold",children:["Total Subdivisions: ",e.country.subdivisions?.length]})]})]},e.country.code)}var x=n(v(),1),u=n(l(),1);function g(e){let[r,m]=(0,x.useState)("");(0,x.useEffect)(()=>{let d=e.searchValue.split(" ").map(f=>f!==""&&f[0].toUpperCase()+f.slice(1,f.length)).join(" ");m(d)},[e.searchValue]);let{loading:i,error:c,data:h}=C(E(r));return e.searchValue?i?(0,u.jsx)("p",{className:"text-white text-center",children:"Loading..."}):c?(0,u.jsxs)("p",{className:"text-white text-center",children:["Error : ",c.message]}):h.countries.length?(0,u.jsx)("div",{className:"flex justify-center w-full flex-wrap",children:h?.countries?.map((d,f)=>(0,u.jsx)(b,{country:d},`country-${f}`))}):(0,u.jsx)("p",{className:"text-white text-center",children:"No country matching data"}):(0,u.jsx)("p",{className:"text-white text-center",children:"Enter a country name and search!"})}var a=n(l(),1);function N(){return(0,a.jsx)("div",{className:"text-slate-300 bg-cyan-700 object-bottom p-4",children:(0,a.jsxs)("div",{className:"flex flex-row justify-evenly",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{children:"This app it's build with:"}),(0,a.jsxs)("ul",{className:"ml-4",children:[(0,a.jsx)("li",{children:"React v18+"}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"underline",href:"https://tailwindcss.com",target:"_blank",rel:"noreferrer",children:"tailwindcss"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"underline",href:"https://remix.run/",target:"_blank",rel:"noreferrer",children:"Remix"})}),(0,a.jsx)("li",{children:"graphql + apollo"}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://github.com/trevorblades/countries",target:"_blank",rel:"noreferrer",className:"underline",children:"trevorblades API"})})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{children:"About:"}),(0,a.jsxs)("ul",{className:"ml-4",children:[(0,a.jsx)("li",{children:"Hi! I'm Jafi"}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://jafibravin.com",target:"_blank",rel:"noreferrer",className:"underline",children:"jafibravin.com"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://github.com/jafidiesel/country-app",target:"_blank",rel:"noreferrer",className:"underline",children:"This code"})})]})]})]})})}var s=n(l(),1);function w(e){return(0,s.jsx)("form",{onSubmit:r=>e.search(r),children:(0,s.jsx)("div",{className:"flex justify-center mb-4",children:(0,s.jsxs)("div",{className:"mt-6 flex flex-wrap justify-center max-w-md gap-x-4 mx-4 gap-y-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"country-input",className:"sr-only",children:"Enter your country"}),(0,s.jsx)("input",{value:e.value,onChange:r=>e.setValue(r.target.value),placeholder:"Enter country name",id:"country-input",name:"text",type:"text",required:!0,className:"min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6 shadow-lg shadow-cyan-500/50"})]}),(0,s.jsxs)("div",{className:"w-100 flex justify-evenly gap-4",children:[(0,s.jsx)("button",{type:"submit",className:"flex-none rounded-md bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 shadow-lg shadow-cyan-500/50 animate-pulse",children:"search"}),(0,s.jsx)("button",{type:"button",className:"flex-none rounded-md bg-cyan-800 px-3.5 py-2.5 text-sm font-semibold text-slate-200 shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500",onClick:e.clear,children:"clear"})]})]})})})}var o=n(l(),1),T=()=>[{title:"Country App"},{name:"description",content:"Country App"}];function S(){let[e,r]=(0,p.useState)(""),[m,i]=(0,p.useState)(""),c=d=>{d&&d.preventDefault(),i(e)},h=()=>{i(""),r("")};return(0,p.useEffect)(()=>{r("")},[]),(0,o.jsx)("div",{className:"bg-gray-900",children:(0,o.jsxs)("div",{className:"h-auto min-h-screen flex flex-col justify-between",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{className:"text-white text-5xl text-center antialiased tracking-widest underline decoration-wavy decoration-cyan-400 decoration-2 mb-4",children:"Country explorer"}),(0,o.jsx)("div",{id:"presentation",className:"flex flex-col text-white items-center",children:(0,o.jsx)("div",{className:"w-9/12",children:(0,o.jsxs)("p",{className:"text-center",children:["A simple country explorer that provide small amount of data, courtesy of ",(0,o.jsx)("a",{href:"https://trevorblades.com",target:"_blank",rel:"noreferrer",className:"underline",children:"trevorblades.com"})]})})}),(0,o.jsx)(w,{search:c,setValue:r,value:e,clear:h}),!!m&&(0,o.jsx)(g,{searchValue:m})]}),(0,o.jsx)(N,{})]})})}export{S as default,T as meta};

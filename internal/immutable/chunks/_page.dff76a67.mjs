const a=async({fetch:s})=>{const t=async()=>(await(await s("https://dummyjson.com/products?limit=10&skip=10&select=title,price")).json()).products,e=async()=>(await(await s("https://dummyjson.com/users?limit=5&skip=10&select=firstName,age")).json()).users;return{products:t(),users:e()}},c=Object.freeze(Object.defineProperty({__proto__:null,load:a},Symbol.toStringTag,{value:"Module"}));export{c as _,a as l};

var n=Object.defineProperty;var a=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var p=Object.prototype.hasOwnProperty;var u=(s,e)=>{for(var r in e)n(s,r,{get:e[r],enumerable:!0})},d=(s,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of c(e))!p.call(s,t)&&t!==r&&n(s,t,{get:()=>e[t],enumerable:!(o=a(e,t))||o.enumerable});return s};var l=s=>d(n({},"__esModule",{value:!0}),s);var w={};u(w,{default:()=>i});module.exports=l(w);var i=class{constructor(s){this.octokit=s}async sendMessage(s){let{owner:e,repo:r,title:o,body:t}=s;return!e||!r||!o?{status:422,message:"Missing required parameters",errors:{owner:!e,repo:!r,title:!o}}:await this.octokit.request("POST /repos/{owner}/{repo}/issues",{owner:e,repo:r,title:o,body:t})}};0&&(module.exports={});

(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(5),c=n.n(s),i=(n(10),n(4)),l=n(2),o=(n(11),n(0)),d=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(""),d=Object(l.a)(i,2),j=d[0],r=d[1],u=Object(a.useState)(""),m=Object(l.a)(u,2),x=m[0],b=m[1];return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:s,amount:j,date:new Date(x)};e.onSaveExpenseData(n),c(""),r(""),b("")},children:[Object(o.jsxs)("div",{className:"new-expense__controls",children:[Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Title"}),Object(o.jsx)("input",{type:"text",value:s,onChange:function(e){c(e.target.value)}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Amount"}),Object(o.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:j,onChange:function(e){r(e.target.value)}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Date"}),Object(o.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:x,onChange:function(e){b(e.target.value)}})]})]}),Object(o.jsx)("div",{className:"new-expense__actions",children:Object(o.jsx)("button",{type:"submit",children:"Add Expense"})})]})},j=(n(13),function(e){return Object(o.jsx)("div",{className:"new-expense",children:Object(o.jsx)(d,{onSaveExpenseData:function(t){var n=Object(i.a)(Object(i.a)({},t),{},{id:Math.random().toString()});console.log(n),e.onAddExpense(n)}})})}),r=(n(14),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(o.jsxs)("div",{className:"expense-date",children:[Object(o.jsx)("div",{className:"expense-date__month",children:t}),Object(o.jsx)("div",{className:"expense-date__year",children:a}),Object(o.jsx)("div",{className:"expense-date__day",children:n})]})}),u=(n(15),function(e){var t="card "+e.className;return Object(o.jsx)("div",{className:t,children:e.children})}),m=(n(16),function(e){var t=Object(a.useState)(e.title),n=Object(l.a)(t,2),s=n[0],c=n[1];console.log("ExpenseItem evaluated by React");return Object(o.jsxs)(u,{className:"expense-item",children:[Object(o.jsx)(r,{date:e.date}),Object(o.jsxs)("div",{className:"expense-item__description",children:[Object(o.jsx)("h2",{children:s}),Object(o.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]}),Object(o.jsx)("button",{onClick:function(){c("Updated!"),console.log(s)},children:"Change Title"})]})}),x=(n(17),function(e){return Object(o.jsxs)(u,{className:"expenses",children:[Object(o.jsx)(m,{title:e.items[0].title,amount:e.items[0].amount,date:e.items[0].date}),Object(o.jsx)(m,{title:e.items[1].title,amount:e.items[1].amount,date:e.items[1].date}),Object(o.jsx)(m,{title:e.items[2].title,amount:e.items[2].amount,date:e.items[2].date}),Object(o.jsx)(m,{title:e.items[3].title,amount:e.items[3].amount,date:e.items[3].date})]})}),b=function(){var e=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];return Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{onAddExpense:function(e){console.log("In App.js"),console.log(e)}}),Object(o.jsx)(x,{items:e})]})};c.a.render(Object(o.jsx)(b,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.3d007f23.chunk.js.map
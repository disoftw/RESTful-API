(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{732:function(e,t,a){"use strict";a.r(t);var s=a(70),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"pagination-and-partial-response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pagination-and-partial-response"}},[e._v("#")]),e._v(" Pagination and Partial Response")]),e._v(" "),a("p",[e._v("The idea here is not to return every resource in the database. Your API should have enough agility to let the user customize the request with optional parameters to get exactly what they need, both in terms of types and amount.")]),e._v(" "),a("p",[e._v("This is especially important in mobile apps, where bandwidth and resources are limited.")]),e._v(" "),a("h2",{attrs:{id:"partial-response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#partial-response"}},[e._v("#")]),e._v(" Partial Response")]),e._v(" "),a("p",[e._v("To make a query take only specified parameters, use optional query fields. Using a comma-delimited list of fields is common. For example, let's build a query that will only take the user's name, status, and the avatar.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("http://api.example.com/users?fields=name,status,avatar\n\n")])])]),a("p",[e._v("In this case, it only returns 3 parameters of the user's collection. However, in the absence of the fields, it may return more than 100 parameters, which is unnecessary for us if we are just going to list all the users.")]),e._v(" "),a("h2",{attrs:{id:"pagination"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pagination"}},[e._v("#")]),e._v(" Pagination")]),e._v(" "),a("p",[e._v("Imagine you want to fetch a collection resource which has more than a million entries. It is a bad idea to fetch all at once, as the user can only see 10-20 entries on their devices. "),a("strong",[e._v("Pagination")]),e._v(" can solve this problem.\nThere are two parameters for this: "),a("strong",[e._v("offset")]),e._v(" and "),a("strong",[e._v("limit")]),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("offset identifies from which entry the fetching should start")]),e._v(" "),a("li",[e._v("limit identifies how many entries should be returned, starting from the offset")])]),e._v(" "),a("p",[e._v("So, to get 20 entries per request the query should be like:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("http://api.example.com/users?offset=0&limit=20\nhttp://api.example.com/users?offset=20&limit=20\n...\n\n")])])]),a("blockquote",[a("p",[e._v("It is good practice to set a default limit and offset for your collection URIs, so if the limit and offset are not specified, there will not be a heavy load put on the server. For example, you can set the default limit to 10 and set the offset to 0.")])])])}),[],!1,null,null,null);t.default=i.exports}}]);
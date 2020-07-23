(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{755:function(e,a,s){"use strict";s.r(a);var t=s(70),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"consistencia-de-nombramiento"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consistencia-de-nombramiento"}},[e._v("#")]),e._v(" Consistencia de nombramiento")]),e._v(" "),s("p",[e._v("Existen algunas reglas generales que te ayudaran a manetener tu REST API consistente y mantenible.")]),e._v(" "),s("h2",{attrs:{id:"siempre-usa-el-slash-para-separar-las-porciones-de-tus-secciones"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#siempre-usa-el-slash-para-separar-las-porciones-de-tus-secciones"}},[e._v("#")]),e._v(" Siempre usa el slash (/) para separar las porciones de tus secciones.")]),e._v(" "),s("p",[e._v("La siguiente caracteristica del slash definira la relación jerárquica de los recursos.")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:""}},[e._v("http://api.example.com/users/{id}/posts")])])]),e._v(" "),s("h2",{attrs:{id:"nunca-use-la-barra-diagonal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nunca-use-la-barra-diagonal"}},[e._v("#")]),e._v(" Nunca use la barra diagonal (/)")]),e._v(" "),s("p",[e._v("Las barras diagonales no hacen nada y pueden ser confusas. Es mejor dejarlas completamente.")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:""}},[e._v("http://api.example.com/users/{id}/posts/")]),e._v(" "),s("strong",[e._v("Bad")])])]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:""}},[e._v("http://api.example.com/users/{id}/posts")]),e._v(" "),s("strong",[e._v("Good")])])]),e._v(" "),s("h2",{attrs:{id:"los-guiones-son-buena-eleccion-para-separar-palabras"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#los-guiones-son-buena-eleccion-para-separar-palabras"}},[e._v("#")]),e._v(" Los guiones (-) son buena elección para separar palabras.")]),e._v(" "),s("p",[e._v("Los guiones ayudan a los usuarios a escanear y leer rápidamente, especialmente en los nombres de los URI.")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:""}},[e._v("http://api.example.com/users/accessLevels")]),e._v(" "),s("strong",[e._v("Bad")])])]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:""}},[e._v("http://api.example.com/users/access-levels")]),e._v(" "),s("strong",[e._v("Good")])])]),e._v(" "),s("p",[e._v("Es posible utilizar guiones bajos en vez de los guiones, pero en algunos casos (basados en los fondos de los sistemas) no son claramente visibles y son inaceptables en los URIs")]),e._v(" "),s("h2",{attrs:{id:"usando-siempre-letras-minusculas-en-los-caminos-uri-siempre-es-preferible-sin-embargo-el-componente-host-puede-estar-en-mayusculas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usando-siempre-letras-minusculas-en-los-caminos-uri-siempre-es-preferible-sin-embargo-el-componente-host-puede-estar-en-mayusculas"}},[e._v("#")]),e._v(" Usando siempre letras minúsculas en los caminos URI siempre es preferible. Sin embargo, el componente host puede estar en mayúsculas.")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:""}},[e._v("http://api.example.org/home/my-file")])])]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:""}},[e._v("HTTP://API.EXAMPLE.ORG/home/my-file")])])]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:""}},[e._v("http://api.example.org/Home/My-File")])])]),e._v(" "),s("p",[e._v("En el ejemplo de arriba, las tres son el mismo API, pero la tercera puede ocasionar problemas por la implementación y el tipo de servidor.")]),e._v(" "),s("h2",{attrs:{id:"nunca-use-extenciones-de-archivos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nunca-use-extenciones-de-archivos"}},[e._v("#")]),e._v(" Nunca use extenciones de archivos.")]),e._v(" "),s("p",[e._v("Se ven mal en los URIs y solo los hacen más largos.")]),e._v(" "),s("p",[e._v("Utilice otro tipo de metodos para determinar el tipo de archivo; no te confies de las extensiones.")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:""}},[e._v("http://api.example.com/files/license.pdf")]),e._v(" "),s("strong",[e._v("Bad")])])]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:""}},[e._v("http://api.example.com/files/license.pdf")]),e._v(" "),s("strong",[e._v("Bad")])])]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:""}},[e._v("http://api.example.com/files/license")]),e._v(" "),s("strong",[e._v("Good")])])]),e._v(" "),s("h2",{attrs:{id:"siempre-use-los-componentes-de-consulta-para-filtrar-la-coleccion-de-uri"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#siempre-use-los-componentes-de-consulta-para-filtrar-la-coleccion-de-uri"}},[e._v("#")]),e._v(" Siempre use los componentes de consulta para filtrar la colección de URI.")]),e._v(" "),s("p",[e._v("Use los componentes de consulta (?, &) para ordenar, o de otros parametros a su URI. Nunca cree un nuevo URI para archivarlo.")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:""}},[e._v("http://api.example.com/projects/{id}/run?lang=cpp")])])]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:""}},[e._v("http://api.example.com/projects/{id}/run?lang=cpp&type=gcc")])])]),e._v(" "),s("h2",{attrs:{id:"nunca-use-las-funciones-de-nombre-crud"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nunca-use-las-funciones-de-nombre-crud"}},[e._v("#")]),e._v(" Nunca use las funciones de nombre CRUD")]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Nada en la URI debería indicar que acción se esta ejecutando.")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("GET")]),e._v(" "),s("a",{attrs:{href:""}},[e._v("http://api.example.com/users/")]),e._v(" // Get all users")])]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("POST")]),e._v(" "),s("a",{attrs:{href:""}},[e._v("http://api.example.com/users/")]),e._v(" // Create new user")])]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("GET")]),e._v(" "),s("a",{attrs:{href:""}},[e._v("http://api.example.com/users/{id}")]),e._v(" // Get the user with Id")])]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("PUT")]),e._v(" "),s("a",{attrs:{href:""}},[e._v("http://api.example.com/users/{id}")]),e._v(" // Update the user with Id")])]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("DELETE")]),e._v(" "),s("a",{attrs:{href:""}},[e._v("http://api.example.com/users/{id}")]),e._v(" // Delete the user with Id")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);
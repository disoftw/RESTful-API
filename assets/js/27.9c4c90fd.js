(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{748:function(e,o,s){"use strict";s.r(o);var t=s(70),r=Object(t.a)({},(function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"operacion-de-parches-patch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#operacion-de-parches-patch"}},[e._v("#")]),e._v(" Operación de parches (PATCH)")]),e._v(" "),s("p",[s("strong",[e._v("PATCH")]),e._v(" se utiliza para "),s("strong",[e._v("modificar")]),e._v(" capacidades. La solicitud PATCH solo necesita contener los cambios en el recurso, no el recurso "),s("strong",[e._v("completo")]),e._v(".")]),e._v(" "),s("p",[e._v("Esto se parece a "),s("strong",[e._v("PUT")]),e._v(", pero el cuerpo contiene un conjunto de instrucciones que describen cómo se debe modificar un recurso que actualmente reside en el servidor para producir una nueva versión. Esto significa que el cuerpo de PATCH no solo debe ser una parte modificada del recurso, sino también en algún tipo de lenguaje de parche como JSON Patch o XML Patch.")]),e._v(" "),s("p",[s("strong",[e._v("PATCH")]),e._v(" no es seguro ni "),s("strong",[e._v("idempotente")]),e._v(". Sin embargo, una solicitud PATCH se puede emitir de manera tal que sea "),s("strong",[e._v("idempotente")]),e._v(", lo que también ayuda a evitar malos resultados de colisiones entre dos solicitudes PATCH en el mismo recurso en un período de tiempo similar.")]),e._v(" "),s("p",[e._v("Las colisiones de múltiples solicitudes PATCH pueden ser más peligrosas que las colisiones PUT porque algunos formatos de parches deben operar desde un punto base conocido o de lo contrario dañarán el recurso.")]),e._v(" "),s("p",[e._v("Algunas respuestas validas para este metodos son:")]),e._v(" "),s("p",[s("strong",[e._v("200 (OK)")]),e._v(" o "),s("strong",[e._v("204 (No Content)")]),e._v(". "),s("strong",[e._v("404 (Not Found)")]),e._v(", si el ID no fue encontrado o es inválido.")]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Ejemplos")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("PATCH")]),e._v(" "),s("a",{attrs:{href:""}},[e._v("http://www.example.com/customers/12345")])]),e._v(" "),s("p",[s("strong",[e._v("PATCH")]),e._v(" "),s("a",{attrs:{href:""}},[e._v("http://www.example.com/customers/12345/orders/98765")])]),e._v(" "),s("p",[s("strong",[e._v("PATCH")]),e._v(" "),s("a",{attrs:{href:""}},[e._v("http://www.example.com/buckets/secret_stuff")])])])])])}),[],!1,null,null,null);o.default=r.exports}}]);
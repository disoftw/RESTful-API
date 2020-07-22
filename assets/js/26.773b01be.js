(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{747:function(e,r,a){"use strict";a.r(r);var s=a(70),o=Object(s.a)({},(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"borrar-operacion-delete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#borrar-operacion-delete"}},[e._v("#")]),e._v(" Borrar operación (DELETE)")]),e._v(" "),a("p",[a("strong",[e._v("Borrar")]),e._v(" una operación se utiliza para eliminar un recurso identificado por un URI.")]),e._v(" "),a("p",[e._v("Una eliminación exitosa, regresaun codigo de estado HTTP "),a("strong",[e._v("200 (OK)")]),e._v(", junto con la respuesta, quizas la representación del item eliminado (a veces demanda mucho bandwidth), o una respuesta envuelta. Alternativamente, regresa un estatus HTTP 204 (NO CONTENT) sin cuerpo de respuesta.")]),e._v(" "),a("p",[e._v("Las operaciones "),a("strong",[e._v("borrar")]),e._v(" son "),a("strong",[e._v("idempotentes")]),e._v(". Si "),a("strong",[e._v("borras")]),e._v(" un recurso, se elimina.")]),e._v(" "),a("p",[e._v("Llamar repetidamente "),a("strong",[e._v("DELETE")]),e._v(" en ese recurso termina igual; el recurso se va.")]),e._v(" "),a("p",[e._v("Por ejemplo, si llamar "),a("strong",[e._v("DELETE")]),e._v(" decrementa un contador (dentro de un recurso) la llamada "),a("strong",[e._v("borrar")]),e._v(" no será más idemponente. El uso de estadisticas y mediciones se podrá actualizar mientras se siga considerando el servicio idemponente mientras ningún dato del recurso sea cambiado. Es recomendado utilizar "),a("strong",[e._v("POST")]),e._v(" para las solicitudes de recursos no idemponentes.")]),e._v(" "),a("p",[a("strong",[e._v("Ejemplos")])]),e._v(" "),a("blockquote",[a("p",[e._v("DELETE http://www.example.com/users/11111")])]),e._v(" "),a("blockquote",[a("p",[e._v("DELETE http://www.example.com/users/11111/posts/222")])])])}),[],!1,null,null,null);r.default=o.exports}}]);
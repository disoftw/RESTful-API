(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{740:function(e,a,o){"use strict";o.r(a);var r=o(70),n=Object(r.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"codigos-de-estado-http"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#codigos-de-estado-http"}},[e._v("#")]),e._v(" Códigos de estado HTTP")]),e._v(" "),o("p",[e._v("Las API REST usan la parte de la línea de estado de un mensaje de respuesta HTTP para informar a los clientes del resultado general de su solicitud.")]),e._v(" "),o("p",[e._v("HTTP define cuarenta códigos de estado estándar que se pueden usar para transmitir los resultados de la solicitud de un cliente. Los códigos de estado se dividen en las cinco categorías que se presentan a continuación.")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("CATEGORÍA")]),e._v(" "),o("th",[e._v("DESCRIPCIÓN")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[e._v("1xx: informativo")])]),e._v(" "),o("td",[e._v("Comunica la transferencia de información a nivel de protocolo.")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("2xx: éxito")])]),e._v(" "),o("td",[e._v("Indica que la solicitud del cliente fue aceptada con éxito.")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("3xx: redireccionamiento")])]),e._v(" "),o("td",[e._v("Indica que el cliente debe tomar alguna medida adicional para completar su solicitud.")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("4xx: error del cliente")])]),e._v(" "),o("td",[e._v("Esta categoría de códigos de estado de error señala a los clientes.")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("5xx: error del servidor")])]),e._v(" "),o("td",[e._v("El servidor asume la responsabilidad de estos códigos de estado de error.")])])])]),e._v(" "),o("p",[e._v("Ahora, observe el subconjunto de códigos que se aplican principalmente al diseño de una API REST, con más detalle.")]),e._v(" "),o("h2",{attrs:{id:"_200-ok"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_200-ok"}},[e._v("#")]),e._v(" 200 (OK)")]),e._v(" "),o("p",[e._v("Indica que la API REST realizó con éxito cualquier acción solicitada por el cliente y que no es apropiado más código específico en la serie 2xx.")]),e._v(" "),o("p",[e._v("A diferencia del código de estado 204, una respuesta 200 debe incluir un cuerpo de respuesta. La información devuelta con la respuesta depende del método utilizado en la solicitud, por ejemplo:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("GET")]),e._v(" una entidad correspondiente al recurso solicitado se envía en la respuesta;")]),e._v(" "),o("li",[o("strong",[e._v("HEAD")]),e._v(" los campos de encabezado de entidad correspondientes al recurso solicitado se envían en la respuesta sin ningún cuerpo de mensaje;")]),e._v(" "),o("li",[o("strong",[e._v("POST")]),e._v(" una entidad que describa o contenga el resultado de la acción;")]),e._v(" "),o("li",[o("strong",[e._v("TRACE")]),e._v(" una entidad que contiene el mensaje de solicitud tal como lo recibió el servidor final.")])]),e._v(" "),o("h2",{attrs:{id:"_201-created"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_201-created"}},[e._v("#")]),e._v(" 201 (Created)")]),e._v(" "),o("p",[e._v("Una API REST responde con el código de estado "),o("strong",[e._v("201")]),e._v(" cada vez que se crea un recurso dentro de una colección. También puede haber ocasiones en que se cree un nuevo recurso como resultado de alguna acción del controlador, en cuyo caso 201 también sería una respuesta apropiada.")]),e._v(" "),o("h2",{attrs:{id:"_204-no-content"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_204-no-content"}},[e._v("#")]),e._v(" 204 (No Content)")]),e._v(" "),o("p",[e._v("El código "),o("strong",[e._v("204")]),e._v(" de estado se envía generalmente en respuesta a una "),o("strong",[e._v("PUT")]),e._v(", "),o("strong",[e._v("POST")]),e._v(" o "),o("strong",[e._v("DELETE")]),e._v(" la solicitud cuando la API REST se niega a devolver cualquier mensaje de estado o representación en el cuerpo del mensaje de respuesta.")]),e._v(" "),o("h2",{attrs:{id:"_304-not-modified"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_304-not-modified"}},[e._v("#")]),e._v(" 304 (Not Modified)")]),e._v(" "),o("p",[e._v('Este código de estado es similar a 204 ("Sin contenido") en que el cuerpo de la respuesta debe estar vacío. La distinción crítica es que 204 se usa cuando no hay nada que enviar en el cuerpo, mientras que 304 se usa cuando el recurso no se ha modificado desde la versión especificada por los encabezados de solicitud If-Modified-Since o If-None-Match.')]),e._v(" "),o("h2",{attrs:{id:"_400-bad-request"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_400-bad-request"}},[e._v("#")]),e._v(" 400 (Bad Request)")]),e._v(" "),o("p",[e._v("400 es el estado de error genérico del lado del cliente, que se utiliza cuando no es apropiado ningún otro código de error 4xx. Los errores pueden ser sintaxis de solicitud con formato incorrecto, parámetros de mensaje de solicitud no válidos o enrutamiento de solicitud engañoso, etc.")]),e._v(" "),o("p",[e._v("El cliente NO DEBE repetir la solicitud sin modificaciones.")]),e._v(" "),o("h2",{attrs:{id:"_401-unauthorized"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_401-unauthorized"}},[e._v("#")]),e._v(" 401 (Unauthorized)")]),e._v(" "),o("p",[e._v("Una respuesta de error 401 indica que el cliente intentó operar en un recurso protegido sin proporcionar la autorización adecuada. Puede haber proporcionado las credenciales incorrectas o ninguna. La respuesta debe incluir un campo de encabezado WWW-Authenticate que contenga un desafío aplicable al recurso solicitado.")]),e._v(" "),o("p",[e._v("El cliente PUEDE repetir la solicitud con un campo de encabezado de autorización adecuado. Si la solicitud ya incluía credenciales de autorización, la respuesta 401 indica que se ha rechazado la autorización para esas credenciales. Si la respuesta 401 contiene el mismo desafío que la respuesta anterior, y el agente de usuario ya ha intentado la autenticación al menos una vez, entonces el usuario DEBE presentar la entidad que se le dio en la respuesta, ya que esa entidad podría incluir información de diagnóstico relevante.")]),e._v(" "),o("h2",{attrs:{id:"_403-forbidden"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_403-forbidden"}},[e._v("#")]),e._v(" 403 (Forbidden)")]),e._v(" "),o("p",[e._v('Una respuesta de error 403 indica que la solicitud del cliente se formó correctamente, pero la API REST se niega a cumplirla, es decir, el usuario no tiene los permisos necesarios para el recurso. Una respuesta 403 no es un caso de credenciales de cliente insuficientes; eso sería 401 ("No autorizado").')]),e._v(" "),o("p",[e._v("La autenticación no ayudará, y la solicitud NO DEBE repetirse. A diferencia de una respuesta 401 no autorizada, la autenticación no hará ninguna diferencia.")]),e._v(" "),o("h2",{attrs:{id:"_404-not-found"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_404-not-found"}},[e._v("#")]),e._v(" 404 (Not Found)")]),e._v(" "),o("p",[e._v("El código de estado de error 404 indica que la API REST no puede asignar el URI del cliente a un recurso, pero puede estar disponible en el futuro. Se permiten solicitudes posteriores del cliente.")]),e._v(" "),o("h2",{attrs:{id:"_500-internal-server-error"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_500-internal-server-error"}},[e._v("#")]),e._v(" 500 (Internal Server Error)")]),e._v(" "),o("p",[e._v("500 es la respuesta genérica de error REST API. La mayoría de los marcos web responden automáticamente con este código de estado de respuesta cada vez que ejecutan un código de controlador de solicitudes que genera una excepción.")]),e._v(" "),o("p",[e._v("Un error 500 nunca es culpa del cliente y, por lo tanto, es razonable que el cliente vuelva a intentar la misma solicitud que activó esta respuesta y espera obtener una respuesta diferente.")]),e._v(" "),o("p",[e._v("La respuesta de la API es el mensaje de error genérico, dado cuando se encontró una condición inesperada y no es adecuado un mensaje más específico.")])])}),[],!1,null,null,null);a.default=n.exports}}]);
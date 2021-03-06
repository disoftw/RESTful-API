# ¿Qué es HTTP?
El **Protocolo** **de** **transferencia** **de** **hipertexto** (HTTP) es un **protocolo** de la capa de aplicación para transmitir **documentos** **hipermedia**

De manera predeterminada, HTTP sigue el **modelo** clásico de **cliente-servidor**, donde el cliente abre una conexión para realizar una solicitud y luego espera la respuesta del servidor.

![](/assets/http.png)

Por ejemplo, un navegador web (en la computadora cliente) puede ser el cliente y una aplicación que se ejecuta en una computadora que aloja un sitio web (la computadora servidor) puede ser el **servidor**. El cliente envía un **mensaje** **de** **solicitud** **HTTP** al servidor. El servidor, que proporciona recursos como archivos HTML y otro contenido, devuelve un **mensaje** **de** **respuesta** al cliente. La respuesta contiene información de estado de finalización sobre la solicitud y el contenido solicitado en su **body** de mensaje.

HTTP es un **protocolo** **sin** **estado**, lo que significa que el servidor no guarda ningún dato entre dos solicitudes.

**Los** **mensajes** **HTTP** son los bloques de datos enviados entre las aplicaciones HTTP. Cada mensaje contiene una solicitud de un cliente o una respuesta de un servidor. Se componen de tres partes: una **línea** **de** **inicio** que describe el mensaje, un bloque de **headers** que contienen atributos y un **body** opcional que contiene datos.

:::warning NOTA
 Probablemente haya encontrado códigos de respuesta de estado HTTP como 404 (Not Found) o 500 (Internal Server Error).
# Estructura de recursos
En REST, los datos que estamos manejando se llaman recursos (**resources**). Seguir una convención de nomenclatura coherente hace que su API sea más fácil de usar. Es importante seguir una estructura correcta para nuestros recursos.

>El resource puede ser un Singleton(instancia única) o una Colección.

Por ejemplo, un **usuario** es un singleton, pero **los usuarios** son una colección. Entonces, podemos identificar un recurso de recopilación por / **URI de usuarios** (users URI). Sin embargo, para un recurso singleton, el URI se convertirá en: **/users/{userID}**.

### subcolección de recursos
Imaginemos una subcolección de **códigos** de un **usuario único**: **/ users / {userID} / codes** Al igual que en el ejemplo anterior, se convertirá un URI de código singleton.

```
/users/{userID}/codes/{codeID}
```
Esto generalmente se refiere a la [restricción uniforme de la interfaz](2.REST_Architectural.Spanish.md), donde el mismo patrón se repite en toda la API.
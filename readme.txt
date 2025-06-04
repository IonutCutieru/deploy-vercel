Organización:
    ->images: Guarda todas las imagenes utilizadas en el proyecto
    ->index: Fichero de inicio del escaparate
    ->aboutUs: Sección que proporciona datos de la empresa
    ->carrito: Sección donde se añaden los productos a comprar
    ->loginRegister: Página iniciada por defecto para crear una cuenta
    ->script.js: Script principal asociado a index y otras funciones globales
    ->style.css: Estilo principal asociado a index y otras funciones globales
    ->productos.json: Archivo con la información y fotos de los productos

Logueo y registro de usuarios:
    Para acceder se podrá hacer o mediante la creación de una cuenta, usando una
    ya existente o incluso como invitado, en este último caso la sección "carrito" estará
    bloqueada. Funciona con validación mediante expresiones regulares que tienen los 
    siguientes requisitos:
    Usuario: El usuario debe contener solo letras y números, y tener entre 4 y 15 caracteres.
    Contraseña: La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, una minúscula y un número.

Cookies y webstorage:
    La única cookie que hay es al acceder por primera vez a la página, al aceptarla se 
    creará aunque no tiene ninguna función asignada. El webstorage almacena el nombre de usuario
    y contraseña para poder funcionar el sistema login y mostrar el nombre de usuario
    en la barra de navegación

Copyright y fuentes:
    Licencia de Distribución (Distribution License)
    https://lattafa.com Para todos los perfumes menos los dos Club de Nuit
    https://armaf.com Para los dos Club de Nuit


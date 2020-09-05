# Falabella-api
## API desarrollada en NodeJS y express. 

## Instalación

### Docker (Opción 1)

### Requisitos:

- Docker instalado

### Instrucciones de uso:

1. Descargar repositorio. <br/>
2. Verificar que el puerto 4000 se encuentre disponible. <br/>
3. Ingresar a la carpeta desde el terminal y ejecutar "make api-ini". Docker instalará todos los componentes necesarios y quedará arriba ejecutandose.<br/>

### NodeJS (Opción 2)

### Requisitos:

- Node versión 14.6.0

### Instrucciones de uso:

1. Descargar repositorio y engresar al repositorio a través del terminal. <br/>
2. Verificar que el puerto 4000 se encuentre disponible. <br/>
3. Ejecutar "npm install". Node instalará todos los componentes necesarios.<br/>
4. Ejecutar "npm start" Node levantará el servicio y quedará ejecutandose.<br/>



### Estructura de llamada
 **Consierar que para el presente ejemplo, se estableció un token estático para las consultas. Este no debe modificarse para que funcione** <br/>
 **La data enviada será almacenada en la carpeta data, dentro de un archivo de texto llamado data.txt** <br/>
<br />
Considerar los siguientes campos
```json
  "url": "http://localhost:4000/api/evaluate",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "token": "e817c8c863f6e39f1f77370305655551e4b5654d",
    "Content-Type": "application/x-www-form-urlencoded",
    "Cookie": "i18next=dev"
  },
  "data": {
    "rut": "11.111.111-1",
    "email": "correo@correo.cl",
    "x-user-browser": "Mozilla - 5.0 (Macintosh)",
    "phone": "98765432",
    "renta": "123",
    "x-user-os": "Intel Mac OS X 10.15"
  }
```




### Mas Opciones de Make para Docker:
- api-up: Levantar imágen Docker.
- api-ini: Instalar imagen y subir.
- api-reset: Reiniciar imagen.
- api-down: Bajar imágen
- api-install: Instalar imágen.


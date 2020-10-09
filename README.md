# Cognito integrado en AppSync

Este es un ejemplo simple para conectar cognito con appsync de una manera automatizada para agilizar el mantenimiento por medio del framework ```serverless```

## Para Empezar

Las siguientes instrucciones te van a servir si querés hacer deployment del mismo ejemplo de la "api" en tu cuenta de ```AWS```, **Nota:** esto no está hecho para funcionar localmente(hasta donde llega mi entendimiento, claro!).

### Prerequisitos

  1. Node V12.X
  2. AWS-CLI (instalado y configurado [click aquí](https://docs.aws.amazon.com/es_es/polly/latest/dg/setup-aws-cli.html))
  3. Serverless Framework ([instalación](https://www.serverless.com/framework/docs/providers/aws/guide/installation/))



### Deployment

Básicamente eso es todo, instalar los `node_modules` y hacer el respectivo deployment

Gran paso #1

```
npm install
```

Y gran paso #2

```
sls deploy
```

te aparecerá algo parecido al siguiente bloque

```
$ sls deploy
AppSync Plugin: GraphQl schema valid
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service sls-appsync-backend.zip file to S3 (#.## MB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
................
Serverless: Stack update finished...
Service Information
service: nombre-de-tu-servicio
stage: stage-de-tu-servicio
region: region-de-tu-servicio
stack: nombre-de-tu-servicio-stage
resources: ##
api keys:
  None
appsync api keys:
  None
endpoints:
  None
appsync endpoints:
  https://url-de-tu-servicio-appsync.region.amazonaws.com/nombre-funcion
functions:
  nombre-funcion: nombre-servicio-stage-funcion
layers:
  None
Serverless: Removing old service artifacts from S3...
```

Ahora podes manualmente a tu api en appsync y loguearte por medio de algun usuario (previamente creado en cognito) y realizar las queries, mutations en la API.


* Al principio cuesta entender un poco todo lo que hace
* Pero te acostumbras
* Solo echale ganas

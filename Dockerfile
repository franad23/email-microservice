# Usa una imagen base de Node.js para producción
FROM node:18-slim

# Define el directorio de trabajo
WORKDIR /app

# Copia los archivos transpilados y las dependencias desde la máquina local
COPY . .

# Expon el puerto en el que el servicio escuchará
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "index.js"]

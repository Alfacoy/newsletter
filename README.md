# Noticiero Online
## [Website](https://noticiero.now.sh/)

### Descripción
Es una web con noticias de distintos diarios del país. Poseé un menú que te permite moverte entre categorías.

### Actualizaciones
- Se refactoreo el código desde cero, haciéndolo más cómodo para trabajar. Asi como también se hizo responsive el menú de categorías.

- Se realiza un filtrado de noticias excluyendo a las que no traen imágenes. 

### Errores conocidos
- Al iniciar o desplazarse entre categorías se nos muestra la pantalla de error, debido a que el .env de la API_KEY no es leída por el fetch. (Se soluciona refrescando el navegador).

- Es común ver noticias similares entre categorías, como ciencia y deporte. 


### Tecnologías 
Los datos son recolectados de [NewsApi](https://newsapi.org/).

La web está construida con [Next.js](https://nextjs.org/) y hosteada en [Vercel](https://vercel.com).

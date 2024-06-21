# IDUN: Tu Compañera de Bienestar Personal

IDUN es una innovadora aplicación móvil diseñada para inspirar a las personas a llevar una vida equilibrada y llena de sorpresas, al tiempo que promueve la actividad física y la movilidad sostenible. Inspirada en la diosa nórdica de la juventud y la renovación, IDUN ofrece desafíos personalizados que invitan a los usuarios a recorrer ciertas distancias a pie o en bicicleta, utilizando la geolocalización para registrar su progreso y ofrecer una experiencia interactiva y gratificante.

## Características Principales

- **Desafíos Personalizados**: IDUN ofrece una variedad de desafíos adaptados a las preferencias y objetivos de cada usuario. Desde caminatas cortas hasta recorridos en bicicleta más largos, hay desafíos para todos los niveles de actividad.
- **Recompensa Variable Intermitente (RVI)**: Además de los desafíos, IDUN ofrece recompensas emocionantes a través de su característica de Recompensa Variable Intermitente. Los usuarios pueden recibir sorpresas y beneficios inesperados al completar sus objetivos de movimiento, añadiendo emoción y motivación adicional para participar en la aplicación.
- **Exploración y Descubrimiento**: Con una interfaz intuitiva y fácil de usar, IDUN anima a los usuarios a explorar su entorno, descubrir nuevas rutas y conectar con la comunidad mientras trabajan hacia una vida más activa y saludable.

## Tecnologías Utilizadas

- **Plataforma de Desarrollo Móvil**: IDUN utiliza React Native para una amplia cobertura de dispositivos, lo que permite desarrollar aplicaciones para iOS y Android utilizando un único código base.
- **Backend y Autenticación de Usuarios**: Firebase maneja la lógica de usuario, almacenamiento de datos, autenticación y gestión de logros. Firebase Authentication garantiza la seguridad de los usuarios mientras Firestore almacena los datos de la aplicación.
- **Geolocalización**: Se utilizan las API de geolocalización de React Native para activar la geolocalización y rastrear la actividad del usuario.
- **Notificaciones Push**: Firebase Cloud Messaging (FCM) se integra para enviar notificaciones a los usuarios cuando completen desafíos o reciban recompensas.
- **Compartir en Redes Sociales**: Se implementan las API de redes sociales para permitir que los usuarios compartan sus logros en redes sociales y puedan invitar a otros usuarios a participar en desafíos.

## Cómo Descargar e Inicializar el Proyecto

1. **Clona el Repositorio**: `git clone <url_del_repositorio>`
2. **Instala las Dependencias**: `cd IDUN && npm install`
3. **Inicia la Aplicación**: `npm start`

Esto iniciará el servidor de desarrollo de Expo. Desde aquí, puedes escanear el código QR con la aplicación Expo Go en tu dispositivo móvil para ver la aplicación en acción.

¡Disfruta de tu experiencia con IDUN y mantente activo y saludable!

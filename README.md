# Quiropractica AraZavala - PWA

Una página web progresiva (PWA) moderna y minimalista para el consultorio de quiropráctica AraZavala.

## 🌟 Características

- **Progressive Web App (PWA)**: Instalable en dispositivos móviles y de escritorio
- **Diseño Responsivo**: Funciona perfectamente en todos los dispositivos
- **Animaciones Suaves**: Scroll animado y transiciones modernas
- **Integración WhatsApp**: Agenda citas directamente por WhatsApp
- **Sin Backend**: Página estática sin necesidad de servidor

## 📱 Secciones

1. **Inicio**: Sección hero con información principal
2. **Nosotros**: Misión y servicios del consultorio
3. **Nuestra Ubicación**: Información de contacto y ubicación
4. **Historias**: Testimonios de pacientes
5. **Agendar Cita**: Integración directa con WhatsApp

## 🎨 Diseño

- **Colores**: Paleta médica profesional (azules y verdes)
- **Tipografía**: Inter y Poppins (modernas y legibles)
- **Estilo**: Minimalista y profesional

## 🚀 Cómo usar

### Desarrollo local

1. Clona el repositorio:
```bash
git clone https://github.com/azo221017m-hub/paginasPWA.git
cd paginasPWA
```

2. Inicia un servidor local:
```bash
python3 -m http.server 8080
# o usa cualquier servidor HTTP estático
```

3. Abre en tu navegador:
```
http://localhost:8080
```

### Despliegue

Puedes desplegar esta página en cualquier servicio de hosting estático:

- **GitHub Pages**: Activa GitHub Pages en la configuración del repositorio
- **Netlify**: Arrastra la carpeta del proyecto
- **Vercel**: Conecta el repositorio
- **Cualquier servidor web**: Sube los archivos al servidor

## 📂 Estructura de archivos

```
paginasPWA/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript para interactividad
├── manifest.json       # Configuración PWA
├── sw.js              # Service Worker para PWA
├── images/            # Iconos PWA
│   ├── icon-192.png
│   ├── icon-192.svg
│   ├── icon-512.png
│   └── icon-512.svg
└── README.md          # Este archivo
```

## 🔧 Personalización

### Cambiar información de contacto

Edita el archivo `index.html` y busca:
- Número de WhatsApp: `+52 123 456 7890`
- Email: `contacto@arazavala.com`
- Dirección: `Av. Principal #123`

### Cambiar colores

Edita el archivo `styles.css` y modifica las variables CSS en `:root`:
```css
:root {
    --primary-color: #2c5f7d;
    --secondary-color: #4a9d8f;
    --accent-color: #68c3b3;
    /* ... más colores */
}
```

### Integrar Google Maps

En `index.html`, busca la sección con clase `map-placeholder` y reemplázala con un iframe de Google Maps.

## 📱 PWA

Esta página es una Progressive Web App, lo que significa que:
- Se puede instalar en dispositivos móviles
- Funciona offline (después de la primera carga)
- Se comporta como una app nativa

## 🌐 Tecnologías

- HTML5
- CSS3 (Variables CSS, Grid, Flexbox, Animations)
- JavaScript ES6+ (Service Workers, Intersection Observer)
- PWA (Manifest, Service Worker)

## 📄 Licencia

Este proyecto está diseñado específicamente para Quiropractica AraZavala.

## 👨‍💻 Desarrollo

Desarrollado como una solución moderna y profesional para consultorios de quiropráctica.
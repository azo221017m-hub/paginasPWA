# Óptica Visión - PWA

Una página web progresiva (PWA) moderna y minimalista para la óptica Óptica Visión, especializada en salud visual y tecnología avanzada.

## 🌟 Características

- **Progressive Web App (PWA)**: Instalable en dispositivos móviles y de escritorio
- **Diseño Responsivo**: Funciona perfectamente en todos los dispositivos
- **Animaciones Suaves**: Scroll animado y transiciones modernas
- **Integración WhatsApp**: Sistema de citas con selección de fecha y hora
- **Sin Backend**: Página estática sin necesidad de servidor

## 📱 Secciones

1. **Inicio**: Sección hero con información principal sobre la óptica
2. **Nuestra Visión**: Misión y servicios de la óptica
3. **Toma de Graduación por Computadora**: Información sobre tecnología de graduación digital
4. **Nuestra Ubicación**: Información de contacto, horarios y ubicación
5. **Citas**: Formulario interactivo para agendar citas que envía datos por WhatsApp

## 🎨 Diseño

- **Colores**: Paleta moderna para óptica (azules y púrpura)
- **Tipografía**: Inter y Poppins (modernas y legibles)
- **Estilo**: Minimalista y profesional
- **Iconos**: SVG inline de optometría y salud visual

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
├── script.js           # JavaScript para interactividad y formularios
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
- Email: `contacto@opticavision.com`
- Dirección: `Av. Principal #123`

También actualiza el número de WhatsApp en `script.js` (línea donde se define `whatsappNumber`).

### Cambiar colores

Edita el archivo `styles.css` y modifica las variables CSS en `:root`:
```css
:root {
    --primary-color: #4A90E2;
    --secondary-color: #6B46C1;
    --accent-color: #50C878;
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
- Notificaciones push (si se configura)

## 🌐 Tecnologías

- HTML5
- CSS3 (Variables CSS, Grid, Flexbox, Animations)
- JavaScript ES6+ (Service Workers, Intersection Observer, Form Handling)
- PWA (Manifest, Service Worker)

## 📄 Licencia

Este proyecto está diseñado específicamente para Óptica Visión.

## 👨‍💻 Desarrollo

Desarrollado como una solución moderna y profesional para ópticas con tecnología avanzada.
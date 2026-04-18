# Landing Page - Psicólogo TCC

Landing page profesional para Gabriel Miriani, psicólogo especialista en Terapia Cognitivo Conductual.

## Tecnologías
- React 18
- Tailwind CSS 3
- Framer Motion (animaciones)
- Lucide React (iconos)

## Instalación

```bash
npm install
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## Estructura

```
src/
├── App.js        # Componente principal con todas las secciones
├── App.css       # Estilos personalizados (gradientes, animaciones)
├── index.js      # Entry point
└── index.css     # Estilos globales + Tailwind
```

## Personalización

Buscar y reemplazar estos placeholders en `App.js`:
- `#TU_TÍTULO_UNIVERSITARIO` - Tu título profesional
- `#TU_EMAIL` - Tu email de contacto
- `#TU_INSTAGRAM` - Tu usuario de Instagram
- `#TU_FACEBOOK` - Tu página de Facebook

## Secciones
1. **Hero** - Slider con imágenes y textos sobre temas de terapia
2. **Especialidad** - Explicación de TCC con 3 tarjetas
3. **Sobre Mí** - Foto y biografía del profesional
4. **Horarios** - Modalidad virtual y horarios de atención
5. **Contacto** - Botón WhatsApp + redes sociales

## WhatsApp
El botón de WhatsApp está configurado con el número: +54 9 11 6982-9416

Para cambiarlo, buscar `WHATSAPP_LINK` en `App.js`.

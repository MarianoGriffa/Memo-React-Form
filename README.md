# 📝 Formulario personalizado en React con validación Zod

Este repositorio contiene un ejemplo de formulario personalizado en React usando `react-hook-form` y `zod` para la validación de datos. El formulario incluye campos para nombre, email, contraseña y confirmación de contraseña, todos validados según un esquema definido con `zod`.

## 🚀 Tecnologías utilizadas 

- React**: Librería JavaScript para la construcción de interfaces de usuario.
- **React Hook Form**: Librería para gestionar formularios en React de forma sencilla y flexible.
- **Zod**: Biblioteca para la validación de datos basada en esquemas.

- **TypeScript**: Un superconjunto de JavaScript que añade tipos estáticos al lenguaje.

## 📂 Estructura del proyecto


```bash
src/
│

├── components/
│ ├── CustomForm/
│ │ └── CustomForm.tsx # Componente principal del formulario
│ └── CustomInput/
│ └── CustomInput.tsx # Componente reutilizable para campos de formulario
│
├── modelos/
│ └── index.ts # Definiciones de tipos y esquema de validación con Zod
│
├── App.tsx # Componente principal de la aplicación.
├── index.tsx # Punto de entrada de React
└── App.css # Estilos generales de la aplicación.
```

## 🛠️ Instalación

1. Clona el repositorio:
   ```bash

   git clone https://github.com/your-username/repo-name.git
   cd nombre-repositorio
   ```

2. Instalar dependencias:
   ```bash 
   npm install
   ```

3. Ejecuta la aplicación:
   ```bash
   npm start
   ```


## 📜 Uso

Este proyecto proporciona una base sólida para crear formularios en React con una validación robusta. La estructura modular permite añadir fácilmente nuevos campos y validaciones.

### Personalización

Puedes modificar el esquema de validación en `src/models/index.ts` para adaptarlo a las necesidades de tu formulario.

### Esquema de ejemplo con Zod

```typescript
import * as z from "zod";

export const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Must be a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  confirmPassword: z.string().min(8, "You must confirm your password")
    .refine((val, ctx) => val === ctx.parent.password, {
      message: "Passwords must match",
    }),
});


export type FormValues = z.infer<typeof schema>;

```


## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes alguna mejora o encuentras algún bug, no dudes en abrir un issue o enviar un pull request.


## 📝 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Vea el archivo [LICENSE](LICENSE) para más detalles.




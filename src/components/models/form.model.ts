
import { z } from 'zod';

//Propiedades del formulario 
export const schema = z.object({
  name: z.string().min(1, "Al menos debe tener un caracter"),
  email: z.string().email("Correo invalido").min(1,"El correo es obligatorio"),
  password: z.string().min(6, "La contraseña debe tener 6 caracteres"),
  confirmPassword: z.string().min(6, "La confirmacion debe tener al menos 6 caracteres")
}).refine(data => data.password === data.confirmPassword, {
   message: "Las contraseñas son diferentes",
   path: ["confirmPassword"]
})  
 
//Creamos un type de Typescript, con esto nos ahorramos el doble typado
export type FormValues = z.infer<typeof schema>; 
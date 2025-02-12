//1. hookForm -> Libreria para hacer los formularios
//2. Zod -> Para hace valdidaciones
//3. Resolvers -> Nexo que va asociar hookform(formulario) con Zod(valdidaciones)
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues, schema } from '../models';
import { CustomInput } from '../components/CustomInput';

export const CustomForm = () => { 
    //Usamos mi hookForm 
    const { control, handleSubmit, formState:{errors} } = useForm<FormValues>({
      resolver: zodResolver(schema),
      mode: "onBlur", 
      defaultValues: {  
        name: "",   
        email: "",
        password: "",
        confirmPassword:""
      }      
    });    
    
    const onSubmit: SubmitHandler<FormValues> = ( data ) => {
      console.log(data); 
    }  
 
  return (
    <form onSubmit={handleSubmit(onSubmit)} >

   <CustomInput    
        name="name" 
        label="Name"    
        type="text"  
        control={control} 
        error={errors.name}/>
       <CustomInput    
        name="email" 
        label="Email"   
        type="email"  
        control={control} 
        error={errors.email} />
       <CustomInput    
        name="password" 
        label="Password"    
        type="password"   
        control={control} 
        error={errors.password} />
       <CustomInput    
        name="confirmPassword"  
        label="Confirm Password"   
        type="password"  
        control={control} 
        error={errors.confirmPassword} />
     <button type="submit">Enviar</button>
    </form>   
  )
}

import { Control, Controller, FieldError } from 'react-hook-form';
import { FormValues } from '../models';

import './CustomInput.css';
  
  interface Props {    
    name: keyof FormValues; 
    control: Control<FormValues>;    
    label: string;             
    type?: string;          
    error?: FieldError;       
  }    

export const CustomInput = ({ name, control, label, type, error }: Props) => {
  
  return (
     <div className="form-group">
     <label htmlFor={name}>{label}</label>
     <Controller  
     name={name}  
     control={ control } 
     render={ ({ field }) => <input type={type} id={name} {...field}    
     className={`form-control ${error}? "is-invalid" : "" `}
     />}
     />
       {error && <p className="error"> {error.message}</p>}
    </div> 
  )
}

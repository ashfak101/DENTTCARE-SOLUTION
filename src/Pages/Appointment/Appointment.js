import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Appointment.css'

const Appointment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
    const {user}=useAuth()
  console.log(watch("example")); // watch input value by passing the name of it
    return (
        
        <div >

        <form onSubmit={handleSubmit(onSubmit)} className="app-from">
        {/* register your input into the hook by invoking the "register" function */}
        <input className="" defaultValue={user.displayName} {...register("name")} />
        
        {/* include validation with required or other standard HTML validation rules */}
        <input defaultValue={user.email}  {...register("email", { required: true })} placeholder='Email'/>
        {/* errors will return when field validation fails  */}
        {errors.email && <span className="error">This field is required</span>}
        <input {...register("address" )} placeholder='Address'/>
        <input {...register("city")} placeholder='City' />
        <input {...register("phone")} placeholder='Phone' />
        
        
        <input type="submit" value="Get Appointment" />
      </form>
        </div>
    );
};

export default Appointment;
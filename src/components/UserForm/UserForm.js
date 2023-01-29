import {useForm} from "react-hook-form";
import  {joiResolver} from "@hookform/resolvers/joi"
import {userValidator} from "../../validators/userValidator"


const UserForm = () => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({
        mode:'all',
        resolver:joiResolver(userValidator)
    });

    const submit = (data) => {
        console.log(data)
    }

 return (



    <form onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder= {'name'} {...register('name')} />
        <input type="text" placeholder= {'username'} {...register('username')} />
        <input type="text" placeholder= {'email'} {...register('email')} />
        <input type="text" placeholder= {'phone'} {...register('phone')} />
        <button>Save</button>
    </form>

 );
};

export {UserForm};



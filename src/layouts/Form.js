import { useForm } from "react-hook-form"

const Form = () => {

    const { register, handleSubmit } = useForm();

    const  onSubmit = (data) => {
        console.log(data);
    }

    return <div className="form-app"><div className="box-form">
        <h2>Form</h2> <br></br>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div >
                <label>Nombre</label>
                <input type="text" {...register('nombre')} className="input-form"/>
            </div>
            <div>
                <label>Telefono</label>
                <input type="text" {...register('telefono')} className="input-form"/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" {...register('email')} className="input-form"/>
            </div>
            <div>
                <label>Solicitud</label>
                <input type="text" {...register('solicitud')} className="input-form"/>
            </div>
            <button type="submit" className="button">Enviar</button>
        </form>
    </div>
    </div>
}

export default Form;
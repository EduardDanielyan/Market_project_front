import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"

function Login() {
        const dispatch = useDispatch()
        const { register, handleSubmit, formState: { errors }, reset } = useForm()
        const onSubmit = (data) => {
            console.log(data);
            let obj = {
                ...data
            }
            dispatch({ type: 'signin', data: obj })
            reset()
            console.log(obj);
        }
    return (
        <div className="registration">

            <div className="regMenu w-25 mx-auto p-3 border bg-light">
                <h3>Registration</h3>


                <form

                    onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group mb-2"></div>
                    <label htmlFor="name">Name</label>
                    <input
                        className="form-control" {...register('name', { required: true })} />
                    {errors.title && <span>This field must be filled</span>}

                    <div className="form-group mb-2"></div>
                    <label htmlFor="surname">Surname</label>
                    <input
                        className="form-control" {...register('surname', { required: true })} />
                    {errors.title && <span>This field must be filled</span>}

                    <div className="form-group mb-2"></div>
                    <label htmlFor="age">Age</label>
                    <input
                        className="form-control" {...register('age', { required: true })} />
                    {errors.title && <span>This field must be filled</span>}

                    <div className="form-group mb-2"></div>
                    <label htmlFor="email">Email</label>
                    <input
                        className="form-control" {...register('email', { required: true })} />
                    {errors.title && <span>This field must be filled</span>}

                    <div className="form-group mb-2"></div>
                    <label htmlFor="password">Password</label>
                    <input
                        className="form-control" type='password'{...register('password', {
                            required: true, minLength: {
                                value: 3,
                                message: "min length is 3",
                            }
                        })} />
                    {errors.title && <span>This field must be filled</span>}

                    <div className="form-group mb-2"></div>
                    <label htmlFor="password_confirm">Confirm Password</label>
                    <input
                        className="form-control" type='password'{...register('password_confirm', {
                            required: true, minLength: {
                                value: 3,
                                message: "min length is 3"
                            }
                        })} />
                    {errors.title && <span>This field must be filled</span>}

                    <br />
                    <button
                        className='btn btn-dark btn-sm'
                        onClick={() => {
                            dispatch({ type: 'addProduct' })
                        }}>Save</button>

                </form>
            </div>
        </div>




    )
}


export default Login
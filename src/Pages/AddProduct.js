import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"

function AddProduct() {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const onSubmit = (data, e) => {
        console.log(data);
        console.log(e.target);
        // let obj = {
        //     ...data
        // }
        dispatch({ type: 'AddProduct', data: e.target })
        reset()
    }
    return (
        <>
            <div className="addProdBg">
                <div className="addProd w-25 mx-auto p-3 border bg-light">
                    <h1>Add Product</h1>
                    <form

                        onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-group mb-2"></div>
                        <label htmlFor="name">Name</label>
                        <input
                            className="form-control" name="name"{...register('name', { required: true })} />
                        {errors.title && <span>This field must be filled</span>}

                        <div className="form-group mb-2"></div>
                        <label htmlFor="count">Count</label>
                        <input
                            className="form-control" name="count"{...register('count', { required: true })} />
                        {errors.title && <span>This field must be filled</span>}

                        <div className="form-group mb-2"></div>
                        <label htmlFor="price">Price</label>
                        <input
                            className="form-control" name="price"{...register('price', { required: true })} />
                        {errors.title && <span>This field must be filled</span>}

                        <div className="form-group mb-2"></div>
                        <label htmlFor="photo">Photo</label>
                        <input
                            className="form-control" type='file' name="photo" multiple {...register('photo', { required: true })} />
                        {errors.title && <span>This field must be filled</span>}

                        <div className="form-group mb-2"></div>
                        <label htmlFor="description">Description</label>
                        <textarea
                            className="form-control" {...register('description', { required: true })} />
                        {errors.title && <span>This field must be filled</span>}

                        <br />
                        <button
                            className='btn btn-dark btn-sm'
                        >Save</button>

                    </form>
                </div>
            </div>



        </>
    )
}


export default AddProduct
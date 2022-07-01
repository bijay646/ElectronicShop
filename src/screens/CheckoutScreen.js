import './CheckoutScreen.scss';
import { useForm } from "react-hook-form";

const CheckoutScreen = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='checkout__form'>
            <div className="column form__left">

                <img src='https://t3.ftcdn.net/jpg/01/89/20/92/360_F_189209217_J1XxoxDaBGvwUBDxbrczeL8OOLJIpiWz.jpg' alt='checkout__img' />
            </div>

            <div className="column form__right">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>Name:</p>
                    <input {...register("name", { required: true })} />
                    {errors.name && <span>This field is required</span>}
                    <br />

                    <p>Billing Address:</p>
                    <input {...register("billingAddress", { required: true })} />
                    {errors.billingAddress && <span>This field is required</span>}
                    <br />

                    <p>Delivery Address:</p>
                    <input {...register("deliveryAddress", { required: true })} />
                    {errors.deliveryAddress && <span>This field is required</span>}
                    <br />

                    <p>Telephone No.:</p>
                    <input {...register("tel", { required: true })} />
                    {errors.tel && <span>This field is required</span>}
                    <br />

                    <p>Current Date:</p>
                    <input {...register("currentDate", { required: true })} />
                    {errors.currentDate && <span>This field is required</span>}
                    <br />

                    <button type='submit' className='submit__btn'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CheckoutScreen
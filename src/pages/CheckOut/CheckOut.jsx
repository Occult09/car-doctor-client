import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const CheckOut = () => {

    const service = useLoaderData()
    const { title, price, _id, img } = service
    const { user } = useContext(AuthContext)

    const handleBookService = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const date = form.date.value
        const email = form.email.value
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking)

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    alert("Service booked successfully!")
                }
            })
    }

    return (
        <div>
            <h2>Book Service: {title}</h2>
            <form onSubmit={handleBookService} className="mb-5">
                <div className="card-body grid grid-cols-1 lg:grid-cols-2">
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" name="name" className="input" defaultValue={user?.name} placeholder="Name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Date</label>
                        <input type="date" name="date" className="input" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" defaultValue={user?.email} placeholder="Email" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Pay</label>
                        <input type="text" name="payment" className="input" defaultValue={`$` + price} />
                    </fieldset>
                </div>
                <input className="btn bg-[#FF3811] btn-block" value="Order Confirm" type="submit" name="" id="" />
            </form>
        </div>
    );
};

export default CheckOut;
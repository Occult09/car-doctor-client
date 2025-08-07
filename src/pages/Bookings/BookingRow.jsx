import { RxCross2 } from "react-icons/rx";

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {

    const { date, service, price, img, _id, status } = booking

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => { handleDelete(_id) }} className="btn btn-sm btn-circle">
                        <RxCross2 />
                    </button>
                </label>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded h-24 w-24">
                        <img
                            src={img}
                            alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
                {service}
            </td>
            <td>{date}</td>
            <td>${price}</td>
            <th>
                {
                    status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-primary btn-xs">Please Confirm</button>}
            </th>
        </tr>
    );
};

export default BookingRow;
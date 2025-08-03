const ServiceCard = ({ service }) => {

    const { img, title, price } = service

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt="Service Image"
                    className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl text-black">{title}</h2>
                <p className="font-semibold text-xl text-[#FF3811]">Price: {price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
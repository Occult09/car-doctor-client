import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img
                        src={person}
                        className="w-3/4 rounded-lg shadow-2xl" />
                    <img className='w-1/2 absolute right-5 top-45 lg:top-1/2 rounded-lg shadow-2xl border-8 border-white' src={parts} alt="" />
                </div>
                <div className='lg:w-1/2'>
                    <h1 className='text-[#FF3811] font-bold text-xl'>About Us</h1>
                    <h2 className="text-5xl font-bold text-black">We are qualified & of experience in this field</h2>
                    <p className="py-6">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        <br />
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button className="btn bg-[#FF3811] rounded-lg text-white font-semibold">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
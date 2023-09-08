import './Body.css'
import img1 from "../../assets/images/body2.avif"
const Body = () => {
    return (
        <div className='grid grid-cols-2 items-center '>
            <div className='task-section p-4'>
                <h2 className='text-3xl font-bold'>Collaborative Task</h2>
                <p className='my-4'>Teamwork is the collaborative effort of a group to achieve a common goal or to complete a task in an effective and efficient way. Teamwork is seen within the framework of a team, which is a group of interdependent individuals who work together towards a common goal.</p>
                <a className=' bg-indigo-950 px-4 py-2 rounded-lg text-white' href="">Learn More</a>
            </div>
            <div>
                <img className='w-full' src={img1} alt="" />
            </div>
        </div>
    );
};

export default Body;
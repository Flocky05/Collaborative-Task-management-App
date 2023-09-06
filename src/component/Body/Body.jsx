import './Body.css'
import img1 from "../../assets/images/body2.avif"
const Body = () => {
    return (
        <div className='task-container'>
            <div className='task-section'>
                <h2>Collaborative Task</h2>
                <p>Teamwork is the collaborative effort of a group to achieve a common goal or to complete a task in an effective and efficient way. Teamwork is seen within the framework of a team, which is a group of interdependent individuals who work together towards a common goal.</p>
                <a href="">Learn More</a>
            </div>
            <div>
                <img src={img1} alt="" />
            </div>
        </div>
    );
};

export default Body;
import task1 from "../../assets/images/my task/task1.avif"
import task2 from "../../assets/images/my task/task2.avif"
import task4 from "../../assets/images/my task/task4.avif"
import task5 from "../../assets/images/my task/task5.jpg"
import task6 from "../../assets/images/my task/task6.jpg"
import task7 from "../../assets/images/my task/task7.jpg"

const Inbox = () => {
    return (
        <div className="flex">
            <div className="bg-orange-200 w-1/4 min-h-screen">
                <div className="flex p-2 items-center ">
                    <img className="w-16 h-16 rounded-full" src={task1} alt="" />
                    <h3 className="text-lg px-2">Business Start</h3>
                </div>
                <div className="flex p-2 items-center bg-blue-100">
                    <img className="w-16 h-16 rounded-full" src={task2} alt="" />
                    <h3 className="text-lg px-2">Dolor Sit AMET</h3>
                </div>
                <div className="flex p-2 items-center">
                    <img className="w-16 h-16 rounded-full" src={task4} alt="" />
                    <h3 className="text-lg px-2">Bluid your Plans</h3>
                </div>
                <div className="flex p-2 items-center ">
                    <img className="w-16 h-16 rounded-full" src={task5} alt="" />
                    <h3 className="text-lg px-2">Compling</h3>
                </div>
                <div className="flex p-2 items-center ">
                    <img className="w-16 h-16 rounded-full" src={task6} alt="" />
                    <h3 className="text-lg px-2">Digital Marketing</h3>
                </div>
                <div className="flex m-2 p-1 items-center border-2">
                    <img className="w-16 h-16 rounded-full" src={task7} alt="" />
                    <h3 className="text-lg px-2">Upholes</h3>
                </div>
            </div>
            <div className="bg-gray-100 w-full text-white ">
                <div className="flex justify-between bg-blue-950">
                    <img className="w-10 h-10" src={task6} alt="" />
                    <h3 className="text-lg px-2">Digital Marketing</h3>
                </div>
            </div>
        </div>
    );
};

export default Inbox;
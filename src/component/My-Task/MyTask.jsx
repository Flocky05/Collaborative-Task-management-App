import task1 from "../../assets/images/my task/task1.avif"
import task2 from "../../assets/images/my task/task2.avif"
import task4 from "../../assets/images/my task/task4.avif"

const MyTask = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center p-4">The project that have to done...</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-16">
                <div className="border-2 rounded-lg">
                    <img className="w-full h-60" src={task1} alt="" />
                    <div className="p-3">
                    <div>
                        <h2 className="text-2xl font-semibold">Business Start</h2>
                        <p>3-07-23 to <span className="font-bold text-red-600">21</span> -10-23</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ad.</p>
                    <p>due: <span className="font-bold text-red-500">13%</span></p>
                    <a className="bg-blue-600 text-white px-4 py-1 rounded-lg" href="">More</a>
                    </div>
                </div>
                <div className="border-2 rounded-lg">
                    <img className="w-full h-60" src={task2} alt="" />
                    <div className="p-3">
                    <div>
                        <h2 className="text-2xl font-semibold">Dolor Sit AMET</h2>
                        <p>24-02-23 to <span className="font-bold text-red-600">01</span> -10-23</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ad.</p>
                    <p>due: <span className="font-bold text-red-500">13%</span></p>
                    <a className="bg-blue-600 text-white px-4 py-1 rounded-lg" href="">More</a>
                    </div>
                </div>
                <div className="border-2 rounded-lg">
                    <img className="w-full h-60" src={task4} alt="" />
                    <div className="p-3">
                    <div>
                        <h2 className="text-2xl font-semibold">Bluid your Plans</h2>
                        <p>78-03-23 to <span className="font-bold text-red-600">14</span> -10-23</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ad.</p>
                    <p>due: <span className="font-bold text-red-500">13%</span></p>
                    <a className="bg-blue-600 text-white px-4 py-1 rounded-lg" href="">More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTask;
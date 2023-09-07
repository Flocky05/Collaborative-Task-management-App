
import { Link } from "react-router-dom";
import img from "../../assets/images/login.avif"
const Login = () => {
    return (
        <div className="grid grid-cols-2 items-center">
            <div className="flex flex-col p-10">
                <h3 className="text-3xl font-bold">Register Now</h3>
                <input className="bg-white border-2 my-2 rounded-lg p-2" type="email" name="email" id="email" placeholder="enter your email"  />
                <input className="bg-white border-2 my-2 rounded-lg p-2" type="password" name="password" id="password" placeholder="enter your password"  />
                <input className="bg-blue-500 rounded-full text-white w-40 px-4 py-2 shadow-xl" type="submit" />
                <div className="flex items-center">
                    <p className="text-gray-600">Don't have Account?</p>
                    <Link className="text-lg font-semibold" to="/">SignUp</Link>
                </div>
            </div>
            <img src={img} alt="" />
        </div>
    );
};

export default Login;
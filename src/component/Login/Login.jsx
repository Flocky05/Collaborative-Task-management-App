import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);
import { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/login.avif"
const Login = () => {
    const[error,setError]=useState();
    const[success,setSuccess]=useState();
    const handleLogin=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        setError(" ");
        setSuccess(" ");
        if(password.length<6){
            setError("Password must be at least 6 character");
            return
        }
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setSuccess("User successully logedin");
    setError(" ");
    form.reset();
    // ...
  })
  .catch((error) => {
    setError(error.message);
    form.reset();
  });
    }
    return (
        <div className="grid grid-cols-2 items-center">
            <div className="p-10">
                <h3 className="text-3xl font-bold">Register Now</h3>
                <form className="flex flex-col" onSubmit={handleLogin}>
                    <input className="bg-white border-2 my-2 rounded-lg p-2" type="email" name="email" id="email" placeholder="Enter your email" required />
                    <input className="bg-white border-2 my-2 rounded-lg p-2" type="password" name="password" id="password" placeholder="Enter your password" required />
                    <input className="bg-blue-500 rounded-full text-white w-40 px-4 py-2 shadow-xl" type="submit" />
                    <div className="flex items-center">
                        <p className="text-gray-600">Don't have Account?</p>
                        <Link className="text-lg font-semibold" to="/signUp">SignUp</Link>
                    </div>
                </form>
                <p className="text-red-500 text-xl font-semibold text-center">{error}</p>
                <p className="text-green-500 text-xl font-semibold text-center">{success}</p>
            </div>
            <img src={img} alt="" />
        </div>
    );
};

export default Login;
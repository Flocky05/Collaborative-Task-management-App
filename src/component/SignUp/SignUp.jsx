import { Link } from "react-router-dom";
import { getAuth ,createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);
const SignUp = () => {
    const handleSubmit =(event)=>{
        event.preventDefault()
        const email=event.target.email.value;
        const name=event.target.name.value;
        const bio=event.target.bio.value;
        const password=event.target.password.value;
        console.log(email,name,bio,password);

    createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
    // Signed in 
    const SignedUser = result.user;
    console.log(SignedUser);
    // ...
  })
  .catch((error) => {
   console.error(error);
    // ..
  });
    }
    return (
        <div>
            <div className="flex flex-col p-10">
                <h3 className="text-3xl font-bold">SignUp Now</h3>
                <form onSubmit={handleSubmit}>
                <h3 className="text-lg font-semibold mt-8">Your Name</h3>
                    <input className="bg-white border-2 my-2 rounded-lg p-2 w-3/4" type="text" name="name" id="name" placeholder="Enter your Name"  />
                    <h3 className="text-lg font-semibold">Your Email</h3>
                    <input className="bg-white border-2 my-2 rounded-lg p-2 w-3/4" type="email" name="email" id="email" placeholder="Enter your email"  />
                    <h3 className="text-lg font-semibold">About Bio </h3>
                    <textarea name="text" id="bio" rows="8" className="w-3/4 bg-white border-2 p-2 rounded-lg" placeholder="add your bio"></textarea>
                    <h3 className="text-lg font-semibold">Password</h3>
                    <input className="bg-white border-2 my-2 rounded-lg p-2 w-3/4" type="password" name="password" id="password" placeholder="Enter your password" />
                    <h3 className="text-lg font-semibold mt-3">Upload your Image</h3>
                    <input type="file" id="img" name="img" accept="image/*"/>
                    <input className="bg-blue-500 rounded-full text-white w-40 px-4 py-2 shadow-xl mt-3" type="submit" />
                    <div className="flex items-center mt-3">
                    <p className="text-gray-600">I have Account?</p>
                    <Link className="text-lg font-semibold" to="/login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
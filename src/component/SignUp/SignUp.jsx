

const SignUp = () => {
    return (
        <div>
            <div className="flex flex-col p-10">
                <h3 className="text-3xl font-bold">SignUp Now</h3>
                
                    <h3 className="text-lg font-semibold mt-8">Your Name</h3>
                    <input className="bg-white border-2 my-2 rounded-lg p-2 w-3/4" type="text" name="name" id="name" placeholder="Enter your Name"  />
                    <h3 className="text-lg font-semibold">Your Email</h3>
                    <input className="bg-white border-2 my-2 rounded-lg p-2 w-3/4" type="email" name="email" id="email" placeholder="Enter your email"  />
                    <h3 className="text-lg font-semibold">Password</h3>
                    <input className="bg-white border-2 my-2 rounded-lg p-2 w-3/4" type="password" name="password" id="password" placeholder="Enter your password" />
                    <input className="bg-blue-500 rounded-full text-white w-40 px-4 py-2 shadow-xl mt-2" type="submit" />
                
                
            </div>
        </div>
    );
};

export default SignUp;
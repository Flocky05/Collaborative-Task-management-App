

const Create = () => {
    return (
        <div>
            <h3 className="text-3xl text-center p-3">Creat a <span className="font-bold">Group </span>  
             task</h3>
            <form className="px-24 grid grid-cols-1 justify-items-center">
                <h3 className="text-lg font-semibold">Project Name</h3>
                <input className="w-3/5 bg-gray-100 border-1 rounded-lg p-2" type="text" name="name" id="name" placeholder="Enter project Name" />
                <h3 className="text-lg font-semibold">Project Type</h3>
                <input className="w-3/5 bg-gray-100 border-1 rounded-lg p-2" type="text" name="type" id="type" placeholder="Enter project type" />
                <h3 className="text-lg font-semibold">Added Project Description </h3>
                    <textarea name="text" id="bio" rows="8" className="w-3/5 bg-white border-2 p-2 rounded-lg" placeholder="Add project details"></textarea>
                <h3 className="text-lg font-semibold mt-3">Upload Project Image</h3>
                <input type="file" id="img" name="img" accept="image/*"/>
                <div className="grid grid-cols-2 p-4">
                    <div>
                        <h4 className="font-semibold">Staring Date</h4>
                        <input className="bg-white" type="date" />
                    </div>
                    <div>
                        <h4 className="font-semibold">Ending Date</h4>
                        <input className="bg-white" type="date"  />
                    </div>
                </div>
                <input className="bg-orange-600 rounded-full text-white w-40 px-4 py-2 shadow-xl mt-3" type="submit" />
                
            </form>
        </div>
    );
};

export default Create;
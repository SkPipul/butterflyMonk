const Update = () => {
    return (
        <section className="my-8">
            <div className="py-6 px-10 bg-gray-100">
            <h2 className="font-bold text-gray-600">
            Retirement Strategy
          </h2>
          <div className="mt-4">
            <p className="font-semibold text-sm text-gray-600 mb-2">Employe Contribution</p>
          <div className="flex items-center gap-2">
          <input type="range" min={0} max="100%" value="16%" className="range range-xs range-info" /> 
          <p className="font-bold">16%</p>
          </div>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-sm text-gray-600 mb-2">Retirement Age</p>
          <div className="flex items-center gap-2">
          <input type="range" min={0} max="100" value="65" className="range range-xs range-info" /> 
          <p className="font-bold">65</p>
          </div>
          <hr className="mt-3"/>
          </div>
          <p className="font-bold text-xs text-gray-600 mb-4 mt-4">Employee Contribution -- <span>8.4%</span></p>
          <p className="font-bold text-xs text-gray-600 ">Interest Rate -- <span>5%</span></p>
          <button className="bg-blue-700 px-6 py-2 w-full mt-6 text-white text-sm rounded-lg">Update</button>
          <p className="text-xs text-center text-blue-700 mt-4 cursor-pointer">View Help Docs {">"}</p>
        </div>
            <div className="mt-6 border-l-2 border-blue-700 p-4">
                <h3 className='text-gray-500 text-sm font-semibold'>Are you considering a <br /><span className="font-bold text-black">Housing advance?</span></h3>
                <p className="text-gray-400 text-xs mt-2">Limited time reduced Interest</p>
                <p className="text-xs text-blue-700 mt-2 cursor-pointer">Learn More {">"}</p>
            </div>
        </section>
    );
};

export default Update;
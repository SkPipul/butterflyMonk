import Chart from "./Chart";

const Banner = () => {
  return (
    <div className="py-20 px-10">
      <div>
        <h4 className="font-bold text-blue-700 text-sm">Retirement Income</h4>
        <h2 className="font-bold text-lg text-gray-600">Starting Year 2056</h2>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between">
        <div>
          <h2 className="font-bold text-lg text-gray-600">$300,000</h2>
          <h4 className="text-gray-400 text-xs">My Goal</h4>
          <hr className="mt-2 bg-blue-700" />
        </div>
        <div>
          <h2 className="font-bold text-lg text-gray-600">59%</h2>
          <h4 className="text-gray-400 text-xs">Goal Achieved</h4>
          <hr className="mt-2 bg-blue-700" />
        </div>
        <div>
          <h2 className="font-bold text-lg text-gray-600">$300</h2>
          <h4 className="text-gray-400 text-xs">Est. Monthly Income</h4>
          <hr className="mt-2 bg-blue-700" />
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-gray-600">Contributions Overtime</h2>
        <div className="flex flex-wrap gap-4 my-4">
          <div className="flex items-center gap-2">
            <span className="text-blue-800 font-bold">{">"}</span>
            <p className="text-blue-700 text-xs">Employer:</p>
            <p className="text-gray-600 text-xs font-bold">K 73,500</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-700 font-bold">{">"}</span>
            <p className="text-blue-700 text-xs">Employee:</p>
            <p className="text-gray-600 text-xs font-bold">K 52,500</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-600 font-bold">{">"}</span>
            <p className="text-blue-700 text-xs">Total Interest:</p>
            <p className="text-gray-600 text-xs font-bold">K 244,313</p>
          </div>
        </div>
        <Chart />
        <div className="mt-10">
          <h2 className="font-bold text-gray-600">
            How do I compare to my peers?
          </h2>
          <p className="text-gray-400 text-xs">
            This numbers represent current goal achievement
          </p>
          <div className="flex flex-wrap items-center justify-between mt-6">
            <div>
              <div>
                <p className="text-sm text-gray-600">
                  <span className="font-bold">Age: </span>Under 30
                </p>
                <hr className="mt-2 w-1/2" />
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-600">
                  <span className="font-bold">Salary: </span>K 20 - K 30
                </p>
                <hr className="mt-2 w-1/2" />
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-600 flex items-center">
                  <span className="font-bold">Gender: </span>
                  <select className="select select-sm w-full max-w-xs">
                    <option disabled selected>
                      Male
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </p>
                <hr className="mt-2 w-1/2" />
              </div>
            </div>
            <div className="flex items-center gap-6 lg:mt-0 mt-6">
              <div className="text-center">
                <div
                  className="radial-progress text-blue-600"
                  style={{ "--value": 78 }}
                >
                  78%
                </div>
                <p>Average</p>
              </div>
              <div className="text-center">
                <div
                  className="radial-progress text-blue-600"
                  style={{ "--value": 95 }}
                >
                  95%
                </div>
                <p>Top</p>
              </div>
              <div className="text-center">
                <div
                  className="radial-progress text-blue-600"
                  style={{ "--value": 59 }}
                >
                  59%
                </div>
                <p>Me</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

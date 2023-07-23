const Profile = () => {
  return (
    <div className="py-20 bg-gray-100 px-6">
      <div className="flex lg:justify-center items-center gap-4">
        <img
          className="w-14 h-14 rounded-full"
          src="https://images.unsplash.com/photo-1689613188308-ef2815f15810?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div>
          <h4 className="text-xl font-bold">Hi, Mike</h4>
          <p className="text-sm text-gray-500">Welcome back</p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="font-bold text-sm text-gray-600">Today</h3>
        <h2 className="text-xl font-bold mt-3 text-gray-600">$19,892</h2>
        <p className="text-sm text-gray-500 mt-1">Account balance</p>
        <h3 className="font-bold text-sm mt-3 text-gray-600">$4,000</h3>
        <p className="text-sm text-gray-500 mt-1">Year to date Contribution</p>
        <h3 className="font-bold text-sm mt-3 text-gray-600">$1,892</h3>
        <p className="text-sm text-gray-500 mt-1">Total Interest</p>
        <button className="mt-3 bg-blue-700 px-6 py-2 text-white text-sm rounded-lg">I want to</button>
      </div>
      <div className="mt-6">
        <h3 className="font-semibold">Recent Transcriptions</h3>
        <p className="text-sm text-gray-500 mt-4">Account balance</p>
        <p className="text-sm text-gray-600 font-bold">Withdraw Transfer to Bank-xxx11</p>
        <hr className="mt-2"/>
      </div>
      <div className="mt-6">
        <h3>Recent Transcriptions</h3>
        <p className="text-sm text-gray-500 mt-4">Account balance</p>
        <p className="text-sm text-gray-600 font-bold">Withdraw Transfer to Bank-xxx11</p>
        <hr className="mt-2"/>
      </div>
      <div className="mt-6">
        <h3>Recent Transcriptions</h3>
        <p className="text-sm text-gray-500 mt-4">Account balance</p>
        <p className="text-sm text-gray-600 font-bold">Withdraw Transfer to Bank-xxx11</p>
        <hr className="mt-2"/>
      </div>
    </div>
  );
};

export default Profile;

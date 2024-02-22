const Edit = () => {
  return (
    <div className="py-10 px-4 space-y-4">
      <div className="flex flex-col justify-center items-center space-y-3">
        <div className="w-28 h-28 rounded-full bg-slate-500"></div>
        <label
          htmlFor="picture"
          className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-gray-700"
        >
          Change
          <input id="picture" type="file" className="hidden" accept="image/*" />
        </label>
      </div>
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          id="email"
          type="email"
          className="appearance-none w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          required
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Phone number
        </label>
        <div className="flex rounded-md shadow-sm">
          <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
            +82
          </span>
          <input
            id="input"
            className="appearance-none w-full px-3 py-2 border-gray-300 rounded-r-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            type="number"
            required
          />
        </div>
      </div>
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none mt-6">
        Update profile
      </button>
    </div>
  );
};

export default Edit;
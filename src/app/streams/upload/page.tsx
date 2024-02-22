const Upload = () => {
  return (
    <div className="px-4 space-y-5 py-10">
      <div className="my-5">
        <label htmlFor="price" className="text-sm font-medium text-gray-700 mb-1 block">
          Price
        </label>
        <div className="rounded-md shadow-sm relative flex items-center">
          <div className="absolute left-0 pl-3 pointer-events-none flex items-center justify-center">
            <span className="text-gray-500 text-sm">$</span>
          </div>
          <input
            id="price"
            type="text"
            placeholder="0.00"
            className="appearance-none pl-7 w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 "
          />
          <div className="absolute pointer-events-none right-0 pr-3 flex items-center">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="price" className="text-sm font-medium text-gray-700 mb-1 block">
          Description
        </label>
        <textarea
          rows={4}
          className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
        />
      </div>
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none mt-3">
        Go live
      </button>
    </div>
  );
};

export default Upload;

const Chats = () => {
  return (
    <div className="py-10 divide-y-1">
      {[1, 2, 3, 4, 5].map((_, i) => (
        <div key={i} className="px-4 flex cursor-pointer py-3 border-b items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-slate-300" />
          <div>
            <p className="text-gray-700">Steve Jebs</p>
            <p className="text-sm text-gray-500">See u tomorrow in the corner at 2pm! &rarr;</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;

export default function Home() {
  return (
    <div className="bg-slate-400 py-20 px-24 grid gap-5 min-h-screen">
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <span className="font-semibold text-2xl">Select Item</span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex justify-between my-2 first:bg-blue-50">
              <span className="text-gray-500">Grey Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <button className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/4 mx-auto hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:bg-red-500 block">
          Checkout
        </button>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-xl group">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full group-hover:bg-blue-300" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-12">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">New york, USA</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-xl">
        <div className="flex justify-between items-center mb-5">
          <span>←</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">💖</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="flex justify-between items-center mt-3 mb-5">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-100 flex justify-center items-center aspect-square w-9 text-xl text-gray-500 rounded-lg">
                -
              </button>
              <span>1</span>
              <button className="bg-blue-100 flex justify-center items-center aspect-square w-9 text-xl text-gray-500 rounded-lg">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 py-2 px-8 text-center text-white rounded-lg ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-xl">
        <form className="flex flex-col space-y-2 p-5 focus-within:bg-blue-100">
          <input
            type="text"
            required
            placeholder="Username"
            className="required:border-2 border-yellow-500 peer"
          />
          <span className="hidden peer-invalid:block peer-invalid:text-red-500">
            This input is Invalid
          </span>
          <span className="hidden peer-valid:block peer-valid:text-teal-500">Awesome username</span>
          <input type="submit" required value="Login" placeholder="Username" className="bg-white" />
        </form>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-xl">
        <details className="select-none">
          <summary className="cursor-pointer">What is my fav. food?</summary>
          <span className="">Kimchi</span>
        </details>
      </div>
    </div>
  );
}

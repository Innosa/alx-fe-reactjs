const card = () => {
  return (
    <div className="max-w-sm mx-auto bg-gray-99 rounded-lg shadow-md p-7">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Card Title</h2>

      <p className="text-gray-600 mb-6"> This is Card components Description</p>

      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-700">
        Click Me
      </button>
    </div>
  );
};

export default card;

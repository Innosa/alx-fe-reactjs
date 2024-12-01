function UserProfile() {
  return (
    <div className="sm:p-4 md:p-8 md:max-w-sm mx-auto">
      <div className="user-profile bg-gray-100  sm:p-4 .max-w-xs .max-w-sm mx-auto , my-20 rounded-lg shadow-lg hover:shadow-xl">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="rounded-full w-24 h-24 sm:w-36 .h-36 md: hover:scale-110 transition-transform duration-300 ease-in-out"
        />
        <h1 className="text-lg md:text-xl font-bold text-gray-800 hover:text-blue-500">
          John Doe
        </h1>
        <p className="text-sm sm:text-base">
          Developer at Example Co. Loves to write code and explore new
          technologies.
        </p>
      </div>
    </div>
  );
}

export default UserProfile;

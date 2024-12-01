function UserProfile() {
  return (
    <div className="sm:p-4 md:p-8">
      <div className="user-profile bg-gray-100  sm:p-4 .max-w-xs max-w-sm mx-auto , my-20 rounded-lg shadow-lg ">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="rounded-full w-24 h-24 sm:w-36 .h-36 md:"
        />
        <h1 className=" mt-4 text-lg sm:text-xl md:font-bold text-gray-800">
          John Doe
        </h1>
        <p className="text-sm sm:text-base md:">
          Developer at Example Co. Loves to write code and explore new
          technologies.
        </p>
      </div>
    </div>
  );
}

export default UserProfile;

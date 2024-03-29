export default function ResumeHeader() {
  return (
    <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg mt-4 mb-4">
      <div className="container flex justify-center items-center">
        <img
          className="rounded-full h-40 w-40 flex"
          alt="profile"
          src="images/avatars/shaneheadshot.jpeg"
        />
      </div>
      <div className="flex items-center justify-center flex-col col-span-2">
        <div className="container flex items-center">
          <p className="text-2xl mr-2 dark:text-white dark:text-opacity-80">My</p>
          <p className="bg-blue-medium font-bold text-2xl rounded text-white w-22 h-8 dark:bg-gray-logodark dark:text-opacity-90">
            Resume
          </p>
          <div className="container flex mt-4" />
          <div className="container mt-4" />
        </div>
      </div>
    </div>
  );
}

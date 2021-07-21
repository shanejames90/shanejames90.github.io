import DarkModeNav from './darkModeNav';

export default function HeaderInsert() {
  return (
    <div className="text-gray-700 dark:text-white text-center flex items-center align-items cursor-pointer">
      <h1 className="flex justify-center w-full">
        <span>
          <h1 className="text-xs">
            <DarkModeNav />
          </h1>
        </span>
      </h1>
    </div>
  );
}

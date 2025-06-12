// import Image from "next/image";

interface HeaderProps {
  toggleSidebar?: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  // fixed z-100 left-0 lg:left-50 top-0 right-0
  return (
    <header className="flex h-24 items-center justify-between gap-2 bg-[#fafafc] p-4 lg:justify-center lg:p-6">
      <div className="flex items-center lg:hidden">
        <button className="text-gray-600">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-1 items-center rounded-2xl border border-blue-400 bg-white px-3 py-2 lg:w-1/2 lg:flex-none">
        <input
          type="text"
          placeholder="请输入关键词"
          className="ml-2 flex-1 bg-transparent text-sm placeholder-gray-400 focus:ring-0 focus:outline-none"
        />
        <button className="text-gray-500">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      {/* <div className="relative">
        <input
          type="text"
          placeholder="搜索..."
          className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div> */}
      {/* <div>
        <button className="text-gray-600">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div> */}
      {/* <div className="mb-6"></div> */}
    </header>
  );
};

export default Header;

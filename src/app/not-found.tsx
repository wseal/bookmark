export default function NotFoundPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center space-y-16 space-x-8 lg:flex-row lg:space-y-0 2xl:space-x-0">
      <div className="flex w-full flex-col items-center justify-center text-center lg:w-1/2 lg:px-2 xl:px-0">
        <p className="text-7xl font-bold tracking-wider text-gray-300 md:text-8xl lg:text-9xl">
          404
        </p>
        <p className="mt-2 text-4xl font-bold tracking-wider text-gray-300 md:text-5xl lg:text-6xl">
          Page Not Found
        </p>
        <p className="my-12 text-lg text-gray-500 md:text-xl lg:text-2xl">
          Sorry, the page you are looking for could not be found.
        </p>
        <a
          href="#"
          className="flex items-center space-x-2 rounded bg-blue-600 px-4 py-2 text-gray-100 transition duration-150 hover:bg-blue-700"
          title="Return Home"
        >
          <span>Return Home</span>
        </a>
      </div>
      <div className="flex w-1/2 justify-center p-4 lg:h-full lg:items-end">
        NotFound....
      </div>
    </div>
  );
}

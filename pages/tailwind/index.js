function Tailwind() {
  return (
    <>
      <div className="m-4 relative min-h-screen">
        <nav className="w-full h-16 bg-red-400 text-white">
          <div className="flex h-full items-center mx-4">
            <div className="basis-6/12 flex items-center justify-between space-x-1 cursor-pointer">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
                <div className="text-2xl text-white">Next.js</div>
              </div>
              <div className="flex items-center space-x-2">
                <div>name</div>
                <div>email</div>
                <div>username</div>
              </div>
            </div>
            <div className="basis-6/12 flex justify-end space-x-4 cursor-pointer">
              <div>Login</div>
              <div>Sign-Up</div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Tailwind;

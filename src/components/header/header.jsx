"use client"

// import necessary components and styles
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between py-4">
          <a href="index.php" className="flex items-center">
            <Image
              src="/images/paramotor_logo.png" // Ensure the image path is correct
              alt="logo"
              width={50} // Specify the desired width
              height={50} // Specify the desired height
            />
          </a>
          <button
            className="lg:hidden p-2 focus:outline-none"
            aria-label="Toggle navigation"
            onClick={() => {
              const navMenu = document.getElementById('navbarSupportedContent');
              navMenu.classList.toggle('hidden');
            }}
          >
            <span className="block w-6 h-0.5 bg-gray-600 mb-1" />
            <span className="block w-6 h-0.5 bg-gray-600 mb-1" />
            <span className="block w-6 h-0.5 bg-gray-600" />
          </button>
          <div className="hidden lg:flex lg:items-center lg:space-x-4" id="navbarSupportedContent">
            <ul className="flex space-x-4">
              <li className="relative group">
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 10.833c3.606 0 6.544 2.149 6.663 4.832l.003.168c0 .92-.746 1.667-1.666 1.667h-10c-.92 0-1.667-.746-1.667-1.667 0-2.761 2.985-5 6.667-5Zm0-8.333a3.333 3.333 0 1 1 0 6.667 3.333 3.333 0 0 1 0-6.667Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Personal
                </a>
              </li>
              <li className="relative group">
                <a
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-500"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.834 1.667a2.5 2.5 0 0 1 2.495 2.353l.005.147V5h.833v12.5H5.834V5h.833v-.833A2.5 2.5 0 0 1 9.02 1.67l.147-.004h1.667ZM4.167 5v12.5h-.833c-.92 0-1.667-.746-1.667-1.667V6.667c0-.92.746-1.667 1.667-1.667h.833Zm11.667 0h.833c.92 0 1.667.746 1.667 1.667v9.166c0 .92-.747 1.667-1.667 1.667h-.833V5Zm-5-1.667H9.167a.834.834 0 0 0-.828.737l-.005.097V5h3.333v-.833a.833.833 0 0 0-.833-.834Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Business
                </a>
              </li>
            </ul>
            <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" href="#" target="_blank">
              Sign Up
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

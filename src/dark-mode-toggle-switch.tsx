import { useState } from "react";

function Toggle() {
  const [darkMode, setdarkMode] = useState(true);

  function darkModeClick(): void {
    setdarkMode(!darkMode);
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }

  return (
    <>
      <>
        <button
          type="button"
          className="hidden font-medium rounded-full text-slate-50 hover:bg-indigo-600 transition ease-in-out duration-500 dark:block"
          onClick={darkModeClick}
        >
          <span className="group inline-flex shrink-0 justify-center items-center size-9">
            <svg
              className="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          </span>
        </button>
        <button
          type="button"
          className="block dark:hidden font-medium rounded-full text-slate-50 hover:bg-indigo-600 transition ease-in-out duration-500"
          onClick={darkModeClick}
        >
          <span className="group inline-flex shrink-0 justify-center items-center size-9">
            <svg
              className="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx={12} cy={12} r={4} />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          </span>
        </button>
      </>
    </>
  );
}

export default Toggle;

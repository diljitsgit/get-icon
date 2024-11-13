import { useState } from "react";

function MainHome() {
  const [input, setinput] = useState("");

  window.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      window.location.href = "/app?search=" + input;
    }
  });
  return (
    <>
      <div className="max-w-screen h-[80vh] bg-indigo-300 dark:bg-indigo-800 flex justify-between items-center">
        <div className="text-center mx-auto">
          <h1 className="text-8xl font-logo dark:text-slate-50 antialiased">
            Get the Icon of Any Site!
          </h1>
          <h3 className="text-md dark:text-slate-400 antialiased">
            Find any site's icon instantly – easy, fast, and free.
          </h3>
          <input
            type="text"
            name="User input"
            className="p-5 w-5/6 w-[40lvw]:md rounded-md my-8 shadow-md focus:outline-none focus:scale-110 transition ease-in-out duration-700"
            placeholder="example.com"
            value={input}
            onInput={(e) => setinput((e.target as HTMLInputElement).value)}
          />
        </div>
      </div>
    </>
  );
}

export default MainHome;

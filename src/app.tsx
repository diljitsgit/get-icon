import { useState } from "react";
import Navbar from "./navbar.tsx";
import Footer from "./footer.tsx";

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("search") as string;
let source: string = "https://icon.horse/icon/" + myParam;
let paramOnClick = myParam;

function App() {
  const [param, setParam] = useState(myParam);

  function update() {
    paramOnClick = param;
    source = "https://icon.horse/icon/" + param;
    setParam("");
  }
  return (
    <>
      <Navbar />

      <div className="max-w-screen h-[90vh] flex justify-between dark:bg-slate-900 items-center p-6 p-32:lg">
        <div className="w-full h-full max-w-5/6:md bg-slate-50 dark:bg-slate-800 dark:border-slate-500 flex justify-between items-center rounded-3xl border-2">
          <div className="text-center mx-auto">
            <h1 className="text-5xl text-8xl:md font-logo dark:text-slate-50 antialiased p-4">
              Enter Domain of any Website
            </h1>
            <div>
              {" "}
              <input
                type="text"
                name="User input"
                className="p-5 w-4/6 md:w-[40lvw] rounded-md mt-8 mx-1 shadow-md focus:outline-indigo-500 transition ease-in-out duration-700"
                id="textInput"
                onInput={(e) => setParam((e.target as HTMLInputElement).value)}
                value={param}
                placeholder="example.com"
              />
              <button
                className="p-5 rounded-md bg-indigo-600 text-slate-50"
                id="checkIt"
                onClick={update}
              >
                Search
              </button>
            </div>
            <div className="flex justify-between items-center  bg-slate-100 dark:bg-slate-900 dark:border-slate-500 border-2 rounded-md p-5 w-max mx-auto my-3 gap-5">
              <img
                src={source}
                alt={source}
                className="size-10 rounded-md"
              ></img>
              <h3 className="text-xl text-slate-900 dark:text-slate-50">
                {paramOnClick}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;

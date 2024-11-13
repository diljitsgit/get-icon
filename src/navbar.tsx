import Toggle from "./dark-mode-toggle-switch";

function Navbar() {
  return (
    <>
      <div className="block max-w-screen bg-indigo-500 h-16 shadow-xl px-8 py-2 pt-3">
        <div className="flex justify-between items-center">
          <h1
            className="text-slate-200 text-4xl font-logo cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            getIcon
          </h1>
          <div className="flex justify-between items-center gap-4">
            <Toggle />
            <h3
              className="text-slate-200 cursor-pointer rounded-md px-4 py-2 hover:bg-indigo-600 transition ease-in-out duration-500"
              onClick={(e) => (e.target as HTMLElement).scrollIntoView(true)}
            >
              How to use?
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

function Footer() {
  return (
    <>
      <div
        className="block max-w-screen bg-indigo-950 h-16:md max-h-20 shadow-xl px-8 py-2 pt-3"
        id="footer"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-slate-200 text-xl font-logo cursor-pointer">
            Thank you for using our tool !
          </h1>
          <div className="flex justify-between items-center gap-4">
            <h3 className="text-slate-200 cursor-pointer rounded-md px-4 py-2">
              Find out more about us{" "}
              <a href="https://www.diljits.com" className="underline">
                here
              </a>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

function Education() {
  return (
    <div id="#education" className="relative w-full py-10 bg-white">
      <div className="mx-auto max-w-7xl px-8">
        <h1 className="text-3xl font-bold mb-4 md:text-center">Education</h1>

        <div className="grid lg:grid-cols-2 h-full w-full gap-6 items-center justify-center">
          {" "}
          <div className="flex max-w-2xl h-full flex-col items-center rounded-md border md:flex-row shadow-sm">
            <div>
              <div className="p-4">
                <h2 className="inline-flex items-center text-lg font-semibold">
                Bachelor of Computer Science (BCompSc), Computer science 
                </h2>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="flex flex-col">
                    <span className="text-[15px] font-medium text-black">
                    Unisantos
                    </span>
                    {/* Utility to calculate itself */}
                    <span className="text-[12px] font-medium text-black">
                    2006-2011
                    </span>
                  </span>
                </div>
                <div className="mt-2 text-sm text-black text-justify">
                  <p>
                 
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* First Experience */}
          
        </div>
      </div>
    </div>
  );
}

export default Education;

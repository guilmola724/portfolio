function Experience() {
  return (
    <div id="#experience" className="relative w-full py-10 bg-white">
      <div className="mx-auto max-w-7xl px-8">
        <h1 className="text-3xl font-bold mb-4 md:text-center">Experience</h1>

        <div className="grid lg:grid-cols-2 h-full w-full gap-6 items-center justify-center">
          {" "}
          <div className="flex max-w-2xl h-full flex-col items-center rounded-md border md:flex-row shadow-sm">
            <div>
              <div className="p-4">
                <h2 className="inline-flex items-center text-lg font-semibold">
                Full-Stack and AI Developer
                </h2>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="flex flex-col">
                    <span className="text-[15px] font-medium text-black">
                    Movile
                    </span>
                    {/* Utility to calculate itself */}
                    <span className="text-[12px] font-medium text-black">
                    2021  ~ 2023
                    </span>
                  </span>
                </div>
                <div className="mt-2 text-sm text-black text-justify">
                  <p>
                  - Built a FastAPI back end with GPT-3 API integration to generate a travel itinerary
                    for a trip and extract locations. These locations were then geo-encoded with co-ordinates.<br></br>
                  - Built a Next.js app to display the travel itinerary and show the geo-locations on Google
                  Maps color-codes corresponding to days in the trip and information about each location.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* First Experience */}
          <div className="flex max-w-2xl h-full flex-col items-center rounded-md border md:flex-row shadow-sm">
            <div>
              <div className="p-4">
                <h2 className="inline-flex items-center text-lg font-semibold">
                Frontend Developer
                </h2>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="flex flex-col">
                    <span className="text-[15px] font-medium text-black">
                    CI & T
                    </span>
                    <span className="text-[12px] font-medium text-black">
                    2017 ~ 2020
                    </span>
                  </span>
                </div>
                <div className="mt-2 text-sm text-black text-justify">
                  <p>
                  - Developed a front-end interface where the user could select one or more images 
                  from their local machine, upload them to a server, and display the images returned 
                  in the response from the server.<br></br>
                  - Created a back end using Django that processes uploaded images and return the output
                  image data.<br></br>
                  -Developed a REST API using Django REST Framework for managing surveys, interviewers,
                  sample, and quotas.<br></br>

                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Second Experience */}
          <div className="flex max-w-2xl h-full flex-col items-center rounded-md border md:flex-row shadow-sm">
            <div>
              <div className="p-4">
                <h2 className="inline-flex items-center text-lg font-semibold">
                Web Developer
                </h2>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="flex flex-col">
                    <span className="text-[15px] font-medium text-black">
                    Concrete Solutions
                    </span>
                    <span className="text-[12px] font-medium text-black">
                    2014 ~ 2017
                    </span>
                  </span>
                </div>
                <div className="mt-2 text-sm text-black text-justify">
                  <p>
                  - Built a FastAPI back end with GPT-3 API integration to generate a travel itinerary
                    for a trip and extract locations.
                    These locations were then geo-encoded with co-ordinates.<br></br>
                    - Built a Next.js app to display the travel itinerary and show the geo-locations on Google
                    Maps color-codes corresponding to days in the trip and information about each location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

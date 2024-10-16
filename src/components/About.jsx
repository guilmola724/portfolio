const About = () => {
  return (
    <div id="#about" className="bg-white py-2 md:py-10">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex lg:items-center lg:gap-x-8">
          <div className="w-full lg:w-1/2 hidden md:block">
            <img
              className="w-full h-auto object-cover rounded-lg"
              src="about-me.svg"
              alt="my-image"
            />
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <div className="px-4 py-8 md:py-10 lg:py-12">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-lg mb-4 text-justify">
                Hello, I&apos;m <span className="font-semibold">Guilherme</span>, a{" "}
                <span className="font-semibold">Full Stack Web Developer</span>{" "}
                focused on <span className="font-semibold">MERN</span> and{" "}
                <span className="font-semibold">Next.js, AI development</span>. <br></br>                         
              </p>
              <p className="text-lg mb-4 text-justify">
              I've developed and enhanced websites and web apps using{" "}  
              <span className="font-semibold"> 
                custom coding and integrating OpenAI and third-party APIs{" "}
              </span>such as {" "}  
              <span className="font-semibold"> 
                healthcare, e-commerce, travel, 
                directories, landing pages, salons, 
                learning platforms, 
                movie apps, maps, payments, and more.
              </span>
              </p>
              <p className="text-lg text-justify">
                Feel free to reach out to me, and let's bring your project to life. <br></br>
              <span  className="font-semibold">
              Looking forward to working with professional clients and members on a long term robust relationship
              </span>

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

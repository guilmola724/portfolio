const Hero = () => {
  return (
    <div id="#home" className="relative max-w-7xl mx-auto bg-white py-10">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:px-6 lg:py-24 xl:col-span-6">
          <h1 className="mt-8 text-4xl tracking-tight text-black lg:text-6xl">
            Hello, I&apos;m{" "}
            <span className="inline-block text-black font-bold">Guilherme</span>
          </h1>
          <p className="mt-2 lg:mt-3 text-xl text-black lg:text-3xl tracking-tight">
            a creative <span className="font-[500]">React, Python, Next.js, Node.js, AI Developer</span>.
          </p>

          <p className="mt-8 text-md lg:text-lg text-black text-justify">
            Welcome to my digital world! I&apos;m here to create{" "}
            <span className="font-semibold">engaging</span> and{" "}
            <span className="font-semibold">easy to use</span> digital
            experiences. As a{" "}
            <span className="font-semibold">full stack developer</span> who
            loves both technology and creativity, I turn ideas into reality.
          </p>

          
        </div>
        <div className="relative flex justify-end items-center lg:col-span-5 lg:pr-8 xl:col-span-6">
          <img
            className="object-cover w-full h-72 lg:h-auto lg:w-auto"
            src="me.svg"
            alt="my-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

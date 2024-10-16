import { Github, Link } from "lucide-react";

const projects = [
  {
    title: "MarketIO",
    imagecodeUrl: "market-io.JPG",
    description:
      "MarketIO is an e-commerce product comparison platform that scrapes products in real-time across 5 different platforms - AliExpress, Amazon, EzBuy, Lazada and Qoo10.",
    tags: [
      "#Next.js",
      "#Django REST Framework",
      "#Tailwind CSS",
      "#BeautifulSoup",
    ],
    liveUrl: "https://market-io.vercel.app/",
    codeUrl: "https://github.com/guilmola724/market-io-Django-Next.js",
  },
  {
    title: "Poker",
    imagecodeUrl: "pocker.png",
    description:
      "A full-stack poker web-app build with React, Node, Express & Socket.io",
    tags: [
      "#react",
      "#nodejs",
      "#Node.js",
      "#Express.js",
      "#poker",
      "#socket-io",
      "#poker-game",
      "#poker-game-server",
    ],
    liveUrl: "https://www.vintagepoker.net/",
    codeUrl: "https://github.com/guilmola724/Poker--MERN-stack",
  },
  {
    title: "Ecommerce-WebAPP",
    imagecodeUrl: "ecommerce.png",
    description:
      "A mock e-commerce website built using React, with the main functionality being the shopping cart.",
    tags: [
      "#hooks",
      "#ecommerce",
      "#shopping-cart",
      "#Express.js",
      "#reactjs",
      "#firebase-hosting",
      "#fakerjs",
    ],
    liveUrl: "https://shopxreact.web.app/",
    codeUrl: "https://github.com/guilmola724/Ecommerce-site-React",
  },
  {
    title: "Store",
    imagecodeUrl: "store.png",
    description:
      "An e-commerce store built with react, redux-toolkit and Material UI",
    tags: [
      "#react",
      "#react-router",
      "#material-UI",
      "#axios",
      "#reactjs",
      "#redux-toolkit",
    ],
    liveUrl: "https://peculiar-store.vercel.app/",
    codeUrl: "https://github.com/guilmola724/Store-React",
  },
  {
    title: "Real-Estate",
    imagecodeUrl: "estate.png",
    description:
      "Real Estate front end application",
    tags: [
      "#react",
      "#java",
      "#sass",
      "#reactjs",
    ],
    liveUrl: "http://real-estate-react-app.onrender.com/",
    codeUrl: "https://github.com/guilmola724/React-Estate-ReactAPP",
  },
  {
    title: "Doctor Appointment booking APP",
    imagecodeUrl: "doctor.png",
    description:
      "Find & Book Appointment with your Fav Doctors",
    tags: [
      "#next.js",
    ],
    liveUrl: "https://doctor-appointment-booking-web-nextjs.vercel.app/",
    codeUrl: "https://github.com/guilmola724/Doctor-Appointment-Booking-app",
  },
  
];

function Projects() {
  return (
    <div id="#projects" className="relative w-full py-10 bg-white">
      <div className="mx-auto max-w-7xl px-8">
        <h1 className="text-3xl font-bold mb-4 md:text-center">Projects</h1>
        <p className="text-lg mb-8 md:text-center">
          Explore my featured projects below.
        </p>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-md overflow-hidden border shadow-sm"
            >
              <img
                src={project.imagecodeUrl}
                alt="Project"
                className="h-48 w-full object-cover rounded-t-md"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold mb-2">{project.title}</h1>
                <p className="text-sm text-black text-justify mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-zinc-200 px-3 py-1 mr-2 mb-2 text-xs font-semibold text-gray-900 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    className="w-[120px] rounded-sm text-center bg-black text-xs font-semibold text-white px-2 py-1.5 shadow-sm  focus:outline-none focus:ring-2 focus:ring-black hover:underline"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Project{" "}
                    <Link className="inline-block ml-1" size={12} />
                  </a>
                  <a
                    className="w-[120px] rounded-sm text-center bg-black text-xs font-semibold text-white px-2 py-1.5 shadow-sm  focus:outline-none focus:ring-2 focus:ring-black hover:underline"
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code{" "}
                    <Github className="inline-block ml-1" size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

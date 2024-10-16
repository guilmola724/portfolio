import { DiReact, DiNodejs, DiDocker } from "react-icons/di";

const Skills = () => {
  return (
    <div id="#skills" className="bg-white py-10">
      <div className="max-w-7xl text-center mx-auto px-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="flex flex-col items-center">
            <DiReact className="text-4xl mb-2 text-blue-500" />
            <h2 className="text-xl font-semibold mb-2">Frontend</h2>
            <ul className="text-black">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Redux Toolkit</li>
              <li>Tailwind CSS</li>
              <li>Vue.js</li>

              {/* Add more frontend skills */}
            </ul>
          </div>

          {/* Backend Skills */}
          <div className="flex flex-col items-center">
            <DiNodejs className="text-4xl mb-2 text-green-500" />
            <h2 className="text-xl font-semibold mb-2">Backend</h2>
            <ul className="text-black">
              <li>Python/Django/Flask</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>Mongoose</li>
              <li>Drizzle</li>
              {/* Add more backend skills */}
            </ul>
          </div>

          {/* DevOps Skills */}
          <div className="flex flex-col items-center">
            <DiDocker className="text-4xl mb-2 text-purple-500" />
            <h2 className="text-xl font-semibold mb-2">AI Dev</h2>
            <ul className="text-black">
              <li>Artificial intelligent</li>
              <li>Open AI</li>
              <li>LanChain</li>
              <li>Llama</li>
              <li>Pinecone/Chroma</li>
              <li>Redis</li>
              <li>GPT</li>
              <li>HuggingAI</li>
              {/* Add more DevOps skills */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

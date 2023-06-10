import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black dark:text-white">
            Hi 👋 <br />
            I'm Batuhan. I'm a full stack <br />
            developer. I can craft solid and <br /> scalable frontend products.
            <br />
            Let's meet!
          </h1>

          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/mustafa-batuhan-tas/"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg items-center"
            >
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> &nbsp;
              LinkedIn
            </a>
            <a
              href="https://github.com/Batuhan-Tas"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg items-center" //www.linkedin.com/in/mustafa-batuhan-tas/
            >
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> &nbsp; GitHub
            </a>
          </div>
          <br />
          <p className="mb-8 leading-relaxed">
            Currently <span className="text-pink-600">Freelancing</span> for{" "}
            <span className="text-pink-600">UX,UI, & Web Design </span>
            Projects.
            <br />
            Invite me to join your team &#8594;{" "}
            <span
              className="text-pink-600"
              onClick={() => (window.location = "mailto:batuhan.tas@yahoo.com")}
            >
              batuhan.tas@yahoo.com
            </span>
          </p>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex items-center justify-center">
          <img
            className="object-cover object-center rounded drop-shadow-xl shadow-xl  shadow-pink-300"
            alt="me"
            src="photo.jpg"
            width={280}
          />
        </div>
      </div>
    </section>
  );
}

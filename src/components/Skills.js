import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faNode,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
  return (
    <>
      <div className="items-center justify-center ">
        <br />
        <div className="flex items-center justify-center text-3xl text-black ">
          <br />
          <h2 className="dark:text-white">Skills</h2>
        </div>
        <br />
        <div className="flex items-center justify-center flex-row space-x-10">
          <div>
            <FontAwesomeIcon
              icon={faJs}
              className="text-7xl text-yellow-400 bg-white-400  "
            ></FontAwesomeIcon>
            <p className="flex items-center justify-center dark:text-white ">
              JAVASCRIPT
            </p>
          </div>
          <div className="items-center justify-center">
            <FontAwesomeIcon
              icon={faReact}
              className="text-7xl text-cyan-400 bg-gray-800"
            ></FontAwesomeIcon>
            <p className="flex items-center justify-center dark:text-white">
              REACT
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faNode}
              className="text-7xl text-green-400 bg-black"
            ></FontAwesomeIcon>
            <p className="flex items-center justify-center dark:text-white">
              NODEJS
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faFigma}
              className="text-7xl dark:bg-black "
            ></FontAwesomeIcon>
            <p className="flex items-center justify-center dark:text-white">
              FIGMA
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

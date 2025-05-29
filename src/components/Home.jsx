import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";
import tailwindcssIcon from "@iconify-icons/simple-icons/tailwindcss";
import { FaRoute } from "react-icons/fa";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faJava,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div>
      <p>web developer</p>
      <p className="m-6 text-start">skills</p>
      <div className="flex ">
        <div>
          <FontAwesomeIcon
            icon={faHtml5}
            className="w-full text-amber-300 flex text-6xl  "
          />
          {"HTML"}
        </div>
        <div>
          <FontAwesomeIcon
            icon={faCss3Alt}
            className="w-full text-amber-300 text-6xl "
          />
          {"css"}
        </div>
        <div>
          <FontAwesomeIcon
            icon={faJs}
            className="w-full text-blue-300 text-6xl "
          />
          {"JavaScript"}
        </div>
        <div>
          <FontAwesomeIcon
            icon={faReact}
            className="w-full text-blue-300 text-6xl "
          />
          {"React"}
        </div>
        <div>
          <Icon icon={tailwindcssIcon} width="60" />
          {"Tailwind"}
        </div>
        <div>
          <FontAwesomeIcon
            icon={faJava}
            className="w-full text-blue-300 text-6xl"
          />
          {"core java"}
        </div>
        <div>
          <FaRoute size={40} color="red" />
          {"React Route"}
        </div>
      </div>

      <p className="text-start m-3 text-3xl">Projects</p>
    </div>
  );
}

export default Home;

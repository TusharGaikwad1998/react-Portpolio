import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const HandleDarkMode = () => {};
  return (
    <div className="w-full block space-x-4 mt-24">
      <div className="m-2 px-1 bg-gray-300 flex flex-1  text-center ">
        <a href="">
          {" linked in"}
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div className="m-2 px-1 bg-gray-300 flex flex-1 ">
        <a href="">
          {" Github"}
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="m-2 px-1 bg-gray-300 flex flex-1">
        <a href="">
          {"twitter"}
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}

export default Footer;

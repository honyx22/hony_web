import "./Footer.css"
import { FaInstagram } from "react-icons/fa6"
import { FaYoutube } from "react-icons/fa6"

const Footer = () => {
  return <div>
    <div className="mx-4 my-3">
      <ul className="flex gap-2 items-center flex-wrap justify-center lg:justify-end">
          <li className="">
              <a href="#" className="">
                  <li className=""><a href="#" className="text-[30px]"><FaInstagram /></a></li>
              </a>
          </li>

          <li className="">
              <a href="#" className="">
                  <li className=""><a href="#" className="text-[30px]"><FaYoutube /></a></li>
              </a>
          </li>
      </ul>
    </div>
  </div>
}

export default Footer
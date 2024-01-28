import "./Footer.css"
import { FaInstagram } from "react-icons/fa6"
import { FaYoutube } from "react-icons/fa6"

const Footer = () => {
  return <div>
    <footer className="bg-blue-500 py-5 px-5">
      <div className="">
        <div className="">
          <ul className="flex gap-5 items-center flex-wrap justify-around">
            <div className="flex justify-around items-center">
              <div className="">
                <h2>Links</h2>
                <li className="">
                    <a href="#" className="">
                        <li className=""><a href="#" className="text-[30px]"><FaInstagram /></a></li>
                    </a>
                </li>
              </div>

              <div className="">
                <h2>Profile</h2>
                <li className="">
                  <a href="#" className="">
                      <li className=""><a href="#" className="text-[30px]"><FaYoutube /></a></li>
                  </a>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  </div>
}

export default Footer
import "./Navbar.css"

const Navbar = () => {
    return <div>
        <nav className="bg-blue-500 py-3 px-5 text-[#d8d8d8 text-xl uppercase">
            <div className="flex lg:justify-around items-center text-gray-200 lg:w-[1000px] lg:m-auto flex-wrap flex-col lg:flex-row gap-8">
                <div className="">
                    <a href="#" className="hover:text-white transition duration-100">H&T</a>
                </div>
                <div className="">
                    <ul className="flex lg:gap-[45px] gap-2 items-center flex-wrap flex-col lg:flex-row">
                        <li className="flex items-center hover:text-white py-1 transition duration-100"><a href="#" className="">Home</a></li>
                        <li className="flex items-center hover:text-white py-1 transition duration-100"><a href="#" className="">Portfolio</a></li>
                        <li className="flex items-center hover:text-white py-1 transition duration-100"><a href="#" className="">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3b83f6" fill-opacity="1" d="M0,128L60,160C120,192,240,256,360,240C480,224,600,128,720,101.3C840,75,960,117,1080,128C1200,139,1320,117,1380,106.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" data-darkreader-inline-fill=""></path></svg>
    </div>
}
export default Navbar
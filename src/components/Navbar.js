import "./Navbar.css"

const Navbar = () => {
    return <div>
        <nav className="bg-[#595756] py-3 px-5 text-[#d8d8d8 text-xl uppercase">
            <div className="flex justify-around items-center text-gray-400 w-[1000px] m-auto">
                <div className="">
                    <a href="#" className="hover:text-white transition duration-100">H&T</a>
                </div>
                <div className="">
                    <ul className="flex gap-[45px] items-center flex-wrap">
                        <li className="flex items-center hover:text-white py-1 transition duration-100"><a href="#" className="">Home</a></li>
                        <li className="flex items-center hover:text-white py-1 transition duration-100"><a href="#" className="">Portfolio</a></li>
                        <li className="flex items-center hover:text-white py-1 transition duration-100"><a href="#" className="">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
}
export default Navbar
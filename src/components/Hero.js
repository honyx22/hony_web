import "./Hero.css"
import face from "../img/face.png"

const Hero = () => {
  return <div>
    <main className="r">
        <section className="font-[650] text-[60px]">
            <div className="flex flex-col text-center lg:text-left lg:w-[1400px] pt-[20px] m-auto">
                <div className="flex justify-between my-10 flex-col lg:flex-row">
                    <div className="pt-[50px]">
                        <div className="">
                            <h2>Hi,</h2>
                            <h2>Im <span className="text-blue-600 underline decoration-blue-600">HonyX</span></h2>
                            <h2>Web Designer</h2>
                        </div>

                        <div className="">
                            <button className="text-[20px] bg-blue-600 hover:bg-blue-700 focus:bg-blue-800 transition duration-100 py-1 px-5 rounded-md font-medium text-white">Contact me</button>
                        </div>
                    </div>

                    <div className="">
                        <img src={face} alt="face" className="px-4" />
                    </div>
                </div>
            </div>
        </section>
    </main>
  </div>
}

export default Hero
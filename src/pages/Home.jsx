import { Navbar } from "../components/Navbar";
import imgUrl from "../assets/premium_photo-1701090939615-1794bbac5c06.avif"
import { Button } from "../components/Button";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
    return <>
        <div className="h-screen w-full bg-darklight">
        <Navbar />
        <div className="w-full px-36 flex justify-around items-center">
            <div className="w-1/2">
                <div className="py-44 ml-4">
                    <div className="text-yellow mb-5">
                        <p className="text-yellow font-medium">Hello, Welcome</p>
                    </div>
                    <div className="mb-3">
                        <p className="text-3xl font-bold text-white">I am Abhishek Prajapati</p>
                    </div>
                    <div className="mb-8">
                        <p className="text-lg text-lightgray tracking-wide">Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Porro recusandae esse id magni. Iusto recusandae quis <br /> quasi ullam eum dignissimos vero</p>
                    </div>
                    <div>
                        <Button />
                    </div>
                </div>
            </div>
            <div className="w-1/3 bg-gray rounded-lg">
                <img src={imgUrl} alt="loading" className="h-object-cover rounded-lg" />
            </div>
        </div>
    </div>
    <div id="about" className="h-screen ">
        <About to={"/about"} />
    </div>
    <div id="projects" className="h-screen">
        <Projects to={"/projects"} />
    </div>
    <div id="contact" className="h-screen">
        <Contact to={"/contact"}/>
    </div>
    </>
}

export default Home;
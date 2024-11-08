import { Link, useLocation } from "react-router-dom"

export function Navbar({abo}) {
    // const navigate = Navigate();
    const location = useLocation();

    const scrollTosection = (Id) => {
        const element = document.getElementById(Id);
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
        console.log(element);
    };
    return <div className="h-20 bg-dark flex justify-around items-center">
        <div className="cursor-pointer text-xl font-bold flex items-center ml-16">
            <h3 className="text-white">Abhishek</h3>
            <h3 className="text-yellow">.Me</h3>
        </div>
        <div className="h-full w-2/4">
            <ul className="h-full w-full font-medium  flex items-center justify-evenly text-lightgray uppercase text-sm">
                <li>
                    <Link className="text-white pb-1 border-b-2 border-transparent hover:border-yellow transition duration-300 ease-in">Home</Link>
                </li>
                <li>
                    <Link onClick={() => scrollTosection("about")} className="pb-1 border-b-2 border-transparent hover:border-yellow transition duration-300 ease-in" >About</Link>
                </li>
                <li>
                    <Link onClick={() => scrollTosection("projects")} className="pb-1 border-b-2 border-transparent hover:border-yellow transition duration-300 ease-in">Projects</Link>
                </li>
                <li>
                    <Link className="pb-1 border-b-2 border-transparent hover:border-yellow transition duration-300 ease-in">Resume</Link>
                </li>
                <li>
                    <Link onClick={() => scrollTosection("contact")} className="pb-1 border-b-2 border-transparent hover:border-yellow transition duration-300 ease-in">Contact</Link>
                </li>
            </ul>
        </div>
    </div>
}

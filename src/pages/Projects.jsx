import { Card } from "../components/Card";
import  paytmImg  from "../assets/vecteezy_wallet-icon-design_27140755.png"
import todo from "../assets/todo.png";

const Projects = () => {
    const projectData = [
        {
            id: 1,
            title: "Paytm App",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, quae!",
            imgUrl: paytmImg,
            url: "https://github.com/abhishek62p/PaymentApp"
        }, {
            id: 2,
            title: "Authentcation App",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, quae!",
            ingUrl: "url",
            url: "https://github.com/abhishek62p/user-authentication"
        }, {
            id: 3,
            title: "Currency Exchange",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, quae!",
            imgUrl: "url",
            url: "https://currency-converter-drop.netlify.app"
        }, {
            id: 4,
            title: "Todo App",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, quae!",
            imgUrl: todo,
            url: "https://todo-app-drop.netlify.app",
        }, {
            id: 5,
            title: "Tic Tac",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, quae!",
            imgUrl: "url",
            url: "url"
        }
    ]

    return <div className="h-full bg-darklight">
        <div className="w-1/2 py-10 m-auto">
            <div className="pb-4 flex font-bold text-white text-3xl">
                <p>My</p>
                <p className="ml-3 text-yellow">Projects</p>
            </div>
            <div className="w-3/5 text-lightgray">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt rem sunt sequi itaque perferendis.</p>
            </div>
        </div>
        <div>
            <Card data={projectData} />
        </div>
    </div>
}

export default Projects;
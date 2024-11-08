import { Button } from "../components/Button";

const About = () => {
    return <div className="h-screen bg-dark flex justify-evenly items-center">
        <div className="flex h-full p-36">
            <div className="m-24">
                <div className="w-80 h-80 bg-yellow rounded-xl relative">
                    <div className=" h-80 w-80 bg-dark rounded-lg relative bottom-4 left-4">
                        <div className="w-80 h-80 bg-lightgray absolute rounded-lg bottom-4 left-4">

                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className="pl-12 pt-24 w-2/3">
                <div className="flex font-bold text-3xl text-white">
                    <p>About</p>
                    <p className="ml-2 mb-8 text-yellow">Me</p>
                </div>
                <div className="text-lightgray mb-4">
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, temporibus corporis <br /> iusto autem animi explicabo est pariatur a eaque rem perferendis vel omnis</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eos distinctio, minima <br /> quaerat  illum saepe exercitationem accusantium harum repudiandae </p>
                </div>
                <div>
                    <Button />
                </div>
            </div>
        </div>
    </div>
}

export default About;
import { Button } from "../components/Button";
import { Media } from "../components/Media";
import fb from "../assets/facebook-brands-solid.svg"
import dic from "../assets/discord-brands-solid.svg"
import git from "../assets/github-brands-solid.svg"
import insta from "../assets/instagram-brands-solid.svg"
import link from "../assets/linkedin-brands-solid.svg"
import twitter from "../assets/twitter-brands-solid.svg"
import { useState } from "react";
import emailjs from "emailjs-com"

const Contact = () => {
    const SocialIcon = [
        { src: fb, url: "https://facebook.com/abhishek62p" },
        { src: dic, url: "https://discord.com" },
        { src: git, url: "https://github.com/abhishek62p" },
        { src: insta, url: "https://instagram.com/abhishek62p" },
        { src: link, url: "https://linkedin.com/in/abhishek62p" },
        { src: twitter, url: "https://twitter.com/__abhishek62__" },
    ];

    const [message, setMessage] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setMessage({...message, [e.target.name]: e.target.value});
    }

    const validateMsg = () => {
        let isValid = true;
        const errors = {};

        if(!message.name) {
            errors.name = "Name is required";
            isValid = false;
        }

        if(!message.email) {
            errors.email = "Email is required";
            isValid = false;
        } else if (!!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Please enter a valid email address";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(validateMsg()) {
            alert("Message sent successfully");
            setMessage({name: "", email: "", message: ""});
        } else {
            alert("Please fill in all fields correctly")
        }
    }

    return <div className="h-screen bg-dark flex-col justify-end">
        <div className="w-1/3 m-auto text-center py-8">
            <div className="p-4 flex justify-center font-bold text-3xl text-white">
                <p>Contact</p>
                <p className="text-yellow ml-3">Me</p>
            </div>
            <div className="text-lightgray pb-8">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ad magni ea, quis sequi saepe unde, laudantium eligendi perspiciatis </p>
            </div>
        </div>
        <div className="flex justify-evenly items-center my-6">
            <div className="text-white">
                <p>address</p>
                <p>email</p>
            </div>
            <div className="flex-col text-grayIn">
                <div className="m-4">
                    <input onChange={handleChange} type="text" placeholder="Full Name"  className="p-2 w-4/5 placeholder-grauIn bg-darklight focus:outline-none" />
                </div>
                <div className="m-4">
                    <input onChange={handleChange} type="text" placeholder="user@email.com"  className="p-2 w-4/5 placeholder-grauIn bg-darklight focus:outline-none" />
                </div>
                <div className="m-4">
                    <textarea onChange={handleChange} placeholder="Type your message..."  rows="4"
                        className="bg-darklight p-2 w-96 placeholder-grayIn focus:outline-none"></textarea>
                </div>
                <div className="m-4 w-fit bg-yellow">
                    <Button type={"submit"} onClick={handleSubmit}/>
                </div>
            </div>
        </div>
        <div className="text-white m-auto w-full bg-darklight p-6">
            <div>
                <div className="p-2 font-bold text-3xl m-auto w-fit">
                    <p>AboutMe.</p>
                </div>
                <div className="w-1/3 m-auto p-4 text-center text-lightgray">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, quos non velit est voluptas nam?</p>
                </div>
            </div>
            <div className="m-auto w-1/5 flex">
                <Media icons={SocialIcon} />
            </div>
        </div>
    </div>
}

export default Contact;
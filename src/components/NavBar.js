import React from "react"
import {NavLink} from "react-router-dom";
 import {SocialIcon} from "react-social-icons";

export default function NavBar(){
    return (
        <header className="bg-pink-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-white" className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        Aashish
                
                    </NavLink>
                    <NavLink to="/Project" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        Projects
                    </NavLink>
                    <NavLink to="/post" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        BlogPosts
                    </NavLink>
                    <NavLink to="/About" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        About me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                <SocialIcon url="https://www.instagram.com/aashishupreti/?hl=en" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                <SocialIcon url="https://www.linkedin.com/in/aashish-upreti-a17966128/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                <SocialIcon url="https://www.facebook.com/aashish.upreti.92/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>

                </div>
            </div>
        </header>
    )
}
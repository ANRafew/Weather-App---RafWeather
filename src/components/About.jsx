import React from "react";
import { Line } from "react-chartjs-2";
import "./ChartSetup";
import { useEffect, useState } from "react";

function About(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="text-center">
            <button 
                onClick={() => setIsOpen(true)} 
                className=" text-white hover:text-blue-500 underline"
            >
                About
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-gray-700/50 p-6 shadow-lg w-80 text-center rounded-3xl">
                        <p className="text-2xl">Aryan Nur Rafew</p>
                        <div className="flex justify-center space-x-3 leading-tight mt-4">
                            <a
                            href="https://www.facebook.com/aryan.Rafew019/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <img
                                src="/Facebook_Logo_Primary.png"
                                alt="Facebook"
                                className="h-8 w-8 mr-2"
                            />
                            </a>
                            <a
                            href="https://github.com/ANRafew"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <img
                                src="/GitHub_Invertocat_White.png"
                                alt="GitHub"
                                className="h-8 w-8 mr-2"
                            />
                            </a>
                        </div>
                        <button 
                        onClick={() => setIsOpen(false)} 
                        >
                        <i className="fa-solid fa-circle-xmark text-3xl hover:text-4xl text-red-500 pt-8"></i>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
export default About;
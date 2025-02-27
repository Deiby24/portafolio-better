import React from "react";



const Footer = () => {
    return (
        <div id="footerpht" className="w-full bg-transparent py-10" style={{ zIndex: '1' }}>
            <div className="containerFooter max-w-7xl mx-auto px-4">
                <div id="Contact" className="subContainerFooter flex flex-col items-center justify-center space-y-6">
                    <div className="copyright text-center">
                        <h1 className="text-gray-400 text-sm md:text-base font-light tracking-wide">
                            &#169; Deiby Hernandez / All rights reserved
                        </h1>
                        <h2 className="text-gray-500 text-xs mt-2">
                            Made with <span className="text-purple-500">&#10084;</span> and React
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
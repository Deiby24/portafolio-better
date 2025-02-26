import React from "react";



const Footer = () => {
    return (
        <div id="footerpht" className="w-full bg-transparent py-10" style={{ zIndex: '1' }}>
            <div className="containerFooter max-w-7xl mx-auto px-4">
                <div id="Contact" className="subContainerFooter flex flex-col items-center justify-center space-y-6">
                    {/* Iconos de contacto con efecto hover */}
                    {/* <div className="contact flex space-x-8">
                        <a href="https://github.com/Deiby24" target="_blank" rel="noopener noreferrer">
                            <img
                                alt="GitHub"
                                src={images('./github-white.svg')}
                                className="w-10 h-10 transition-all duration-300 hover:scale-110 hover:opacity-80"
                            />
                        </a>
                        <a href="mailto:bhdeiby@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img
                                alt="Gmail"
                                src={images('./gmail.svg')}
                                className="w-10 h-10 transition-all duration-300 hover:scale-110 hover:opacity-80"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/deiby-hernandez/" target="_blank" rel="noopener noreferrer">
                            <img
                                alt="LinkedIn"
                                src={images('./linkedin.svg')}
                                className="w-10 h-10 transition-all duration-300 hover:scale-110 hover:opacity-80"
                            />
                        </a>
                    </div> */}

                    {/* Texto de copyright con efecto futurista */}
                    <div className="copyright text-center">
                        <h1 className="text-gray-400 text-sm md:text-base font-light tracking-wide">
                            &#169; Deiby Hernandez / Todos los derechos reservados
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
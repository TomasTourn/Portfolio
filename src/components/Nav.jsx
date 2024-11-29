import React from "react";

const Nav = () => {
    return (
        <header className="sm:hidden lg:block p-4 text-sm text-white mb-20">
            <nav className="flex justify-end items-center font-gunterz">
                <a href="#projects" className="mr-6">Projects</a>
                <a href="#skills" className="mr-6">Skills</a>
                <a href="#about" className="mr-6">About Me</a>
            </nav>
        </header>
    );
};

export default Nav;
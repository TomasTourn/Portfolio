import React from "react";

const Button = React.forwardRef(({ href, svg, title }) => {
    return (
        <a href={href} target="_blank" className="flex  justify-center hover:bg-red-500 items-center gap-3 cursor-pointer text-white font-sans bg-black px-7 py-3 rounded-full border-2 border-white hover:scale-105 duration-200 hover:border-red-700">
            <img src={svg} alt={`${title} icon`} />
            {title}
            <img src="src/assets/svg/share.svg" alt="Share icon" />
        </a>
    );
});

export default Button;

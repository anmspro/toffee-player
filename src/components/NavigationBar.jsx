// import { useEffect, useState } from "react";
import { navigationItems } from "../utils/data"

function NavigationBar() {

    return (
        <div className="fixed left-0 top-0 h-full w-14 z-50 flex flex-col items-center justify-center gap-4 border border-black bg-[linear-gradient(90deg,_#130016_0%,_rgba(19,_0,_22,_0)_164.91%)] shadow-sm">
            {navigationItems.map((item, index) => (
                <img className='text-white' src={item.icon} alt="" />
            ))}
        </div>
    );
};

export default NavigationBar;

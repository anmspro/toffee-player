import { useState, useEffect } from "react";
import { navigationItems } from "../utils/data"

function NavigationBar({ onNavigationChange }) {
    const [selectedItem, setSelectedItem] = useState(1);
    const handleItemClick = (itemName, index) => {
        setSelectedItem(index);
        onNavigationChange(itemName);
    };

    return (
        <div className="fixed left-0 top-0 h-full w-14 z-50 flex flex-col items-center justify-center gap-4 bg-[linear-gradient(90deg,_#130016_0%,_rgba(19,_0,_22,_0)_164.91%)] shadow-sm">
            {navigationItems.map((item, index) => (
                <div key={item.id} className={`cursor-pointer relative p-3 ${selectedItem === index ? 'border-r-4 border-[#FF3988]' : ''}`} onClick={() => handleItemClick(item.name, index)}>
                    <item.icon key={item.id} color={selectedItem === index ? '#FF3988' : '#E6EEF9'} />
                </div>
            ))}
        </div>
    );
};

export default NavigationBar;
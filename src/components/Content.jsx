import { useState, useEffect, useRef } from "react";
import toffee_logo from "../assets/images/icons/toffee.png";
import { contentList } from "../utils/data";
import Player from './Player';
import ComingSoon from "./ComingSoon";

function Content({ selectedNavigation, handleShowPlayer }) {
    const [selectedContent, setSelectedContent] = useState(-1);
    const ref = useRef(null);

    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case "ArrowUp":
                    navigateContent(-4);
                    break;
                case "ArrowDown":
                    navigateContent(4);
                    break;
                case "ArrowLeft":
                    navigateContent(-1);
                    break;
                case "ArrowRight":
                    navigateContent(1);
                    break;
                case "Enter":
                    handleShowPlayer(true);
                    break;
                default:
                    break;
            }
        }

        const handleMouseWheel = (event) => {
            const deltaY = event.deltaY;
            if (deltaY > 0) {
                navigateContent(4);
            } else if (deltaY < 0) {
                navigateContent(-4);
            }
        }

        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            });
        }

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("wheel", handleMouseWheel);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("wheel", handleMouseWheel);
        };
    }, [selectedContent]);

    const navigateContent = (direction) => {
        const currentIndex = contentList.findIndex(item => item.id === selectedContent);
        if (currentIndex !== -1) {
            let newIndex = currentIndex + direction;
            if (newIndex < 0) {
                newIndex = 0;
            } else if (newIndex >= contentList.length) {
                newIndex = contentList.length - 1;
            }
            setSelectedContent(contentList[newIndex].id);
        } else {
            setSelectedContent(contentList[0].id);
        }
    }

    const handleContentClick = (id) => {
        setSelectedContent(id);
        handleShowPlayer(true);
    };

    return (
        <div className="pl-12">
            <div className="p-8">
                <img src={toffee_logo} alt="" className="ml-auto" />
                {selectedNavigation === 'movies' ? (
                    <>
                        <p className="py-2 text-xl text-[#E6EEF9]">Dramas & Series</p>
                        <div className="flex flex-wrap -mx-2">
                            {contentList.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="sm:w-1/2 md:w-1/4 px-1 mb-2 cursor-pointer rounded-md"
                                    ref={item.id === selectedContent ? ref : null}
                                    onClick={() => handleContentClick(item.id)}>
                                    <div className="">
                                        <img
                                            src={item.image}
                                            alt=""
                                            className={`object-cover block w-full h-auto rounded-md ${item.id === selectedContent ? "border-4 border-[#FF3988]" : "border-4 border-transparent"} hover:border-4 hover:border-[#FF398880]`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <ComingSoon selectedNavigation={selectedNavigation} />
                )}
            </div>
        </div>
    );
}

export default Content;

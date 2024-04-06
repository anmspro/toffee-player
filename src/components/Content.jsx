import { useState, useEffect } from "react";
import toffee_logo from "../assets/images/icons/toffee.png";
import { contentList } from "../utils/data";
import Player from './Player';

function Content({ selectedNavigation }) {
    const [selectedContent, setSelectedContent] = useState(-1);
    const [showPlayer, setShowPlayer] = useState(false);

    useEffect(() => {
        function handleKeyDown(event) {
            if (!showPlayer) {
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
                        setShowPlayer(true);
                        break;
                    default:
                        break;
                }
            }
            if (event.key === "Escape") setShowPlayer(false);
        }

        function handleMouseWheel(event) {
            if (!showPlayer) {
                const deltaY = event.deltaY;

                if (deltaY > 0) {
                    navigateContent(4);
                } else if (deltaY < 0) {
                    navigateContent(-4);
                }
            }
        }

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("wheel", handleMouseWheel);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("wheel", handleMouseWheel);
        };
    }, [selectedContent, showPlayer]);

    function navigateContent(direction) {
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

    function handleContentClick(id) {
        setSelectedContent(id);
        setShowPlayer(true);
    }

    return (
        <div className="pl-12">
            <div className="p-8">
                <img src={toffee_logo} alt="" className="ml-auto" />
                {showPlayer ? (
                    <Player source="https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd" />
                ) : (
                    <>
                        {selectedNavigation === 'movies' ? (
                            <>
                                <p className="py-2 text-xl text-[#E6EEF9]">Dramas & Series</p>
                                <div className="flex flex-wrap -mx-2">
                                    {contentList.map((item, index) => (
                                        <div key={item.id} className="sm:w-1/2 md:w-1/4 px-1 mb-4 cursor-pointer rounded-md" onClick={() => handleContentClick(item.id)}>
                                            <div className="">
                                                <img src={item.image} alt="" className={`object-cover block w-full h-auto rounded-md ${item.id === selectedContent ? "border-4 border-[#FF3988]" : "border-4 border-transparent"} border-4 border-transparent hover:border-4 hover:border-[#FF398880]`} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <p>Live tv & Info page</p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default Content;

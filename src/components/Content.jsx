import { Fragment } from "react";
import toffee_logo from "../assets/images/icons/toffee.png"
import { contentList } from "../utils/data";

function Content({ selectedNavigation }) {
    return (
        <div className=" pl-12">
            <div className="p-8">
                <img src={toffee_logo} alt="" className="ml-auto" />
                {selectedNavigation === 'movies' ?
                    <>
                        <p className="py-2 text-xl text-[#E6EEF9]">Dramas & Series</p>

                        <div class="flex flex-wrap -mx-2">

                            {contentList.map((item, index) => (
                                <div className="sm:w-1/2 md:w-1/4 px-1 mb-4 cursor-pointer rounded-md">
                                    <div className="">
                                        {/* border-4 border-[#FF3988] this will be added if selected */}
                                        <img src={item.image} alt="Image" className="object-cover block w-full h-auto rounded-md border-4 border-transparent hover:border-4 hover:border-[#FF398880]" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                    :
                    <>
                        <p>Live tv & Info page</p>
                    </>
                }
            </div>
        </div>
    );
};

export default Content;

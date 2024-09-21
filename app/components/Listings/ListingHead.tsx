'use client';

import { useState, useEffect } from "react";
import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import Heading from "../Heading";
import Image from "next/image";
import HeartButton from "../HeartButton";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ListingHeadProps {
    title: string;
    locationvalue: string;
    imageSrc: string[];
    id: string;
    currentUser?: SafeUser | null,
}

const ListingHead: React.FC<ListingHeadProps> = ({
    title,
    locationvalue,
    imageSrc,
    id,
    currentUser
}) => {
    const { getByValue } = useCountries();
    const location = getByValue(locationvalue);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
        <br />
        <br />
            <Heading
                title={title}
                subtitle={`${location?.region}, ${location?.label}`}
            />
            <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
                {isMobile ? (
                    <Carousel
                        showThumbs={false}
                        showStatus={false}
                        infiniteLoop
                        autoPlay
                        interval={3000}
                    >
                        {imageSrc.map((src, index) => (
                            <div key={index} className="relative w-full h-[60vh]">
                                <Image
                                    alt={`Image ${index + 1}`}
                                    src={src}
                                    fill
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        ))}
                    </Carousel>
                ) : (
                    <div className="flex h-full gap-1">
                        <div className="w-2/3 h-full relative">
                            <Image
                                alt="Main Image"
                                src={imageSrc[0]}
                                fill
                                className="object-cover w-full h-full rounded-l-xl"
                            />
                        </div>
                        <div className="w-1/3 h-full flex flex-col gap-1">
                            {imageSrc.slice(1, 3).map((src, index) => (
                                <div key={index} className="relative flex-1">
                                    <Image
                                        alt={`Image ${index + 2}`}
                                        src={src}
                                        fill
                                        className="object-cover w-full h-full rounded-r-xl"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="absolute top-5 right-5">
                    <HeartButton 
                        listingId={id}
                        currentUser={currentUser}
                    />
                </div>
            </div>
        </>
    );
};

export default ListingHead;

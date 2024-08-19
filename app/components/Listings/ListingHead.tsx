'use client';

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import Heading from "../Heading";
import Image from "next/image";
import HeartButton from "../HeartButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ListingHeadProps {
    title: string;
    locationvalue: string;
    imageSrc: string[];
    id: string;
    currentUser?: SafeUser | null,
}

const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer flex items-center justify-center bg-black bg-opacity-75 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={onClick}
        >
            &#9654;
        </div>
    );
};

const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer flex items-center justify-center bg-black bg-opacity-75 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={onClick}
        >
            &#9664;
        </div>
    );
};

const ListingHead: React.FC<ListingHeadProps> = ({
    title,
    locationvalue,
    imageSrc,
    id,
    currentUser
}) => {
    const { getByValue } = useCountries();
    const location = getByValue(locationvalue);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        arrows: true,
    };

    return (
        <>
            <Heading
                title={title}
                subtitle={`${location?.region}, ${location?.label}`}
            />
            <div
                className="
                    w-full
                    h-[60vh]
                    overflow-hidden
                    rounded-xl
                    relative
                    group
                ">
                <Slider {...settings}>
                    {imageSrc.map((src, index) => (
                        <div key={index} className="relative w-full h-[60vh]">
                            <Image
                                alt={`Image ${index + 1}`}
                                src={src}
                                fill
                                className="object-contain w-full h-full"
                            />
                        </div>
                    ))}
                </Slider>
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

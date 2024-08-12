'use client';

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
    var cloudinary: any;
}

interface ImageUploadProps {
    onChange: (value: string[]) => void;
    value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    onChange,
    value
}) => {
    const handleUpload = useCallback((result: any) => {
        const newImage = result.info.secure_url;
        onChange([...value, newImage].slice(0, 3)); // Permettre seulement jusqu'à 3 images
    }, [onChange, value]);

    return (
        <CldUploadWidget
            onUpload={handleUpload}
            uploadPreset="hybqwfaq"
            options={{
                maxFiles: 1 // Limiter à 1 par téléchargement mais permet plusieurs téléversements
            }}
        >
            {({ open }) => {
                return (
                    <div
                        onClick={() => open?.()}
                        className="
                            relative
                            cursor-pointer
                            hover:opacity-70
                            transition
                            border-dashed
                            border-2
                            p-20
                            border-neutral-300
                            flex
                            flex-col
                            justify-center
                            items-center
                            gap-4
                            text-neutral-600
                        "
                    >
                        <TbPhotoPlus size={50} />
                        <div className="font-semibold text-lg">
                            Cliquez pour télécharger des images
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {value.map((imageSrc, index) => (
                                <div key={index} className="relative w-24 h-24">
                                    <Image 
                                        alt="Upload"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        src={imageSrc}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                );
            }}
        </CldUploadWidget>
    );
};

export default ImageUpload;

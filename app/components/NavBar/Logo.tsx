'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
const Logo = () => {
    const router = useRouter();
    return (
            <Image 
            onClick={() => router.push('/')}
                alt="Atypik"
                className="hidden md:block cursor-pointer"
                height="100"
                width="100"
                src="/images/logo_atypikhouse.png"
            />
        );
};

export default Logo;
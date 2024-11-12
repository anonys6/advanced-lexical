"use client";

import { Pen } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "@/assets/text.svg";
import Image from "next/image";

const Header = () => {
    const [isWideScreen, setIsWideScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth >= 768);
        };

        handleResize(); // Set initial value
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header className="flex justify-center m-0 bg-white">
            <nav className="flex w-[1200px] items-center justify-between py-4 px-4">
                <Link href="/" className="text-3xl font-bold text-blue-600 flex gap-2 items-center">
                    {isWideScreen ? (
                        <>
                            {/* <Pen /> */}
                            <Image
                                src={logo}
                                alt="Text Editor Logo"
                                width={32}
                                height={32}
                            />
                            Advanced Text Editor
                        </>
                    ) : (
                        // <Pen size={28} />
                        <Image
                            src={logo}
                            alt="Text Editor Logo"
                            width={28}
                            height={28}
                        />
                    )}
                </Link>
                <div className="flex items-center space-x-6">
                    <Link href="/" className="text-gray-600 text-lg hover:text-gray-900">
                        Home
                    </Link>
                    <Link href="/blogs" className="text-gray-600 text-lg hover:text-gray-900">
                        Blog
                    </Link>
                    <Link href="/privacy" className="text-gray-600 text-lg hover:text-gray-900">
                        Privacy
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
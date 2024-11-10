import Link from "next/link"


const Header = () => {
    return (
        <header className="flex justify-center m-0 bg-white">
            <nav className="flex w-[1200px] items-center justify-between py-4">
                <Link href="/" className="text-3xl font-bold text-blue-600">
                    Advanced Text Editor
                </Link>
                <div className="flex items-center space-x-6">
                    <Link
                        href="/"
                        className="text-gray-600 text-lg hover:text-gray-900"
                    >
                        Home
                    </Link>
                    <Link
                        href="/blog"
                        className="text-gray-600 text-lg hover:text-gray-900"
                    >
                        Blog
                    </Link>
                    <Link
                        href="/privacy"
                        className="text-gray-600 text-lg hover:text-gray-900"
                    >
                        Privacy
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
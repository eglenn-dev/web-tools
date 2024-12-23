export default function Footer() {
    return (
        <footer className="bg-[#18182c] text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p>&copy; {new Date().getFullYear()} WebTools. All rights reserved.</p>
                <div className="mt-4">
                    <a href="https://eglenn.dev" className="text-gray-400 hover:text-white mx-2">
                        Tools Developed by Ethan Glenn
                    </a>
                </div>
            </div>
        </footer>
    )
}
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col">
            <section className="flex-grow flex items-center justify-center bg-transparent text-white">
                <div className="text-center px-4">
                    <h1 className="text-6xl font-bold mb-4">404</h1>
                    <h2 className="text-3xl font-semibold mb-4">Oops! Page Not Found</h2>
                    <p className="text-xl mb-8">
                        It seems the tool you&#39;re looking for doesn&#39;t exist.
                    </p>
                    <Link
                        href="/"
                        className="bg-white text-[#18182c] px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300"
                    >
                        Return to Homepage
                    </Link>
                </div>
            </section>
        </div>
    );
}
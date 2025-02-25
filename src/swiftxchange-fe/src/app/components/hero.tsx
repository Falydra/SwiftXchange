export default function Hero() {
    return (
        <div className="w-full z-10 h-screen  flex flex-col items-center py-4 justify-center px-4">
            <h1 className="font-semibold text-6xl text-white">
                The New Marketplace
            </h1>
            <p className="justify-center text-center text-white align-middle">
            Lorem ipsum is a dummy or placeholder text commonly used in <br/> graphic design, publishing, and web development to fill empty <br/> spaces in a layout that does not yet have content.
            </p>
            <div className="flex py-4 w-3/5 items-center justify-center gap-4 flex-row">
                <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg">
                    Get Started
                </button>
                <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg">
                    Learn More
                </button>

            </div>
        </div>
    );
}
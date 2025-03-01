export default function Navbar() {
    return (
        <div className="w-full fixed z-20">
            <div className="w-full h-16 top z-15-0 left-0 sticky backdrop-blur-lg flex flex-row items-center py-4 justify-center px-4">

                <div className="flex-row flex w-full h-full items-center justify-start">
                    <h1 className="font-semibold text-xl text-white">
                        SwiftXchange
                    </h1>
                </div>

                <div className="flex-row flex w-full h-full items-center justify-center gap-8">
                    <h1 className="font-semibold text-xl text-white">
                        Home
                    </h1>
                    <h1 className="font-semibold text-xl text-white">
                        Marketplace
                    </h1>
                    <h1 className="font-semibold text-xl text-white">
                        
                    </h1>
                </div>
                <div className="flex-row flex w-full h-full items-end justify-end">
                    <h1 className="font-semibold text-xl text-white">
                        Login
                    </h1>
                </div>
            </div>
        </div>
        
    );
}
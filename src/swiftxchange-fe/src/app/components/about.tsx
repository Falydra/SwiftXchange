export default function ABout() {
    return (
        <div className="w-full flex h-screen flex-row items-center py-4 justify-center px-4">
            <div className="w-full flex-col h-full items-start justify-center flex">
                <h1 className="font-semibold text-5xl text-black">
                    About Us
                </h1>
                <p className="text-black text-2xl"> 
                Lorem ipsum is a dummy or placeholder text <br/>  commonly used in graphic design, publishing, <br/>  and web development to fill empty spaces in a<br/>  layout that does not yet have content.
                </p>

            </div>
            <div className="w-full flex-col items-center justify-center flex h-full">
                <div className="w-3/4 bg-transparent h-3/4 flex flex-row items-center justify-center">
                    <div className="w-full h-full flex flex-col items-center justify-start mb-6 mr-4 ">
                        <div className="w-full h-full bg-white mb-4"/>
                        <div className="w-full h-full bg-white"/>


                    </div>
                    <div className="w-full h-full flex flex-col items-center justify-start mt-6">
                        <div className="w-full h-full bg-white"/>
                        <div className="w-full h-full bg-white mt-4"/>


                    </div>

                </div>
            </div>

        </div>
    );
}
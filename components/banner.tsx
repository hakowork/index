import Button from "./button"

const Header = () => {
    return (
        <div className="h-screen bg-left-bottom bg-cover bg-center bg-no-repeat bg-[url('/background.jpg')]">
            <div className="h-screen w-full bg-gradient-to-t from-neutral-900 absolute"></div>
            <div className="px-6 sm:px-0 sm:container sm:mx-auto">
                <div className="flex items-center h-screen">
                    <div className="sm:w-3/6 align-middle text-left z-[2]">
                        <h1 className="font-general-semibold font-mont text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-gray-50">GHOST ID Project</h1>
                        <p className="font-general-medium font-mont mt-2 text-lg sm:text-xl  xl:text-2xl text-center sm:text-left leading-none text-gray-300">Game about fighting the ghost using weapon. This game is inspired by zombie game in Roblox.</p>
                        <div className="block text-center sm:text-left">
                            <Button title="play" url="https://ba-ka.org/gip"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
import ButtonLogin from "./ButtonLogin"

function Header() {
    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-slate-950/65 backdrop-blur-md text-white h-18 py-2 z-10 flex justify-center">
                <div className="container flex justify-between items-center h-full px-10 ">
                    <h1 className="text-3xl font-bold">My Tinerary</h1>
                    <ul className="flex justify-center items-center gap-4 h-full">
                        <li><a href="#" className="hover:text-gray-300 text-xl font-bold">Home</a></li>
                        <li><a href="#" className="hover:text-gray-300 text-xl font-bold">Cities</a></li>
                        < ButtonLogin />
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header

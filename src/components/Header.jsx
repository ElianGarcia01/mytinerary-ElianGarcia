import ButtonLogin from "./ButtonLogin"

function Header() {
    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-slate-950/75 backdrop-blur-md text-white p-4 z-10">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-3xl font-bold">My Tinerary</h1>
                    <ul className="flex justify-center items-center gap-4">
                        <li><a href="#" className="hover:text-gray-300 text-xl font-bold">Home</a></li>
                        <li><a href="#" className="hover:text-gray-300 text-xl font-bold">Cities</a></li>
                        <ButtonLogin />
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header

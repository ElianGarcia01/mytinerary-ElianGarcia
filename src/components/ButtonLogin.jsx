export default function LoginButton() {
    return (
        <button className="bg-[#3E6B48] text-white text-xl font-bold py-6 px-3 rounded-lg flex items-center gap-2 hover:bg-[#3E6B48]/80 transition h-10 w-28 cursor-pointer">
            <svg className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            Login
        </button>
    )
}

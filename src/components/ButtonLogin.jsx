export default function LoginButton() {
    return (
        <button className="bg-blue-600 text-white text-xl font-bold py-7 px-3 w-auto rounded-lg flex items-center gap-2 hover:bg-blue-700 transition h-full">
            <svg className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            Login
        </button>
    )
}

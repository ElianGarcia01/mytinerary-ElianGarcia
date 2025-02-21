import { Outlet } from "react-router-dom"
import Header from "../components/Header"


export default function StandardLayout() {
    return (
        <>
            <div className="min-h-screen bg-cover bg-center"
                style={{ backgroundImage: "url('https://mytinerary-mern.vercel.app/img/home.jpg')" }}>
                <Header></Header>
                <Outlet></Outlet>
            </div>

        </>
    )
}
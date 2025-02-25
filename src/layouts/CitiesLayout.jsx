import { Outlet } from "react-router-dom"
import Header from "../components/Header"

export default function CitiesLayout() {
    return (
        <>
            <div>
                <Header></Header>
                <Outlet></Outlet>
            </div>

        </>
    )
}
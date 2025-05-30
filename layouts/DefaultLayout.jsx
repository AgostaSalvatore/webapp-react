import { Outlet } from "react-router-dom";

function DefaultLayout() {
    return (
        <>
            <header>

            </header>
            <main className="container">
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayout

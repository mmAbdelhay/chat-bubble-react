import {useContext} from "react";
import {MainContext} from "../../context/StoreProvider.tsx";

const NavBar = () => {
    const {setDirection, direction, setUser} = useContext(MainContext)

    const handleRtl = () => {
        setDirection(direction === "ltr" ? "rtl" : "ltr")
    }
    return (
        <header className="h-10 navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h7"/>
                        </svg>
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <button onClick={handleRtl}>{direction === "ltr" ? "rtl" : "ltr"}</button>
                        </li>
                            <li>
                                <button onClick={() => setUser(null)}>Log out</button>
                            </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl">Chat bubble</a>
            </div>
            <div className="navbar-end"></div>
        </header >
    )
}

export default NavBar;
import classes from "./Navbar.module.css";
import Main from "../../../pages/Main/Main";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Tasks from "../../../pages/Tasks/Tasks";
import Awards from "../../../pages/Awards/Awards";
import Settings from "../../../pages/Settings/Settings";


const Navbar = () => {
    return (
        <BrowserRouter>
            <nav className={classes.navbar}>
                <h1 className={classes.navbarTitle}>Меню</h1>
                <Link to='' className={classes.navbarItem}>Главная</Link>
                <Link to='/lol' className={classes.navbarItem}>Задания</Link>
                <Link to='/pizda' className={classes.navbarItem}>Награды</Link>
                <Link to='/settings' className={classes.navbarItem}>Настройки</Link>
            </nav>
            <Routes>
                <Route path="" element={<Main/>}/>
                <Route path="/lol" element={<Tasks/>}/>
                <Route path="/pizda" element={<Awards/>}/>
                <Route path="/settings" element={<Settings/>}/>
            </Routes>
        </BrowserRouter>
    );
};
export default Navbar;


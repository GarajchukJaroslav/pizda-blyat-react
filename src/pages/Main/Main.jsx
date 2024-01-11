import classes from "./Main.module.css";
import Header from "../../components/UI/Header/Header";
import Data from "../../components/UI/Data/Data";
import ShopBtn from "../../components/UI/ShopBtn/ShopBtn";

const Main = () => {
    return (
        <div className={classes.main}>
            <Header/>
            <div style={{background: "red", height: 800, width: 350, margin: '0 auto'}}></div>
            <ShopBtn/>
            <Data />
        </div>
    );
};

export default Main;
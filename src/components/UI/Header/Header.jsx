import classes from "./Header.module.css";
const Header = () => {
    return (
        <div className={classes.header}>
            <button className={classes.helpBtn}>Справка</button>
            <div className={classes.ballanceGroupe}>
                <div className={classes.money}>
                    <img alt={"money"} style={{width: 50}} src='https://cdn.icon-icons.com/icons2/1386/PNG/512/game-crypto-cryptocurrency-cryptocurrencies-cash-money-bank-payment_95704.png'/>
                    <span className={classes.moneyValue}>999999</span>
                </div>
                <div className={classes.cristal}>
                    <img alt={"dimond"} style={{width: 50}} src='../../../img/dimond.png'/>
                    <span className={classes.cristalValue}>999</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
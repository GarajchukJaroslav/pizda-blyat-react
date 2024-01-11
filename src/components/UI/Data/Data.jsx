import classes from "./Data.module.css";
const Data = () => {
    return (
        <div className={classes.data}>
            <div style={{width: 200, height: 12, background: 'blue'}}></div>
            <div style={{width: 70, height: 12, background: "violet"}}></div>
            <div style={{width: 10, height: 12, background: "green"}}></div>
        </div>
    );
};

export default Data;
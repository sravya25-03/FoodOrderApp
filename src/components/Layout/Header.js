import React , { Fragment } from "react";
import mealImage from "../../assets/meals.jpg"
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header =(props)=>{
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Delicious</h1>
                <div><HeaderCartButton onClick={props.onShowCart}/></div>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt="delicious meals"/>
            </div>
        </Fragment>
    )
}

export default Header;
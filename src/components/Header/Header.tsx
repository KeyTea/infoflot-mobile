import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {selectCruise} from "../../store/cruiseReducer";
import {NavLink} from "react-router-dom";
import classes from "./Header.module.css";
import {Icon} from "@material-ui/core";

const Header: React.FC = () => {
    const [input, setInput] = useState('');
    const dispatch = useAppDispatch();
    const cruise = useAppSelector(selectCruise);
    return (
        <div className={classes.header}>
            <nav className={classes.nav}>
                <NavLink className={classes.link} activeClassName={classes.active} to='/cruises'>Круизы</NavLink>
                <NavLink className={classes.link} activeClassName={classes.active} to='/ships'>Теплоходы</NavLink>
                <NavLink className={classes.link} activeClassName={classes.active} exact to='/'>
                    <Icon>home</Icon>
                </NavLink>
            </nav>
        </div>
    )
}

export default Header;

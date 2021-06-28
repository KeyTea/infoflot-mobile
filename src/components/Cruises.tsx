import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {selectCruise, setId} from "../store/cruiseReducer";
import Search from "./Search";
import {Redirect, Route} from "react-router-dom";
import {ConfirmationDialog} from "./AppDialog";

const Cruises: React.FC = () => {
    const dispatch = useAppDispatch();
    const cruise = useAppSelector(selectCruise);

    useEffect(() => {
        dispatch(setId(''));
    },[cruise.id, cruise.error]);
    useEffect(() => {

    })
    if (cruise.error) {
        return (
            <>
                <div>
                    <Route path="/cruises">
                           <Search subject={'круиз'}/>
                           <Redirect to={"/cruises/"} />
                    </Route>
                </div>
                <ConfirmationDialog error={cruise.error}/>
            </>)
    } else {
        return (
            <>
                <div>
                    <Route path="/cruises">
                        {cruise.id === ''
                            ? <><Search subject={'круиз'}/>
                                <Redirect to={"/cruises/"} />
                            </>
                            : <Redirect to={"/cruises/"+cruise.id} /> }
                    </Route>
                </div>
                <ConfirmationDialog error={cruise.error}/>
            </>
        )
    }
}

export default Cruises;

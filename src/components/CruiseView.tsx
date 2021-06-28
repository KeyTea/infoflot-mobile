import React, {useEffect} from "react";
import {Suggestion} from "../config/types";
import {getCruise, selectCruise} from "../store/cruiseReducer";
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {cruiseDescRus, cruiseUrl, cruiseJson, cruiseJson2} from "../config/constants";
import Loader from "./Loader/Loader";
import {Table} from "react-bootstrap";
import TimetableView from "./TimetableView";
import ControlledCarousel from "./ControlledCarousel";
import { useParams } from "react-router-dom";
import Booking from "./Booking";
import ReactHtmlParser from 'react-html-parser';


export type Props = {
    cruiseId: string
}

const CruiseView: React.FC = () => {
    const dispatch = useAppDispatch();
    const cruise = useAppSelector(selectCruise);
    const headers = cruiseDescRus;
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        dispatch(getCruise({url: cruiseUrl, id: id}));
        const dateStart: Date = new Date(cruise.cruise.dateStart);
        const endStart: Date = new Date(cruise.cruise.dateEnd);
        console.log("DATE: " + dateStart.getUTCDate() + " " + dateStart.getMonth());
        // dispatch(setCruise(cruiseJson2));
        // dispatch(setIsLoading(false));
    }, []);


    if (cruise.isLoading) {
      return  <Loader/>
    }
    else {
        return (
            <div>
                {cruise.cruise.photos === null ? <h1>Круиз {cruise.cruise?.name}</h1> : <ControlledCarousel/>}
                <Table style={{ width: '100%'}} striped hover>
                    <tbody>
                        <tr>
                            <td>{headers[0]}</td>
                            <td>{cruise.cruise.name}</td>
                        </tr>
                        <tr>
                            <td>{headers[1]}</td>
                            <td>{cruise.cruise.ship?.name}</td>
                        </tr>
                        <tr>
                            <td>{headers[2]}</td>
                            <td>{cruise.cruise.route}</td>
                        </tr>
                        <tr>
                            <td>{headers[3]}</td>
                            <td>{cruise.cruise.min_price_rur} руб.</td>
                        </tr>
                        <tr>
                            <td>{headers[4]}</td>
                            <td><div className="items-text">{ReactHtmlParser(cruise.cruise.description)}</div>
                            </td>
                        </tr>
                        <tr>
                            <td>{headers[5]}</td>
                            <td>{cruise.cruise.dateStart}</td>
                        </tr>
                        <tr>
                            <td>{headers[6]}</td>
                            <td>{cruise.cruise.dateEnd}</td>
                        </tr>
                        <tr>
                            <td>{headers[7]}</td>
                            <td>{cruise.cruise.days}/{cruise.cruise.nights}</td>
                        </tr>
                        <tr>
                            <td>{headers[8]}</td>
                            <td><a href={cruise.cruise.timetablePdf}>Расписание</a></td>
                        </tr>
                        <tr style={{background: 'white'}}>
                            <td>{headers[9]}</td>
                            <td>
                                {cruise.cruise.sug?.map((s: Suggestion,i: number) =>
                                        <img width="50px" key={i} src={s.icon}/>
                                    )}
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Booking/>
            </div>
        )
    }
}

export default CruiseView;



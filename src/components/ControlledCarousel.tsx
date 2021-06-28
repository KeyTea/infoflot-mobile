import {Carousel} from "react-bootstrap";
import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {selectCruise} from "../store/cruiseReducer";
import {CruisePhoto} from "../config/types";

const ControlledCarousel: React.FC = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };
    const dispatch = useAppDispatch();
    const cruise = useAppSelector(selectCruise);


    return (
            <Carousel activeIndex={index} onSelect={handleSelect}>
            {cruise.cruise.photos?.map((photo: CruisePhoto,index: number) =>
                (
            <Carousel.Item key={index}>
                <img  className="d-block w-100" src={photo.filename} alt={'slide' + index.toString()}/>
                <Carousel.Caption>
                    <h3>{cruise.cruise?.name}</h3>
                    <p>{photo.description}</p>
                </Carousel.Caption>
            </Carousel.Item>
                ))}
        </Carousel>
    );
}

export default ControlledCarousel;

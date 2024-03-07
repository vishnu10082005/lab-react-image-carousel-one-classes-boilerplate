import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
    const[index,setIndex] = useState(0);

    const decreaseindex = () =>{
        index != 0 ?
        setIndex(index - 1) : setIndex(images.length - 1)
    }
    const increaseindex = () =>{
        index == images.length - 1 ? setIndex(0): setIndex(index + 1)
    }
    return(

        <div className="caraousel-container flex">
            <div className="leftarrow arrowdiv flex"><ArrowBackIosIcon className="white" onClick={decreaseindex}/></div>
            <h1 className="title">{images[index].title}</h1>
            <img src={images[index].img} alt="" />
            <h4 className="caption">{images[index].subtitle}</h4>
            <div className="rightarrow arrowdiv flex"><ArrowForwardIosIcon className="white" onClick={increaseindex}/></div>
        </div>
    )
}

export default Carousel;
import React from "react";
import { Carousel } from 'react-bootstrap'
import WorkImg from "../assets/work.jpg";
import OtherImg from "../assets/otherpics.jpg";

function HomeCarousel() {
    return (
        <div className="home">
            <Carousel interval={null}>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={WorkImg}
                        alt="Work"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={OtherImg}
                        alt="Others"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HomeCarousel;

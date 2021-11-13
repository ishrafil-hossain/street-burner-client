import React from 'react';
import { Carousel } from 'react-bootstrap';
import a from './download.jpg';
import b from './download2.png';
import c from './download3.jpg';

const Banner = () => {
    const mystyle = {
        width: "640px",
        height: "500px"
    };
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img style={mystyle}
                    className="d-block w-100"
                    src="https://i.ibb.co/JpsgpWL/bike3.jpg"
                    alt="First slide"
                // https://i.ibb.co/3p5WdL2/bike1.jpg
                />
                <Carousel.Caption>
                    <h3>Everything looks better from the inside of a motorcycle helmet</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img style={mystyle}
                    className="d-block w-100"
                    src="https://i.ibb.co/8PFPWHm/b1.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Biker heaven, Free road, Full tank, Full throttle</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={mystyle}
                    className="d-block w-100"
                    src="https://i.ibb.co/FJt2xqm/download2.png"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Everyday is a good day for ride.</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
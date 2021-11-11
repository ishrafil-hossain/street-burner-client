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
                    src={a}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img style={mystyle}
                    className="d-block w-100"
                    src={c}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={mystyle}
                    className="d-block w-100"
                    src={b}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
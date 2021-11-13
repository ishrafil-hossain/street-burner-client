import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';

const Gallery = () => {
    return (
        <Container id='gallery'>
            <h1 className='text-info mt-5 mb-5 text-center'>Our Gallery</h1>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/1TQ30pJ/1-Yamaha-FZS-Fi-V2.png" />
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/fDmsLxw/4-Suzuki-GSX-S150.png" />
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/4mDkgt1/5-Suzuki-GSX-R150.png" />
                </Card>
            </CardGroup>

            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/ysy3LH4/6-Bajaj-NS-160.png" />
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/ZVJxy7F/7-Honda-CB-150-R-Streetfire.png" />
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/xmMVKkm/9-Aprilia-RS4-125.png" />
                </Card>
            </CardGroup>
        </Container>
    );
};

export default Gallery;
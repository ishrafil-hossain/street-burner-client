import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-dark text-light mt-5'>
            <div>
                <Row className='p-5'>
                    <Col lg={4} md={3} sm={12} xm={12}>
                        <h3>About</h3>
                        <p className='text-secondary'>Street-Burner ships from Monday to Saturday with the exception of public holidays. We ship complete orders only, i.e. the dispatch usually takes place as soon as all ordered items are ready for dispatch. Please contact the Street-Burner service team if you wish a partial delivery. Should you choose "cash in advance" as method of payment, the delivery time is extended, since the shipping process will not start before the actual receipt of payment.</p>
                    </Col>
                    <Col lg={4} md={3} sm={12} xm={12}>
                        <h3>Our Bikes</h3>
                        <h6 className='text-secondary'>Yamaha_FZS_Fi_V2</h6>
                        <h6 className='text-secondary'>Yamaha-R15-v2-0</h6>
                        <h6 className='text-secondary'>Yamaha-M-SLAZ-150</h6>
                        <h6 className='text-secondary'>Suzuki-GSX-S150</h6>
                        <h6 className='text-secondary'>Suzuki-GSX-R150</h6>
                        <h6 className='text-secondary'>Bajaj-NS-160</h6>
                        <h6 className='text-secondary'>Honda-CB-150-R-Streetfire</h6>
                        <h6 className='text-secondary'>Honda-CB150-R-Exmotion</h6>
                        <h6 className='text-secondary'>Aprilia-RS4-125</h6>
                        <h6 className='text-secondary'>Kawasaki-KTX-150-BG</h6>
                        <h6 className='text-secondary'>KTM-Duke-125</h6>
                    </Col>

                    <Col lg={4} md={3} sm={12} xm={12} className='text-start'>
                        <h3>Get Social</h3>
                        <div className="d-flex justify-content-start">
                            <h2> <a className="text-light" href="https://www.facebook.com/Sr.Faisu/"> <i className="fab fa-facebook me-3"></i></a></h2>

                            <h2><a className="text-light" href="https://github.com/ishrafil2233"><i className="fab fa-github me-3"></i></a> </h2>

                            <h2> <a className="text-light" href="https://www.instagram.com/ih__faisal/"><i className="fab fa-instagram-square me-3"></i></a></h2>

                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Footer;
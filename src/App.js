import React from 'react';
import './App.scss';
import { Accordion, Card, Container, Row, Col, Image } from 'react-bootstrap';
import CustomToggle from './components/CustomToggle';

import WomanSvg from './images/illustration-woman-online-desktop.svg';
import BoxSvg from './images/illustration-box-desktop.svg';

import MobileWomanSvg from './images/illustration-woman-online-mobile.svg';
import MobilePatternSvg from './images/bg-pattern-mobile.svg';

function App() {
    return (
        <div className='App'>
            <Container>
                <Card className='main-card'>
                    <Row>
                        <Col xs={12} sm={12} md={5} lg={6}>
                            <div className='svg-container mx-auto'>
                                <Image
                                    className='woman-svg'
                                    src={WomanSvg}
                                    alt='woman using computer'
                                    fluid
                                />

                                <Image
                                    className='box-svg'
                                    src={BoxSvg}
                                    alt='box'
                                />
                                <Image
                                    className='m-pattern-svg'
                                    src={MobilePatternSvg}
                                    alt=' shadow'
                                />

                                <Image
                                    className='m-woman-svg'
                                    src={MobileWomanSvg}
                                    alt='woman using computer'
                                    fluid
                                />
                            </div>
                        </Col>

                        <Col
                            xs={12}
                            sm={10}
                            md={6}
                            lg={5}
                            className='mx-auto my-5'>
                            <Accordion defaultActiveKey='0' className='m-3'>
                                <Card>
                                    <Card.Title className=' mb-4'>
                                        FAQ
                                    </Card.Title>
                                </Card>
                                <Card>
                                    <CustomToggle
                                        as={Card.Header}
                                        eventKey='1'
                                        variant='success'>
                                        How many team members can I invite?
                                    </CustomToggle>

                                    <Accordion.Collapse eventKey='1'>
                                        <Card.Body>
                                            You can invite up to 2 additional
                                            users on the Free plan. There is no
                                            limit on team members for the
                                            Premium plan.
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <CustomToggle as={Card.Header} eventKey='2'>
                                        What is the maximum file upload size?
                                    </CustomToggle>
                                    <Accordion.Collapse eventKey='2'>
                                        <Card.Body>
                                            No more than 2GB. All files in your
                                            account must fit your allotted
                                            storage space
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <CustomToggle as={Card.Header} eventKey='3'>
                                        How do I reset my password?
                                    </CustomToggle>
                                    <Accordion.Collapse eventKey='3'>
                                        <Card.Body>
                                            Click “Forgot password” from the
                                            login page or “Change password” from
                                            your profile page. A reset link will
                                            be emailed to you.
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <CustomToggle as={Card.Header} eventKey='4'>
                                        Can I cancel my subscription?
                                    </CustomToggle>
                                    <Accordion.Collapse eventKey='4'>
                                        <Card.Body>
                                            Yes! Send us a message and we’ll
                                            process your request no questions
                                            asked.
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <CustomToggle as={Card.Header} eventKey='5'>
                                        Do you provide additional support?
                                    </CustomToggle>
                                    <Accordion.Collapse eventKey='5'>
                                        <Card.Body>
                                            Chat and email support is available
                                            24/7. Phone lines are open during
                                            normal business hours.
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>
    );
}

export default App;

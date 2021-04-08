import React from 'react';
import './App.scss';
import { Accordion, Card, Container, Row, Col } from 'react-bootstrap';
import CustomToggle from './components/CustomToggle';
// import WomanSvg from './images/illustration-woman-online-desktop.svg';
// import PatternSvg from './images/bg-pattern-desktop.svg';
// import BoxSvg from './images/illustration-box-desktop.svg';

import { ReactComponent as WomanSvg } from './images/illustration-woman-online-desktop.svg';

import { ReactComponent as PatternSvg } from './images/bg-pattern-desktop.svg';
import { ReactComponent as BoxSvg } from './images/illustration-box-desktop.svg';
function App() {
    return (
        <div className='App'>
            <Container>
                <Card className='main-card'>
                    <Row>
                        <Col xs md={4} lg={6}>
                            <div className='holder'>
                                <PatternSvg className='pattern-svg' />
                                <BoxSvg className='box-svg' />
                                <WomanSvg className='woman-svg' />
                            </div>
                        </Col>
                        <Col xs md={4} lg={6}>
                            <Accordion defaultActiveKey='0' className='m-3'>
                                <Card>
                                    <Card.Title>FAQ</Card.Title>
                                </Card>
                                <Card className='border-0'>
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
                                        Can I cancel my subscription?{' '}
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
                                        Do you provide additional support?{' '}
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

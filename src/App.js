import React from 'react';
import './App.scss';
import { Accordion, Card, Container, Row, Col } from 'react-bootstrap';
import CustomToggle from './components/CustomToggle';

function App() {
    return (
        <div className='App'>
            <Container>
                <Row className='justify-content-center align-items-center'>
                    <Col xs lg='8'>
                        <Accordion defaultActiveKey='0'>
                            <Card className='align-items-center'>
                                <Card.Title>FAQ</Card.Title>
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
                                        You can invite up to 2 additional users
                                        on the Free plan. There is no limit on
                                        team members for the Premium plan.
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
                                        account must fit your allotted storage
                                        space
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <CustomToggle as={Card.Header} eventKey='3'>
                                    How do I reset my password?
                                </CustomToggle>
                                <Accordion.Collapse eventKey='3'>
                                    <Card.Body>
                                        Click “Forgot password” from the login
                                        page or “Change password” from your
                                        profile page. A reset link will be
                                        emailed to you.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <CustomToggle as={Card.Header} eventKey='4'>
                                    Can I cancel my subscription?{' '}
                                </CustomToggle>
                                <Accordion.Collapse eventKey='4'>
                                    <Card.Body>
                                        Yes! Send us a message and we’ll process
                                        your request no questions asked.
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
                                        24/7. Phone lines are open during normal
                                        business hours.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;

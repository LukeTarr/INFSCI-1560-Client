import "./Result.css"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useState} from "react";
import Container from 'react-bootstrap/Container';

function Result(props) {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className={"resultContainer"} onClick={handleShow}>
                <div className={"resultCard"}>
                    <div className={"topRow"}>
                        <span><b>{props.source.complaint_id}</b></span>
                        <span><b>{props.source.company}</b></span>
                        <span><b>{props.source.date_received}</b></span>
                        
                    </div>


                    <p style={{overflow:"hidden"}}><b>{props.source.complaint_what_happened.substring(0,497) + '...'}</b></p>
                </div>
            </div>
            <Modal 
                show={show} 
                onHide={handleClose}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Ticket ID {props.source.complaint_id}</Modal.Title>
                </Modal.Header>
                {/* {Object.keys(props.source).map((k, v) => {
                    return <p><b>{Object.keys(props.source)[v]}</b> : {props.source[Object.keys(props.source)[v]]}</p>
                })} */}
                
                <Modal.Body className="show-grid">
                    <Container>
                        <Row className="row">
                            <Col xs={6} md={4}>
                                <b>Company: </b>{props.source.company}
                            </Col>
                            <Col xs={6} md={4}>
                                <b>State: </b>{props.source.state}
                            </Col>
                            <Col xs={6} md={4}>
                                <b>Date Received: </b>{props.source.date_received}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12}>
                            <b>Complaint: </b>{props.source.complaint_what_happened}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={4}>
                                <b>Company Response: </b>{props.source.company_response}
                            </Col>
                            <Col xs={6} md={4}>
                                <b>Sub Product: </b>{props.source.sub_product}
                            </Col>
                            <Col xs={6} md={4}>
                                <b>Submitted via: </b>{props.source.submitted_via}
                            </Col>
                        </Row>
                    </Container>
            </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
} 

export default Result;
import { Container, Row, Col, Button } from 'reactstrap';

const HeroSection = () => {
    return (
        <div className="jumbotron mb-4 py-3 py-sm-5">
            <section className="elementor-section elementor-top-section d-flex flex-column w-100 justify-content-center px-sm-4">
                <div>
                    <Container className="elementor-container">
                        <Row className="elementor-content d-flex flex-column justify-content-center">
                            <Col className="elementor-column d-flex justify-content-center">
                                <div className="icon d-flex flex-row py-5">
                                    <img src="./img/icon.png" className="img-icon" alt="icon" />
                                    <h2 className="px-2 text-white">
                                        Hitask
                                    </h2>
                                </div>
                            </Col>
                            <Col className="elementor-column">
                                <form className="d-flex" action="#">
                                    <input aria-label="Add Todo Task" className="input form-control rounded-3" placeholder="Add Todo Task" type="text" />
                                    <Button className="button rounded-3 ms-2 text-white" type="submit">
                                        <i class="fas fa-fire"></i>
                                    </Button>
                                </form>
                            </Col>
                            {/* <Col className="elementor-column d-flex info_empty justify-content-between px-3">
                                <div className="d-flex flex-row align-items-center justify-content-center text-center">
                                    <span className="text-white">
                                        Task created
                                    </span>
                                    <span className="span-button text-white d-flex d-inline-flex rounded-4 justify-content-center align-items-center ms-2 text-center">
                                        0
                                    </span>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-center text-center">
                                    <span className="text-white">
                                        Completed
                                    </span>
                                    <span className="span-button text-white d-flex d-inline-flex rounded-4 justify-content-center align-items-center ms-2 text-center">
                                        0
                                    </span>
                                </div>
                            </Col>
                            <Col className="elementor-column d-flex illustration_empty justify-content-center">
                                <div className="d-flex flex-column align-items-center justify-content-center text-center">
                                    <img src="./img/empty_message.png" className="img-empty-message" alt="icon" />
                                    <h2 className="text-white mt-4">Get Started</h2>
                                    <p className="text-white text-opacity-75">Start with your priorities first.</p>
                                </div>
                            </Col> */}
                            <Col className="elementor-column list-tasks mt-4">
                                <ul className="list-unstyled">
                                    <li className="task-item mb-3">
                                        <label className="task-label">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <span>Integer urna</span>
                                        </label>
                                        <i className="fa-regular fa-trash-can"></i>
                                    </li>
                                    <li className="task-item mb-3 task-completed">
                                        <label className="task-label">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                                            <span>Integer urna</span>
                                        </label>
                                        <i className="fa-regular fa-trash-can"></i>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </div>
    );
};



export default HeroSection;
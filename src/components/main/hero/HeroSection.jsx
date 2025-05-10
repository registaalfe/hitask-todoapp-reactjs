import { Container, Row, Col } from 'reactstrap';

const HeroSection = () => {
    return (
        <div className="jumbotron mb-4 py-3 py-sm-5">
            <section className="d-flex px-4 w-100 justify-content-center">
                <div>
                    <Container>
                        <Row>
                            <Col xs="12" className="d-flex">
                                <div className="icon d-flex flex-row py-5">
                                    <img src="./img/icon.png" className="img-icon" alt="icon" />
                                    <h2 className="px-2 text-white">
                                        Hitask
                                    </h2>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
//import background from "../images/poppymtn2.jpg";
import poppy_logo from "../images/spr_logo.png";
import {Link} from "react-router-dom";
import {Image, Button, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "../style/home.scss"


export default function Home() {
    return (
        <Container fluid style={{height: "94.8%", padding:"0", overflow: "hidden"}}>
        <div class="home_background">
            <Row style={{paddingTop:"2rem"}}>
                <Col>
                    <Image src={poppy_logo} height='300rem' width='300rem' style={{filter:"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}}>
                    </Image>
                </Col>
            </Row>
            <Row style={{paddingTop:"5rem", paddingBottom:"2rem", filter:"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}}>
                <Col>
                    <Link to="/chatbot">
                        <Button variant='primary' id='btn-large' class='rounded-1 text-nowrap' >Chat with Poppy</Button>
                    </Link>
                </Col>
            </Row>
            <Row style={{filter:"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}}>
                <Col>
                <Link to="/about" marginLeft='50rem' marginRight='10rem'>
                        <Button variant='primary' id='btn-small' class='rounded-1 text-nowrap'>Learn More</Button>
                    </Link>
                </Col>
            </Row>
        </div>
        </Container>

    );
}

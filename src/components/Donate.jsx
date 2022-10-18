/** @jsxImportSource @emotion/react */
import "../style/donate.css";
import '../style/about.css';

import {Button, Container, Row, Col} from 'react-bootstrap';

export default function Donate() {
    const titleText = "Help Poppy Grow!";
    const supportText = `You can support immediate future growth by donating to the Swanton Pacific Ranch Recovery Fund.`;
    const descriptionText = `Please note in the special requests text box that your donation is for Poppy and its student researchers.`;
    const fundingText = `These projects are based upon work supported by the Research, Scholarly & Creative Activities Program awarded by the Cal Poly division of Research, Economic Development & Graduate Education as well as the Cal Poly College of Engineering CPConnect Grant Enabling Interdisciplinary Project-Based Learning, the Warren J. Baker Endowment for Excellence in Project-Based Learning, the Robert D. Koob Endowment for Student Success, the Cal Poly Construction Management Department, and the College of Science and Mathematics.`;

    const description = descriptionText.split("\n").map((text, i) => (
        <p key={i} className="descriptionStyle">
            {text}
        </p>
    ));

    const support = supportText.split("\n").map((text, i) => (
        <p key={i} className="descriptionStyle">
            {text}
        </p>
    ));

    const funding = fundingText.split("\n").map((text, i) => (
        <p key={i} className="descriptionStyle">
            {text}
        </p>
    ));
    
    return (
        <Container>
            <Row className="justify-content-center">
                <Col align="center">
                    <div align="center" className="cardDonateStyles">
                            <h2 className="titleDonateStyle">{titleText}</h2>
                            {support}
                            <p align="center">
                            <Button variant='primary' size="lg" class='rounded-1 text-nowrap btnStyle' href="https://securelb.imodules.com/s/699/bp19/interior.aspx?sid=699&gid=1&sitebuilder=1&pgid=961&cid=2272&bledit=1&dids=401.644.&sort=1" target="_blank">SPR Ranch Recovery Fund</Button>
                            </p>
                            {description}
                    </div>
                    <div align="center" className="cardDonateStyles">
                        {funding}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
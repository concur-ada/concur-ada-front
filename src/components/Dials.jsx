import PercentageDial from './PercentageDial';
import DaysDial from './DaysDial';

import {Col, Row, Container} from 'react-bootstrap';
import {useSelector} from 'react-redux';

const Dials = () => {
    const {project} = useSelector(state => state.project);
    const daysIn = (project && project.daysIn) || 0 ;
    const percentageCompleted = (project && project.percentageCompleted) || 0 ;
    return (
        <Container fluid >
            <Row>

                <Col md={{ span: 2, offset: 8 }}><PercentageDial percentage={percentageCompleted} speed={50} /></Col>
                <Col md={{ span: 2, offset: 0 }}><DaysDial percentage={daysIn} speed={50}  /></Col>
            </Row>
        </Container>
    );
};

export default Dials;

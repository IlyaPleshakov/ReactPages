import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MyAccordion from './Accordion';
import OrdersTable from './OrdersTable';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




function MyButton(props) {
  return (<div>
    <button className="button" id="left" onClick={props.onClick} style={props.style}>{props.name}  </button>
  </div>
  );
}

class MainPage extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {

  }

  render() {
    return (
      <Router >
        <Container>
          <Row style={{ backgroundColor: '#F8F8F8' }}>
            <Col sm={3} style={{ height: '100vh' }} >
              <Link to="/orders"><MyButton name="Ведомость заказов" /> </Link>
              <Link to="/production"><MyButton name="Производство" component={Link} to="/production" /></Link>
              <Link to="/analytics"><MyButton name="Статистика" /></Link>
              <Link to="/files"><MyButton name="Файлы" /></Link>
              <MyButton name="etc" />
            </Col>
            <Col sm={9}>

              <Routes>

                <Route path="/orders" element={
                  <div>
                    <MyAccordion />
                    <OrdersTable />
                  </div>} />

                <Route path="/production" element={<div>PRODUCTION</div>} />
                <Route path="/analytics" element={<div>ANALYTICS</div>} />
                <Route path="/files" element={<div>FILES</div>} />
              </Routes>

            </Col>
          </Row>
        </Container>






      </Router>
    );
  }
}

export default MainPage;
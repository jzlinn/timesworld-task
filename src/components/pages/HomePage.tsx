import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form, Card, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  ICountriesList,
  fetchCounrtyDetails,
} from "../redux-toolkit/reducers/home-reducers";
import "../css/styles.css";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();

  const countryList = useSelector((state: any) => state.countryList);

  const [countryArr, setCountryArr] = useState<ICountriesList[]>([]);

  useEffect(() => {
    dispatch(fetchCounrtyDetails());
  }, []);

  useEffect(() => {
    if (countryList.status === 200) {
      setCountryArr(countryList.countries);
    }
  }, [countryList]);

  const renderCountryCards = () => {
    let countries: any[] = [];
    countryArr.map((element: ICountriesList, index: number) => {
      countries.push(
        <Col xs={12} lg={6} key={index}>
          <Card className="country-card central-div">
            <Card.Body>
              <Row>
                <Col xs={3} className="central-div">
                  <Card.Img
                    src={element.flag}
                    className="central-div card-image-style"
                  />
                </Col>
                <Col xs={9} className="central-div">
                  <h5>{element.name} </h5>
                  <p>{element.region} </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      );
    });
    return countries;
  };

  const sortCountryByRegion = (region: string) => {
    let filterCountry = countryList.countries;
    if (region === "all") {
      setCountryArr(filterCountry);
    } else {
      let newState = filterCountry.filter((country: { region: string }) => {
        return (
          country.region.toLocaleLowerCase() === region.toLocaleLowerCase()
        );
      });
      setCountryArr(newState);
    }
  };

  return (
    <Container fluid className="main-container">
      <Row>
        <Col xs={12} lg={12}>
          <Nav fill variant="underline" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link>Countries</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-2"
                onClick={() => sortCountryByRegion("all")}
              >
                All
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-3"
                onClick={() => sortCountryByRegion("asia")}
              >
                Asia
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-4"
                onClick={() => sortCountryByRegion("europe")}
              >
                Europe
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col xs={12} lg={10}>
          <Row>{renderCountryCards()}</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;

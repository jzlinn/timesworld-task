import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

import userWithKey from "../../assets/sign-in-img.png";
import "../css/styles.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const usernameRef: any = useRef<HTMLInputElement>(null);
  const passwordRef: any = useRef<HTMLInputElement>(null);

  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [validated, setValidated] = useState<boolean>(false);

  const authenticateUser = () => {
    if (userName.length > 5) {
      if (userPassword.length > 6) {
        navigate("/home");
      } else {
        passwordRef?.current?.focus();
      }
    } else {
      usernameRef?.current?.focus();
    }
  };

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    navigate("/home");
  };

  return (
    <Container fluid className="main-container">
      <Row>
        <Col xs={0} lg={1}></Col>
        <Col xs={10} lg={4} className="central-div">
          <div className="login-card central-div">
            <h4>Sign In</h4>
            <span>
              New user ? <a href="#">create an account</a>
            </span>
            <p></p>
            <div>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <div className="input-holder">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      type="email"
                      placeholder="Username or email"
                      className="custom-input"
                      onChange={(event) => setUserName(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Username must be 6 letters or more
                    </Form.Control.Feedback>
                  </Form.Group>
                </div>

                <div className="input-holder">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className="custom-input"
                      onChange={(event) => setUserPassword(event.target.value)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Password must be 6 letters or more
                    </Form.Control.Feedback>
                  </Form.Group>
                </div>

                <div className="input-holder">
                  <Form.Check // prettier-ignore
                    type={"checkbox"}
                    id="Keep_me_signed_in"
                    label="Keep me signed in"
                  />
                </div>
                <p></p>
                <div /**className="d-grid gap-2"*/>
                  <Button
                    variant="primary"
                    size="sm"
                    className="custom-login-btn"
                    type="submit"
                  >
                    Sign in
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </Col>
        <Col xs={1}></Col>
        <Col xs={0} lg={6} className="central-div">
          <div className="image-container central-div">
            <img
              src={userWithKey}
              alt="user With Key"
              className="user-with-key"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;

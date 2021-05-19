import react from "react";
import { Container, Row, Form, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class SearchPage extends react.Component {
  state = {
    description: "",
    location: "",
    results: [],
  };

  handleInput = async (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { description, location } = this.state;
    const response = await fetch(
      `https://strive-proxy.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}`
    );
    const results = await response.json();
    this.setState({ results });
  };

  render() {
    console.log(this.state.results);
    return (
      <Container>
        <Row className="mt-5">
          <Col xs={12} md={8} className="mx-auto">
            <h1>Search Jobs...</h1>
            <Form onClick={this.handleSubmit}>
              <div className="d-flex my-3">
                <Form.Control
                  name="description"
                  className="me-1"
                  type="search"
                  placeholder="Search jobs"
                  onChange={this.handleInput}
                />
                <Form.Control
                  name="location"
                  type="search"
                  placeholder="location"
                  onChange={this.handleInput}
                />
              </div>
              <Form.Control type="submit" value="Submit" />
            </Form>
            {this.state.results.map((e) => (
              <Col xs={12} className="d-flex">
                <Col xs={2}>
                  <Image
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                    className="result-img"
                    src={e.company_logo}
                  />
                </Col>
                <Col xs={10} className="ps-2">
                  <h6 className="mt-3">{e.company}</h6>
                  <Link to={`/${e.id}`} className="btn btn-primary">
                    details
                  </Link>
                </Col>
              </Col>
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

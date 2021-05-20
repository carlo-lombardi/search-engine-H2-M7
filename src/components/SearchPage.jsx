import react from "react";
import { Button, Container, Row, Form, Col, Image } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavouriteList } from "../actions/index";
const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (favourite) => {
    dispatch(addToFavouriteList(favourite));
  },
});

class SearchPage extends react.Component {
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
          <Col xs={12} md={12} className="mx-auto">
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
          </Col>
        </Row>
        {this.state.results.map((e, i) => (
          <Row key={i}>
            <Col xs={2} className="mt-1">
              <Image
                style={{ maxWidth: "100px", maxHeight: "100px" }}
                src={e.company_logo}
              />
            </Col>
            <Col xs={8} className="ps-2">
              <h6>{e.company}</h6>
              <Link to={`/${e.id}`} className="btn btn-primary">
                details
              </Link>
            </Col>
            <Col>
              <Button onClick={() => this.props.addToFavourites(e)}>+</Button>
            </Col>
          </Row>
        ))}
        <Button onClick={() => this.props.history.push("/favourites")}>
          favor
        </Button>
      </Container>
    );
  }
}

export default connect(null, mapDispatchToProps)(SearchPage);

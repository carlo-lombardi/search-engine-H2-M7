import react from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

export default class jobCard extends react.Component {
  state = {
    details: [],
  };
  componentDidMount() {
    this.gettingTheJobs();
  }
  gettingTheJobs = async () => {
    const response = await fetch(
      `https://strive-proxy.herokuapp.com/https://jobs.github.com/positions/${this.props.match.params.singleJobId}.json`
    );
    const data = await response.json();
    this.setState({ details: data });
  };
  render() {
    const { details } = this.state;
    return (
      <Container>
        <Row>
          {details && (
            <div>
              <Image
                style={{ maxWidth: "100px", maxHeight: "100px" }}
                xs={3}
                src={details.company_logo}
              />
              <Col xs={9}>
                <div
                  dangerouslySetInnerHTML={{ __html: details.description }}
                />
              </Col>
            </div>
          )}
        </Row>
      </Container>
    );
  }
}

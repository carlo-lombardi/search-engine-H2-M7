import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

const mapStateToProps = (state) => state;

const Favourites = (props) => {
  console.log("sadasd", props);
  return (
    <div className="ml-auto mt-2">
      <Button color="primary">
        <span className="ml-2">
          My Favorites: {props.favouritesJob.favourites.length}
        </span>
      </Button>
      {props.favouritesJob.favourites.map((e) => {
        return (
          <div style={{ margin: 30 }}>
            <div> {e.company} </div>
            <div> {e.location}</div>
            <div> {e.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default connect(mapStateToProps)(withRouter(Favourites));

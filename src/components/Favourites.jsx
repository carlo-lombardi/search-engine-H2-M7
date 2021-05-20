import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { removeFromList } from "../actions/index";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  removeFromFavourites: (index) => dispatch(removeFromList(index)),
});

const Favourites = (props) => {
  console.log("sadasd", props);
  return (
    <div className="ml-auto mt-2">
      <Button color="primary">
        <span className="ml-2">
          My Favorites: {props.favouritesJob.favourites.length}
        </span>
      </Button>
      {props.favouritesJob.favourites.map((e, i) => {
        return (
          <div key={i} style={{ margin: 30 }}>
            <Button
              varaint="danger"
              onClick={() => props.removeFromFavourites(i)}
            ></Button>
            <div> {e.company} </div>
            <div> {e.location}</div>
            <div> {e.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Favourites));

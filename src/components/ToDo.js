import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToDo } from "../store";

const ToDo = ({ text, id, dispatchDeleteToDo }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={dispatchDeleteToDo}>DEL</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatchDeleteToDo: () => dispatch(deleteToDo(ownProps.id)),
});

export default connect(null, mapDispatchToProps)(ToDo);

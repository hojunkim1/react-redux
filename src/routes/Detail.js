import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = ({ toDos }) => {
  const [toDo, setToDo] = useState({});
  const param = useParams();

  useEffect(() => {
    const found = toDos.find((todo) => todo.id === +param.id);
    setToDo(found);
  }, []);

  return (
    <div>
      <h1>Detail</h1>
      <h3>To Do: {toDo.text}</h3>
      <h3>Created at: {toDo.id}</h3>
    </div>
  );
};

const mapStateToProps = (state) => ({ toDos: state });

export default connect(mapStateToProps)(Detail);

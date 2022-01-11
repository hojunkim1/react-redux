import { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { addToDo } from "../store";

const Home = ({ toDos, dispatchAddToDo }) => {
  const [text, setText] = useState("");

  const onChange = (event) => setText(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    setText("");
    dispatchAddToDo(text);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write to do"
          value={text}
          onChange={onChange}
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({ toDos: state });

const mapDispatchToProps = (dispatch) => ({
  dispatchAddToDo: (text) => dispatch(addToDo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

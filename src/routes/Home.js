import { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");

  const onChange = (event) => setText(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    setText("");
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
      <ul></ul>
    </div>
  );
};

export default Home;

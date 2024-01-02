import { useState } from "react";

const Form = () => {
  const [mainTopic, setMainTopic] = useState("");
  const [subTopic, setSubTopic] = useState("");
  const [content, setContent] = useState("");

  return (
    <main className="Main">
      <h1>Taking Note</h1>
      <form action="#" className="note-form">
        <input
          type="text"
          placeholder="Main Topic"
          className="main-topic"
          onChange={(event) => setMainTopic(event.target.value)}
        />
        <input
          type="text"
          placeholder="Sub Topic"
          className="sub"
          onChange={(event) => setSubTopic(event.target.value)}
        />

        <textarea onChange={(event) => setContent(event.target.value)} />
        <button>Save</button>
      </form>
    </main>
  );
};

export default Form;

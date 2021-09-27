import React, { useState } from "react";

function CreateArea(props) {
  const [note,setNote] = useState({
    title:"",
    content:""
  });

  function handleChange(event){
    const {name , value} = event.target;
    setNote((prevNote) => {
        return ({
          ...prevNote,
          [name]:value
        });
    });
  }

  function submitNode(event){
    props.onAdd(note);
    setNote({
      title:"",
      content:""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={note.title} onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." value={note.content} rows="3" onChange={handleChange} />
        <button onClick={submitNode}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
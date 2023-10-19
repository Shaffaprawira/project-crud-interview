import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddTodo.css";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tipe, setTipe] = useState("Urgent");
  const navigate = useNavigate();

  const saveTodo = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/todos", {
        title,
        description,
        tipe,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={saveTodo}>
        <div className="form-group">
          <label className="label">Title</label>

          <input
            type="text"
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <label className="label">Description</label>

          <input
            type="text"
            className="input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </div>
        <div className="form-group">
          <label className="label">Tipe</label>
          {/* <div className="select-label"> */}
          <select
            className="select-label"
            value={tipe}
            onChange={(e) => setTipe(e.target.value)}
          >
            <option value="Urgent">Urgent</option>
            <option value="Not Urgent">Not Urgent</option>
            <option value="Important">Important</option>
            <option value="Not Important">Not important</option>
          </select>
          {/* </div> */}
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;

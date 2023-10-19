import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./EditTodo.css";

const EditTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tipe, setTipe] = useState("Urgent");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getTodoById();
  }, []);

  const updateTodo = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/todos/${id}`, {
        title,
        description,
        tipe,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getTodoById = async () => {
    const response = await axios.get(`http://localhost:5000/todos/${id}`);
    setTitle(response.data.title);
    setDescription(response.data.description);
    setTipe(response.data.tipe);
  };

  return (
    <div class="container">
      <form onSubmit={updateTodo}>
        <div class="form-group">
          <label class="label">Title</label>
          <div class="control">
            <input
              type="text"
              class="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </div>
        </div>
        <div class="form-group">
          <label class="label">Description</label>
          <div class="control">
            <input
              type="text"
              class="input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
          </div>
        </div>
        <div class="form-group">
          <label class="label">Tipe</label>
          <div class="control">
            <select
              className="select-label"
              value={tipe}
              onChange={(e) => setTipe(e.target.value)}
            >
              <option value="Urgent">Urgent</option>
              <option value="Not Urgent">Not Urgent</option>
              <option value="Important">Important</option>
              <option value="Not Important">Not Important</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-success">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTodo;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

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
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateTodo}>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Tipe</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
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
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTodo;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State untuk kata kunci pencarian
  const [sortOrder, setSortOrder] = useState("asc"); // State untuk urutan pengurutan
  const [filterBy, setFilterBy] = useState("all"); // State untuk filter

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const response = await axios.get("http://localhost:5000/todos");
    setTodos(response.data);
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/todos/${id}`);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  // Fungsi untuk menyaring daftar ToDo List berdasarkan kata kunci pencarian
  // const searchTodos = todos.filter((todo) => {
  //   return (
  //     todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     todo.tipe.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // });

  // Fungsi untuk mengurutkan daftar ToDo List
  const sortedTodos = (todosToSort) => {
    return todosToSort.slice().sort((a, b) => {
      if (sortOrder === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
  };

  // Fungsi untuk menerapkan filter
  const filteredTodos = () => {
    return todos.filter((todo) => {
      if (filterBy === "title") {
        return todo.title.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (filterBy === "description") {
        return todo.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      } else if (filterBy === "tipe") {
        return todo.tipe.toLowerCase().includes(searchTerm.toLowerCase());
      }

      // Jika filterBy adalah "all", tampilkan semua todos yang sesuai dengan filter pencarian
      return (
        todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        todo.tipe.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <h1 className="is-size-3 has-text-weight-bold mb-4 mx-auto">
          PROJECT CRUD
        </h1>
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
        <div className="field mt-3">
          <label className="label">Search</label>
          <div className="control">
            <input
              type="text"
              className="input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Title or Type"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Filter By</label>
          <div className="control">
            <div className="select">
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
              >
                <option value="all">All</option>
                <option value="title">Title</option>
                <option value="description">Description</option>
                <option value="tipe">Tipe</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Sort Order</label>
          <div className="control">
            <div className="select">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>
        </div>
        <h2 className="is-size-4">Todos</h2>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Description</th>
              <th>Tipe</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {searchTerm
              ? sortedTodos(filteredTodos()).map((todo, index) => (
                  <tr key={todo.id}>
                    <td>{index + 1}</td>
                    <td>{todo.title}</td>
                    <td>{todo.description}</td>
                    <td>{todo.tipe}</td>
                    <td>{todo.createdAt}</td>
                    <td>{todo.updatedAt}</td>
                    <td>
                      <Link
                        to={`edit/${todo.id}`}
                        className="button is-small is-info mr-2"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteTodo(todo.id)}
                        className="button is-small is-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              : sortedTodos(todos).map((todo, index) => (
                  <tr key={todo.id}>
                    <td>{index + 1}</td>
                    <td>{todo.title}</td>
                    <td>{todo.description}</td>
                    <td>{todo.tipe}</td>
                    <td>{todo.createdAt}</td>
                    <td>{todo.updatedAt}</td>
                    <td>
                      <Link
                        to={`edit/${todo.id}`}
                        className="button is-small is-info mr-2"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteTodo(todo.id)}
                        className="button is-small is-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;

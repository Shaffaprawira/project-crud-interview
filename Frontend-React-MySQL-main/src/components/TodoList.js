import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./TodoList.css"; // File CSS custom

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
    <div className="container">
      <h1 className="page-title">PROJECT CRUD TODO LIST</h1>
      <Link to={`add`} className="btn btn-success">
        Add New
      </Link>
      <div className="form-group">
        <label className="form-label">Search</label>
        <input
          type="text"
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by Title or Type"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Filter By</label>
        <select
          className="form-select"
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value)}
        >
          <option value="all">All</option>
          <option value="title">Title</option>
          <option value="description">Description</option>
          <option value="tipe">Tipe</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">Sort Order</label>
        <select
          className="form-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <h2 className="section-title">Todos</h2>
      <table className="table">
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
                      className="btn btn-info"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="btn btn-danger"
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
                      className="btn btn-info"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;

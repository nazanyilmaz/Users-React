import { useEffect, useState, useRef } from "react";
import Table from "./Table";

const FiltersUser = () => {
  const [users, setUsers] = useState(null);
  const [filtredUsers, setFiltredUsers] = useState(null);
  const [cloneUsers, setCloneUsers] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFiltredUsers(data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;

    const filtred = users.filter((user) =>
      user.name.toLowerCase().includes(text.toLowerCase())
    );

    setFiltredUsers(filtred);
  };

  return (
    <div className="table-container">
      <h2 className="users-table">User Table</h2>

      <form className="my-5 d-flex gap-1 p-3" onSubmit={handleSubmit}>
        <input className="form-control" type="search" />
        <button className="btn btn-primary">Search</button>
      </form>

      {!users ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : (
        <Table userData={filtredUsers} />
      )}
    </div>
  );
};
export default FiltersUser;

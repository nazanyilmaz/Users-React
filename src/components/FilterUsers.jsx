import { useEffect, useState, useRef } from "react";
import ListElement from "./listelement";

const FilterUser = () => {
  const handleSubmit = () => {};
  const [users, setUsers] = useState(null);
  const [cloneUsers, setCloneUsers] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setCloneUsers(data);
      })
      .catch((err) => alert("Try again later...."));
  }, []);

  const handleSearch = () => {
    const query = inputRef.current.value.toLowerCase();

    const filtredUser = cloneUsers.filter((user) =>
      user.name.toLowerCase().includes(query)
    );

    setUsers(filtredUser);
  };

  return (
    <div className="list-container">
      <h2 className="users-list">User List</h2>
      <form className="my-5 d-flex gap-1 p-3" onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="search"
          ref={inputRef}
          onChange={handleSearch}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </form>
      <ul className="list-ul">
        {users === null && <p>Loading...</p>}
        {users && users.map((user) => <ListElement user={user} />)}
      </ul>
    </div>
  );
};

export default FilterUser;

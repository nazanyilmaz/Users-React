const Table = ({ userData }) => {
  return (
    <table className="table table-warning my-5 table-responsive table-hover ">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>email</th>
          <th>Company</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.company.name} </td>
            <td>{user.address.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;

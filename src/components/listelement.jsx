const ListElement = ({ user }) => {
  const { name, username, email, phone } = user;
  return (
    <li style={{ marginBottom: "13px" }}>
      ID: {user.id}
      <br />
      Name: {name} <br />
      email: {email} <br />
      Compnay: {user.company.name} <br />
      City: {user.address.city}
      <br />
    </li>
  );
};
export default ListElement;

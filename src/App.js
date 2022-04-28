import "./App.css";

function App() {
  
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Active?</th>
          <th>Posts</th>
          <th>Messages</th>
        </tr>
      </thead>
      <tbody>
        {/* {this.props.data.map((u) => (
          <tr key={u.id}>
            <td>{u.firstName}</td>
            <td>{u.lastName}</td>
            <td>{u.active ? "Yes" : "No"}</td>
            <td>{u.posts}</td>
            <td>{u.messages}</td>
          </tr>
        ))} */}
      </tbody>
    </table>
  );
}

export default App;

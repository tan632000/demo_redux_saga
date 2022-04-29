import { useDispatch, useSelector } from "react-redux";
import { LOAD_USERS_LOADING } from "./constants";
import "./App.css";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  useEffect(() => {
    dispatch({ type: LOAD_USERS_LOADING });
  }, []);

  return (
    <div>
      {loading && (
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {error && <div>{error}</div>}
      <table className="table">
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
          {users &&
            users.map((u) => (
              <tr key={u.id}>
                <td>{u.firstName}</td>
                <td>{u.lastName}</td>
                <td>{u.active ? "Yes" : "No"}</td>
                <td>{u.posts}</td>
                <td>{u.messages}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

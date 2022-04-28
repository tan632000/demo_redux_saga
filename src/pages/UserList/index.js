export default function UserList() {
  const renderUsers = () => {
    let { users = [] } = this.props;
    if (!users || users.length === 0) {
      console.log(users);
      return <div>No users</div>;
    }
    return (
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    );
  };
  return (
    <div>
      <button onClick={this.fetchUsersClickHandler}>Fetch Users</button>
      {renderUsers()}
    </div>
  );
}

import React, { useState, useEffect, useMemo } from "react";
import SearchBar from "./SearchBar";
import UserList from "./UserList";

const data = [
  { id: 1, name: "Jibril (Gabriel)" },
  { id: 2, name: "Mika'il (Michael)" },
  { id: 3, name: "Azrael (Malak al-Mawt)" },
  { id: 4, name: "Malik" }
];

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Simulated API fetch
  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(data);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // ✅ filtering logic
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  return (
    <div className="app-container">
      <h1> Live User Search</h1>

      <SearchBar search={search} setSearch={setSearch} />

      {loading ? (
        <div className="spinner"></div>
      ) : filteredUsers.length === 0 ? (
        <p className="no-users">No users found</p>
      ) : (
        <UserList users={filteredUsers} />
      )}
    </div>
  );
}

export default App;
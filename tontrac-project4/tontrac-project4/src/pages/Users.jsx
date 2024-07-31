import { fetchData } from "@/api";
import DataTable from "@/components/DataTable";
import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const usersData = await fetchData(20);
        setUsers(usersData);
      } catch (error) {
        console.error("Encounted an error while fetching users:", error);
        setUsers([]);
      }
    };
    getUsers();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Users</h1>
      <DataTable users={users} />
    </div>
  );
};

export default Users;

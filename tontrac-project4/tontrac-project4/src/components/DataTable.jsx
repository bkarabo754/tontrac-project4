import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";

const DataTable = ({ users }) => {
  const navigate = useNavigate();

  if (!users || users.length === 0) {
    return <div>No users to display</div>;
  }

  const buttonDoubleClick = (user) => {
    console.log("Double-click detected for user:", user); // Debugging statement
    navigate("/user", { state: user });
  };

  return (
    <Table className="min-w-full border bg-white shadow-2xl rounded-lg overflow-hidden">
      <TableCaption className="text-lg font-semibold mb-4 text-center border">
        User List
      </TableCaption>
      <TableHeader>
        <TableRow className="bg-gray-600 hover:text-black text-white px-6 py-3">
          <TableHead>Name</TableHead>
          <TableHead>Gender</TableHead>
          <TableHead>Species</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => (
          <TableRow
            key={index}
            onDoubleClick={() => buttonDoubleClick(user)}
            className="hover:bg-gray-200 cursor-pointer"
          >
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.gender}</TableCell>
            <TableCell>{user.species}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell className="col-span-3">Total Users</TableCell>
          <TableCell className="text-right">{users.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default DataTable;

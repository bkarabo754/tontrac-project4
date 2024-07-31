import Profile from "@/components/Profile"; // Import the Profile component
// import UserDetailsPage from "@/components/UserDetailsPage"; // Commented out import for UserDetailsPage component (not used)
import UserItems from "@/components/UserItems"; // Import the UserItems component
import WrapperCard from "@/components/WrapperCard"; // Import the WrapperCard component
import { Button } from "@/components/ui/button"; // Import the Button component
import { useLocation, useNavigate } from "react-router-dom"; // Import hooks from react-router-dom

const DetailsPage = () => {
  // Define the DetailsPage component
  const navigate = useNavigate(); // Initialize navigate function from useNavigate hook
  const { state } = useLocation(); // Destructure state from useLocation hook
  console.log(state); // Log the state to the console for debugging

  if (!state) {
    // A condition to check if state is not defined
    return <div>There are no users</div>; // Return a message if there are no users
  }

  const user = state; // Assign state to user variable

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Button
        onClick={() => navigate(-1)} // onClick to navigate back
        className="bg-black flex items-center border hover:text-black rounded-xl text-white"
      >
        Back
      </Button>
      <h1 className="text-3xl font-bold mb-6 text-center">Details Page</h1>{" "}
      {/* Page title */}
      <WrapperCard>
        {" "}
        {/* WrapperCard component */}
        <div className="p-6 border-2 border-r-8 border-l-8 border-r-destructive border-l-destructive rounded-2xl shadow-2xl bg-background flex items-center space-x-4">
          <Profile user={user} />{" "}
          {/* Profile reusable component with user prop */}
          <div>
            {/* Render a UserItems component with the label "Name:" and the value of user.name */}
            <UserItems label="Name:" value={user.name} />

            {/* Render a UserItems component with the label "Species:" and the value of user.species */}
            <UserItems label="Species:" value={user.species} />

            {/* Render a UserItems component with the label "Gender:" and the value of user.gender */}
            <UserItems label="Gender:" value={user.gender} />

            {/* Render a UserItems component with the label "Location:" and the value of user.location.name */}
            <UserItems label="Location:" value={user.location.name} />

            {/* Render a UserItems component with the label "Status:" and the value of user.status */}
            <UserItems label="Status:" value={user.status} />

            {/* Render a UserItems component with the label "Origin:" and the value of user.origin.name */}
            <UserItems label="Origin:" value={user.origin.name} />
          </div>
        </div>
      </WrapperCard>
    </div>
  );
};

export default DetailsPage; // Export the DetailsPage component as default

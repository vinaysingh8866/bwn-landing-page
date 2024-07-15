import { VStack } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "animate.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HStack } from "@chakra-ui/react";
function App() {
  useEffect(() => {
    window.addEventListener("load", () => {
      AOS.init();
    });
  }, []);
  return (
    <>
      <Router>
        <VStack
          className="fadeIn duration-1s delay-0s"
          bg={"#F4F7F9"}
          minH={"100vh"}
          w={"full"}
          gap={0}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/delete-user" element={<DeleteUser />} />
            {/* Add more routes as needed */}
          </Routes>
        </VStack>
      </Router>
    </>
  );
}

const DeleteUser = () => {
  // user form with email and password to delete user
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // show toast user data deleted
    console.log("User data deleted");
    // call post on ajna.dev/api/delete-user
    await fetch("ajna.dev/api/delete-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    alert("User data will be deleted in a week");
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <HStack>
      <VStack>
        <h1>Delete User</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Delete User</button>
        </form>
      </VStack>
    </HStack>
  );
};

export default App;

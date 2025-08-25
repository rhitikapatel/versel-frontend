import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/courses";
import Signup from "./components/signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import TechNews from "./components/technews";
import Contact from "./components/contact";
import QuestionsPage from "./components/QuestionsPage"
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/technews" element={<TechNews />} />
          <Route path="/questions/:companyId" element={<QuestionsPage/>}/>
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
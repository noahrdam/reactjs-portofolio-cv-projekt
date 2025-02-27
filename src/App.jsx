import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Profile />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header/Header.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
  return (
    <LanguageProvider>
      <div>
        <Header />
        <main>
          <Profile />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;

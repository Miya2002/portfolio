import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";

import Navbar from "./components/Navbar";

import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

import ProjectsPage from "./pages/ProjectsPage";



// Scroll to section after coming from /projects page
function ScrollToHash() {

  const { hash } = useLocation();


  useEffect(() => {

    if (hash) {

      setTimeout(() => {

        const element = document.querySelector(hash);

        if (element) {

          element.scrollIntoView({
            behavior: "smooth",
          });

        }

      }, 100);

    }

  }, [hash]);


  return null;

}





function App() {

  return (

    <BrowserRouter>

      <ScrollToHash />

      <Navbar />


      <Routes>


        {/* MAIN HOME PAGE */}

        <Route

          path="/"

          element={

            <>

              <Home />

              <Projects />

              <Experience />

              <Skills />

              <Education />

              <Contact />

            </>

          }

        />




        {/* ALL PROJECTS PAGE */}

        <Route

          path="/projects"

          element={

            <ProjectsPage />

          }

        />


      </Routes>


    </BrowserRouter>

  );

}



export default App;
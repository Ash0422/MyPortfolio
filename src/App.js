// import "./index.css";
// import Home from "./routes/Home";
// import Project from "./routes/Project";
// import About from "./routes/About";
// import Contact from "./routes/Contact";
// import Resume from "./routes/Resume";
// import { Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Project" element={<Project />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/Contact" element={<Contact />} />
//         <Route path="/Resume" element={<Resume />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
import "./index.css";
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Resume from "./routes/Resume";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/MyPortfolio" element={<Navigate to="/" />} /> {/* Redirect to home */}
      </Routes>
    </>
  );
}

export default App;



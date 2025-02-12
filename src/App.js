  
import "./App.css";
// import Sidebar from "./partials/Sidebar";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./home/Nav"; // Assurez-vous que ce chemin est correct
import Agences from "./home/Agences";
import Actualites from "./home/Actualites";
import Services from "./home/Services";


function App() {
  return (
       <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/Agences" element={<Agences />} />
          <Route path="/Actualites" element={<Actualites />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </BrowserRouter>
   

  );
}

export default App;


// import "./App.css";
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import Nav from "./home/Nav";
// import Agences from "./home/Agences";
// import Actualites from "./home/Actualites";
// import Services from "./home/Services";

// function AnimatedRoutes() {
//   const location = useLocation(); // Permet de détecter le changement d'URL

//   return (
//     <AnimatePresence mode="wait">
//       <Routes location={location} key={location.pathname}>
//         <Route
//           path="/Agences"
//           element={
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 50 }}
//               transition={{ duration: 0.4 }}
//             >
//               <Agences />
//             </motion.div>
//           }
//         />
//         <Route
//           path="/Actualites"
//           element={
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 20 }}
//               transition={{ duration: 0.4 }}
//             >
//               <Actualites />
//             </motion.div>
//           }
//         />
//         <Route
//           path="/Services"
//           element={
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ duration: 0.4 }}
//             >
//               <Services />
//             </motion.div>
//           }
//         />
//       </Routes>
//     </AnimatePresence>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Nav />
//       <AnimatedRoutes />
//     </Router>
//   );
// }

// export default App;

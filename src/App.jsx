// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './Components/login'; 
// import Signup from './Components/signup';

// function App() {

//   return (
//     <>
//       <Router>
//       <div className="App">
//         <Routes>
//           {/* Login Route */}
//           <Route path="/login" element={<Login />} />
          
//           {/* Signup Route */}
//           <Route path="/signup" element={<Signup />} />

//           {/* Default Route Redirecting to Login */}
//           <Route path="*" element={<Login />} />
//         </Routes>
//       </div>
//     </Router>
//     </>
//   )
// }

// export default App



import TreeGraph from "./Components/TreeNode";


function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <TreeGraph />
    </div>
  );
}

export default App;


import React, { useEffect } from "react";
import Header from "./Component/header";
import Interview from "./Component/Interview-background/main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const App = () => {
//   return (
//     <div style={{}}>
//       <div>
//         <Header referenceToPage={(value) => goToSection(value)} />
//       </div>
//     </div>
//   );
// };

// export default App;

// import React from 'react';

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
    },
    {
      path: "/interview",
      element: <Interview />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

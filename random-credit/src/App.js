import LoginPage from "./pages/login";
import CreditPage from "./pages/credit";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="background">
        {/* <Route path="/login"> */}
        {/* <LoginPage title="LOGIN"></LoginPage> */}
        <Routes>
          <Route
            path="/lesson"
            caseSensitive={true}
            element={<CreditPage></CreditPage>}
          ></Route>
          <Route
            path="/"
            caseSensitive={true}
            element={<LoginPage></LoginPage>}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
// function Login(){
//   return <div>
//     {/* <Link to='/lesson' className={classes.link} >
//         <p className={classes.btn} align="center">
//           {/* <Link to = "/lesson">Login</Link> */}
//           Login
//         {/* </p> */}
//         {/* </Link> */} 
//   </div>
// }
export default App;

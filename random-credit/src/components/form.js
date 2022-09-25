import classes from "./form.module.css";
// import Credit from "../pages/credit";
import { BrowserRouter, Link } from 'react-router-dom';
function Form() {
  return (
    <BrowserRouter>
    <div className={classes.form}>
      <p className={classes.login} align="center">
        Login
      </p>
      <p className={classes.text}>
        Please input your name and id to get random credits for certain lessons
      </p>
      <form>
        <input
          className={classes.name}
          placeholder="name"
          type="text"
          align="center"
          required
        ></input>
        <input
          className={classes.id}
          placeholder="id"
          type="text"
          align="center"
          required
        ></input>
        <p className={classes.btn} align="center">
          {/* <Link to = "/lesson">Login</Link> */}
          <Link to='/lesson' className={classes.link} >Login</Link>
        </p>
      </form>
      {/* <Routes>
        <Route path="/lesson">
          <Credit></Credit>
        </Route>
      </Routes> */}
    </div>
     </BrowserRouter>
  );
}
export default Form;

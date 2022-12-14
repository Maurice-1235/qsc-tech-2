//参考了w3school，material UI,cheatsheet 等等
import classes from "./form.module.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import FormInput from "./formInput";

function Form() {
  const [values, setValues] = useState({
    username: "",
    id: "",
  });

  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Name",
      errorMessage: "Name should not be empty",
      label: "Username",
      // pattern: "^[a-zA-Z0-9_.-]*$",
      pattern: "*",
      required: true,
    },
    {
      id: 2,
      name: "id",
      type: "id",
      placeholder: "id",
      errorMessage: "It should be a valid id!",
      label: "id",
      pattern: "^[0-9]*$",
      required: true,
    },
  ];

  const getHello = async () => {
    const response = await fetch("http://localhost:9999/hello");
    const json = await response.json();
    alert(json.msg);
  };

  const login = async (id, name) => {
    const response = await fetch("http://localhost:9999/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: parseInt(id), name: name }),
      credentials: "include",
    });
    const json = await response.json();
    console.log("json", json);
    if (json.msg === "ok") {
      navigate("/lesson");
    } else if (json.msg === "unknown user format") {
      navigate("/");
    }
  };

  const autoLogin = async () => {
    const response = await fetch("http://localhost:9999/login", {
      credentials: "include",
    });
    const json = await response.json();
    console.log(json);
    if (json.msg === "ok") {
      navigate("/lesson");
    }
  };

  useEffect(() => {
    autoLogin();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.form}>
      <p className={classes.login} align="center">
        Login
      </p>
      <p className={classes.text}>
        Please input your name and id to get random credits for certain lessons
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        ))}
        {/* <Link to="/lesson" className={classes.link}> */}
        <button
          className={classes.lgn}
          onClick={() => login(values.id, values.username)}
        >
          Login
        </button>

        {/* </Link> */}
        <button className={classes.hello} onClick={() => getHello()}>
          Hello
        </button>
      </form>
    </div>
  );
}
export default Form;

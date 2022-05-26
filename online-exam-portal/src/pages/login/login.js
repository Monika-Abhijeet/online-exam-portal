import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./login.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  let login = (values) => {
    let defaultEmail = "monika@gmail.com";
    let defaultPassword = "monika123";
    let email = values.email;
    let password = values.password;

    // axios.get("http://localhost:8080/users").then((response) => {
    //   let allUsers = response.data;
    //   let validUser = allUsers.filter((user) => {
    //     return user.email === email && user.password === password;
    //   });
    //   if (validUser.length > 0) {
    //     alert("successful login");
    //     navigate("/home");
    //   } else {
    // alert("Login failed")

    // });
    if (defaultEmail === email && defaultPassword === password) {
      alert("successful login");
      navigate("/home");
    } else {
      alert(" login= failed");
    }
  };

  let loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter valid email")
      .required("Email is mandatory"),
    password: Yup.string()
      .min(8, "weeek password")
      .max(15, "password too long")
      .required("password is mandatory"),
  });
  return (
    <div className="login-container d-flex flex-column align-items-center ">
      <h1>Login</h1>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(e) => login(e)}
        validationSchema={loginSchema}
      >
        {(props) => (
          <Form>
            <div className="field-container">
              <label className="form-label">Email</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage name="email">
                {(error) => <p className="error-info">{error}</p>}
              </ErrorMessage>
            </div>
            <div className="field-container">
              <label className="form-label">Password</label>
              <Field type="password" name="password" className="form-control" />
              <ErrorMessage name="password">
                {(error) => <p className="error-info">{error}</p>}
              </ErrorMessage>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <button type="submit" className="btn btn-primary login-btn">
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <p>
        Not an existing User??? <Link to="/signup">Signup here</Link>
      </p>
    </div>
  );
}

export default Login;

import React from "react";
import "../sass/Login.scss";
import ImagenLogin from "../images/alcaldiaLogin.jpg";
import LogoLogin from "../images/logoLogin.png";

class Login extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  state = {
    formulario: {
      email: "",
      password: "",
    },
    error: null,
    isError: false,
  };
  param = async (e) => {
    await this.setState({
      formulario: {
        ...this.state.formulario,
        [e.target.name]: e.target.value,
      },
    });
    // console.log(this.state.formulario);
  };
  login = async () => {
    await fetch("http://localhost:8081/login", {
      method: "POST",
      body: JSON.stringify(this.state.formulario),
      // headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          // var token = headers["Authorization"];
          this.setState({
            error: null,
            isError: false,
          });
          // localStorage.setItem("token", token);
          return response.json();
        } else {
          this.setState({
            error: "Credenciales Invalidas",
            isError: true,
          });
        }
      })
      .then((a) => {
        // console.log(a);
        if (!this.state.isError) {
          localStorage.setItem("token", a.token);
          this.props.history.push("/Admin");
        }
      });
  };
  enviar = (e) => {
    e.preventDefault();
    this.login();
  };
  render() {
    return (
      <div>
        <div id="back">
          <canvas id="canvas" className="canvas-back"></canvas>
          <div className="backRight"></div>
          <div
            className="backLeft"
            style={{ backgroundImage: "url(" + ImagenLogin + ")" }}
          ></div>
        </div>

        <div id="slideBox">
          <div className="topLayer">
            <div className="right">
              <div className="content">
                <div className="logo_login">
                  <img src={LogoLogin} alt=""></img>
                </div>
                <div className="titulo_login">
                  <h2>Iniciar Sesión</h2>
                </div>
                <form id="form-login" onSubmit={this.enviar}>
                  <div className="form-element form-stack email_login">
                    <label htmlFor="username-login" className="form-label">
                      Email
                    </label>
                    <input
                      id="username-login"
                      type="mail"
                      name="email"
                      onChange={this.param}
                    ></input>
                  </div>
                  <div className="form-element form-stack clave_login">
                    <label htmlFor="password-login" className="form-label">
                      Clave
                    </label>
                    <input
                      id="password-login"
                      type="password"
                      name="password"
                      onChange={this.param}
                    ></input>
                  </div>
                  {this.state.isError === true && (
                    <div className="alert alert-danger" role="alert">
                      {this.state.error}
                    </div>
                  )}
                  <div className="form-element form-submit button-login">
                    <button
                      id="logIn"
                      className="login"
                      type="submit"
                      name="login"
                    >
                      <i class="fas fa-sign-out-alt"></i> Iniciar Sesión
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

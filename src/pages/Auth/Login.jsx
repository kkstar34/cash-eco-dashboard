import React from "react";
import AuthSideBar from "./../../components/AuthSideBar";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "./../../context/UserAuthContextProvider";

function Login() {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await logIn(email, password);
      setLoading(false);
      navigate("/home");
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <main>
        <div className="partform">
          <div className="part-rightform">
            <img src="icones/Rec1.png" alt="" />
            <div className="overlay"></div>
          </div>

          <div className="part-leftform">
            <div className="part-leftform__title">
              <img src="icones/Rec3.png" alt="logo" />
              {error && <div className="alert alert-danger">{error}</div>}
              <h2>B.O Cash Eco</h2>
              <p>Bienvenue Admin ! </p>
            </div>

            <form method="POST" onSubmit={handleSubmit}>
              <div className="form--group">
                <label htmlFor="">Adresse E-mail</label>
                <input
                  type="text"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form--group">
                <label htmlFor="">Mot de passe</label>
                <input
                  type="password"
                  placeholder="Mot de passe"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <p
                style={{
                  fontSize: "14px",
                  textAlign: "right",
                  margin: "1rem 0",
                }}
              >
                <a href="#empty">Mot de passe oublié ?</a>
              </p>

              <button className="btn--form-custom my-4" type="submit">
               
                {loading ? (
                  <>
                    {" "}
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </>
                ) : (
                  "Se connecter"
                )}
              </button>

              <p className="text-center">
                Vous n'avez pas de compte{" "}
                <Link
                  to="/register"
                  style={{ borderBottom: "1px dashed #01B7B9" }}
                >
                  Créez un compte
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;

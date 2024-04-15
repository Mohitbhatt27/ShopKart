import { useEffect, useState } from "react";

function Auth({ onSubmit, resetForm }) {
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
    username: "",
    isLoading: false,
  });

  function updateUsername(updatedUsername) {
    setFormDetails({ ...formDetails, username: updatedUsername });
  }

  function updateEmail(updatedEmail) {
    setFormDetails({ ...formDetails, email: updatedEmail });
  }

  function updatePassword(updatedPassword) {
    setFormDetails({ ...formDetails, password: updatedPassword });
  }

  function onFormSubmit() {
    setFormDetails({ ...formDetails, isLoading: true });
    onSubmit(formDetails);
  }

  useEffect(() => {
    setFormDetails({ email: "", password: "", username: "", isLoading: false });
  }, [resetForm]);

  return (
    <>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          id="loginUsername"
          value={formDetails.username}
          onChange={(e) => updateUsername(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          id="loginUserEmail"
          value={formDetails.email}
          onChange={(e) => updateEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          id="loginPassword"
          value={formDetails.password}
          onChange={(e) => updatePassword(e.target.value)}
        />
      </div>
      <div className="input-group">
        <button
          className="form-control btn btn-primary"
          type="button"
          onClick={onFormSubmit}
          disabled={formDetails.isLoading}
        >
          {formDetails.isLoading && (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          )}
          {formDetails.isLoading ? "Loading..." : "Submit"}
        </button>
      </div>
    </>
  );
}

export default Auth;

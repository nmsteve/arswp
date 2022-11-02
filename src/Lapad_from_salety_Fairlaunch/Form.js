import React, { useState } from "react";
import SignUpInfo from "./Fairlaunch_TokenInfo";
import PersonalInfo from "./Fairlaunch_Project_details";
import OtherInfo from "./Fairlaunch_Preview";
import Presale from "./Fairlaunch_Presale";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitles = ["OtherInfo", "Sign Up", "Presale", "Personal Info"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Presale formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="form-container">
        <div className="header">{/* <h1>{FormTitles[page]}</h1> */}</div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer1">
          <button
            className="go_next"
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            <img src="/img/Arrow - Right.png" alt="" />
            Go back
          </button>
          <button
            className="footer"
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Create Sale" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;

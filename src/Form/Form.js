import React, { useState } from "react";
import SignUpInfo from "./AirdropInfo";
import PersonalInfo from "./Project_details";
import OtherInfo from "./Preview";
import { Link } from "react-router-dom";

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

  const FormTitles = ["OtherInfo", "Sign Up", "Personal Info"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <Link to="/airdropform1">
      <>
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
                Go next
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
                {page === FormTitles.length - 1 ? "Create" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </>
    </Link>
  );
}

export default Form;

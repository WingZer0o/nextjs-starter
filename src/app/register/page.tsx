import * as React from "react";
import RegisterForm from "../components/account/register-form";

export default function Register() {
  return (
    <div className="container pt-4">
      <div className="row justify-content-center pt-4">
        <div className="col-12 col-sm-8 col-md-6 col-lg-5">
          <h2 className="text-center display-4 text-white">Register</h2>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

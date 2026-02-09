"use client";

import { redirect } from "next/navigation";
import { handleRegister } from "../../services/auth-actions";

export default function RegisterForm() {
  const handleSubmit = async (FormData: FormData) => {
    const success = await handleRegister(FormData);
    if (success) {
      redirect("/signin");
    }
  };

  return (
    <form action={handleSubmit} method="post" className="form-wrapper">
      <div className="form-label-group">
        <input
          name="email"
          id="registerEmail"
          placeholder="Email"
          required
          className="form-control"
          type="email"
        />
        <label htmlFor="registerEmail">Email</label>
      </div>
      <div className="form-label-group">
        <input
          name="password"
          id="registerPassword"
          placeholder="Password"
          required
          className="form-control"
          type="password"
        />
        <label htmlFor="registerPassword">Password</label>
      </div>
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Register
      </button>
    </form>
  );
}

import * as React from 'react';
import CustomInput from "./forms/CustomInput";
import {useState} from "react";

const ProfileLogin: React.FC = () => {
  const [form, updateForm] = useState({ login: "", password: "" });
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  };
  const submitForm = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/login", {
      headers: { 'Content-Type': 'application/json' },
      method: "POST",
      body: JSON.stringify(form)
    });
    const data = await response.json();
  };
  return (
    <div className="login">
      <div className="login__header login-header">
        <h2 className="login-header__title">
          Вход
        </h2>
        <span className="login-header__subtitle">
          Вход при помощи логина и пароля.
        </span>
      </div>
      <form onSubmit={submitForm} className="login__form">
        <div className="login__field">
          <CustomInput label="Логин"
                       type="email"
                       autoComplete="username"
                       placeholder="Логин"
                       name="login"
                       onChange={changeHandler}
          />
        </div>
        <div className="login__field">
          <CustomInput label="Пароль"
                       type="password"
                       autoComplete="password"
                       name="password"
                       onChange={changeHandler}
                       placeholder="Пароль"
          />
        </div>
        <button type="submit" className={`custom-btn login__btn custom-btn--active`}>Войти</button>
      </form>
      <footer className="login__footer">
      </footer>
    </div>
  );
};
export default ProfileLogin
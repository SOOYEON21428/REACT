import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // 여기에서 로그인 처리 로직을 작성합니다.
    console.log("로그인 성공", formData);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="사용자명"
        name="username"
        value={username}
        onChange={onChange}
        required
      />
      <input
        type="password"
        placeholder="비밀번호"
        name="password"
        value={password}
        onChange={onChange}
        required
      />
      <button type="submit">로그인</button>
    </form>
  );
}

export default Login;

import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // 회원 데이터 상태 관리
  const [memberData, setMemberData] = useState(() => JSON.parse(localStorage.getItem('memberData')) || []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 간단한 유효성 검사
    if(email.includes('@') && password.length >= 6) {
      const newMember = { email, password };
      const updatedMembers = [...memberData, newMember];
      setMemberData(updatedMembers);
      // localStorage에 저장
      localStorage.setItem('memberData', JSON.stringify(updatedMembers));
      alert('회원가입 성공!');
    } else {
      alert('이메일 또는 비밀번호 조건이 충족되지 않습니다.');
    }
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일"/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호"/>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default Register;

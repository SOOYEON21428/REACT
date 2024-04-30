import React, { useState } from "react";

function Write() {
  const [postData, setPostData] = useState({
    title: "",
    content: "",
  });

  const { title, content } = postData;

  const onChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // 여기에서 글쓰기 처리 로직을 작성합니다.
    console.log("글 작성", postData);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="제목"
        name="title"
        value={title}
        onChange={onChange}
        required
      />
      <textarea
        placeholder="내용"
        name="content"
        value={content}
        onChange={onChange}
        required
      ></textarea>
      <button type="submit">글쓰기</button>
    </form>
  );
}

export default Write;

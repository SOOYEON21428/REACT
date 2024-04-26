import React, { useState } from 'react';

function App() {
  const [date, setDate] = useState('');
  const [movies, setMovies] = useState([]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleSubmit = () => {
    fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${date}`)
      .then(res => res.json())
      .then(data => {
        setMovies(data.boxOfficeResult.dailyBoxOfficeList.slice(0, 10)); 
      });
  }

  return (
    <div>
      <input type="text" value={date} onChange={handleDateChange} placeholder="날짜 입력 (yyyymmdd)"/>
      <button onClick={handleSubmit}>검색</button>

      <ul>
        {movies.map(movie => (
          <li key={movie.movieCd}>
            <p>{movie.rank}위</p> 
            <h3>{movie.movieNm}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

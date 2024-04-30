import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <nav>
          <ul style={styles.navList}>
            <li style={styles.navItem}><Link to="/register" style={styles.navLink}>회원가입</Link></li>
            <li style={styles.navItem}><Link to="/login" style={styles.navLink}>로그인</Link></li>
            <li style={styles.navItem}><Link to="/write" style={styles.navLink}>글쓰기</Link></li>
            <li style={styles.navItem}><Link to="/list" style={styles.navLink}>목록</Link></li>
          </ul>
        </nav>
      </header>
      <h1 style={styles.heading}>Welcome to the Home Page</h1>
      <Link to="/"><img src="../image/sy.jpeg" alt="Home" style={styles.image} /></Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  header: {
    backgroundColor: '#333',
    padding: '10px 0',
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  navItem: {
    display: 'inline-block',
    marginRight: '10px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  image: {
    cursor: 'pointer',
  },
};

export default Home;

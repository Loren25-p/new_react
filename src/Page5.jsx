import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page5 = () => {
  const navigate = useNavigate();

  const goToFirstPage = () => {
    navigate('/');
  };

  return (
    <div style={styles.page}>
      <h1>5</h1>
      <button style={styles.button} onClick={goToFirstPage}>Начать заново</button>
    </div>
  );
};

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'yellow',
    color: 'white',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: 'white',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Page5;

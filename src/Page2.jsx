import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page2 = () => {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate('/page3');
  };

  return (
    <div style={styles.page}>
      <h1>2</h1>
      <button style={styles.button} onClick={goToNextPage}>Далее</button>
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
    backgroundColor: 'red',
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

export default Page2;

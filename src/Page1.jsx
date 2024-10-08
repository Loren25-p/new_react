import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page1 = () => {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate('/page2');
  };

  return (
    <div style={styles.page}>
      <h1>1</h1>
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
    backgroundColor: 'black',
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

export default Page1;

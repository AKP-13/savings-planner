const MonthlySavingAmount = () => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '4px',
        boxShadow: ' 0px 1px 1px rgba(0, 0, 0, 0.25)',
        margin: '1rem',
        padding: '0.5rem',
        width: '33%'
      }}>
      <h2
        style={{
          margin: '0.5rem',
          fontWeight: 400,
          textAlign: 'left',
          textDecoration: 'underline'
        }}>
        Monthly Saving Amount
      </h2>
      <p style={{ margin: '0.5rem', textAlign: 'left' }}>
        Each month I can save{' '}
        <span
          style={{ color: 'dodgerblue', fontFamily: 'Kaushan Script, cursive', fontSize: '2rem' }}>
          £500
        </span>
      </p>
    </div>
  );
};

export default MonthlySavingAmount;

export default function Dashboard() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        NovaCryptoX Dashboard
      </h1>

      {/* Total Balance */}
      <div style={{
        backgroundColor: '#0f172a',
        color: '#fff',
        padding: '1.5rem',
        borderRadius: '1rem',
        marginBottom: '2rem',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
      }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '.5rem' }}>Total Balance</h2>
        <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>$12,846.23 USD</p>
      </div>

    </div>
  );
}

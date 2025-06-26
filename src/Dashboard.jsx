export default function Dashboard() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Header */}
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1e293b' }}>
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

      {/* Portfolio Breakdown */}
      <div style={{
        backgroundColor: '#fff',
        padding: '1.5rem',
        borderRadius: '1rem',
        marginBottom: '2rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>Your Portfolio</h3>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li>BTC - 0.5294 ≈ $3,200.12</li>
          <li>ETH - 2.1846 ≈ $4,510.90</li>
          <li>USDT - 3,012.30 ≈ $3,012.30</li>
          <li>SOL - 21.6 ≈ $582.91</li>
        </ul>
      </div>

      {/* Chart Placeholder */}
      <div style={{
        backgroundColor: '#fff',
        padding: '1.5rem',
        borderRadius: '1rem',
        marginBottom: '2rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>Market Trend</h3>
        <p>[Chart Coming Soon]</p>
      </div>

      {/* Trade History */}
      <div style={{
        backgroundColor: '#fff',
        padding: '1.5rem',
        borderRadius: '1rem',
        marginBottom: '2rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>Recent Transactions</h3>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li>Buy 0.2 BTC – $1,200 – Completed</li>
          <li>Sell 1.5 ETH – $2,950 – Completed</li>
          <li>Buy 500 USDT – $500 – Pending</li>
        </ul>
      </div>

      {/* Deposit / Withdraw Buttons */}
      <div style={{ textAlign: 'center' }}>
        <button style={{
          backgroundColor: '#0f766e',
          color: '#fff',
          padding: '0.75rem 1.5rem',
          marginRight: '1rem',
          border: 'none',
          borderRadius: '0.5rem',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>Deposit</button>
        <button style={{
          backgroundColor: '#991b1b',
          color: '#fff',
          padding: '0 

import { useState } from 'react';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setUser(form);
  };

  if (!user) {
    return (
      <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Create Your NovaCryptoX Account</h1>
        <form onSubmit={handleSignup} style={{ maxWidth: '400px' }}>
          <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} style={inputStyle} required />
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} style={inputStyle} required />
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} style={inputStyle} required />
          <button type="submit" style={buttonStyle}>Create Account</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1e293b' }}>
        Welcome, {user.name}
      </h1>

      {/* Total Balance */}
      <div style={cardDark}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '.5rem' }}>Total Balance</h2>
        <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>$0.00 USD</p>
      </div>

      {/* Portfolio Breakdown */}
      <div style={cardLight}>
        <h3 style={titleStyle}>Your Portfolio</h3>
        <p>You have no assets yet. Fund your wallet to start trading.</p>
      </div>

      {/* Chart Placeholder */}
      <div style={cardLight}>
        <h3 style={titleStyle}>Market Trend</h3>
        <p>[Chart Coming Soon]</p>
      </div>

      {/* Trade History */}
      <div style={cardLight}>
        <h3 style={titleStyle}>Recent Transactions</h3>
        <p>No transactions found.</p>
      </div>

      {/* Deposit / Withdraw Buttons */}
      <div style={{ textAlign: 'center' }}>
        <a href="https://t.me/franciswagner_fx" target="_blank" rel="noopener noreferrer">
          <button style={depositBtn}>Contact Admin to Deposit</button>
        </a>
        <button style={withdrawBtn} disabled>Withdraw</button>
      </div>
    </div>
  );
}

// Styling constants
const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  marginBottom: '1rem',
  borderRadius: '0.5rem',
  border: '1px solid #ccc',
  fontSize: '1rem'
};

const buttonStyle = {
  backgroundColor: '#0f766e',
  color: '#fff',
  padding: '0.75rem 1.5rem',
  border: 'none',
  borderRadius: '0.5rem',
  fontWeight: 'bold',
  fontSize: '1rem',
  cursor: 'pointer',
  width: '100%'
};

const cardDark = {
  backgroundColor: '#0f172a',
  color: '#fff',
  padding: '1.5rem',
  borderRadius: '1rem',
  marginBottom: '2rem',
  boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
};

const cardLight = {
  backgroundColor: '#fff',
  padding: '1.5rem',
  borderRadius: '1rem',
  marginBottom: '2rem',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
};

const titleStyle = {
  marginBottom: '1rem',
  color: '#1e293b'
};

const depositBtn = {
  backgroundColor: '#0f766e',
  color: '#fff',
  padding: '0.75rem 1.5rem',
  marginRight: '1rem',
  border: 'none',
  borderRadius: '0.5rem',
  fontWeight: 'bold',
  cursor: 'pointer'
};

const withdrawBtn = {
  backgroundColor: '#991b1b',
  color: '#fff',
  padding: '0.75rem 1.5rem',
  border: 'none',
  borderRadius: '0.5rem',
  fontWeight: 'bold',
  cursor: 'not-allowed',
  opacity: 0.6
}; 

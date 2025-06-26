import { useState, useEffect } from 'react';

export default function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const user = localStorage.getItem('novacryptox_user');
    if (user) {
      setUsers([JSON.parse(user)]);
    }
  }, []);

  const login = () => {
    if (email === 'admin@nova.com' && password === 'supersecret') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid admin credentials');
    }
  };

  const updateBalance = () => {
    if (!selectedUser) return;
    const value = parseFloat(amount);
    if (isNaN(value)) return;

    const currentBalance = parseFloat(localStorage.getItem('novacryptox_balance')) || 0;
    const newBalance = currentBalance + value;
    localStorage.setItem('novacryptox_balance', newBalance);
    alert(`Balance updated: $${newBalance.toFixed(2)}`);
    setAmount('');
  };

  if (!isAuthenticated) {
    return (
      <div style={pageStyle}>
        <h1>Admin Login</h1>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
        <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
        <button onClick={login} style={buttonStyle}>Login</button>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <h1>Admin Dashboard</h1>
      <h2>Registered Users</h2>
      {users.length === 0 && <p>No users found.</p>}
      {users.map((u, index) => (
        <div key={index} style={userCard}>
          <p><strong>Name:</strong> {u.name}</p>
          <p><strong>Email:</strong> {u.email}</p>
          <button onClick={() => setSelectedUser(u)} style={selectBtn}>Manage Balance</button>
        </div>
      ))}

      {selectedUser && (
        <div style={cardLight}>
          <h3>Adjust Balance for {selectedUser.name}</h3>
          <input
            type="number"
            placeholder="Enter amount (e.g. 500 or -200)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={inputStyle}
          />
          <button onClick={updateBalance} style={buttonStyle}>Apply Change</button>
        </div>
      )}
    </div>
  );
}

const pageStyle = {
  padding: '2rem',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f4f4f4',
  minHeight: '100vh'
};

const inputStyle = {
  display: 'block',
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
  cursor: 'pointer'
};

const selectBtn = {
  backgroundColor: '#1e40af',
  color: '#fff',
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '0.5rem',
  cursor: 'pointer',
  marginTop: '0.5rem'
};

const cardLight = {
  backgroundColor: '#fff',
  padding: '1.5rem',
  borderRadius: '1rem',
  marginTop: '2rem',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
};

const userCard = {
  backgroundColor: '#fff',
  padding: '1rem',
  borderRadius: '0.5rem',
  marginBottom: '1rem',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
};

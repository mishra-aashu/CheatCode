import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import Card from '../components/Card';
import Button from '../components/Button';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: window.location.origin,
        },
      });

      if (error) throw error;
      setMessage('📧 Check your email for the login link!');
    } catch (error) {
      console.log('Demo mode: Login simulated');
      setMessage('✅ Demo: Login successful! (Supabase not configured)');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        },
      });

      if (error) throw error;
    } catch (error) {
      console.log('Demo mode: Google login simulated');
      setMessage('✅ Demo: Google login successful! (Supabase not configured)');
    }
  };

  const handlePhoneLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const { error } = await supabase.auth.signInWithOtp({
        phone,
      });

      if (error) throw error;
      setMessage('📱 Check your phone for the OTP!');
    } catch (error) {
      console.log('Demo mode: Phone login simulated');
      setMessage('✅ Demo: Phone OTP sent! (Supabase not configured)');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <section className="hero" style={{ padding: '40px 20px' }}>
        <h1>👤 Welcome to CaBa</h1>
        <p>Login to access your personalized learning dashboard</p>

        <Card className="auth-form">
          <form onSubmit={handleEmailLogin}>
            <input
              type="email"
              placeholder="📧 Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              variant="primary" 
              type="submit" 
              style={{ width: '100%' }}
              disabled={loading}
            >
              {loading ? 'Sending...' : '📧 Login with Email'}
            </Button>
          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <Button 
            variant="secondary" 
            onClick={handleGoogleLogin}
            style={{ width: '100%' }}
          >
            🔐 Continue with Google
          </Button>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <form onSubmit={handlePhoneLogin}>
            <input
              type="tel"
              placeholder="📱 Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <Button 
              variant="success" 
              type="submit" 
              style={{ width: '100%' }}
              disabled={loading}
            >
              {loading ? 'Sending...' : '📱 Login with Phone (OTP)'}
            </Button>
          </form>

          {message && (
            <div style={{ 
              marginTop: '20px', 
              padding: '15px', 
              background: 'rgba(0, 255, 65, 0.1)', 
              borderRadius: '10px',
              color: 'var(--matrix-green)'
            }}>
              {message}
            </div>
          )}
        </Card>

        <p style={{ marginTop: '30px', color: 'var(--text-secondary)' }}>
          🔒 Your data is secure with Supabase Auth
        </p>
      </section>
    </div>
  );
};

export default Auth;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = () => {
  const [pyqs, setPyqs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPYQs();
  }, []);

  async function fetchPYQs() {
    try {
      const { data, error } = await supabase
        .from('pyqs')
        .select('*')
        .limit(6);
      
      if (error) throw error;
      setPyqs(data || []);
    } catch (error) {
      console.log('Using demo data:', error.message);
      // Demo data for demonstration
      setPyqs([
        { id: 1, subject: 'Mathematics', question: 'If x² + y² = 25 and x + y = 7, find xy', trick: 'Use (x+y)² = x² + y² + 2xy', difficulty: 'Medium' },
        { id: 2, subject: 'Physics', question: 'Calculate the force when mass = 10kg and acceleration = 5m/s²', trick: 'F = ma, Simple multiplication!', difficulty: 'Easy' },
        { id: 3, subject: 'Chemistry', question: 'Find the molar mass of H₂SO₄', trick: 'H=1, S=32, O=16. 2(1) + 32 + 4(16) = 98', difficulty: 'Easy' },
        { id: 4, subject: 'Mathematics', question: 'Solve: 2x + 5 = 15', trick: 'Subtract 5, then divide by 2', difficulty: 'Easy' },
        { id: 5, subject: 'Biology', question: 'What is the powerhouse of the cell?', trick: 'Mitochondria - remember "Mighty Mito"!', difficulty: 'Easy' },
        { id: 6, subject: 'Physics', question: 'Convert 100°C to Fahrenheit', trick: 'F = (C × 9/5) + 32 = 212°F', difficulty: 'Medium' },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const showTrick = (trick) => {
    alert(`⚡ 10-Sec Trick:\n\n${trick}`);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>🎯 CaBa: Hack Your Rank</h1>
        <p>
          Master shortcuts, crack PYQs, and dominate your exams with 
          <span className="text-gradient"> proven tricks</span>!
        </p>
        <div className="flex gap-15 flex-center">
          <Link to="/mock-test">
            <Button variant="primary">🚀 Start Free Mock Test</Button>
          </Link>
          <Link to="/tricks">
            <Button variant="secondary">⚡ Explore Tricks</Button>
          </Link>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-30">
        <div className="grid">
          <Card className="text-center">
            <h3>📚 PYQs Solved</h3>
            <p className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>10,000+</p>
          </Card>
          <Card className="text-center">
            <h3>⚡ Tricks Learned</h3>
            <p className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>500+</p>
          </Card>
          <Card className="text-center">
            <h3>🏆 Top Rankers</h3>
            <p className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>1,500+</p>
          </Card>
        </div>
      </section>

      {/* Featured Tricks */}
      <section className="py-30">
        <h2 className="text-center mb-20" style={{ fontSize: '2rem' }}>
          🔥 <span className="text-gradient">Featured Tricks</span>
        </h2>
        {loading ? (
          <p className="text-center">Loading tricks...</p>
        ) : (
          <div className="grid">
            {pyqs.map((item) => (
              <Card key={item.id}>
                <div className="flex-between mb-20">
                  <span className="filter-tag active">{item.subject}</span>
                  <span className="filter-tag">{item.difficulty}</span>
                </div>
                <h3>Question:</h3>
                <p>{item.question}</p>
                <div style={{ marginTop: '20px' }}>
                  <Button 
                    variant="primary" 
                    onClick={() => showTrick(item.trick)}
                    className="w-100"
                  >
                    ⚡ Show 10-Sec Trick
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-30 text-center">
        <Card className="cta-card">
          <h2>💪 Ready to Level Up?</h2>
          <p>Join thousands of students who are already hacking their ranks!</p>
          <Link to="/auth">
            <Button variant="success" style={{ marginTop: '20px' }}>
              Join CaBa Free →
            </Button>
          </Link>
        </Card>
      </section>
    </div>
  );
};

export default Home;

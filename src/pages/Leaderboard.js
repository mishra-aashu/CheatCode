import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const Leaderboard = () => {
  const [timeFilter, setTimeFilter] = useState('All Time');

  const timeFilters = ['All Time', 'This Month', 'This Week', 'Today'];

  const toppers = [
    { rank: 1, name: 'Aryan Sharma', score: 2450, avatar: '🧙‍♂️', streak: 45, badge: '🏆' },
    { rank: 2, name: 'Priya Patel', score: 2380, avatar: '👩‍🔬', streak: 38, badge: '🥈' },
    { rank: 3, name: 'Rahul Kumar', score: 2250, avatar: '🧑‍🎓', streak: 32, badge: '🥉' },
    { rank: 4, name: 'Sneha Reddy', score: 2180, avatar: '👩‍💻', streak: 28, badge: '⭐' },
    { rank: 5, name: 'Vikram Singh', score: 2050, avatar: '🧑‍🔬', streak: 25, badge: '⭐' },
    { rank: 6, name: 'Ananya Gupta', score: 1980, avatar: '👩‍🏫', streak: 22, badge: '🔥' },
    { rank: 7, name: 'Rohan Mehta', score: 1850, avatar: '🧑‍💼', streak: 20, badge: '🎯' },
    { rank: 8, name: 'Kavitha Nair', score: 1720, avatar: '👩‍🎨', streak: 18, badge: '💪' },
    { rank: 9, name: 'Arjun Das', score: 1680, avatar: '🧑‍🚀', streak: 15, badge: '🚀' },
    { rank: 10, name: 'Meera Iyer', score: 1550, avatar: '👩‍⚕️', streak: 12, badge: '🎓' },
  ];

  const yourRank = {
    rank: 127,
    name: 'Your Rank',
    score: 850,
    avatar: '😎',
    streak: 5,
    badge: '🔥'
  };

  const getRankClass = (rank) => {
    if (rank === 1) return 'rank-1';
    if (rank === 2) return 'rank-2';
    if (rank === 3) return 'rank-3';
    return '';
  };

  return (
    <div className="leaderboard-page">
      <section className="hero" style={{ padding: '40px 20px' }}>
        <h1>🏆 Leaderboard</h1>
        <p>Compete with toppers and climb the ranks!</p>

        {/* Your Stats Card */}
        <Card style={{ maxWidth: '500px', margin: '30px auto', textAlign: 'center' }}>
          <h3>📊 Your Stats</h3>
          <div className="flex flex-center gap-15" style={{ marginTop: '20px' }}>
            <div>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--neon-pink)' }}>
                #{yourRank.rank}
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>Current Rank</p>
            </div>
            <div>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--matrix-green)' }}>
                {yourRank.score}
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>Total Score</p>
            </div>
            <div>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--cyber-yellow)' }}>
                🔥 {yourRank.streak}
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>Day Streak</p>
            </div>
          </div>
          
          <Button variant="primary" style={{ marginTop: '25px', width: '100%' }}>
            📝 Take a Mock Test to Climb!
          </Button>
        </Card>

        {/* Time Filters */}
        <div className="filter-tags" style={{ justifyContent: 'center', marginTop: '30px' }}>
          {timeFilters.map((filter) => (
            <button
              key={filter}
              className={`filter-tag ${timeFilter === filter ? 'active' : ''}`}
              onClick={() => setTimeFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Toppers List */}
        <div className="leaderboard" style={{ maxWidth: '700px', margin: '40px auto' }}>
          {toppers.map((topper) => (
            <div 
              key={topper.rank} 
              className={`leaderboard-item ${getRankClass(topper.rank)}`}
            >
              <div className="rank">
                {topper.badge}
              </div>
              <div style={{ fontSize: '2rem', marginRight: '15px' }}>
                {topper.avatar}
              </div>
              <div className="user-info">
                <p className="user-name">{topper.name}</p>
                <p className="user-score">🔥 {topper.streak} day streak</p>
              </div>
              <div style={{ 
                background: 'rgba(0, 255, 65, 0.1)', 
                padding: '10px 20px', 
                borderRadius: '20px',
                border: '1px solid var(--matrix-green)'
              }}>
                <span style={{ color: 'var(--matrix-green)', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  {topper.score.toLocaleString()} pts
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <section style={{ marginTop: '60px' }}>
          <h2 className="text-center mb-30" style={{ fontSize: '2rem' }}>
            🎖️ <span className="text-gradient">Achievements</span>
          </h2>
          <div className="grid" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <Card className="text-center">
              <div style={{ fontSize: '3rem' }}>🎯</div>
              <h3>First Mock Test</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Complete your first mock test</p>
            </Card>
            <Card className="text-center">
              <div style={{ fontSize: '3rem' }}>🔥</div>
              <h3>7 Day Streak</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Login 7 days in a row</p>
            </Card>
            <Card className="text-center">
              <div style={{ fontSize: '3rem' }}>⭐</div>
              <h3>Trick Master</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Learn 50 tricks</p>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <Card className="text-center" style={{ maxWidth: '500px', margin: '60px auto' }}>
          <h2>💪 Climb the Ranks!</h2>
          <p style={{ marginTop: '15px' }}>Start practicing now and beat the toppers!</p>
          <Button variant="primary" style={{ marginTop: '25px' }}>
            🚀 Start Practicing
          </Button>
        </Card>
      </section>
    </div>
  );
};

export default Leaderboard;

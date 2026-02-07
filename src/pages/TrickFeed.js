import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const TrickFeed = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'];

  const tricks = [
    {
      id: 1,
      subject: 'Mathematics',
      title: 'Square Trick for Numbers Ending with 5',
      description: 'Numbers like 25, 35, 45 squared can be solved in 2 seconds! Just multiply the first digit by itself + 1, then append 25.',
      example: '75^2 = (7 x 8) + 25 = 56 + 25 = 5625',
      duration: '30 sec',
      views: 15420,
      likes: 2340
    },
    {
      id: 2,
      subject: 'Physics',
      title: 'Remember Formulas Made Easy',
      description: 'Use the Triangle Method to remember F = ma, V = IR, and density formulas all at once!',
      example: 'Cover what you want to find, the remaining formula gives you the answer!',
      duration: '45 sec',
      views: 12350,
      likes: 1890
    },
    {
      id: 3,
      subject: 'Chemistry',
      title: 'Periodic Table Rows and Columns',
      description: 'Remember the groups have valence electrons matching group numbers for main groups!',
      example: 'Group 1=1, 2=2, 13=3, 14=4, 15=5, 16=6, 17=7, 18=8',
      duration: '25 sec',
      views: 9870,
      likes: 1560
    },
    {
      id: 4,
      subject: 'Biology',
      title: 'Remember 206 Bones in Body',
      description: 'Use the song or acronym for carpals and tarsals to remember all bones!',
      example: '206 bones in adult human body',
      duration: '20 sec',
      views: 8760,
      likes: 1230
    },
    {
      id: 5,
      subject: 'Mathematics',
      title: 'Vedic Multiplication',
      description: 'Multiply any two 2-digit numbers mentally using the Vertically and Crosswise method!',
      example: '23 x 47 = (20+3)(40+7) = 20x7 + 3x40 + 3x7 + 20x40 = 1081',
      duration: '60 sec',
      views: 11230,
      likes: 2010
    },
    {
      id: 6,
      subject: 'English',
      title: 'Principal vs Principle',
      description: 'Remember: A principal is your friend at school! (Person) vs Principle is a rule.',
      example: 'The principal gave us a principle to follow.',
      duration: '15 sec',
      views: 6540,
      likes: 980
    }
  ];

  const filteredTricks = activeFilter === 'All' 
    ? tricks 
    : tricks.filter(trick => trick.subject === activeFilter);

  const likeTrick = (id) => {
    alert('Liked! (Demo mode)');
  };

  return (
    <div className="trick-feed-page">
      <section className="hero" style={{ padding: '40px 20px' }}>
        <h1>⚡ Trick Feed</h1>
        <p>Learn life-changing shortcuts in under 60 seconds!</p>

        {/* Filter Tags */}
        <div className="filter-tags" style={{ justifyContent: 'center', marginTop: '30px' }}>
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-tag ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Tricks Grid */}
        <div className="grid" style={{ marginTop: '40px' }}>
          {filteredTricks.map((trick) => (
            <Card key={trick.id} className="trick-video">
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div className="filter-tag active" style={{ marginBottom: '15px' }}>
                  {trick.subject}
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>
                  {trick.title}
                </h3>
                <p style={{ marginBottom: '15px' }}>{trick.description}</p>
                
                <div style={{ 
                  background: 'rgba(0, 255, 65, 0.1)', 
                  padding: '15px', 
                  borderRadius: '10px',
                  marginBottom: '15px',
                  border: '1px solid var(--matrix-green)'
                }}>
                  <p style={{ color: 'var(--matrix-green)', fontWeight: 'bold', fontSize: '0.9rem' }}>
                    💡 Example:
                  </p>
                  <p style={{ fontSize: '0.95rem' }}>{trick.example}</p>
                </div>

                <div className="trick-duration">
                  ⏱️ {trick.duration}
                </div>

                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginTop: '20px',
                  paddingTop: '15px',
                  borderTop: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    👁️ {trick.views.toLocaleString()} views
                  </span>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <Button 
                      variant="secondary" 
                      onClick={() => likeTrick(trick.id)}
                      style={{ padding: '10px 20px', fontSize: '0.9rem' }}
                    >
                      ❤️ {trick.likes.toLocaleString()}
                    </Button>
                    <Button 
                      variant="primary" 
                      style={{ padding: '10px 20px', fontSize: '0.9rem' }}
                    >
                      ▶️ Watch
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Button variant="secondary">
            📥 Load More Tricks
          </Button>
        </div>
      </section>
    </div>
  );
};

export default TrickFeed;

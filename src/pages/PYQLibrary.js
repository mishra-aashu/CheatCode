import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const PYQLibrary = () => {
  const [activeYear, setActiveYear] = useState('All');
  const [activeSubject, setActiveSubject] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const years = ['All', '2024', '2023', '2022', '2021', '2020'];
  const subjects = ['All', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'];

  const pyqs = [
    {
      id: 1,
      year: '2024',
      subject: 'Mathematics',
      question: 'If sin theta + cos theta = sqrt(2), then find theta (0 <= theta <= pi/2)',
      answer: 'theta = pi/4',
      exam: 'JEE Main 2024',
      trick: 'Square both sides: (sin + cos)^2 = 2 => sin^2 + cos^2 + 2sin cos = 2 => 1 + sin 2theta = 2 => sin 2theta = 1 => 2theta = pi/2 => theta = pi/4'
    },
    {
      id: 2,
      year: '2024',
      subject: 'Physics',
      question: 'A body of mass 2kg is moving with velocity 3m/s. Find its kinetic energy.',
      answer: 'KE = 9 Joules',
      exam: 'JEE Main 2024',
      trick: 'KE = (1/2)mv^2 = (1/2)(2)(3)^2 = 9 J'
    },
    {
      id: 3,
      year: '2023',
      subject: 'Chemistry',
      question: 'The number of unpaired electrons in Mn2+ ion is (Atomic number of Mn = 25)',
      answer: '5 unpaired electrons',
      exam: 'JEE Main 2023',
      trick: 'Mn: [Ar] 3d^5 4s^2, Mn2+: [Ar] 3d^5 - all 5 d-electrons are unpaired!'
    },
    {
      id: 4,
      year: '2023',
      subject: 'Mathematics',
      question: 'Find the derivative of x^2 sin x',
      answer: '2x sin x + x^2 cos x',
      exam: 'JEE Main 2023',
      trick: 'Use product rule: (uv) = uv + uv = x^2 * cos x + 2x * sin x'
    },
    {
      id: 5,
      year: '2022',
      subject: 'Biology',
      question: 'Which hormone is known as the stress hormone?',
      answer: 'Cortisol',
      exam: 'NEET 2022',
      trick: 'Remember: CORTISOL = COPE + STRESS'
    },
    {
      id: 6,
      year: '2022',
      subject: 'Physics',
      question: 'The resistance of a wire at 20C is 10 ohm. Its resistance at 40C is? (alpha = 0.002/C)',
      answer: '10.4 ohm',
      exam: 'NEET 2022',
      trick: 'R2 = R1[1 + alpha(T2 - T1)] = 10[1 + 0.002(20)] = 10.4 ohm'
    },
    {
      id: 7,
      year: '2021',
      subject: 'English',
      question: 'Fill in the blank: She _____ (come) to India last year.',
      answer: 'came',
      exam: 'CBSE 2021',
      trick: 'Last year = Past tense. Base form came is already past tense.'
    },
    {
      id: 8,
      year: '2021',
      subject: 'Chemistry',
      question: 'The IUPAC name of [Co(NH3)6]Cl3 is',
      answer: 'Hexaamminecobalt(III) chloride',
      exam: 'JEE Main 2021',
      trick: '6 NH3 = hexaammine, Co = cobalt, 3+ charge = Cobalt(III)'
    }
  ];

  const filteredPYQs = pyqs.filter(pyq => {
    const yearMatch = activeYear === 'All' || pyq.year === activeYear;
    const subjectMatch = activeSubject === 'All' || pyq.subject === activeSubject;
    const searchMatch = searchQuery === '' || 
      pyq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pyq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    return yearMatch && subjectMatch && searchMatch;
  });

  const showTrick = (trick) => {
    alert(`Trick:\n\n${trick}`);
  };

  return (
    <div className="pyq-library">
      <section className="hero" style={{ padding: '40px 20px' }}>
        <h1>📚 PYQ Library</h1>
        <p>Master previous year questions with expert tricks!</p>

        {/* Search Bar */}
        <div style={{ maxWidth: '500px', margin: '30px auto' }}>
          <input
            type="text"
            placeholder="Search PYQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '15px 20px',
              borderRadius: '30px',
              border: '2px solid var(--neon-purple)',
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'var(--text-primary)',
              fontSize: '1rem',
              outline: 'none'
            }}
          />
        </div>

        {/* Filter Tags - Years */}
        <div className="filter-tags" style={{ justifyContent: 'center' }}>
          <span style={{ marginRight: '15px', alignSelf: 'center' }}>Year:</span>
          {years.map((year) => (
            <button
              key={year}
              className={`filter-tag ${activeYear === year ? 'active' : ''}`}
              onClick={() => setActiveYear(year)}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Filter Tags - Subjects */}
        <div className="filter-tags" style={{ justifyContent: 'center', marginTop: '15px' }}>
          <span style={{ marginRight: '15px', alignSelf: 'center' }}>Subject:</span>
          {subjects.map((subject) => (
            <button
              key={subject}
              className={`filter-tag ${activeSubject === subject ? 'active' : ''}`}
              onClick={() => setActiveSubject(subject)}
            >
              {subject}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p style={{ textAlign: 'center', marginTop: '20px', color: 'var(--text-secondary)' }}>
          Showing {filteredPYQs.length} questions
        </p>

        {/* PYQs Grid */}
        <div className="grid" style={{ marginTop: '30px' }}>
          {filteredPYQs.map((pyq) => (
            <Card key={pyq.id}>
              <div className="flex-between mb-20">
                <span className="filter-tag active">{pyq.subject}</span>
                <span className="filter-tag">{pyq.year}</span>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Question:</p>
                <p>{pyq.question}</p>
              </div>

              <div style={{ 
                background: 'rgba(0, 255, 65, 0.1)', 
                padding: '15px', 
                borderRadius: '10px',
                marginBottom: '15px',
                border: '1px solid var(--matrix-green)'
              }}>
                <p style={{ color: 'var(--matrix-green)', fontWeight: 'bold' }}>Answer:</p>
                <p>{pyq.answer}</p>
              </div>

              <div style={{ 
                background: 'rgba(233, 69, 96, 0.1)', 
                padding: '10px', 
                borderRadius: '10px',
                marginBottom: '15px',
                border: '1px solid var(--neon-pink)'
              }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {pyq.exam}
                </p>
              </div>

              <Button 
                variant="primary" 
                onClick={() => showTrick(pyq.trick)}
                style={{ width: '100%' }}
              >
                View Trick
              </Button>
            </Card>
          ))}
        </div>

        {filteredPYQs.length === 0 && (
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
              No questions found matching your filters.
            </p>
            <Button 
              variant="secondary" 
              onClick={() => { setActiveYear('All'); setActiveSubject('All'); setSearchQuery(''); }}
              style={{ marginTop: '20px' }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </section>
    </div>
  );
};

export default PYQLibrary;

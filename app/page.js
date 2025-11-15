'use client';
import { useState } from 'react';

export default function PinkyWarmup() {
  const [activeSection, setActiveSection] = useState(null);
  const [completedExercises, setCompletedExercises] = useState([]);

  const toggleComplete = (id) => {
    setCompletedExercises(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '20px',
        padding: '3rem',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{
            fontSize: '2.5rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.5rem'
          }}>
            🤙 Pinky Finger Warm-Up Guide
          </h1>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>
            Simple exercises to warm up your pinky finger
          </p>
        </div>

        {/* Section 1: Warm the whole hand */}
        <div style={{
          marginBottom: '2rem',
          border: '2px solid #667eea',
          borderRadius: '15px',
          overflow: 'hidden'
        }}>
          <div
            onClick={() => setActiveSection(activeSection === 1 ? null : 1)}
            style={{
              background: activeSection === 1 ? '#667eea' : '#f8f9ff',
              color: activeSection === 1 ? 'white' : '#333',
              padding: '1.5rem',
              cursor: 'pointer',
              fontSize: '1.3rem',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              transition: 'all 0.3s'
            }}
          >
            <span>1. Warm the Whole Hand (1–2 minutes)</span>
            <span>{activeSection === 1 ? '−' : '+'}</span>
          </div>
          {activeSection === 1 && (
            <div style={{ padding: '1.5rem', background: '#fafbff' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: '#667eea', marginBottom: '0.75rem' }}>
                  🔥 Heat + Friction
                </h3>
                <ul style={{ lineHeight: '1.8', color: '#444' }}>
                  <li>Rub your hands together quickly for 30–60 seconds, focusing on the side with the pinky</li>
                  <li>Gently massage along the length of the pinky, from base to tip, then around the knuckle</li>
                </ul>
              </div>

              <div>
                <h3 style={{ color: '#667eea', marginBottom: '0.75rem' }}>
                  ♨️ External Warmth (if it feels cold)
                </h3>
                <ul style={{ lineHeight: '1.8', color: '#444' }}>
                  <li>Run your hands under comfortably warm (not hot) water for 1–2 minutes, moving your fingers</li>
                  <li>Or hold a warm (not too hot) pack or a mug of warm liquid, wrapping your hand around it</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Section 2: Gentle movement */}
        <div style={{
          marginBottom: '2rem',
          border: '2px solid #764ba2',
          borderRadius: '15px',
          overflow: 'hidden'
        }}>
          <div
            onClick={() => setActiveSection(activeSection === 2 ? null : 2)}
            style={{
              background: activeSection === 2 ? '#764ba2' : '#faf8ff',
              color: activeSection === 2 ? 'white' : '#333',
              padding: '1.5rem',
              cursor: 'pointer',
              fontSize: '1.3rem',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              transition: 'all 0.3s'
            }}
          >
            <span>2. Gentle Movement for the Pinky (Mobility)</span>
            <span>{activeSection === 2 ? '−' : '+'}</span>
          </div>
          {activeSection === 2 && (
            <div style={{ padding: '1.5rem', background: '#fcfbff' }}>
              <p style={{
                color: '#d63384',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                padding: '0.75rem',
                background: '#fff5f8',
                borderRadius: '8px'
              }}>
                ⚠️ Do these slowly, without pain
              </p>

              {/* Pinky Bends */}
              <div style={{
                marginBottom: '1.5rem',
                padding: '1.25rem',
                background: 'white',
                borderRadius: '12px',
                border: '2px solid #f0f0f0'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <h3 style={{ color: '#764ba2', margin: 0 }}>
                    👆 Pinky Bends
                  </h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleComplete('pinky-bends');
                    }}
                    style={{
                      background: completedExercises.includes('pinky-bends') ? '#28a745' : '#e0e0e0',
                      color: completedExercises.includes('pinky-bends') ? 'white' : '#666',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      transition: 'all 0.3s'
                    }}
                  >
                    {completedExercises.includes('pinky-bends') ? '✓ Done' : 'Mark Done'}
                  </button>
                </div>
                <ol style={{ lineHeight: '1.8', color: '#444', paddingLeft: '1.25rem' }}>
                  <li>Hold your hand up, palm facing you</li>
                  <li>Bend just the pinky down toward the palm, keeping other fingers relaxed</li>
                  <li>Straighten again</li>
                  <li><strong>Repeat 10–15 times</strong></li>
                </ol>
              </div>

              {/* Finger Spread */}
              <div style={{
                padding: '1.25rem',
                background: 'white',
                borderRadius: '12px',
                border: '2px solid #f0f0f0'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <h3 style={{ color: '#764ba2', margin: 0 }}>
                    🖐️ Finger Spread
                  </h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleComplete('finger-spread');
                    }}
                    style={{
                      background: completedExercises.includes('finger-spread') ? '#28a745' : '#e0e0e0',
                      color: completedExercises.includes('finger-spread') ? 'white' : '#666',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      transition: 'all 0.3s'
                    }}
                  >
                    {completedExercises.includes('finger-spread') ? '✓ Done' : 'Mark Done'}
                  </button>
                </div>
                <ol style={{ lineHeight: '1.8', color: '#444', paddingLeft: '1.25rem' }}>
                  <li>Spread all your fingers as wide as you comfortably can</li>
                  <li>Hold 3–5 seconds, then relax</li>
                  <li><strong>Repeat 10 times</strong></li>
                </ol>
              </div>
            </div>
          )}
        </div>

        {/* Progress indicator */}
        {completedExercises.length > 0 && (
          <div style={{
            textAlign: 'center',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '15px',
            color: 'white',
            fontSize: '1.2rem',
            fontWeight: 'bold'
          }}>
            🎉 {completedExercises.length}/2 Exercises Completed!
          </div>
        )}
      </div>
    </div>
  );
}

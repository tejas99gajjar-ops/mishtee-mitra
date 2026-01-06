"use client";

import React, { useState, useEffect } from 'react';

export default function DeliveryMitraDashboard() {
  // Simulating a simple state for interaction (optional but good practice)
  const [isNavigating, setIsNavigating] = useState(false);

  // Animation keyframes need to be injected since inline styles can't define @keyframes
  const animationStyles = `
    @keyframes pulse {
      0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7); }
      70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(76, 175, 80, 0); }
      100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); }
    }
  `;

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start', // Align top for mobile feel
      minHeight: '100vh',
      backgroundColor: '#f0f2f5',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      margin: 0,
      padding: 0
    }}>
      <style>{animationStyles}</style>
      
      {/* Mobile Container */}
      <div style={{
        width: '100%',
        maxWidth: '500px',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 0 20px rgba(0,0,0,0.1)',
        position: 'relative'
      }}>

        {/* Header Section */}
        <header style={{
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderBottom: '1px solid #eee'
        }}>
          <img 
            src="https://raw.githubusercontent.com/sudhir-voleti/mishtee-magic/main/mishTee_logo.png" 
            alt="mishTee Logo"
            style={{ width: '80px', height: 'auto', marginBottom: '12px' }}
          />
          <h1 style={{
            color: '#FF6B00', // Orange
            fontSize: '22px',
            fontWeight: '700',
            margin: '0',
            textAlign: 'center'
          }}>
            mishTee Delivery Mitra
          </h1>
        </header>

        {/* Status Bar */}
        <div style={{
          padding: '16px 24px',
          backgroundColor: '#fafafa',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid #eee'
        }}>
          <div style={{
            width: '12px',
            height: '12px',
            backgroundColor: '#4CAF50', // Green
            borderRadius: '50%',
            marginRight: '10px',
            animation: 'pulse 2s infinite'
          }}></div>
          <span style={{
            color: '#333',
            fontWeight: '600',
            fontSize: '14px'
          }}>
            Agent Online
          </span>
        </div>

        {/* Main Content Area */}
        <main style={{ padding: '24px', flex: 1 }}>
          
          {/* Task Card */}
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            border: '1px solid #f0f0f0',
            marginBottom: '30px'
          }}>
            <div style={{
              fontSize: '12px',
              textTransform: 'uppercase',
              color: '#888',
              letterSpacing: '1px',
              marginBottom: '8px'
            }}>
              Current Task
            </div>
            <h2 style={{
              margin: '0 0 12px 0',
              fontSize: '18px',
              color: '#222'
            }}>
              Deliver to: <strong>Arjun Mehta</strong>
            </h2>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              color: '#555',
              fontSize: '14px',
              marginBottom: '4px'
            }}>
              <span>📍 42, Jubilee Hills, Rd 36</span>
            </div>
            <div style={{
              color: '#FF6B00',
              fontSize: '14px',
              fontWeight: '500',
              marginTop: '12px'
            }}>
              Order #MT-8821 • 2 Items
            </div>
          </div>

          {/* Action Button */}
          <button 
            onClick={() => setIsNavigating(!isNavigating)}
            style={{
              width: '100%',
              padding: '18px',
              backgroundColor: '#FF6B00',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(255, 107, 0, 0.3)',
              transition: 'transform 0.1s ease',
              outline: 'none'
            }}
            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {isNavigating ? 'Navigating...' : 'Start Navigation'}
          </button>
        </main>

        {/* Simple Footer/Tab Bar (Visual only) */}
        <footer style={{
          height: '60px',
          borderTop: '1px solid #eee',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          color: '#ccc'
        }}>
           <span style={{ color: '#FF6B00' }}>🏠</span>
           <span>📦</span>
           <span>👤</span>
        </footer>

      </div>
    </div>
  );
}

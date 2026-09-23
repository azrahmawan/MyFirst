import { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }
  static getDerivedStateFromError(error) {
    return { error }
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#faf3e0',
          fontFamily: 'Georgia, serif',
          padding: '2rem',
          textAlign: 'center',
        }}>
          <h1 style={{ color: '#a0522d', fontSize: '2rem', marginBottom: '1rem' }}>
            Something went wrong
          </h1>
          <pre style={{
            background: '#f5e6c4',
            border: '1px solid #e2c77e',
            borderRadius: '12px',
            padding: '1rem 2rem',
            color: '#5c3d2e',
            fontSize: '0.85rem',
            maxWidth: '600px',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}>
            {this.state.error.message}
          </pre>
          <p style={{ color: '#7a6358', marginTop: '1rem', fontSize: '0.9rem' }}>
            Check the browser console for more details.
          </p>
        </div>
      )
    }
    return this.props.children
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)

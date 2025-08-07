import { env } from '@/env.mjs'

export function DebugEnv() {
  if (import.meta.env.DEV) {
    return (
      <div style={{ 
        position: 'fixed', 
        top: 10, 
        right: 10, 
        background: 'rgba(0,0,0,0.8)', 
        color: 'white', 
        padding: '10px', 
        fontSize: '12px',
        zIndex: 9999,
        borderRadius: '4px'
      }}>
        <div>NODE_ENV: {env.NODE_ENV}</div>
        <div>APP_URL: {env.VITE_APP_URL}</div>
        <div>SITE_NAME: {env.VITE_SITE_NAME}</div>
        <div>TMDB_TOKEN: {env.VITE_TMDB_TOKEN ? 'Set' : 'Not Set'}</div>
        <div>SUPABASE_URL: {env.VITE_SUPABASE_URL ? 'Set' : 'Not Set'}</div>
      </div>
    )
  }
  return null
}

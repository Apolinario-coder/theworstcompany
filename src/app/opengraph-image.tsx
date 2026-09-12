import { ImageResponse } from 'next/og'
 
  
export const alt = 'A EMPRESA MAIS CRUEL DO MUNDO'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f0f0f',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          border: '10px solid #ff0000',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ color: '#ff0000', fontSize: 32, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>
            ARQUIVO CONFIDENCIAL
          </div>
          <div style={{ color: '#ffffff', fontSize: 80, fontWeight: 900, textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span>A EMPRESA MAIS</span>
            <span style={{ color: '#ff0000' }}>CRUEL</span>
            <span>DO MUNDO</span>
          </div>
          <div style={{ color: '#a1a1aa', fontSize: 24, marginTop: 40, maxWidth: 800, textAlign: 'center' }}>
            Um dossiê investigativo sobre exploração, água e escândalos corporativos.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

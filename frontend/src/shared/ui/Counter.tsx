import { LayoutGrid, Minus, Plus } from 'lucide-react'

type Props = {
	label: string
  value: number
  onChange: (n: number) => void
  min?: number
  max?: number
}

export const Counter = ({
  label,
  value,
  onChange,
  min = 0,
  max = 99,
}: Props ) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span style={{ fontSize: 12.5, fontWeight: 600, color: '#2C2F47', fontFamily: 'Inter, sans-serif' }}>
        {label}
      </span>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          border: '1.5px solid #E8E9F2',
          borderRadius: 9,
          overflow: 'hidden',
          background: '#fff',
        }}
      >
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          style={{
            width: 40,
            height: 42,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#F5F5FA',
            border: 'none',
            borderRight: '1px solid #E8E9F2',
            cursor: value <= min ? 'not-allowed' : 'pointer',
            opacity: value <= min ? 0.4 : 1,
            transition: 'background 0.12s',
            flexShrink: 0,
          }}
          onMouseEnter={e => value > min && (e.currentTarget.style.background = '#EAEAFB')}
          onMouseLeave={e => (e.currentTarget.style.background = '#F5F5FA')}
        >
          <Minus size={14} color="#5A5E78" strokeWidth={2.5} />
        </button>
        <div
          style={{
            flex: 1,
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 700,
            color: '#111320',
            fontFamily: 'Outfit, Inter, sans-serif',
            letterSpacing: '-0.01em',
          }}
        >
          {value}
        </div>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          style={{
            width: 40,
            height: 42,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#F5F5FA',
            border: 'none',
            borderLeft: '1px solid #E8E9F2',
            cursor: value >= max ? 'not-allowed' : 'pointer',
            opacity: value >= max ? 0.4 : 1,
            transition: 'background 0.12s',
            flexShrink: 0,
          }}
          onMouseEnter={e => value < max && (e.currentTarget.style.background = '#EAEAFB')}
          onMouseLeave={e => (e.currentTarget.style.background = '#F5F5FA')}
        >
          <Plus size={14} color="#5A5E78" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  )
}

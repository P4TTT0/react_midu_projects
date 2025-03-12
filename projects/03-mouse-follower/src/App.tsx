import { useEffect, useState } from 'react'
import './App.css'
import { Position } from "../types/position";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const handleMove = (event: PointerEvent) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
      if (enabled) window.addEventListener("pointermove", handleMove);
      
      return () => window.removeEventListener("pointermove", handleMove);
    },
    [enabled]
  );

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }} />
      <h3>Proyecto 3</h3>
      <button onClick={() => setEnabled(!enabled)}>
        { enabled ? "Desactivar" : "Activar" }
      </button>
    </main>
  )
}

export default App

import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState([
    'Reactjs',
    'NodeJs'
  ])
  const [newTech, setNewTech] = useState('')

  useEffect(() => {
    const storageTech = localStorage.getItem('tech')

    if (storageTech){
      setTech(JSON.parse(storageTech))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech))
  }, [tech])

  const handleAdd = useCallback(() => {
    setTech([ ...tech, newTech])
    setNewTech('')
  }, [tech, newTech])

  const techLength = useMemo(() => tech.length , [tech])

  return (
    <>
      <ul>
        { tech.map(t => (
          <li key={t}>{t}</li>
        )) }
      </ul>
      <strong>Você tem {techLength} tecnologias</strong>
      <br />
      <input type="text" value={newTech} onChange={e => setNewTech(e.target.value)}></input>
      <button type="submit" onClick={handleAdd}>Adicionar</button>
    </>
  );
}

export default App;

import React from 'react'

function ScheduleFallback() {
  return <p>🤫 ¡Shhhh! No hay nada que ver aquí</p>
}

function Scheduled({
  dueDate = new Date(),
  fallback = <ScheduleFallback/>,
  children,
}) {
  const hasMagicWords = typeof window !== 'undefined' && window.location.hash === '#porfi'
  const isDueDateOver = new Date(dueDate) <= new Date()
  return isDueDateOver || hasMagicWords ? children : fallback
}

export default Scheduled
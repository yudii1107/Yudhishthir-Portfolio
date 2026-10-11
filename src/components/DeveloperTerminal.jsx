
import { useEffect, useState } from 'react'
import './DeveloperTerminal.css'

const lines = [
  { prompt: '$', text: 'whoami', type: 'command' },
  { prompt: '>', text: 'Yudhishthir — Full Stack Developer', type: 'output' },
  { prompt: '$', text: 'cat currently-learning.txt', type: 'command' },
  { prompt: '>', text: 'MERN Stack Development', type: 'output' },
  { prompt: '$', text: 'git status', type: 'command' },
  { prompt: '>', text: 'Building something awesome...', type: 'success' },
]

function DeveloperTerminal() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    if (reducedMotion.matches) {
      setVisibleLines(lines.length)
      return
    }

    let character = 0
    let timer
    let cancelled = false

    const typeNextLine = () => {
      if (cancelled) return

      if (lineIndex >= lines.length) {
        timer = setTimeout(() => {
          if (cancelled) return
          setVisibleLines(0)
          setLineIndex(0)
          setTypedText('')
        }, 3000)
        return
      }

      const currentLine = lines[lineIndex]

      if (currentLine.type !== 'command') {
        setVisibleLines((count) => count + 1)
        setLineIndex((index) => index + 1)
        timer = setTimeout(typeNextLine, 350)
        return
      }

      const typeCharacter = () => {
        if (cancelled) return

        character += 1
        setTypedText(currentLine.text.slice(0, character))

        if (character < currentLine.text.length) {
          timer = setTimeout(typeCharacter, 55)
        } else {
          setVisibleLines((count) => count + 1)
          setTypedText('')
          setLineIndex((index) => index + 1)
          timer = setTimeout(typeNextLine, 350)
        }
      }

      typeCharacter()
    }

    timer = setTimeout(typeNextLine, 700)

    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [lineIndex])

  return (
    <div className="developer-terminal">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="terminal-title">yudhishthir@portfolio ~</span>
        <span className="terminal-status">LIVE</span>
      </div>

      <div className="terminal-body">
        {lines.slice(0, visibleLines).map((line, index) => (
          <div
            className={`terminal-line terminal-${line.type}`}
            key={`${index}-${line.text}`}
          >
            <span className="terminal-prompt">{line.prompt}</span>
            <span>{line.text}</span>
          </div>
        ))}

        {lineIndex < lines.length && lines[lineIndex].type === 'command' && (
          <div className="terminal-line terminal-command">
            <span className="terminal-prompt">$</span>
            <span>{typedText}</span>
            <span className="terminal-caret" />
          </div>
        )}
      </div>

      <div className="terminal-footer">
        <span><i /> SYSTEM ONLINE</span>
        <span>UTF-8</span>
      </div>
    </div>
  )
}

export default DeveloperTerminal

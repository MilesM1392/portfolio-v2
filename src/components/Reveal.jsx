// Révèle un élément à son entrée dans le viewport. Le contenu reste visible si
// IntersectionObserver n’est pas disponible ou si l’animation ne peut démarrer.
import { useEffect, useRef, useState } from 'react'

function Reveal({ as: Element = 'div', className = '', children, ...props }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || !('IntersectionObserver' in window)) {
      setVisible(true)
      return undefined
    }

    // Le seuil évite de lancer l'effet tant qu'une petite portion du bloc n'est pas visible.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.12 })

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Element ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()} {...props}>
      {children}
    </Element>
  )
}

export default Reveal

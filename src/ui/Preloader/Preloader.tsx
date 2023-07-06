import { useEffect, useState } from 'react'
import './Preloader.scss'

type PreloaderType = {
  loading: boolean
}

export const Preloader = ({loading}: PreloaderType) => {
  
  const [isLoading, setIsLoading] = useState<boolean>(loading)

  useEffect(() => {
    setIsLoading(loading)
  },[loading])

  return (
    <div className={`${isLoading ? 'preloader' : 'preloader off'}`}>
        <div className="preloader__inner"></div>
    </div>
  )
}

import { useState, useEffect } from 'react'

export const useTheme = () => { 
    const [theme, setTheme] = useState('light')

    const themeHandler = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    return { themeHandler, theme }
}
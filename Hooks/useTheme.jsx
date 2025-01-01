import { ThemeContext } from '../Contexts/ThemeContext';
import { useContext } from 'react'

export const useTheme = () =>  useContext(ThemeContext)
import { createContext } from "react"



export const theme = {
    light:{
        font: 'black',
        background: 'white'
    },
    dark:{
        font:'white',
        background:'black'
    }
}

const themeContext = createContext(theme.light)
export default themeContext
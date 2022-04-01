import '../styles/globals.css'
import react,{useState} from 'react'

export const TopContext = react.createContext()

function MyApp({ Component, pageProps }) {

  const [contextKeys, setcontextKeys] = useState({
    "inner_page_route":false
  })

  return (          
      <TopContext.Provider value={{contextKeys,setcontextKeys}}>
        <Component {...pageProps} />
      </TopContext.Provider>
  )
}

export default MyApp

import { WelcomePage } from '../components/welcomePage'
import react,{useContext} from 'react'
import { TopContext } from './_app'
import NavBar from '../components/navBar'
import IndexPage from './home'
import { productsSWR } from '../SWR/commonSWR'
import { URLS } from '../URL/url'
import { Loader } from '../components/loader'
import { useRouter } from 'next/router'

export default function Home() {
  // const router = useRouter()
  // const {products, isLoading} = productsSWR(URLS.product_url)
  const Contextvalues = useContext(TopContext)
  return (
    <div>
      {!Contextvalues.contextKeys.inner_page_route ?
        <WelcomePage /> :
        <>   
          {/* {isLoading ?
            <Loader /> :
            <> */}
              <NavBar />
              <IndexPage />
            {/* </>
          }                  */}
        </>
      }      
    </div>            
  )
}

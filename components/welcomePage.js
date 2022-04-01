import react,{useContext} from "react"
import { TopContext } from "../pages/_app"

export function WelcomePage () {
    const Contextvalues = useContext(TopContext)    
    const clickHandler = () => {
        Contextvalues.setcontextKeys({
            ...Contextvalues.contextKeys,
            "inner_page_route":true
        })
    }

    return(
        <div className='position-relative' style={{height:"100vh"}}>
            <div className="position-absolute welcomePageborder">
                <div style={{padding:20}}>
                    <h4 className="text-center">Welcome To Here</h4>
                    <div className="text-center">
                        <button className="mt-3 btn btn-primary" onClick={()=>clickHandler()}>Products</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
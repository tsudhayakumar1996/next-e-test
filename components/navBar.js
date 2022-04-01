import Link from "next/link"
import Script from "next/script"
import react,{useState,useContext} from "react"
import { productsSWR } from "../SWR/commonSWR"
import { URLS } from "../URL/url"
import { useRouter } from "next/dist/client/router"
import { TopContext } from "../pages/_app"

export default function NavBar () { 
    const router = useRouter()  
    const [searchBox, setsearchBox] = useState(false)
    const [filterwords,setfilterwords] = useState([])    
    // const {products,isLoading} = productsSWR(URLS.product_url)
    // const contextVal = useContext(TopContext)
    // console.log(contextVal,"top context on navbar page^^^^^^^^^^^^^^^^^^^^^^")

    const products = [
        {
            id:1,
            product:"Hat",
            img_url:"/productimages/hat.png",
            prodcut_description:"Hat this one is made by pure woollen"
        },
        {
            id:2,
            product:"Jacket",
            img_url:"/productimages/jacket.png",
            prodcut_description:"Jacket this one is made by pure woollen"
        },
        {
            id:3,
            product:"TShirt",
            img_url:"/productimages/t-shirt.png",
            prodcut_description:"TShirt this one is made by pure woollen"
        },
        {
            id:4,
            product:"Mask",
            img_url:"/productimages/mask.png",
            prodcut_description:"Mask this one is made by pure woollen"
        },
        {
            id:5,
            product:"MaskWhite",
            img_url:"/productimages/mask-white.png",
            prodcut_description:"White-Mask this one is made by pure woollen"
        },
        // {
        //     id:6,
        //     product:"HatWhite",
        //     img_url:"/productimages/hat-white.png",
        //     prodcut_description:"White-Hat this one is made by pure woollen"
        // },
        // {
        //     id:7,
        //     product:"TShirtWhite",
        //     img_url:"/productimages/tshirt-white.png",
        //     prodcut_description:"White-TShirt this one is made by pure woollen"
        // }
    ]
    
    const searchHandler = (val) => {
        if(val !==""){               
            const search_word = val
            const search_filter = products.filter((value)=>{
                return value.product.toLowerCase().includes(search_word.toLowerCase())
            })            
            setfilterwords(search_filter)
            setsearchBox(true)  
        }else{
            setsearchBox(false)  
        }                  
    }

    const clickHandler = (product) => {
        if(product === "/"){
            router.push("/")
        }else{
            router.push(`/product/${product}`)
        }        
    }
    const closeClickhandler = () => {        
        setsearchBox(false)
        setfilterwords([])
    }

    return(
        <div className="row container-1250 m-auto navBarcontainer" style={{height:60,position:"fixed"}}>
            <Script src="https://kit.fontawesome.com/4b47f93a51.js"></Script>
            <div className="col-md-3 align-items-center d-flex justify-content-between">
                <label style={{color:"blue",cursor:'pointer'}} onClick={()=>clickHandler("/")}>Home</label>                
                {products && products.map((each,idx) =>
                    // <Link key={idx} href={`product/${each.product}`}><a href='' style={{textDecoration:'none'}}>{each.product}</a></Link>
                    <label key={idx} style={{color:"blue",cursor:'pointer'}} onClick={()=>clickHandler(each.product)}>{each.product}</label>
                )}                
            </div>
            <div className="col-md-6 d-flex align-items-center"> 
                <div className="w-75 m-auto position-relative">                                                         
                    <input placeholder="Search Your Product Here" className="w-100" style={{padding:5}} onChange={(e)=>searchHandler(e.target.value)}></input>                                                
                    <i className="fa-solid fa-magnifying-glass position-absolute" style={{top:9,right:12}}></i>                      
                    <div className={`position-absolute w-100 searchDropdown ${searchBox ? "searchBoxshow" : ""}`}>
                        <i className="fa-solid fa-xmark" style={{cursor:'pointer', float:'right'}} onClick={()=>closeClickhandler()}></i>
                        {filterwords.length > 0 ?
                            filterwords.map((each,idx)=>
                                <Link key={idx} href={`/product/${each.product}`} className='w-100'><a href='' style={{textDecoration:'none'}}><p className="no-margin" style={{padding:3}}>{each.product}</p></a></Link>                                
                            ) : <p className="no-margin">sorry :( no proudcts match your search</p>
                        }                                                       
                    </div>                                                           
                </div>                                       
            </div>
            <div className="col-md-3 align-items-center d-flex justify-content-end">
                <Link href=''><a href='' style={{textDecoration:'none'}}>Login</a></Link>
            </div>
        </div>
    )
}
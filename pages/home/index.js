import { productsSWR } from "../../SWR/commonSWR"
import { URLS } from "../../URL/url"
import Link from "next/link"
import Image from "next/image"
import {useContext,useEffect,useState} from 'react'
import { TopContext } from "../_app"
import { FetchGet } from "../../FETCHERS/fetcher"

export default function IndexPage () {
    // const [first, setfirst] = useState([])
    // useEffect(async() => {
    //   alert("useeffect run")
    //   const data = await FetchGet(URLS.product_url)      
    //   setfirst(data)
    // }, [])

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
    
    // const {products,isLoading} = productsSWR(URLS.product_url)    
    // const contextVal = useContext(TopContext)
    // console.log(contextVal, "on home page top context%%%%%%%%%%%%%%%%%%%%%%%%")    
    
    return(
        <div className="padTop60 container-1250" style={{paddingLeft:15,paddingRight:15}}>
            {products && products.map((each,idx)=>                
                <div style={{marginTop:20,marginBottom:20}} key={idx}>
                        <Link href={`product/${each.product}`}>
                            <a href="" style={{textDecoration:'none', color:'black',width:500}} className='d-flex align-items-center flex-column productBox m-auto position-relative'>
                                <div>
                                    <Image 
                                        src={each.img_url}
                                        alt="Loading...."
                                        width={400}
                                        height={400}
                                        layout={`intrinsic`}                                  
                                    />
                                    <div className="position-absolute titleBlack" style={{top:0,left:0}}><h2 className='no-margin text-center' style={{fontSize:20,padding:15}}>{each.product}</h2></div>
                                    <div className="position-absolute titleBlackdesc" style={{bottom:0,right:0}}><h2 className='no-margin text-center' style={{fontSize:16,padding:15}}>{each.prodcut_description}</h2></div>                    
                                </div>
                            </a>
                    </Link>
                </div>                
            )}            
        </div>
    )    
}
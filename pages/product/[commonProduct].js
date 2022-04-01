import NavBar from "../../components/navBar";
import { particularProductSWR } from "../../SWR/commonSWR";
import { URLS } from "../../URL/url";
import Image from "next/image"
import { useContext } from 'react'
import { TopContext } from "../_app";
import { Loader } from "../../components/loader";

export default function Product ({product_name}) {

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
    const particular_productindex = products.findIndex(each => each.product === product_name)    
    const particular_product = products[particular_productindex]    

    // const contextVal = useContext(TopContext)
    // console.log(contextVal,"context val on common product page**************")   
    // const {particularProduct, isLoading, isError} = particularProductSWR(URLS.particular_product_url,product_name)       
    // if(isLoading){
    //     return(
    //         <Loader />
    //     )
    // }else{
        return(
            <>     
                <NavBar /> 
                {particular_product &&                      
                    <div className="padTop60 container-1250 m-auto">            
                        <div style={{marginTop:20,marginBottom:20}}>                        
                            <div style={{textDecoration:'none', color:'black',width:500}} className='d-flex align-items-center flex-column productBox m-auto position-relative'>
                                <Image 
                                    src={particular_product.img_url}
                                    alt="Loading...."
                                    width={400}
                                    height={400}
                                    layout={`intrinsic`}                                  
                                />
                                <div className="position-absolute titleBlack" style={{top:0,left:0}}><h2 className='no-margin text-center' style={{fontSize:20,padding:15}}>{particular_product.product}</h2></div>
                                <div className="position-absolute titleBlackdesc" style={{bottom:0,right:0}}><h2 className='no-margin text-center' style={{fontSize:16,padding:15}}>{particular_product.prodcut_description}</h2></div>                    
                            </div>                        
                        </div>
                    </div> 
                }                                                  
            </>
        )
    // }
}

export async function getServerSideProps ({query}) {
    const product_name_early = query.commonProduct    
    return{
        props:{
            product_name:product_name_early
        }
    }
}

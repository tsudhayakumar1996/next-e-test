import useSWR from "swr"
import { FetchGet, ParticularFetchGet } from "../FETCHERS/fetcher"

export function productsSWR (url) {    
    const {data,error} = useSWR(url,FetchGet,{ refreshInterval: 10000})
    return{
        products: data,
        isLoading: !error && !data,
        isError: error
    }
}

export function particularProductSWR (url,val) {    
    const {data,error} = useSWR([url,val],ParticularFetchGet)
    return{
        particularProduct: data,
        isLoading: !error && !data,
        isError: error
    }
}
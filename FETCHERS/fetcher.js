export const FetchGet = async (url) => {    
    const response = await fetch (url)
    const data = await response.json()
    return data
}

export const ParticularFetchGet = async (url,val) => {    
    const response = await fetch (url,{
        method:"PUT",
        body: JSON.stringify({val}) ,
        headers:{
            'Content-Type':'application/json'
        }
    })
    const data = await response.json()
    return data
}
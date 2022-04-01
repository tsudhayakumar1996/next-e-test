import { Products } from "../../JSON/products";

export default function handler(req,res){    
    const product_name = req.body.val
    const particular_product = Products.filter(each=>each.product === product_name)    
    res.status(201).json(particular_product)    
}
import { Products } from "../../JSON/products";

export default function handler(req,res){
    if(req.method === "GET") {
        res.status(200).json(Products)
    }
}
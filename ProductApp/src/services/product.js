import axios from "axios";
import { config } from "../utils/config";

export async function addProduct(name, category, price, quantity, serial_no) {
    try {
        const body = {name, category, price, quantity, serial_no}
        const url = config.url + '/product/add'
        const response = await axios.post(url, body)
        return response.data
    } catch (error) {
        return null        
    }
}

export async function displayAllProducts() {
    const url = config.url + '/product/all'
    try{
        const response = await axios.get(url)
        return response.data
    } catch(error){
        console.log('Error fetching products:', error)  
        return null
    }
}

export async function deleteProduct(id) {
    try {
        const url = config.url + '/product/delete'
        const response = await axios.delete(url, {data: {id}})
        return response.data
    } catch (error) {
        return null
    }
}

export async function updateProduct(id, name, price, quantity) {
    try {
        const url = config.url + `/product/update/${id}`
        const body = {name, price, quantity}
        const response = await axios.put(url, body)
        return response.data
    } catch (error) {
        return null
    }
    
}
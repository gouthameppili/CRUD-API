import { Product } from '../models/product.model.js';

export const createUser = async (req, res) => {

    // console.log(req.body);
    // res.send(req.body);
    // res.send("data recieved");



    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }

    catch(error){
        res.status(500).json({message: error.message});
    }
}

export const showUsers = async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }

    catch(error){
        res.status(500).json({message: error.message});
    }
}

export const showUserById = async (req, res) => {
    try{
        const { id } =req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }

    catch(error){
        res.status(500).json({message: error.message});
    }
}

export const updateUser = async(req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: "Product Not Found"});
        }

        const upDatedProduct = await Product.findById(id);
        res.status(200).json(upDatedProduct);
    }
    catch(error){
        res.status(500).json({message: "Product Not Found"});
    }
}

export const deleteUser = async(req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: "Product Not Found"});

        }
        res.status(200).json({message: "Product Deleted SuccessFully"});
    }

    catch(error){
        res.status(500).json({message: error.message});
    }
}
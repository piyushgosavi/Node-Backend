const Product = require('../models/Products')

//Get all Products

exports.getAllProducts = async(req,res)=>{
    try{

        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.page) || 3;
        const totalProduct = await Product.countDocuments();
        const totalPages = Math.ceil(totalProduct/pageSize);
        const products = await Product.find().skip((page-1) * pageSize).limit(pageSize);
        res.status(200).json({success:true,productDetail:'Product Details',products,totalPages,currentPage:page});

    }catch(error){
        res.status(400).json({error:error.message})
    }
};

//Get Product by Id

exports.getProductById = async(req,res) =>{
    try{
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({message:'Product not found'})
        }
        res.status(200).json(product)

    }catch(error){
        res.status(500).json({error:error.message});
    }
};

//Post create the product

exports.createProduct = async(req,res)=>{
    try{

        const { name, description, price } = req.body;

        //check if all required field are provided
        if(!name || !price){
            return res.status(400).json({message: 'Name and price are required'});
        }
        //create a product
        const product = new Product({name,description,price})
        await product.save();
        res.status(201).json(product);

    }catch(error){
        res.status(400).json({error: error.message});
    }
}

//update Product

exports.updateProduct = async(req,res)=>{
    try{

        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(updatedProduct);
    }catch(error){
        res.status(500).json({error: error.message});

    }

};
//Delete Product

exports.deleteProduct = async(req,res) =>{
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).end();

    }catch(error)
    {
        res.status(500).json({error: error.message});

    }

};

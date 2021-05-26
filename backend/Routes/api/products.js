const express = require('express');
const router = express.Router();
const Products = require('../../Models/Products');

//Code for adding a new product
router.post('/', async (req, res) => {
    const {
        name,
        image,
        description,
        brand,
        category,
        price,
        countInStock,
        rating,
        numReviews
    } = req.body;

    try {
        // console.log(req.body)
        let product = new Products({
            name,
            image,
            description,
            brand,
            category,
            price,
            countInStock,
            rating,
            numReviews
        })
        await product.save();
        res.status(200).send('Product Added');

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
});

// Code for getting all products
router.get('/', async (req, res) => {
    try {
        const products = await Products.find();
        res.send(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
});


// Code for deleting todos
router.delete('/', async (req, res) => {
    const item = req.body.item;
    try {
        await Todos.deleteOne({ item });
        res.send(`Item "${item}" is deleted`)
    } catch (e) {
        console.log(e.message);
        res.status(500).send('Cannot delete due to server error!')
    }
})

// Code for updating todos
router.put('/', async (req, res) => {
    const { item, isCompleted } = req.body;
    try {
        await Todos.findOneAndUpdate({ item }, { isCompleted })
        res.send('Item updated');
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Cannot Edit. Server Error!')
    }
})

module.exports = router;
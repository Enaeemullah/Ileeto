const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    countInStock: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    numReviews: {
        type: String,
        required: true,
    }
});

module.exports = Product = mongoose.model('products', ProductSchema);
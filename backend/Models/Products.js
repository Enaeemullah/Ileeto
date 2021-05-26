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
        type: Double,
        required: true,
    },
    countInStock: {
        type: Integer,
        required: true,
    },
    rating: {
        type: Double,
        required: true,
    },
    numReviews: {
        type: Integer,
        required: true,
    }
});

module.exports = Product = mongoose.model('products', ProductSchema);
import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
// import products from '../products'


const HomeScreen = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {

        const fetchProducts = () => {
            fetch('/api/products')
                .then(res => res.json())
                .then(jsonRes => setProducts(jsonRes))
        }

        fetchProducts();
    }, [])

    return (
        <>
            <h1> Latest Products </h1>
            <Row> {
                products.map((product) => (
                    <Col key={product._id}
                        sm={12}
                        md={6}
                        lg={4}
                        xl={3} >
                        <Product product={product} />
                    </Col>
                ))
            }
            </Row>
        </>
    )
}

export default HomeScreen
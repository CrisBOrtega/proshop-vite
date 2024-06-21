import { Row, Col } from 'react-bootstrap';
import products from "../data/products.js";
import Product from '../components/Product';

const HomeScreen = () => {
    return(
        <>
            <h1>Latest Products</h1>
            <Row>
                { products.map((product) => (
                    <Col sm={12} md={6} lg={4} xl={3} key={product.id} >
                        <h3>{ product.name }</h3>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen;
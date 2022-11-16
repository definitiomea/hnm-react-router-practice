import { Container, Row, Col, Form, Dropdown, Button } from 'react-bootstrap';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../redux/actions/productAction';

const ProductDetail = () => {
    let { id } = useParams();

    const dispatch = useDispatch();
    const productDetailList = useSelector((state) => state.product.productDetailList);

    const getProductDetail = () => {
        dispatch(productAction.getProductsDetail(id));
    }

    useEffect(() => {
        getProductDetail()
    },[id])

    return (
        <Container>

            <Row>
                <Col className="product-img">
                    <img src={productDetailList?.img}></img>
                </Col>
                <Col>
                    <div>{productDetailList?.title}</div>
                    <div>{productDetailList?.price}</div>
                    <div>{productDetailList?.choice == true ? `choiced` : ""}</div>
                    <div>{productDetailList?.size ?
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                            사이즈 선택
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item>{productDetailList.size[0]}</Dropdown.Item>
                            <Dropdown.Item>{productDetailList.size[1]}</Dropdown.Item>
                            <Dropdown.Item>{productDetailList.size[2]}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> :
                    ""}</div>
                    <Button>추가</Button>
                </Col>
            </Row>
        </Container>
    );
}
 
export default ProductDetail;
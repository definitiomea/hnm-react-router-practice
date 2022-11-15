import { Container, Row, Col, Form, Dropdown, Button } from 'react-bootstrap';

import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

/* 여기서 뭔가를 만들려면 비동기를 또 만들까?
아니면 카드에서 이동할 때 전달해줄 방법이 있나? */

const ProductDetail = () => {
    /* URL의 파라미터를 쓰기 위한 useParams Hook */
    let { id } = useParams();

    /* 특정 위치의 리터럴 객체를 반환 받을 state와 setter */
    const [product, setProduct] = useState(null);

    /* 사이즈를 뜻하는 state */
    const [sizeOption, setSizeOption] = useState("사이즈 선택");

    const getProductDetail = async () => {
        /* 필요한 경로를 불러주고, 반환받아 json으로 취급하여 사용 */
        let url = `https://my-json-server.typicode.com/definitiomea/hnm-react-router-practice/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setProduct(data);
    }

    useEffect(() => {
        getProductDetail()
    },[])

    return (
        <Container>
            {/* 디자인을 넣어주기
            Container로 요소를 가운데 넣기
            비율 감 있게 나눠놓기, Row, Col */}

            <Row>
                <Col className="product-img">
                    <img src={product?.img}></img>
                </Col>
                <Col>
                    <div>{product?.title}</div>
                    <div>{product?.price}</div>
                    <div>{product?.choice == true ? `choiced` : ""}</div>
                    <div>{product?.size ?
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                            사이즈 선택
                            </Dropdown.Toggle>
                    
                            {/* 망했네? 왜 setter를 쓰면 렌더링 횟수가 너무 많다 난리나지? */}
                            <Dropdown.Menu>
                            <Dropdown.Item>{product.size[0]}</Dropdown.Item>
                            <Dropdown.Item>{product.size[1]}</Dropdown.Item>
                            <Dropdown.Item>{product.size[2]}</Dropdown.Item>
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
import { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { productAction } from "../redux/actions/productAction";
import ProductCard from "../Components/ProductCard";

const ProductAll = ({authenticate}) => {
    const productList = useSelector((state) => state.product.productList);
    const [query, setQuery] = useSearchParams();
    const dispatch = useDispatch();

    /* 모든 제품 정보를 받기 위해서
    비동기로 움직여야 하므로, 화살표 함수 바로 앞에 async 달기 */

    const getProducts = async () => {
        let searchQuery = query.get('q') || "";
        console.log("Q?", searchQuery);
        dispatch(productAction.getProducts(searchQuery));
    }

    /*  확인해보려고 임시로 만든 메서드
        이 경우 Col 컴포넌트에 연결했었다.

        const togglePage = () => {
        authenticate == true ?
        navigate('/product/:id') :
        navigate('/login');
    } */

    /* useEffect가 생명주기를 다루므로,
    컴파일 하자마자 json-server가 다루는 파일을 들고 오게 됨 */

    /* 검색을 하려면 두번째 인수가 차있어야 된다. */
    useEffect(() => {
        getProducts();
    }, [query]);

    return (
        <>
            <Container>
                <Row>
                    {/* 그래서 useEffect와 setter를 통해
                    json 속의 아이템 개수만큼 반복되었다.
                    
                    props가 헷갈리기는 하는데... 뭘 뜻하고 왜 부르는 건지 */}
                    { productList.map((item) => (
                    <Col lg={3} className="goods">
                        {/* 컴포넌트가 아니라 행에 클래스와 스타일을 넣어야 된단거지..? */}
                        <ProductCard item={item}></ProductCard>
                    </Col>)) }
                </Row>
            </Container>
        </>
    );
}
 
export default ProductAll;
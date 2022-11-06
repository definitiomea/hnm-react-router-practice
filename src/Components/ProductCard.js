import { useNavigate } from "react-router-dom";

const ProductCard = ({item}) => {
    const navigate = useNavigate();

    /* 여기에서 {item} 파라미터를 또 넣을 수는 없다.... */
    const showDetail = () => {
        navigate(`/product/${item.id}`);
    }

    return (
        <div className="card" onClick={showDetail}>
            <img src={item?.img}></img>
            <div>{item?.choice == true ? "Conscious Choice" : ""}</div>
            <div>{item?.title}</div>
            <div>{item?.price}</div>
            <div>{item?.new == true ? "신제품" : ""}</div>
        </div>
    );
}
 
export default ProductCard;
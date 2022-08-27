import "../css/OrderItem.css";

export default function OrderItem(props) {
    return (
        <div className="orderItem-container">
            주문번호 : {props.id}<br />
            배달상태 : {props.status}<br />
            주문시각 : {props.created_at}<br />
            주문가격 : {props.total}<br />
        </div>
    )
}
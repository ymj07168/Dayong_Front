import axios from "axios"
import { useState, useEffect } from "react"
import "../css/Order.css"


const Ordercomponents = ({order}) => {
    
    return (
        <div>
            <div className="orderbox">
                <ul className="ordercontent">
                    <li>
                        마약파전
                    </li>
                    <li>
                        11,000원
                    </li>
                    <li>
                        주문 수량
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Ordercomponents
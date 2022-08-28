import axios from "axios"
import { useState, useEffect } from "react"
import "../css/Order.css"


const Basketcomponents = ({name, price, image, quantity}) => {


    return (
        <div>
            <div className="orderbox">
                <div className="ordercontent">
                    <h5>
                        {name}
                    </h5>

                    <img src={image} style={{width: "80px", height: "80px", marginTop: "5px"}} />
                    <div className="basketinfo">
                    <p>
                        {price}원
                    </p>
                    <p>
                        주문수량: {quantity}
                    </p>
                    <p>
                        총 {price*quantity} 원
                    </p>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default Basketcomponents
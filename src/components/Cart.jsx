import {FaStar} from "react-icons/fa6"
import img1 from "../assets/f2.jpg"

const Cart = (props) => {
    console.log(props)
    let badgeText;
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        <div className="cart--element">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <div className="cart--img">
                <img src={props.img} alt="cart-image" />
            </div>
            <div className="cart--details">
                <div className="cart-states">
                    <FaStar style={{color: "red"}}/>
                    <span><span>{props.starReview}</span>({props.count}) .</span>
                    <span>{props.location}</span>
                </div>
                <p className="title">{props.title}</p>
                <p>From ${props.price} / person</p>
            </div>
        </div>
    )
}

export default Cart;
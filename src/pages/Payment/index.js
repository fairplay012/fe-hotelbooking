import axios from "axios";
import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";

const KEY = "pk_test_51MtSRyJgjsY3xCHhoUXBKF9hdZlRb7tpgIWz2hym59aerH5A51EqWC5X2tkkWsyY9zi9fZchHqWf2CoeNf5EEi5r00djtwgdog"

function Payment() {

    const[stripeToken, setStripeToken] = useState(null);

    const onToken = (token)=>{
        // setStripeToken(token)
        console.log(token);
    }

    useEffect(()=>{
        const makeRequest = async() =>{
            try{
                const res =  await axios.post(
                     "http://localhost:5000/api/checkout/payment",
                {
                    tokenId: stripeToken.id,
                    amount:10000,
                }
                );
                console.log(res.data);
            }
            catch(err){
                console.log(err)
            }
        }
        stripeToken && makeRequest();
    },[stripeToken])

    return ( <div style={{
        height:"100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    }}>
        <StripeCheckout name="Booking Hotel Travel"
            billingAddress
            shippingAddress
            description="Your total is $100"
            amount={10000}
            token={onToken}
            stripeKey={KEY}

        >
        <button style={{
            border: "none",
            width:120,
            borderRadius: 5,
            padding:"20px",
            backgroundColor:"black",
            color:"white",
            fontWeight:"600",
            cursor:"pointer",
        }}> Pay
        </button>
        </StripeCheckout>
    </div> );
}

export default Payment;
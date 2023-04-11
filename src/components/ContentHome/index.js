import classNames from "classnames/bind";
import styles from './ContentHome.module.scss'; 
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);


function ContentHome() {

    const [postData, setPostData] = useState([])

    useEffect(()=>{
        const axiosPost = async()=>{
         await axios.get('http://localhost:5000/api/hotel/findAll')
                .then(response => {
                    setPostData(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        axiosPost();
        
    },[])

        const renderHotel = postData.map((item) =>
            <div className={cx('hotel-item')} key={item.id}>
                <div className={cx('image-hotels')}>
                    <img src={item.imgURL}/>
                </div>
                <div className={cx('info-hotels')}>
                    <h2>{item.name}</h2>
                    <span>1,980,000 ₫</span>
                    <p>{item.area}</p>
                    <p>{item.description}</p>
                </div>
                <div className={cx('booking-button')}>
                     <Link to={{ pathname: '/booking', state: { hotelId: item.id, hotelName: item.name,
                        hotelArea: item.area, hotelDes: item.description } }}>
                        <button>
                            Booking
                        </button>
                     </Link>

                </div>  
            </div>
            )
        

    return ( 
    <div className={cx('main-content')}> 
        {renderHotel}
    </div>
    );
}
export default ContentHome;
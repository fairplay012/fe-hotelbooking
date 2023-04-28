import classNames from "classnames/bind";
import styles from './ContentHome.module.scss'; 
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);


function ContentHome(props) {

        const renderHotel = props.dataContent.map((item) =>
            <div className={cx('hotel-item')} key={item._id} item={item}>
                <div className={cx('image-hotels')}>
                    <img src={item.imgURL} alt="hotel"/>
                </div>
                <div className={cx('info-hotels')}>
                    <h2>{item.name}</h2>
                    <span>1,980,000 ₫</span>
                    <p>{item.area}</p>
                    <p>{item.description}</p>
                </div>
                <div className={cx('booking-button')}>
                     <Link to={ `/booking/${item._id}`}>
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
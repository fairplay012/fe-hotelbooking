import classNames from "classnames/bind";
import styles from './BookingItem.module.scss';
import Header from "../Layout/DefaultLayout/Header";
import Footer from "../Layout/DefaultLayout/Footer";
import axios from "axios";


const cx = classNames.bind(styles)

function BookingItem(){
        axios.get('http://localhost:5000/api/hotel')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    return ( <div>
        <Header/>
        <div className={cx('main-booking')}>
            <div className={cx('image-booking')}>
                <img src="http://mauweb.monamedia.net/travelvn/wp-content/uploads/2019/01/0-3.jpg"/>
            </div>
            <div className={cx('info-booking')}>
                <h1>Beach Resort Mỹ Khê Khuyến Mãi</h1>
                <span>1,980,000 ₫</span>
                <p>Khách sạn Victoria Mỹ Khê Beach Resort gồm 57 bungalows được thiết kế theo phong cách 
                    những ngôi nhà mái tranh mộc mạc ở miền quê ẩn mình trong khu vườn nhiệt đới quyến rũ.</p>
                <button>ĐẶT NGAY</button>   
            </div>
        </div>
        <div className={cx('under-booking')}>
            <ul>
                <li><a>MÔ TẢ</a></li>
                <li><a>THÔNG TIN BỔ SUNG</a></li>
                <li><a>ĐÁNH GIÁ</a></li>
            </ul>
        </div>
        <Footer/>
    </div>);
}

export default BookingItem;
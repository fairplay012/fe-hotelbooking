import classNames from "classnames/bind";
import styles from './ContentHome.module.scss'; 

const cx = classNames.bind(styles);


function ContentHome() {
    return ( 
    <div className={cx('main-content')}> 
        <div className={cx('hotel-item')}>
            <div className={cx('image-hotels')}>
                <img src="http://mauweb.monamedia.net/travelvn/wp-content/uploads/2019/01/coco2-300x300.jpg" />
            </div>
            <div className={cx('info-hotels')}>
                <h2>Hội An Grand Hotels</h2>
                <span>1,980,000 ₫</span>
                <p>Hoi An</p>
                <p>The Grand Hội An Strip có dịch vụ đón tại sân bay và máy bay trực thăng được cung cấp kèm phụ phí. 
                    Resort cách Sân bay Quốc tế khoảng 120 km.</p>
            </div>
        </div>
        <div className={cx('hotel-item')}>
            <div className={cx('image-hotels')}>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/398485506.webp?k=6e0020ed1ef79fd65298a19630b6105b4344f4ac6f4a4a4cdcea31832eb5bffe&o=&s=1" />
            </div>
            <div className={cx('info-hotels')}>
                <h2>Alani Hotel & Spa</h2>
                <span>1,200,000 ₫</span>
                <p>Da Nang</p>
                <p>Aria Hotel & Spa nằm ở thành phố Đà Nẵng, cách Bãi biển Mỹ Khê 3 phút đi bộ. 
                    Du khách có thể thư giãn trên sân hiên tắm nắng và thưởng ngoạn quang cảnh biển trong khi bơi ở hồ bơi trên sân thượng.</p>
            </div>
        </div>
        <div className={cx('hotel-item')}>
            <div className={cx('image-hotels')}>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/227549266.webp?k=4b121cf11ef13616da73519d2e32e2b374b0c084bb949337503037d6a30cc105&o=&s=1" />
            </div>
            <div className={cx('info-hotels')}>
                <h2>Sofiana My Khe Hotel & Spa</h2>
                <span>1,500,000 ₫</span>
                <p>Da Nang</p>
                <p>Nằm ở thành phố Đà Nẵng, cách Bãi biển Mỹ Khê 150 m, 
                    Sofiana My Khe Hotel & Spa có hồ bơi ngoài trời, quán bar và tầm nhìn ra biển.</p>
            </div>
        </div>
        <div className={cx('hotel-item')}>
            <div className={cx('image-hotels')}>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/406380364.webp?k=6c416b5ec7618984cf28c9b749a569534d4d65b329abdd0ee4a27925cdd4ead4&o=&s=1" />
            </div>
            <div className={cx('info-hotels')}>
                <h2>Moc Hotel Sapa</h2>
                <span>1.768.000 ₫</span>
                <p>Sa Pa</p>
                <p>Phòng Superior Giường Đôi
                    1 giường đôi lớn
                    Bao bữa sáng
                    Chỉ còn 3 phòng với giá này trên trang của chúng tôi</p>
            </div>
        </div>
        <div className={cx('hotel-item')}>
            <div className={cx('image-hotels')}>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/402277816.webp?k=5d7c8a98e634059e4c50aee48f4289afa9f8f9c862f159f05464eeb86f820698&o=&s=1" />
            </div>
            <div className={cx('info-hotels')}>
                <h2>Surelee Homestay</h2>
                <span>170.200 ₫</span>
                <p>SaPa</p>
                <p>Phòng Giường Đôi
                    1 giường đôi cực lớn
                    Bao bữa sáng
                    Chỉ còn 1 phòng với giá này trên trang của chúng tôi</p>
            </div>
        </div>
    </div>
    );
}

export default ContentHome;
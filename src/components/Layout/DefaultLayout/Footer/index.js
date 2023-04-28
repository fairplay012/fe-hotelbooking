import classNames from "classnames/bind";
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faSquare } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles)

function Footer() {
    return ( 
    <div className={cx('footer')}>
        <div className={cx('img')}>
            <img src="https://www.amazingnortheastindia.com/wp-content/uploads/revslider/slider-home3/travel.png" alt="1"/>
        </div>
        <div className={cx('contact')}>
            <h3>Contact</h3> 
            <div className={cx('contact-elements')}>      
                <div>
                <FontAwesomeIcon icon={faLocationDot}/>
                <p>So 2 Pham Van Bach, Cau Giay, Ha Noi</p>
                </div>
                <div>
                <FontAwesomeIcon icon={faPhone}/>
                <p>0366841290</p>
                </div>
                <div>
                <FontAwesomeIcon icon={faEnvelope}/>
                <p>manhntgch190570@fpt.edu.vn</p>
                </div>
                <div>
                <FontAwesomeIcon icon={faSquare}/>
                <FontAwesomeIcon icon={faSquare}/>
                <FontAwesomeIcon icon={faSquare}/>
                <FontAwesomeIcon icon={faSquare}/>               
                </div>  
            </div>                           
        </div>
        <div className={cx('news')}>
            <h3>News</h3>
            <ul>
                <li>Bản tin du lịch Việt</li>
                <li>Cẩm nang du lịch</li>
                <li>Tư vấn du lịch</li>
                <li>Tuyển dụng du lịch</li>
            </ul>
        </div>
        <div className={cx('popular')}>
            <h3>Popular Tour</h3>
            <div>
                <img src="https://thuthuatnhanh.com/wp-content/uploads/2021/06/Hinh-anh-Hoi-An-voi-den-long.jpg" alt="2"/>
                <img src="https://i1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA" alt="3"/>
                <img src="https://file1.dangcongsan.vn/data/0/images/2022/10/24/upload_37/abdffce43449f317aa58.jpg" alt="4"/>
                <img src="https://media.baolaocai.vn/storage/files/shares/2022/Thang-02/Ngay-08/s1.jpg" alt="5"/>
                <img src="https://nld.mediacdn.vn/2019/12/28/tp-hcm-ruc-ro-ve-dem-anh-hoang-trieu-4-15775262530931728274679.jpg" alt="6"/>
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/ec/51/ae/the-red-bridge.jpg?w=500&h=400&s=1" alt="7"/>
            </div>
        </div>
    </div> );
}

export default Footer;
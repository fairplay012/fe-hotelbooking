import classNames from "classnames/bind";
import styles from './Header.module.scss';
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Header() {
    return ( 
        <header>
            <nav className={cx('navi-header')}>
                <div className={cx('navi-left')}>
                    <h2>BookingTravelling.com</h2>
                </div>
                <div className={cx('navi-right')}>
                    <img src={require('./icons8-vietnam-48.png')} alt="Vietnam" />
                    <p>Dịch vụ đặt phòng khách sạn</p>
                    <button>Đăng nhập</button>
                    <button>Đăng kí</button>
                </div>
            </nav>
            <ul className={cx('list')}>
                <li><button> <Link to='/'>Home</Link></button></li>
                <li><button> <Link>Area</Link></button></li>
                <li><button><Link to='/hotels'>Hotels</Link></button></li>
                <li><button><Link>Utilities</Link> </button></li>
                <li><button><Link>Transportation</Link></button></li>
                <li><button><Link to='/introduction'> Introduction</Link></button></li>
            </ul>
            <div className={cx('found')}>
                <h1>Tìm khách sạn cho khách du lịch</h1>
            </div>
        </header>
     );
}

export default Header;
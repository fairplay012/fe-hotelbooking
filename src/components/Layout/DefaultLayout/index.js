import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import ContentHome from "../../ContentHome";
import classNames from "classnames/bind";
import styles from './Layout.module.scss'; 

const cx = classNames.bind(styles);

function DefaultLayout({children}) {
    return ( 
        <div>
            <Header/>
            <div className={cx('main')}>
                <SideBar/>
                <ContentHome/>
                <div className={cx('container')}>
                    {children}
                </div>  
            </div>
            <Footer/>
        </div>
     );
}
export default DefaultLayout;
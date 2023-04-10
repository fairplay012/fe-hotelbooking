import Footer from "../../components/Layout/DefaultLayout/Footer"
import Header from "../../components/Layout/DefaultLayout/Header"
import classNames from "classnames/bind";
import styles from "./Introduction.module.scss"

const cx = classNames.bind(styles)

function Introduction() {
    return ( 
    <div className={cx("intro-header")}>
        <Header/>
        <div className={cx("intro-main")}>
            <div className={cx("goal")}>
                <h1>Goal</h1>
                <p>Cung cấp nền tảng mà trên đó các Nhà cung cấp Dịch vụ có thể quảng bá và bán các Chỗ nghỉ của họ và bạn có thể tìm kiếm, so sánh và đặt chúng.</p>
            </div>
            <div className={cx("mission")}>
                <h1>Mission</h1>
                <p>Mang lại cho mọi người trải nghiệm tốt nhất trong lĩnh vực này</p>
            </div>
            <div className={cx("future")}>
                <h1>Future</h1>
                <p> Cung cấp các giải pháp công nghệ phù hợp từ Nhà cung cấp kết nối có thể giúp Quý vị tăng trưởng, đồng thời tinh giản quy trình quản lý chỗ nghỉ.</p>
            </div>
        </div>        
        <Footer/>
    </div> 
);
}

export default Introduction;
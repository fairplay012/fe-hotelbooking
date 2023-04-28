import classNames from "classnames/bind";
import styles from './Uti.module.scss';
import Header from "../Layout/DefaultLayout/Header";
import Footer from "../Layout/DefaultLayout/Footer";
import { useState, useEffect } from "react";
import axios from "axios";


const cx = classNames.bind(styles)

function Uti() {


    const [postData, setPostData] = useState([])

    useEffect(()=>{
        const axiosPost = async()=>{
         await axios.get('http://localhost:5000/api/uti/findAll')
                .then(response => {
                    setPostData(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        axiosPost();      
    },[])

    const renderUti = postData.map((item) =>
            <div className={cx('ui-item')} key={item._id}>
                <img src={item.imgURL} alt="uti"/>
                <h2>{item.type}</h2>
                <p>{item.price}</p>
            </div>
            )
    return ( <div>
        <Header/> 
            <div className={cx('main-uti')}>
                {renderUti}
            </div>      
        <Footer/>
    </div> );
}

export default Uti;
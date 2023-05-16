import classNames from "classnames/bind";
import styles from './Uti.module.scss';
import Header from "../Layout/DefaultLayout/Header";
import Footer from "../Layout/DefaultLayout/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const cx = classNames.bind(styles)

function Uti() {


    const [postData, setPostData] = useState([])
    const {hotelIdUti} = useParams();

    useEffect(()=>{
        const axiosPost = async()=>{
         await axios.get(`http://localhost:5000/api/uti/findAll`)
                .then(response => {
                    setPostData(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        axiosPost();      
    },[])


    const utiArray = postData.filter((utiList) => {
        return utiList.hotel === hotelIdUti
    }
    )

    const renderUti = utiArray.map((item) =>
            <div className={cx('uti-item')} key={item._id}>
                <img style={{marginBottom:20}} src={item.imgURL} alt="uti"/>
                <h2 style={{ marginBottom:"15px"}}>{item.type}</h2>
                <div style={{display:"flex"}}>
                    <p style={{paddingRight:"10px"}}>Price: </p>
                    <span>{item.price}</span>
                </div>
                {/* <div style={{display:"flex"}}>
                    <span style={{paddingRight:"10px"}}>Description: </span>
                    <p>Many people choose to treat pain, or support the treatment of sciatica, headache, back pain.</p>
                </div> */}
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
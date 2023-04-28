import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import ContentHome from "../../ContentHome";
import classNames from "classnames/bind";
import styles from './Layout.module.scss'; 
import { useState, useEffect } from "react";
import axios from "axios";

const cx = classNames.bind(styles);

function DefaultLayout() {
    const [postData, setPostData] = useState([])
    const [message, setMessage] = useState('')

    const sidebarFunction = (res) => {
        setMessage(res)
        // setPostData(res)
    }

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

    return ( 

        <div>
            <Header/>
            <div className={cx('main')}>
                <SideBar layoutCallback = {sidebarFunction}/>
                <ContentHome dataContent = {message.length === 0 ?  postData : message}/> 
            </div>
            <Footer/>
        </div>
     );
}
export default DefaultLayout;
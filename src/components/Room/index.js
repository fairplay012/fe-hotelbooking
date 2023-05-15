import classNames from "classnames/bind";
import styles from './Room.module.scss';
import Header from "../Layout/DefaultLayout/Header";
import Footer from "../Layout/DefaultLayout/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const cx = classNames.bind(styles)

function Room() {

    const [postData, setPostData] = useState([])
    const {hotelIdRoom} = useParams();

    useEffect(()=>{
        const axiosPost = async()=>{
         await axios.get(`http://localhost:5000/api/room/findAll`)
                .then(response => {
                    setPostData(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        axiosPost();      
    },[])


    const roomArray = postData.filter((roomList) => {
        return roomList.hotel === hotelIdRoom
    }
    )

    const renderRoom = roomArray.map((item) =>
            <div className={cx('room-item')} key={item._id}>
                <img src={item.imgURL} alt="room"/>
                <h2>{item.name}</h2>
                <p>{item.price}</p>
            </div>
            )
    return ( <div>
        <Header/> 
            <div className={cx('main-room')}>
                {renderRoom}
            </div>      
        <Footer/>
    </div> );
}

export default Room;
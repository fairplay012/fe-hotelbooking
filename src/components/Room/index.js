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
                <img style={{marginBottom:20}} src={item.imgURL} alt="room"/>
                <h2 style={{paddingBottom:20}}>{item.name}</h2>
                <div style={{display:"flex", justifyContent:"space-between", boxSizing:"border-box", width:"600px", marginBottom:20}}>

                    <div style={{display:"flex", width:"150px", border:"1px solid black" ,
                        borderLeft:"none",
                        borderTop:"none",
                        borderBottom:"none",
                        fontSize:18}}>
                        <p style={{paddingRight:"10px"}}>Price </p>
                        <span>{item.price}</span>
                    </div>
                    <div style={{display:"flex",  width:"150px",border:"1px solid black" ,
                        borderLeft:"none",
                        borderTop:"none",
                        borderBottom:"none", fontSize:18}}>
                        <p style={{paddingRight:"10px"}}>View </p>
                        <span>City</span>
                    </div>
                    <div style={{display:"flex", width:"150px",fontSize:18}}>
                        <p style={{paddingRight:"10px"}}>Capacity</p>
                        <p style={{width: "100px"}}>
                            <span> 3 </span>                      
                        </p>
                    </div>
                    
                </div>
                <div style={{display:"flex", width:"600px", fontSize:18}}>
                    <p style={{paddingBottom:"15px", marginRight:20}}> <span>Description: </span></p>
                    <p>{item.description}</p>
                </div>
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
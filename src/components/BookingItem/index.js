import classNames from "classnames/bind";
import styles from './BookingItem.module.scss';
import Header from "../Layout/DefaultLayout/Header";
import Footer from "../Layout/DefaultLayout/Footer";
import {  useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faXmark } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles)

function BookingItem(){
    const {hotelId} = useParams();

    const[customer, setCustomer] = useState('')
    const[startDate, setStartDate] = useState('')
    const[endDate, setEndDate] = useState('')
    const[email, setEmail] = useState('')
    const [dataHotel, setDataHotel] = useState([])
    const [dataRoom, setDataRoom] = useState([])
    const [dataUti, setDataUti] = useState([])
    const [dataTrans, setDataTrans] = useState([])
    const[showInformation, setShowInformation] = useState(false)
    const[showComment, setShowComment] = useState(false)
    const[booking, setBooking] = useState(false)
    const[roomSelect, setRoomSelect] = useState()
    const[utiSelect, setUtiSelect] = useState()
    const[transSelect, setTransSelect] = useState()
    const[comment, setComment] = useState('')
    const[nameComment, setNameComment] = useState('')
    const[emailComment, setEmailComment] = useState('')
    const[dataReview, setDataReview] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post("http://localhost:5000/api/booking/addBooking",{ 
            "startDate":startDate,
            "endDate":endDate,
            "Note":"abc",
            "customer":customer,
            "email":email,
            "trans":transChoose?.type,
            "rooms":roomChoose?.name,
            "utis":utisChoose?.type})
            
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }

      const handleComment = (e) => {
        e.preventDefault();
        axios
          .post("http://localhost:5000/api/review/addReview",{ 
            "name":nameComment,
            "email":emailComment,
            "comment":comment,
            "hotel":dataHotel?._id
        })        
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }

    const handleShowInfo = ()=>{
        setShowInformation(!showInformation)
    }
    const handleShowComment = ()=>{
        setShowComment(!showComment)
    }
    const showBooking = ()=>{
        setBooking(!booking)
    }

    useEffect(()=>{
        const axiosPostHotel = async()=>{
         await axios.get(`http://localhost:5000/api/hotel/find/${hotelId}`)
                .then(response => {
                    setDataHotel(response.data); 
                })
                .catch(error => {
                    console.log(error);
                });
        }
        axiosPostHotel()
    },[hotelId])


    const axiosPostComment= async()=>{
        await axios.get('http://localhost:5000/api/review/findAll')
               .then(response => {
                   setDataReview(response.data); 
               })
               .catch(error => {
                   console.log(error);
               });
    }


    const axiosPostRoom = async()=>{
        await axios.get('http://localhost:5000/api/room/findAll')
               .then(response => {
                   setDataRoom(response.data); 
               })
               .catch(error => {
                   console.log(error);
               });
    }

    const axiosPostUti = async()=>{
        await axios.get('http://localhost:5000/api/uti/findAll')
               .then(response => {
                   setDataUti(response.data); 
               })
               .catch(error => {
                   console.log(error);
               });
    }
    const axiosPostTrans = async()=>{
        await axios.get('http://localhost:5000/api/trans/findAll')
               .then(response => {
                   setDataTrans(response.data); 
               })
               .catch(error => {
                   console.log(error);
               });
    }
    
    useEffect(()=>{
        axiosPostRoom();   
        axiosPostTrans();
        axiosPostUti();
        axiosPostComment()
    },[])


    const roomArray = dataHotel?.rooms
    const rooms = roomArray?.map(itemRoom =>
        <option value={itemRoom}>{itemRoom}</option>                                                        
    )
    const roomChoose = dataRoom.find(item => item?.name === roomSelect)


    const utisArray = dataHotel?.utis
    const utis = utisArray?.map(itemUti =>
        <option value={itemUti}>{itemUti}</option>
    )
    const utisChoose = dataUti.find(item => item?.type=== utiSelect)

    const transArray = dataHotel?.trans
    const trans = transArray?.map(itemTrans =>
        <option value={itemTrans}>{itemTrans}</option>
    )
    const transChoose = dataTrans?.find(item => item?.type === transSelect)

    const commentArray = dataReview?.filter(item => item?.hotel === hotelId)
      const  renderComment = commentArray.map(item =>
                <div className={cx('show-comments')}>
                    <div className={cx('avatar-comment')}>
                        <FontAwesomeIcon icon={faUserTie}/>
                    </div>
                    <div>
                        <h3>{item?.name}</h3>
                        <p>{item?.comment}</p>
                    </div>
                </div>
     )
    return ( <div>
        <Header/>
        <div className={cx('main-booking')}>
            <div className={cx('image-booking')}>
                <img src={dataHotel?.imgURL} alt="Nha Trang"/>
            </div>
                    <div className={cx('info-booking')}>            
                        <h1>{dataHotel?.name}</h1>
                        <span>1,980,000 ₫</span>
                        <p>{dataHotel?.description}</p>                    
                        <button onClick={showBooking}>
                            BOOKING NOW
                        </button>   
                    </div>
            </div>
        {
        booking &&
        <div className={cx('booking-button')}>            
                <form className={cx('form-booking')} onSubmit={handleSubmit}> 
                    <div className={cx('form-header')}>
                        <h3>Booking Room Of {dataHotel?.name}</h3>
                        <FontAwesomeIcon icon={faXmark} onClick={showBooking} style={{width:"20px", height:"20px", cursor:"pointer"}}/>                
                    </div>
                        <div className={cx('custom-name')}>
                            <label>Name</label><br/>
                            <input value={customer} onChange={e => setCustomer(e.target.value)}/>
                        </div>
                        <div className={cx('custom-email')}>
                            <label >Email</label><br/>
                            <input value={email} onChange={e => setEmail(e.target.value)}/>                     
                        </div>
                        <div className={cx('startDate')}>
                            <label>Start Date</label>
                            <input type="date" value={startDate} onChange={e => setStartDate((e.target.value))}/>
                        </div>
                        <div className={cx('endDate')}>
                            <label>End Date</label>
                            <input type="date" value={endDate} onChange={e => setEndDate((e.target.value))}/>
                        </div>
                        <div className={cx('room')}>
                            <label>Room</label><br/><br/>
                            <select id="room" name="roomlist"  onChange={e => setRoomSelect(e.target.value)}>
                                {rooms}
                            </select>
                            <label>Price: </label>
                            <span>{roomChoose?.price} dong</span>
                        </div>
                        <div className={cx('uti')}>
                            <label>Utilities</label><br/><br/>
                            <select id="uti" name="utilist" onChange={e => setUtiSelect(e.target.value)}>
                                {utis}
                            </select>
                            <label>Price: </label>
                            <span>{utisChoose?.price} dong</span>
                        </div>
                        <div className={cx('trans')}>
                            <label>Transportation</label><br/><br/>
                            <select id="trans" name="translist" onChange={e => setTransSelect(e.target.value)}>
                                {trans}
                            </select>
                            <label>Price: </label>
                            <span>{transChoose?.price} dong</span>
                        </div>
                        <button type="submit" value="Submit">Book</button>
                    </form>
        </div>
        }
        <div className={cx('under-booking')}>
            <div className={cx('list-button')} >
                <button onClick={handleShowInfo}>MÔ TẢ</button>
                
                <button> THÔNG TIN BỔ SUNG</button>
                <button onClick={handleShowComment}>ĐÁNH GIÁ</button>
            </div>
                {
                showInformation &&
                <div className={cx('information')}>
                    Đặt phòng tại {dataHotel?.name} - {dataHotel?.description}
                </div>                          
                }
                {
                showComment &&
                <div className={cx('comment')}>
                    <h1> Comments: </h1>
                        {renderComment}
                    <div className={cx('input-comment')}>
                        <h1>Hay dua ra nhan xet cho {dataHotel?.name}</h1>
                        <form className={cx('form-comment')}>
                            <label>Your Comments:</label><br/>
                            <input type="text" id="u-comment" name="comment" value={comment} onChange={e=> setComment(e.target.value)}/><br/>
                            <label>Name:</label><br/>
                            <input type="text" id="name" name="name" value={nameComment} onChange={e=> setNameComment(e.target.value)}/><br/><br/>
                            <label>Email:</label><br/>
                            <input type="text" id="email" name="email" value={emailComment} onChange={e=> setEmailComment(e.target.value)}/><br/><br/>
                            <button type="submit" value="Submit" onClick={handleComment}>Send</button>
                        </form> 
                    </div>
                </div>
                }
        </div>
        <Footer/>
    </div>);
}

export default BookingItem;
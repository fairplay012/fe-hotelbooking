import classNames from "classnames/bind";
import styles from './BookingItem.module.scss';
import Header from "../Layout/DefaultLayout/Header";
import Footer from "../Layout/DefaultLayout/Footer";
import {  useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import moment from 'moment';


const cx = classNames.bind(styles)

function BookingItem(){
    const {hotelId} = useParams();

    const[user, setUser] = useState()
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
    const[dataBooking, setDataBooking] = useState([])
    // const[nameComment, setNameComment] = useState('')
    // const[emailComment, setEmailComment] = useState('')
    const[dataReview, setDataReview] = useState([])



      const handleComment = (e) => {
        e.preventDefault();
        axios
          .post("http://localhost:5000/api/review/addReview",{ 
            "name":user?.username,
            // "email":emailComment,
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

    const axiosGetBooking = async()=>{
        await axios.get('http://localhost:5000/api/booking/findAll')
               .then(response => {
                   setDataBooking(response.data); 
               })
               .catch(error => {
                   console.log(error);
               });
    }


    const access_token = localStorage.getItem('accessToken')  
    const userId = localStorage.getItem('userId')


    const axiosUser = async()=>{
      await axios.get(`http://localhost:5000/api/user/find/${userId}`,{
        headers:{
          'Token': `Bearer ${access_token}`
        }
      })
             .then(response => {
              setUser(response.data); 
             })
             .catch(error => {
                 console.log(error);
             });
      }

    
      //check date
      function checkBookingDate(checkInDate, checkOutDate) {
        const newCheckInDate = moment(checkInDate).format('YYYY-MM-DD');
        const newCheckOutDate = moment(checkOutDate).format('YYYY-MM-DD');

        const isDateBefore = (newCheckInDate, newCheckOutDate) => {
            return moment(newCheckInDate).isBefore(newCheckOutDate);
        }

        for (let i = 0; i < dataBooking.length; i++) {
          const existingCheckInDate = moment(dataBooking[i].startDate);
          const existingCheckOutDate = moment(dataBooking[i].endDate);
          console.log(existingCheckInDate);
          console.log(existingCheckOutDate);
        
          if(roomChoose.quantity > 0){
            return true
          } if(roomChoose.quantity === 0){
            return false
          }else{
              if(roomSelect === dataBooking[i].rooms){
                  // Kiểm tra ngày đặt phòng mới có bị trùng với các đặt phòng khác hay không
                  if (
                    newCheckInDate.isBetween(existingCheckInDate, existingCheckOutDate, null, '[]') ||
                    newCheckOutDate.isBetween(existingCheckInDate, existingCheckOutDate, null, '[]')
                  ){
                    return false;
                  }
                  if(!isDateBefore()){
                    return false;
                  }
                }
          }
        }  
        return true;
      }

    useEffect(()=>{
        axiosPostRoom();   
        axiosPostTrans();
        axiosPostUti();
        axiosPostComment();
        axiosUser();
        axiosGetBooking();
    },[])

        const axiosUpdateRoom = async (id, updatedRoom) => {
            await axios.put(`http://localhost:5000/api/room/${id}`, updatedRoom)
              .then(response => {
                console.log(response.data);
              })
              .catch(error => {
                console.log(error);
              });
          }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!checkBookingDate(startDate, endDate)){
            alert(`Ngày đặt phòng đã bị trùng hoặc ngày bắt đầu đứng sau ngày kết thúc`);
            return;
        } else{
            axios
              .post("http://localhost:5000/api/booking/addBooking",{ 
                "startDate":startDate,
                "endDate":endDate,
                "Note":"abc",
                "customer":customer,
                "email":email,
                "trans":transChoose?.type,
                "rooms":roomChoose?.name,
                "utis":utisChoose?.type,
                "hotel": dataHotel?.name,
            })              
              .then((response) => {
                console.log(response.data);
                alert(`Booking successfully`);

                axiosUpdateRoom(roomChoose._id, {
                    "name": roomChoose.name,
                    "price":roomChoose.price,
                    "description": roomChoose.description,
                    "imgURL": roomChoose.imgURL,
                    "hotel":roomChoose.hotel,
                    "quantity":roomChoose.quantity - 1,
                });
                showBooking();
              })
              .catch((error) => {
                console.error(error);
              });
        }
      
      }

      //room
    const roomArray = dataHotel?.rooms
    const room1 = roomArray?.map(item =>{
        const listRoomHotel=  dataRoom.find(roomFind => roomFind._id === item)
        return listRoomHotel
    })
    const rooms = room1?.map(itemRoom =>
        <option value={itemRoom?.name}>{itemRoom?.name}</option>                                                        
    )
    const roomChoose = dataRoom.find(item => item?.name === roomSelect)

    // utility
    const utisArray = dataHotel?.utis

    const uti1 = utisArray?.map(item =>{
        const listUti=  dataUti.find(utiFind => utiFind._id === item)
        return listUti
    })
    const utis = uti1?.map(itemUti =>
        <option value={itemUti?.type}>{itemUti?.type}</option>
    )
    const utisChoose = dataUti.find(item => item?.type === utiSelect)

    //transportation
    const transArray = dataHotel?.trans

    const trans1 = transArray?.map(item =>{
        const listTrans=  dataTrans.find(transFind => transFind._id === item)
        return listTrans
    })

    const trans = trans1?.map(itemTrans =>
        <option value={itemTrans?.type}>{itemTrans?.type}</option>
    )

    const transChoose = dataTrans?.find(item => item?.type === transSelect)

console.log(utiSelect);
    //comment
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
                        <p>{dataHotel?.description}</p>  
                        <Link to={ `/room/${hotelId}`}>
                        <button>
                            VIEW ROOM
                        </button>
                        </Link> 
                        <Link to={ `/uti/${hotelId}`}>
                        <button>
                            VIEW UTILITIES
                        </button>
                        </Link>                
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
                            <div>
                            <label>Room: </label>
                            <select id="room" name="roomlist"  onChange={e => setRoomSelect(e.target.value)}>
                                {rooms}
                            </select>
                            </div>
                            <div>
                                <label>Quantity: </label>
                                <span>{roomChoose?.quantity}</span>
                            </div>
                            <div>
                                <label>Price: </label>
                                <span>{roomChoose?.price} dong</span>
                            </div>
                        </div>
                        <div className={cx('uti')}>
                            <div>
                                <label>Utilities</label>
                                <select id="uti" name="utilist" onChange={e => setUtiSelect(e.target.value)}>
                                    {utis}
                                </select>
                            </div>
                            <div>
                                <label>Price: </label>
                                <span>{utisChoose?.price} dong</span>
                            </div>
                        </div>
                        <div className={cx('trans')}>
                            <div>
                                <label>Transportation</label>
                                <select id="trans" name="translist" onChange={e => setTransSelect(e.target.value)}>
                                    {trans}
                                </select>
                            </div>
                            <div>
                                <label>Price: </label>
                                <span>{transChoose?.price} dong</span>
                            </div>
                        </div>
                        <button type="submit" value="Submit">Book</button>
                    </form>
        </div>
        }
        <div className={cx('under-booking')}>
            <div className={cx('list-button')} >
                <button onClick={handleShowInfo}>DESCRIBE</button>
                
                <button> ADDITIONAL INFORMATION</button>
                <button onClick={handleShowComment}>EVALUATE</button>
            </div>
                {
                showInformation &&
                <div className={cx('information')}>
                    Book a room at {dataHotel?.name} - {dataHotel?.description}
                </div>                          
                }
                {
                showComment &&
                <div className={cx('comment')}>
                    <h1> Comments: </h1>
                        {renderComment}
                    <div className={cx('input-comment')}>
                        <h1>Give your review {dataHotel?.name}</h1>
                        <form className={cx('form-comment')}>
                            <label>Your Comments:</label><br/>
                            <input type="text" id="u-comment" name="comment" value={comment} onChange={e=> setComment(e.target.value)}/><br/>
                            
                            {/* <label>Name:</label><br/>
                            <input type="text" id="name" name="name" value={nameComment} onChange={e=> setNameComment(e.target.value)}/><br/><br/>
                            <label>Email:</label><br/>
                            <input type="text" id="email" name="email" value={emailComment} onChange={e=> setEmailComment(e.target.value)}/><br/><br/> */}
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
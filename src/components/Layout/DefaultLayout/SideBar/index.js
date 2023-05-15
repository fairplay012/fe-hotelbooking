import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";
// import Tippy from "@tippyjs/react";
import { useEffect, useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);


function SideBar(props) {
  const [searchResult, setSearchResult] = useState([]);
  const [data,setData] = useState([])



  const sendData = (a) => {
    props.layoutCallback(a);
  }


  useEffect(() => {
      const axiosGetArea = async()=>{
        await axios.get(`http://localhost:5000/api/hotel/findArea/${searchResult}`)
              .then(response => {
                  setData(response.data); 
                  console.log(response.data);
              })
              .catch(error => {
                  console.log(error);
              });
    }
    axiosGetArea();
  }, [searchResult]);

  return (
    <div className={cx("search")}>
      <form>
        <h1>Search</h1>
        
          <div>
            <label>Search hotels by area:</label>
            <br />
            <input
              value={searchResult}
              onChange={(e) => setSearchResult(e.target.value)}
            />
            <br />
          </div>       
          {/* <div>
            <label>Ngày nhận phòng:</label>
            <br />
            <input />
            <br />
          </div>
          <div>
            <label>Ngày trả phòng:</label>
            <br />
            <input />
            <br />
          </div>
          <div>
            <label>Số người ở:</label>
            <br />
            <input />
            <br />
          </div> */}
        <button onClick={sendData(data)} className={cx("search-button")}>Search</button>
      </form>
    </div>
  );
}

export default SideBar;

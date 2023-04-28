import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import {  useState } from "react";
import axios from "axios";
import 'react-notifications/lib/notifications.css';
// import {NotificationContainer, NotificationManager} from 'react-notifications';

const cx = classNames.bind(styles);


function Register() {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState("");   

    // const createNotification = (type) => {
    //     return () => {
    //       switch (type) {
    //         case 'success':
    //           NotificationManager.success('Success message', 'Title here');
    //           break;
    //         case 'warning':
    //           NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
    //           break;
    //         case 'error':
    //           NotificationManager.error('Error message', 'Click me!', 5000, () => {
    //             alert('callback');
    //           });
    //           break;
    //       }
    //     };
    //   };
    
    const handleSubmitRegister = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post("http://localhost:5000/api/auth/register", {
            "username": username,
            "email": email,
            "password": password
          });
          setData(response.data);
          console.log(response.data);
        //   createNotification('success')
          window.location.href = "/login";
        } catch (error) {
          console.log(error);
        }
      };

      

    return (  
    <div className={cx("main-register")}>
      <form onSubmit={handleSubmitRegister} name="registerForm">
        <h1>Sign up</h1>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
         <input
          type="text"
          id="email1"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" id="submit">
          Sign up
        </button>
        <div className={cx("footer-register")}>
          <div className={cx("image-social-register")}>
            <img
              src="https://www.facebook.com/images/fb_icon_325x325.png"
              alt="facebook"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
              alt="instagram"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png"
              alt="apple"
            />
          </div>
        </div>
      </form>
    </div>
    );
}

export default Register;
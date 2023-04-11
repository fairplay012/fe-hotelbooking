import classNames from "classnames/bind";
import styles from './Login.module.scss'; 
import { useEffect, useState } from "react";
import axios from "axios";


const cx = classNames.bind(styles);

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [data, setData] = useState('')

    const handleSubmit =  (event) => {
      event.preventDefault();
      try {
        axios.post('localhost:5000/api/auth/login', { username, password })
        .then(response => {
            setData(response);
        })
        .catch(err => {
            console.log(err);
        });
        console.log({ username, password });
        // Lưu thông tin đăng nhập vào local storage hoặc cookie
        localStorage.setItem('accessToken', data.accessToken);
        // Chuyển hướng đến trang chính
        window.location.href = '/';
      } catch (error) {
        setError('Tên đăng nhập hoặc mật khẩu không đúng.');
      }
    };

    return ( 
    <div className={cx('main-login')}>
        <div className={cx('left-login')}>
            <img src="https://img.freepik.com/premium-vector/stylish-bright-creative-text-welcome-white-background-vector_532963-3106.jpg?w=2000"/>
        </div>
        <form onSubmit={handleSubmit} name="loginForm" >
            <h1>Sign in</h1>            
                <input type="text" id="username" name="username" value={username} placeholder="Username"
                onChange={e => setUsername(e.target.value)}
                />
                {/* <label for="username"></label> */}
                <input type="text" id="password" name="password" value={password} placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                />
                {/* <label for="password"></label> */}
        

            <div className={cx('checkbox')}>
                <input type="checkbox" id="keep" name="keep" value=""/>
                <label for="keep">Keep me signed in</label><br/>
            </div>
            <div>
                <p>By signing in, I agree to the Hotels <a href="https://in.hotels.com/lp/b/terms-of-service"> Terms and Conditions </a> 
                and <a href="https://in.hotels.com/customer_care/privacy.html">Privacy Statement.</a></p>

            </div>
            <button  type="submit" id="submit">Sign in</button>
            <div className={cx('footer-login')}>
                <a href = "#/">Forgot password</a>
                <p>Don't have an account? Create one</p>
                <p>or continue with</p>
                <div className={cx('image-social')}>
                    <img src="https://www.facebook.com/images/fb_icon_325x325.png"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png  "/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png"/>
                </div>
            </div>
        </form>
    </div> 
    );
}

export default Login;
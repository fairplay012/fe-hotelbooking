import classNames from "classnames/bind";
import styles from './Login.module.scss'; 

const cx = classNames.bind(styles);

function Login() {
    return ( 
    <div className={cx('main-login')}>
        <div className={cx('left-login')}>
            <img src="https://img.freepik.com/premium-vector/stylish-bright-creative-text-welcome-white-background-vector_532963-3106.jpg?w=2000"/>
        </div>
        <form action="" name="loginForm" method="">
            <h1>Sign in</h1>            
                <input type="text" id="username" name="username" value="" placeholder="Username"/>
                {/* <label for="username"></label> */}
                <input type="text" id="password" name="password" value="" placeholder="Password"/>
                {/* <label for="password"></label> */}
        

            <div className={cx('checkbox')}>
                <input type="checkbox" id="keep" name="keep" value=""/>
                <label for="keep">Keep me signed in</label><br/>
            </div>
            <div>
                <p>By signing in, I agree to the Hotels <a href="https://in.hotels.com/lp/b/terms-of-service"> Terms and Conditions </a> 
                and <a href="https://in.hotels.com/customer_care/privacy.html">Privacy Statement.</a></p>

            </div>
            <button id="submit" type="submit">Sign in</button>
            <div className={cx('footer-login')}>
                <a href = "#">Forgot password</a>
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
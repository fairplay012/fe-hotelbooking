import classNames from "classnames/bind";
import styles from './SideBar.module.scss';
// import Tippy from "@tippyjs/react";
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from "react";
import { Wrapper as PopperWrapper} from "../../../Popper";
import AreaItem from "../../../AreaItem";

const cx = classNames.bind(styles);

function SideBar() {
    const [searchResult,setSearchResult] =useState([]);
    
    useEffect(() =>{
        setTimeout(()=>{
            setSearchResult([]);
        },0)
    })
    return (
        <div className={cx('search')}>
            <form>
                <h1>Search</h1>
                    <Tippy content="Tìm điểm đến" placement="right"
                    visible={searchResult.length > 0}
                    interactive
                        render={attrs => (
                            <div className="search-result" tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-area')}>Khu vực</h4>
                                    <AreaItem/>
                                    <AreaItem/>
                                    <AreaItem/>
                                    <AreaItem/>
                                </PopperWrapper>
                                </div>
                        )}>
                            <div>
                                <label >Tên chỗ nghỉ/ điểm đến:</label><br/>
                                <input type="text" name="area" value=""/><br/>
                    </div>
                    </Tippy>
                <Tippy content="Nhập ngày nhận" placement="right">
                    <div>
                        <label >Ngày nhận phòng:</label><br/>
                        <input/><br/>
                    </div>
                </Tippy>
                <Tippy content="Nhập ngày trả" placement="right">
                    <div>
                        <label >Ngày trả phòng:</label><br/>
                        <input/><br/>
                    </div>
                </Tippy>
                <Tippy content="Số người" placement="right">
                    <div>
                        <label >Số người ở:</label><br/>
                        <input/><br/>
                    </div>
                </Tippy>
                <button className={cx('search-button')}>Search</button>
            </form>
        </div>
     );
}

export default SideBar;
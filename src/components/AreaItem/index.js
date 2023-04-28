import classNames from "classnames/bind";
import styles from "./AreaItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AreaItem({ data }) {
  return (
    <div className={cx("wrapper")}>
      <FontAwesomeIcon icon={faLocationDot} />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>{data}</span>
          <FontAwesomeIcon icon={faCheckCircle} />
        </p>
      </div>
    </div>
  );
}
export default AreaItem;

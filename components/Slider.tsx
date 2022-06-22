import Image from "next/image";
import styles from "../styles/Slider.module.scss";

const Slider = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["container"]}>
        <div className={styles["slide"]}>
          <div className={styles["product-box"]}>
            <div className={styles["img"]}>
              <Image width={200} height={300} src="/svg/html.svg" alt="" />
            </div>
            <div className={styles["details"]}>
              <p className={styles["name"]}>Mast & Harbour</p>
              <p className={styles["price"]}>Rs. 999</p>
            </div>
            <div className={styles["button"]}>
              <a href="#" className={styles["add-btn"]}>
                VIEW PROJECT
              </a>
            </div>
          </div>
          <div className={styles["product-box"]}>
            <div className={styles["img"]}>
              <Image width={200} height={300} src="/svg/html.svg" alt="" />
            </div>
            <div className={styles["details"]}>
              <p className={styles["name"]}>TWIN TOES</p>
              <p className={styles["price"]}>Rs. 799</p>
            </div>
            <div className={styles["button"]}>
              <a href="#" className={styles["add-btn"]}>
                VIEW PROJECT
              </a>
            </div>
          </div>
          <div className={styles["product-box"]}>
            <div className={styles["img"]}>
              <Image width={200} height={300} src="/svg/html.svg" alt="" />
            </div>
            <div className={styles["details"]}>
              <p className={styles["name"]}>Roadster Black</p>
              <p className={styles["price"]}>Rs. 839</p>
            </div>
            <div className={styles["button"]}>
              <a href="#" className={styles["add-btn"]}>
                VIEW PROJECT
              </a>
            </div>
          </div>
          <div className={styles["product-box"]}>
            <div className={styles["img"]}>
              <Image width={200} height={300} src="/svg/html.svg" alt="" />
            </div>
            <div className={styles["details"]}>
              <p className={styles["name"]}>Mactree</p>
              <p className={styles["price"]}>Rs. 744</p>
            </div>
            <div className={styles["button"]}>
              <a href="#" className={styles["add-btn"]}>
                VIEW PROJECT
              </a>
            </div>
          </div>
          <div className={styles["product-box"]}>
            <div className={styles["img"]}>
              <Image width={200} height={300} src="/svg/html.svg" alt="" />
            </div>
            <div className={styles["details"]}>
              <p className={styles["name"]}>Max Navy Blue</p>
              <p className={styles["price"]}>Rs. 1599</p>
            </div>
            <div className={styles["button"]}>
              <a href="#" className={styles["add-btn"]}>
                VIEW PROJECT
              </a>
            </div>
          </div>
          <div className={styles["product-box"]}>
            <div className={styles["img"]}>
              <Image width={200} height={300} src="/svg/html.svg" alt="" />
            </div>
            <div className={styles["details"]}>
              <p className={styles["name"]}>Roadster White</p>
              <p className={styles["price"]}>Rs. 868</p>
            </div>
            <div className={styles["button"]}>
              <a href="#" className={styles["add-btn"]}>
                VIEW PROJECT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slider;

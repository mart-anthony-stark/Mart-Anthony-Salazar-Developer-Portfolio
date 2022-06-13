import { Icon } from "@iconify/react";
import style from "../styles/socials.module.scss";

const Social = () => {
  return (
    <div className={style.socials}>
      <a href="https://github.com/mart-anthony-stark">
        <Icon icon="akar-icons:github-fill" color="#ccd6f6" height={30} />
      </a>
      <span></span>
      <a href="https://www.facebook.com/profile.php?id=100081564911565">
        <Icon icon="akar-icons:facebook-fill" color="#ccd6f6" height={30} />
      </a>
      <span></span>
      <a href="https://codepen.io/martanthonystark404">
        <Icon
          icon="ant-design:codepen-circle-filled"
          color="#ccd6f6"
          height={30}
        />
      </a>
      <span></span>
      <a href="https://www.linkedin.com/in/mart-salazar/">
        <Icon icon="ant-design:linkedin-filled" color="#ccd6f6" height={30} />
      </a>
    </div>
  );
};
export default Social;

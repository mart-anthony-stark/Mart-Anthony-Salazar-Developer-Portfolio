import { Icon } from "@iconify/react";
import style from "../styles/socials.module.scss";

const Social = () => {
  return (
    <div className={style.socials}>
      <Icon icon="akar-icons:github-fill" color="#ccd6f6" height={30} />
      <span></span>
      <Icon icon="akar-icons:facebook-fill" color="#ccd6f6" height={30} />
      <span></span>
      <Icon
        icon="ant-design:codepen-circle-filled"
        color="#ccd6f6"
        height={30}
      />
      <span></span>
      <Icon
        icon="ant-design:twitter-circle-filled"
        color="#ccd6f6"
        height={30}
      />
    </div>
  );
};
export default Social;

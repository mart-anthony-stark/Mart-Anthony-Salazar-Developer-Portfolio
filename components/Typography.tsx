import { FC, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.scss";

type Transition = {
  delay?: number;
  duration?: number;
};

type Props = {
  text1: string;
  text2: string;
  trn1?: Transition;
  trn2?: Transition;
  delay?: number;
  permanent?: boolean;
};

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};

const Typography: FC<Props> = ({
  text1,
  text2,
  trn1,
  trn2,
  delay,
  permanent,
}) => {
  return (
    <>
      <motion.h1
        animate={!permanent && { y: -100, opacity: 0 }}
        transition={{ delay: delay ? delay + 2 : 2, duration: 1.3 }}
        className={permanent ? styles.permanent : styles.typography}
      >
        <motion.span
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={trn1 ? trn1 : { duration: 0.8, delay: delay || 0 }}
        >
          {text1}
        </motion.span>
        <motion.span
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={
            trn2 ? trn2 : { duration: 0.8, delay: delay ? delay + 0.2 : 0.2 }
          }
        >
          {text2}
        </motion.span>
      </motion.h1>
    </>
  );
};

export default Typography;

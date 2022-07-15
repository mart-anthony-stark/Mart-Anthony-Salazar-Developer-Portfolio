import styles from "./options.module.scss";

const LearningOptions = (props: any) => {
  const options = [
    { text: "Introduction", handler: props.actionProvider.introduce, id: 1 },
    // { text: "Data visualization", handler: () => {}, id: 2 },
    // { text: "APIs", handler: () => {}, id: 3 },
    // { text: "Security", handler: () => {}, id: 4 },
    // { text: "Interview prep", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className={styles["learning-option-button"]}
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return (
    <div className={styles["learning-options-container"]}>{optionsMarkup}</div>
  );
};

export default LearningOptions;

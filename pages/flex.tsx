export interface FlexProps {}
import styles from "./flex.module.css";
const Flex: React.SFC<FlexProps> = () => {
  return (
    <div
      id="container"
      className={styles.container}
      style={{ height: "100vh" }}
    >
      <div className={styles.text}>Fully Centered</div>
    </div>
  );
};

export default Flex;

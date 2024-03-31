import closeIcon from "images/close-icon.svg";
import styles from "./ModalWindow.module.css";

type TModalWindow = {
  children?: string | JSX.Element | JSX.Element[];
  title?: string;
  onClose: () => void;
};

const ModalWindow = ({
  children,
  title,
  onClose,
}: TModalWindow): JSX.Element => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <div className={styles.modal_header}>
          <p className={styles.modal_title}>{title}</p>
          <div style={{ cursor: "pointer" }}>
            <img src={closeIcon} alt="close icon" onClick={onClose}/>
          </div>
        </div>
        <div className={styles.modal_body}>{children}</div>
      </div>
    </div>
  );
};

export default ModalWindow;

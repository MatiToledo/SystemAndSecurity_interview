import styles from "./ui.module.css";

type ButtonProps = {
  isLoading: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export default function Button({ isLoading, onClick, children }: ButtonProps) {
  return (
    <button onClick={onClick} className={styles.button}>
      {isLoading ? <div className={styles.spinner}></div> : children}
    </button>
  );
}

import styles from "@/app/css/not-found.module.css";
export default async function NotFound() {
  return (
    <>
      <div className={styles.not_found}>
        <h1>404 </h1>
        <p>ページが見つかりませんでした</p>
      </div>
    </>
  );
}

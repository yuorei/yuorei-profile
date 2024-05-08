import styles from "@/app/css/skill.module.css";
export default function Skill() {
  return (
    <>
      <div className={styles.skill}>
        <h1>スキル</h1>
        <h2>言語</h2>
        <ul>
          <li>Go</li>
          <li>Python3</li>
          <li>Java</li>
          <li>C</li>
          <li>Ruby</li>
          <li>Typescript</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SQL</li>
        </ul>
        <h2>フレームワーク</h2>
        <ul>
          <li>gin</li>
          <li>gqlgen</li>
          <li>Next.js</li>
          <li>Flask</li>
          <li>Express</li>
          <li>rails</li>
        </ul>
        <h2>その他</h2>
        <ul>
          <li>git</li>
          <li>GitHub</li>
          <li>Linux</li>
          <li>RDB</li>
          <li>docker</li>
          <li>firebase</li>
          <li>GCP</li>
          <li>AWS</li>
          <li>GraphQL</li>
          <li>gRPC</li>
          <li>REST API</li>
        </ul>
      </div>
    </>
  );
}

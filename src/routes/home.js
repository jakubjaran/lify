import Layout from "../components/layout";

import styles from "./home.module.css";

const Home = () => {
  return (
    <Layout>
      <div className={styles.home}>
        <h1>Good Evening Jakub</h1>
      </div>
    </Layout>
  );
};

export default Home;

import { NextPage } from "next";
import WalletContextProvider from "@/components/WalletContextProvider";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { AppBar } from "@/components/AppBar";
import { PingButton } from "@/components/PingButton";

const Home: NextPage = props =>{
  return(
    <div>
      <Head>
        <title>Wallet-Adapter Example</title>
        <meta name="description" content="Wallet-Adapter example"/>
      </Head>
      <WalletContextProvider>
        <AppBar/>
        <div className={styles.AppBody}>
          <PingButton/>
        </div>
      </WalletContextProvider>
    </div>
  );
};

export default Home;
import './App.css';
import { useMemo } from 'react';
import * as anchor from '@project-serum/anchor';
import Home from './Home';
import Landing from "./component/Landing";
import Game_Intro from "./component/Game_Intro";
import NFT_Intro from "./component/NFT_Intro";
import CVAL_token from "./component/CVAL_token";
import Upcoming_games from "./component/Upcoming_games";
import Fusion_upgrade_system from "./component/Fusion_upgrade_system";
import FAQ from "./component/FAQ";
import Footer_page from "./component/Footer_page";

import Color_game from "./component/Color_game";

import Roadmap from "./component/Roadmap";
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from '@solana/wallet-adapter-wallets';

import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui';

import { ThemeProvider, createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

const getCandyMachineId = (): anchor.web3.PublicKey | undefined => {
  try {
    const candyMachineId = new anchor.web3.PublicKey(
      process.env.REACT_APP_CANDY_MACHINE_ID!,
    );

    return candyMachineId;
  } catch (e) {
    console.log('Failed to construct CandyMachineId', e);
    return undefined;
  }
};

const candyMachineId = getCandyMachineId();
const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;
const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost
  ? rpcHost
  : anchor.web3.clusterApiUrl('devnet'));

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);
const txTimeoutInMilliseconds = 30000;

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSlopeWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ],
    [],
  );

  return (
    
    // <ThemeProvider theme={theme}>
    //   <ConnectionProvider endpoint={endpoint}>
    //     <WalletProvider wallets={wallets} autoConnect>
    //       <WalletDialogProvider>
    //         <Home
    //           candyMachineId={candyMachineId}
    //           connection={connection}
    //           startDate={startDateSeed}
    //           txTimeout={txTimeoutInMilliseconds}
    //           rpcHost={rpcHost}
    //         />
            
    //       </WalletDialogProvider>
    //     </WalletProvider>
    //   </ConnectionProvider>
    // </ThemeProvider>
    <>
    <Landing />
      <Color_game />
      <Game_Intro />
      <NFT_Intro />
      <Fusion_upgrade_system />
      <CVAL_token />
      <Upcoming_games />
      <Roadmap />
      <FAQ />
      <Footer_page />
    </>
  );
};

export default App;

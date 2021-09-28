import { Contract, ethers } from "ethers";
// import TOKEN from "./contracts/TOKEN.json";
/* DEPLOY CONTRACTS FIRST TO HAVE ACCESS TO JSON TOKEN */

const getBlockchain = () =>
  new Promise((resolve, reject) => {
    window.addEventListener("load", async () => {
      if (window.ethereum) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const token = new Contract(
          TOKEN.networks[window.ethereum.networkVersion].address,
          TOKEN.abi,
          signer
        );
        resolve({ token });
      }
      resolve({ token: undefined });
    });
  });

export default getBlockchain;

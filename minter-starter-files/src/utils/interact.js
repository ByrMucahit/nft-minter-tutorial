export const connectWallet = async () => {
    /* 'windows.ethereum' is a global API injected by Metamask and other wallet providers that allows websites to request users */
    if (window.ethereum) {
        try {
            // Open up Metmask in the browser
            const addressArray = await window.ethereum.request ( {
                method: "eth_requestAccounts",
            });
            const obj = {
                status:"👆🏽 Write a message in the text-field above.",
                address: addressArray[0]
            };
            return obj;
        } catch(err) {
            return {
                address: "",
                status: err.message
            };
        }
        
    } else {
        return {
            address: "",
            status: (
                <span>
                    <p>
                        {" "}
                            {" "}
                            <a target={"_blank"} href={`https://metamask.io/download.html`}>
                                You must install Metamask, a virtual Ethereum wallet, in your browser.
                            </a>
                    </p>
                </span>
            ),
        };
    }
};

export const getCurrentWalletConnected = async () => {
    if(window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_accounts",
            });
            if(addressArray.length > 0) {
                return {
                    address: addressArray[0],
                    status: "Write a message in the text-field above."
                };
            } else {
                return {
                    address: "",
                    status: "Connect to Metamask using the top right button."
                };
            }
        } catch (err) {
            return {
                address: "",
                status: err.message
            };
        }
    } else {
        return {
            address: "",
            status: (
                <span>
                    <p>
                        {" "}
                        {" "}
                        <a target={"_blank"} href={`https://metamask.io/download.html`}>
                            You must install metamask, a virtual Ethereum wallet, in your browser
                        </a>
                    </p>
                </span>
            )
        }
    }
}

require('dotenv').config;
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3} = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = require("../contract-abi.json");
const contractAddress = "0x14f544FBDf6B159Ec3A6B69E3872cA0cA9b84d93";
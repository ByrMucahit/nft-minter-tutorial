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
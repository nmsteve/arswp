import { ethers } from "ethers"
import { ERC20ABI, LOCKABI } from "./abi"

const LOCK_ADDRESS = "0x4A610a3a46539b460FE11758cE8d51A518DF8dF5";
const testValue = ethers.utils.parseEther("0.02");
var tokenType = ""

let provider = ethers.getDefaultProvider('https://data-seed-prebsc-1-s1.binance.org:8545')

export const fetchTokenDetails = async (address) => {

    try {
        const token = new ethers.Contract(address, ERC20ABI, provider)
        const name = await token.name()
        console.log(name)
        const symbol = await token.symbol()
        const decimals = await token.decimals()
        const supply = (await token.totalSupply() / 10 ** decimals).toLocaleString()
        return { name: name, symbol: symbol, decimals: decimals, supply: supply }


    } catch (error) {
        console.log(error.message)

    }


}

export const setTokenType = async (value) => {
    tokenType = value
    console.log(value)
}

export async function lock(formdata) {
    const tokenAddress = formdata.address
    const amount = formdata.amount
    const unlock = formdata.unlockdat
    const description = document.getElementsByName('type').value
    const unlockTimestamp = Date.parse(unlock);

    console.log(`tokenAddress:${tokenAddress}...`)
    console.log(`tokenAmount:${amount}...`)
    console.log(`unlockDate:${unlockTimestamp}...`)
    console.log(`description: ${description}`)

    // if (typeof window.ethereum !== "undefined") {
    //     //connect if not connected
    //     await window.ethereum.request({ method: "eth_requestAccounts" })

    //     const provider = new ethers.providers.Web3Provider(window.ethereum)
    //     const signer = provider.getSigner()
    //     const signerAddy = await signer.getAddress()
    //     console.log(`signer with ${signerAddy}...`)

    //     const LockContractForSigner = new ethers.Contract(LOCK_ADDRESS, LOCKABI, signer)
    //     const tokenContract = new ethers.Contract(tokenAddress, ERC20ABI, signer);

    //     try {

    //         const approve = await tokenContract.approve(LOCK_ADDRESS, amount)
    //         await approve.wait()
    //         console.log("Approve", approve)

    //         const transactionResponse = await LockContractForSigner.lock(
    //             signerAddy, tokenAddress, false, amount, unlockTimestamp, description, { value: testValue })

    //         await listenForTransactionMine(transactionResponse, provider)

    //     } catch (error) {
    //         console.log(error)
    //     }
    // } else {
    //     //lockButton.innerHTML = "Please install MetaMask"
    // }
}



function listenForTransactionMine(transactionResponse, provider) {
    console.log(`Mining ${transactionResponse.hash}`)
    return new Promise((resolve, reject) => {
        try {
            provider.once(transactionResponse.hash, (transactionReceipt) => {
                console.log(
                    `Completed with ${transactionReceipt.confirmations} confirmations. `
                )
                resolve()
            })
        } catch (error) {
            reject(error)
        }
    })
}

import { ethers } from "ethers"
import { ERC20ABI, S_LOCKABI, R_LOCKABI } from "./abi"

const STANDARD_LOCK_ADDRESS = "0x4A610a3a46539b460FE11758cE8d51A518DF8dF5";
const REWARD_LOCK_ADDRESS = "0x918cCbFb55E0e2324B46b5C9737943E1Ba9110DB"

const testValue = ethers.utils.parseEther("0.02");

let provider = ethers.getDefaultProvider('https://data-seed-prebsc-1-s1.binance.org:8545')


export const getStandardNormalLockFee = async () => {
    try {
        const s_lockContract = new ethers.Contract(STANDARD_LOCK_ADDRESS, S_LOCKABI, provider)
        const formatedlockFee = ethers.utils.formatEther(await s_lockContract.feeNormalLock())
        const lockFee = await s_lockContract.feeNormalLock()
        return lockFee
    } catch (error) {
        console.log(error.message)
    }

}

export const getRewardNormalLockFee = async () => {
    try {
        const r_lockContract = new ethers.Contract(REWARD_LOCK_ADDRESS, R_LOCKABI, provider)
        const formatedlockFee = ethers.utils.formatEther(await r_lockContract.lockFeeSimple())
        const lockFee = await r_lockContract.lockFeeSimple()
        return lockFee
    } catch (error) {
        console.log(error.message)
    }

}



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

export async function lock(setIsProccessing, formdata) {
    if (formdata.tokenType === "standard") {
        lockStandard(setIsProccessing, formdata)
    } else if (formdata.tokenType === "reward") {
        lockReward(setIsProccessing, formdata)
    } else {
        alert('Token type not selected')
        console.log('Token type not selected')
    }
}

export async function lockStandard(setIsProccessing, formdata) {

    setIsProccessing(true)

    const tokenAddress = formdata.address
    const amount = formdata.amount
    const description = formdata.tokenType
    const unlockTimestamp = formdata.unlockTimestamp / 1000;

    console.log(`tokenAddress:${tokenAddress}...`)
    console.log(`tokenAmount:${amount}...`)
    console.log(`unlockDate:${unlockTimestamp}...`)
    console.log(`description: ${description}`)

    if (typeof window.ethereum !== "undefined") {

        //connect if not connected
        await window.ethereum.request({ method: "eth_requestAccounts" })

        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const signerAddy = await signer.getAddress()
        console.log(`signer with ${signerAddy}...`)

        const LockContractForSigner = new ethers.Contract(STANDARD_LOCK_ADDRESS, S_LOCKABI, signer)
        const tokenContract = new ethers.Contract(tokenAddress, ERC20ABI, signer);

        try {

            const fee = getStandardNormalLockFee()

            const approve = await tokenContract.approve(STANDARD_LOCK_ADDRESS, amount)
            await approve.wait()
            console.log("Approve", approve)

            const transactionResponse = await LockContractForSigner.lock(
                signerAddy, tokenAddress, false, amount, unlockTimestamp, description, { value: fee })

            await listenForTransactionMine(transactionResponse, provider)

        } catch (error) {
            console.log(error)
        }
    } else {
        //lockButton.innerHTML = "Please install MetaMask"
    }

    setIsProccessing(false)
}

export async function lockReward(setIsProccessing, formdata) {

    setIsProccessing(true)

    const tokenAddress = formdata.address
    const amount = formdata.amount
    const description = formdata.tokenType
    const unlockTimestamp = formdata.unlockTimestamp / 1000;
    const duration = formdata.duration

    console.log(`tokenAddress:${tokenAddress}...`)
    console.log(`tokenAmount:${amount}...`)
    console.log(`unlockDate:${unlockTimestamp}...`)
    console.log(`description: ${description}`)

    if (typeof window.ethereum !== "undefined") {

        //connect if not connected
        await window.ethereum.request({ method: "eth_requestAccounts" })

        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const signerAddy = await signer.getAddress()
        console.log(`signer with ${signerAddy}...`)

        const LockContractForSigner = new ethers.Contract(REWARD_LOCK_ADDRESS, R_LOCKABI, signer)
        const tokenContract = new ethers.Contract(tokenAddress, ERC20ABI, signer);

        try {

            const fee = await getRewardNormalLockFee()

            const approve = await tokenContract.approve(REWARD_LOCK_ADDRESS, amount)
            await approve.wait()
            console.log("Approve", approve)

            const transactionResponse = await LockContractForSigner.createSimpleLock(
                duration, amount, tokenAddress, { value: fee })

            await listenForTransactionMine(transactionResponse, provider)

        } catch (error) {
            console.log(error)
        }
    } else {
        //lockButton.innerHTML = "Please install MetaMask"
    }

    setIsProccessing(false)
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

import { ethers } from "ethers"
import { ERC20ABI, S_LOCKABI, R_LOCKABI } from "./abi"
import IUniswapV2Pair from '@uniswap/v2-core/build/IUniswapV2Pair.json'


const STANDARD_LOCK_ADDRESS = "0x4A610a3a46539b460FE11758cE8d51A518DF8dF5"
const REWARD_LOCK_ADDRESS = '0x957eda2bbA35429644464358198865a47E821032'

let provider = ethers.getDefaultProvider('https://data-seed-prebsc-1-s1.binance.org:8545')
//let provider = ethers.getDefaultProvider('https://preseed-testnet-1.roburna.com/')
//let provider = ethers.getDefaultProvider('https://eth-goerli.alchemyapi.io/v2/rr_rfvIEYniAMzCuEGufDbt7ebMWV1JO')

/*
Token Locker Fuctions
____________________________________________________________________________________________________________-
*/
export const getStandardNormalLockFee = async () => {
    try {
        const s_lockContract = new ethers.Contract(STANDARD_LOCK_ADDRESS, S_LOCKABI, provider)
        const formatedlockFee = ethers.utils.formatEther(await s_lockContract.feeNormalLock())
        const lockFee = await s_lockContract.feeNormalLock()
        console.log(formatedlockFee)
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
        console.log(formatedlockFee)
        return lockFee
    } catch (error) {
        console.log(error.message)
    }

}

export const fetchTokenDetails = async (type, address) => {

    try {
        const token = new ethers.Contract(address, ERC20ABI, provider)
        const name = await token.name()
        console.log(name)
        const symbol = await token.symbol()
        const decimals = await token.decimals()
        const supply = (await token.totalSupply() / 10 ** decimals).toLocaleString()
        let quotePairName
        let quotePairSymbol
        let basePairName
        let basePairSymbol

        if (type === "LP") {

            const lpToken = new ethers.Contract(address, IUniswapV2Pair.abi, provider)

            const token0 = await lpToken.token0()
            const token1 = await lpToken.token1()

            const quotePair = new ethers.Contract(token0, ERC20ABI, provider)
            const basePair = new ethers.Contract(token1, ERC20ABI, provider)

            quotePairName = await quotePair.name()
            quotePairSymbol = await quotePair.symbol()
            basePairName = await basePair.name()
            basePairSymbol = await basePair.symbol()

        }

        return {
            name: name, symbol: symbol, decimals: decimals, supply: supply,
            quotePairName: quotePairName, quotePairSymbol: quotePairSymbol,
            basePairName: basePairName, basePairSymbol: basePairSymbol
        }


    } catch (error) {
        console.log(error.message)

    }


}

export const approve = async (setIsProccessing, formdata, setPage) => {

    if (typeof window.ethereum === "undefined") {
        alert('Please Install MetaMask')
        console.log('Please Install MetaMask')
    } else
        setIsProccessing(true)
    //connect if not connected
    await window.ethereum.request({ method: "eth_requestAccounts" })

    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()

        if (formdata.tokenType === "standard" || formdata.tokenType === "LP") {
            const ERC20 = new ethers.Contract(formdata.address, ERC20ABI, signer)
            const approve = await ERC20.approve(STANDARD_LOCK_ADDRESS, formdata.amount)
            await approve.wait()

            console.log("Approve", approve)
        }
        else if (formdata.tokenType === "reward") {
            const ERC20 = new ethers.Contract(formdata.address, ERC20ABI, signer)
            const approve = await ERC20.approve(REWARD_LOCK_ADDRESS, formdata.amount)
            await approve.wait()

            console.log("Approve", approve)

        } else {
            console.log("Type not selected")
            alert("type not selected")
        }

    } catch (error) {
        console.log(error.message)
    }
    setIsProccessing(false)
    setPage((currpage) => currpage + 1)
}

export async function lock(setIsProccessing, formdata, setPage) {
    if (formdata.tokenType === "standard") {
        await lockStandard(false, setIsProccessing, formdata)
        setPage(1)
    } else if (formdata.tokenType === "reward") {
        await lockReward(setIsProccessing, formdata)
        setPage(1)
    } else if (formdata.tokenType === "LP") {
        await lockStandard(true, setIsProccessing, formdata)
        setPage(1)
    }
    else {
        alert('Token type not selected')
        console.log('Token type not selected')
    }


}

export async function lockStandard(isLP, setIsProccessing, formdata) {

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


        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const signerAddy = await signer.getAddress()
        console.log(`signer with ${signerAddy}...`)

        const LockContractForSigner = new ethers.Contract(STANDARD_LOCK_ADDRESS, S_LOCKABI, signer)


        try {

            const fee = getStandardNormalLockFee()

            const transactionResponse = await LockContractForSigner.lock(
                signerAddy, tokenAddress, isLP, amount, unlockTimestamp, description, { value: fee })

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


        try {

            const fee = await getRewardNormalLockFee()

            const transactionResponse = await LockContractForSigner.createSimpleLock(
                unlockTimestamp, amount, tokenAddress, { value: fee })

            await listenForTransactionMine(transactionResponse, provider)

        } catch (error) {
            console.log(error)
        }
    } else {
        //lockButton.innerHTML = "Please install MetaMask"
    }

    setIsProccessing(false)
}
/*
LP Loker Functions
______________________________________________________________________________________________
*/

export const fetchLpTokenDitails = async (address) => {
    try {
        const lpToken = new ethers.Contract(address, IUniswapV2Pair.abi, provider)

        const token0 = await lpToken.token0()
        const token1 = await lpToken.token1()

        const quotePair = new ethers.Contract(token0, ERC20ABI, provider)
        const basePair = new ethers.Contract(token1, ERC20ABI, provider)

        const quotePairName = await quotePair.name()
        const quotePairSymbol = await quotePair.symbol()

        const basePairName = await basePair.name()
        const basePairSymbol = await basePair.symbol()

        console.log('token0',)
        console.log('token1', await basePair.name())

        return {
            quotePairName: quotePairName, quotePairSymbol: quotePairSymbol,
            basePairName: basePairName, basePairSymbol: basePairSymbol
        }

    } catch (error) {
        console.error(error)
    }
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

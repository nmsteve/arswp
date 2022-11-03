import { ethers } from "ethers"
import { ERC20ABI } from "./abi"

let provider = ethers.getDefaultProvider('https://data-seed-prebsc-1-s1.binance.org:8545')

export const fetchTokenDetails = async (address) => {
    try {
        const token = new ethers.Contract(address, ERC20ABI, provider)

        if (await token.name()) {
            const name = await token.name()
            console.log(name)
            const symbol = await token.symbol()
            const decimals = await token.decimals()
            const supply = (await token.totalSupply() / 10 ** decimals).toLocaleString()
            return { name: name, symbol: symbol, decimals: decimals, supply: supply }
        } else { }
    } catch (error) {
        console.log(error)
    }


}
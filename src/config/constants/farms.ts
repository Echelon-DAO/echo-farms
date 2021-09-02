import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  
  {
    pid: 0,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'ECHO',
    lpAddresses: {
      97: '0xAa56B5a641F2B5dDF7e8f014463111974AD2F73D',
      56: '0x4297Ec537AA6A024a95B7FDa29352c5bB8ec6c78', 
    },
    tokenSymbol: 'ECHO',
    tokenAddresses: {
      97: '0xAa56B5a641F2B5dDF7e8f014463111974AD2F73D',
      56: '0x6aaa14929d74b8533343c1a5b6e42443f59b6f6f',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },



  {
    pid: 1,
    risk: 5,
    platfrom:"PancakeSwap",

    lpSymbol: 'ECHO-BNB',
    lpAddresses: {
      97: '0xe3c51b170b0366a227d72dccdb0e070422ee85f7',
      56: '0x4297Ec537AA6A024a95B7FDa29352c5bB8ec6c78', // ECHO-BNB LP
    },
    tokenSymbol: 'ECHO',
    tokenAddresses: {
      97: '0xA73D61379627dB94f968C7bb4BD7fF5c07723Ec2',
      56: '0x6aaa14929d74b8533343c1a5b6e42443f59b6f6f',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },





  {
    pid: 2,
    risk: 5,
    lpSymbol: 'ECHO-BUSD',
    platfrom:"PancakeSwap",
    lpAddresses: {
      97: '0x9c87298cF7055edD49fDa6989c933AE900CF6864',
      56: '0x3551Ad2AF9363ff2311Eb94AA3282DA420681f97', // ECHO-BNB LP
    },
    tokenSymbol: 'ECHO',
    tokenAddresses: {
      97: '0xAa56B5a641F2B5dDF7e8f014463111974AD2F73D',
      56: '0x6aaa14929d74b8533343c1a5b6e42443f59b6f6f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    
  },



  {
    pid: 3,
    risk: 5,
    lpSymbol: 'BNB-BUSD',
    platfrom:"PancakeSwap",

    lpAddresses: {
      97: '0x9c87298cF7055edD49fDa6989c933AE900CF6864',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // ECHO-BNB LP
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xAa56B5a641F2B5dDF7e8f014463111974AD2F73D',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    
  },







  {
    pid: 4,
    risk: 5,
    lpSymbol: 'ECHO-BNB',
    platfrom:"ApeSwap",

    lpAddresses: {
      97: '0x9c87298cF7055edD49fDa6989c933AE900CF6864',
      56: '0x83fecf82d5f83de0b71c6c6adfa015ceb4e783d4', // ECHO-BNB LP
    },
    tokenSymbol: 'ECHO',
    tokenAddresses: {
      97: '0xAa56B5a641F2B5dDF7e8f014463111974AD2F73D',
      56: '0x6aaa14929d74b8533343c1a5b6e42443f59b6f6f',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    
  },



  {
    pid: 5,
    risk: 5,
    lpSymbol: 'ECHO-BUSD',
    platfrom:"ApeSwap",

    lpAddresses: {
      97: '0x9c87298cF7055edD49fDa6989c933AE900CF6864',
      56: '0x8b034e644e7ec2f115b6035dde45bd80bb72972b', // ECHO-BNB LP
    },
    tokenSymbol: 'ECHO',
    tokenAddresses: {
      97: '0xAa56B5a641F2B5dDF7e8f014463111974AD2F73D',
      56: '0x6aaa14929d74b8533343c1a5b6e42443f59b6f6f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    
  },


]

export default farms

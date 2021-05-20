import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.echoswap.app/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.echoswap.app/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: 'Voting (Coming Soon)',
    href: '/comingsoon',
    icon: 'NftIcon',
  },

  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
      label: 'IFO',
      icon: 'GroupsIcon',
      href: 'https://docs.google.com/forms/d/1HJCHwZ4XGDCktfNAYALEzHMkq2yTPs5X-cDUuOeTtcs/',
  },


 
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x6aaa14929d74b8533343c1a5b6e42443f59b6f6f',
      },
      {
        label: 'ECHO token Address',
        href: 'https://bscscan.com/address/0x6aaa14929D74b8533343C1A5b6e42443f59b6F6F',
      },
      {
        label: 'LOCKED Liquidity',
        href: 'https://cryptexlock.me/pair/0xC75D369eE2Baf51151462E39162BB530abb3487d',
      },
      {
        label: 'USD CHART',
        href: 'https://www.livecoinwatch.com/price/EchelonDAO-ECHO',
      },
      {
        label: 'Echelon Podcast',
        href: 'https://anchor.fm/Echo-engage',
      },
    ],
  },

  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Github',
      //   href: 'https://github.com/goosedefi/',
      // },
      // {
      //   label: 'Docs',
      //   href: 'https://goosedefi.gitbook.io/goose-finance/',
      // },
      {
        label: 'Blog',
        href: 'https://echelondao.medium.com/echelon-dao-d7ab030ac02d',
      },
    ],
  },
  
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config

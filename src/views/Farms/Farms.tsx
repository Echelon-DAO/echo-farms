import React, { useEffect, useCallback, useState } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Image, Heading } from '@pancakeswap-libs/uikit'
import { BLOCKS_PER_YEAR,  } from 'config'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useFarms, usePriceBnbBusd, usePriceCakeBusd } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { QuoteToken } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import FarmTabButtons from './components/FarmTabButtons'
import Divider from './components/Divider'
import Coming from "../Pools/components/Coming"

export interface FarmsProps {
  tokenMode?: boolean
}

const Farms: React.FC<FarmsProps> = (farmsProps) => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const farmsLP = useFarms()
  const cakePrice = usePriceCakeBusd()
  const bnbPrice = usePriceBnbBusd()
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const { tokenMode } = farmsProps

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const [stakedOnly, setStakedOnly] = useState(false)

  const activeFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier !== '0X')
  const inactiveFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier === '0X')

  const stakedOnlyFarms = activeFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )

  // /!\ This function will be removed soon
  // This function compute the APY for each farm and will be replaced when we have a reliable API
  // to retrieve assets prices against USD
  const farmsList = useCallback(
    (farmsToDisplay, removed: boolean) => {
      // const cakePriceVsBNB = new BigNumber(farmsLP.find((farm) => farm.pid === CAKE_POOL_PID)?.tokenPriceVsQuote || 0)
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        // if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
        //   return farm
        // }
        const cakeRewardPerBlock = new BigNumber(farm.eggPerBlock || 1)
          .times(new BigNumber(farm.poolWeight))
          .div(new BigNumber(10).pow(18))
        const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR)

        let apy = cakePrice.times(cakeRewardPerYear)

        let totalValue = new BigNumber(farm.lpTotalInQuoteToken || 0)

        if (farm.quoteTokenSymbol === QuoteToken.BNB) {
          totalValue = totalValue.times(bnbPrice)
        }

        if (totalValue.comparedTo(0) > 0) {
          apy = apy.div(totalValue)
        }

        return { ...farm, apy }
      })
      return farmsToDisplayWithAPY.map((farm) => (
        <FarmCard
          key={farm.pid}
          farm={farm}
          removed={removed}
          bnbPrice={bnbPrice}
          cakePrice={cakePrice}
          ethereum={ethereum}
          account={account}
        />
      ))
    },
    [bnbPrice, account, cakePrice, ethereum],
  )

  return (
    <div>
      <Heading style={{ color:"#FFFFFF", backgroundColor: '#5677ba', paddingTop: '40px', paddingBottom: '40px', width: '100%', paddingLeft:"10px", fontSize:"4rem", textAlign:"center" }}>
        {tokenMode ? 'Pools' : 'Farms'}
      </Heading>
      <Page>
        <Heading as="h1" size="lg" color="primary" mb="50px" style={{ textAlign: 'center' }}>
          {tokenMode
            ? TranslateString(10002, 'Stake tokens to earn ')
            : TranslateString(320, 'Stake LP tokens to earn EGG')}
        </Heading>
        <Heading as="h2" color="secondary" mb="50px" style={{ textAlign: 'center', color:"#5677ba" }}>
          {TranslateString(10000, 'Deposit Fee will be used to buyback EGG')}
        </Heading>
        {window.screen.width > 900 && !tokenMode && (
          <Heading style={{ width: '300px', float: 'right', clear: 'left', display: 'inline', marginTop: '-120px' }}>
            <img src="/images/2-01.png" alt="SYRUP POOL icon" width={500} height={200} />
          </Heading>
        )}
        {window.screen.width > 900 && tokenMode && (
          <Heading style={{ width: '300px', float: 'right', clear: 'left', display: 'inline', marginTop: '-120px' }}>
            <img src="/images/3-01.png" alt="SYRUP POOL icon" width={500} height={200} />
          </Heading>
        )}
        <FarmTabButtons stakedOnly={stakedOnly} setStakedOnly={setStakedOnly} />
        <div style={{ marginTop: '30px' }}>
          <Divider />
          <FlexLayout>
            <Route exact path={`${path}`}>
              {stakedOnly ? farmsList(stakedOnlyFarms, false) : farmsList(activeFarms, false)}
              {tokenMode?<Coming />:null}
              
            </Route>
            <Route exact path={`${path}/history`}>
              {farmsList(inactiveFarms, true)}

            </Route>
          </FlexLayout>
        </div>
        {/* <Image src="/images/egg/8.png" alt="illustration" width={1352} height={587} responsive /> */}
      </Page>
    </div>
  )
}

export default Farms
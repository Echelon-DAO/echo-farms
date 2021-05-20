import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout, Button } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import { AiFillGithub, AiFillTwitterCircle, AiFillMediumCircle } from 'react-icons/ai'

import { FaTelegram, FaDiscord } from 'react-icons/fa'

import { BiWorld } from 'react-icons/bi'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'


const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;

  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/4-01.png'), url('/images/5-01.png');
    background-position: left center, right center;
    height: 265px;
    padding-top: 0;
    background-size: 250px;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  const onSocialMediaClicked = (url) => {
    window.open(url, '_blank').focus()
  }
  const socialLinks = [
    'https://github.com',
    'https://echelondao.medium.com/echelon-dao-d7ab030ac02d',
    'https://twitter.com/EchelonDAO',
    'https://discord.gg/MwqeQn83xk',
    'https://t.me/EchelonDAO',
    'https://echelondao.com/',
  ]

  return (
    <Page>
      <Hero>
        <Heading as="h1" style={{ color: '#005596' }} size="xl" mb="24px" color="secondary">
          {TranslateString(576, 'EchoSwap')}
        </Heading>
        
        <div>
          {/* <Button
            style={{ padding: 1, borderRadius: '100%', height: 50, width: 50, margin: 5 }}
            onClick={() => {
              onSocialMediaClicked(socialLinks[0])
            }}
          >
            <AiFillGithub />
          </Button> */}

          <Button
            style={{ padding: 1, borderRadius: '100%', height: 50, width: 50, margin: 5 }}
            onClick={() => {
              onSocialMediaClicked(socialLinks[1])
            }}
          >
            <AiFillMediumCircle />
          </Button>

          <Button
            style={{ padding: 1, borderRadius: '100%', height: 50, width: 50, margin: 5 }}
            onClick={() => {
              onSocialMediaClicked(socialLinks[2])
            }}
          >
            <AiFillTwitterCircle />
          </Button>

          <Button
            style={{ padding: 1, borderRadius: '100%', height: 50, width: 50, margin: 5 }}
            onClick={() => {
              onSocialMediaClicked(socialLinks[3])
            }}
          >
            <FaDiscord />
          </Button>

          <Button
            style={{ padding: 1, borderRadius: '100%', height: 50, width: 50, margin: 5 }}
            onClick={() => {
              onSocialMediaClicked(socialLinks[4])
            }}
          >
            <FaTelegram />
          </Button>

          <Button
            style={{ padding: 1, borderRadius: '100%', height: 50, width: 50, margin: 5 }}
            onClick={() => {
              onSocialMediaClicked(socialLinks[5])
            }}
          >
            <BiWorld />
          </Button>
        </div>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard />
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home

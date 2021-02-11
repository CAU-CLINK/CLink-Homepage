import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect } from 'react'
import { pageview } from 'src/utils/google-analytics'
import { createGlobalStyle } from 'styled-components'
import 'sanitize.css'
import 'antd/dist/antd.css'

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    padding: 0;
    font-size: 16px;
  }
`

// 최대 120자
const description =
  '안녕하세요. 중앙대학교 블록체인 학회 C-Link입니다. 블록체인의 가치를 공부하고 서비스를 개발하여 사회 문제를 해결하고 블록체인의 생태계를 건강하게 발전시키려는 목표를 가지고 있습니다.'

// 최대 10개
const keywords =
  'C-Link, 씨링크, 블록체인, 중앙대학교, 학회, CLink, clink, blockchain, 중앙대, 동아리'

function CLinkApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // Google Analytics로 정보 보내기
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const handleRouteChange = (url: string) => pageview(url)
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default CLinkApp

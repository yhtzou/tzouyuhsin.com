import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import PageTitle from '../components/page-title'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>鄒雨新 Yu-Hsin Tzou – 保持對世界的好奇心</title>
        </Head>
        <Container>
          <PageTitle>yuhsin.tzou</PageTitle>
          <div className='text-base text-slate-600 mb-8'>
            <span>
              👋 嗨！我是雨新，網站還在建設中，歡迎先拜訪我的公開日誌{" "}
            </span>
            <a
              href='/logs'
              className='text-blue-600 underline underline-offset-1 hover:text-blue-800'
              >
              Daily Notes
              </a>
            <span>
              {" "}瀏覽我的成長紀錄！
            </span>
          </div>
        </Container>
      </Layout>
    </>
  )
}
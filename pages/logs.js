import Container from '../components/container'
import List from '../components/List'
import Layout from '../components/layout'
import { getAllLogs } from '../lib/api'
import Head from 'next/head'
import PageTitle from '../components/page-title'

export default function Log({ allLogs }) {
  return (
    <>
      <Layout>
        <Head>
          <title>我的公開日誌 | 鄒雨新 Yu-Hsin Tzou</title>
        </Head>
        <Container>
          <PageTitle>Daily Notes 我的公開日誌</PageTitle>
          <div className='text-base text-slate-600 mb-8'>
            <span>建立公開日誌的初衷，除了記錄自己的學習歷程，也希望透過交流加速迭代思維。</span>
          </div>
          <List logs={ allLogs } />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {

  const allLogs = getAllLogs([
    'title',
    'date',
    'slug',
    'mydate',
    // 'author',
  ])
  return {
    props: { allLogs },
  }
}

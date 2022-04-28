import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
// import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getLogBySlug, getAllLogs } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Log({ log, preview }) {
  const router = useRouter()
  if (!router.isFallback && !log?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        {/* <Header /> */}
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {log.title}
                </title>
                {/* <meta property="og:image" content={log.ogImage.url} /> */}
              </Head>
              <PostHeader
                title={log.title}
                date={log.date}
                author={log.author}
                myDate={log.myDate}
              />
              <PostBody content={log.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const log = getLogBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'myDate',
    'content',
    'author',
    'ogImage',
  ])
  const content = await markdownToHtml(log.content || '')

  return {
    props: {
      log: {
        ...log,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const logs = getAllLogs(['slug'])
  
  return {
    paths: logs.map((log) => {
      return {
        params: {
          slug: log.slug,
        },
      }
    }),
    fallback: false,
  }
}

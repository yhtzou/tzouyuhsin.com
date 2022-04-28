import Footer from '../components/footer'
import Meta from '../components/meta'
import Nav from './nav'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <Nav />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

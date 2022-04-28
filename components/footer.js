import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="flex flex-col md:grid grid-cols-2 h-48 pt-12">
          {/* <a
            href="/log"
            className='text-base text-center text-gray-500 mb-2'
            >
            log
          </a> */}
          <a
            href="https://twitter.com/tzouyuhsin"
            className='text-base text-center md:text-left text-slate-400 rounded-lg hover:underline duration-200 mb-2'
            target="_blank"
            >
            Twitter
          </a>
          {/* <span className='col-span-3 flex justify-center'>Built with Love</span> */}
        </div>
      </Container>
    </footer>
  )
}

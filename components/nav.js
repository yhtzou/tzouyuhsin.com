import Link from 'next/link'
import Container from './container'

export default function Nav(){
  return (
    <Container>
      <div class='-ml-3 mt-4 mb-12 flex justify-center md:justify-start'>
        <a
          href='/'
          className='text-base rounded-lg hover:bg-slate-100 duration-200 px-4 py-2'
        >
          Home
        </a>
        <a
          href='/logs'
          className='text-base rounded-lg hover:bg-slate-100 duration-200 px-4 py-2'
        >
          Daily Notes
        </a>
        <a
          // href='/posts'
          className='text-base text-slate-400 px-4 py-2'
        >
          🚧 Blog
        </a>
      </div>
    </Container>
  )
}
import Link from 'next/link'
import DateFormatter from './date-formatter'

export default function ListCard({
  title,
  date,
  mydate,
  slug,
}) {
  return (
    <div className='py-2'>
      <Link href={`/logs/${slug}`}>
        <a>
          <div className='flex'>
            <div className='w-[5.5rem] self-center text-sm text-slate-300 rounded-md mr-2'>
              <DateFormatter dateString={date} />
            </div>
            <h3 className="grow text-lg font-medium leading-snug hover:pl-4 duration-200 ease-in-out ">
              {title}
            </h3>
          </div>
        </a>
      </Link>
    </div>
  )
}
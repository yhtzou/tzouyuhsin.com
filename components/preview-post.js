import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PreviewPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className='border-2 border-transparent hover:border-black mb-4'>
      <Link href={`/posts/${slug}`}>
        <a className='grid grid-cols-10'>
          <div className='col-span-2'>
            <CoverImage
              slug={slug}
              title={title}
              src={coverImage}
              height={400}
              width={400}
            />
          </div>
          <div className='col-span-8 p-4'>
            <h3 className="text-xl font-semibold mb-3 leading-snug">
              {title}
            </h3>
            {/* <div className="text-md mb-4">
              <DateFormatter dateString={date} />
            </div> */}
            <p className="text-md leading-relaxed">{excerpt}</p>
            {/* <Avatar name={author.name} picture={author.picture} /> */}
          </div>
        </a>
      </Link>
    </div>
  )
}

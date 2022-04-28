import ListCard from './listCard'

export default function List({ logs }) {
  return (
    <section>
      <div className="grid grid-cols-1">
        {logs.map((log) => (
          <ListCard
            key={log.slug}
            title={log.title}
            date={log.date}
            mydate={log.mydate}
            author={log.author}
            slug={log.slug}
          />
        ))}
      </div>
    </section>
  )
}

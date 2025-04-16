type Props = {
  authorName: string
  title: string
  content: string
}

export default function Post({ authorName, title, content }: Props) {
  return (
    <li className="border border-white p-6 flex flex-col gap-4 text-white">
      <h2 className="font-bold text-lg">{title}</h2>
      <p>{content}</p>
      <p>Author: {authorName}</p>
    </li>
  )
}

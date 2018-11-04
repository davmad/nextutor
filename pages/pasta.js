import Link from 'next/link'

const Post = props => (
  <li>
    <Link as={`/${props.slug}`} href={`/pastel?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <div>
    <h2>My blog</h2>
    <ul>
      <Post slug='yet-another-post' title='Yet another post' />
      <Post slug='second-post' title='Second post' />
      <Post slug='hello-world' title='Hello, world!' />
    </ul>
  </div>
)

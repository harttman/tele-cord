export default function Post(props) {
  return (
    <div>
      [Пост] {props.name}: {props.content}
      <br/>
      <span>Лайки {props.like ?? 0}</span>
    </div>
  )
}
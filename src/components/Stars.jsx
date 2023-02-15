import Star from "./star";

export default function Stars(props) {
  const { count } = props;

  if (count < 1 || count > 5 || typeof count !== 'number') {
    return (<></>)
  }

  return (
      <ul className="card-body-stars u-clearfix">
        {Array.from(Array(count), (e, i) => (
          <Star key={i} />
        ))}
      </ul>
    );
}
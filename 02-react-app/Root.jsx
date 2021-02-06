export default function Root(props) {
  return (
    <div>
      {props.name} is mounted! Auth token is {props.authToken}
    </div>
  );
}

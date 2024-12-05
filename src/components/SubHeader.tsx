export default function SubHeader(props: { subtitle: string }) {
  const subtitleStyle = {
    marginBottom: "0.5rem",
    fontSize: "1.2rem",
  };
  return (
    <>
      <h2 style={subtitleStyle}>{props.subtitle}</h2>
    </>
  );
}

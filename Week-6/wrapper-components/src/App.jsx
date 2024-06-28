function App() {
  return (
    <div>
      <CardComponent>
        <TextComponent />
      </CardComponent>
      <CardComponent>
        <DynamicText text={"Dynamically Passing The Text"} />
      </CardComponent>
    </div>
  );
}
function TextComponent() {
  return <div> Hello World </div>;
}

function DynamicText({ text }) {
  return <div>{text}</div>;
}

function CardComponent({ children }) {
  return <div style={{ border: "1px solid red" }}>{children}</div>;
}

export default App;

const Welcome = (props) => {
  return <div>{props.children}</div>;
};

const App = () => {
  return (
    <Welcome>
      <h1>Hello, World!</h1>
      <p>Welcome to React.</p>
    </Welcome>
  );
};


export default App

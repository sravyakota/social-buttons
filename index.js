const Button = (props) => {
  const { className, name } = props;
  return <button className={"button ${className}"}>{name}</button>;
};

const element = (
  <div className="bgContainer">
    <div className="card">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttonsContainer">
        <Button name="Like" className="button1" />
        <Button name="Comment" className="button2" />
        <Button name="Share" className="button3" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

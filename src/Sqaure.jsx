import "./App.css";

const Sqaure = (props) => {
  return (
    <div onClick={props.onClick} className="square">
      <h6>{props.value}</h6>
    </div>
  );
};

export default Sqaure;

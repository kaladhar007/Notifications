const primary = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png";
const success = "https://assets.ccbp.in/frontend/react-js/success-icon-img.png";
const warning = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png";
const danger = "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png";

const Notification = (props) => {
  //  Write your code here.
  const { imgUrl, paraText, bgColor } = props;
  return (
    <div className={`note_div ${bgColor}`}>
      <img src={imgUrl} className="image" />
      <p>{paraText}</p>
    </div>
  );
};

const element = (
  <div className="total_div">
    <h1>Notifications</h1>
    <Notification
      bgColor="primary"
      imgUrl={primary}
      paraText="Information messages"
    />
    <Notification
      bgColor="success"
      imgUrl={success}
      paraText="Success messages"
    />
    <Notification
      bgColor="warning"
      imgUrl={warning}
      paraText="warning messages"
    />
    <Notification bgColor="danger" imgUrl={danger} paraText="Danger messages" />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

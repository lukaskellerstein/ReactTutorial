import rempl from "rempl";
import { getRandomInt } from "../../business/utils";

const UpcomingEventsPage = (props: any) => {
  // var myTool2 = rempl.createPublisher(
  //   "react-tutorial-Upcoming-Events",
  //   function (settings: any, callback: any) {
  //     //callback(null, "url", "//localhost:3000");
  //     // do nothing
  //   }
  // );

  const sendMessage = () => {
    const rndNumber = getRandomInt(1, 100);
    // console.log("sendMessage", rndNumber);
    // myTool2.publish(rndNumber);
  };

  return (
    <>
      <div>Upcoming Events Page</div>
      <button onClick={sendMessage}>CLICK to SEND MESSAGE</button>
    </>
  );
};

export default UpcomingEventsPage;

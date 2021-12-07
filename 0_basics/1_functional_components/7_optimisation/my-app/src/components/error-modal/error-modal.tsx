import { Card, CardBody, CardHeader } from "@fluentui/react-northstar";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./error-modal.scss";

type ErrorModalProps = {
  opened: boolean;
  title: string;
  message: string;
};

const MyCustomModal = (props: ErrorModalProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (props.opened) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [props]);

  const overlayClick = () => {
    setOpen(false);
  };

  if (open) {
    return (
      <>
        <div className="my-custom-modal">
          <Card>
            <CardHeader title={props.title} />
            <CardBody>{props.message}</CardBody>
          </Card>
        </div>
        <div className="modal-overlay" onClick={overlayClick}></div>
      </>
    );
  } else {
    return null;
  }
};

// -----------------------------------------------
// Without React Portal
// -----------------------------------------------
// const ErrorModal = (props: ErrorModalProps) => {
//   return <MyCustomModal {...props} />;
// };

// -----------------------------------------------
// With React Portal
// -----------------------------------------------
const ErrorModal = (props: ErrorModalProps) => {
  return (
    <>
      {createPortal(
        <MyCustomModal {...props} />,
        document.getElementById("modal-root")!
      )}
    </>
  );
};

export default ErrorModal;

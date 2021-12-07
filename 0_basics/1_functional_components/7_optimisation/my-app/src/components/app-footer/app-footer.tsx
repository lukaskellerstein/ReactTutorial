import "./app-footer.scss";

const AppFooter = (props: any) => {
  return (
    <div className={props.theme + "-theme app-footer-container"}>
      <div className="col-1">Created by Lukas Kellerstein</div>
      <div className="col-2">12/04/2021</div>
    </div>
  );
};

export default AppFooter;

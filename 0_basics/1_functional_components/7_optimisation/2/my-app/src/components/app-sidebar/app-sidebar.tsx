import { Menu } from "@fluentui/react-northstar";
import { Logger } from "../../business/logger";

type AppSidebarProps = {
  selectedMenuItem: string;
  onMenuItemSelected: (menuItemName: string) => void;
};

const AppSidebar = (props: AppSidebarProps) => {
  const logger = new Logger("app-sidebar", "#ebe134");

  const menuItemClick = (event: any) => {
    const value = event.target.innerText.toLowerCase().split(" ").join("-");

    logger.logComponent(value);
    props.onMenuItemSelected(value);
  };

  let selectedIndex = -1;
  switch (props.selectedMenuItem) {
    case "products":
      selectedIndex = 0;
      break;
    case "orders":
      selectedIndex = 1;
      break;
    case "upcoming-events":
      selectedIndex = 2;
      break;

    default:
      selectedIndex = -2;
      break;
  }

  return (
    <Menu
      onItemClick={menuItemClick}
      defaultActiveIndex={selectedIndex}
      vertical
      pointing
    >
      <Menu.Item index={0}>
        <Menu.ItemContent>Products</Menu.ItemContent>
      </Menu.Item>
      <Menu.Item index={1}>
        <Menu.ItemContent>Orders</Menu.ItemContent>
      </Menu.Item>
      <Menu.Item index={2}>
        <Menu.ItemContent>Upcoming Events</Menu.ItemContent>
      </Menu.Item>
    </Menu>
  );
};

export default AppSidebar;

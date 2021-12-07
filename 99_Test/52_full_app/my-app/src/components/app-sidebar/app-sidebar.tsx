import { Menu } from "@fluentui/react-northstar";

const AppSidebar = () => {
  return (
    <Menu defaultActiveIndex={0} vertical pointing>
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

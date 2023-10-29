import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import menuData, { menuItems } from '../../router'

const { Sider } = Layout
const { SubMenu } = Menu

const generateMenuItems = (menuItem: menuItems[]) => {
  return menuItem.map((item) => {
    if (item.children) {
      return (
        <SubMenu key={item.key} icon={item.icon} title={item.label}>
            {generateMenuItems(item.children)}
        </SubMenu>
      )
    } else {
      return (
        <Menu.Item key={item.key} icon={item.icon}>
          <Link to={`${item.path}`}>{item.label}</Link>
        </Menu.Item>
      )
    }
  })
}

const menuContent = () => {
  return (
    <Sider width={200} style={{ background: 'white' }}>
        <Menu mode="inline" defaultOpenKeys={['farmOverview']}>
            {generateMenuItems(menuData)}
        </Menu>
    </Sider>
  )
}

export default menuContent
import React, { Component } from 'react';
import './index.css';
import { Icon, Menu, Layout, Button, Dropdown, Divider } from 'antd';
import { FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const { Header } = Layout;
const { SubMenu } = Menu;

class HeaderLayout extends Component {

  render() {
  
    return (
      <Header className="header">
        <Menu mode="horizontal">
          <Menu.Item key="home" className="header-logo">
            <img src="https://aisyatech.com/wp-content/uploads/2020/11/Logo-Aisyatechnology-2017-Final-NEW-Padding.png" />
          </Menu.Item>
          <Menu.Item key="home">
            <Link to="/">About</Link>
          </Menu.Item>
          <Menu.Item key="find-recipe">
            <Link to="/find/recipe">Team</Link>
          </Menu.Item>
          <Menu.Item key="find-recipe">
            <Link to="/find/recipe">Blog</Link>
          </Menu.Item>
          <Menu.Item key="find-recipe">
            <Link to="/find/recipe">FAQ</Link>
          </Menu.Item>
          {/* <Menu.Item key="find_chef">
            <Link to="/find/chef">Find Chef</Link>
          </Menu.Item> */}
          <Menu.Item className="pr-1" key="new-recipe">
            <Link to="/dashboard/new-recipe"><Button type="primary"><FaPhone /> &nbsp; Contact Us</Button></Link>
          </Menu.Item>
          <Menu.Item className="pl-1" key="profile">
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default HeaderLayout;

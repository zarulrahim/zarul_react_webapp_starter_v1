import React, { Component } from 'react';
import './index.css';
import { Layout } from 'antd';

const { Footer } = Layout;

class FooterLayout extends Component {

  render() {
    
    return (
      <Footer className="footer">
        <span>Copyright 2020 &copy; <b>aisyatech.com</b></span>
      </Footer>
    );
  }
}

export default FooterLayout;

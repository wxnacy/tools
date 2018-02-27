import React, { PureComponent } from 'react';
import { Layout, Menu } from 'antd';
const { Header } = Layout;


export default class Editor extends PureComponent {

    // constructor(props) {
        // super(props);
    // }

    render() {
        const {defaultSelectedKeys} = this.props;
        return (
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={defaultSelectedKeys}
                    style={{ lineHeight: '64px' }} >
                    <Menu.Item key="run">OnLine HTML</Menu.Item>
                    <Menu.Item key="wapi">Wapi</Menu.Item>
                </Menu>
            </Header>
        )
    }
}

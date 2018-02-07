import React, { PureComponent } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import { fetchPost, fetchGet } from './utils.js'
import { Tabs, Button, Input } from 'antd';
import { Layout, Menu, Breadcrumb, Icon,  Select } from 'antd';

import 'brace/mode/json';
import 'brace/theme/monokai';
const Option = Select.Option;

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const TabPane = Tabs.TabPane;

const HTTP_HEAD = 'https://wxnacy.com'
export default class Run extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            url: 'https://ipapi.co/json/',
            method: 'GET',
            result: '{}'
        }
        this.id = this.props.match.params.id || "";
    }

    initData() {
    }

    componentDidMount() {
        // this.initData()
    }

    send() {
        console.log(this.state);
        fetchGet(this.state.url).then(data => {
            console.log(data);
            this.setState({result: data})
        })
    }

    save() {

    }

    onLoad(value){
        console.log(" onLoad", value);
        this.setState({result: this.state.result})
    }

    onChange(newValue, mode) {
        if( mode === "html" ){
            this.setState({htmlText: newValue});
        } else if( mode === "javascript" ){
            this.setState({jsText: newValue});
        } else if( mode === "css" ){
            this.setState({cssText: newValue});
        }
        console.log(newValue, mode);

    }

    onSelectInput(value) {
        console.log("input ", value);
    }


    initEditor(mode, value) {

        return (
            <AceEditor
                style={{width: "100%"}}
                mode={mode}
                theme="monokai"
                name={mode}
                onLoad={(newValue) => this.onLoad(newValue)}
                onChange={(newValue) => this.onChange(newValue, mode)}
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                editorProps={{$blockScrolling: true}}
                value={value}
                setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: false,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2,
                }}/>
        )
    }

    onChangeUrl(e) {
        this.setState({url: e.target.value})
    }
    onDescChange(value) {
        this.setState({description: value})
    }
    
    

    render() {
        const urlBefore = (
            <Select defaultValue="GET" style={{ width: 90 }}>
                <Option value="GET">GET</Option>
                <Option value="POST">POST</Option>
                <Option value="PUT">PUT</Option>
                <Option value="DELETE">DELETE</Option>
            </Select>
        );

        const {htmlText, cssText, jsText} = this.state
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">在线html</Menu.Item>
                        <Menu.Item key="2">Wapi</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
                <div style={{ marginBottom: 16 }}>
                    <Input style={{width: "80%"}} addonBefore={urlBefore}  value={ this.state.url } onChange={ this.onChangeUrl.bind(this) } />
            <Button style={{marginLeft: 10}} type="primary" onClick={ this.send.bind(this) } >Send</Button>
                        </div>
                        { this.initEditor('json', this.state.result) }
                </Content>
            </Layout>
        )
    }
}

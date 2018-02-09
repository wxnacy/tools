import React, { PureComponent } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import { fetchPost, fetchGet } from './utils.js'
import { Tabs, message, Button, Input } from 'antd';
import { Spin, Layout, Menu, Breadcrumb, Icon,  Select } from 'antd';
import Editor from './component/Editor'
// import './component/Main.css'

import 'brace/mode/json';
import 'brace/theme/monokai';
const Option = Select.Option;

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const TabPane = Tabs.TabPane;
const { TextArea  } = Input;

const HTTP_HEAD = 'https://wxnacy.com'
export default class Run extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            url: 'https://ipapi.co/json',
            method: 'GET',
            params: '',
            result: '',
            filter: '',
            loading: false
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
        this.setState({loading: true})
        let params = {
            method: this.state.method
        }
        fetch(this.state.url, params).then(res => {
            return res.json()
        }).then(data => {
            console.log(data);
            this.setState({result: JSON.stringify(data, null, 4)})
            this.setState({loading: false})
        }).catch(e => {
            this.setState({loading: false})
            console.log(e);
            message.error(e.message)
        })
    }

    filter() {
        console.log(this.state.filter);
        let data = this.state.result;
        let filter = this.state.filter;
        console.log(filter.split(','));
        let filters = filter.split(',')
        let result = {}
        for(let v of filters){
            result[v] = data[v]
        }
        this.setState({result: JSON.stringify(result, null, 4)})
    }

    onLoad(value){
        console.log(" onLoad", value);
        this.setState({result: this.state.result})
    }

    onChangeEditor(newValue, name) {
        if( name === 'params' ){
            this.setState({params: newValue})
        } else if( name === 'result' ){
            this.setState({result: newValue})
        }
    }

    onSelectInput(value) {
        console.log("input ", value);
    }


    initEditor(mode, value, name='', style={}) {
        let thisStyle = Object.assign(style, {
            width: "100%"
        })
        let readOnly = false
        if( name === 'result' ){
            readOnly = true
        }

        return (
            <AceEditor
                style={thisStyle}
                mode={mode}
                theme="monokai"
                name={name}
                onLoad={(newValue) => this.onLoad(newValue)}
                onChange={(newValue) => this.onChangeEditor(newValue, name)}
                readOnly={readOnly}
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

    onChangeResult(value) {
        this.setState({result: value})
        console.log(this.state);
    }

    onChangeMethod(value) {
        this.setState({method: value})
    }

    onChangeFilter(e) {
        this.setState({filter: e.target.value})
    }

    render() {
        const urlBefore = (
            <Select defaultValue="GET" onChange={ this.onChangeMethod.bind(this) } style={{ width: 90 }}>
                <Option value="GET">GET</Option>
                <Option value="POST">POST</Option>
                <Option value="PUT">PUT</Option>
                <Option value="DELETE">DELETE</Option>
            </Select>
        );

        const {htmlText, cssText, jsText} = this.state

        const paramsStyle = {
            background: '#fff',
            padding: 14,
            margin: 0,
            minHeight: 280,
        }
        const resultStyle = {
            background: '#fff',
            padding: 14,
            margin: 0,
            minHeight: 280,
        }
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
                <Content style={{ background: '#fff', padding: 24, margin: 0}}>
                    <Input style={{width: "80%"}} addonBefore={urlBefore}  value={ this.state.url } onChange={ this.onChangeUrl.bind(this) } />
                    <Button style={{marginLeft: 10}} type="primary" onClick={ () => this.send() } >Send</Button>
                </Content>
                <Layout>
                    <Sider width={1}></Sider>
                    <Layout>
                    <Content style={paramsStyle} >
                    Params
                    <Tabs defaultActiveKey="1" >
                        <TabPane tab="json" key="1">
                        { this.initEditor('json', this.state.params, 'params') }
                        </TabPane>
                    </Tabs>
                    </Content>
                    </Layout>
                    <Layout>
                    <Content style={resultStyle}>
                    Response
                    <div>
                    <Input
                        placeholder="Filter like : id, name, user, user.id"
                        style={{marginBottom: 15, marginTop: 15, width: "80%"}}
                        value={this.state.filter}
                        onChange={ this.onChangeFilter.bind(this) }/>
                    <Button
                        style={{marginLeft: 10}}
                        type="primary"
                        onClick={ () => this.filter() } >Filter</Button>
                    </div>
                    <Spin spinning={this.state.loading}>
                    { this.initEditor('json', this.state.result, 'result') }
                    </Spin>
                    </Content>
                    </Layout>
                </Layout>


            </Layout>
        )
    }
}
                // <!--<TextArea rows={25} value={ this.state.result } onChange={ (value) => this.onChangeResult(value) } />-->

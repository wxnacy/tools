import React, { PureComponent } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/css';
import 'brace/mode/html';
import 'brace/mode/javascript';
import 'brace/mode/json';
import 'brace/theme/monokai';


export default class Editor extends PureComponent {

    constructor(props) {
        super(props);
    }

    onChange(value) {
        const { onChange } = this.props;
        if( onChange ){
            onChange(value)
        }
    }

    onLoad(value) {
        const { onLoad } = this.props;
        if( onLoad ){
            onLoad(value)
        }
    }

    render() {
        const {mode, name, value, ...otherProps} = this.props.mode;
        return (
            <AceEditor
                {...otherProps}
                style={{width: "100%"}}
                mode={mode}
                theme="monokai"
                name={name}
                onLoad={ this.onLoad.bind(this) }
                onChange={(newValue) => this.onChange(newValue)}
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
}

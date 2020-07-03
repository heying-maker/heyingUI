import React from 'react';
import ReactDom from 'react-dom';
import {Radio }from '../src/index'

const Demo  = () => {
  return <div>
    <h1>组件预览：</h1>
    单选框：<Radio clsPrefix="11" disabled="true"/>
  </div>
}

ReactDom.render(<Demo />, document.getElementById('root'));
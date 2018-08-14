import React from 'react';
import ReactDOM from 'react-dom';

import WeiboList from './WeiboList.js';
import {WeiboDatas} from '../data/data.js';


ReactDOM.render(<WeiboList data={WeiboDatas.data}/>,document.getElementById('container'));
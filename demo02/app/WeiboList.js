import React, {Component, PropTypes} from 'react';

// 导入微博列表组件
import WeiboListItem from './WeiboListItem.js';

export default class WeiboList extends Component {
    constructor(props){
        super(props);
    }

    render(){
        var listView = this.props.data.map(function(item, index){
            return (
                <WeiboListItem itemData={item} key={index}/>
            )
        });

        return (<div>{listView}</div>);
    }
}

WeiboList.propTypes = {};
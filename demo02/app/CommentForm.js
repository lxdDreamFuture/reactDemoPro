import React, {Component, PropTypes} from 'react';
import styles from '../css/commentStyle.css';
import {myselfInfo} from '../data/data.js';
import CommentReplyList from './CommentReplyList';

/**
 * @desc 取得当前时间
 * */ 
function getCurrentFormatDate() {
    var date = new Date();
    var separate1 = '-';
    var separate2 = ':';
    var month = date.getMonth()+1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentDate = date.getFullYear()+separate1+month+separate1+strDate+' '+
                        date.getHours()+separate2+date.getMinutes()+separate2+date.getSeconds();
    return currentDate;
}

/**
 * 评论组件
 * */ 
export default class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            replyContents:[],//默认回复内容为空
        }
    }

    render(){
        // 遍历评论内容
        var replyContentDatas = this.state.replyContents.map(function(item, index){
            return (
                <CommentReplyList key={index} reply={item}/>
            )
        })

        return (
            <div className={styles.rootView}>
                <div className={styles.headView}>
                    <img src={myselfInfo.headImg} className={styles.img}></img>
                    <div className={styles.textareaViewStyle}>
                        <textarea cols='4' rows='4' ref='content'/>
                        <button className={styles.commentBtnStyle} onClick={this._reply.bind(this)}>评论</button>
                    </div>
                </div>
                {replyContentDatas}
            </div>
        )
    }

    /**
     * 回复评论功能
     * */ 
    _reply() {
        let currentTime = getCurrentFormatDate();
        // 取得回复内容
        let replyContent = this.refs.content.value;
        if(replyContent.length==0) {
            alert('评论内容不能为空')
            return false;
        }
        let newContent = {
            content:replyContent,
            name:'嘻嘻哈哈',
            time:currentTime
        }
        // 取得老的回复内容
        let oldReplyContent = this.state.replyContents;
        let newReplyContents = oldReplyContent.concat(newContent);
        this.setState({
            replyContents:newReplyContents
        });

        this.refs.content.value = '';
    }
}
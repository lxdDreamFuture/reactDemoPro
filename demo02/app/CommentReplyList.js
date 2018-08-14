import React, {Component, PropTypes} from 'react';
import styles from '../css/commentStyle.css';
import {myselfInfo} from '../data/data.js';

export default class CommentReplyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:this.props.reply
        }
    }

    render() {
        let replyContent = this.state.data;

        return (
            <div className={styles.commentListStyle}>
                <img src={myselfInfo.headImg} className={styles.img} />
                <div className={styles.commentContentStyle}>
                    <div className={styles.nickNameStyle}>
                        <span>{myselfInfo.nickname}</span>
                        <span>{replyContent.content}</span>
                    </div>
                </div>
                <span className={styles.timeSize}>{replyContent.time}</span>
            </div>
        )
    }
}

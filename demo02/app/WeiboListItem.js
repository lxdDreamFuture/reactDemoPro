import React , {Component, PropTypes} from 'react';
import styles from '../css/ListItemStyle.css';
import CommentForm from './CommentForm';
import CommentListImgs from './CommentListImgs.js';
/**
 * 微博评论列表组件
 * */ 
export default class WeiboListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            // 是否点击评论按钮标志
            isComment: false,
            // 默认的条目数据
            itemData:this.props.itemData,
            // 点赞数
            likenum:this.props.itemData.NoCollect
        }
    }

    render(){
        let data = this.props.itemData;
        return (
            <div>
                {this._renderHeadView(data)}
                <hr className={styles.hrStyle}/>
                {this._renderFooterView(data)}
                {this.state.isComment? <CommentForm /> : null}
            </div>
        )
    }

    /**
     * 渲染顶部view
     * */ 
    _renderHeadView(data){
        return (
            <div className={styles.item}>
                <img src={data.headUrl} className={styles.imgStyle}></img>
                <div className={styles.topRightView}>
                    <div className={styles.nickNameAndSendTime}>
                        <span>{data.nickName}</span>
                        <span>{data.sendTime}</span>
                    </div>
                    <p>{data.content}</p>
                    {data.contentImgs?<CommentListImgs imgUrls={data.contentImgs} />:null}
                </div>
            </div>
        )
    }
    /**
     * 渲染底部view
     * */ 
    _renderFooterView(data){
        return (
            <div className={styles.commentViewStyle}>
                <ul className={styles.ulStyle}>
                    <li className={styles.liStyle} onClick={this._likes.bind(this)}>点赞：{this.state.likenum}</li><div className={styles.shuxian}></div>
                    <li className={styles.liStyle} onClick={this._comment.bind(this)}>评论：{data.NoComment}</li><div className={styles.shuxian}></div>
                    <li className={styles.liStyle} onClick={this._forward.bind(this)}>转发：{data.NoPointGreat}</li>
                </ul>
            </div>
        )
    }
    /**
     * 评论方法
     * */ 
    _comment() {
        this.setState({
            isComment: true
        });
    }
    /**
     * 点赞方法
     * */ 
    _likes() {
        this.setState({
            isComment:false,
            likenum:parseInt(this.state.likenum)+1
        });
    }
    /**
     * 转发方法
     * */ 
    _forward() {
        this.setState({
            isComment:false
        });
    }
}
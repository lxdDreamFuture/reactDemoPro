import React, {Component, PropTypes} from 'react';
import styles from '../css/commentImgsStyle.css';

export default class CommentListImgs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let imgs = this.props.imgUrls.map(function(item, index){
            return (
                <li key={index} className={styles.liStyle}>
                    <img src={item} className={styles.imgStyle}/>
                </li>
            )
        });

        return (
            <ul className={styles.ulStyle}>
                {imgs}
            </ul>
        )
    }
}
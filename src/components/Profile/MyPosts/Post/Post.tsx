import React, {useState} from 'react';
import styles from "./Post.module.css";
import user from "./../../../../assets/images/user.png";
import like from "./../../../../assets/images/like.png";

type PostPropsType = {
    message: string
    likesCount: number
    photo: string
    name: string
}

const Post = (props: PostPropsType) => {
    const [likes, setLikes] = useState(props.likesCount);
    const likeCountChange = () => {
      setLikes(likes + 1)
    }
    return (
        <div className={styles.item}>
            <div className={styles.postBody}>
                <div className={styles.postAvatar}>
                    <img
                        src={props.photo || user}
                        alt={"photo"}/>
                    <span className={styles.name}>{props.name}</span>
                </div>
                <div className={styles.message}>{props.message}</div>
            </div>
            <div>
                <span>
                    <img className={styles.likeIcon} src={like} alt={'like'} onClick={likeCountChange} />
                    {/*{props.likesCount}{props.likesCount > 1 ? ' likes' : ' like'}*/}
                    {likes}{likes > 1 ? ' likes' : ' like'}
                </span>
            </div>
        </div>
    );
}

export default Post;
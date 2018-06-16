import Hashtags from './Hashtags';

const Post = ({user, children, hashtags}) => {
    return <div>
        <h3>{user}</h3>
        <p>{children}</p>
        <Hashtags>{hashtags}</Hashtags>
    </div>
}

export default Post;

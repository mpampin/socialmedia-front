const Hashtags = ({children}) => {
    return children.map((hashtag) => (<span>#{hashtag}</span>))
}

export default Hashtags;
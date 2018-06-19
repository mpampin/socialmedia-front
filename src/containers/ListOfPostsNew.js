import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ErrorMessage from '../components/ErrorMessage';
import Post from '../components/Post';
import {
  Row
} from 'react-materialize';

function PostList({
  data: { loading, error, socialmediaPosts }
}) {
  if (error) return <ErrorMessage message="Error cargando el listado de posts." />
  if (!loading) {
    return (
      <div>
          {socialmediaPosts.map((post) => (
            <Row><Post user={post.user} hashtags={post.hashtags}>{post.message}</Post></Row>
          ))}
      </div>
    )
  }
  return <div>Cargando...</div>
} 

const allPosts = gql`
  query allPosts($interest: String!) {
    socialmediaPosts(interest: $interest) {
      user
      message
      hashtags
    }
  }
`

export default graphql(allPosts, {
  options: (ownProps) => ({
    variables: {
      interest: ownProps.interest
    }
  })
})(PostList)


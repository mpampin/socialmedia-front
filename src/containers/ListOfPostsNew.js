import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ErrorMessage from '../components/ErrorMessage';
import Post from '../components/Post';
import {
  Row,
  Button
} from 'react-materialize';

const POSTS_PER_PAGE = 10

function PostList({
  data: { loading, error, socialmediaPosts, _socialmediaPostsMeta },
  loadMorePosts
}) {
  if (error) return <ErrorMessage message="Error cargando el listado de posts." />
  if (socialmediaPosts && socialmediaPosts.length) {
    const areMorePosts = socialmediaPosts.length < _socialmediaPostsMeta.count
    return (
      <div>
          {allPosts.map((post) => (
            <Row><Post user={post.user} hashtags={post.hashtags}>{post.message}</Post></Row>
          ))}
        {areMorePosts ? (
          <Button onClick={() => loadMorePosts()}>
            {loading ? 'Cargando...' : 'Mostrar más'}
          </Button>
        ) : (
          ''
        )}
      </div>
    )
  }
  return <div>Cargando...</div>
} 

const allPosts = gql`
  query allPosts($interest: String!, $first: Int!, $skip: Int!) {
    socialmediaPosts(interest: $interest, first: $first, skip: $skip) {
      user
      message
      hashtags
    }
    _socialmediaPostsMeta {
      count
    }
  }
`

export default graphql(allPosts, {
  options: (ownProps) => ({
    variables: {
      skip: 0,
      first: POSTS_PER_PAGE,
      interest: ownProps.interest
    }
  }),
  props: ({ data }) => ({
    data,
    loadMorePosts: () => {
      return data.fetchMore({
        variables: {
          skip: data.allPosts.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            socialmediaPosts: [...previousResult.socialmediaPosts, ...fetchMoreResult.socialmediaPosts]
          })
        }
      })
    }
  })
})(PostList)


import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {
  Row
} from 'react-materialize';
import { Component } from 'react';
import ErrorMessage from '../components/ErrorMessage';
import Post from '../components/Post';


class PostList extends Component {

  constructor(props) {
    super();
    this.state = {
      loading: props.data.loading,
      error: props.data.error,
      socialmediaPosts: props.data.socialmediaPosts,
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      loading: props.data.loading,
      error: props.data.error,
      socialmediaPosts: props.data.socialmediaPosts
    });

  }

  componentWillMount() {
    this.props.data.subscribeToMore({
      document: postsUpdates,
      variables: {
        interest: this.props.interest,
      },
      updateQuery: (prev, {subscriptionData}) => {
        this.addPosts(subscriptionData.data.socialmediaPostsUpdates);
      }
    });
  }
  
  render() {
    if (this.state.error) return <ErrorMessage message="Error cargando el listado de posts." />
    if (!this.state.loading) {
      return (
        <div>
            {this.state.socialmediaPosts.map((post) => (
              <Row><Post user={post.user} hashtags={post.hashtags}>{post.message}</Post></Row>
            ))}
        </div>
      )
    }
    return <div>Cargando...</div>
  }

  addPosts(posts) {
    let state = this.state;
    state.socialmediaPosts = [...posts, ...state.socialmediaPosts];
    console.log(state);
    this.setState(state);
  }

};

const allPosts = gql`
  query allPosts($interest: String!) {
    socialmediaPosts(interest: $interest) {
      user
      message
      hashtags
    }
  }
`

const postsUpdates = gql`
  subscription postsUpdates($interest: String!) {
    socialmediaPostsUpdates(interest: $interest) {
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


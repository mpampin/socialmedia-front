import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Post from "../components/Post";
import { 
  Row,
  Input
} from "react-materialize";

const handler = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.socialmediaPosts.map(({ user, message, hashtags }) => (
    <Row><Post user={user} hashtags={hashtags}>{message}</Post></Row>
  ));
};

class ListOfPosts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      posts: []
    };
    
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({searchQuery: gql`
      {
        socialmediaPosts(interest: "${event.target.value}") {
          user
          message
          hashtags
        }
      }
      `,
      posts: []
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Input label="Query # or @" onChange={this.handleChange} />
        </Row>
        { this.state.searchQuery && 
          (<Query query={this.state.searchQuery}>
            {handler}
          </Query>)
        }
      </div>
    );
  }
}

export default ListOfPosts;
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Post from "../components/Post";

const query = gql`
{
  socialmediaPosts(interest: "#StarWars") {
    user
    message
    hashtags
  }
}
`;

const handler = ({ loading, error, data }) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.socialmediaPosts.map(({ user, message, hashtags }) => (
        <Post user={user} hashtags={hashtags}>{message}</Post>
    ));
};

export default () => (
  <Query query={query}>
    {handler}
  </Query>
);

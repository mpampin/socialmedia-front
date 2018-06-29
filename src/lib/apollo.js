import {withData} from 'next-apollo';
import {HttpLink} from 'apollo-link-http';
import {WebSocketLink} from 'apollo-link-ws';
import {split} from 'apollo-client-preset';
import {getMainDefinition} from 'apollo-utilities';
import config from '../../config'

export default withData(() => {
  const httpLink = new HttpLink({
    uri: config.graphqlServer.queryUrl
  });

  return {
    link: process.browser
      ? split(
        ({query}) => {
          const {kind, operation} = getMainDefinition(query);

          return 'OperationDefinition' === kind && 'subscription' === operation;
        },
        
        new WebSocketLink({
          uri: config.graphqlServer.subscriptionUrl,
          options: {reconnect: true}
        }),
        httpLink
      )
      : httpLink
  };
});
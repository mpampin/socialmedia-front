module.exports = {
    port: process.env.PORT || 3000,
    graphqlServer: {
        queryUrl: process.env.GRAPHQL_QUERY || "https://socialmedia-graphql.herokuapp.com/graphql",
        subscriptionUrl: process.env.GRAPHQL_SUBSCRIPTION || "ws://socialmedia-graphql.herokuapp.com/subscriptions"
    }
}
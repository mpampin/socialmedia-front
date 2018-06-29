module.exports = {
    port: process.env.PORT || 3000,
    graphqlServer: {
        queryUrl: process.env.GRAPHQL_QUERY || "http://localhost:4000/graphql",
        subscriptionUrl: process.env.GRAPHQL_SUBSCRIPTION || "ws://localhost:4000/subscriptions"
    }
}
import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'
import config from '../../config'

const link = {
  link: new HttpLink({
    uri: config.graphqlServer.url
  })
}

export default withData(link)
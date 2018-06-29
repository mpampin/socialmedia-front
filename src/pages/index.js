import Layout from '../containers/Layout';
import ListOfPosts from '../containers/ListOfPosts';
import Search from '../components/Search';
import withData from '../lib/apollo';
import { Component } from 'react';

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      interest: ""
    };

    this.changeInterest = this.changeInterest.bind(this);

  }

  changeInterest(interest) {
    this.setState({ interest });
  }

  render() {
    return <Layout>
      <Search onChange={this.changeInterest} />
      { this.state.interest && <ListOfPosts interest={this.state.interest} /> }
    </Layout>
  }

}

export default withData(Index)
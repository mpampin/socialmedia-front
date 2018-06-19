import { Component } from 'react';
import { Input, Icon } from 'react-materialize';

const WAIT_INTERVAL = 1500;
const ENTER_KEY = 13;

class Search extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.triggerChange = this.triggerChange.bind(this);
  }

  componentWillMount() {
    this.timer = null;
  }

  handleChange(e) {
    clearTimeout(this.timer);
    this.setState({ search: e.target.value });
    this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
  }

  handleKeyDown(e) {
    if (e.keyCode === ENTER_KEY) {
      clearTimeout(this.timer);
      this.triggerChange();
    }
  }

  triggerChange() {
    this.props.onChange(this.state.search);
  } 
  
  render() {
    return <Input label="Buscar # o @" onChange={this.handleChange} onKeyDown={this.handleKeyDown}><Icon>search</Icon></Input>
  }

}

export default Search;
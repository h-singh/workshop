import React from 'react';
import { connect } from 'react-redux';

class Root extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnSub = this.handleOnSub.bind(this);
        this.handleOnAdd = this.handleOnAdd.bind(this);
        this.handleOnRandom = this.handleOnRandom.bind(this);
        console.log('My Props', this.props);
        console.log('My State', this.state);
    }

    componentDidMount() {
        this.setState({counter: this.props.counter});
        console.log('My Updated State', this.state);
    }

    handleOnAdd() {
        this.props.dispatch({type: 'ADD', bumpBy: 5});
    }

    handleOnSub() {
        this.props.dispatch({type: 'SUB'});
    }

    handleOnRandom() {
        this.props.dispatch({type: 'RAND'});
    }

    render() {
        const counter = this.state && this.state.counter || 'NA';
        return (<div>
            <div>{counter}</div>
            <button onClick={this.handleOnAdd} style={{width: '80px', height: '25px'}}>+</button>
            <button onClick={this.handleOnSub} style={{width: '80px', height: '25px'}}>-</button>
        </div>);
        //<button onClick={this.handleOnRandom} style={{width: '80px', height: '25px'}}>Random</button>
    }

    componentWillReceiveProps(nextProps) {
        console.log('Setting nextProps', nextProps);
        this.setState({counter: nextProps.counter});
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('state', state, ' ownProps', ownProps);
    const {root} = state;
    return {...root};
}

export default connect(mapStateToProps)(Root);

import React from 'react';

export class Hello2 extends React.Component {

    state = {
        segundos : 0
    }

    componentDidMount(){
        this.setState({segundos: this.state.segundos+1});
    }

    componentDidUpdate(){
        setTimeout(() => {
            this.setState({segundos: this.state.segundos+1});
        }, 1000);
    }

    render(){
        const {text} = this.props;
        const {segundos} = this.state;

        return (
            <div>
                <h1>{text}</h1>
                <h2>{segundos}</h2>
            </div>
        );
    }
} 
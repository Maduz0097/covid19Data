import React from 'react';
import axios from 'axios';


export default class Corona extends React.Component{
    state = {
         coronaCases: []
    }

    componentDidMount(){
        axios.get('https://www.hpb.health.gov.lk/api/get-current-statistical').then(res => {
           this.setState({coronaCases: res.data});
        });
    }

    render(){
        return <ul>{this.state.coronaCases.map(person => <li>{person.local_new_cases}</li>)}</ul>;
    }

}
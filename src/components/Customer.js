import React from 'react';

class Customer extends React.Component {
    render() {
        return (
            <div>
                <CustomerProfile id={this.props.id} name={this.props.name}/>
                <CustomerInfo date={this.props.date} coment={this.props.coment}/>
            </div>
        );
    }
}

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.date}</p>
                <p>{this.props.coment}</p>
            </div>
        );
    }
}

class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.id}</p>
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default Customer;
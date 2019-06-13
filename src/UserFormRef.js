import React from 'react'

class NameField extends React.Component {
    constructor(props) {
        super(props);

        let isValid = this.validate(props.value);
        this.state = {
            value: props.value,
            valid: isValid
        }

        this.onChange = this.onChange.bind(this);     
    }

    onChange(e) {
        let val = e.target.value;
        let isValid = this.validate(val);

        this.setState({value: val, valid: isValid});
    }

    validate(val) {
        return val.length>0;
    }

    render() {
        let color = this.state.valid ? "green" : "red";
        return (
            <div>
                <label>Name: </label>
                <input type="text" 
                    value={this.state.value} 
                    onChange={this.onChange} 
                    style={{borderColor: color}} 
                    className="form-control">
                </input>
            </div>
        );
    }
       
}
class AgeField extends React.Component {
    constructor(props) {
        super(props);

        let isValid = this.validate(props.value);
        
        this.state = {
            value: props.value,
            valid: isValid
        };

        this.onChange = this.onChange.bind(this);
        
    }

    onChange(e) {
        let val = e.target.value;
        let isValid = this.validate(val);

        this.setState({value: val, valid: isValid});
    }

    validate(val) {
        return (val>0 && val.length>0);
    }

    render() {
        let color = this.state.valid ? "green" : "red";
        return (
            <div>
                <label>Age: </label>
                <input type="number" 
                    value={this.state.value} 
                    onChange={this.onChange} 
                    style={{borderColor: color}} 
                    className="form-control">
                </input>
            </div>
        )
    }
}
    
class UserFormRef extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();

        let name = this.refs.nameField.state.value;
        let age = this.refs.ageField.state.value;
        if (this.refs.nameField.state.valid && this.refs.ageField.state.valid) {
            alert("Name: " + name + " Age " + age);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-group">
                <NameField value="" ref="nameField" />
                <AgeField value="22" ref="ageField" />
                <input type="submit" className="btn btn-primary mt-2" value="Send"></input>

            </form>
        )
    }
}

export default UserFormRef;
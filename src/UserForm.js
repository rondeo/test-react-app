import React from 'react'


class UserForm extends React.Component {
    constructor(props) {
        super(props);

        let {name, age} = props;

        let nameIsValid = this.validName(name);
        let ageIsValid = this.validAge(age);

        this.state = {
            name: name,
            age: age,
            validName: nameIsValid,
            validAge: ageIsValid,
            
        };
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validName(name) {
        return name.length > 2;

    }
    validAge(age) {
        return (age >= 0 && age.length > 0);

    }

    onChangeName(e) {
        let val = e.target.value;
        let valid = this.validName(val);
        this.setState({name: val, validName: valid});        
    }
    onChangeAge(e) {
        let val = e.target.value;
        let valid = this.validAge(val);
        this.setState({age: val, validAge: valid});        
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.validName === true && this.state.validAge === true) {
            alert("Name: " + this.state.name + " Age: " + this.state.age);
        }

    }
    
    render() {

        let nameColor = this.state.validName === true ? "green" : "red";
        let ageColor = this.state.validAge === true ? "green" : "red";

        return (
            <form onSubmit={this.handleSubmit} className="w-75">
                <div className="form-group">
                    <label for="nameInput">Name: </label>
                    <input type="text" id="nameInput" className="form-control"
                        style={{borderColor: nameColor}} 
                        value={this.state.name}
                        onChange={this.onChangeName}>
                    </input>
                </div>

                <div className="form-group">
                    <label for="ageInput">Age: </label>
                    <input type="number" id="ageInput" className="form-control" 
                        style={{borderColor: ageColor}}
                        value={this.state.age}
                        onChange={this.onChangeAge}>
                    </input>
                </div>
                {/* <button type="submit" className="btn btn-success" value="send">Submit</button> */}
                {/* <input type="submit" className="btn btn-success btn-lg" value="Send" /> */}
                <input type="submit" value="Отправить" />
                
            </form>
            )
        }
  }

export default UserForm;

import React from 'react';


class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count1: 5,
            varValue: 0,
        }
    }
    async componentDidMount(){
        const data = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/support?")
        const json = await data.json();
        console.log(json)
    }
    render(){
        const {text1,text2} = this.props;
        const {count,count1,varValue} = this.state;
        return (
            <div className="textContent">
                    <h3>{text1}</h3>
                    <h3> Count: {count}</h3>
                    <h3> Count1: {count1}</h3>
                    <button onClick={() => {
                        
                        if( varValue < 5){
                            this.setState({
                                count:  this.state.count + 1,
                                count1: this.state.count1 - 1, 
                                varValue: this.state.varValue + 1,
                            })
                        }
                        else{
                            this.setState({
                                count:  this.state.count - 1,
                                count1: this.state.count1 + 1, 
                            })
                            if (count == 1){
                                this.setState({
                                    varValue: 0,
                                })
                            }
                        }
                    }}>Update Counter </button>
                    <h2><b>{text2}</b></h2>
                </div>
        )
    }

}

export default UserClass;
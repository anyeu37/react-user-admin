import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            isHidden:true
        }
    }
    changeHidden = () => {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    displayButton = () => {
        if(this.state.isHidden){
            return <div className="btn btn-outline-success btn-block mb-3" onClick={this.changeHidden}>Dong lai</div>
        }else {
            return <div className="btn btn-outline-info btn-block mb-3" onClick={this.changeHidden} >Them moi</div>
        }
    }
    displayForm = () => {
        if(this.state.isHidden){
            return(
                <div className="card border-success mb-3">
                    <div className="card-header">Add user</div>
                    <div className="card-body text-success">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Ten user" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Dien thoai" />
                    </div>
                    <div className="form-group">
                        <select className="form-control" >
                        <option>Chon quyen</option>
                        <option>Admin</option>
                        <option>Modrator</option>
                        <option>Nomarl</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <div className="btn btn-success btn-block">
                        Them moi
                        </div>
                    </div>
                    </div>
                </div>
            );
        }
    }
    render() {
        return (
            <div className="col-lg-3">
                {
                    this.displayButton()
                }
                {
                    this.displayForm()
                }
            </div>
        );
    }
}

export default AddUser;
import React, { Component } from 'react';

class AddUser2 extends Component {
    constructor(){
        super();
        this.state = {
            id:"",
            name:"",
            phone:"",
            permission:"",
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value,

        });
        var item = {};
        item.id = this.state.id;
        item.name = this.state.name;
        item.phone = this.state.phone;
        item.permission = this.state.permission;
    }
    displayForm = () => {
        if(this.props.isHidden){
            return(
                <div className="col">
                    <form>
                        <div className="card border-success mb-3">
                            <div className="card-header">Add user</div>
                            <div className="card-body text-success">
                            <div className="form-group">
                                <input onChange={(e)=>this.isChange(e)} name="name" type="text" className="form-control" placeholder="Ten user" />
                            </div>
                            <div className="form-group">
                                <input onChange={(e)=>this.isChange(e)} name="phone" type="text" className="form-control" placeholder="Dien thoai" />
                            </div>
                            <div className="form-group">
                                <select className="form-control" name="permission" onChange={(e)=>this.isChange(e)} >
                                <option>Chon quyen</option>
                                <option value="1">Admin</option>
                                <option value="2">Modrator</option>
                                <option value="3">Nomarl</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="reset"
                                    className="btn btn-success btn-block" 
                                    onClick={(name,phone,permission)=>this.props.getNewUserData(this.state.name,this.state.phone,this.state.permission)}
                                    value="Thêm mới"
                                />
                            </div>
                            </div>
                        </div>
                    </form>
                </div>
            );
        }return true;
    }
    render() {       
        return (
            <div>
                {
                    this.displayForm()
                }
            </div>
        );
    }
}

export default AddUser2;
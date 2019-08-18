import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.editUserObject.id,
            name: this.props.editUserObject.name,
            phone: this.props.editUserObject.phone,
            permission: this.props.editUserObject.permission,

        }
    }
    isChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        this.setState({
            [ name ]: value
        });
    }
    saveEditUser = () => {

        var info = {};

        info.id = this.state.id;
        info.name = this.state.name;
        info.phone = this.state.phone;
        info.permission = this.state.permission;
        
        this.props.getEditUserInfo(info);
        
        this.props.changeEditUserStatus();// hidden form
        
    }
    render() {
        return (
            <div className="col-lg-12">
                <div className="card border- mb-3">
                    <div className="card-header bg-dark text-white">Edit user</div>
                    <div className="card-body text-success ">
                        <form className="form-inline">
                            <div className="form-group w-25">
                                <input defaultValue={this.props.editUserObject.name} onChange={(e) => this.isChange(e)} name="name" type="text" className=" w-100 form-control" placeholder="Ten user" />
                            </div>
                            <div className="form-group w-25">
                                <input defaultValue={this.props.editUserObject.phone} onChange={(e) => this.isChange(e)} name="phone" type="text" className=" w-100 form-control" placeholder="Dien thoai" />
                            </div>
                            <div className="form-group w-25" >
                                <select className="form-control w-100" name="permission" onChange={(e) => this.isChange(e)} defaultValue={this.props.editUserObject.permission} >
                                <option>Chon quyen</option>
                                <option value="1">Admin</option>
                                <option value="2">Modrator</option>
                                <option value="3">Nomarl</option>
                                </select>
                            </div>
                            <div className="form-group w-25">
                                <input type="button"
                                    className="btn btn-success btn-block w-100" 
                                    onClick = {() => this.saveEditUser()}
                                    value="Lưu"
                                />
                            </div>
                        </form>
                    </div>   
                </div>
            </div>
        );
    }
}

export default EditUser;
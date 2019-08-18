import React, { Component } from 'react';

class TableDataRow extends Component {
    displayPermission = () => {
        if(this.props.permission === 1){
            return "Admin"
        }else if(this.props.permission === 2){
            return "Manage"
        }else return "Nember"
    }
    editUserClick = () => {
        this.props.editUser();
        this.props.changeEditUserStatus();
    }
    deleteUserClick = (userId) => {
        this.props.deleteUser(userId);
    }
    render() {
        const { name, phone, stt, id } = this.props;
            
        return(
            <tr key={stt}>
                <td>{stt+1}</td>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{this.displayPermission()}</td>
                <td>
                <div className="btn-group">
                    <div className="btn btn-warning edit" 
                        onClick ={() => this.editUserClick()}
                    >
                        <i className="fa fa-edit" /> 
                                Edit
                    </div>
                    <div className="btn btn-danger delete" onClick={(userId)=>this.deleteUserClick(id)}><i className="fa fa-trash-o" /> Delete</div>
                </div>
            </td>
        </tr>
        );
    }
}

export default TableDataRow;
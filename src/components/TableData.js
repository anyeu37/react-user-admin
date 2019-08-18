import React, { Component } from 'react';
import TableDataRow from "./TableDataRow";

class TableData extends Component {
  
    displayTableDataRow = () => {
        return(
          this.props.data.map((item,key) => {
            return(
              <TableDataRow
                key={key}
                id={item.id}
                name={item.name}
                phone={item.phone}
                permission={item.permission}
                stt={key}
                editUser={(user)=>this.props.editUser(item)}
                changeEditUserStatus ={() => this.props.changeEditUserStatus()}
                deleteUser = {(userId)=>this.props.deleteUser(userId)}
              />
            );
          }
        )
      )
    }
    render() {
        return (
            <div className="col">
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>Setting</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.displayTableDataRow()
                }
              </tbody>
            </table>
          </div>          
        );
    }
}

export default TableData;
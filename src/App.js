import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Search from "./components/Search";
import TableData from "./components/TableData";
import AddUser2 from "./components/AddUser2";
import DataUser from "./components/db.json";

const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(){
    super();
    this.state = {
      isHidden: false,
      data: [],
      searchText: '',
      isEditForm: false,
      editUserObject: {}
    }
  }
  componentDidMount(){
    if(localStorage.getItem("userData") === null){
      localStorage.setItem("userData",JSON.stringify(DataUser))
    }else {
      var data = JSON.parse(localStorage.getItem("userData"));
      this.setState({
        data:data
      })
    }
  }
  changeForm = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  getTextSearch = (dl) => {
   this.setState({
     searchText: dl
   });
  }

  getNewUserData = (name,phone,permission) => {
    var newUser = {};
    newUser.id = uuidv1();
    newUser.name=name;
    newUser.phone=phone;
    newUser.permission=permission;
    var items = this.state.data;
    items.push(newUser);
    this.setState({
      data:items
    });
    localStorage.setItem("userData",JSON.stringify(items))
  }

  editUser = (user) => {
    this.setState({
      editUserObject:user
    });
  }
  changeEditUserStatus = () => {
    this.setState({
      isEditForm: !this.state.isEditForm
    });
  }
  getEditUserInfoApp = (info) =>{
    this.state.data.forEach((item,key)=>{
      if( item.id === info.id){
        item.id = info.id;
        item.name = info.name;
        item.phone = info.phone;
        item.permission = info.permission;
      }
    });
    localStorage.setItem("userData",JSON.stringify(this.state.data))
  }
  deleteUser = (userId) =>{
    var newData = this.state.data.filter((item)=>item.id !== userId);
    this.setState({
      data:newData
    });
    localStorage.setItem("userData",JSON.stringify(newData  ))
  }
  render(){
    var result = [];
    this.state.data.forEach(item => {
      if(item.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1){
        result.push(item);
      }
    });
    return (
      <div className="App">
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
                getTextSearch={(dl)=>this.getTextSearch(dl)}
                changeForm = { () => this.changeForm()} 
                isHidden = {this.state.isHidden}
                isEditForm = {this.state.isEditForm}
                changeEditUserStatus ={() => this.changeEditUserStatus()}
                editUserObject = {this.state.editUserObject}
                getEditUserInfoApp = {(info)=>this.getEditUserInfoApp(info)}
              />
              <TableData 
                data = {result} 
                changeEditUserStatus ={() => this.changeEditUserStatus()}
                editUser={(user)=>this.editUser(user)}
                deleteUser ={(userId)=>this.deleteUser(userId)}
              />
              <AddUser2 
                isHidden = {this.state.isHidden } 
                getNewUserData = {(name,phone,permission)=>this.getNewUserData(name,phone,permission)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

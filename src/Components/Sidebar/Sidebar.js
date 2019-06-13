import React, { Component } from "react";

import './style.css';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from "../../actions/Actions";

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            widthSidebar: '0',
            listArray: [
                    {title: 'Home', route: '/'},
                    {title: 'Cards', route: '/cards'},
                    {title: 'Settings', route: '/settings'}
                ]
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        this.setState({widthSidebar: '300px'})
    }

    handleClose() {
        this.setState({widthSidebar: '0'})
    }

    render() {
        let { listArray } = this.state;
        const elementsSidebar = listArray.map((item, index) => {
            if(this.props.arrF.length !== 0){
                return (
                    <li key={index} className='header__item header-item'>
                        <Link to={item.route} className='header-item__link'>{item.title}</Link>
                    </li>
                );
            }else {
                if(item.title === 'Cards'){
                    return (
                        <li key={index} className='header__item header-item'>
                            <Link to='/settings' className='header-item__link'>{item.title}</Link>
                        </li>
                    );
                }
                return (
                    <li key={index} className='header__item header-item'>
                        <Link to={item.route} className='header-item__link'>{item.title}</Link>
                    </li>
                );
            }
        });
        return (
            <div>
                <span className='burger' onClick={this.handleOpen}>&#9776;</span>
                <ul className='header__menu' style={{width: this.state.widthSidebar}}>
                    {elementsSidebar}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      arrF: state.dataRange
  }
};

export default connect (mapStateToProps, actions)(Sidebar);
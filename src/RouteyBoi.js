import React, { Component } from 'react';
import { withRouter, Route, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './App.css';

const style = {
  textAlign: 'center',
  margin   : 10
}

const linkStyle = {
  color: 'black',
  margin   : 25
}

// Home
class Home extends Component {
  componentWillMount() {
    console.log("Home component mounting...")
  }

  componentDidMount() {
    console.log("Home component mounted.")
  }

  render() {
    return (
      <h1>Welcome to Router Test</h1>
    )
  }
}

// About
class About extends Component {
  componentWillMount() {
    console.log("About component mounting...")
  }

  componentDidMount() {
    console.log("About component mounted.")
  }

  render() {
    return (
      <h1>This is the About page</h1>
    )
  }
}

// Contact
class Contact extends Component {
  componentWillMount() {
    console.log("Contact component mounting...")
  }

  componentDidMount() {
    console.log("Contact component mounted.")
  }

  render() {
    return (
      <h1>This is the Contact page</h1>
    )
  }
}

// Route Container
class RouteyBoi extends Component {
  routes = [
    { path: '/',
      component: Home
    },
    { path: '/about',
      component: About
    },
    { path: '/contact',
      component: Contact
    }
  ]

  onLinkClick = () => {
    this.props.history.goBack()
  }

  render() {
    console.log("RouteyBoi#render")

    return (
      <div style={ style }>
        <Link style={ linkStyle } to="/">Home</Link>
        <Link style={ linkStyle } to="/about">About</Link>
        <Link style={ linkStyle } to="/contact">Contact</Link>

        {
          this.routes.map((route, index) => (
            <Route exact key={ index } path={ route.path } { ...route }/>
          ))
        }

        <Button onClick={ () => this.onLinkClick() }>Back</Button>
      </div>
    )
  }
}

export default withRouter(RouteyBoi)

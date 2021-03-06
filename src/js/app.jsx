import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import {HomePageTemplate} from 'Home.jsx'
import {Category} from 'category.jsx'
import {ProductDescriptionTemplate} from 'Description.jsx'
import {Cart} from 'cart.jsx'
import {Pay} from 'Pay.jsx'
import {Addres} from 'addres.jsx'
import {Finish} from 'Finish.jsx'
var api = "http://localhost:1337";
export {api}
var app = React.createClass({
	render: function () {
    	return (
    	<Router>
        	<Route path="/" component={HomePageTemplate} /> 
			<Route path="/Categories/:category" component={Category} />
           	<Route path="/Categories/:category/:id" component={ProductDescriptionTemplate} />
			<Route path="/Cart" component={Cart} />
			<Route path="/Cart/Addres" component={Addres} />
			<Route path="/Cart/Addres/Pay" component={Pay} />
			<Route path="/Cart/Addres/Pay/Finish" component={Finish} />
    	</Router>
    );
  }
})
window.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(
        React.createElement(app), 
        document.getElementById('page')
    );
});

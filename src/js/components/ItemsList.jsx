import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
var ItemsList = React.createClass ({
	render: function () {
        
	  var items = this.props.items.map(function(item, key) {
		return (
		  <li className="goods__unit" key = {key}>
		    <Link className="unit-value" to="/Motherboard/GIGABYTE-GA-78LMT-S2" >
		      <figure className="unit-value__figure">
		        <div className={"unit-value__img " + item.img}>
		        </div>
		        <figcaption className="unit-value__figcaption">
		          {item.name}<br />{item.price}
		        </figcaption>
		      </figure>
		    </Link>
		  </li>
		);
	  });
	  return (
		<ul className="goods__folder">
		  {items}
        </ul>			
	  );
	}
})
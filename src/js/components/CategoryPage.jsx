import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
var CategoryPage = React.createClass({
  getDefaultProps: function () {
    return {
      categories: [
        {name:'GIGABYTE-GA-78LMT-S2', img:'elementspagelink__img--img1', price:'$ 555', link:'Motherboard/GIGABYTE-GA-78LMT-S2'}, 
		{name:'GIGABYTE-GA-78LMT-S3', img:'elementspagelink__img--img2', price:'$ 655', link:'GIGABYTE-GA-78LMT-S2'}, 
		{name:'GIGABYTE-GA-78LMT-S4', img:'elementspagelink__img--img3', price:'$ 700', link:'GIGABYTE-GA-78LMT-S2'}, 
		{name:'GIGABYTE-GA-78LMT-S5', img:'elementspagelink__img--img4', price:'$ 900', link:'GIGABYTE-GA-78LMT-S2'}     
      ],
        nav:[
            {name: 'Motherboard', href: 'Motherboard/GIGABYTE-GA-78LMT-S2', img: 'mother'},
            {name: 'CPU', href: 'Motherboard/GIGABYTE-GA-78LMT-S2', img: 'cpu'},
            {name: 'RAM', href: 'Motherboard/GIGABYTE-GA-78LMT-S2', img: 'ram'},
            {name: 'VideoAdapter', href: 'Motherboard/GIGABYTE-GA-78LMT-S2', img: 'video'},
            {name: 'HDD', href: 'Motherboard/GIGABYTE-GA-78LMT-S2', img: 'hdd'},
            {name: 'PowerSource', href: 'Motherboard/GIGABYTE-GA-78LMT-S2', img: 'power'},
            {name: 'Cooling', href: 'Motherboard/GIGABYTE-GA-78LMT-S2', img: 'cooling'}
        ],
    }
  },

  render: function () {
    return (
		<div className="newv__page">	
			<div className="page__header">
				<Header />
			</div>
			
				<Navigation />
			
				<article className="newv__elementspage newv__elementspage--style">        
			  		<div className="newv__viewmode">
						<Link className="newv__elementspagelink" query={{ foo: 'bar' }}  to="/Motherboard/GIGABYTE-GA-78LMT-S2">
						List View
						</Link>
			  		</div>          
			  		<ItemsList categories={this.props.categories} />		
				</article>		
			<Footer />
		</div>		
    );
  }
})
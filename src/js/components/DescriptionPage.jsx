import {ProductDescriptionTemplate} from 'Description.jsx'
import {Header} from 'Header.jsx'
import {Footer} from 'Footer.jsx'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import {Breadcrumb} from 'Breadcrumb.jsx'
var Description = React.createClass({
    getInitialState: function () {
		return {
        id: this.props.params.id,
               };
  	},
    getItemDescription: function(id) {
        var arrid = [
            {id:'GIGABYTE-GA-78LMT-S2', items: 'items1'},
            {id:'GIGABYTE-GA-78LMT-S3', items: 'items2'},
            {id:'GIGABYTE-GA-78LMT-S4', items: 'items3'},
            {id:'GIGABYTE-GA-78LMT-S5', items: 'items4'},

        ];
		for (var i = 0; i <arrid.length; i++) {
            if (id == arrid[i].id) {				
				return this.props[arrid[i].items];
      		}					
		}
    },
    
    getDefaultProps: function () {
        return {
            items1: [
            {name:'GIGABYTE-GA-78LMT-S2',
            description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.',
             price: '$ 555', category: 'Motherboard'}
            ], 
            items2: [
            {name:'GIGABYTE-GA-78LMT-S3',
            description:'ЛАЛАЛАЛАЛАЛАЛАЛАЛЛАЛАЛАЛЛАЛАЛАЛАЛЛАЛАЛА',
             price: '$ 32452345', category: 'Motherboard'}
            ], 
            items3: [
            {name:'GIGABYTE-GA-78LMT-S4',
            description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.',
             price: '$ 555', category: 'Motherboard'}
            ], 
            items4: [
            {name:'GIGABYTE-GA-78LMT-S5',
            description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.',
             price: '$ 555', category: 'Motherboard'}
			],   
        }  
    },
    render: function () {
        return (
        <div className="page">
            <div className="page__header"> 
                <Header />
            </div>
            <div className="page__content"> 
                <Breadcrumb breadcrumb = {this.getItemDescription(this.state.id)} />
                <ProductDescriptionTemplate description={this.getItemDescription(this.state.id)} />
            </div>
            <div className="page__footer"> 
                <Footer />
            </div>
        </div>
        );
  	}
});

export {Description}

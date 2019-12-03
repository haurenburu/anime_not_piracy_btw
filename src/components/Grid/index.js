import React from 'react';

import Materialize from 'materialize-css';


export default class Grid extends React.Component{
    componentDidMount() {
        Materialize.AutoInit();
    }
    render() {
        return (
            <div className="row container">
                <h3 className="teal-text">{this.props.name}</h3>
                <div className="col s12 m6 l4">
                    <a href={"/anime/"+this.props.item1}><img src={"./imgs/"+ this.props.item1+"_.png"} className="responsive-img card"></img></a>
                </div>
                <div className="col s12 m6 l4">
                    <a href={"/anime/"+this.props.item2}><img src={"./imgs/"+ this.props.item2+"_.png"} className="responsive-img card"></img></a>
                </div>
                <div className="col s12 m6 l4">
                    <a href={"/anime/"+this.props.item3}><img src={"./imgs/"+ this.props.item3+"_.png"} className="responsive-img card"></img></a>
                </div>
                <div className="col s12 m6 l4">
                    <a href={"/anime/"+this.props.item1}><img src={"./imgs/"+ this.props.item1+"_.png"} className="responsive-img card"></img></a>
                </div>
                <div className="col s12 m6 l4">
                    <a href={"/anime/"+this.props.item2}><img src={"./imgs/"+ this.props.item2+"_.png"} className="responsive-img card"></img></a>
                </div>
                <div className="col s12 m6 l4">
                    <a href={"/anime/"+this.props.item3}><img src={"./imgs/"+ this.props.item3+"_.png"} className="responsive-img card"></img></a>
                </div>
                <div className="col s12 m6 l4">
                    <a href={"/anime/"+this.props.item1}><img src={"./imgs/"+ this.props.item1+"_.png"} className="responsive-img card"></img></a>
                </div>
                <div className="col s12 m6 l4">
                    <a href={"/anime/"+this.props.item2}><img src={"./imgs/"+ this.props.item2+"_.png"} className="responsive-img card"></img></a>
                </div>
                <div className="col s12 m6 l4">
                    <a href={"/anime/"+this.props.item3}><img src={"./imgs/"+ this.props.item3+"_.png"} className="responsive-img card"></img></a>
                </div>
                
            </div>
        )
    }
}
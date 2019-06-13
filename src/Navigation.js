import React from 'react';
import ReactDOM from 'react-dom'

const propsValues = {
    title: "Lista elementów",
    items: [
        "HTC U Ultra", 
        "iPhone 7", 
        "Google Pixel", 
        "Hawei P9", 
        "Meizu Pro 6", 
        "Asus Zenfone 3"
    ]
}

class Item extends React.Component {
    render() {
        return (
            <li>{this.props.name}</li>
        );
    }
}

class ItemsList extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.data.title}</h2>
                <ul>
                    {
                        this.props.data.items.map(function(item) {
                            return <Item key={item} name = {item} />
                        })
                    }
                </ul>
            </div>
        );
    }
}


// ReactDOM.render(
//     <ItemsList data={propsValues} />,
//     document.getElementById("nav")
// )

export default ItemsList;
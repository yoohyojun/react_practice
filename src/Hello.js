import React, { Component } from 'react';

// function Hello({ color, name, isSpecial }) {
//     return (
//         <div style={{ color }}>
//             안녕하세요 {name}
//             {isSpecial && <b>*</b>}
//         </div>
//     )
// }

class Hello extends Component {

    static defaultProps = {
        name : '이름없음'
    }

    render() {
        const { color, name, isSpecial } = this.props;
        return (
            <div style={{ color }}>
                안녕하세요 {name}
                {isSpecial && <b>*</b>}
            </div>

        )
    }
}


export default Hello;
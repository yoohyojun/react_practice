import react from 'react';

function Hello({ color, name, isSpecial }) {
    return (
        <div style={{ color }}>
            안녕하세요 {name}
            {isSpecial && <b>*</b>}
        </div>
    )
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;
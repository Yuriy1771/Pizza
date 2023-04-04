import React, {useState} from 'react';

function Categories(props) {

    const [activate, setActivate] = useState(null);

    const onSelectItem = (index) => {
        setActivate(index)
    }
    return (
        <div className="categories">
            <ul>
                <li className={activate === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
                {props.items && props.items.map((name, index) => <li onClick={() => {
                    onSelectItem(index)
                }}
                key={`${name}_${index}`}
                className={activate === index ? 'active' : ''}>{name}</li>)}

            </ul>
        </div>
    )
}

export default Categories;
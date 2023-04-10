import React, {useState} from 'react';
import Header from "./Components/header/Header";
import Content from "./Components/content/Content";
import Categories from "./Components/categories/Categories";
import SortPopup from "./Components/sortPopup/SortPopup";

function App() {


    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories
                            items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
                        />
                        <SortPopup/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <Content/>
                </div>
            </div>
        </div>
    );
}

export default App;

import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

import './Item.scss';
import TextClamp from "react-text-clamp";
import { sweetsdata } from './../../data/Data.js';


class Item extends Component {

    state = {
        loadedItem: null,
        sweets : [
            {
                name: 'Снікерс',
                url: 'http://www.sweetstudio.com.ua/wp-content/uploads/2018/03/snikers.jpg',
                description: 'Вологі шоко коржі, крем з маскарпоне, карамель домашня, арахіс, крем сир зверху.',
                price: '450',
                id: 1
            },
            {
                name: 'Шоколадний торт',
                url: 'http://www.sweetstudio.com.ua/wp-content/uploads/2018/10/chokoladnuj.jpg',
                description: 'Насичені шоколадні коржі, шоколадний крем на основі маскарпоне, смородиновий конфітюр, покрито усе шоколадним ганашем на бельгійському шоколаді. Шоко-смородина з шоко кремом (сирний крем).',
                price: '470',
                id: 2
            },
            {
                name: 'Шоколад-маракуя',
                url: 'http://www.sweetstudio.com.ua/wp-content/uploads/2018/10/choko4.jpg',
                description: 'Шоколадний бісквіт, крем на молочному шоколаді, і кисленький центр з маракуї. ',
                price: '480',
                id: 3
            },
            {
                name: 'Медовий торт',
                url: 'http://www.sweetstudio.com.ua/wp-content/uploads/2018/03/medovik.jpg',
                description: '12 тоненьких ароматно-медових коржів та ніжно сметанковий крем грецький горіх. ',
                price: '430',
                id: 4
            },{
                name: 'Естархазі',
                url: 'http://www.sweetstudio.com.ua/wp-content/uploads/2018/03/esterxazi.jpg',
                description: '(безе,горіхи, заварний крем).',
                price: '420',
                id: 5
            },

            {
                name: 'Малиново-Фісташковий',
                url: 'http://www.sweetstudio.com.ua/wp-content/uploads/2018/10/17-1.jpg',
                description: '(ванільний бісквіт, фісташковий мус, малиновий соус, вершково-сирний крем).',
                price: '500',
                id: 6
            },{
                name: 'Орео-кейк',
                url: 'http://www.sweetstudio.com.ua/wp-content/uploads/2018/10/choko.jpg',
                description: '(два шоколадні коржі, чізкейк орео, крем орео в середирі та зверху). ',
                price: '470',
                id: 7
            },{
                name: 'Торт Тірамису',
                url: 'http://www.sweetstudio.com.ua/wp-content/uploads/2018/10/4-1.jpg',
                description: '(ванільний бісквіт пропитаний кавовим сиропом, крем з маскарпоне, какао та кусочки шоколаду або малина на вибір). ',
                price: '420',
                id: 8
            },{
                name: 'Полуниця-базилік',
                url: 'http://www.sweetstudio.com.ua/wp-content/uploads/2018/06/pol_bazilik.jpg',
                description: 'НОВИНКА!!! Ніжний ванільний бісквіт з лимонною ноткою, крем з маскарпоне, конфі з полуниці, базиліку та цедри лайма, а одіте усе у вершковий крем сир.',
                price: '420',
                id: 9
            },{
                name: 'Ваніль-чорниця',
                url: 'http://www.sweetstudio.com.ua/wp-content/uploads/2018/06/35889131_1970385593005971_8700698959590457344_n.jpg',
                description: 'НОВИНКА!!! Ванільні коржі пропитані чорничним соусом, крем з маскарпоне, ніжний чорничний мус з цілими ягодами і одіте усе у вершковий крем сир.',
                price: '440',
                id: 10
            },{
                name: 'Манго-маракуя',
                url: 'http://www.sweetstudio.com.ua/wp-content/uploads/2018/06/vanil_chornica.jpg',
                description: 'НОВИНКА!!! Шоколадні коржі пропитані сиропом з манго та маракуї, вершковий крем сир та ганаш манго-маракуя!',
                price: '550',
                id: 11
            },{
                name: 'Малина з горіховим праліне',
                url: 'http://www.sweetstudio.com.ua/wp-content/uploads/2018/06/malina.jpg',
                description: 'НОВИНКА!! Шоколадні коржі, малиновий мармелад, горіхове праліне (мигдаль, кеш‘ю,фісташка,фундук) і вкутане усе в вершковий крем сир!',
                price: '460',
                id: 12
            }
        ]

    }


    componentDidMount () {
      this.loadData();
        //this.setState({sweets: sweetsdata["sweets"]});
        //console.log (this.state.sweets)
    };

    componentDidUpdate() {
       this.loadData();
       //  this.setState({sweets: sweetsdata["sweets"]});
       //  console.log (this.state.sweets)
    }




    loadData(){
        if (this.props.match.params.id) {
            console.log(this.props.match.params)
            console.log (this.state.sweets)
            let needItem = this.state.sweets.find(need => need.id === +this.props.match.params.id);
            //this.setState({loadedItem: needItem});
            console.log('loadedItem is');
            console.log(needItem);

            // console.log(' if (this.props.id)');
        }
    };

    render () {

        let item = <div> No item selected </div>
        if (this.props) {
            item = <p> Loading ...</p>
        }
        // if (this.state.loadedItem) {
        //     item = (
        //         <div className="SweetItem">
        //             <div className="sweet-logo">
        //                 <img src={props.url} alt={props.name}/>
        //             </div>
        //             <div className="sweet-name">
        //                 <h3><i>"{this.state.loadedItem.name}"</i></h3>
        //             </div>
        //             <div className="sweet-description">
        //                 <TextClamp fontSize={16} maxLines={3} rgbBgColor={'rgb(255,255,255)'} className="line-clamp">
        //                     {/*{props.description}*/}
        //                 </TextClamp>
        //             </div>
        //
        //             <div className="sweet-price">
        //                 <i>Ціна: </i>
        //                 {/*{props.price} грн/кг*/}
        //             </div>
        //             <div className="sweet-price">
        //                 <i>ID: </i>
        //                 {this.props.id} грн/кг
        //                 {this.state.loadedItem.id} грн/кг
        //             </div>
        //             <div className="sweet-delete" onClick={() => this.onDeleteItemHandler(this.props.id)}>Delete</div>
        //         </div>
        //     );
        // }

        if (this.props.match.params.id) {
            let needItem = this.state.sweets.find(need => need.id === +this.props.match.params.id);

            item = (
                <div className="SweetItem">
                    <div className="sweet-logo">
                        <img src={needItem.url} alt={needItem.name}/>
                    </div>
                    <div className="sweet-name">
                        <h3><i>"{needItem.name}"</i></h3>
                    </div>
                    <div className="sweet-description">
                        <TextClamp fontSize={16} maxLines={3} rgbBgColor={'rgb(255,255,255)'} className="line-clamp">
                            {needItem.description}
                        </TextClamp>
                    </div>

                    <div className="sweet-price">
                        <i>Ціна: </i>
                        {needItem.price} грн/кг
                    </div>
                    <div >
                        {/*<i> ID: </i>*/}
                        {/*{needItem.id} грн/кг*/}
                        {/*{this.needItem.id} грн/кг*/}
                    </div>
                    <div className="sweet-delete" onClick={() => this.onDeleteItemHandler(needItem.id)}>Delete</div>
                </div>
            );
        }



        return item
    }
}


//export default Item;
export default withRouter(Item);
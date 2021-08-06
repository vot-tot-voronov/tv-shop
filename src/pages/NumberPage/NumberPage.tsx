import React from 'react'
import BackBtn from '../../components/BackBtn/BackBtn'
import KeyBoard from '../../components/KeyBoard/KeyBoard'
import LeftBlock from '../../components/LeftBlock/LeftBlock'
import {Link} from 'react-router-dom'
import ScanBlock from '../../components/ScanBlock/ScanBlock'

const NumberPage: React.FC = () => {
    return (
        <div className="number-page container">
            <LeftBlock>
                <div className="number-page__content">
                    <h1 className="number-page__title">Введите ваш номер мобильного телефона</h1>
                    <p className="number-page__phone">
                        +7(___)___-__-__
                    </p>
                    <p className="number-page__text">
                        и с Вами свяжется наш менеждер для дальнейшей консультации
                    </p>
                    <KeyBoard />
                    <div className="number-page__check">
                        <input 
                            type="checkbox" 
                            id="number-page__id" 
                            className="number-page__checkbox" 
                            name="agree"
                            value={1} 
                        />
                        <label htmlFor="number-page__id">Согласие на обработку персональных данных</label>
                    </div>
                    <button className="btn number-page__btn">Подтвердить номер</button>
                </div>
            </LeftBlock>
            <div className="number-page__back"><Link to="/"><BackBtn /></Link></div>
            <div className="number-page__scanQr"><ScanBlock /></div>
        </div>
    )
}

export default NumberPage

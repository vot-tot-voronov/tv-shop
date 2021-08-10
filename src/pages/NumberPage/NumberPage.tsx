import React from 'react'
import BackBtn from '../../components/BackBtn/BackBtn'
import KeyBoard from '../../components/KeyBoard/KeyBoard'
import LeftBlock from '../../components/LeftBlock/LeftBlock'
import {Link} from 'react-router-dom'
import ScanBlock from '../../components/ScanBlock/ScanBlock'
import { useData } from '../../components/DataContext/DataContext'

const NumberPage: React.FC = () => {
    const {data} = useData();
    const phoneNumberArray: string[] = data.map(item => {
        if (item === -1) {
            return '_'
        } else {
            return `${item}`;
        }
    });
    const pnoneNumberString: string = [
        '(', ...phoneNumberArray.slice(0, 3), ')', 
        ...phoneNumberArray.slice(3, 6), '-', 
        ...phoneNumberArray.slice(6, 8), '-', ...phoneNumberArray.slice(8)
    ].join('');
    return (
        <div className="number-page container">
            <LeftBlock>
                <div className="number-page__content">
                    <h1 className="number-page__title">Введите ваш номер мобильного телефона</h1>
                    <p className="number-page__phone">
                        {`+7${pnoneNumberString}`}
                        {/* +7(___)___-__-__ */}
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

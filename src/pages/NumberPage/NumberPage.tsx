import React, { useState } from 'react'
import BackBtn from '../../components/BackBtn/BackBtn'
import KeyBoard from '../../components/KeyBoard/KeyBoard'
import LeftBlock from '../../components/LeftBlock/LeftBlock'
import {Link} from 'react-router-dom'
import ScanBlock from '../../components/ScanBlock/ScanBlock'
import { useData } from '../../components/DataContext/DataContext'

const NumberPage: React.FC = () => {
    const [checked, setChecked] = useState<boolean>(false);
    const {data} = useData();
    const phoneNumberArray: string[] = Array.from(data).map(item => {
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
                <h1 className="number-page__title">Введите ваш номер мобильного телефона</h1>
                <p className="number-page__phone">{`+7${pnoneNumberString}`}</p>
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
                        onChange={() => setChecked(prevState => !prevState)}
                        checked={checked} 
                    />
                    <label htmlFor="number-page__id">Согласие на обработку персональных данных</label>
                </div>
                <Link to="/final-page">
                    <button 
                        className={`btn number-page__btn 
                        ${checked ? 'number-page__btn--enabled' : 'number-page__btn--disabled'}`}
                    >
                        Подтвердить номер
                    </button>
                </Link>
            </LeftBlock>
            <div className="number-page__back"><Link to="/"><BackBtn /></Link></div>
            <div className="number-page__scanQr"><ScanBlock /></div>
        </div>
    )
}

export default NumberPage

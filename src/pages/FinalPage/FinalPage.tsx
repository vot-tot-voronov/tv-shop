import React from 'react'
import { Link } from 'react-router-dom'
import BackBtn from '../../components/BackBtn/BackBtn'
import LeftBlock from '../../components/LeftBlock/LeftBlock'
import ScanBlock from '../../components/ScanBlock/ScanBlock'

const FinalPage: React.FC = () => {
    return (
        <div className="final-page container">
            <LeftBlock>
                <h1 className="final-page__title">Заявка принята</h1>
                <p className="final-page__text">Держите телефон под рукой.</p>
                <p className="final-page__text">Скоро с Вами свяжется наш менеджер.</p>
            </LeftBlock>
            <div className="number-page__back"><Link to="/"><BackBtn /></Link></div>
            <div className="number-page__scanQr"><ScanBlock /></div>
        </div>
    )
}

export default FinalPage

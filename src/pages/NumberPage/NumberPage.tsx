import React from 'react'
import KeyBoard from '../../components/KeyBoard/KeyBoard'
import LeftBlock from '../../components/LeftBlock/LeftBlock'

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
                    <button className="btn number-page__btn">Подтвердить номер</button>
                </div>
            </LeftBlock>
        </div>
    )
}

export default NumberPage

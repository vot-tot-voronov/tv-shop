import React from 'react'
import QrCode from '../../components/QrCode/QrCode'
import {Link} from 'react-router-dom'

const BannerPage: React.FC = () => {
    return (
        <div className="video-page container">
            <div className="video-page__banner">
                <p className="video-page__title">
                    ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! <br></br> ПОДАРИТЕ ЕМУ СОБАКУ!
                </p>
                <div className="video-page__qrcode">
                    <QrCode />
                </div>
                <p className="video-page__scanQr">
                    Сканируйте QR-код или нажмите ОК
                </p>
                <Link to="/credential">
                    <button className="btn video-page__btn">OK</button>
                </Link>
            </div>
        </div>
    )
}

export default BannerPage

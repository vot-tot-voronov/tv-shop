import React from 'react'
import QrCode from '../../components/QrCode/QrCode'

const BannerPage: React.FC = () => {
    return (
        <div className="container">
            <div className="video-banner">
                <p className="video-banner__title">
                    ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! <br></br> ПОДАРИТЕ ЕМУ СОБАКУ!
                </p>
                <div className="video-banner__qrcode">
                    <QrCode />
                </div>
                <p className="video-banner__scanQr">
                    Сканируйте QR-код или нажмите ОК
                </p>
                <button className="btn video-banner__btn">OK</button>
            </div>
        </div>
    )
}

export default BannerPage

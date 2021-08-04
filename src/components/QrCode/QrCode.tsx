import React from 'react'
import qrCode from '../../images/qrcode.png'
const QrCode: React.FC = () => {
    return (
        <div className="qr-code">
            <img alt="QR code" src={qrCode} />
        </div>
    )
}

export default QrCode

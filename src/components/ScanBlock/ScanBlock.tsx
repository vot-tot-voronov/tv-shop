import React from 'react'
import QrCode from '../QrCode/QrCode'

const ScanBlock: React.FC = () => {
    return (
        <div className="scan-block">
            <p className="scan-block__text">
                Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
            </p>
            <QrCode />
        </div>
    )
}

export default ScanBlock

import React from 'react'
const LeftBlock: React.FC = ({children}) => {
    return (
        <div className="left-block">
            <div className="left-block__content">
                {children}
            </div>
        </div>
    )
}

export default LeftBlock

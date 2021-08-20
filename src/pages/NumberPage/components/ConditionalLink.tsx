import React from 'react';
import { Link } from 'react-router-dom';

type conditionalLinkProps = {
    correctPhone: boolean,
    setCorrectPhone: Function,
    path: string
}
export const ConditionalLink: React.FC<conditionalLinkProps> = ({correctPhone, setCorrectPhone, path}) => {
    if (!correctPhone) { 
    return <Link to={path}>
            <button
                className={`btn number-page__btn number-page__btn--enabled`}>
                Подтвердить номер
            </button>
        </Link> 
    }
    return <button 
        onClick={() => setCorrectPhone(false)}
        className={`btn number-page__btn number-page__btn--enabled`}>
            Подтвердить номер
        </button>
}
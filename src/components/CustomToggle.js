import React, { useContext } from 'react';
import { useAccordionToggle, AccordionContext, Card } from 'react-bootstrap';
import '../styles/_card.scss';
import { ReactComponent as IconSvg } from '../images/icon-arrow-down.svg';

const CustomToggle = ({ children, eventKey, callback }) => {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey)
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <Card.Header
            type='link'
            style={{
                fontWeight: isCurrentEventKey ? 'bold' : '',
                borderBottom: isCurrentEventKey ? 'none' : '',
            }}
            onClick={decoratedOnClick}>
            {children}
            <button
                className='icon'
                style={{
                    border: 'none',
                    cursor: 'pointer',
                    backgroundColor: '#FFF',
                    float: 'right',
                    transform: isCurrentEventKey ? ' rotate(180deg)' : '',
                    transition: isCurrentEventKey ? '1000ms' : '',
                }}
                onClick={decoratedOnClick}>
                {<IconSvg />}
            </button>
        </Card.Header>
    );
};
export default CustomToggle;

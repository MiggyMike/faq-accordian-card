import React, { useContext } from 'react';
import { useAccordionToggle, AccordionContext, Card } from 'react-bootstrap';
import '../styles/_card.scss';

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
            style={{ fontWeight: isCurrentEventKey ? 'bold' : '' }}
            onClick={decoratedOnClick}>
            {children}
        </Card.Header>
    );
};
export default CustomToggle;

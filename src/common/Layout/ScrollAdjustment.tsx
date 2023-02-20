import { ReactElement } from 'react';

interface ScrollAdjustmentProps {
    elementId: string;
}

const ScrollAdjustment = ({ elementId }: ScrollAdjustmentProps): ReactElement => {
    return <div id={elementId} style={{ position: 'absolute', top: '-200px', left: '0' }}></div>;
};

export default ScrollAdjustment;

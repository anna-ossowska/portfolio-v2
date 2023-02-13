import { ReactElement } from 'react';
import styled from 'styled-components';

const CodingProjectTechnologyList = styled.ul`
    display: flex;
    gap: 18px;
    list-style-type: none;
    font-family: var(--font-family-secondary);
    color: var(--color-text-light-1);

    @media only screen and (max-width: 992px) {
        margin-bottom: 15px;
    }

    & li {
        font-size: 13px;
    }

    @media only screen and (max-width: 992px) {
        flex-wrap: wrap;

        & li {
            margin-bottom: -12px;
        }
    }
`;

interface TechnologyListProps {
    techList: string[];
}
const TechnologyList = ({ techList }: TechnologyListProps): ReactElement => {
    return (
        <CodingProjectTechnologyList>
            {techList.map((el, index) => {
                return <li key={`${techList}-${index}`}>{el}</li>;
            })}
        </CodingProjectTechnologyList>
    );
};

export default TechnologyList;

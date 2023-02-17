import { ReactElement } from 'react';
import styled from 'styled-components';

const ProjectTechnologyList = styled.ul`
    display: flex;
    gap: 18px;
    list-style-type: none;
    font-family: var(--font-family-secondary);
    color: var(--color-text-light-1);
    margin-bottom: 20px;

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
        <ProjectTechnologyList>
            {techList.map((el, index) => {
                return <li key={`techList-${index}`}>{el}</li>;
            })}
        </ProjectTechnologyList>
    );
};

export default TechnologyList;

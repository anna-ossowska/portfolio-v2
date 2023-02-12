import { ReactElement } from 'react';
import styled from 'styled-components';

interface ListProps {
    isTwoColumnLayout: boolean;
}

const List = styled.ul`
    display: grid;
    grid-template-columns: ${({ isTwoColumnLayout }: ListProps) =>
        isTwoColumnLayout ? `repeat(2, minmax(140px, 250px))` : `1fr`};
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

const ListElement = styled.li`
    position: relative;
    margin-bottom: 10px;
    padding-left: 25px;
    font-size: 15px;
    font-family: var(--font-family-secondary);
    color: var(--color-text-light-1);

    @media only screen and (max-width: 600px) {
        font-size: 13px;
    }

    &:before {
        content: '▹';
        position: absolute;
        left: 0;
        top: -2px;
        color: var(--color-text-highlight);
        font-size: 18px;

        @media only screen and (max-width: 600px) {
            top: -4px;
        }
    }
`;

interface StyledListProps {
    skills: string[];
    isTwoColumnLayout: boolean;
}

const StyledList = ({ skills, isTwoColumnLayout }: StyledListProps): ReactElement => {
    return (
        <List isTwoColumnLayout={isTwoColumnLayout}>
            {skills.map((skill, index) => {
                return <ListElement key={`${skill}-${index}`}>{skill}</ListElement>;
            })}
        </List>
    );
};

export default StyledList;

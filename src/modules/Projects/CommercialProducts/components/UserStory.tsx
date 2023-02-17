import { ReactElement } from 'react';
import styled from 'styled-components';

const UserStoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 70px;
    align-items: flex-start;

    & p {
        color: var(--color-text-light-1);
    }

    & img {
        display: inline-block;
        width: 100%;
    }

    &:nth-child(2n + 1) {
        align-items: flex-end;
        text-align: right;
    }
`;

interface UserStoryProps {
    userStory: string;
    userStoryImage: string;
}

const UserStory = ({ userStory, userStoryImage }: UserStoryProps): ReactElement => {
    return (
        <UserStoryWrapper>
            <p>{userStory}</p>
            <img
                src={
                    'https://images.unsplash.com/photo-1538935732373-f7a495fea3f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2459&q=80'
                }
                alt="projectImage"
            />
        </UserStoryWrapper>
    );
};

export default UserStory;

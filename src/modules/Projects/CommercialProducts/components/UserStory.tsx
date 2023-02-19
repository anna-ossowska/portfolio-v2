import { ReactElement } from 'react';
import styled from 'styled-components';
import { userStoriesImagesDto } from '../../../../config/data';

const UserStoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 90px;
    align-items: flex-start;

    & p {
        color: var(--color-text-light-1);
    }

    & img {
        display: inline-block;
        width: 100%;
        margin-bottom: 40px;
        border: solid 0.5px var(--color-text-main);
    }

    &:nth-child(2n + 1) {
        align-items: flex-end;
        text-align: right;
    }
`;

interface UserStoryProps {
    userStory: string;
    imageGroup: number;
    userStoriesImages: userStoriesImagesDto[];
}

const UserStory = ({ userStory, imageGroup, userStoriesImages }: UserStoryProps): ReactElement => {
    return (
        <UserStoryWrapper>
            <p>{userStory}</p>
            <>
                {userStoriesImages.map((el) => {
                    return el.imageGroup === imageGroup && <img src={el.path} alt="projectImage" />;
                })}
            </>
        </UserStoryWrapper>
    );
};

export default UserStory;

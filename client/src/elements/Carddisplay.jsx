import styled from 'styled-components';
import { spacing } from 'utilities';

export const CardDisplay = styled.article`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const CardImage = styled.img`
    height: 250px;
    margin: ${spacing.xs};
    cursor: pointer;
`;

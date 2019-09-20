//* Packages
import React from 'react';
import styled from 'styled-components';
import { animated, useSpring, config } from 'react-spring';

//* Utilities
import { fixed, absolute, Portal } from 'utilities';

//* Elements
import { Card } from './Card';
import Container from './Container';

const Modal = ({ children, setToggle, isToggled }) => {
    // Fade in and slide on enter
    const modalCardProps = useSpring({
        opacity: 1,
        transform: 'translate3d(0, 0px, 0)',
        from: {
            opacity: 0,
            transform: 'translate3d(0, -50px, 0)',
        },
        config: config.wobbly,
    });

    const modalBackgroundProps = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <Portal>
            {isToggled && (
                <ModalWrapper>
                    <Container>
                        <ModalCard style={modalCardProps}>
                            {children}
                            <CloseButton onClick={() => setToggle(false)}>&times;</CloseButton>
                        </ModalCard>
                    </Container>

                    <Background style={modalBackgroundProps} onClick={() => setToggle(false)} />
                </ModalWrapper>
            )}
        </Portal>
    );
};

export default Modal;

//* Styled Components
const ModalWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${fixed({})};
    z-index: 5;
`;

const ModalCard = styled(animated(Card))`
    position: relative;
    z-index: 10;
    min-width: 300px;

    @media screen and (min-width: 576px) {
        min-width: 500px;
    }
    @media screen and (min-width: 768px) {
        min-width: 650px;
    }
`;

const CloseButton = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 10px;
    ${absolute({ x: 'right' })};
    font-weight: bold;
    font-size: 1.5rem;
`;

const Background = styled.div`
    height: 100%;
    width: 100%;
    background: #000;
    opacity: 0.5;
    ${absolute({})};
`;

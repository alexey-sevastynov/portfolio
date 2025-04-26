import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const StyledEducationItem = styled(motion.div)`
    cursor: default;

    & img {
        margin-right: 35px;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.34);
        border-radius: 100%;
        @media (max-width: 1050px) {
            margin-right: 0px;
        }
        @media (max-width: 1050px) {
            height: 70px;
            width: 70px;
            margin-bottom: 10px;
        }
    }

    & h3 {
        margin-bottom: 6px;
        font-size: 24px;
        font-weight: 700;
        @media (max-width: 1050px) {
            text-align: center;
        }
    }

    & p {
        margin-bottom: 6px;
        &:nth-child(1) {
            margin-bottom: 6px;
            color: yellow;
        }

        @media (max-width: 1050px) {
            text-align: center;
        }
    }

    &:hover {
        & #line {
            width: 100%;
            background-color: ${({ theme }) => theme.colors.backgroundTwo};
            transition: all 1s ease;
        }
    }
`;

const Item = styled.div`
    display: flex;

    &:hover {
        & div {
            &:last-child {
                width: 100%;
            }
        }
    }

    @media (max-width: 1050px) {
        flex-direction: column;
        align-items: center;
    }
`;

const Line = styled.div`
    margin: 20px 0px 35px 0px;
    width: 60%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
`;

interface EducationItemProps {
    title: string;
    subTitle: string;
    text: string;
    image: any;
}

const EducationItem: React.FC<EducationItemProps> = React.forwardRef(
    ({ title, subTitle, text, image }, ref: React.LegacyRef<HTMLDivElement> | undefined) => {
        return (
            <div ref={ref}>
                <StyledEducationItem>
                    <Item>
                        <div>
                            <img src={image} alt="img" />
                        </div>
                        <div>
                            <h3>{title}</h3>
                            <p>{subTitle}</p>
                            <p>{text}</p>
                        </div>
                    </Item>

                    <Line id="line"></Line>
                </StyledEducationItem>
            </div>
        );
    },
);

export default EducationItem;

export const MEducationItem = motion(EducationItem);

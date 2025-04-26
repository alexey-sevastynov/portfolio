import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const StyledExperiencesItem = styled.div`
    height: 540px;
    max-width: 436px;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    border-radius: 25px;

    & span {
        padding: 63px 0px 13px 0px;
        font-size: 24px;
        display: block;
        text-align: center;
        @media (max-width: 600px) {
            padding: 35px 0px 13px 0px;
        }
    }

    & p {
        text-align: center;

        &:last-child {
            margin-top: 35px;
            @media (max-width: 600px) {
                padding: 0px 5px;
            }
        }
    }

    &:not(:last-child) {
        margin-right: 31px;
    }

    @media (max-width: 1050px) {
        &:not(:last-child) {
            margin-right: 0px;
        }
    }

    @media (max-width: 600px) {
        height: 400px;
    }
`;

const HederBlock = styled.div`
    position: relative;
    height: 177px;
    max-width: 436px;
    background-color: aliceblue;
    border-radius: 25px 25px 0px 0px;
    background: linear-gradient(${(props) => props.color}, ${(props) => props.nonce});

    & h4 {
        text-align: center;
        padding-top: 59px;
        @media (max-width: 600px) {
            padding-top: 40px;
        }
    }

    @media (max-width: 600px) {
        height: 130px;
    }
`;

const Icon = styled.div`
    position: absolute;
    bottom: -35%;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: 600px) {
        bottom: -27%;

        & svg {
            width: 70px;
            height: 70px;
        }
    }
`;

interface ExperiencesItemProps {
    title: string;
    image: any;
    subTitle: string;
    date: string;
    text: string;
    color: { color_1: string; color_2: string };
}

const ExperiencesItem: React.FC<ExperiencesItemProps> = React.forwardRef(
    ({ title, image, subTitle, date, text, color }, ref: any) => {
        return (
            <StyledExperiencesItem ref={ref}>
                <HederBlock color={color.color_1} nonce={color.color_2}>
                    <h4>{title}</h4>
                    <Icon>{image}</Icon>
                </HederBlock>

                <span>{subTitle}</span>
                <p>{date}</p>
                <p>{text}</p>
            </StyledExperiencesItem>
        );
    },
);

export default ExperiencesItem;

export const MExperiencesItem = motion(ExperiencesItem);

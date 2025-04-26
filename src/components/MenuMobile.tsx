import React from "react";
import styled from "styled-components";
import LanguageBlock from "@/components/LanguageBlock";
import ModeBlock from "@/components/ModeBlock";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { onOpenMenuMobile } from "@/redux/slices/main";
import { selectTranslations } from "@/redux/slices/i18next";

const StyledMenuBobile = styled.div`
    position: sticky;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 450px;
    background-color: ${({ theme }) => theme.colors.background};
    box-sizing: border-box;

    z-index: 2;

    & ul {
        padding-left: 10px;
    }

    & li {
        margin-top: 30px;
        &:first-child {
            margin-top: 0;
        }
    }

    @media (min-width: 900px) {
        display: none;
    }
`;

const Footer = styled.div`
    margin-top: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 20px);
`;

interface MenuMobileProps {
    refSkills: React.LegacyRef<HTMLDivElement>;
    refEducation: React.LegacyRef<HTMLDivElement>;
    refExperiences: React.LegacyRef<HTMLDivElement>;
    refProjects: React.LegacyRef<HTMLDivElement>;
    refContact: React.LegacyRef<HTMLDivElement>;
}

function MenuMobile({ refSkills, refEducation, refExperiences, refProjects, refContact }: MenuMobileProps) {
    const dispatch = useAppDispatch();
    const lang = useAppSelector(selectTranslations);
    const openMenuMobile = useAppSelector((props) => props.main.openMenuMobile);
    const buttonHandler = (ref: any) => {
        ref.current.scrollIntoView({
            behavior: "smooth",
        });
        if (openMenuMobile) {
            dispatch(onOpenMenuMobile());
        }
    };

    return (
        <StyledMenuBobile>
            <nav>
                <ul>
                    <li onClick={() => buttonHandler(refSkills)}>{lang.header.skills}</li>
                    <li onClick={() => buttonHandler(refEducation)}>{lang.header.education}</li>
                    <li onClick={() => buttonHandler(refExperiences)}>{lang.header.work}</li>
                    <li onClick={() => buttonHandler(refProjects)}>{lang.header.projects}</li>
                    <li onClick={() => buttonHandler(refContact)}>{lang.header.contact}</li>
                    <Footer>
                        <ModeBlock />
                        <LanguageBlock />
                    </Footer>
                </ul>
            </nav>
        </StyledMenuBobile>
    );
}

export default MenuMobile;

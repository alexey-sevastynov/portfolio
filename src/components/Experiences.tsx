import React from "react";
import styled from "styled-components";
import { MExperiencesItem } from "@/components/ExperiencesItem";
import { localizedExperiences } from "@/assets/experiences/localized-experiences";
import { useAppSelector } from "@/redux/hook";
import { selectTranslations } from "@/redux/slices/i18next";

const StyledExperiences = styled.div`
    height: 100vh;

    @media (max-width: 1050px) {
        height: unset;
    }

    /* & h2 {
    margin-top: 65px;
    margin-bottom: 40px;
    font-size: 48px;
  } */
`;

const Flex = styled.div`
    padding-bottom: 40px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    overflow-y: scroll;

    @media (max-width: 1050px) {
        overflow-y: unset;
        flex-direction: column;
        row-gap: 10px;
        align-items: center;
    }
`;

interface ExperiencesProps {
    refExperiences: React.LegacyRef<HTMLDivElement>;
}

const Experiences: React.FC<ExperiencesProps> = ({ refExperiences }) => {
    const currentLang = useAppSelector((props) => props.i18n.lang);
    const lang = useAppSelector(selectTranslations);

    const showExperiences = (currentLang: string) => {
        if (currentLang === "en" || currentLang === "ua" || currentLang === "ru") {
            return localizedExperiences[currentLang].map((item, id) => (
                <MExperiencesItem
                    key={id}
                    {...item}
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="visible"
                    custom={id + 1}
                />
            ));
        }
    };

    return (
        <div ref={refExperiences}>
            <StyledExperiences>
                <h2>{lang.experiences.title}</h2>
                <Flex>{showExperiences(currentLang)}</Flex>
            </StyledExperiences>
        </div>
    );
};

export default Experiences;

const containerAnimation = {
    hidden: { opacity: 0 },
    visible: (custom: any) => ({
        opacity: 1,

        transition: { delay: custom * 0.4, duration: 1 },
    }),
};

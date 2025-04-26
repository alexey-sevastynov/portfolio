import React from "react";
import styled from "styled-components";
import { MExperiencesItem } from "@/components/ExperiencesItem";
import { experiences } from "@/assets/experiences";
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
    display: flex;

    @media (max-width: 1050px) {
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
            return experiences[currentLang].map((item, id) => (
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

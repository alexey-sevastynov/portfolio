import { LegacyRef } from "react";
import styled from "styled-components";
import { MEducationItem } from "@/components/EducationItem";
import { localizedEducations } from "@/assets/educations/localized-educations";
import { useAppSelector } from "@/redux/hook";
import { selectTranslations } from "@/redux/slices/i18next";

const StyledEducation = styled.div`
    height: 100vh;
    width: 100%;
    @media (max-width: 1050px) {
        height: unset;
    }
`;

interface EducationProps {
    refEducation: LegacyRef<HTMLDivElement>;
}

function Education({ refEducation }: EducationProps) {
    const currentLang = useAppSelector((props) => props.i18n.lang);
    const lang = useAppSelector(selectTranslations);

    const showEducations = (currentLang: string) => {
        if (currentLang === "en" || currentLang === "ua" || currentLang === "ru") {
            return localizedEducations[currentLang].map((item, id) => (
                <MEducationItem
                    key={item.image}
                    image={item.image}
                    title={item.title}
                    subTitle={item.subTitle}
                    text={item.text}
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="visible"
                    custom={id + 1}
                />
            ));
        }
    };

    return (
        <div ref={refEducation}>
            <StyledEducation>
                <h2>{lang.education.title}</h2>
                {showEducations(currentLang)}
            </StyledEducation>
        </div>
    );
}

export default Education;

const containerAnimation = {
    hidden: { opacity: 0, y: 23 },
    visible: (custom: any) => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.4 },
    }),
};

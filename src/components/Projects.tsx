import React from "react";
import styled from "styled-components";
import { MProjectsItem } from "@/components/ProjectsItem";
import Button from "@/components/Button";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { selectTranslations } from "@/redux/slices/i18next";
import { fetchProjects, setShowLinkAnimation, setShowLinkAnimationId } from "@/redux/slices/main";

const StyledProjects = styled.div`
    height: 100vh;

    @media (max-width: 1400px) {
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
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 10px;

    row-gap: 25px;

    @media (max-width: 960px) {
        justify-content: center;
    }
`;

const ButtonBlock = styled.a`
    display: block;
    margin-top: 32px;
    text-align: center;
`;

interface ProjectsProps {
    refProjects: React.LegacyRef<HTMLDivElement>;
}

function Projects({ refProjects }: ProjectsProps) {
    const dispatch = useAppDispatch();

    const lang = useAppSelector(selectTranslations);

    const { projects } = useAppSelector((props) => props.main);

    const handleMouseEnter = (id: number) => {
        dispatch(setShowLinkAnimation(true));
        dispatch(setShowLinkAnimationId(id));
    };

    const handleMouseLeave = () => {
        dispatch(setShowLinkAnimation(false));
        dispatch(setShowLinkAnimationId(null));
    };

    React.useEffect(() => {
        dispatch(fetchProjects());
    }, []);

    return (
        <div ref={refProjects}>
            <StyledProjects>
                <h2>{lang.projects.title}</h2>
                <Flex>
                    {projects.map((project, id) => (
                        <MProjectsItem
                            key={project.title}
                            id={id}
                            handleMouseLeave={handleMouseLeave}
                            handleMouseEnter={() => handleMouseEnter(id)}
                            {...project}
                            variants={containerAnimation}
                            initial="hidden"
                            whileInView="visible"
                            custom={id + 1}
                        />
                    ))}
                </Flex>
                <ButtonBlock href="https://github.com/alexey-sevastynov/" target="blank">
                    <Button text={lang.projects.btn} />
                </ButtonBlock>
            </StyledProjects>
        </div>
    );
}

export default Projects;

const containerAnimation = {
    hidden: { opacity: 0, y: 23 },
    visible: (custom: any) => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.2 },
    }),
};

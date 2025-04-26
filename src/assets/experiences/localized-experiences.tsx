import { FreelanceImage } from "@/assets/experiences/FreelanceImage";
import { UnimayMediaImage } from "@/assets/experiences/UnimayMediaImage";
import { FernirImage } from "@/assets/experiences/FernirImage";

const freelanceExperience = {
    title: "Freelance",
    image: <FreelanceImage />,
    color: { color_1: "#003f7a", color_2: "#0075e2" },
};

const unimayMediaExperience = {
    title: "Unimay Media",
    image: <UnimayMediaImage />,
    color: { color_1: "#A70100", color_2: "#FF0100" },
};

const fernirExperience = {
    title: "Fernir",
    image: <FernirImage />,
    color: { color_1: "#F7981A", color_2: "#F7C321" },
};

export const localizedExperiences = {
    en: [
        {
            ...freelanceExperience,
            subTitle: "Website layout",
            date: "May 2021 – May 2022",
            text: "Website layout using HTML + CSS/SCSS. Design. Development of one-page websites.",
        },
        {
            ...unimayMediaExperience,
            subTitle: "Front-End Developer Intern",
            date: "(May 2023 – January 2024",
            text: 'Front-End Intern (React / JavaScript / TypeScript). Project "Unimay Media", a website for watching anime with Ukrainian translation.',
        },
        {
            ...fernirExperience,
            subTitle: "Full-Stack Developer",
            date: "June 2024 – Present",
            text: "Full-stack developer building SaaS web applications with Next.js, TypeScript, and Node.js. Experienced in creating robust APIs with PostgreSQL. Focused on scalable, maintainable software solutions.",
        },
    ],
    ua: [
        {
            ...freelanceExperience,
            subTitle: "Верстка сайтів",
            date: "Травень 2021 – Травень 2022",
            text: "Верстка сайтів HTML + CSS/SCSS. Дизайн. Розробка односторінкових сайтів.",
        },
        {
            ...unimayMediaExperience,
            subTitle: "Стажер Front-End розробник",
            date: "Травень 2023 – Січень 2024",
            text: 'Стажер із розробки зовнішнього інтерфейсу (React / JavaScript / TypeScript). Проєкт "Unimay Media" — сайт для перегляду аніме українською мовою.',
        },
        {
            ...fernirExperience,
            subTitle: "Full-Stack розробник",
            date: "Червень 2024 – Дотепер",
            text: "Фулстек-розробник, який створює SaaS вебзастосунки за допомогою Next.js, TypeScript та Node.js. Маю досвід створення надійних API з використанням PostgreSQL. Орієнтуюсь на створення масштабованих і підтримуваних рішень.",
        },
    ],
    ru: [
        {
            ...freelanceExperience,
            subTitle: "Верстка сайтов",
            date: "Май 2021 – Май 2022",
            text: "Верстка сайтов HTML + CSS/SCSS. Дизайн. Разработка одностраничных сайтов.",
        },
        {
            ...unimayMediaExperience,
            subTitle: "Стажёр Front-End разработчик",
            date: "Май 2023 – Январь 2024",
            text: 'Стажёр по разработке пользовательского интерфейса (React / JavaScript / TypeScript). Проект "Unimay Media" — сайт для просмотра аниме с украинским переводом.',
        },
        {
            ...fernirExperience,
            subTitle: "Full-Stack разработчик",
            date: "Июнь 2024 – Настоящее время",
            text: "Фулстек-разработчик, создающий SaaS веб-приложения с использованием Next.js, TypeScript и Node.js. Имею опыт разработки надёжных API с использованием PostgreSQL. Сфокусирован на создании масштабируемых и поддерживаемых решений.",
        },
    ],
};

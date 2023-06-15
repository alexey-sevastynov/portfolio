import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { motion } from "framer-motion";
import { onOpenPopupLanguage } from "../redux/slices/main";
import { setLang } from "../redux/slices/i18next";

const StyledLanguageBlock = styled.div`
  font-weight: 700;
  margin: 0px 20px 0px 10px;
  padding: 0px 10px 0px 10px;
  display: flex;
  flex-direction: row;
  position: relative;
  height: 50px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }

  & svg {
    margin-left: 5px;
  }
`;

const LanguagePopup = styled.div`
  position: absolute;
  top: 100%;
  right: 7px;
  background-color: ${({ theme }) => theme.colors.backgroundTwo};
  padding: 5px 20px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;

  & p {
    color: ${({ theme }) => theme.colors.border};

    &:nth-child(${(props) => props.defaultValue}) {
      font-weight: 700;
    }
  }
`;

interface LanguageBlockProps {}

const LanguageBlock: React.FC<LanguageBlockProps> = () => {
  const dispatch = useAppDispatch();
  const lang = useAppSelector((props) => props.i18n.lang);
  const openPopupLanguage = useAppSelector(
    (props) => props.main.openPopupLanguage
  );

  const selectedLang = (lang: string) => {
    if (lang === "en") return 1;
    if (lang === "ua") return 2;
    if (lang === "ru") return 3;
  };

  console.log(selectedLang(lang));

  return (
    <div onClick={() => dispatch(onOpenPopupLanguage())}>
      <StyledLanguageBlock>
        {lang}
        {openPopupLanguage && (
          <motion.div
            initial={{ position: "absolute", right: 7, opacity: 0 }}
            animate={{
              position: "absolute",
              top: "100%",
              right: 7,
              opacity: 1,
            }}
            transition={{ duration: 0.2 }}
          >
            <LanguagePopup defaultValue={selectedLang(lang)}>
              <p onClick={() => dispatch(setLang("en"))}>EN</p>
              <p onClick={() => dispatch(setLang("ua"))}>UA</p>
              <p onClick={() => dispatch(setLang("ru"))}>RU</p>
            </LanguagePopup>
          </motion.div>
        )}
        <svg
          width="14"
          height="11"
          viewBox="0 0 14 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 11L0.937823 0.499999L13.0622 0.5L7 11Z" fill="#BEBEBE" />
        </svg>
      </StyledLanguageBlock>
    </div>
  );
};

export default LanguageBlock;

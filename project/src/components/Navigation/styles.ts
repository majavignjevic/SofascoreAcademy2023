import styled from "styled-components";
import { themes } from "@/utils/theme"

export const WebHeader = styled.header`
    width: 100%;
    background-color: ${p => p.theme.primary.default};
    color: ${p => p.theme.surface.lvl1};
    margin: 0 auto;
    text-align: center;
    padding-top: 22px;
    padding-bottom: 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
`
export const WebFooter = styled.footer`
  width: 100%;
  background-color: ${(p) => p.theme.surface.lvl1};
  color: ${(p) => p.theme.surface.lvl1};
  text-align: center;
  padding-top: 24px;
  padding-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: nowrap;
  bottom: 0;
`
export const Navi = styled.nav`
    width: 100%;
    background-color: ${p => p.theme.primary.default};
    color: ${p => p.theme.surface.lvl1};
    margin: 0 auto;
    text-align: center;
    padding-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
`
export const SofascoreLogo = styled.svg`
    width: 132px;
    height: 20px;
    margin: 0 auto;
    color: ${p => p.theme.surface.lvl1};
    fill: ${p => p.theme.surface.lvl1};
`
export const SofascoreLogoFooter = styled.svg`
    width: 132px;
    height: 20px;
    margin: 0 auto;
    color: ${p => p.theme.surface.lvl1};
    fill: ${p => p.theme.onSurface.lvl0};
`
export const SettingsLogo = styled.svg`
    height: 24px;
    width: 24px;
    margin-right: 10px;
    fill: ${p => p.theme.surface.lvl1};
`
export const NavigationButtons = styled.button<{ active: boolean }>`
  color: ${(p) => p.theme.surface.lvl1};
  background-color: ${(p) => p.theme.primary.default};
  border: none;
  flex-grow: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  gap: 12px;
  padding-top: 12px;
  padding-right: 8px;
  padding-bottom: 16px;
  padding-left: 8px;
  fill: ${(p) => p.theme.surface.lvl1};
  
  ${(props) =>
    props.active &&
    `
    border-bottom: 4px solid ${(p) => p.theme.surface.lvl1};
  `}

  &:active,
  &:focus {
    outline: none;
    border-bottom: 4px solid ${(p) => p.theme.surface.lvl1};
  }
`;

export const SportLogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
`
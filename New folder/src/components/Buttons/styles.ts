import styled, {css} from "styled-components"
import { themes } from '../../utils/theme'

const ButtonStyles = css`
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    margin: 24px 27px 24px 0;
    padding: 8px 16px;
    border-radius: 2px;
    gap: 8px;
    font-size: 16px;
    justify-content: center;
    align-items: center;
`
const ChevronRightIconDefault = styled.svg`
    fill: ${p => p.theme.primary.default};
    width: 24px;
    height: 24px;
    flex-grow: 0;
    object-fit: contain;
    align-items: center;
    justify-content: center;

    &:hover:not(:disabled) {
        fill: ${p => p.theme.primary.variant};
    }
`
const ChevronRightIconSurface = styled.svg`
    fill: ${p => p.theme.surface.lvl1};
    width: 24px;
    height: 24px;
    flex-grow: 0;
    object-fit: contain;
`
const PrimaryDefaultFilled = styled.button`
    ${ButtonStyles}
    background-color: ${p => p.theme.primary.default};
    color: ${p => p.theme.surface.lvl1};

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }

    &:hover:not(:disabled) {
        background-color: ${p => p.theme.primary.variant};
    }
`
const PrimaryDefaultStroked = styled.button`
    ${ButtonStyles}
    border: solid 2px ${p => p.theme.primary.default};
    color: ${p => p.theme.primary.default};
    background-color: ${p => p.theme.surface.lvl1};
    box-shadow: none;

    &:disabled{
        opacity: 0.4;
        cursor: not-allowed;
    }

    &:hover:not(:disabled){
        border: solid 2px ${p => p.theme.primary.variant};
        color: ${p => p.theme.primary.variant};
    }
`
const PrimaryDefaultUnshielded = styled.button`
    ${ButtonStyles}
    font-weight: bold;
    line-height: 1.5;
    text-align: left;
    color: ${p => p.theme.primary.default};
    background-color: ${p => p.theme.surface.lvl1};
    box-shadow: none;

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }

    &:hover:not(:disabled) {
        color: ${p => p.theme.primary.variant};
    }
`
export {ChevronRightIconDefault, ChevronRightIconSurface, PrimaryDefaultFilled, PrimaryDefaultStroked, PrimaryDefaultUnshielded}
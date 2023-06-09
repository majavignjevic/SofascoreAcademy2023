import styled from 'styled-components'

const DesktopHeadline1 = styled.h1`
    font-family: Roboto;
    font-size: 32px;
    font-weight: bold;
    line-height: 1.25;
    text-align: left;
    color: ${p => p.theme.surface.lvl1};
`

const Headline1 = styled.h1`
    font-family: Roboto;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.4;
    text-align: left;
    color: ${p => p.theme.onSurface.lvl0};
`
const Headline2 = styled.h2`
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.25;
    text-align: left;
    color: ${p => p.theme.onSurface.lvl0};
`

const Headline3 = styled.h3`
    font-family: Roboto;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.14;
    text-align: left;
    color: ${p => p.theme.onSurface.lvl0};
`

const Body = styled.div`
    font-family: Roboto;
    font-size: 14px;
    line-height: 1.14;
    text-align: left;
    color: ${p => p.theme.onSurface.lvl1};
    padding: 0;
    margin: 0 auto;
    background-color: ${p => p.theme.surface.lvl0};
`

const BodyParagraph = styled.p`
    font-family: Roboto;
    font-size: 14px;
    line-height: 20px;
    text-align: left;
    color: ${p => p.theme.surface.lvl1};
`
const Assistive = styled.p`
    font-family: Roboto;
    font-size: 12px;
    font-weight: bold;
    line-height: 1.33;
    text-align: right;
    color: ${p => p.theme.surface.lvl1};
`

const Tabular = styled.p`
    font-family: Roboto;
    font-size: 14px;
    font-stretch: condensed;
    line-height: 1.14;
    letter-spacing: -0.28px;
    text-align: left;
    color: ${p => p.theme.surface.lvl1};
`

const Action = styled.p`
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    text-align: left;
    color: ${p => p.theme.surface.lvl1};
`

const Tab = styled.p`
    font-family: Roboto;
    font-size: 14px;
    line-height: 1.14;
    text-align: left;
    color: ${p => p.theme.surface.lvl1};
`

const Micro = styled.p`
    font-family: Roboto;
    font-size: 12px;
    font-stretch: condensed;
    line-height: 1.33;
    text-align: left;
    color: ${p => p.theme.onSurface.lvl2};
`

const MicroLink = styled.p`
    font-family: Roboto;
    font-size: 12px;
    font-stretch: condensed;
    line-height: 1.33;
    text-align: left;
    color: ${p => p.theme.primary.default};
    margin-left: 40px;
    display: flex;
    align-items: center;
`

export {DesktopHeadline1, Headline1, Headline2, Headline3, Body, BodyParagraph, Assistive, Tabular, Action, Tab, Micro, MicroLink}
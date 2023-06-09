import { Body } from "@/utils/fonts";
import styled from "styled-components";

export const ElevationContainer = styled.section`
  display: flex;
  justify-content: center;
`

export const LeagueContainer = styled.div`
  margin-left: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
  width: 100%;
  height: max-content;

`

export const TournamentBox = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  padding-top: 8px;
  padding-bottom: 8px;
  img{
    height: 40px;
    width: 40px;
    margin-right: 32px;
  }
`

export const ElevatedBackground = styled.div`
    background-color: ${p => p.theme.surface.lvl1};
    width: 448px;
    flex-grow: 0;
    margin-left: 24px;
    margin-right: 24px;
    margin-bottom: 48px;
    padding: 16px 0;
    border-radius: 16px;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
`
export const TournamentEventElevation = styled.div`
  background-color: ${p => p.theme.surface.lvl1};
  width: 448px;
  flex-grow: 0;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 48px;
  padding: 16px 0;
  border-radius: 16px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
`
export const TournamentEvent = styled.div`
    margin-left: 16px;
    margin-top: 8px;
    margin-bottom: 8px;
    height: max-content;
    display: flex;
    flex-direction: row;
`

export const DateCell = styled.div`
  width: 64px;
  height: 56px;
  text-align: center;
`
export const HorizontalLine =styled.div`
  width: 1px;
  height: 40px;
  margin: 0 0 0 3px;
  background-color: ${p => p.theme.onSurface.lvl3};
`
export const TeamsCell = styled.div`
margin-left: 16px;
img{
    height: 16px;
    width: 16px;
    margin-right: 16px;
  }
`
export const HomeTeamCell = styled.div`
`
export const AwayTeamCell = styled.div`
`
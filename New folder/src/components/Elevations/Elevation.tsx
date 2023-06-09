import { BodyParagraph, Headline1 } from "@/utils/fonts";
import { ElevatedBackground, ElevationContainer, LeagueContainer} from "./Styles";
import TournamentList from "@/modules/Tournaments/TournamentList";

export function Elevation(){
    return(
        <ElevationContainer>
            <ElevatedBackground>
                <LeagueContainer>
                    <Headline1>
                        Leagues
                    </Headline1>
                </LeagueContainer>
            </ElevatedBackground>
            <ElevatedBackground>{/* Content for the second ElevatedBackground */}</ElevatedBackground>
            <ElevatedBackground>{/* Content for the third ElevatedBackground */}</ElevatedBackground>
        </ElevationContainer>
    )
}
import TournamentList from "@/modules/Tournaments/TournamentList";
import { ElevatedBackground, ElevationContainer } from "./Styles";

interface TournamentElevationProps {
  activeSport: string; // Update the type to string
  onTournamentSelect?: (tournamentId: number) => void;
  children: React.ReactNode;
}

export const TournamentElevation = ({ activeSport, onTournamentSelect, children }: TournamentElevationProps) => {
  return (
    <ElevationContainer>
      <ElevatedBackground>
        {children}
        <TournamentList activeSport={activeSport} onTournamentSelect={onTournamentSelect} />
      </ElevatedBackground>
    </ElevationContainer>
  );
};

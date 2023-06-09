import { LeagueContainer, TournamentBox } from '@/components/Elevations/Styles';
import { Tournament } from '@/model/Tournament';
import { Headline3 } from '@/utils/fonts';
import { useEffect, useState } from 'react';

interface TournamentListProps {
  activeSport: string;
  onTournamentSelect?: (tournamentId: number) => void;
}

function TournamentInfo({ tournament, activeSport, onTournamentSelect }: { tournament: Tournament; activeSport: string; onTournamentSelect?: (tournamentId: number) => void }) {
  const imageLink = `https://academy.dev.sofascore.com/tournament/${tournament.id}/image`;

  const handleClick = () => {
    if (onTournamentSelect) {
      onTournamentSelect(tournament.id);
    }
  };

  return (
    <TournamentBox onClick={handleClick}>
      <img src={imageLink} alt="Tournament" />
      <Headline3>
        {tournament.name}
      </Headline3>
      {tournament.sport.slug === activeSport}
    </TournamentBox>
  );
}

export default function TournamentList({ activeSport, onTournamentSelect }: TournamentListProps) {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const tournamentIDs = [2, 3, 4, 5, 6, 7];
        const tournamentData = await Promise.all(
          tournamentIDs.map(async (id) => {
            const response = await fetch(`https://academy.dev.sofascore.com/tournament/${id}`);
            if (response.ok) {
              const data = await response.json();
              return data;
            } else {
              throw new Error(`Failed to fetch tournament data for ID ${id}`);
            }
          })
        );
        setTournaments(tournamentData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTournaments();
  }, []);

  const filteredTournaments = tournaments.filter((tournament) => tournament.sport.slug === activeSport);

  return (
    <LeagueContainer>
      {filteredTournaments.length > 0 ? (
        filteredTournaments.map((tournament) => (
          <TournamentInfo key={tournament.id} tournament={tournament} activeSport={activeSport} onTournamentSelect={onTournamentSelect} />
        ))
      ) : (
        <p>No tournaments found for the active sport.</p>
      )}
    </LeagueContainer>
  );
}

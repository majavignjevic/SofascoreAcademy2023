import EventsElevation from "@/components/Elevations/EventsElevation";
import { ElevationContainer, LeagueContainer, ElevatedBackground } from "@/components/Elevations/Styles";
import { TournamentElevation } from "@/components/Elevations/TournamentElevation";
import { Footer } from "@/components/Navigation/Footer";
import { Sport } from "@/model/Sport";
import { Tournament } from "@/model/Tournament";
import { MicroLink, Headline1 } from "@/utils/fonts";
import { useState, useEffect } from "react";

function AmericanFootballPage() {
  const activeSport: Sport = {
    id: 3,
    name: 'American Football',
    slug: 'american-football'
  };

  const [selectedTournamentId, setSelectedTournamentId] = useState<number | null>(null);
  const [tournaments, setTournaments] = useState<Tournament[]>([]);


  const handleTournamentSelect = (tournamentId: number) => {
    setSelectedTournamentId(tournamentId);
  };

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

  useEffect(() => {
    // Find the American football tournament and set its ID as the default selected
    const americanFootballTournament = tournaments.find((tournament) => tournament.sport.slug === activeSport.slug);
    if (americanFootballTournament) {
      setSelectedTournamentId(americanFootballTournament.id);
    }
  }, [tournaments]);

  return (
    <>
      <MicroLink>American Football &gt;</MicroLink>
      <ElevationContainer>
        <TournamentElevation activeSport={activeSport.slug}>
          <LeagueContainer>
            <Headline1>Leagues</Headline1>
          </LeagueContainer>
        </TournamentElevation>
          <EventsElevation
            selectedTournamentId={selectedTournamentId}
            onTournamentSelect={handleTournamentSelect}
          />
        <ElevatedBackground>Here go details</ElevatedBackground>
      </ElevationContainer>
      <Footer />
    </>
  );
}

export default AmericanFootballPage;

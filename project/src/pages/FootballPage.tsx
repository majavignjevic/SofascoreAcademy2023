import EventsElevation from "@/components/Elevations/EventsElevation";
import { ElevationContainer, LeagueContainer, ElevatedBackground } from "@/components/Elevations/Styles";
import { TournamentElevation } from "@/components/Elevations/TournamentElevation";
import Calendar from "@/components/Navigation/Calendar/Calendar";
import { Footer } from "@/components/Navigation/Footer";
import { Sport } from "@/model/Sport";
import { Tournament } from "@/model/Tournament";
import { MicroLink, Headline1 } from "@/utils/fonts";
import { useState, useEffect } from "react";

function FootballPage() {
  const activeSport: Sport = {
    id: 1,
    name: 'Football',
    slug: 'football'
  };

  const [selectedTournamentId, setSelectedTournamentId] = useState<number | null>(null);
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [footballTournament, setFootballTournament] = useState<Tournament | null>(null);

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
    const footballTournament = tournaments.find((tournament) => tournament.sport.slug === activeSport.slug);
    setFootballTournament(footballTournament);
  }, [tournaments]);

  useEffect(() => {
    if (footballTournament) {
      setSelectedTournamentId(footballTournament.id);
    }
  }, [footballTournament]);

  return (
    <>
      <MicroLink>{activeSport.name} &gt; {footballTournament?.name}</MicroLink>
      <ElevationContainer>
        <TournamentElevation activeSport={activeSport.slug}>
          <LeagueContainer>
            <Headline1>Leagues</Headline1>
          </LeagueContainer>
        </TournamentElevation>
          <Calendar date={Date.now}/>
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

export default FootballPage;

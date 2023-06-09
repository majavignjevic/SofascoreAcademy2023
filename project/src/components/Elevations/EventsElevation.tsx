import { Score } from "@/model/Score";
import { Team } from "@/model/Team";
import { Tournament } from "@/model/Tournament";
import { useState, useEffect, Children } from "react";
import { Event } from "@/model/Event";
import { ElevatedBackground, TournamentEvent, DateCell, HorizontalLine, TeamsCell, HomeTeamCell, AwayTeamCell } from "./Styles";

interface EventsElevationProps {
  selectedTournamentId: number | null;
  onTournamentSelect?: (tournamentId: number) => void;
}


function EventsElevation({ selectedTournamentId, onTournamentSelect }: EventsElevationProps) {
  const apiUrl = `https://academy.dev.sofascore.com/tournament/${selectedTournamentId}/events/next/0`;
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    if (selectedTournamentId) {
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const fetchedEvents = data.map((item: any) => {
            const fetchedEvent: Event = {
              id: item.id,
              slug: item.slug,
              tournamet: item.tournament as Tournament,
              homeTeam: item.homeTeam as Team,
              awayTeam: item.awayTeam as Team,
              status: item.status,
              startDate: item.startDate,
              homeScore: item.homeScore as Score,
              awayScore: item.awayScore as Score,
              winnerCode: item.winnerCode,
              round: item.round
            };
            return fetchedEvent;
          });
          setEvents(fetchedEvents);
        })
        .catch(error => {
          console.error("Error fetching event data:", error);
        });
    }
  }, [selectedTournamentId]);

  if (!selectedTournamentId || events.length === 0) {
    return null;
  }

  return (
    <ElevatedBackground>
    {events.map(event => {
      const startDate = new Date(event.startDate);
      const formattedDate = `${startDate.getDate()}.${startDate.getMonth() + 1}.${startDate.getFullYear()}`
      const formattedTime = `${startDate.getHours()}:${startDate.getMinutes().toString().padStart(2, '0')}`

      const logoHomeTeamLink = event.homeTeam ? `https://academy.dev.sofascore.com/team/${event.homeTeam.id}/image` : '';
      const logoAwayTeamLink = event.awayTeam ? `https://academy.dev.sofascore.com/team/${event.awayTeam.id}/image` : '';

      return (
        <TournamentEvent key={event.id}>
          <DateCell>{formattedDate}<br/>{formattedTime}</DateCell>
          <HorizontalLine></HorizontalLine>
          <TeamsCell>
            <HomeTeamCell>
              {event.homeTeam && <img src={logoHomeTeamLink} alt={event.homeTeam.name} />}
              {event.homeTeam && event.homeTeam.name}
            </HomeTeamCell>
            <AwayTeamCell>
              {event.awayTeam && <img src={logoAwayTeamLink} alt={event.awayTeam.name} />}
              {event.awayTeam && event.awayTeam.name}
            </AwayTeamCell>
          </TeamsCell>
        </TournamentEvent>
      );
    })}
  </ElevatedBackground>
  );
}

export default EventsElevation;

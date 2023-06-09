import { Elevation } from '@/components/Elevations/Elevation';
import { Footer } from '@/components/Navigation/Footer';
import { Header } from '@/components/Navigation/Header';
import Navigation from '@/components/Navigation/Navigaton';
import { Body } from '@/utils/fonts';
import Head from 'next/head';
import { useEffect, useState } from 'react';

// Example component to display a Football tournament
const TournamentItem = ({ name }) => {
  return <div>{name}</div>;
};

const Home = () => {
  const [footballTournaments, setFootballTournaments] = useState([]);

  useEffect(() => {
    // Fetch Football tournament data
    const fetchFootballTournaments = async () => {
      try {
        const response = await fetch('https://academy.dev.sofascore.com/tournaments');
        if (response.ok) {
          const data = await response.json();
          const footballTournaments = data.filter(tournament => tournament.sport === 'Football');
          setFootballTournaments(footballTournaments);
        } else {
          throw new Error('Failed to fetch tournament data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchFootballTournaments();
  }, []);

  return (
    <>
      <Head>
        <title>Sofascore</title>
        <meta name="description" content="Sofascore project" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Header />
        <Navigation />
      </Body>
    </>
  );
};

export default Home;

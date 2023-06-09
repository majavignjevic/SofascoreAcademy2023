import { useState, useEffect } from 'react';
import { Navi, SportLogoContainer, NavigationButtons } from "./styles";
import { FootballLogo, BasketballLogo, AmericanFootballLogo } from '../Logos/NavigationLogos';
import BasketballPage from '@/pages/BasketballPage';
import AmericanFootballPage from '@/pages/AmericanFootballPage';
import Home from '@/pages';
import FootballPage from '@/pages/FootballPage';

function Navigation() {
  const [sports, setSports] = useState([]);
  const [activeSport, setActiveSport] = useState('football');

  useEffect(() => {
    fetchSports();
  }, []);

  const fetchSports = async () => {
    try {
      const response = await fetch('https://academy.dev.sofascore.com/sports');
      const data = await response.json();
      setSports(data);
    } catch (error) {
      console.error('Error fetching sports:', error);
    }
  };

  const handleSportClick = (sport) => {
    setActiveSport(sport.slug);
  };

  const renderSportLogo = (slug) => {
    switch (slug) {
      case 'football':
        return <FootballLogo />;
      case 'basketball':
        return <BasketballLogo />;
      case 'american-football':
        return <AmericanFootballLogo />;
      default:
        return null;
    }
  };

  const renderActivePage = () => {
    switch (activeSport) {
      case 'football':
        return <FootballPage />;
      case 'basketball':
        return <BasketballPage />;
      case 'american-football':
        return <AmericanFootballPage />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navi>
        <SportLogoContainer>
          {sports.map((sport) => (
            <NavigationButtons
              key={sport.id}
              onClick={() => handleSportClick(sport)}
              active={activeSport === sport.slug}
            >
              {renderSportLogo(sport.slug)}
              {sport.name}
            </NavigationButtons>
          ))}
        </SportLogoContainer>
      </Navi>
      {renderActivePage()}
    </>
  );
}

export default Navigation;

interface VisitData {
  location: string;
  timestamp: string;
  userAgent: string;
  referrer: string;
  path: string;
}

const API_URL = import.meta.env.PROD
  ? 'https://bharatwebnavigator.ajna.dev'
  : 'http://localhost:3001';

export const trackVisit = async (): Promise<void> => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const locationData = await response.json();
    
    const visitData: VisitData = {
      location: `${locationData.city}, ${locationData.country_name}`,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer || 'direct',
      path: window.location.pathname
    };

    await fetch(`${API_URL}/api/track-visit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(visitData)
    });
  } catch (error) {
    console.error('Error tracking visit:', error);
  }
}; 
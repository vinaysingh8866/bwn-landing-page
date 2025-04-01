interface DownloadData {
  location: string;
  timestamp: string;
  userAgent: string;
}

const API_URL = import.meta.env.PROD
  ? 'https://bharatwebnavigator.ajna.dev'
  : 'http://localhost:3001';

export const trackDownload = async (): Promise<void> => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const locationData = await response.json();
    
    const downloadData: DownloadData = {
      location: `${locationData.city}, ${locationData.country_name}`,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent
    };

    await fetch(`${API_URL}/api/track-download`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(downloadData)
    });
  } catch (error) {
    console.error('Error tracking download:', error);
  }
}; 
import { useState, useEffect, useContext } from 'react';

export default function usePhotos() {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    async function getTImelinePhotos() {
        
    }
  }, [])

  return { photos };
}
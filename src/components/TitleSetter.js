import { useEffect } from 'react';
import { useTitle } from '../contexts/TitleContext';

const TitleSetter = ({ title }) => {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle(title);
  }, [title, setTitle]);

  return null; // This component doesn't render anything
};

export default TitleSetter;
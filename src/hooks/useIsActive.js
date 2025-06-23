import { useLocation } from 'react-router-dom';

const useIsActive = () => {
  const location = useLocation();

  const isActive = (path, exact = true) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return { isActive, location };
};

export default useIsActive;

import { useLocation } from 'react-router-dom';
import { RestrictedRoute, RESTRICTED_ROUTES } from '../types/routes';

export function useRouteRestriction() {
  const location = useLocation();

  const isRestrictedRoute = (pathname: string): boolean => {
    const normalizedPath = pathname.toLowerCase();
    
    return Object.values(RESTRICTED_ROUTES).some(
      (route: RestrictedRoute) => {
        if (route.exact) {
          return normalizedPath === route.path;
        }
        
        const pattern = route.path
          .split('/')
          .map(segment => segment.startsWith(':') ? '[^/]+' : segment)
          .join('/');
          
        const regex = new RegExp(`^${pattern}$`);
        return regex.test(normalizedPath);
      }
    );
  };

  return {
    isRestricted: isRestrictedRoute(location.pathname),
    restrictedRoutes: RESTRICTED_ROUTES
  };
}
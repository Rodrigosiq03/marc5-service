export type RestrictedRoute = {
  path: string;
  exact: boolean;
};

export type RestrictedRouteKey = "LOGIN" | "LESSON";

export type RestrictedRoutesConfig = {
  [K in RestrictedRouteKey]: RestrictedRoute;
};

export const RESTRICTED_ROUTES: RestrictedRoutesConfig = {
    LOGIN: {
      path: '/login',
      exact: true
    },
    LESSON: {
      path: '/cursos/:courseId/aulas/:lessonId',
      exact: false
    }
  } as const;
export type RestrictedRoute = {
  path: string;
  exact: boolean;
};

export type RestrictedRouteKey = "LOGIN" | "LESSON" | "ADMIN";

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
    },
    ADMIN: {
      path: '/admin/*',
      exact: false
    }
  } as const;
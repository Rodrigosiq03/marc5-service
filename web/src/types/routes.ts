export type RestrictedRoute = {
  path: string;
  exact: boolean;
};

export type RestrictedRouteKey = "SIGNUP" |"LOGIN" | "LESSON" | "ADMIN";

export type RestrictedRoutesConfig = {
  [K in RestrictedRouteKey]: RestrictedRoute;
};

export const RESTRICTED_ROUTES: RestrictedRoutesConfig = {
    SIGNUP: {
      path: '/signup',
      exact: true
    },
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
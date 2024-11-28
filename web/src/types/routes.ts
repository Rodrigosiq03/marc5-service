export type RestrictedRoute = {
  path: string;
  exact: boolean;
};

export type RestrictedRouteKey = "LOGIN" | "COURSE" | "LESSON" | "ADMIN";

export type RestrictedRoutesConfig = {
  [K in RestrictedRouteKey]: RestrictedRoute;
};

export const RESTRICTED_ROUTES: RestrictedRoutesConfig = {
    LOGIN: {
      path: '/login',
      exact: true
    },
    COURSE: {
      path: '/cursos/:courseId',
      exact: false
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
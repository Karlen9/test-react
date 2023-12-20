import { MainPage } from 'pages/MainPage'
import { NotAvailableYet } from 'pages/NotAvailableYet'
import { NotFound } from 'pages/NotFound'
import type { RouteProps } from 'react-router-dom'
export enum AppRoutes {
  ANALYTIC = 'analytic',
  PROFILE = 'profile',
  MODERATION = 'moderation',
  CHATS = 'chats',
  BANNERS = 'banners',
  TEAM = 'team',
  BLOG = 'blog',
  EXCHANGE = 'exchange',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ANALYTIC]: '/analytic',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.MODERATION]: '/moderation',
  [AppRoutes.CHATS]: '/chats',
  [AppRoutes.BANNERS]: '/banners',
  [AppRoutes.TEAM]: '/team',
  [AppRoutes.BLOG]: '/blog',
  [AppRoutes.EXCHANGE]: '/exchange',
  [AppRoutes.NOT_FOUND]: '/not_found'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.ANALYTIC]: {
    path: RoutePath.analytic,
    element: <NotAvailableYet />
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <NotAvailableYet />
  },
  [AppRoutes.MODERATION]: {
    path: RoutePath.moderation,
    element: <NotAvailableYet />
  },
  [AppRoutes.CHATS]: {
    path: RoutePath.chats,
    element: <NotAvailableYet />
  },
  [AppRoutes.BANNERS]: {
    path: RoutePath.banners,
    element: <NotAvailableYet />
  },
  [AppRoutes.TEAM]: {
    path: RoutePath.team,
    element: <MainPage />
  },
  [AppRoutes.BLOG]: {
    path: RoutePath.blog,
    element: <NotAvailableYet />
  },
  [AppRoutes.EXCHANGE]: {
    path: RoutePath.exchange,
    element: <NotAvailableYet />
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFound />
  }
}

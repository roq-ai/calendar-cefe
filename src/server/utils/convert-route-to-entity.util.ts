const mapping: Record<string, string> = {
  appointments: 'appointment',
  businesses: 'business',
  'time-slots': 'time_slot',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

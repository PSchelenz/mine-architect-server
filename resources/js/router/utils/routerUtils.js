import router from '..';

export function routeLike(pattern, routeName) {
  const regexPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\\\*/g, '.*');

  return new RegExp(`^${regexPattern}$`).test(routeName);
}

export function currentRouteLike(pattern) {
  return routeLike(pattern, router.currentRoute.value.name);
}

import { readable } from 'svelte/store';

export const issues = readable([], function start(set) {
  console.log(API_USERNAME)

  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});
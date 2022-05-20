import './style.css';

import { of, map, Observable, timer } from 'rxjs';

// timer(2000).subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Completed'),
// });

console.log('Start App');

const subscription = timer(3000).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});

setTimeout(() => {
  subscription.unsubscribe();
  console.log('Program Out');
}, 2000);

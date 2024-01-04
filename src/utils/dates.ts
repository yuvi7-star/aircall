import type { Call } from '../types';

type CallDateEntry = [string, Call[]][];

export function sortCallByDates(calls: CallDateEntry) {
  calls.sort((a, b) => {
    const d1 = new Date(a[0]);
    const d2 = new Date(b[0]);

    if (d1.getFullYear() > d2.getFullYear()) {
      return -1;
    } else if (d1.getFullYear() < d2.getFullYear()) {
      return 1;
    }

    // check month
    if (d1.getMonth() > d2.getMonth()) {
      return -1;
    } else if (d1.getMonth() < d2.getMonth()) {
      return 1;
    }

    // check date
    if (d1.getDate() > d2.getDate()) {
      return -1;
    } else if (d1.getDate() < d2.getDate()) {
      return 1;
    }

    return 0;
  });

  return calls;
}

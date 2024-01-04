import type { Call } from '../types';

export function generateDummyCalls() {
  const dummyCalls: Call[] = [];

  for (let index = 0; index < 20; index++) {
    const call: Call = {
      call_type: getRandomFrom(['missed', 'answered', 'voicemail']),
      created_at: getRandomFrom([
        new Date('2022-12-09T22:48:52.789Z'),
        new Date('2022-12-09T22:38:42.789Z'),
        new Date('2022-12-12T22:38:42.789Z'),
        new Date('2022-12-12T22:40:42.789Z'),
        new Date('2022-12-12T22:45:42.789Z'),
        new Date('2022-10-12T22:30:42.789Z'),
        new Date('2022-09-12T22:32:42.789Z'),
        new Date('2022-05-12T22:35:42.789Z'),
      ]),
      direction: getRandomFrom(['inbound', 'outbound']),
      duration: 2000,
      from: getRandomFrom([
        '+33 6 45 13 53 91',
        'Arthur Andre',
        '+33 1 76 44 04 77',
      ]),
      to: String(200000),
      id: String(Math.random() * 10000000),
      is_archived: false,
      via: String(100002),
    };
    dummyCalls.push(call);
  }

  return dummyCalls;
}

function getRandomFrom<T>(array: T[]) {
  return array[Math.floor(Math.random() * array.length)];
}

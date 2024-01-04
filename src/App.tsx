import React from 'react';

import { CallSection, Header } from './components';
import type { Call, CallByDate } from './types';
import { sortCallByDates } from './utils/dates';

// const BASE_URL = 'https://cerulean-marlin-wig.cyclic.app';

function groupCallsByDate(calls: Call[]) {
  const callsByDate: CallByDate = {};
  calls.forEach(call => {
    const date = new Date(call.created_at).toLocaleDateString();
    callsByDate[date] = callsByDate[date] || [];
    callsByDate[date].push(call);
  });
  return callsByDate;
}

function App() {
  const [activities, setActivities] = React.useState<CallByDate>({});
  const [status, setStatus] = React.useState('IDLE');

  React.useEffect(() => {
    getAllCallActivities();

    async function getAllCallActivities() {
      try {
        setStatus('LOADING');
        // const activitiesResp = await fetch(`${BASE_URL}/activities`);
        // const activitiesData = await activitiesResp.json();

        const activitiesData = generateDummyCalls();
        setActivities(groupCallsByDate(activitiesData));
        setStatus('SUCCESS');
      } catch (err) {
        setStatus('ERROR');
        console.error(err);
      }
    }
  }, []);

  console.log(Object.entries(activities));

  return (
    <div className="container">
      <Header />
      {status === 'IDLE' || status === 'LOADING' ? <div>Loading...</div> : null}
      <div className="container-view">
        {sortCallByDates(Object.entries(activities)).map(([date, calls]) => {
          return <CallSection key={date} {...{ date, calls }} />;
        })}
      </div>
    </div>
  );
}

function getRandomFrom<T>(array: T[]) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateDummyCalls() {
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

export default App;

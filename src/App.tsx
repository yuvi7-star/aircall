import React from 'react';
import { CallSection, Header } from './components';
import type { Call, CallByDate } from './types';
import { sortCallByDates } from './utils/dates';
import { generateDummyCalls } from './utils/dataset';

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

export default App;

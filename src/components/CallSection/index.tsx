import type { Call } from '../../types';
import CallItem from '../CallItem';

type CallSectionProps = {
  date: string;
  calls: Call[];
};

const CallSection = ({ date, calls }: CallSectionProps) => {
  return (
    <div className="call__section">
      <div className="call__section__date">
        <span className="dotted-border"></span>
        <p>{new Date(date).toDateString().toUpperCase()}</p>
        <span className="dotted-border"></span>
      </div>
      <ul className="call__list">
        {calls.map(call => {
          return <CallItem key={call.id} {...call} />;
        })}
      </ul>
    </div>
  );
};

export default CallSection;

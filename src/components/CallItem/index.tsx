import inboundImage from '../../assets/inbound.png';
import outboundImage from '../../assets/outbound.png';
import type { Call } from '../../types';

const options: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
};

function CallItem({ from, to, created_at, call_type }: Call) {
  const date = new Date(created_at);
  const formattedTime = new Intl.DateTimeFormat('en-US', options).format(date);

  return (
    <li className="call__item">
      <div className="call__item__container">
        <span>
          <img
            style={{ objectFit: 'contain', height: 35, marginTop: 8 }}
            src={call_type === 'answered' ? inboundImage : outboundImage}
          />
        </span>
        <div className="call__item__info">
          <h4 className="call__item__from">{from}</h4>
          <p className="call__item__para">Tried to call on {to}</p>
        </div>
      </div>
      <div className="call__item__time">
        <span className="call__item__time__text">
          {formattedTime.slice(0, formattedTime.length - 2)}
        </span>
        <span className="call__item__time__type">
          {formattedTime.slice(-2)}
        </span>
      </div>
    </li>
  );
}

export default CallItem;

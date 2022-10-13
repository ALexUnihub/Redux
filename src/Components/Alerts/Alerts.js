import './Alerts.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAlertMessage, removeAlert } from '../../reducer/alertSlice';

export default function AlertElement(props) {
  const alertMessages = useSelector(getAlertMessage);
  const dispatch = useDispatch();

  return (
    <div className='alert__wrapper'>
      {Object.entries(alertMessages).map(([messageId, message]) =>
        <div key={messageId} className='alert__item' style={{backgroundColor: props.color}}>
          {message}
          <button
            className='alert__item__btn'
            onClick={event => dispatch(removeAlert(messageId))}
            >✕
          </button>
        </div>
      )}
    </div>
  );
}

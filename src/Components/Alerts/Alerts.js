import './Alerts.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAlertMessage,
  setAlertId,
  getAlertMessage,
  getAlertId,
} from '../../reducer/alertSlice';
import { useEffect } from 'react';

export default function AlertElement(props) {
  const alertMessages = useSelector(getAlertMessage);
  const alertId = useSelector(getAlertId);
  const dispatch = useDispatch();

  useEffect(() => {
    return function() {
      let newId = alertId + alertMessages.length;
      dispatch(setAlertId(newId));
    }
  }, [alertMessages]);

  return (
    <div className='alert__wrapper'>
      {alertMessages.map((item, i) => 
        <div key={alertId + i} className={`alert__item ${alertId + i}`}>
          {item}
          <button
            className='alert__item__btn'
            onClick={(event) => {
              const parentElement = event.target.closest('div');
              dispatch(setAlertMessage({
                add: false,
                message: parentElement.textContent.split('✕')[0],
              }));
            }}
            >✕
          </button>
        </div>
      )}
    </div>
  );
}

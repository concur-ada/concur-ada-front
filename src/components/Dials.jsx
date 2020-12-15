import PercentageDial from './PercentageDial';
import DaysDial from './DaysDial';
import './Dials.css';

const Dials = () => {
  return (
    <div className="dials">
      <PercentageDial percentage={75} speed={50} />
      <DaysDial percentage={15} speed={50} />
    </div>
  );
};

export default Dials;

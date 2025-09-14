import { BoxInfo, InfoTitle } from './styled';
import PropTypes from 'prop-types';

export default function InfoDashboard({ title, number, colorBackground, colorTitle }) {
  return (
    <BoxInfo backgroundColor={colorBackground} color={colorTitle}>
      <InfoTitle color={colorTitle}>
        <p>{title}</p>
        <p>#</p>
      </InfoTitle>
      <p className="infoNumber">{number}</p>
    </BoxInfo>
  );
}
InfoDashboard.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  colorBackground: PropTypes.string.isRequired
};


export default const Value = ({
    goodStats,
    neutralStats,
    badStats,
    total,
    positivePercentage,
}) => (
    <>
        <p>Good:{goodStats}</p>
        <p>Neutral:{neutralStats}</p>
        <p>Bad:{badStats}</p>
        <p>Total:{total}</p>
        <p>Positive feedback:{positivePercentage}%</p>
    </>
);

Value.propTypes = {
  goodStats: PropTypes.number.isRequired,
  neutralStats: PropTypes.number.isRequired,
  badStats: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
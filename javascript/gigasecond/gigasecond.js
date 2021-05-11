export const gigasecond = (date) => {
  // gigasecond = 1,000,000,000
  // milliseconds = gigasecond * 1000
  const msInGigasecond = 1000000000000;
  const afterGigasecond = new Date();
  afterGigasecond.setTime(date.getTime() + msInGigasecond);
  return afterGigasecond;
};

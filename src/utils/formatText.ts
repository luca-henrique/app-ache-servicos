export const MAX_LENGTH_TEXT = 125;

export const textShrink = (text: string) => {
  return `${text.slice(0, MAX_LENGTH_TEXT)} ...`;
};

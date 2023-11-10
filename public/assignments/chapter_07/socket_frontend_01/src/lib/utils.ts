export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function generateCloseDate(): Date {
  const isPositive = Math.random() > 0.5;

  const currentDate = new Date();

  const mutator = getRandomInt(1_000_000, 1_000_000_00);

  const millisDate =
    currentDate.getTime() + (isPositive ? mutator : -1 * mutator);

  const closeDate = new Date(millisDate);

  return closeDate;
}

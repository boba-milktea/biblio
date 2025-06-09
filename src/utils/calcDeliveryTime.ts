export const calcDeliveryTime = (time: number, priority: boolean) => {
  const waitingTime = 7200;
  const priorityWaitingTime = 3600;
  const priorityDelivery = time + priorityWaitingTime;
  const standardDelivery = time + waitingTime;

  if (priority) {
    return new Date(priorityDelivery * 1000).toLocaleString();
  }
  return new Date(standardDelivery * 1000).toLocaleString();
};

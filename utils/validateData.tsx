export function validateData(data) {
  if (!data) {
    throw new Error("An error has occurred while trying to fetch data");
  }
}

export function validateCarConnection(data) {
  validateData(data);

  if (data?.carConnection?.totalCount <= 1) {
    throw new Error("Not enough cars to have a comparison");
  }
}

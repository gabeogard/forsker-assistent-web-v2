export const withEventValueSelector =
  <T extends unknown> (handleSelectedValue: (value: T) => void) =>
  (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    handleSelectedValue(event.target.value as T);

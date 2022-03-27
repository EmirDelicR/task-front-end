function validateInput(value: string) {
  const api = new RegExp('[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}', 'g');
  return api.test(value);
}

export { validateInput };

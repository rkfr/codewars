function alphanumeric(string) {
  const regex = /^[a-z0-9]+$/i;
  return regex.test(string.toLowerCase());
}
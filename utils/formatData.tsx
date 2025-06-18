export function formatPrice(data) {
  if (data != null) {
    return new Intl.NumberFormat("lt-LT").format(data);
  } else return "";
}

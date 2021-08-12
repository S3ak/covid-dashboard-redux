export async function fetchRegions() {
  const response = await fetch("https://covid19.mathdro.id/api/confirmed");
  return response.json();
}

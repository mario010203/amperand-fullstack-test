# Fullstack Test
## The Scenario
We work with many clients which provide us, via API, the information of the e-vehicles we operate with. For this exercise, we are going to use only two clients with their corresponding APIs:
- Lime: https://github.com/mgonzalezbaile/amperand-fullstack/blob/master/clients/lime-get-scooter.json
- Bird: https://github.com/mgonzalezbaile/amperand-fullstack/blob/master/clients/bird-get-scooters.json

## The Challenge (Back-End)
We want you to build a small app that:

1. Fetches the e-vehicles information from those clients.
2. Provides an endpoint to query e-vehicles information.
3. The endpoint should allow to filter by `battery-level` range and `client`.

## The Challenge (Front-End)
We want you to build a small app that:

1. Shows in a map a marker for each e-vehicle based on its location.
2. When we tap/click on a marker, the details of the e-vehicle are shown.
3. Markers are clustered in groups of 50.

## NOTES
- You can solve either one or both challenges as well as you can solve as many points as you want from each challenge.
- Don't include comments in your code, use the `README.md` to explain every decision and assumptions you have made.
- You can send the solution as a .zip file to tech@microcharge.tech
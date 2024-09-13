// Initialize map with Leaflet and center it between Aflou and Laghouat
const map = L.map('map').setView([34.2901, 2.7499], 8); // Centered between Aflou and Laghouat

// Load OpenStreetMap tiles
L.tileLayer('https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Define A and B points, markers, and polyline
let pointA = null, pointB = null;
let markerA = null, markerB = null;
let polyline = null;
let chartInstance = null; // To hold the Chart.js instance

// Add click event to select points
map.on('click', function (e) {
  if (!pointA) {
    pointA = e.latlng;
    markerA = L.marker(pointA, { draggable: true }).addTo(map).bindPopup("النقطة أ").openPopup();
    markerA.on('dragend', updateProfile); // Update profile on marker drag
  } else if (!pointB) {
    pointB = e.latlng;
    markerB = L.marker(pointB, { draggable: true }).addTo(map).bindPopup("النقطة ب").openPopup();
    markerB.on('dragend', updateProfile); // Update profile on marker drag
    generateProfile(pointB, pointA); // Call function to generate the initial topographic profile
  }
});

// Function to interpolate points between A and B
function interpolatePoints(pointB, pointA, numPoints = 10) {
  const latStep = (pointA.lat - pointB.lat) / (numPoints - 1);
  const lngStep = (pointA.lng - pointB.lng) / (numPoints - 1);

  const points = [];
  for (let i = 0; i < numPoints; i++) {
    const lat = pointB.lat + (i * latStep);
    const lng = pointB.lng + (i * lngStep);
    points.push({ lat, lng });
  }
  return points;
}

// Function to calculate distances for X-axis
function getDistancesForXAxis(totalDistance, numPoints = 10) {
  const step = totalDistance / (numPoints - 1); // Distance between each point
  const distances = Array.from({ length: numPoints }, (_, i) => Math.round(i * step));
  return distances;
}

// Function to generate the topographic profile using Open-Elevation API
async function generateProfile(pointB, pointA) {
  const interpolatedPoints = interpolatePoints(pointB, pointA); // Get points between A and B
  const locations = interpolatedPoints.map(point => `${point.lat},${point.lng}`).join('|');
  const apiUrl = `https://api.open-elevation.com/api/v1/lookup?locations=${locations}`;

  try {
    // Fetch elevation data from Open-Elevation API
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.results) {
      const elevations = data.results.map(result => result.elevation);

      // Calculate the total distance between points A and B
      const totalDistance = map.distance(pointB, pointA);
      const distances = getDistancesForXAxis(totalDistance); // Get evenly spaced distances for the X-axis

      plotProfile(distances, elevations); // Plot the elevation profile
    } else {
      console.error("Error: Elevation data not available");
    }
  } catch (error) {
    console.error("Error fetching data from Open-Elevation: ", error);
  }
}

// Function to plot the profile using Chart.js
function plotProfile(distances, elevations) {
  const ctx = document.getElementById('chart').getContext('2d');

  // Destroy previous chart instance if it exists
  if (chartInstance) {
    chartInstance.destroy();
  }

  // Create a new chart
  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: distances, // Distances between points for X-axis
      datasets: [{
        label: 'الارتفاع (م)',
        data: elevations,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4 // Make the line smoother
      }]
    },
    options: {
      scales: {
        x: {
          display: true,
          title: { display: true, text: 'المسافة (م)', font: { size: 16 } },
          ticks: {
            callback: function(value) {
              return Math.round(value); // Round x-axis values
            },
            font: { size: 12 } // Make x-axis labels bigger
          },
          reverse: true
        },
        y: {
          display: true,
          title: { display: true, text: 'الارتفاع (م)', font: { size: 16 } },
          position: 'right',
          grid: { drawOnChartArea: true },
          ticks: { font: { size: 12 } } // Make y-axis labels bigger
        }
      },
      plugins: {
        annotation: {
          annotations: {
            aLabel: {
              type: 'label',
              content: ['أ'],
              position: 'start',
              font: { size: 18 },
              xValue: 0, // Position on X-axis
              yValue: Math.max(...elevations), // Top Y-axis value
              textAlign: 'left'
            },
            bLabel: {
              type: 'label',
              content: ['ب'],
              position: 'start',
              font: { size: 18 },
              xValue: distances[distances.length - 1], // End on X-axis
              yValue: Math.max(...elevations), // Top Y-axis value
              textAlign: 'right'
            }
          }
        }
      }
    }
  });

  // Add a custom scale on the bottom-left
  ctx.font = "14px Arial";
  ctx.fillText("مقياس", 30, ctx.canvas.height - 20); // Position for the scale text
}

// Function to update the profile and polyline when markers are moved
function updateProfile() {
  if (markerA && markerB) {
    pointB = markerB.getLatLng();
    pointA = markerA.getLatLng();

    // Update or create the polyline
    if (polyline) {
      polyline.setLatLngs([pointB, pointA]);
    } else {
      polyline = L.polyline([pointB, pointA], { color: 'blue' }).addTo(map);
    }

    // Update the profile chart
    generateProfile(pointB, pointA);
  }
}

// Reset button functionality
document.getElementById('reset').addEventListener('click', function () {
  // Remove marker A if it exists
  if (markerA) {
    map.removeLayer(markerA);
    markerA = null;
    pointA = null;
  }

  // Remove marker B if it exists
  if (markerB) {
    map.removeLayer(markerB);
    markerB = null;
    pointB = null;
  }

  // Remove polyline if it exists
  if (polyline) {
    map.removeLayer(polyline);
    polyline = null;
  }

  // Destroy the chart instance if it exists
  if (chartInstance) {
    chartInstance.destroy();
    chartInstance = null;
  }
});

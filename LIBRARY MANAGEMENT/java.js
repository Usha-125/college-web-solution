function showBusInfo(busName) {
    const busInfo = document.getElementById('bus-info');

    // Sample data for bus information with unique routes in Bangalore
    const busData = {
        'Bus 1': {
            completedStops: [
                { stop: 'MG Road', time: '07:00 AM' },
                { stop: 'Brigade Road', time: '07:15 AM' }
            ],
            upcomingStops: [
                { stop: 'Indiranagar', time: '07:30 AM' },
                { stop: 'Koramangala', time: '07:45 AM' },
                { stop: 'HSR Layout', time: '08:00 AM' }
            ]
        },
        'Bus 2': {
            completedStops: [
                { stop: 'Karnataka Chhatra Nivas', time: '07:05 AM' },
                { stop: 'Jayanagar', time: '07:20 AM' }
            ],
            upcomingStops: [
                { stop: 'Bangalore South', time: '07:35 AM' },
                { stop: 'Wilson Garden', time: '07:50 AM' },
                { stop: 'Shanthinagar', time: '08:05 AM' }
            ]
        },
        'Bus 3': {
            completedStops: [
                { stop: 'Malleswaram', time: '07:10 AM' },
                { stop: 'Rajajinagar', time: '07:25 AM' }
            ],
            upcomingStops: [
                { stop: 'Bas aveshwara Nagar', time: '07:40 AM' },
                { stop: 'Vijayanagar', time: '07:55 AM' },
                { stop: 'Kengeri', time: '08:10 AM' }
            ]
        },
        'Bus 4': {
            completedStops: [
                { stop: 'Whitefield', time: '07:12 AM' },
                { stop: 'ITPL', time: '07:27 AM' }
            ],
            upcomingStops: [
                { stop: 'Marathahalli', time: '07:42 AM' },
                { stop: 'Bellandur', time: '07:57 AM' },
                { stop: 'Sarjapur', time: '08:12 AM' }
            ]
        }
    };

    const bus = busData[busName];
    if (bus) {
        busInfo.innerHTML = `<h3>${busName} Information</h3>
            <h4>Completed Stops:</h4>
            <ul>${bus.completedStops.map(stop => `<li>${stop.stop} at ${stop.time}</li>`).join('')}</ul>
            <h4>Upcoming Stops:</h4>
            <ul>${bus.upcomingStops.map(stop => `<li>${stop.stop} at ${stop.time}</li>`).join('')}</ul>`;
    } else {
        busInfo.innerHTML = `<p>No information available for ${busName}.</p>`;
    }
}
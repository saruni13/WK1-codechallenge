function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointsPerKmOverSpeedLimit = 1;

    if (speed < speedLimit) {
        console.log("Points: 0 (OK)");
        return;
    }

    const kmOverSpeedLimit = speed - speedLimit;
    const demeritPoints = Math.floor(kmOverSpeedLimit / kmPerDemeritPoint);

    if (demeritPoints > 12) {
        console.log("License suspended");
    } else {
        console.log("Points:", demeritPoints);
    }
}
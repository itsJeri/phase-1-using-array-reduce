const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// sum of all in batteryBatches array
// function batteryCounter(total, batteryBatch) {
//     return total + batteryBatch;
// }

let totalBatteries = batteryBatches.reduce(function(total, batteryBatch) {return total + batteryBatch}, 0);
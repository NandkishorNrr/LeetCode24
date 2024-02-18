/**
 * @param {number} n - Total number of meeting rooms
 * @param {number[][]} meetings - Array of meetings, each meeting represented by [start time, end time]
 * @return {number} - Index of the room with the maximum number of bookings
 */
var mostBooked = function (n, meetings) {
    // Sort meetings based on their start times
    meetings.sort((a, b) => a[0] - b[0]);
    
    // Array to keep track of the end times of meetings in each room
    const roomTime = new Array(n).fill(0);
    
    // Array to keep track of the frequency of bookings in each room
    const countRoomFreq = new Array(n).fill(0);
    
    // Iterate through each meeting
    for (let [startTime, endTime] of meetings) {
        // Find the index of the first available room
        let freeRoomIndex = roomTime.findIndex(endTime => endTime <= startTime);
        
        // If no available room found, allocate the room with the earliest end time
        if (freeRoomIndex < 0) {
            freeRoomIndex = roomTime.indexOf(Math.min(...roomTime));
        }
        
        // Increment the booking count for the allocated room
        countRoomFreq[freeRoomIndex]++;
        
        // Calculate the end time of the current meeting considering the previous meeting in the room
        let lastMeetingEndtime = roomTime[freeRoomIndex];
        let meetingEndTime = (startTime < lastMeetingEndtime) ? (lastMeetingEndtime - startTime) + endTime : endTime;
        
        // Update the end time of the room after allocating the meeting
        roomTime[freeRoomIndex] = meetingEndTime;
    }
    
    // Find the index of the room with the maximum booking frequency
    return countRoomFreq.indexOf(Math.max(...countRoomFreq));
};
var leastInterval = function(tasks, n) {
    // Create a map to count the frequency of each task
    const taskFreq = {};
    for (const task of tasks) {
        taskFreq[task] = (taskFreq[task] || 0) + 1;
    }
    
    // Convert task frequencies to an array
    const freqArray = Object.values(taskFreq);
    
    // Sort the frequencies in descending order
    freqArray.sort((a, b) => b - a);
    
    // Get the maximum frequency (most frequent task)
    const maxFreq = freqArray[0];
    
    // Calculate the number of idle slots
    let idleSlots = (maxFreq - 1) * n;
    
    // Iterate through the remaining frequencies to fill idle slots
    for (let i = 1; i < freqArray.length; i++) {
        idleSlots -= Math.min(maxFreq - 1, freqArray[i]);
    }
    
    // Calculate the total time needed
    const totalTime = Math.max(idleSlots + tasks.length, tasks.length);
    
    return totalTime;
};

class Solution {
    public boolean uniqueOccurrences(int[] arr) {
          // Create a HashMap to store the occurrences of each value
        Map<Integer, Integer> occurrences = new HashMap<>();
        
        // Use a HashSet to check for unique occurrences
        Set<Integer> uniqueOccurrences = new HashSet<>();

        // Count occurrences of each value in the array
        for (int num : arr) {
            occurrences.put(num, occurrences.getOrDefault(num, 0) + 1);
        }

        // Check for unique occurrences
        for (int count : occurrences.values()) {
            if (!uniqueOccurrences.add(count)) {
                // If the count is already present, it's not unique
                return false;
            }
        }

        return true;
    }
}
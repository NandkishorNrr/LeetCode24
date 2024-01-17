class Solution {
    public boolean uniqueOccurrences(int[] arr) {
         // Create a HashMap to store the occurrences of each value
        Map<Integer, Integer> occurrences = new HashMap<>();

        // Count occurrences of each value in the array
        for (int num : arr) {
            occurrences.put(num, occurrences.getOrDefault(num, 0) + 1);
        }

        // Check if the count of occurrences is unique
        Set<Integer> uniqueCounts = new HashSet<>(occurrences.values());

        return uniqueCounts.size() == occurrences.size();
    }
}
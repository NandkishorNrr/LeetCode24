import java.util.HashMap;
import java.util.Map;

public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {
    }

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public int pseudoPalindromicPaths(TreeNode root) {
        return dfs(root, new HashMap<>());
    }

    private int dfs(TreeNode node, Map<Integer, Integer> countMap) {
        if (node == null) {
            return 0;
        }

        // Increment the count for the current digit in the path
        countMap.put(node.val, countMap.getOrDefault(node.val, 0) + 1);

        // If it's a leaf node, check if the path is pseudo-palindromic
        if (node.left == null && node.right == null) {
            int oddCount = 0;
            for (int count : countMap.values()) {
                if (count % 2 == 1) {
                    oddCount++;
                }
            }
            // For a path to be pseudo-palindromic, all digits can have even counts, or only one can have an odd count
            return oddCount <= 1 ? 1 : 0;
        }

        // Recursive DFS for left and right children
        int result = dfs(node.left, new HashMap<>(countMap)) + dfs(node.right, new HashMap<>(countMap));

        return result;
    }
}

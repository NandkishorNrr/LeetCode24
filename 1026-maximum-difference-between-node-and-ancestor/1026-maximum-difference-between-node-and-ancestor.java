/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public int maxAncestorDiff(TreeNode root) {
        return dfs(root, root.val, root.val);
    }

    private int dfs(TreeNode node, int max, int min) {
        if (node == null) {
            return max - min;
        }

        // Update max and min values encountered so far
        max = Math.max(max, node.val);
        min = Math.min(min, node.val);

        // Recursively explore left and right subtrees
        int leftDiff = dfs(node.left, max, min);
        int rightDiff = dfs(node.right, max, min);

        // Return the maximum difference from left and right subtrees
        return Math.max(leftDiff, rightDiff);
    }
}
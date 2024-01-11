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
    private int maxDiff;

    public int maxAncestorDiff(TreeNode root) {
        maxDiff = 0;
        dfs(root, root.val, root.val);
        return maxDiff;
    }

    private void dfs(TreeNode node, int max, int min) {
        if (node == null) {
            return;
        }

        // Update max and min values encountered so far
        max = Math.max(max, node.val);
        min = Math.min(min, node.val);

        // Update maxDiff if the current node contributes to a greater difference
        maxDiff = Math.max(maxDiff, Math.max(Math.abs(node.val - max), Math.abs(node.val - min)));

        // Recursively explore left and right subtrees
        dfs(node.left, max, min);
        dfs(node.right, max, min);
    }
}
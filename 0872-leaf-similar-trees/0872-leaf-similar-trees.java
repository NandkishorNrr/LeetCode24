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
class Solution {
     public boolean leafSimilar(TreeNode root1, TreeNode root2) {
        Stack<TreeNode> stack1 = new Stack<>();
        Stack<TreeNode> stack2 = new Stack<>();

        stack1.push(root1);
        stack2.push(root2);

        while (!stack1.isEmpty() || !stack2.isEmpty()) {
            if (collectNextLeaf(stack1) != collectNextLeaf(stack2)) {
                return false;
            }
        }

        return stack1.isEmpty() && stack2.isEmpty();
    }

    private int collectNextLeaf(Stack<TreeNode> stack) {
        while (!stack.isEmpty()) {
            TreeNode node = stack.pop();

            if (node != null) {
                if (node.left == null && node.right == null) {
                    return node.val;
                }

                stack.push(node.right);
                stack.push(node.left);
            }
        }

        return -1; // Signifies no more leaves
    }
}
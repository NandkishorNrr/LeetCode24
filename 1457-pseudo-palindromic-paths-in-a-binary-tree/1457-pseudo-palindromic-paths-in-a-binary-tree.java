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
        return dfs(root, 0);
    }

    private int dfs(TreeNode node, int pathCount) {
        if (node == null) {
            return 0;
        }

        // Toggle the current digit in the pathCount
        pathCount ^= (1 << node.val);

        // If it's a leaf node, check if the path is pseudo-palindromic
        if (node.left == null && node.right == null) {
            // For a path to be pseudo-palindromic, at most one bit in pathCount should be set
            return (pathCount & (pathCount - 1)) == 0 ? 1 : 0;
        }

        // Recursive DFS for left and right children
        int result = dfs(node.left, pathCount) + dfs(node.right, pathCount);

        return result;
    }
}

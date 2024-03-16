var pathSum = function (root, targetSum) {
    if (!root) return 0;
    const runningSumsMap = new Map();
    runningSumsMap.set(0, 1);

    function pathSumFromRoot(currentNode, currentRunningValSum) {
        let currentNodePathSum = 0;
        currentRunningValSum += currentNode.val;
        let missingPrevRunningValSum = currentRunningValSum - targetSum;

        if (runningSumsMap.has(missingPrevRunningValSum)) currentNodePathSum += runningSumsMap.get(missingPrevRunningValSum);

        if (!runningSumsMap.has(currentRunningValSum)) runningSumsMap.set(currentRunningValSum, 1);
        else runningSumsMap.set(currentRunningValSum, runningSumsMap.get(currentRunningValSum) + 1);

        let childrenNodesPathSum = 0;
        if (currentNode.left) childrenNodesPathSum += pathSumFromRoot(currentNode.left, currentRunningValSum);
        if (currentNode.right) childrenNodesPathSum += pathSumFromRoot(currentNode.right, currentRunningValSum);
        
        runningSumsMap.set(currentRunningValSum, runningSumsMap.get(currentRunningValSum) - 1);

        return currentNodePathSum + childrenNodesPathSum;
    }
    return pathSumFromRoot(root, 0);
};
class Solution {
    public List<List<Integer>> findMatrix(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        res.add(new ArrayList<>());
        for (int i = 0; i < nums.length; i++) {
            int row = 0;
            while (res.get(row).contains(nums[i])){
                if (res.size() == row + 1)
                    res.add(new ArrayList<>());
                row++;
            }
            res.get(row).add(nums[i]);
//        System.out.println(res);
        }
        return res;
    }
}
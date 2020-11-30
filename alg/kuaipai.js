
/**
 * 快速排序
 * 将数组一分为二取中间的数排序
 * 
 * **/

// let res = quickSort([1,34,5,76,8,6,9,7,6,3]);



function quickNumber(nums) {
    if (nums.length < 2) {
        return nums
    } else {
        // 取个数组中基础base作为比较值
        var centerNum = Math.floor(nums.length / 2)
        var base = nums.splice(centerNum, 1)[0]
        // 对比值
        var leftArr = []
        var rightArr = []
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > base) {
                rightArr.push(nums[i])
            } else {
                leftArr.push(nums[i])
            }
        }
    }
    return quickNumber(leftArr).concat([base], quickNumber(rightArr))
}
console.log(quickNumber([1, 34, 5, 76, 8, 6, 9, 7, 6, 3]))

/**
 * 
 * 冒泡排序
 * 思路比较相邻的两个元素，第一个比第二个大就交换他们的位置
 * 
 */

function bubbleSort(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j+1] 
                nums[j + 1] = nums[j]
                nums[j] = temp
            }
        }
    }
    return nums
}
console.log(bubbleSort([1, 34, 5, 76, 8, 6, 9, 7, 6, 3]))

/**
 * 选择排序
 * 找到最小的值放在数组中的第一位，然后在找剩余元素中最小的值
 * 
 */

function selectSort(){
    
}
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let preorder = [1,2,4,7,3,5,6,8]
let inorder = [4,7,2,1,5,3,8,6]


function buildTree()
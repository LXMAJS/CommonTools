using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CommonDemo.Pinyin
{
    public class TreeNode<T>
        where T : class, new()
    {
        /// <summary>
        /// 当前节点的数据
        /// </summary>
        public T Data { get; set; }

        /// <summary>
        /// 父节点
        /// </summary>
        public TreeNode<T> Parent { get; set; }

        /// <summary>
        /// 子节点列表
        /// </summary>
        private List<TreeNode<T>> _children;
        public List<TreeNode<T>> Children
        {
            get
            {
                if (_children == null) _children = new List<TreeNode<T>>();
                return _children;
            }
        }

        /// <summary>
        /// 树结构
        /// </summary>
        public TreeNode()
        {
            Data = new T();
        }

    }
}

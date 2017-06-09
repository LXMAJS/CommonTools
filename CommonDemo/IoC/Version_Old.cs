using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CommonDemo.IoC
{
    internal sealed class Version_Old : IFunction
    {
        public string FuncResult { get; private set; }

        public Version_Old()
        {
            this.FuncResult = "旧版本";
        }

        public string DoFunc()
        {
            return this.FuncResult;
        }
    }
}

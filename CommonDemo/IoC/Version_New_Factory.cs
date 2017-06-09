﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CommonDemo.IoC
{
    internal sealed class Version_New_Factory : IFactory
    {
        public IFunction version()
        {
            return new Version_New();
        }
    }
}

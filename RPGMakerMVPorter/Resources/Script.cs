using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RPGMakerMVPorter
{
    class Script
    {
        public string Path;
        public string Name;
        public string Extension;

        public Script(string path, string name, string extension)
        {
            Path = path;
            Name = name;
            Extension = extension;
        }
    }
}

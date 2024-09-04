using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace RPGMakerMVPorter
{
    public class Data
    {
        public string Path;
        public string Name;
        public string Extension;

        public Data(string path, string name, string extension)
        {
            Path = path;
            Name = name;
            Extension = extension;
        }

        public static string GetGameTitle(string path)
        {
            if (!File.Exists(path))
                return "Unknown";

            string jsonContent = File.ReadAllText(path);
            JObject jsonObject = JObject.Parse(jsonContent);

            if(!jsonObject.ContainsKey("gameTitle"))
                return "Unknown";

            return jsonObject["gameTitle"]?.ToString();
        }
    }
}

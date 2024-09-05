using OpenTK.Mathematics;
using OpenTK.Windowing.Desktop;

namespace RPGMakerMVEngine
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var gameWindowSettings = GameWindowSettings.Default;
            var nativeWindowSettings = new NativeWindowSettings()
            {
                ClientSize = new Vector2i(800, 600),
                Title = "OpenTK 2D",
            };

            using (var engine = new Engine(gameWindowSettings, nativeWindowSettings))
            {
                engine.Run();
            }
        }
    }
}
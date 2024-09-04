using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;

namespace RPGMakerMVPorter
{
    public enum FileType
    {
        Audio,
        Data,
        Font,
        Image,
        Script
    }


    public partial class MainWindow : Window
    {
        private string projectPath = "";

        private bool loadedSuccessfully = false;
        private Dictionary<string, Audio> Audios = new Dictionary<string, Audio>();
        private Dictionary<string, Data> Datas = new Dictionary<string, Data>();
        private Dictionary<string, Font> Fonts = new Dictionary<string, Font>();
        private Dictionary<string, Image> Images = new Dictionary<string, Image>();
        private Dictionary<string, Script> Scripts = new Dictionary<string, Script>();

        public MainWindow()
        {
            InitializeComponent();
        }

        private void OpenProject_Click(object sender, RoutedEventArgs e)
        {
            using (var folderDialog = new System.Windows.Forms.FolderBrowserDialog())
            {
                folderDialog.Description = "";
                var result = folderDialog.ShowDialog();

                if (result == System.Windows.Forms.DialogResult.OK)
                {
                    projectPath = folderDialog.SelectedPath;
                    ProjectPath.Text = Path.GetFileName(projectPath);

                    Audios.Clear();
                    Datas.Clear();
                    Fonts.Clear();
                    Images.Clear();
                    Scripts.Clear();
                    loadedSuccessfully = false;
                    progressBar.Visibility = Visibility.Hidden;

                    Load();
                }
            }
        }

        private void Load()
        {
            string www = projectPath + "\\www\\";

            if (!Directory.Exists(www))
            {
                MessageBox.Show("Failed to find game files!\nThe directory must contain a www folder.", "Error",
                                MessageBoxButton.OK, MessageBoxImage.Error);
                return;
            }

            string audioPath = www + "audio";
            if (Directory.Exists(audioPath))
            {
                Traverse(audioPath, FileType.Audio);
                numberOfAudio.Text = Audios.Count.ToString();
            }

            string dataPath = www + "data";
            if (Directory.Exists(dataPath))
            {
                Traverse(dataPath, FileType.Data);
                numberOfData.Text = Datas.Count.ToString();

                gameTitle.Text = Data.GetGameTitle(dataPath + "\\System.json");
            }

            string fontPath = www + "fonts";
            if (Directory.Exists(fontPath))
            {
                Traverse(fontPath, FileType.Font);
                numberOfFonts.Text = Fonts.Count.ToString();
            }

            string imagePath = www + "img";
            if (Directory.Exists(imagePath))
            {
                Traverse(imagePath, FileType.Image);
                numberOfImages.Text = Images.Count.ToString();
            }

            string scriptPath = www + "js";
            if (Directory.Exists(scriptPath))
            {
                Traverse(scriptPath, FileType.Script);
                numberOfScrips.Text = Scripts.Count.ToString();
            }

            LogTextBlock.Text += "Project successfully loaded!\n";

            loadedSuccessfully = true;
        }

        private async void CompileAndBuild_Click(object sender, RoutedEventArgs e)
        {
            if (!loadedSuccessfully)
            {
                MessageBox.Show("Please select a project/game first!", "Error",
                                MessageBoxButton.OK, MessageBoxImage.Error);
                return;
            }

            string outputPath = Path.GetFullPath(projectPath + "\\..\\" + Path.GetFileName(projectPath) + "_Ported");

            if(Directory.Exists(outputPath))
            {
                try { Directory.Delete(outputPath, true); }
                catch(Exception exc)
                {
                    MessageBox.Show("The ported project already exists, and is opened in a program!\n" +
                                    "'" + outputPath + "'", 
                                    "Error",
                                    MessageBoxButton.OK, MessageBoxImage.Error);
                    return;
                }
            }
            Directory.CreateDirectory(outputPath);
            LogTextBlock.Text += "Created new project at '" + outputPath + "'\n";

            progressBar.Visibility = Visibility.Visible;
            LogTextBlock.Text += "Copying audio files...\n";
            await StartCopyAsync(Audios, outputPath, "audio", "Copying audio files");

            LogTextBlock.Text += "Copying font files...\n";
            await StartCopyAsync(Fonts, outputPath, "fonts", "Copying font files");

            LogTextBlock.Text += "Copying image files...\n";
            await StartCopyAsync(Images, outputPath, "img", "Copying image files");
            progressBar.Visibility = Visibility.Hidden;



            MessageBox.Show("Successfully compiled and built the full game!\n" +
                            "Output: '" + Path.GetFileName(outputPath) + "'", 
                            "Success",
                            MessageBoxButton.OK, MessageBoxImage.Information);
        }

        private void Traverse(string path, FileType type)
        {
            foreach (var dir in Directory.GetDirectories(path))
            {
                Traverse(dir, type);
            }

            if (type == FileType.Audio)
            {
                foreach (var file in Directory.GetFiles(path, "*.ogg"))
                {
                    Audios.Add(file, new Audio(file, Path.GetFileNameWithoutExtension(file), Path.GetExtension(file)));
                }
            }

            if (type == FileType.Data)
            {
                foreach (var file in Directory.GetFiles(path, "*.json"))
                {
                    Datas.Add(file, new Data(file, Path.GetFileNameWithoutExtension(file), Path.GetExtension(file)));
                }
            }

            if (type == FileType.Font)
            {
                foreach (var file in Directory.GetFiles(path, "*.css"))
                {
                    Fonts.Add(file, new Font(file, Path.GetFileNameWithoutExtension(file), Path.GetExtension(file)));
                }
                foreach (var file in Directory.GetFiles(path, "*.ttf"))
                {
                    Fonts.Add(file, new Font(file, Path.GetFileNameWithoutExtension(file), Path.GetExtension(file)));
                }
            }

            if (type == FileType.Image)
            {
                foreach (var file in Directory.GetFiles(path, "*.png"))
                {
                    Images.Add(file, new Image(file, Path.GetFileNameWithoutExtension(file), Path.GetExtension(file)));
                }
            }

            if (type == FileType.Script)
            {
                foreach (var file in Directory.GetFiles(path, "*.js"))
                {
                    Scripts.Add(file, new Script(file, Path.GetFileNameWithoutExtension(file), Path.GetExtension(file)));
                }
            }
        }

        private async Task StartCopyAsync<T>(Dictionary<string, T> files, string output, string folderToFind, string description)
        {
            // Set the total progress bar max value
            FileProgressBar.Maximum = files.Count;

            // Reset the progress bar and status
            FileProgressBar.Value = 0;
            ProgressTextBlock.Text = $"0/{files.Count}";
            CurrentFileTextBlock.Text = description;

            // Use Progress to report progress to the UI
            var progressHandler = new Progress<(int, string)>(progress =>
            {
                // Update the progress bar
                FileProgressBar.Value = progress.Item1;

                // Update the status text with "x/max"
                ProgressTextBlock.Text = $"{progress.Item1}/{files.Count}";

                // Update the current file being copied
                CurrentFileTextBlock.Text = $"Copying: { Path.GetFileName(progress.Item2) }";
            });

            var progress = (IProgress<(int, string)>)progressHandler;

            // Run the copy operation in a background thread
            await Task.Run(() => CopyFiles(ref files, output, folderToFind, progress));
        }

        private void CopyFiles<T>(ref Dictionary<string,T> files, string output, string folderToFind, IProgress<(int, string)> progress)
        {
            int fileIndex = 0;
            var keysToUpdate = new List<(string oldKey, string newKey)>();

            foreach (var file in files.ToList())
            {
                var foldersAfter = GetFoldersAfter(file.Key, folderToFind);
                string currentFolder = output + "\\www\\" + folderToFind + "\\";
                if (foldersAfter.Length > 0)
                {
                    foreach (var folder in foldersAfter)
                    {
                        if (!Directory.Exists(currentFolder + folder))
                            Directory.CreateDirectory(currentFolder + folder);

                        currentFolder += folder + "\\";
                    }
                }
                else
                {
                    if (!Directory.Exists(currentFolder))
                        Directory.CreateDirectory(currentFolder);
                }

                string dest = currentFolder + Path.GetFileName(file.Key);
                File.Copy(file.Key, dest);

                fileIndex++;
                progress.Report((fileIndex, file.Key));
                keysToUpdate.Add((file.Key, dest));
            }

            foreach (var keyPair in keysToUpdate)
            {
                T value = files[keyPair.oldKey];
                files.Remove(keyPair.oldKey); // Remove the old key
                files[keyPair.newKey] = value; // Add the new key (new path)
            }
        }

        private string[] GetFoldersAfter(string path, string folderToFind)
        {
            // Split the path into folders
            string[] pathParts = path.Split(Path.DirectorySeparatorChar);

            // Find the index of the folder "www"
            int indexOfWww = Array.IndexOf(pathParts, folderToFind);

            if (indexOfWww != -1 && indexOfWww + 1 < pathParts.Length)
            {
                // Get all folders after "www"
                var foldersAfterWwwList = pathParts.Skip(indexOfWww + 1);
                var foldersAfterWww = foldersAfterWwwList.Take(foldersAfterWwwList.Count()-1).ToArray();

                return foldersAfterWww;
            }
            else
            {
                return new string[0];
            }
        }
    }
}

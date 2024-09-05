using OpenTK.Mathematics;
using OpenTK.Windowing.Common;
using OpenTK.Windowing.Desktop;
using OpenTK.Graphics.OpenGL4;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace RPGMakerMVEngine
{
    public class Engine : GameWindow
    {
        private int shaderProgram = -1;
        private int vao;

        public Engine(GameWindowSettings gameWindowSettings, NativeWindowSettings nativeWindowSettings)
            : base(gameWindowSettings, nativeWindowSettings)
        {
        }

        protected override void OnLoad()
        {
            base.OnLoad();
            GL.ClearColor(Color4.CornflowerBlue); // Set the clear color to a blue background

            string vertexShaderSource = LoadShaderSource("shaders/simple.vert");
            string fragmentShaderSource = LoadShaderSource("shaders/simple.frag");
            shaderProgram = CreateShaderProgram(vertexShaderSource, fragmentShaderSource);

            float[] vertices = {
                                   // Positions    X,   Y
                                    0.5f,  0.5f,  // Top-right
                                    0.5f, -0.5f,  // Bottom-right
                                   -0.5f, -0.5f,  // Bottom-left
                                   -0.5f,  0.5f   // Top-left
                               };
                
            uint[] indices = {
                                 0, 1, 3, // First Triangle
                                 1, 2, 3  // Second Triangle
                             };

            // Generate and bind a Vertex Array Object (VAO)
            GL.GenVertexArrays(1, out int vao);
            GL.BindVertexArray(vao);
            this.vao = vao;

            // Generate and bind a Vertex Buffer Object (VBO)
            GL.GenBuffers(1, out int vbo);
            GL.BindBuffer(BufferTarget.ArrayBuffer, vbo);
            GL.BufferData(BufferTarget.ArrayBuffer, vertices.Length * sizeof(float), vertices, BufferUsageHint.StaticDraw);

            // Generate and bind an Element Buffer Object (EBO)
            GL.GenBuffers(1, out int ebo);
            GL.BindBuffer(BufferTarget.ElementArrayBuffer, ebo);
            GL.BufferData(BufferTarget.ElementArrayBuffer, indices.Length * sizeof(uint), indices, BufferUsageHint.StaticDraw);

            // Set vertex attribute pointers
            GL.VertexAttribPointer(0, 2, VertexAttribPointerType.Float, false, 2 * sizeof(float), 0);
            GL.EnableVertexAttribArray(0);

            // Unbind VAO
            GL.BindVertexArray(0);
        }

        protected override void OnRenderFrame(FrameEventArgs args)
        {
            base.OnRenderFrame(args);

            GL.Clear(ClearBufferMask.ColorBufferBit);

            GL.UseProgram(shaderProgram);
            GL.BindVertexArray(vao);

            // Set up the model matrix for position, scale, etc.
            Matrix4 model = Matrix4.CreateTranslation(0.0f, 0.0f, 0.0f);
            int modelLoc = GL.GetUniformLocation(shaderProgram, "uModel");
            GL.UniformMatrix4(modelLoc, false, ref model);

            // Set up the rectangle color
            int colorLoc = GL.GetUniformLocation(shaderProgram, "uColor");
            GL.Uniform4(colorLoc, new Vector4(1.0f, 0.5f, 0.2f, 1.0f)); // Orange color

            // Draw the rectangle
            GL.DrawElements(PrimitiveType.Triangles, 6, DrawElementsType.UnsignedInt, 0);

            SwapBuffers();
        }

        protected override void OnResize(ResizeEventArgs e)
        {
            base.OnResize(e);
            GL.Viewport(0, 0, Size.X, Size.Y); // Set the viewport to the new window size
        }

        protected override void OnUnload()
        {
            base.OnUnload();
        }


        #region ShaderLoading
        public static int CreateShaderProgram(string vertexShaderSource, string fragmentShaderSource)
        {
            // Compile the vertex shader
            int vertexShader = CompileShader(ShaderType.VertexShader, vertexShaderSource);

            // Compile the fragment shader
            int fragmentShader = CompileShader(ShaderType.FragmentShader, fragmentShaderSource);

            // Link both shaders into a shader program
            int shaderProgram = GL.CreateProgram();
            GL.AttachShader(shaderProgram, vertexShader);
            GL.AttachShader(shaderProgram, fragmentShader);
            GL.LinkProgram(shaderProgram);

            // Check for linking errors
            GL.GetProgram(shaderProgram, GetProgramParameterName.LinkStatus, out int success);
            if (success == 0)
            {
                string infoLog = GL.GetProgramInfoLog(shaderProgram);
                Console.WriteLine($"ERROR: Shader Program Linking failed\n{infoLog}");
            }

            // Delete shaders after linking them into a program
            GL.DeleteShader(vertexShader);
            GL.DeleteShader(fragmentShader);

            return shaderProgram;
        }

        public static int CompileShader(ShaderType type, string source)
        {
            // Create a shader of the specified type (vertex or fragment)
            int shader = GL.CreateShader(type);

            // Set the shader source code and compile it
            GL.ShaderSource(shader, source);
            GL.CompileShader(shader);

            // Check for compilation errors
            GL.GetShader(shader, ShaderParameter.CompileStatus, out int success);
            if (success == 0)
            {
                string infoLog = GL.GetShaderInfoLog(shader);
                Console.WriteLine($"ERROR: {type} shader compilation failed\n{infoLog}");
            }

            return shader;
        }

        public static string LoadShaderSource(string filePath)
        {
            if (File.Exists(filePath))
            {
                return File.ReadAllText(filePath);
            }
            else
            {
                Console.WriteLine($"ERROR: Shader file not found at {filePath}");
                return string.Empty;
            }
        }
        #endregion
    }
}

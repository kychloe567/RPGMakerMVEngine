import esprima
import os
import shutil

class parser:
    def __init__(self, input_file, output_folder, additional_com):
        self.input_file = input_file
        self.com = additional_com

        if not os.path.exists("parsed"):
            os.makedirs("parsed")

        # Create the output folder if it doesn't exist
        if not os.path.exists(output_folder):
            os.makedirs(output_folder)
        else:
            shutil.rmtree(output_folder)
            os.makedirs(output_folder)

        # Read the JS file
        with open(self.input_file, 'r', encoding='utf-8') as file:
            self.code = file.read()

        # Parse the JS code into an AST (with comments, range, and loc enabled)
        ast = esprima.parseScript(self.code, loc=True, range=True, comment=True)

        # Collect all comments
        self.comments = ast.comments if hasattr(ast, 'comments') else []

        # Extract classes and their methods
        classes = self.extract_classes(ast)

        # Write each class to its own file
        for class_name, class_content in classes.items():
            output_file = os.path.join(output_folder, f'{class_name}.js')
            with open(output_file, 'w', encoding='utf-8') as class_file:
                # Write constructor function
                class_file.write(class_content['constructor'] + '\n\n')
                # Write methods/properties
                for method in class_content['methods']:
                    class_file.write(method + '\n')
            
            if self.com:
                print(f'Created: {class_name}.js')

    # Function to find relevant comments immediately before a specific code range
    def find_comments_before(self,range_start):
        result = []
        # Only capture comments that are directly before the code (within a few lines)
        for comment in self.comments:
            if comment.range[1] < range_start and range_start - comment.range[1] < 3:  # Limit the gap
                result.append(self.code[comment.range[0]:comment.range[1]].strip())
        return result

    # Function to extract class-like objects and their properties/methods
    def extract_classes(self, ast):
        classes = {}
        
        # Traverse AST nodes
        for node in ast.body:
            # Check for function declarations (these act as "classes")
            if node.type == 'FunctionDeclaration':
                class_name = node.id.name
                if node.range:
                    # Extract the constructor with its preceding comments
                    constructor_comments = self.find_comments_before(node.range[0])
                    constructor_code = '\n'.join(constructor_comments) + '\n' + self.code[node.range[0]:node.range[1]]
                    classes[class_name] = {
                        'constructor': constructor_code,  # Constructor function
                        'methods': []
                    }
                else:
                    classes[class_name] = {
                        'constructor': 'function {}() {{ /* constructor code not found */ }}'.format(class_name),
                        'methods': []
                    }

            # Check for assignments to add static methods or properties to the classes
            elif node.type == 'ExpressionStatement' and node.expression.type == 'AssignmentExpression':
                left = node.expression.left
                right = node.expression.right
                if left.type == 'MemberExpression' and left.object.type == 'Identifier':
                    class_name = left.object.name
                    if class_name in classes:
                        if node.range:
                            # Extract method/property with its preceding comments
                            method_comments = self.find_comments_before(node.range[0])
                            method_or_property = '\n'.join(method_comments) + '\n' + self.code[node.range[0]:node.range[1]]
                            classes[class_name]['methods'].append(method_or_property)
                        else:
                            classes[class_name]['methods'].append('// method or property code not found')

        return classes
    

# Get the current working directory
current_dir = os.getcwd()

# List all .js files in the current working directory
#js_files = [file for file in os.listdir(current_dir) if file.endswith('.js')]
js_files = []

# Print the list of .js files
for js_file in js_files:
    print(js_file + " STARTED!")
    pars = parser(js_file, "parsed\\" + js_file[0:-3], False)
    print(js_file + " DONE!")
    print("--------------------------------------")

"""
plugins = [file for file in os.listdir(current_dir + "\\plugins") if file.endswith(".js")]
for plugin in plugins:
    print(plugin + " STARTED!")
    pars = parser("plugins\\" + plugin, "parsed\\plugins\\" + plugin[0:-3], False)
    print(plugin + " DONE!")
    print("--------------------------------------")
"""
import os
import json

# Ruta de la carpeta de imágenes
image_folder = '../media/gallery'  # Ruta correcta según la estructura de carpetas
json_folder = '../json'  # Carpeta donde se guardará el JSON
json_file = 'gallery.json'

# Crear una lista para almacenar las rutas de las imágenes
image_list = []

# Recorrer todos los archivos en la carpeta de imágenes
for filename in os.listdir(image_folder):
    if filename.endswith(('.png', '.jpg', '.jpeg', '.gif')):  # Extensiones de imagen comunes
        image_path = os.path.join('./media/gallery', filename)  # Ruta relativa para el navegador
        image_list.append("src":image_path)

# Guardar la lista en un archivo JSON
with open(os.path.join(json_folder, json_file), 'w') as f:
    json.dump(image_list, f, indent=4)

print(f'Archivo {json_file} generado en la carpeta {json_folder}.')
